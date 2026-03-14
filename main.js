/* ============================================
   main.js — Galaxie Musicale
   Three.js r128
   ============================================ */

// ── SETUP ──
const canvas   = document.getElementById('c');
const tooltip  = document.getElementById('tooltip');
const searchEl = document.getElementById('search');
const searchResults = document.getElementById('search-results');

const W = window.innerWidth;
const H = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(W, H);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x00000a, 1);

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 2000);
camera.position.set(0, 0, 280);

// Lights
scene.add(new THREE.AmbientLight(0xffffff, 0.4));
const sun = new THREE.PointLight(0xffffff, 1.4, 600);
sun.position.set(80, 80, 80);
scene.add(sun);
const sun2 = new THREE.PointLight(0x4466ff, 0.4, 400);
sun2.position.set(-80, -40, -60);
scene.add(sun2);

// ── BACKGROUND STARS — phosphor green + amber ──
(function buildStars() {
  const geo = new THREE.BufferGeometry();
  const pos = [], col = [];
  for (let i = 0; i < 3000; i++) {
    const r = 400 + Math.random() * 600;
    const phi   = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * Math.PI * 2;
    pos.push(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
    const t = Math.random();
    if (t > 0.85) {
      col.push(1.0, 0.69, 0.0);
    } else {
      const b = 0.15 + Math.random() * 0.5;
      col.push(0, b, b * 0.25);
    }
  }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color',    new THREE.Float32BufferAttribute(col, 3));
  scene.add(new THREE.Points(geo,
    new THREE.PointsMaterial({ size: 0.5, vertexColors: true, sizeAttenuation: true })
  ));
})();

// ── STATE ──
let mode           = 'galaxy';   // 'galaxy' | 'artist'
let currentArtist  = null;
let targetCamZ     = 220;
let rotY = 0, rotX = 0;
let isDragging     = false;
let lastMouse      = { x: 0, y: 0 };
const mouse        = new THREE.Vector2(-9, -9);

const galaxyGroup  = new THREE.Group();
const artistGroup  = new THREE.Group();
scene.add(galaxyGroup);
scene.add(artistGroup);
artistGroup.visible = false;

// ── RAYCASTER ──
const raycaster = new THREE.Raycaster();
raycaster.params.Points = { threshold: 1.2 };

// ── STATS ──
const totalArtists = MUSIC_DATA.length;
const totalTracks  = MUSIC_DATA.reduce((s, a) => s + a.trackCount, 0);
document.getElementById('stat-artists').textContent = `${totalArtists} artistes`;
document.getElementById('stat-tracks').textContent  = `${totalTracks.toLocaleString('fr-FR')} titres`;

// ── GALAXY : place planets on a sphere (fibonacci) ──
const planetMeshes = [];
const GALAXY_R = 120;

function fibonacciSphere(n, r) {
  const pts = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y     = 1 - (i / (n - 1)) * 2;
    const rad   = Math.sqrt(1 - y * y);
    const theta = phi * i;
    pts.push(new THREE.Vector3(
      r * rad * Math.cos(theta),
      r * y,
      r * rad * Math.sin(theta)
    ));
  }
  return pts;
}

const positions = fibonacciSphere(MUSIC_DATA.length, GALAXY_R);

MUSIC_DATA.forEach((artist, i) => {
  const radius = 1.4 + (artist.trackCount / 133) * 3.5;
  const color  = new THREE.Color(artist.color);

  // Planet sphere
  const geo  = new THREE.SphereGeometry(radius, 32, 32);
  const mat  = new THREE.MeshStandardMaterial({
    color, roughness: 0.55, metalness: 0.12
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(positions[i]);
  mesh.userData = { artist, index: i, radius };
  galaxyGroup.add(mesh);
  planetMeshes.push(mesh);

  // Orbital ring (vinyl)
  const ringGeo = new THREE.RingGeometry(radius + 0.6, radius + 1.3, 64);
  const ringMat = new THREE.MeshBasicMaterial({
    color, side: THREE.DoubleSide, transparent: true, opacity: 0.22
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI * 0.5 + (Math.random() - 0.5) * 0.4;
  ring.rotation.z = (Math.random() - 0.5) * 0.4;
  mesh.add(ring);

  // Micro dots (tracks)
  const dotPos = [];
  const displayCount = Math.min(artist.trackCount, 30);
  for (let t = 0; t < displayCount; t++) {
    const phi2   = Math.acos(2 * Math.random() - 1);
    const theta2 = Math.random() * Math.PI * 2;
    const r2     = radius + 1.8 + Math.random() * 1.8;
    dotPos.push(
      r2 * Math.sin(phi2) * Math.cos(theta2),
      r2 * Math.sin(phi2) * Math.sin(theta2),
      r2 * Math.cos(phi2)
    );
  }
  const dotGeo = new THREE.BufferGeometry();
  dotGeo.setAttribute('position', new THREE.Float32BufferAttribute(dotPos, 3));
  mesh.add(new THREE.Points(dotGeo,
    new THREE.PointsMaterial({ color, size: 0.15, transparent: true, opacity: 0.5 })
  ));
});

// ── ARTIST VIEW ──
let artistTrackPoints = null;
let artistTrackData   = [];

function enterArtist(artist) {
  mode          = 'artist';
  currentArtist = artist;

  galaxyGroup.visible = false;
  artistGroup.visible = true;
  artistGroup.clear();
  artistTrackPoints = null;
  artistTrackData   = [];

  // UI
  document.getElementById('back-btn').style.display   = 'block';
  document.getElementById('top-bar').style.display    = 'none';
  document.getElementById('hint').style.opacity       = '0';
  document.getElementById('artist-info').style.display = 'block';
  document.getElementById('artist-name').textContent  = artist.name;
  document.getElementById('artist-meta').textContent  =
    `${artist.trackCount} titres · ${artist.genre}`;

  const color  = new THREE.Color(artist.color);
  const radius = 6;

  // Central planet
  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 64, 64),
    new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.18 })
  );
  artistGroup.add(planet);

  // Vinyl rings (4 concentric)
  for (let r = 0; r < 5; r++) {
    const ir  = radius + 1.5 + r * 1.1;
    const or  = ir + 0.55;
    const rGeo = new THREE.RingGeometry(ir, or, 128);
    const rMat = new THREE.MeshBasicMaterial({
      color, side: THREE.DoubleSide,
      transparent: true, opacity: 0.38 - r * 0.06
    });
    const ring = new THREE.Mesh(rGeo, rMat);
    ring.rotation.x = Math.PI * 0.12;
    artistGroup.add(ring);
  }

  // Track points distributed on sphere around planet
  const tracks   = artist.tracks;
  const tPos     = [];
  const tColors  = [];

  tracks.forEach((track, i) => {
    const phi   = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * Math.PI * 2;
    const dist  = 12 + Math.random() * 10;
    const x = dist * Math.sin(phi) * Math.cos(theta);
    const y = dist * Math.sin(phi) * Math.sin(theta);
    const z = dist * Math.cos(phi);
    tPos.push(x, y, z);

    const c = color.clone().offsetHSL(0, 0, (Math.random() - 0.5) * 0.35);
    tColors.push(c.r, c.g, c.b);

    artistTrackData.push({
      artist: artist.name,
      track:  track.name,
      album:  track.album,
      year:   track.year,
      color:  artist.color,
      pos:    new THREE.Vector3(x, y, z),
    });
  });

  const tGeo = new THREE.BufferGeometry();
  tGeo.setAttribute('position', new THREE.Float32BufferAttribute(tPos, 3));
  tGeo.setAttribute('color',    new THREE.Float32BufferAttribute(tColors, 3));

  artistTrackPoints = new THREE.Points(tGeo,
    new THREE.PointsMaterial({ size: 0.55, vertexColors: true, sizeAttenuation: true })
  );
  artistGroup.add(artistTrackPoints);

  // Camera
  targetCamZ = 36;
  rotY = 0; rotX = 0;
}

function backToGalaxy() {
  mode          = 'galaxy';
  currentArtist = null;

  galaxyGroup.visible = true;
  artistGroup.visible = false;
  artistGroup.clear();
  artistTrackPoints = null;

  document.getElementById('back-btn').style.display    = 'none';
  document.getElementById('top-bar').style.display     = 'flex';
  document.getElementById('hint').style.opacity        = '1';
  document.getElementById('artist-info').style.display = 'none';

  hideTooltip();
  targetCamZ = 220;
  rotY = 0; rotX = 0;
}

// ── OSCILLOSCOPE TOOLTIP ──
let oscRAF = null;
let oscPhase = 0;

function buildWaveParams(trackName) {
  // Dériver des paramètres de forme d'onde depuis le nom du morceau
  let seed = 0;
  for (let i = 0; i < trackName.length; i++) seed += trackName.charCodeAt(i);
  const waves = [];
  const count = 2 + (seed % 3); // 2 à 4 harmoniques
  for (let i = 0; i < count; i++) {
    waves.push({
      freq:  0.8 + ((seed * (i + 1) * 37) % 100) / 60,
      amp:   0.25 + ((seed * (i + 1) * 13) % 100) / 180,
      phase: ((seed * (i + 1) * 7)  % 100) / 16,
    });
  }
  return waves;
}

function drawOscilloscope(canvas2d, color, waves, phase) {
  const W2 = canvas2d.width, H2 = canvas2d.height;
  const ctx = canvas2d.getContext('2d');
  ctx.clearRect(0, 0, W2, H2);

  // Fond
  ctx.fillStyle = '#00000a';
  ctx.fillRect(0, 0, W2, H2);

  // Grille — style CRT
  ctx.strokeStyle = 'rgba(0,255,65,0.07)';
  ctx.lineWidth = 0.5;
  const cols = 8, rows = 4;
  for (let i = 1; i < cols; i++) {
    ctx.beginPath();
    ctx.moveTo((W2 / cols) * i, 0);
    ctx.lineTo((W2 / cols) * i, H2);
    ctx.stroke();
  }
  for (let i = 1; i < rows; i++) {
    ctx.beginPath();
    ctx.moveTo(0, (H2 / rows) * i);
    ctx.lineTo(W2, (H2 / rows) * i);
    ctx.stroke();
  }
  // Axes centraux plus visibles
  ctx.strokeStyle = 'rgba(0,255,65,0.18)';
  ctx.beginPath(); ctx.moveTo(W2/2, 0); ctx.lineTo(W2/2, H2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, H2/2); ctx.lineTo(W2, H2/2); ctx.stroke();

  // Halo glow — ligne fantôme décalée
  ctx.strokeStyle = color.replace(')', ',0.12)').replace('rgb', 'rgba');
  ctx.lineWidth = 4;
  ctx.beginPath();
  for (let x = 0; x < W2; x++) {
    const t = (x / W2) * Math.PI * 2;
    let y = 0;
    for (const w of waves) y += Math.sin(t * w.freq * 3 + phase * w.phase) * w.amp;
    const py = H2 / 2 + y * H2 * 0.38;
    x === 0 ? ctx.moveTo(x, py) : ctx.lineTo(x, py);
  }
  ctx.stroke();

  // Ligne principale phosphore
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.shadowColor = color;
  ctx.shadowBlur = 6;
  ctx.beginPath();
  for (let x = 0; x < W2; x++) {
    const t = (x / W2) * Math.PI * 2;
    let y = 0;
    for (const w of waves) y += Math.sin(t * w.freq * 3 + phase * w.phase) * w.amp;
    const py = H2 / 2 + y * H2 * 0.38;
    x === 0 ? ctx.moveTo(x, py) : ctx.lineTo(x, py);
  }
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Points de pic — petites croix sur les extrema
  ctx.fillStyle = color;
  let prevY = null;
  let rising = null;
  for (let x = 2; x < W2 - 2; x += 2) {
    const t = (x / W2) * Math.PI * 2;
    let y = 0;
    for (const w of waves) y += Math.sin(t * w.freq * 3 + phase * w.phase) * w.amp;
    const py = H2 / 2 + y * H2 * 0.38;
    if (prevY !== null) {
      const nowRising = py < prevY;
      if (rising !== null && nowRising !== rising) {
        // extremum — dessiner un petit +
        ctx.fillRect(x - 3, prevY - 0.5, 6, 1);
        ctx.fillRect(x - 0.5, prevY - 3, 1, 6);
      }
      rising = nowRising;
    }
    prevY = py;
  }
}

function showTooltip(data, mx, my) {
  document.getElementById('tt-artist').textContent = data.artist;
  document.getElementById('tt-track').textContent  = data.track;
  document.getElementById('tt-album').textContent  = data.album + (data.year ? ` · ${data.year}` : '');

  const osc = document.getElementById('tt-osc');
  const waves = buildWaveParams(data.track);
  const col = data.color;

  // Stop previous animation
  if (oscRAF) { cancelAnimationFrame(oscRAF); oscRAF = null; }

  function animate2d() {
    oscPhase += 0.04;
    drawOscilloscope(osc, col, waves, oscPhase);
    oscRAF = requestAnimationFrame(animate2d);
  }
  animate2d();

  tooltip.style.display = 'block';
  document.getElementById('tt-color-bar').style.background = col;
  const tx = Math.min(mx + 16, window.innerWidth  - 280);
  const ty = Math.min(my - 10, window.innerHeight - 180);
  tooltip.style.left = tx + 'px';
  tooltip.style.top  = ty + 'px';
}

function hideTooltip() {
  tooltip.style.display = 'none';
  if (oscRAF) { cancelAnimationFrame(oscRAF); oscRAF = null; }
}

// ── PLANET TOOLTIP (galaxy mode) ──
function showPlanetTooltip(artist, mx, my) {
  document.getElementById('tt-color-bar').style.background = artist.color;
  document.getElementById('tt-artist').textContent = artist.name;
  document.getElementById('tt-track').textContent  = `${artist.trackCount} titres`;
  document.getElementById('tt-album').textContent  = artist.genre + ' · Cliquer pour explorer';
  tooltip.style.display = 'block';
  const tx = Math.min(mx + 16, window.innerWidth  - 260);
  const ty = Math.min(my - 10, window.innerHeight - 100);
  tooltip.style.left = tx + 'px';
  tooltip.style.top  = ty + 'px';
}

// ── EVENTS ──
canvas.addEventListener('mousemove', e => {
  // Custom cursor
  const cur = document.getElementById('cursor');
  cur.style.left = e.clientX + 'px';
  cur.style.top  = e.clientY + 'px';

  const mx = e.clientX, my = e.clientY;
  mouse.set((mx / W) * 2 - 1, -(my / H) * 2 + 1);

  if (isDragging) {
    const dx = mx - lastMouse.x;
    const dy = my - lastMouse.y;
    rotY += dx * 0.004;
    rotX += dy * 0.004;
    rotX = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, rotX));
    lastMouse = { x: mx, y: my };
    hideTooltip();
    return;
  }

  lastMouse = { x: mx, y: my };

  raycaster.setFromCamera(mouse, camera);

  if (mode === 'artist' && artistTrackPoints) {
    const hits = raycaster.intersectObject(artistTrackPoints);
    if (hits.length > 0) {
      const idx = hits[0].index;
      if (artistTrackData[idx]) {
        showTooltip(artistTrackData[idx], mx, my);
        document.getElementById('cursor').classList.add('hover');
        return;
      }
    }
    hideTooltip();
    document.getElementById('cursor').classList.remove('hover');
  } else if (mode === 'galaxy') {
    const hits = raycaster.intersectObjects(planetMeshes, false);
    if (hits.length > 0) {
      showPlanetTooltip(hits[0].object.userData.artist, mx, my);
      document.getElementById('cursor').classList.add('hover');
      return;
    }
    hideTooltip();
    document.getElementById('cursor').classList.remove('hover');
  }
});

canvas.addEventListener('mousedown', e => {
  isDragging = true;
  lastMouse  = { x: e.clientX, y: e.clientY };
});

canvas.addEventListener('mouseup',    () => { isDragging = false; });
canvas.addEventListener('mouseleave', () => { isDragging = false; hideTooltip(); });

canvas.addEventListener('click', e => {
  if (isDragging) return;
  raycaster.setFromCamera(mouse, camera);
  if (mode === 'galaxy') {
    const hits = raycaster.intersectObjects(planetMeshes, false);
    if (hits.length > 0) enterArtist(hits[0].object.userData.artist);
  }
});

canvas.addEventListener('wheel', e => {
  const min = mode === 'artist' ? 15 : 60;
  const max = mode === 'artist' ? 60 : 350;
  targetCamZ = Math.max(min, Math.min(max, targetCamZ + e.deltaY * 0.08));
}, { passive: true });

// ── SEARCH ──
searchEl.addEventListener('input', () => {
  const q = searchEl.value.trim().toLowerCase();
  searchResults.innerHTML = '';
  if (q.length < 1) { searchResults.classList.remove('open'); return; }

  const matches = MUSIC_DATA
    .filter(a => a.name.toLowerCase().includes(q))
    .slice(0, 12);

  if (matches.length === 0) { searchResults.classList.remove('open'); return; }

  matches.forEach(artist => {
    const item = document.createElement('div');
    item.className = 'sr-item';
    item.innerHTML = `
      <div class="sr-dot" style="background:${artist.color}"></div>
      <div class="sr-name">${artist.name}</div>
      <div class="sr-count">${artist.trackCount}</div>
    `;
    item.addEventListener('click', () => {
      searchEl.value = '';
      searchResults.classList.remove('open');
      enterArtist(artist);
    });
    searchResults.appendChild(item);
  });

  searchResults.classList.add('open');
});

document.addEventListener('click', e => {
  if (!e.target.closest('#search-wrap')) searchResults.classList.remove('open');
});

// ── RESIZE ──
window.addEventListener('resize', () => {
  const W2 = window.innerWidth, H2 = window.innerHeight;
  camera.aspect = W2 / H2;
  camera.updateProjectionMatrix();
  renderer.setSize(W2, H2);
});

// ── ANIMATE ──
let clock = 0;

function animate() {
  requestAnimationFrame(animate);
  clock += 0.003;

  // Smooth camera zoom
  camera.position.z += (targetCamZ - camera.position.z) * 0.07;

  // Auto-rotation when not dragging
  if (!isDragging) {
    rotY += mode === 'galaxy' ? 0.0015 : 0.002;
  }

  if (mode === 'galaxy') {
    galaxyGroup.rotation.y = rotY;
    galaxyGroup.rotation.x = rotX;
    // Gentle planet self-rotation
    planetMeshes.forEach((m, i) => {
      m.rotation.y += 0.002 + i * 0.0002;
    });
  } else {
    artistGroup.rotation.y = rotY;
    artistGroup.rotation.x = rotX;
  }

  renderer.render(scene, camera);
}

animate();