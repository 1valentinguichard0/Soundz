// ============================================
// data.js — Bibliothèque musicale
// 325 artistes · 8326 titres
// Pour ajouter un artiste : copier un bloc et modifier.
// ============================================

const MUSIC_DATA = [
  {
    "name": "SCH",
    "color": "#7F77DD",
    "genre": "Hip-Hop/Rap",
    "trackCount": 133,
    "albums": [
      "JVLIVS II",
      "JVLIVS Prequel : Giulio",
      "JVLIVS",
      "Rooftop",
      "Deo Favente",
      "JVLIVS III : Ad Finem",
      "A7",
      "Anarchie",
      "R.I.P.R.O, Vol. 1"
    ],
    "tracks": [
      {
        "name": "Le baptême",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "Prequel",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "Crois-moi",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "Garcimore",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "La recette",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "Cannelloni",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "Les hommes aux yeux noirs",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "Quoi",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "Beaux-arts",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "La renaissance",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "Balafres",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "Gris",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "Ciel bleu",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "Jimmy Twice",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "Hells Kitchen",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "L'Opinel",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "Calabre",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "Batterie vide",
        "album": "JVLIVS Prequel : Giulio",
        "year": 2024
      },
      {
        "name": "Gibraltar",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Marché noir",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Fournaise",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Aluminium",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Grand bain",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Crack",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "La battue",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Zone à danger",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Euro",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Assoces",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Parano",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Corrida",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Le coup d’avance",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Raisons",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Plus rien à se dire",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Mode Akimbo (feat. Jul)",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Mafia",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Fantôme (feat. Le Rat Luciano et Jul)",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "Tempête",
        "album": "JVLIVS II",
        "year": 2021
      },
      {
        "name": "John Lennon",
        "album": "A7",
        "year": 2015
      },
      {
        "name": "Solides",
        "album": "A7",
        "year": 2015
      },
      {
        "name": "Gedeon",
        "album": "A7",
        "year": 2015
      },
      {
        "name": "Rêves de gosse",
        "album": "A7",
        "year": 2015
      },
      {
        "name": "Genny & Ciiro",
        "album": "A7",
        "year": 2015
      },
      {
        "name": "Gomorra",
        "album": "A7",
        "year": 2015
      },
      {
        "name": "Mauvaises idées",
        "album": "A7",
        "year": 2015
      },
      {
        "name": "Liquide (feat. Lacrim)",
        "album": "A7",
        "year": 2015
      },
      {
        "name": "Pas de manières (feat. Sadek & Lapso)",
        "album": "A7",
        "year": 2015
      },
      {
        "name": "Drogue prohibée",
        "album": "A7",
        "year": 2015
      },
      {
        "name": "Champs-Élysées",
        "album": "A7",
        "year": 2015
      },
      {
        "name": "J'reviens de loin",
        "album": "A7",
        "year": 2015
      },
      {
        "name": "Fusil",
        "album": "A7",
        "year": 2015
      },
      {
        "name": "Anarchie",
        "album": "Anarchie",
        "year": 2016
      },
      {
        "name": "Trop énorme",
        "album": "Anarchie",
        "year": 2016
      },
      {
        "name": "Je la connais",
        "album": "Anarchie",
        "year": 2016
      },
      {
        "name": "Cartine Cartier (feat. Sfera Ebbasta)",
        "album": "Anarchie",
        "year": 2016
      },
      {
        "name": "Le doc",
        "album": "Anarchie",
        "year": 2016
      },
      {
        "name": "Neuer",
        "album": "Anarchie",
        "year": 2016
      },
      {
        "name": "Alleluia",
        "album": "Anarchie",
        "year": 2016
      },
      {
        "name": "Allo maman",
        "album": "Anarchie",
        "year": 2016
      },
      {
        "name": "Quand on était momes",
        "album": "Anarchie",
        "year": 2016
      },
      {
        "name": "Dix-neuf",
        "album": "Anarchie",
        "year": 2016
      },
      {
        "name": "Himalaya",
        "album": "Anarchie",
        "year": 2016
      },
      {
        "name": "Essuie tes larmes",
        "album": "Anarchie",
        "year": 2016
      },
      {
        "name": "Murcielago",
        "album": "Anarchie",
        "year": 2016
      },
      {
        "name": "Comme si",
        "album": "Deo Favente",
        "year": 2017
      },
      {
        "name": "Nino Brown",
        "album": "Deo Favente",
        "year": 2017
      },
      {
        "name": "Allez leur dire",
        "album": "Deo Favente",
        "year": 2017
      },
      {
        "name": "Day Date",
        "album": "Deo Favente",
        "year": 2017
      },
      {
        "name": "Mac 11",
        "album": "Deo Favente",
        "year": 2017
      },
      {
        "name": "Les années de plomb",
        "album": "Deo Favente",
        "year": 2017
      },
      {
        "name": "Pas la paix",
        "album": "Deo Favente",
        "year": 2017
      },
      {
        "name": "J'attends",
        "album": "Deo Favente",
        "year": 2017
      },
      {
        "name": "Ma Kush",
        "album": "Deo Favente",
        "year": 2017
      },
      {
        "name": "Poupée Russe",
        "album": "Deo Favente",
        "year": 2017
      },
      {
        "name": "6.45I",
        "album": "Deo Favente",
        "year": 2016
      },
      {
        "name": "Slow Mo",
        "album": "Deo Favente",
        "year": 2017
      },
      {
        "name": "La nuit",
        "album": "Deo Favente",
        "year": 2017
      },
      {
        "name": "Ça va (feat. Lacrim)",
        "album": "Deo Favente",
        "year": 2017
      },
      {
        "name": "Météore",
        "album": "Deo Favente",
        "year": 2017
      },
      {
        "name": "Temps mort",
        "album": "Deo Favente",
        "year": 2017
      },
      {
        "name": "Intro - Le déluge",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "VNTM",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "Pharmacie",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "Tokarev",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "Interlude - 420 mètres",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "Otto",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "Skydweller",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "Facile",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "Prêt à partir (feat. Ninho)",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "Mort de rire",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "Ivresse & Hennessy",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "J't'en prie",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "Interlude - Beretta 92FS",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "Le code",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "Incompris",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "Ciel rouge",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "Bénéfice",
        "album": "JVLIVS",
        "year": 2018
      },
      {
        "name": "Intro - Ego Sum",
        "album": "JVLIVS III : Ad Finem",
        "year": 2024
      },
      {
        "name": "Stigmates",
        "album": "JVLIVS III : Ad Finem",
        "year": 2024
      },
      {
        "name": "Le taulier",
        "album": "JVLIVS III : Ad Finem",
        "year": 2024
      },
      {
        "name": "Dans la tête",
        "album": "JVLIVS III : Ad Finem",
        "year": 2024
      }
    ]
  },
  {
    "name": "Kanye West",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 126,
    "albums": [
      "Donda (Deluxe)",
      "The Life of Pablo",
      "The College Dropout",
      "Graduation",
      "My Beautiful Dark Twisted Fantasy (Deluxe Edition (Explicit))",
      "My Beautiful Dark Twisted Fantasy",
      "Yeezus",
      "JESUS IS KING",
      "ye"
    ],
    "tracks": [
      {
        "name": "Waves",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Ultralight Beam",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Father Stretch My Hands, Pt. 1",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Pt. 2",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Famous",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Feedback",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Low Lights",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Highlights",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Freestyle 4",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "I Love Kanye",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "FML",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Real Friends",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Wolves",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Frank's Track",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Siiiiiiiiilver Surffffeeeeer Intermission",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "30 Hours",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "No More Parties in LA",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Facts (Charlie Heat Version)",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Fade",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Saint Pablo",
        "album": "The Life of Pablo",
        "year": 2016
      },
      {
        "name": "Dark Fantasy",
        "album": "My Beautiful Dark Twisted Fantasy",
        "year": 2010
      },
      {
        "name": "Gorgeous (feat. Kid Cudi & Raekwon)",
        "album": "My Beautiful Dark Twisted Fantasy",
        "year": 2010
      },
      {
        "name": "Power",
        "album": "My Beautiful Dark Twisted Fantasy",
        "year": 2010
      },
      {
        "name": "All of the Lights (Interlude)",
        "album": "My Beautiful Dark Twisted Fantasy",
        "year": 2010
      },
      {
        "name": "All of the Lights",
        "album": "My Beautiful Dark Twisted Fantasy",
        "year": 2010
      },
      {
        "name": "Monster (feat. JAŸ-Z, Rick Ross, Nicki Minaj & Bon Iver)",
        "album": "My Beautiful Dark Twisted Fantasy",
        "year": 2010
      },
      {
        "name": "So Appalled (feat. JAŸ-Z, Pusha T, Prynce Cy Hi, Swizz Beatz & RZA)",
        "album": "My Beautiful Dark Twisted Fantasy",
        "year": 2010
      },
      {
        "name": "Devil In a New Dress (feat. Rick Ross)",
        "album": "My Beautiful Dark Twisted Fantasy",
        "year": 2010
      },
      {
        "name": "Runaway (feat. Pusha T)",
        "album": "My Beautiful Dark Twisted Fantasy",
        "year": 2010
      },
      {
        "name": "Hell of a Life",
        "album": "My Beautiful Dark Twisted Fantasy",
        "year": 2010
      },
      {
        "name": "Blame Game (feat. John Legend)",
        "album": "My Beautiful Dark Twisted Fantasy",
        "year": 2010
      },
      {
        "name": "Lost In the World (feat. Bon Iver)",
        "album": "My Beautiful Dark Twisted Fantasy",
        "year": 2010
      },
      {
        "name": "Who Will Survive In America",
        "album": "My Beautiful Dark Twisted Fantasy",
        "year": 2010
      },
      {
        "name": "Good Morning",
        "album": "Graduation",
        "year": 2007
      },
      {
        "name": "Champion",
        "album": "Graduation",
        "year": 2007
      },
      {
        "name": "Stronger",
        "album": "Graduation",
        "year": 2007
      },
      {
        "name": "I Wonder",
        "album": "Graduation",
        "year": 2007
      },
      {
        "name": "Good Life (feat. T-Pain)",
        "album": "Graduation",
        "year": 2007
      },
      {
        "name": "Can't Tell Me Nothing",
        "album": "Graduation",
        "year": 2007
      },
      {
        "name": "Barry Bonds (feat. Lil Wayne)",
        "album": "Graduation",
        "year": 2007
      },
      {
        "name": "Drunk and Hot Girls (feat. Mos Def)",
        "album": "Graduation",
        "year": 2007
      },
      {
        "name": "Flashing Lights (feat. Dwele)",
        "album": "Graduation",
        "year": 2007
      },
      {
        "name": "Everything I Am (feat. DJ Premier)",
        "album": "Graduation",
        "year": 2007
      },
      {
        "name": "The Glory",
        "album": "Graduation",
        "year": 2007
      },
      {
        "name": "Homecoming (feat. Chris Martin)",
        "album": "Graduation",
        "year": 2007
      },
      {
        "name": "Big Brother",
        "album": "Graduation",
        "year": 2007
      },
      {
        "name": "Good Night (feat. Mos Def & Al Be Back)",
        "album": "Graduation",
        "year": 2007
      },
      {
        "name": "Intro",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "We Don't Care",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "Graduation Day",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "All Falls Down (feat. Syleena Johnson)",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "I'll Fly Away",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "Spaceship (feat. GLC & Consequence)",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "Jesus Walks",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "Never Let Me Down (feat. JAŸ-Z & J. Ivy)",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "Get Em High (feat. Talib Kweli & Common)",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "Workout Plan",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "The New Workout Plan",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "Breathe In Breathe Out (feat. Ludacris)",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "School Spirit Skit 1",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "School Spirit",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "School Spirit Skit 2",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "Lil Jimmy Skit",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "Two Words (feat. Mos Def, Freeway & The Boys Choir of Harlem)",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "Through The Wire",
        "album": "The College Dropout",
        "year": 2003
      },
      {
        "name": "Family Business",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "Last Call",
        "album": "The College Dropout",
        "year": 2004
      },
      {
        "name": "Donda Chant",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Hurricane",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Moon",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Off The Grid",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Jail",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Praise God",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Come to Life",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Believe What I Say",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "No Child Left Behind",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Up From The Ashes",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Remote Control pt 2",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "God Breathed",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Lord I Need You",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "24",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Junya",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Never Abandon Your Family",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Donda",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Keep My Spirit Alive",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Jesus Lord pt 2",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Heaven and Hell",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Remote Control",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Tell The Vision",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Jonah",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Pure Souls",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Ok Ok",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "New Again",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Jesus Lord",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Ok Ok pt 2",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Junya pt 2",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Jail pt 2",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "Keep My Spirit Alive pt 2",
        "album": "Donda (Deluxe)",
        "year": 2021
      },
      {
        "name": "On Sight",
        "album": "Yeezus",
        "year": 2013
      },
      {
        "name": "Black Skinhead",
        "album": "Yeezus",
        "year": 2013
      }
    ]
  },
  {
    "name": "Damso",
    "color": "#1D9E75",
    "genre": "Hip-Hop/Rap",
    "trackCount": 115,
    "albums": [
      "QALF infinity",
      "Ipséité",
      "Lithopédion",
      "BĒYĀH",
      "Batterie faible",
      "VIEUX SONS",
      "J'AI MENTI.",
      "Fais-moi un Vie - Single",
      "J’avais juste envie d’écrire. - Single",
      "Œveillé - Single"
    ],
    "tracks": [
      {
        "name": "Θ. Macarena",
        "album": "Ipséité",
        "year": 2017
      },
      {
        "name": "Ipséité (Bonus Track)",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "B. #QuedusaalVie",
        "album": "Ipséité",
        "year": 2017
      },
      {
        "name": "N. J Respect R",
        "album": "Ipséité",
        "year": 2017
      },
      {
        "name": "Γ. Mosaïque solitaire",
        "album": "Ipséité",
        "year": 2017
      },
      {
        "name": "Introduction (Damso / Lithopédion)",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "Festival de rêves",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "Baltringue",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "Julien",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "Silence (feat. Angèle)",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "Feu de bois",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "Même Issue",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "Smog",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "60 Années",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "Aux paradis",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "Dix leurres",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "Nmi",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "Perplexe",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "Tard la Night",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "Noir meilleur",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "William",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "Ζ. Kietu",
        "album": "Ipséité",
        "year": 2017
      },
      {
        "name": "Ι. Peur d'être père (feat. Youri)",
        "album": "Ipséité",
        "year": 2017
      },
      {
        "name": "Λ. Lové",
        "album": "Ipséité",
        "year": 2017
      },
      {
        "name": "Δ. Dieu ne ment jamais",
        "album": "Ipséité",
        "year": 2017
      },
      {
        "name": "COMMENT FAIRE UN TUBE",
        "album": "VIEUX SONS",
        "year": 2015
      },
      {
        "name": "EGO",
        "album": "VIEUX SONS",
        "year": 2014
      },
      {
        "name": "BROUILLARD",
        "album": "VIEUX SONS",
        "year": 2012
      },
      {
        "name": "ON N'EST JAMAIS MIEUX COMPRIS QUE PAR SOI-MÊME",
        "album": "VIEUX SONS",
        "year": 2014
      },
      {
        "name": "MA PUTAIN",
        "album": "VIEUX SONS",
        "year": 2015
      },
      {
        "name": "LE TALENT NE SUFFIT PAS",
        "album": "VIEUX SONS",
        "year": 2015
      },
      {
        "name": "VAGABOND",
        "album": "VIEUX SONS",
        "year": 2015
      },
      {
        "name": "CINÉASTE",
        "album": "VIEUX SONS",
        "year": 2015
      },
      {
        "name": "BLASE",
        "album": "VIEUX SONS",
        "year": 2015
      },
      {
        "name": "COSMOS (ma première chanson, j'avais 16 ans)",
        "album": "VIEUX SONS",
        "year": 2024
      },
      {
        "name": "CHROME",
        "album": "J'AI MENTI.",
        "year": 2024
      },
      {
        "name": "Laisse-moi tranquille.",
        "album": "J'AI MENTI.",
        "year": 2024
      },
      {
        "name": "Mony (feat. Michkavie)",
        "album": "J'AI MENTI.",
        "year": 2024
      },
      {
        "name": "Schéma",
        "album": "J'AI MENTI.",
        "year": 2024
      },
      {
        "name": "Conséquences",
        "album": "J'AI MENTI.",
        "year": 2024
      },
      {
        "name": "24h plus tôt",
        "album": "J'AI MENTI.",
        "year": 2024
      },
      {
        "name": "La rue est morte.",
        "album": "J'AI MENTI.",
        "year": 2024
      },
      {
        "name": "DAMSAUTISTE",
        "album": "J'AI MENTI.",
        "year": 2024
      },
      {
        "name": "Périscope",
        "album": "Batterie faible",
        "year": 2016
      },
      {
        "name": "Débrouillard",
        "album": "Batterie faible",
        "year": 2016
      },
      {
        "name": "Exutoire",
        "album": "Batterie faible",
        "year": 2016
      },
      {
        "name": "Quotidien de baisé",
        "album": "Batterie faible",
        "year": 2016
      },
      {
        "name": "Sombre",
        "album": "Batterie faible",
        "year": 2016
      },
      {
        "name": "QuedelaVie",
        "album": "Batterie faible",
        "year": 2016
      },
      {
        "name": "Graine de sablier",
        "album": "Batterie faible",
        "year": 2016
      },
      {
        "name": "Beautiful",
        "album": "Batterie faible",
        "year": 2016
      },
      {
        "name": "BruxellesVie",
        "album": "Batterie faible",
        "year": 2016
      },
      {
        "name": "Autotune",
        "album": "Batterie faible",
        "year": 2016
      },
      {
        "name": "Monde",
        "album": "Batterie faible",
        "year": 2016
      },
      {
        "name": "Α. Nwaar Is The New Black",
        "album": "Ipséité",
        "year": 2017
      },
      {
        "name": "Ε. Signaler",
        "album": "Ipséité",
        "year": 2017
      },
      {
        "name": "Η. Gova",
        "album": "Ipséité",
        "year": 2017
      },
      {
        "name": "Κ. Kin la belle",
        "album": "Ipséité",
        "year": 2017
      },
      {
        "name": "Μ. Noob Saibot",
        "album": "Ipséité",
        "year": 2017
      },
      {
        "name": "Ξ. Une âme pour deux",
        "album": "Ipséité",
        "year": 2017
      },
      {
        "name": "Fais-moi un Vie",
        "album": "Fais-moi un Vie - Single",
        "year": 2018
      },
      {
        "name": "J’avais juste envie d’écrire.",
        "album": "J’avais juste envie d’écrire. - Single",
        "year": 2021
      },
      {
        "name": "Œveillé",
        "album": "Œveillé - Single",
        "year": 2020
      },
      {
        "name": "Impardonnable",
        "album": "BĒYĀH",
        "year": 2025
      },
      {
        "name": "JCVDEMS",
        "album": "BĒYĀH",
        "year": 2025
      },
      {
        "name": "Love is blind",
        "album": "BĒYĀH",
        "year": 2025
      },
      {
        "name": "Magic (feat. I.A.)",
        "album": "BĒYĀH",
        "year": 2025
      },
      {
        "name": "Wolof",
        "album": "BĒYĀH",
        "year": 2025
      },
      {
        "name": "Qui m’a demandé",
        "album": "BĒYĀH",
        "year": 2025
      },
      {
        "name": "YA TENGO SENTIMIENTOS",
        "album": "BĒYĀH",
        "year": 2025
      },
      {
        "name": "Frère",
        "album": "BĒYĀH",
        "year": 2025
      },
      {
        "name": "VIE OLENCE",
        "album": "BĒYĀH",
        "year": 2025
      },
      {
        "name": "T’es mon DEL",
        "album": "BĒYĀH",
        "year": 2025
      },
      {
        "name": "Police",
        "album": "BĒYĀH",
        "year": 2025
      },
      {
        "name": "Fibonacci",
        "album": "BĒYĀH",
        "year": 2025
      },
      {
        "name": "MAMILĀH",
        "album": "BĒYĀH",
        "year": 2025
      },
      {
        "name": "KAKI",
        "album": "BĒYĀH",
        "year": 2025
      },
      {
        "name": "Mort",
        "album": "Mort - Single",
        "year": 2018
      },
      {
        "name": "Humains (Bonus Track)",
        "album": "Lithopédion",
        "year": 2018
      },
      {
        "name": "Ω. VIVRE UN PEU",
        "album": "QALF infinity",
        "year": 2021
      },
      {
        "name": "THEVIE RADIO (Interlude)",
        "album": "QALF infinity",
        "year": 2020
      },
      {
        "name": "Ψ. PASSION",
        "album": "QALF infinity",
        "year": 2021
      },
      {
        "name": "D'JA ROULÉ",
        "album": "QALF infinity",
        "year": 2020
      },
      {
        "name": "SENTIMENTAL",
        "album": "QALF infinity",
        "year": 2020
      },
      {
        "name": "BPM",
        "album": "QALF infinity",
        "year": 2020
      },
      {
        "name": "POUR L'ARGENT",
        "album": "QALF infinity",
        "year": 2020
      },
      {
        "name": "DEUX TOILES DE MER",
        "album": "QALF infinity",
        "year": 2020
      },
      {
        "name": "COEUR EN MIETTES (feat. Lous and The Yakuza)",
        "album": "QALF infinity",
        "year": 2020
      },
      {
        "name": "Χ. ZWAAR",
        "album": "QALF infinity",
        "year": 2021
      },
      {
        "name": "Φ. THEVIE RADIO",
        "album": "QALF infinity",
        "year": 2021
      },
      {
        "name": "INTRO",
        "album": "QALF infinity",
        "year": 2020
      },
      {
        "name": "Υ. 2 DIAMANTS",
        "album": "QALF infinity",
        "year": 2021
      },
      {
        "name": "ROSE MARTHE'S LOVE",
        "album": "QALF infinity",
        "year": 2020
      },
      {
        "name": "Π. VANTABLACK",
        "album": "QALF infinity",
        "year": 2021
      },
      {
        "name": "FAIS ÇA BIEN (feat. Fally Ipupa)",
        "album": "QALF infinity",
        "year": 2020
      },
      {
        "name": "Σ. MOROSE",
        "album": "QALF infinity",
        "year": 2021
      },
      {
        "name": "911",
        "album": "QALF infinity",
        "year": 2020
      },
      {
        "name": "LIFE LIFE",
        "album": "QALF infinity",
        "year": 2020
      },
      {
        "name": "Ο. OG",
        "album": "QALF infinity",
        "year": 2021
      },
      {
        "name": "Ρ. DOSE",
        "album": "QALF infinity",
        "year": 2021
      }
    ]
  },
  {
    "name": "Josman",
    "color": "#EF9F27",
    "genre": "Hip-Hop/Rap",
    "trackCount": 114,
    "albums": [
      "J.O.$",
      "M.A.N (Black Roses & Lost Feelings)",
      "000$",
      "DOM PERIGNON CRYING",
      "J.000.$",
      "SPLIT",
      "Matrix",
      "MYSTR J.O.$. - EP",
      "Echecs positifs",
      "HHHH - EP"
    ],
    "tracks": [
      {
        "name": "Dans le vide",
        "album": "Matrix",
        "year": 2016
      },
      {
        "name": "Dans Le Ciel",
        "album": "000$",
        "year": 2017
      },
      {
        "name": "J'aime Bien!",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "Au Bout",
        "album": "000$",
        "year": 2017
      },
      {
        "name": "XS",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "Matrix",
        "album": "Matrix",
        "year": 2016
      },
      {
        "name": "Décisions",
        "album": "MYSTR J.O.$. - EP",
        "year": 2021
      },
      {
        "name": "Doré",
        "album": "MYSTR J.O.$. - EP",
        "year": 2021
      },
      {
        "name": "F****d Up 4",
        "album": "MYSTR J.O.$. - EP",
        "year": 2021
      },
      {
        "name": "New Hares (Same Shit)",
        "album": "MYSTR J.O.$. - EP",
        "year": 2021
      },
      {
        "name": "SEC",
        "album": "MYSTR J.O.$. - EP",
        "year": 2021
      },
      {
        "name": "Goal",
        "album": "MYSTR J.O.$. - EP",
        "year": 2021
      },
      {
        "name": "OK (Interlude)",
        "album": "000$",
        "year": 2017
      },
      {
        "name": "Doigt D'Honneur (Intro)",
        "album": "000$",
        "year": 2017
      },
      {
        "name": "OLY (Ouvre Les Yeux)",
        "album": "000$",
        "year": 2017
      },
      {
        "name": "PUFF PUFF PASS",
        "album": "000$",
        "year": 2017
      },
      {
        "name": "Prendre l'Air",
        "album": "000$",
        "year": 2017
      },
      {
        "name": "Merde (Outro)",
        "album": "000$",
        "year": 2017
      },
      {
        "name": "High Life",
        "album": "000$",
        "year": 2017
      },
      {
        "name": "MEGAZORD",
        "album": "000$",
        "year": 2017
      },
      {
        "name": "000$",
        "album": "000$",
        "year": 2017
      },
      {
        "name": "La Cage (NSM)",
        "album": "000$",
        "year": 2017
      },
      {
        "name": "F****d Up (Part. II)",
        "album": "000$",
        "year": 2017
      },
      {
        "name": "Vanille",
        "album": "000$",
        "year": 2017
      },
      {
        "name": "À la fin du périple",
        "album": "Matrix",
        "year": 2016
      },
      {
        "name": "Loto",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "BIZ",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "TIM€",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "F****d Up 3",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "Ce soir j'achèterai un Flash",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "Fais Avec",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "V&V",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "Jeune N****",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "DLVrai",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "L'Occasion",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "La Plaie",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "WOW",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "Sourcils Froncés",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "Interdit (Interlude)",
        "album": "M.A.N (Black Roses & Lost Feelings)",
        "year": 2022
      },
      {
        "name": "Peace, Haine, Love",
        "album": "M.A.N (Black Roses & Lost Feelings)",
        "year": 2022
      },
      {
        "name": "3ein / Risotto Gambas",
        "album": "M.A.N (Black Roses & Lost Feelings)",
        "year": 2022
      },
      {
        "name": "La Danse de la Joie",
        "album": "M.A.N (Black Roses & Lost Feelings)",
        "year": 2022
      },
      {
        "name": "Hasta el Cielo (feat. Eazy Dew & Soleil Noir)",
        "album": "M.A.N (Black Roses & Lost Feelings)",
        "year": 2022
      },
      {
        "name": "Vaccin (feat. Sofiane Pamart)",
        "album": "M.A.N (Black Roses & Lost Feelings)",
        "year": 2022
      },
      {
        "name": "AhGars!",
        "album": "M.A.N (Black Roses & Lost Feelings)",
        "year": 2022
      },
      {
        "name": "McQueen / Givenchy",
        "album": "M.A.N (Black Roses & Lost Feelings)",
        "year": 2022
      },
      {
        "name": "F̶i̶e̶s̶t̶a̶.̶ (Interlude)",
        "album": "M.A.N (Black Roses & Lost Feelings)",
        "year": 2022
      },
      {
        "name": "PLU$$$",
        "album": "M.A.N (Black Roses & Lost Feelings)",
        "year": 2022
      },
      {
        "name": "POP (feat. Guy2bezbar)",
        "album": "M.A.N (Black Roses & Lost Feelings)",
        "year": 2022
      },
      {
        "name": "L'eau (Interlude)",
        "album": "M.A.N (Black Roses & Lost Feelings)",
        "year": 2022
      },
      {
        "name": "L'Œil de la Joconde",
        "album": "M.A.N (Black Roses & Lost Feelings)",
        "year": 2022
      },
      {
        "name": "Mort Ce soir",
        "album": "M.A.N (Black Roses & Lost Feelings)",
        "year": 2022
      },
      {
        "name": "Intro",
        "album": "M.A.N (Black Roses & Lost Feelings)",
        "year": 2022
      },
      {
        "name": "Un Zder, Un Thé",
        "album": "J.O.$",
        "year": 2018
      },
      {
        "name": "BabyGirl",
        "album": "SPLIT",
        "year": 2020
      },
      {
        "name": "Toxxxic",
        "album": "HHHH - EP",
        "year": 2021
      },
      {
        "name": "Narcisse",
        "album": "Echecs positifs",
        "year": 2015
      },
      {
        "name": "MOONROCK",
        "album": "M.A.N (Black Roses & Lost Feelings) [Bonus]",
        "year": 2022
      },
      {
        "name": "PANORAMA",
        "album": "DOM PERIGNON CRYING",
        "year": 2025
      },
      {
        "name": "FVCKED UP V",
        "album": "DOM PERIGNON CRYING",
        "year": 2025
      },
      {
        "name": "DOM PERIGNON CRYING",
        "album": "DOM PERIGNON CRYING",
        "year": 2025
      },
      {
        "name": "SPOTLIGHTS",
        "album": "DOM PERIGNON CRYING",
        "year": 2025
      },
      {
        "name": "PLATINUM SNIPER",
        "album": "DOM PERIGNON CRYING",
        "year": 2025
      },
      {
        "name": "Mauvaises nouvelles",
        "album": "Matrix",
        "year": 2016
      },
      {
        "name": "L'EAU (Part. II)",
        "album": "DOM PERIGNON CRYING",
        "year": 2025
      },
      {
        "name": "NERVEUX 72bpm",
        "album": "DOM PERIGNON CRYING",
        "year": 2025
      },
      {
        "name": "AF LA PREMIÈRE",
        "album": "DOM PERIGNON CRYING",
        "year": 2025
      },
      {
        "name": "MATEUS",
        "album": "DOM PERIGNON CRYING",
        "year": 2025
      },
      {
        "name": "SLOPPY TOPPY (feat. Hamza)",
        "album": "DOM PERIGNON CRYING",
        "year": 2025
      },
      {
        "name": "Le Crapaud",
        "album": "DOM PERIGNON CRYING",
        "year": 2025
      },
      {
        "name": "NEW VILLA",
        "album": "DOM PERIGNON CRYING",
        "year": 2025
      },
      {
        "name": "TENDU",
        "album": "DOM PERIGNON CRYING",
        "year": 2025
      },
      {
        "name": "Doobie",
        "album": "Matrix",
        "year": 2016
      },
      {
        "name": "Bambi",
        "album": "SPLIT",
        "year": 2019
      },
      {
        "name": "Bambi",
        "album": "Bambi - Single",
        "year": 2019
      },
      {
        "name": "Señorita",
        "album": "HHHH - EP",
        "year": 2021
      },
      {
        "name": "Best life",
        "album": "HHHH - EP",
        "year": 2021
      },
      {
        "name": "Petite Bulle",
        "album": "Petite Bulle - Single",
        "year": 2020
      },
      {
        "name": "Mon âme",
        "album": "Echecs positifs",
        "year": 2015
      },
      {
        "name": "Argent, Drogue & Sexe (feat. Seth Gueko)",
        "album": "SPLIT",
        "year": 2020
      },
      {
        "name": "Seul",
        "album": "SPLIT",
        "year": 2020
      },
      {
        "name": "Illégale",
        "album": "SPLIT",
        "year": 2020
      },
      {
        "name": "Factice",
        "album": "SPLIT",
        "year": 2019
      },
      {
        "name": "B!tch (feat. Hamza)",
        "album": "SPLIT",
        "year": 2020
      },
      {
        "name": "Feu.Bi",
        "album": "Factice / Feu.Bi - Single",
        "year": 2019
      },
      {
        "name": "Bon.Char",
        "album": "SPLIT",
        "year": 2020
      },
      {
        "name": "Lifestyle",
        "album": "SPLIT",
        "year": 2020
      },
      {
        "name": "Factice",
        "album": "Factice / Feu.Bi - Single",
        "year": 2019
      },
      {
        "name": "Je Sais",
        "album": "SPLIT",
        "year": 2020
      },
      {
        "name": "À Notre Âge",
        "album": "SPLIT",
        "year": 2020
      },
      {
        "name": "BAG (Skit)",
        "album": "SPLIT",
        "year": 2020
      },
      {
        "name": "WOW",
        "album": "WOW - Single",
        "year": 2018
      },
      {
        "name": "R.A.P. (Rhythm and Poetry)",
        "album": "Echecs positifs",
        "year": 2015
      },
      {
        "name": "L'oiseau rare",
        "album": "Echecs positifs",
        "year": 2015
      },
      {
        "name": "Big Step",
        "album": "Echecs positifs",
        "year": 2015
      },
      {
        "name": "Sprite",
        "album": "Matrix",
        "year": 2016
      },
      {
        "name": "Loto",
        "album": "Loto - Single",
        "year": 2018
      },
      {
        "name": "Monnai€",
        "album": "Matrix",
        "year": 2016
      },
      {
        "name": "Pussyboyz",
        "album": "Matrix",
        "year": 2016
      },
      {
        "name": "V&V",
        "album": "V&V - Single",
        "year": 2018
      }
    ]
  },
  {
    "name": "Luv Resval",
    "color": "#D4537E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 109,
    "albums": [
      "Étoile Noire 2.0 : ZLM",
      "Etoile Noire : Nébuleuse",
      "Mustafar",
      "Etoile Noire",
      "Side - Single",
      "Smith & Wesson - Single",
      "Crystal Lake (feat. Freeze corleone) - Single",
      "Boosk'Anakin - Single",
      "¥2S °4 : Katon - Single",
      "¥2S °2 : Ezio Auditore - Single"
    ],
    "tracks": [
      {
        "name": "Side",
        "album": "Side - Single",
        "year": 2020
      },
      {
        "name": "Smith & Wesson",
        "album": "Smith & Wesson - Single",
        "year": 2020
      },
      {
        "name": "Crystal Lake (feat. Freeze corleone)",
        "album": "Crystal Lake (feat. Freeze corleone) - Single",
        "year": 2019
      },
      {
        "name": "MPC, Part II (La rivière)",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "Haze (feat. Chily)",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "Caramelo",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "Super Saïyen 1",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "J'ai fait un rêve",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "Jusqu'au lendemain",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "Tatooine (feat. Savage Toddy)",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "Super Saïyen 2",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "Picsou",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "Hadès (feat. Lujipeka)",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "Blue Ferrari (feat. Savage Toddy)",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "Flûte de pan",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "Tout s'en va",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "Jamais revenue (feat. Josman)",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "La princesse et le crapaud",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "Cette fille",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "Les anges",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "Les Borgia",
        "album": "Etoile Noire",
        "year": 2021
      },
      {
        "name": "20 ans",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Hadès (feat. Lujipeka)",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Picsou",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Jamais revenue (feat. Josman)",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "MPC, Part II (La rivière)",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Dyrroth",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Super Saïyen 1",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Flûte de pan",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Space cake (feat. Savage Toddy)",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Super Saïyen 2",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Pellicule",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Tatooine (feat. Savage Toddy)",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Les anges",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Kurt (feat. Zefor)",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "La princesse et le crapaud",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "J'ai fait un rêve",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Tout s'en va",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Phone (feat. Savage Toddy & Roni0block)",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Cette fille",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Black Pearl",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Les Borgia",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Blue Ferrari (feat. Savage Toddy)",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Haze (feat. Chily)",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Caramelo",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Jusqu'au lendemain",
        "album": "Etoile Noire : Nébuleuse",
        "year": 2021
      },
      {
        "name": "Les anges",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Flûte de pan",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "MPC, Pt. 2 (La rivière)",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Cette fille",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Les Borgia",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Armageddon",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2022
      },
      {
        "name": "Triangle des Bermudes",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2022
      },
      {
        "name": "Xan",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2022
      },
      {
        "name": "Combo 696",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2022
      },
      {
        "name": "Tout s'en va",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Jamais revenue (feat. Josman)",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Bonaparte",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2022
      },
      {
        "name": "La princesse et le crapaud",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "LV Rose (feat. Holly Evans)",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2022
      },
      {
        "name": "Athéna (feat. Dinos)",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2022
      },
      {
        "name": "Blue Ferrari (feat. Savage Toddy)",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Wallachia",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2022
      },
      {
        "name": "Nostalgie",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2022
      },
      {
        "name": "Haze (feat. Chily)",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Chemin vers le ciel",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2022
      },
      {
        "name": "J'ai fait un rêve",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Hôtel California",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2022
      },
      {
        "name": "Vengeance (feat. Koba LaD)",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2022
      },
      {
        "name": "Super Saïyen 1",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Hadès (feat. Lujipeka)",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Luv de Vinci",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2022
      },
      {
        "name": "Tatooine (feat. Savage Toddy)",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Balade nocturne, Pt. 2",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2022
      },
      {
        "name": "Picsou",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Super Saïyen 2",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Jusqu'au lendemain",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Caramelo",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2021
      },
      {
        "name": "Larmes de l'Étoile",
        "album": "Étoile Noire 2.0 : ZLM",
        "year": 2022
      },
      {
        "name": "Boosk'Anakin",
        "album": "Boosk'Anakin - Single",
        "year": 2021
      },
      {
        "name": "¥2S °4 : Katon",
        "album": "¥2S °4 : Katon - Single",
        "year": 2021
      },
      {
        "name": "¥2S °2 : Ezio Auditore",
        "album": "¥2S °2 : Ezio Auditore - Single",
        "year": 2021
      },
      {
        "name": "¥2S °3 : Vampire Rolls Royce",
        "album": "¥2S °3 : Vampire Rolls Royce - Single",
        "year": 2021
      },
      {
        "name": "¥2S °5 : Shadow",
        "album": "¥2S °5 : Shadow - Single",
        "year": 2022
      },
      {
        "name": "¥2S °1 : Rocky",
        "album": "¥2S °1 : Rocky - Single",
        "year": 2021
      },
      {
        "name": "696",
        "album": "696 - Single",
        "year": 2020
      },
      {
        "name": "AZNVR (une minute de musique)",
        "album": "AZNVR (une minute de musique) - Single",
        "year": 2023
      },
      {
        "name": "Jeune Vador",
        "album": "Jeune Vador - Single",
        "year": 2023
      },
      {
        "name": "BIG Brother",
        "album": "Mustafar",
        "year": 2023
      },
      {
        "name": "Céleste",
        "album": "Mustafar",
        "year": 2023
      },
      {
        "name": "Hyrule",
        "album": "Mustafar",
        "year": 2023
      },
      {
        "name": "Un Viano à Venise",
        "album": "Mustafar",
        "year": 2023
      },
      {
        "name": "Beethoven",
        "album": "Mustafar",
        "year": 2023
      },
      {
        "name": "Ballade nocturne III",
        "album": "Mustafar",
        "year": 2023
      },
      {
        "name": "AZNVR (une minute de musique)",
        "album": "Mustafar",
        "year": 2023
      },
      {
        "name": "France GALL",
        "album": "Mustafar",
        "year": 2023
      },
      {
        "name": "Souvenir",
        "album": "Mustafar",
        "year": 2023
      },
      {
        "name": "Souvenir lointain",
        "album": "Mustafar",
        "year": 2023
      },
      {
        "name": "Rosalia",
        "album": "Mustafar",
        "year": 2023
      },
      {
        "name": "Jeune Vador",
        "album": "Mustafar",
        "year": 2023
      }
    ]
  },
  {
    "name": "Orelsan",
    "color": "#378ADD",
    "genre": "Rap",
    "trackCount": 94,
    "albums": [
      "La fête est finie - ÉPILOGUE",
      "La fuite en avant",
      "Le Chant des sirènes",
      "Perdu d'avance (bonus version)",
      "Civilisation Édition Ultime",
      "Unknown"
    ],
    "tracks": [
      {
        "name": "Christophe (feat. GIMS)",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Défaite de famille",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Rêves bizarres (feat. Damso)",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2018
      },
      {
        "name": "Fantômes",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2018
      },
      {
        "name": "Tout ce que je sais (feat. Cordae)",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2018
      },
      {
        "name": "La famille, la famille",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2018
      },
      {
        "name": "Mes grands-parents",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2018
      },
      {
        "name": "Tout va bien (feat. Eugy Official & Kojo Funds) [Remix]",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2018
      },
      {
        "name": "Discipline",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2018
      },
      {
        "name": "Adieu les filles",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2018
      },
      {
        "name": "Excuses ou mensonges",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2018
      },
      {
        "name": "Dis-moi",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2018
      },
      {
        "name": "Epilogue",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2018
      },
      {
        "name": "San",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "La fête est finie",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Basique",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Tout va bien",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Défaite de famille",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "La lumière",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Bonne meuf",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Quand est-ce que ça s'arrête",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Christophe (feat. GIMS)",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Zone (feat. Nekfeu & Dizzee Rascal)",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Dans ma ville, on traîne",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "La pluie (feat. Stromae)",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Paradis",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Notes pour trop tard (feat. Ibeyi)",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Rêves bizarres (feat. Damso)",
        "album": "Unknown",
        "year": 2018
      },
      {
        "name": "Etoiles Invisibles",
        "album": "Perdu d'avance (bonus version)",
        "year": 2009
      },
      {
        "name": "Changement",
        "album": "Perdu d'avance (bonus version)",
        "year": 2008
      },
      {
        "name": "Soirée Ratée",
        "album": "Perdu d'avance (bonus version)",
        "year": 2009
      },
      {
        "name": "Différent",
        "album": "Perdu d'avance (bonus version)",
        "year": 2009
      },
      {
        "name": "No Life",
        "album": "Perdu d'avance (bonus version)",
        "year": 2009
      },
      {
        "name": "Pour Le Pire",
        "album": "Perdu d'avance (bonus version)",
        "year": 2009
      },
      {
        "name": "Perdu D'avance",
        "album": "Perdu d'avance (bonus version)",
        "year": 2009
      },
      {
        "name": "Gros Poissons Dans Une Petite Mare",
        "album": "Perdu d'avance (bonus version)",
        "year": 2009
      },
      {
        "name": "Logo Dans Le Ciel",
        "album": "Perdu d'avance (bonus version)",
        "year": 2009
      },
      {
        "name": "50 Pourcents",
        "album": "Perdu d'avance (bonus version)",
        "year": 2009
      },
      {
        "name": "Jimmy Punchline",
        "album": "Perdu d'avance (bonus version)",
        "year": 2009
      },
      {
        "name": "Courez Courez",
        "album": "Perdu d'avance (bonus version)",
        "year": 2009
      },
      {
        "name": "Peur De L'échec (feat. Ron Thal)",
        "album": "Perdu d'avance (bonus version)",
        "year": 2009
      },
      {
        "name": "Bébéboa",
        "album": "Civilisation Édition Ultime",
        "year": 2021
      },
      {
        "name": "Civilisation",
        "album": "Civilisation Édition Ultime",
        "year": 2021
      },
      {
        "name": "Rêve mieux",
        "album": "Civilisation Édition Ultime",
        "year": 2021
      },
      {
        "name": "Du propre",
        "album": "Civilisation Édition Ultime",
        "year": 2021
      },
      {
        "name": "Jour meilleur",
        "album": "Civilisation Édition Ultime",
        "year": 2021
      },
      {
        "name": "L'odeur de l'essence",
        "album": "Civilisation Édition Ultime",
        "year": 2021
      },
      {
        "name": "Baise le monde",
        "album": "Civilisation Édition Ultime",
        "year": 2021
      },
      {
        "name": "Shonen",
        "album": "Civilisation Édition Ultime",
        "year": 2021
      },
      {
        "name": "La Quête",
        "album": "Civilisation Édition Ultime",
        "year": 2021
      },
      {
        "name": "Athéna",
        "album": "Civilisation Édition Ultime",
        "year": 2021
      },
      {
        "name": "Seul avec du monde autour",
        "album": "Civilisation Édition Ultime",
        "year": 2021
      },
      {
        "name": "Manifeste",
        "album": "Civilisation Édition Ultime",
        "year": 2021
      },
      {
        "name": "La terre est ronde",
        "album": "Le Chant des sirènes",
        "year": 2011
      },
      {
        "name": "Notes pour trop tard (feat. Ibeyi)",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "San",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Zone (feat. Nekfeu & Dizzee Rascal)",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "La fête est finie",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "La lumière",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Bonne meuf",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Le pacte",
        "album": "La fuite en avant",
        "year": 2025
      },
      {
        "name": "Plus rien (feat. Lilas Ikuta)",
        "album": "La fuite en avant",
        "year": 2025
      },
      {
        "name": "Ailleurs",
        "album": "La fuite en avant",
        "year": 2025
      },
      {
        "name": "Boss",
        "album": "La fuite en avant",
        "year": 2025
      },
      {
        "name": "Deux et demi",
        "album": "La fuite en avant",
        "year": 2025
      },
      {
        "name": "Osaka",
        "album": "La fuite en avant",
        "year": 2025
      },
      {
        "name": "Internet",
        "album": "La fuite en avant",
        "year": 2025
      },
      {
        "name": "Dans quelques mois",
        "album": "La fuite en avant",
        "year": 2025
      },
      {
        "name": "Oulalalala (feat. FIFTY FIFTY)",
        "album": "La fuite en avant",
        "year": 2025
      },
      {
        "name": "Tellement d'amis",
        "album": "La fuite en avant",
        "year": 2025
      },
      {
        "name": "La petite voix",
        "album": "La fuite en avant",
        "year": 2025
      },
      {
        "name": "SAMA",
        "album": "La fuite en avant",
        "year": 2025
      },
      {
        "name": "Les monstres",
        "album": "La fuite en avant",
        "year": 2025
      },
      {
        "name": "Epiphanie",
        "album": "La fuite en avant",
        "year": 2025
      },
      {
        "name": "Yoroï (with Thomas Bangalter)",
        "album": "La fuite en avant",
        "year": 2025
      },
      {
        "name": "Basique",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Paradis",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Tout va bien",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Le chant des sirènes",
        "album": "Le Chant des sirènes",
        "year": 2011
      },
      {
        "name": "Plus rien ne m'étonne",
        "album": "Le Chant des sirènes",
        "year": 2011
      },
      {
        "name": "Raelsan",
        "album": "Le Chant des sirènes",
        "year": 2011
      },
      {
        "name": "Double vie",
        "album": "Le Chant des sirènes",
        "year": 2011
      },
      {
        "name": "Mauvaise idée",
        "album": "Le Chant des sirènes",
        "year": 2011
      },
      {
        "name": "La pluie (feat. Stromae)",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Quand est-ce que ça s'arrête",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "Si Seul",
        "album": "Le Chant des sirènes",
        "year": 2011
      },
      {
        "name": "Dans ma ville, on traîne",
        "album": "La fête est finie - ÉPILOGUE",
        "year": 2017
      },
      {
        "name": "2010",
        "album": "Le Chant des sirènes",
        "year": 2011
      },
      {
        "name": "La morale",
        "album": "Le Chant des sirènes",
        "year": 2011
      },
      {
        "name": "1990",
        "album": "Le Chant des sirènes",
        "year": 2011
      },
      {
        "name": "Suicide social",
        "album": "Le Chant des sirènes",
        "year": 2011
      },
      {
        "name": "Elle viendra quand même",
        "album": "Le Chant des sirènes",
        "year": 2011
      },
      {
        "name": "La petite marchande de porte-clefs",
        "album": "Le Chant des sirènes",
        "year": 2011
      },
      {
        "name": "Des trous dans la tête",
        "album": "Le Chant des sirènes",
        "year": 2011
      }
    ]
  },
  {
    "name": "Mac Miller",
    "color": "#639922",
    "genre": "Hip-Hop/Rap",
    "trackCount": 94,
    "albums": [
      "Faces",
      "Swimming",
      "Circles",
      "K.I.D.S. (Deluxe)",
      "GO:OD AM",
      "Blue Slide Park",
      "Watching Movies with the Sound Off",
      "The Divine Feminine",
      "Macadelic",
      "Live From Space"
    ],
    "tracks": [
      {
        "name": "Ladders",
        "album": "Swimming",
        "year": 2018
      },
      {
        "name": "All I Want Is You",
        "album": "K.I.D.S. (Deluxe)",
        "year": 2010
      },
      {
        "name": "What's the Use?",
        "album": "Swimming",
        "year": 2018
      },
      {
        "name": "Ascension",
        "album": "GO:OD AM",
        "year": 2015
      },
      {
        "name": "Woods",
        "album": "Circles",
        "year": 2020
      },
      {
        "name": "Small Worlds",
        "album": "Swimming",
        "year": 2018
      },
      {
        "name": "Earth (feat. Future)",
        "album": "Live From Space",
        "year": 2013
      },
      {
        "name": "Fight the Feeling (feat. Kendrick Lamar & Iman Omari)",
        "album": "Macadelic",
        "year": 2012
      },
      {
        "name": "God Is Fair, Sexy Nasty (feat. Kendrick Lamar)",
        "album": "The Divine Feminine",
        "year": 2016
      },
      {
        "name": "In The Morning (feat. Thundercat & Syd)",
        "album": "Live From Space",
        "year": 2013
      },
      {
        "name": "Once a Day",
        "album": "Circles",
        "year": 2020
      },
      {
        "name": "Surf",
        "album": "Circles",
        "year": 2020
      },
      {
        "name": "That's on Me",
        "album": "Circles",
        "year": 2020
      },
      {
        "name": "Hands",
        "album": "Circles",
        "year": 2020
      },
      {
        "name": "Dunno",
        "album": "Swimming",
        "year": 2018
      },
      {
        "name": "Self Care",
        "album": "Swimming",
        "year": 2018
      },
      {
        "name": "Polo Jeans (feat. Earl Sweatshirt)",
        "album": "Faces",
        "year": 2014
      },
      {
        "name": "Perfecto",
        "album": "Swimming",
        "year": 2018
      },
      {
        "name": "Wedding",
        "album": "Faces",
        "year": 2014
      },
      {
        "name": "Conversation Pt. 1",
        "album": "Creative Boost",
        "year": 2018
      },
      {
        "name": "Hurt Feelings",
        "album": "Swimming",
        "year": 2018
      },
      {
        "name": "Come Back to Earth",
        "album": "Swimming",
        "year": 2018
      },
      {
        "name": "Diablo",
        "album": "Faces",
        "year": 2014
      },
      {
        "name": "Funeral",
        "album": "Faces",
        "year": 2014
      },
      {
        "name": "Colors and Shapes",
        "album": "Faces",
        "year": 2014
      },
      {
        "name": "Good News",
        "album": "Circles",
        "year": 2020
      },
      {
        "name": "San Francisco",
        "album": "Faces",
        "year": 2014
      },
      {
        "name": "Complicated",
        "album": "Circles",
        "year": 2020
      },
      {
        "name": "Insomniak (feat. Rick Ross)",
        "album": "Faces",
        "year": 2014
      },
      {
        "name": "Blue World",
        "album": "Circles",
        "year": 2020
      },
      {
        "name": "Circles",
        "album": "Circles",
        "year": 2020
      },
      {
        "name": "Hand Me Downs",
        "album": "Circles",
        "year": 2020
      },
      {
        "name": "Everybody",
        "album": "Circles",
        "year": 2020
      },
      {
        "name": "I Can See",
        "album": "Circles",
        "year": 2020
      },
      {
        "name": "Wings",
        "album": "Swimming",
        "year": 2018
      },
      {
        "name": "Apparition",
        "album": "Faces",
        "year": 2014
      },
      {
        "name": "Rain (feat. Vince Staples)",
        "album": "Faces",
        "year": 2014
      },
      {
        "name": "Friends (feat. ScHoolboy Q)",
        "album": "Faces",
        "year": 2014
      },
      {
        "name": "Grand Finale",
        "album": "Faces",
        "year": 2014
      },
      {
        "name": "What Do You Do (feat. Sir Michael Rocks)",
        "album": "Faces",
        "year": 2014
      },
      {
        "name": "Malibu",
        "album": "Faces",
        "year": 2014
      },
      {
        "name": "Angel Dust",
        "album": "Faces",
        "year": 2014
      },
      {
        "name": "It Just Doesn’t Matter",
        "album": "Faces",
        "year": 2014
      },
      {
        "name": "Perfect Circle / God Speed",
        "album": "GO:OD AM",
        "year": 2015
      },
      {
        "name": "My Favorite Part (feat. Ariana Grande)",
        "album": "The Divine Feminine",
        "year": 2016
      },
      {
        "name": "Two Matches (feat. Ab-Soul)",
        "album": "GO:OD AM",
        "year": 2015
      },
      {
        "name": "100 Grandkids",
        "album": "GO:OD AM",
        "year": 2015
      },
      {
        "name": "Doors",
        "album": "GO:OD AM",
        "year": 2015
      },
      {
        "name": "Brand Name",
        "album": "GO:OD AM",
        "year": 2015
      },
      {
        "name": "Under The Weather",
        "album": "Blue Slide Park",
        "year": 2011
      },
      {
        "name": "Rush Hour",
        "album": "GO:OD AM",
        "year": 2015
      },
      {
        "name": "The Question (feat. Lil Wayne)",
        "album": "Macadelic",
        "year": 2012
      },
      {
        "name": "Senior Skip Day",
        "album": "K.I.D.S. (Deluxe)",
        "year": 2010
      },
      {
        "name": "Nikes on My Feet",
        "album": "K.I.D.S. (Deluxe)",
        "year": 2010
      },
      {
        "name": "Outside",
        "album": "K.I.D.S. (Deluxe)",
        "year": 2010
      },
      {
        "name": "Sunlight (feat. Iman Omari)",
        "album": "Macadelic",
        "year": 2012
      },
      {
        "name": "Party On Fifth Ave.",
        "album": "Blue Slide Park",
        "year": 2011
      },
      {
        "name": "PA Nights",
        "album": "Blue Slide Park",
        "year": 2011
      },
      {
        "name": "Kool Aid & Frozen Pizza",
        "album": "K.I.D.S. (Deluxe)",
        "year": 2010
      },
      {
        "name": "Knock Knock",
        "album": "K.I.D.S. (Deluxe)",
        "year": 2010
      },
      {
        "name": "Ride Around",
        "album": "K.I.D.S. (Deluxe)",
        "year": 2010
      },
      {
        "name": "Good Evening",
        "album": "K.I.D.S. (Deluxe)",
        "year": 2010
      },
      {
        "name": "Paper Route (feat. Chevy Woods)",
        "album": "K.I.D.S. (Deluxe)",
        "year": 2010
      },
      {
        "name": "Of The Soul",
        "album": "Blue Slide Park",
        "year": 2011
      },
      {
        "name": "Don't Mind If I Do",
        "album": "K.I.D.S. (Deluxe)",
        "year": 2010
      },
      {
        "name": "Stay",
        "album": "The Divine Feminine",
        "year": 2016
      },
      {
        "name": "The Festival (feat. Little Dragon)",
        "album": "GO:OD AM",
        "year": 2015
      },
      {
        "name": "ROS",
        "album": "GO:OD AM",
        "year": 2015
      },
      {
        "name": "Cut the Check (feat. Chief Keef)",
        "album": "GO:OD AM",
        "year": 2015
      },
      {
        "name": "Skin",
        "album": "The Divine Feminine",
        "year": 2016
      },
      {
        "name": "Fuck 'Em All",
        "album": "Macadelic",
        "year": 2012
      },
      {
        "name": "Loitering",
        "album": "Blue Slide Park",
        "year": 2011
      },
      {
        "name": "Dang! (feat. Anderson .Paak)",
        "album": "The Divine Feminine",
        "year": 2016
      },
      {
        "name": "I’m Not Real (feat. Earl Sweatshirt)",
        "album": "Watching Movies with the Sound Off",
        "year": 2013
      },
      {
        "name": "Blue Slide Park",
        "album": "Blue Slide Park",
        "year": 2011
      },
      {
        "name": "Missed Calls",
        "album": "Blue Slide Park",
        "year": 2011
      },
      {
        "name": "Man In The Hat",
        "album": "Blue Slide Park",
        "year": 2011
      },
      {
        "name": "One Last Thing",
        "album": "Blue Slide Park",
        "year": 2011
      },
      {
        "name": "Avian",
        "album": "Watching Movies with the Sound Off",
        "year": 2013
      },
      {
        "name": "Red Dot Music (feat. Action Bronson)",
        "album": "Watching Movies with the Sound Off",
        "year": 2013
      },
      {
        "name": "Thoughts from a Balcony",
        "album": "Macadelic",
        "year": 2012
      },
      {
        "name": "Congratulations (feat. Bilal)",
        "album": "The Divine Feminine",
        "year": 2016
      },
      {
        "name": "Matches (feat. Ab-Soul)",
        "album": "Watching Movies with the Sound Off",
        "year": 2013
      },
      {
        "name": "2009",
        "album": "Swimming",
        "year": 2018
      },
      {
        "name": "Suplexes Inside of Complexes and Duplexes",
        "album": "Watching Movies with the Sound Off",
        "year": 2013
      },
      {
        "name": "So It Goes",
        "album": "Swimming",
        "year": 2018
      },
      {
        "name": "REMember",
        "album": "Watching Movies with the Sound Off",
        "year": 2013
      },
      {
        "name": "Clubhouse",
        "album": "Workout Trap",
        "year": 2015
      },
      {
        "name": "Jet Fuel",
        "album": "Swimming",
        "year": 2018
      },
      {
        "name": "Gees (feat. ScHoolboy Q)",
        "album": "Watching Movies with the Sound Off",
        "year": 2013
      },
      {
        "name": "Goosebumpz (Bonus Track)",
        "album": "Watching Movies with the Sound Off",
        "year": 2013
      },
      {
        "name": "Someone Like You",
        "album": "Watching Movies with the Sound Off",
        "year": 2013
      },
      {
        "name": "Planet God Damn (feat. Njomza)",
        "album": "The Divine Feminine",
        "year": 2016
      },
      {
        "name": "Poppy",
        "album": "K.I.D.S. (Deluxe)",
        "year": 2010
      }
    ]
  },
  {
    "name": "Vald",
    "color": "#993556",
    "genre": "Hip-Hop/Rap",
    "trackCount": 92,
    "albums": [
      "XEU",
      "Agartha",
      "PANDEMONIUM",
      "Ce monde est cruel",
      "V",
      "PANDEMONIUM RELOADED",
      "Echelon, Vol. 1",
      "Echelon Vol. 2",
      "Journal perso II - Single",
      "NQNT"
    ],
    "tracks": [
      {
        "name": "Désaccordé",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "Primitif",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "Seum",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "DQTP",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "Possédé",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "Chépakichui",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "Résidus",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "Jentertain",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "Rituel (feat. SIRIUS)",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "Gris",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "Réflexions basses",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "Offshore (feat. Suikon Blaz AD)",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "Ne me déteste pas",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "Rocking Chair",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "Dragon (feat. Sofiane)",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "Deviens génial",
        "album": "XEU",
        "year": 2018
      },
      {
        "name": "Trophée",
        "album": "XEU",
        "year": 2017
      },
      {
        "name": "Vitrine (feat. Damso)",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "Acacia",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "Megadose",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "Si j'arrêtais",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "Je t'aime",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "Totem",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "L.D.S",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "Ma meilleure amie",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "Neo",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "Lezarman",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "Blanc (feat. Suikon Blaz AD)",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "Eurotrap",
        "album": "Agartha",
        "year": 2016
      },
      {
        "name": "Petite chatte",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "Strip",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "Kid Cudi",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "Libellule",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "Dernier verre",
        "album": "Agartha",
        "year": 2017
      },
      {
        "name": "Journal perso II",
        "album": "Journal perso II - Single",
        "year": 2019
      },
      {
        "name": "Ignorant",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "Halloween",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "Ma star",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "Dernier retrait (feat. SCH)",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "Keskivonfer",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "Pourquoi",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "ASB (feat. Maes)",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "J'pourrai",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "No Friends",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "Royal Bacon",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "Rappel",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "Poches pleines",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "Ce monde est cruel",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "Pensionman",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "NQNTMQMQMB (feat. Suikon Blaz AD)",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "Journal perso II",
        "album": "Ce monde est cruel",
        "year": 2019
      },
      {
        "name": "C'est pas nous les méchants",
        "album": "Echelon, Vol. 1",
        "year": 2020
      },
      {
        "name": "Gotaga",
        "album": "Echelon, Vol. 1",
        "year": 2020
      },
      {
        "name": "Echelon 2",
        "album": "Echelon Vol. 2",
        "year": 2021
      },
      {
        "name": "Mushu",
        "album": "Echelon Vol. 2",
        "year": 2021
      },
      {
        "name": "DIEU MERCI",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "REGULATION",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "LETHARGIE",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "PANDEMONIUM",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "FLPVCOF",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "GAUCHE DROITE",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "ROCHE NOIRE",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "DARKNET",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "FUMEE",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "QUE DES PROBLEMES",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "UFOV",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "SUPERMAN",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "PROZACZOPIXAN",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "interlude",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "93 MILLIARDS",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "LES ECHAPPES",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "PARADIS PERDU",
        "album": "PANDEMONIUM",
        "year": 2025
      },
      {
        "name": "Laisse tomber",
        "album": "V",
        "year": 2022
      },
      {
        "name": "Regarde toi",
        "album": "V",
        "year": 2022
      },
      {
        "name": "Maudit (feat. Hamza)",
        "album": "V",
        "year": 2022
      },
      {
        "name": "Anunnaki",
        "album": "V",
        "year": 2022
      },
      {
        "name": "Je ressens rien",
        "album": "V",
        "year": 2022
      },
      {
        "name": "La faux le fer",
        "album": "V",
        "year": 2022
      },
      {
        "name": "Papoose",
        "album": "V",
        "year": 2022
      },
      {
        "name": "Rappeur conscient",
        "album": "V",
        "year": 2022
      },
      {
        "name": "Pandémie",
        "album": "V",
        "year": 2022
      },
      {
        "name": "Sur un nouvel album",
        "album": "V",
        "year": 2022
      },
      {
        "name": "Pas deux fois",
        "album": "V",
        "year": 2022
      },
      {
        "name": "Qui écoute ?",
        "album": "V",
        "year": 2022
      },
      {
        "name": "Bien sûr (Bonus)",
        "album": "V",
        "year": 2022
      },
      {
        "name": "Un mot",
        "album": "V",
        "year": 2022
      },
      {
        "name": "Happy End (feat. Suikon Blaz AD)",
        "album": "V",
        "year": 2022
      },
      {
        "name": "Peon (feat. Orelsan)",
        "album": "V",
        "year": 2022
      },
      {
        "name": "MYM BONUS AOCIZ",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      },
      {
        "name": "SUPERMAN BONUS AOCIZ",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      },
      {
        "name": "VICTOIRE BONUS AOCIZ",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      },
      {
        "name": "Elle me regarde",
        "album": "NQNT",
        "year": 2014
      }
    ]
  },
  {
    "name": "Kendrick Lamar",
    "color": "#0F6E56",
    "genre": "Hip-Hop/Rap",
    "trackCount": 90,
    "albums": [
      "good kid, m.A.A.d city (Deluxe)",
      "To Pimp a Butterfly",
      "DAMN.",
      "Mr. Morale & The Big Steppers",
      "GNX",
      "untitled unmastered.",
      "Section.80",
      "The Heart Part 5 - Single",
      "Black Panther: The Album",
      "i - Single"
    ],
    "tracks": [
      {
        "name": "heart pt. 6",
        "album": "GNX",
        "year": 2024
      },
      {
        "name": "wacced out murals",
        "album": "GNX",
        "year": 2024
      },
      {
        "name": "squabble up",
        "album": "GNX",
        "year": 2024
      },
      {
        "name": "luther",
        "album": "GNX",
        "year": 2024
      },
      {
        "name": "man at the garden",
        "album": "GNX",
        "year": 2024
      },
      {
        "name": "hey now (feat. Dody6)",
        "album": "GNX",
        "year": 2024
      },
      {
        "name": "reincarnated",
        "album": "GNX",
        "year": 2024
      },
      {
        "name": "tv off (feat. Lefty Gunplay)",
        "album": "GNX",
        "year": 2024
      },
      {
        "name": "dodger blue (feat. Wallie the Sensei, Siete7x & Roddy Ricch)",
        "album": "GNX",
        "year": 2024
      },
      {
        "name": "peekaboo (feat. AZ Chike)",
        "album": "GNX",
        "year": 2024
      },
      {
        "name": "gnx (feat. Hitta J3, YoungThreat & Peysoh)",
        "album": "GNX",
        "year": 2024
      },
      {
        "name": "gloria",
        "album": "GNX",
        "year": 2024
      },
      {
        "name": "The Heart Part 5",
        "album": "The Heart Part 5 - Single",
        "year": 2022
      },
      {
        "name": "Worldwide Steppers",
        "album": "Mr. Morale & The Big Steppers",
        "year": 2022
      },
      {
        "name": "Auntie Diaries",
        "album": "Mr. Morale & The Big Steppers",
        "year": 2022
      },
      {
        "name": "Crown",
        "album": "Mr. Morale & The Big Steppers",
        "year": 2022
      },
      {
        "name": "N95",
        "album": "Mr. Morale & The Big Steppers",
        "year": 2022
      },
      {
        "name": "Count Me Out",
        "album": "Mr. Morale & The Big Steppers",
        "year": 2022
      },
      {
        "name": "Rich (Interlude)",
        "album": "Mr. Morale & The Big Steppers",
        "year": 2022
      },
      {
        "name": "United In Grief",
        "album": "Mr. Morale & The Big Steppers",
        "year": 2022
      },
      {
        "name": "Rich Spirit",
        "album": "Mr. Morale & The Big Steppers",
        "year": 2022
      },
      {
        "name": "Mother I Sober (feat. Beth Gibbons)",
        "album": "Mr. Morale & The Big Steppers",
        "year": 2022
      },
      {
        "name": "Savior (Interlude)",
        "album": "Mr. Morale & The Big Steppers",
        "year": 2022
      },
      {
        "name": "Mirror",
        "album": "Mr. Morale & The Big Steppers",
        "year": 2022
      },
      {
        "name": "Father Time (feat. Sampha)",
        "album": "Mr. Morale & The Big Steppers",
        "year": 2022
      },
      {
        "name": "untitled 01 l 08.19.2014.",
        "album": "untitled unmastered.",
        "year": 2016
      },
      {
        "name": "untitled 02 l 06.23.2014.",
        "album": "untitled unmastered.",
        "year": 2016
      },
      {
        "name": "untitled 03 l 05.28.2013.",
        "album": "untitled unmastered.",
        "year": 2016
      },
      {
        "name": "untitled 04 l 08.14.2014.",
        "album": "untitled unmastered.",
        "year": 2016
      },
      {
        "name": "untitled 05 l 09.21.2014.",
        "album": "untitled unmastered.",
        "year": 2016
      },
      {
        "name": "untitled 06 l 06.30.2014.",
        "album": "untitled unmastered.",
        "year": 2016
      },
      {
        "name": "untitled 07 l 2014 - 2016",
        "album": "untitled unmastered.",
        "year": 2016
      },
      {
        "name": "untitled 08 l 09.06.2014.",
        "album": "untitled unmastered.",
        "year": 2016
      },
      {
        "name": "Wesley's Theory (feat. George Clinton & Thundercat)",
        "album": "To Pimp a Butterfly",
        "year": 2015
      },
      {
        "name": "For Free? (Interlude)",
        "album": "To Pimp a Butterfly",
        "year": 2015
      },
      {
        "name": "King Kunta",
        "album": "To Pimp a Butterfly",
        "year": 2015
      },
      {
        "name": "Institutionalized (feat. Bilal, Anna Wise & Snoop Dogg)",
        "album": "To Pimp a Butterfly",
        "year": 2015
      },
      {
        "name": "These Walls (feat. Bilal, Anna Wise & Thundercat)",
        "album": "To Pimp a Butterfly",
        "year": 2015
      },
      {
        "name": "u",
        "album": "To Pimp a Butterfly",
        "year": 2015
      },
      {
        "name": "Alright",
        "album": "To Pimp a Butterfly",
        "year": 2015
      },
      {
        "name": "For Sale? (Interlude)",
        "album": "To Pimp a Butterfly",
        "year": 2015
      },
      {
        "name": "Momma",
        "album": "To Pimp a Butterfly",
        "year": 2015
      },
      {
        "name": "Hood Politics",
        "album": "To Pimp a Butterfly",
        "year": 2015
      },
      {
        "name": "How Much a Dollar Cost (feat. James Fauntleroy & Ronald Isley)",
        "album": "To Pimp a Butterfly",
        "year": 2015
      },
      {
        "name": "Complexion (A Zulu Love) [feat. Rapsody]",
        "album": "To Pimp a Butterfly",
        "year": 2015
      },
      {
        "name": "The Blacker the Berry",
        "album": "To Pimp a Butterfly",
        "year": 2015
      },
      {
        "name": "You Ain't Gotta Lie (Momma Said)",
        "album": "To Pimp a Butterfly",
        "year": 2015
      },
      {
        "name": "i",
        "album": "To Pimp a Butterfly",
        "year": 2014
      },
      {
        "name": "Mortal Man",
        "album": "To Pimp a Butterfly",
        "year": 2015
      },
      {
        "name": "BLOOD.",
        "album": "DAMN.",
        "year": 2017
      },
      {
        "name": "DNA.",
        "album": "DAMN.",
        "year": 2017
      },
      {
        "name": "YAH.",
        "album": "DAMN.",
        "year": 2017
      },
      {
        "name": "ELEMENT.",
        "album": "DAMN.",
        "year": 2017
      },
      {
        "name": "FEEL.",
        "album": "DAMN.",
        "year": 2017
      },
      {
        "name": "LOYALTY. (feat. Rihanna)",
        "album": "DAMN.",
        "year": 2017
      },
      {
        "name": "PRIDE.",
        "album": "DAMN.",
        "year": 2017
      },
      {
        "name": "HUMBLE.",
        "album": "DAMN.",
        "year": 2017
      },
      {
        "name": "LUST.",
        "album": "DAMN.",
        "year": 2017
      },
      {
        "name": "LOVE. (feat. Zacari)",
        "album": "DAMN.",
        "year": 2017
      },
      {
        "name": "XXX. (feat. U2)",
        "album": "DAMN.",
        "year": 2017
      },
      {
        "name": "FEAR.",
        "album": "DAMN.",
        "year": 2017
      },
      {
        "name": "GOD.",
        "album": "DAMN.",
        "year": 2017
      },
      {
        "name": "DUCKWORTH.",
        "album": "DAMN.",
        "year": 2017
      },
      {
        "name": "Black Panther",
        "album": "Black Panther: The Album",
        "year": 2018
      },
      {
        "name": "Sherane A.K.A Master Splinter’s Daughter",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "Bitch, Don’t Kill My Vibe",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "Backseat Freestyle",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "The Art of Peer Pressure",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "Money Trees (feat. Jay Rock)",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "Poetic Justice (feat. Drake)",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "Good Kid",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "m.A.A.d city (feat. MC Eiht)",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "Swimming Pools (Drank) [Extended Version]",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "Sing About Me, I'm Dying of Thirst",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "Real (feat. Anna Wise)",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "Compton (feat. Dr. Dre)",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "The Recipe (feat. Dr. Dre)",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "Black Boy Fly",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "Now Or Never (feat. Mary J. Blige)",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "Collect Calls",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "Swimming Pools (Drank)",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "Bitch, Don’t Kill My Vibe (feat. JAŸ-Z) [Remix]",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "Bitch, Don’t Kill My Vibe (feat. Emeli Sandé) [International Remix]",
        "album": "good kid, m.A.A.d city (Deluxe)",
        "year": 2012
      },
      {
        "name": "HiiiPower",
        "album": "Section.80",
        "year": 2011
      },
      {
        "name": "The Heart Part 5",
        "album": "Mr. Morale & The Big Steppers",
        "year": 2022
      },
      {
        "name": "Fuck Your Ethnicity",
        "album": "Section.80",
        "year": 2011
      },
      {
        "name": "Rigamortus",
        "album": "Section.80",
        "year": 2011
      },
      {
        "name": "i",
        "album": "i - Single",
        "year": 2014
      },
      {
        "name": "euphoria",
        "album": "euphoria - Single",
        "year": 2024
      },
      {
        "name": "Not Like Us",
        "album": "Not Like Us - Single",
        "year": 2024
      }
    ]
  },
  {
    "name": "Nekfeu",
    "color": "#BA7517",
    "genre": "Hip-Hop/Rap",
    "trackCount": 87,
    "albums": [
      "Les étoiles vagabondes : expansion",
      "Feu (Ré-édition)",
      "Cyborg",
      "Feu",
      "Rap Workout Booster",
      "Arabic & French Fusion",
      "don dada mixtape vol 1",
      "Au cœur du G - Single",
      "Marche arrière",
      "Y&W L’album"
    ],
    "tracks": [
      {
        "name": "Humanoïde",
        "album": "Cyborg",
        "year": 2016
      },
      {
        "name": "Mauvaise graine",
        "album": "Cyborg",
        "year": 2016
      },
      {
        "name": "Squa",
        "album": "Cyborg",
        "year": 2016
      },
      {
        "name": "Réalité augmentée",
        "album": "Cyborg",
        "year": 2016
      },
      {
        "name": "Avant tu riais (feat. Clara Luciani)",
        "album": "Cyborg",
        "year": 2016
      },
      {
        "name": "Esquimaux (feat. Nepal)",
        "album": "Cyborg",
        "year": 2016
      },
      {
        "name": "O.D (feat. Murkage Dave)",
        "album": "Cyborg",
        "year": 2016
      },
      {
        "name": "Vinyle (feat. Alpha Wann)",
        "album": "Cyborg",
        "year": 2016
      },
      {
        "name": "Saturne (feat. Sneazzy & S.Pri Noir)",
        "album": "Cyborg",
        "year": 2016
      },
      {
        "name": "Galatée",
        "album": "Cyborg",
        "year": 2016
      },
      {
        "name": "Le regard des gens (feat. Nemir, 2Zer, Mekra & Doum'S)",
        "album": "Cyborg",
        "year": 2016
      },
      {
        "name": "Programmé",
        "album": "Rap Workout Booster",
        "year": 2016
      },
      {
        "name": "Besoin de sens (feat. Framal & Jazzy Bazz)",
        "album": "Cyborg",
        "year": 2016
      },
      {
        "name": "Nekketsu (feat. Crystal Kay)",
        "album": "Cyborg",
        "year": 2016
      },
      {
        "name": "Egérie",
        "album": "Feu",
        "year": 2015
      },
      {
        "name": "On verra",
        "album": "Arabic & French Fusion",
        "year": 2015
      },
      {
        "name": "Sous les nuages",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Rouge à lèvres (feat. BJ the Chicago Kid)",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "CDGLAXJFKHNDATH (feat. 2Zer & Mekra)",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Ken Kaneki",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Voyage léger",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Interlude Fifty",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "De mes cendres",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Pixels (feat. Crystal Kay)",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Chanson d'amour",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Ciel noir",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Óλά Καλά",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Energie sombre",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Compte les hommes (feat. Alpha Wann)",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Nouvel homme",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Elle pleut (feat. Nemir)",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Le bruit qui court",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "De mon mieux",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "À la base",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "1er rôle",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "L'air du temps (feat. Framal & Doums)",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Oui et non",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Premier pas",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Dans l'univers (feat. Vanessa Paradis)",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Alunissons",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Les étoiles vagabondes",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Dernier soupir",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Natsukashii",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Koala mouillé",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Cheum",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Écrire",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Menteur menteur",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Jeux vidéo et débats",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Takotsubo",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Tricheur (feat. Damso)",
        "album": "Les étoiles vagabondes : expansion",
        "year": 2019
      },
      {
        "name": "Princesse (feat. Nemir)",
        "album": "Feu",
        "year": 2015
      },
      {
        "name": "Nique les clones, pt. II",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "malevil",
        "album": "don dada mixtape vol 1",
        "year": 2020
      },
      {
        "name": "Risibles amours",
        "album": "Feu",
        "year": 2015
      },
      {
        "name": "Martin Eden",
        "album": "Feu",
        "year": 2015
      },
      {
        "name": "Tempête",
        "album": "Feu",
        "year": 2015
      },
      {
        "name": "Au cœur du G",
        "album": "Au cœur du G - Single",
        "year": 2015
      },
      {
        "name": "Mal aimé",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Nique les clones, pt. II",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Point d'interrogation (feat. Alpha Wann)",
        "album": "Feu",
        "year": 2015
      },
      {
        "name": "Plume",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Pars avec moi (feat. 1995) [Inédit]",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Laisse aller",
        "album": "Feu",
        "year": 2015
      },
      {
        "name": "Princesse (feat. Nemir)",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Tempête",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Egérie",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Martin Eden",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Le horla",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Nekfeu (1995)",
        "album": "Marche arrière",
        "year": 2013
      },
      {
        "name": "Joint de culotte",
        "album": "Y&W L’album",
        "year": 2017
      },
      {
        "name": "La ballade du Frémont (feat. Doum'S) [Inédit]",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Elle en avait envie",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Etre humain (feat. Amber-Simone)",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Risibles amours",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Point d'interrogation (feat. Alpha Wann)",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Deux-Trois (feat. 1995)",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Les bruits de ma ville (feat. Phénomène Bizness)",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Laisse aller",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Reuf (feat. Ed Sheeran)",
        "album": "x (Wembley Edition)",
        "year": 2014
      },
      {
        "name": "La moue des morts (feat. $-Crew)",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Mon âme (feat. Sneazzy)",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Rêve d'avoir des rêves",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Le regard des gens (feat. Nemir, 2zer, M.Ekra & Doum'S)",
        "album": "Cyborg",
        "year": 2016
      },
      {
        "name": "Question d'honneur (feat. S-Crew)",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "7:77 am (feat. 86 Joon) [Inédit]",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Ma dope (feat. Spri Noir)",
        "album": "Feu (Ré-édition)",
        "year": 2015
      },
      {
        "name": "Jeux d'ombres (feat. Doum'S & Amber-Simone)",
        "album": "Feu (Ré-édition)",
        "year": 2015
      }
    ]
  },
  {
    "name": "Leto",
    "color": "#534AB7",
    "genre": "Hip-Hop/Rap",
    "trackCount": 86,
    "albums": [
      "TRAP$TAR 3",
      "17%",
      "TRAP$TAR 2",
      "TRAP$TAR",
      "Capitaine fait de l'art",
      "THUG CEREMONY",
      "Virus: avant l'album - EP"
    ],
    "tracks": [
      {
        "name": "17bal",
        "album": "Capitaine fait de l'art",
        "year": 2024
      },
      {
        "name": "TNF",
        "album": "Capitaine fait de l'art",
        "year": 2024
      },
      {
        "name": "J’crois qu’ils ont pas compris",
        "album": "Capitaine fait de l'art",
        "year": 2024
      },
      {
        "name": "J'ai l'impression",
        "album": "Capitaine fait de l'art",
        "year": 2024
      },
      {
        "name": "Empire",
        "album": "Capitaine fait de l'art",
        "year": 2024
      },
      {
        "name": "Tu ne vois pas",
        "album": "Capitaine fait de l'art",
        "year": 2024
      },
      {
        "name": "Palpe du papel",
        "album": "Capitaine fait de l'art",
        "year": 2024
      },
      {
        "name": "Tout gâché",
        "album": "Capitaine fait de l'art",
        "year": 2024
      },
      {
        "name": "C’est des oufs (feat. Kepler & Tvslym)",
        "album": "Capitaine fait de l'art",
        "year": 2024
      },
      {
        "name": "Pluton",
        "album": "Capitaine fait de l'art",
        "year": 2024
      },
      {
        "name": "Tout ira mieux",
        "album": "Capitaine fait de l'art",
        "year": 2024
      },
      {
        "name": "Ends",
        "album": "Capitaine fait de l'art",
        "year": 2024
      },
      {
        "name": "Toute épreuve",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "Koke",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "Un monde imparfait",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "Dans le noir (feat. Gazo)",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "Préjudice",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "Sur le banc (feat. SDM)",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "Vovo",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "Libérez mes gars",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "Je m'en souviens",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "God Bless (feat. Tiakola & Rsko)",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "Ze Pequeno",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "Tchtouchouchou",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "Je me demande",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "187 mesures (feat. Ninho)",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "Gang Gang",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "Yeah",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "One love",
        "album": "TRAP$TAR 3",
        "year": 2023
      },
      {
        "name": "17%",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "Power",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "Petit frère",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "All Eyez On Me",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "Derrière nos tours (feat. Maes)",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "Tout recommencer",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "Jeune soldat",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "Mapessa (feat. Tiakola)",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "Prada",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "Franklin Saint",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "Christian Dior (feat. MHD)",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "Rihanna",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "Vibes",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "Ouais Ouais (feat. Hamza)",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "T'avais raison",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "Truc en moi (feat. Cheu-B et Kepler)",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "Outro",
        "album": "17%",
        "year": 2021
      },
      {
        "name": "Choses à dire",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "Espèce",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "Balmain",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "Tu déconnes (feat. Rim'K)",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "Sapologue",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "A&H",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "TerrainHoraireBoloss",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "Tes parents (feat. Ninho)",
        "album": "TRAP$TAR 2",
        "year": 2018
      },
      {
        "name": "Hall à la scène",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "Bang",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "Pdv (feat. DA Uzi)",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "Bitume",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "Pure (feat. Sadek)",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "Adios",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "Trafic",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "Kiffe la mode (feat. Naza & Tiakola)",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "Bonbonne",
        "album": "TRAP$TAR 2",
        "year": 2019
      },
      {
        "name": "Jusqu'à la mort",
        "album": "TRAP$TAR",
        "year": 2018
      },
      {
        "name": "Trapstar",
        "album": "TRAP$TAR",
        "year": 2018
      },
      {
        "name": "La rue dort ap",
        "album": "TRAP$TAR",
        "year": 2018
      },
      {
        "name": "Parle en cash",
        "album": "TRAP$TAR",
        "year": 2018
      },
      {
        "name": "Avon Barksdale (feat. Ninho)",
        "album": "TRAP$TAR",
        "year": 2018
      },
      {
        "name": "Tu brasses ou tu meurs",
        "album": "TRAP$TAR",
        "year": 2018
      },
      {
        "name": "Lady Gaga",
        "album": "TRAP$TAR",
        "year": 2018
      },
      {
        "name": "Tout est bon",
        "album": "TRAP$TAR",
        "year": 2018
      },
      {
        "name": "Jeu dangereux",
        "album": "TRAP$TAR",
        "year": 2018
      },
      {
        "name": "Pas assez",
        "album": "TRAP$TAR",
        "year": 2018
      },
      {
        "name": "Facile",
        "album": "TRAP$TAR",
        "year": 2018
      },
      {
        "name": "Trou noir",
        "album": "TRAP$TAR",
        "year": 2018
      },
      {
        "name": "On bégaie pas",
        "album": "TRAP$TAR",
        "year": 2018
      },
      {
        "name": "Si t'es mon poto",
        "album": "TRAP$TAR",
        "year": 2018
      },
      {
        "name": "Grosse fumée gros flingue",
        "album": "TRAP$TAR",
        "year": 2018
      },
      {
        "name": "Jump dans la Porsche",
        "album": "TRAP$TAR",
        "year": 2017
      },
      {
        "name": "Crime",
        "album": "TRAP$TAR",
        "year": 2017
      },
      {
        "name": "RORONOA ZORO",
        "album": "THUG CEREMONY",
        "year": 2026
      },
      {
        "name": "TRAHISON POUR DU PAPERS",
        "album": "THUG CEREMONY",
        "year": 2026
      },
      {
        "name": "SONIC",
        "album": "THUG CEREMONY",
        "year": 2026
      },
      {
        "name": "SHAI ALEXANDER",
        "album": "THUG CEREMONY",
        "year": 2025
      },
      {
        "name": "⁠THUG CEREMONY",
        "album": "THUG CEREMONY",
        "year": 2025
      },
      {
        "name": "Double binks (feat. Ninho & Zed)",
        "album": "Virus: avant l'album - EP",
        "year": 2020
      }
    ]
  },
  {
    "name": "B.B. Jacques",
    "color": "#993C1D",
    "genre": "Hip-Hop/Rap",
    "trackCount": 83,
    "albums": [
      "La nuit sera calme",
      "NEW BLUES, OLD WINE",
      "BLACKBIRD",
      "Poésie d'une pulsion, Pt. 2",
      "Poésie d'une pulsion",
      "Honeymoon - Single",
      "HORIZON 25 - Single",
      "Booska Fuck Off - Single",
      "Elixir - Single",
      "Gratitude - Single"
    ],
    "tracks": [
      {
        "name": "Honeymoon",
        "album": "Honeymoon - Single",
        "year": 2024
      },
      {
        "name": "Rayol",
        "album": "Honeymoon - Single",
        "year": 2024
      },
      {
        "name": "Moshpit",
        "album": "Honeymoon - Single",
        "year": 2024
      },
      {
        "name": "CHOKER",
        "album": "BLACKBIRD",
        "year": 2024
      },
      {
        "name": "LA FOLIE (feat. VillaBanks)",
        "album": "BLACKBIRD",
        "year": 2024
      },
      {
        "name": "SOLDAT D'ÉLITE",
        "album": "BLACKBIRD",
        "year": 2024
      },
      {
        "name": "ENTERREMENT DES OPPS",
        "album": "BLACKBIRD",
        "year": 2024
      },
      {
        "name": "JAMAIS COMME AVANT",
        "album": "BLACKBIRD",
        "year": 2024
      },
      {
        "name": "MA CAME",
        "album": "BLACKBIRD",
        "year": 2024
      },
      {
        "name": "EXTRAMILES (feat. Jolagreen23)",
        "album": "BLACKBIRD",
        "year": 2024
      },
      {
        "name": "PATRON",
        "album": "BLACKBIRD",
        "year": 2024
      },
      {
        "name": "MIRAGE",
        "album": "BLACKBIRD",
        "year": 2024
      },
      {
        "name": "AUDACE",
        "album": "BLACKBIRD",
        "year": 2024
      },
      {
        "name": "BITCHES & RYADS",
        "album": "BLACKBIRD",
        "year": 2024
      },
      {
        "name": "TOUS LES JOURS (feat. Jok'air)",
        "album": "BLACKBIRD",
        "year": 2024
      },
      {
        "name": "LOST",
        "album": "BLACKBIRD",
        "year": 2024
      },
      {
        "name": "PYGMALION",
        "album": "BLACKBIRD",
        "year": 2024
      },
      {
        "name": "Éclair Brut",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "Et palpite encore",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "LNSC",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "En deuil",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "Bleu Cristal",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "Une impression de déjà-vu",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "De la lune (feat. Shadi)",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "Loin d'ici",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "Palpite sous l'œil",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "Enfin seul",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "Océan Sonore",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "La promesse de l'aube",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "Au revoir bb",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "Déchirée",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "Nouveau Blues",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "Comme une cicatrice",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "En écoutant du Brahms",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "Fend le ciel",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "Boom Boom",
        "album": "La nuit sera calme",
        "year": 2021
      },
      {
        "name": "Odyssée",
        "album": "Poésie d'une pulsion, Pt. 2",
        "year": 2022
      },
      {
        "name": "Fuck off",
        "album": "Poésie d'une pulsion, Pt. 2",
        "year": 2022
      },
      {
        "name": "Donjon",
        "album": "Poésie d'une pulsion, Pt. 2",
        "year": 2022
      },
      {
        "name": "2h22",
        "album": "Poésie d'une pulsion, Pt. 2",
        "year": 2022
      },
      {
        "name": "Gospel",
        "album": "Poésie d'une pulsion, Pt. 2",
        "year": 2022
      },
      {
        "name": "Hôtel",
        "album": "Poésie d'une pulsion, Pt. 2",
        "year": 2022
      },
      {
        "name": "Piano bleu",
        "album": "Poésie d'une pulsion, Pt. 2",
        "year": 2022
      },
      {
        "name": "Petit ange",
        "album": "Poésie d'une pulsion, Pt. 2",
        "year": 2022
      },
      {
        "name": "Lynchburg lemonade",
        "album": "Poésie d'une pulsion, Pt. 2",
        "year": 2022
      },
      {
        "name": "Les photos sur les murs",
        "album": "Poésie d'une pulsion, Pt. 2",
        "year": 2022
      },
      {
        "name": "Phoenix",
        "album": "Poésie d'une pulsion, Pt. 2",
        "year": 2022
      },
      {
        "name": "Lâcher de colombes",
        "album": "Poésie d'une pulsion",
        "year": 2022
      },
      {
        "name": "Dystopia",
        "album": "Poésie d'une pulsion",
        "year": 2022
      },
      {
        "name": "Mégot sur trottoir",
        "album": "Poésie d'une pulsion",
        "year": 2022
      },
      {
        "name": "Par amour",
        "album": "Poésie d'une pulsion",
        "year": 2022
      },
      {
        "name": "Bérénice",
        "album": "Poésie d'une pulsion",
        "year": 2022
      },
      {
        "name": "Carte postale",
        "album": "Poésie d'une pulsion",
        "year": 2022
      },
      {
        "name": "Aloha",
        "album": "Poésie d'une pulsion",
        "year": 2022
      },
      {
        "name": "Opium",
        "album": "Poésie d'une pulsion",
        "year": 2022
      },
      {
        "name": "Jack sévère",
        "album": "Poésie d'une pulsion",
        "year": 2022
      },
      {
        "name": "Caviar",
        "album": "Poésie d'une pulsion",
        "year": 2022
      },
      {
        "name": "Sky on the rocks",
        "album": "Poésie d'une pulsion",
        "year": 2022
      },
      {
        "name": "Booska Fuck Off",
        "album": "Booska Fuck Off - Single",
        "year": 2022
      },
      {
        "name": "Elixir",
        "album": "Elixir - Single",
        "year": 2022
      },
      {
        "name": "Gratitude",
        "album": "Gratitude - Single",
        "year": 2022
      },
      {
        "name": "RAINBOW - A COLORS SHOW",
        "album": "RAINBOW - A COLORS SHOW - Single",
        "year": 2022
      },
      {
        "name": "HARMONIE",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "NDSM",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "INTÉRIEUR SCANDINAVE",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "MÉTRO",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "SPORT DE RICHE",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "ALEX ADLER",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "NO LOVE",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "CINCINNATI",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "PARDON",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "INTERLUDE",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "BLUE BIRD",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "FUCK LA FAME",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "RAINBOW (COLORS)",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "BIJOUTIER",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "BB BUZZ",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "BLEU PÉTROLE",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      },
      {
        "name": "Souvenir d'hiver",
        "album": "Souvenir d'hiver - Single",
        "year": 2022
      },
      {
        "name": "HORIZON",
        "album": "HORIZON 25 - Single",
        "year": 2024
      },
      {
        "name": "25",
        "album": "HORIZON 25 - Single",
        "year": 2024
      },
      {
        "name": "BENI",
        "album": "HORIZON 25 - Single",
        "year": 2024
      },
      {
        "name": "CINCINNATI",
        "album": "NEW BLUES, OLD WINE",
        "year": 2022
      }
    ]
  },
  {
    "name": "Jacques Brel",
    "color": "#085041",
    "genre": "French Pop",
    "trackCount": 81,
    "albums": [
      "Infiniment",
      "Les Marquises (Brel)",
      "Les Bonbons (Les Vieux)",
      "Ces gens-là (Bonus Tracks)",
      "La valse a mille temps",
      "Les bourgeois",
      "Quand on a que l'amour",
      "L'homme de la mancha",
      "J'Arrive (Vesoul 4)",
      "Jacques Brel et ses chansons"
    ],
    "tracks": [
      {
        "name": "Jaurès",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "La ville s'endormait",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "Vieillir",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "Le bon Dieu",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "Les F...",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "Orly",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "Les remparts de Varsovie",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "Voir un ami pleurer",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "Knokke-le-Zoute tango",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "Jojo",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "Le lion",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "Les marquises",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "Sans exigences",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "Avec élégance",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "Mai 40",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "L'amour est mort",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "La cathédrale",
        "album": "Les Marquises (Brel)",
        "year": 1977
      },
      {
        "name": "Au suivant",
        "album": "Les Bonbons (Les Vieux)",
        "year": 1966
      },
      {
        "name": "La fanette",
        "album": "Les Bonbons (Les Vieux)",
        "year": 1966
      },
      {
        "name": "Quand on n'a que l'amour",
        "album": "Quand on a que l'amour",
        "year": 1957
      },
      {
        "name": "Mathilde",
        "album": "Ces gens-là (Bonus Tracks)",
        "year": 1965
      },
      {
        "name": "Les bigotes",
        "album": "Les Bonbons (Les Vieux)",
        "year": 1966
      },
      {
        "name": "La quête",
        "album": "Infiniment",
        "year": 1968
      },
      {
        "name": "La Cathédrale",
        "album": "Infiniment",
        "year": 2003
      },
      {
        "name": "L'amour est mort",
        "album": "Infiniment",
        "year": 1977
      },
      {
        "name": "Mai 40",
        "album": "Infiniment",
        "year": 2003
      },
      {
        "name": "Avec Élégance",
        "album": "Infiniment",
        "year": 2003
      },
      {
        "name": "Sans exigences",
        "album": "Infiniment",
        "year": 2003
      },
      {
        "name": "Les marquises",
        "album": "Infiniment",
        "year": 1996
      },
      {
        "name": "Orly",
        "album": "Infiniment",
        "year": 1977
      },
      {
        "name": "La ville s'endormait",
        "album": "Infiniment",
        "year": 1977
      },
      {
        "name": "Jojo",
        "album": "Infiniment",
        "year": 2003
      },
      {
        "name": "J'arrive",
        "album": "Infiniment",
        "year": 1968
      },
      {
        "name": "Quand on n'a que l'amour",
        "album": "Infiniment",
        "year": 2003
      },
      {
        "name": "Le plat pays",
        "album": "Infiniment",
        "year": 1962
      },
      {
        "name": "Mon enfance",
        "album": "Infiniment",
        "year": 1967
      },
      {
        "name": "Les vieux",
        "album": "Infiniment",
        "year": 2003
      },
      {
        "name": "La chanson de jacky",
        "album": "Infiniment",
        "year": 1965
      },
      {
        "name": "La valse à mille temps",
        "album": "Infiniment",
        "year": 1960
      },
      {
        "name": "Le prochain amour",
        "album": "Infiniment",
        "year": 2003
      },
      {
        "name": "La chanson des vieux amants",
        "album": "Infiniment",
        "year": 1967
      },
      {
        "name": "Ne me quitte pas",
        "album": "Infiniment",
        "year": 1988
      },
      {
        "name": "Amsterdam (Live Olympia 1964)",
        "album": "Infiniment",
        "year": 1965
      },
      {
        "name": "La bière",
        "album": "Infiniment",
        "year": 1968
      },
      {
        "name": "Bruxelles",
        "album": "Infiniment",
        "year": 1962
      },
      {
        "name": "Le diable \"ça va\"",
        "album": "Infiniment",
        "year": 2000
      },
      {
        "name": "Il nous faut regarder",
        "album": "Infiniment",
        "year": 1950
      },
      {
        "name": "L'enfance (BOF \"Le far west\")",
        "album": "Infiniment",
        "year": 1968
      },
      {
        "name": "Ces gens-là",
        "album": "Infiniment",
        "year": 1965
      },
      {
        "name": "Les bonbons",
        "album": "Infiniment",
        "year": 2003
      },
      {
        "name": "Les flamandes",
        "album": "Infiniment",
        "year": 1959
      },
      {
        "name": "Les bourgeois",
        "album": "Infiniment",
        "year": 1962
      },
      {
        "name": "Jef",
        "album": "Infiniment",
        "year": 1965
      },
      {
        "name": "Mathilde",
        "album": "Infiniment",
        "year": 1965
      },
      {
        "name": "Marieke",
        "album": "Infiniment",
        "year": 1950
      },
      {
        "name": "Madeleine",
        "album": "Infiniment",
        "year": 1962
      },
      {
        "name": "Les bigotes",
        "album": "Infiniment",
        "year": 2003
      },
      {
        "name": "Vesoul",
        "album": "Infiniment",
        "year": 1968
      },
      {
        "name": "Le moribond",
        "album": "Infiniment",
        "year": 1961
      },
      {
        "name": "Au suivant",
        "album": "Infiniment",
        "year": 2003
      },
      {
        "name": "Le dernier repas",
        "album": "Infiniment",
        "year": 2003
      },
      {
        "name": "Je suis un soir d'été",
        "album": "Infiniment",
        "year": 1968
      },
      {
        "name": "Ne me quitte pas",
        "album": "La valse a mille temps",
        "year": 1959
      },
      {
        "name": "Jef",
        "album": "Ces gens-là (Bonus Tracks)",
        "year": 1965
      },
      {
        "name": "Les flamandes",
        "album": "La valse a mille temps",
        "year": 1959
      },
      {
        "name": "Ces gens-là",
        "album": "Ces gens-là (Bonus Tracks)",
        "year": 1965
      },
      {
        "name": "La chanson de Jacky",
        "album": "Ces gens-là (Bonus Tracks)",
        "year": 1965
      },
      {
        "name": "Les bonbons",
        "album": "Les Bonbons (Les Vieux)",
        "year": 1966
      },
      {
        "name": "La tendresse",
        "album": "La valse a mille temps",
        "year": 1959
      },
      {
        "name": "Les vieux",
        "album": "Les Bonbons (Les Vieux)",
        "year": 1966
      },
      {
        "name": "La quête",
        "album": "L'homme de la mancha",
        "year": 1968
      },
      {
        "name": "Vesoul",
        "album": "J'Arrive (Vesoul 4)",
        "year": 1968
      },
      {
        "name": "La valse à mille temps",
        "album": "La valse a mille temps",
        "year": 1959
      },
      {
        "name": "Grand Jacques (C'est trop facile)",
        "album": "Jacques Brel et ses chansons",
        "year": 1955
      },
      {
        "name": "Le moribond",
        "album": "Marieke",
        "year": 1961
      },
      {
        "name": "Les bourgeois",
        "album": "Les bourgeois",
        "year": 1962
      },
      {
        "name": "La chanson des vieux amants",
        "album": "Jacques Brel 67",
        "year": 1967
      },
      {
        "name": "Le plat pays",
        "album": "Les bourgeois",
        "year": 1962
      },
      {
        "name": "Amsterdam (Live From Olympia, France/1964)",
        "album": "Enregistrement public à l'Olympia 1964",
        "year": 1964
      },
      {
        "name": "Madeleine",
        "album": "Les bourgeois",
        "year": 1962
      },
      {
        "name": "Bruxelles",
        "album": "Les bourgeois",
        "year": 1962
      }
    ]
  },
  {
    "name": "The Beatles",
    "color": "#854F0B",
    "genre": "Rock",
    "trackCount": 75,
    "albums": [
      "The Beatles (The White Album)",
      "Abbey Road (2019 Mix)",
      "Rubber Soul",
      "Magical Mystery Tour"
    ],
    "tracks": [
      {
        "name": "Come Together (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "Something (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "Maxwell's Silver Hammer (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "Oh! Darling (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 2019
      },
      {
        "name": "Octopus's Garden (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "I Want You (She's So Heavy) [2019 Mix]",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "Here Comes the Sun (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "Because (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "You Never Give Me Your Money (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "Sun King (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "Mean Mr. Mustard (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "Polythene Pam (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "She Came In Through the Bathroom Window (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "Golden Slumbers (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "Carry That Weight (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "The End (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "Her Majesty (2019 Mix)",
        "album": "Abbey Road (2019 Mix)",
        "year": 1969
      },
      {
        "name": "Back In the U.S.S.R.",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Dear Prudence",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Glass Onion",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Ob-La-Di, Ob-La-Da",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Wild Honey Pie",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "The Continuing Story of Bungalow Bill",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "While My Guitar Gently Weeps",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Happiness Is a Warm Gun",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Martha My Dear",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "I'm So Tired",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Blackbird",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Piggies",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Rocky Raccoon",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Don't Pass Me By",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Why Don't We Do It In the Road?",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "I Will",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Julia",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Birthday",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Yer Blues",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Mother Nature's Son",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Everybody's Got Something to Hide Except Me and My Monkey",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Sexy Sadie",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Helter Skelter",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Long, Long, Long",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Revolution 1",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Honey Pie",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Savoy Truffle",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Cry Baby Cry",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Revolution 9",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "Good Night",
        "album": "The Beatles (The White Album)",
        "year": 1968
      },
      {
        "name": "The Beatles (Documentary)",
        "album": "The Beatles (The White Album)",
        "year": 2009
      },
      {
        "name": "Magical Mystery Tour",
        "album": "Magical Mystery Tour",
        "year": 1967
      },
      {
        "name": "The Fool On the Hill",
        "album": "Magical Mystery Tour",
        "year": 1967
      },
      {
        "name": "Flying",
        "album": "Magical Mystery Tour",
        "year": 1967
      },
      {
        "name": "Blue Jay Way",
        "album": "Magical Mystery Tour",
        "year": 1967
      },
      {
        "name": "Your Mother Should Know",
        "album": "Magical Mystery Tour",
        "year": 1967
      },
      {
        "name": "I Am the Walrus",
        "album": "Magical Mystery Tour",
        "year": 1967
      },
      {
        "name": "Hello, Goodbye",
        "album": "Magical Mystery Tour",
        "year": 1967
      },
      {
        "name": "Strawberry Fields Forever",
        "album": "Magical Mystery Tour",
        "year": 1967
      },
      {
        "name": "Penny Lane",
        "album": "Magical Mystery Tour",
        "year": 1967
      },
      {
        "name": "Baby, You're a Rich Man",
        "album": "Magical Mystery Tour",
        "year": 1967
      },
      {
        "name": "All You Need Is Love",
        "album": "Magical Mystery Tour",
        "year": 1967
      },
      {
        "name": "Magical Mystery Tour (Documentary)",
        "album": "Magical Mystery Tour",
        "year": 2009
      },
      {
        "name": "Drive My Car",
        "album": "Rubber Soul",
        "year": 1965
      },
      {
        "name": "Norwegian Wood (This Bird Has Flown)",
        "album": "Rubber Soul",
        "year": 1965
      },
      {
        "name": "You Won't See Me",
        "album": "Rubber Soul",
        "year": 1965
      },
      {
        "name": "Nowhere Man",
        "album": "Rubber Soul",
        "year": 1965
      },
      {
        "name": "Think For Yourself",
        "album": "Rubber Soul",
        "year": 1965
      },
      {
        "name": "The Word",
        "album": "Rubber Soul",
        "year": 1965
      },
      {
        "name": "Michelle",
        "album": "Rubber Soul",
        "year": 1965
      },
      {
        "name": "What Goes On",
        "album": "Rubber Soul",
        "year": 1965
      },
      {
        "name": "Girl",
        "album": "Rubber Soul",
        "year": 1965
      },
      {
        "name": "I'm Looking Through You",
        "album": "Rubber Soul",
        "year": 1965
      },
      {
        "name": "In My Life",
        "album": "Rubber Soul",
        "year": 1965
      },
      {
        "name": "Wait",
        "album": "Rubber Soul",
        "year": 1965
      },
      {
        "name": "If I Needed Someone",
        "album": "Rubber Soul",
        "year": 1965
      },
      {
        "name": "Run For Your Life",
        "album": "Rubber Soul",
        "year": 1965
      },
      {
        "name": "Rubber Soul (Documentary)",
        "album": "Rubber Soul",
        "year": 2009
      }
    ]
  },
  {
    "name": "Tyler, The Creator",
    "color": "#72243E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 75,
    "albums": [
      "Cherry Bomb + Instrumentals",
      "CALL ME IF YOU GET LOST",
      "Flower Boy",
      "IGOR",
      "Cherry Bomb",
      "BEST INTEREST - Single",
      "Peach Fuzz - Single",
      "GROUP B - Single",
      "Wolf"
    ],
    "tracks": [
      {
        "name": "Foreword (feat. Rex Orange County)",
        "album": "Flower Boy",
        "year": 2017
      },
      {
        "name": "Where This Flower Blooms (feat. Frank Ocean)",
        "album": "Flower Boy",
        "year": 2017
      },
      {
        "name": "Sometimes...",
        "album": "Flower Boy",
        "year": 2017
      },
      {
        "name": "See You Again (feat. Kali Uchis)",
        "album": "Flower Boy",
        "year": 2017
      },
      {
        "name": "Who Dat Boy (feat. A$AP Rocky)",
        "album": "Flower Boy",
        "year": 2017
      },
      {
        "name": "Pothole (feat. Jaden Smith)",
        "album": "Flower Boy",
        "year": 2017
      },
      {
        "name": "Garden Shed (feat. Estelle)",
        "album": "Flower Boy",
        "year": 2017
      },
      {
        "name": "Boredom (feat. Rex Orange County & Anna of the North)",
        "album": "Flower Boy",
        "year": 2017
      },
      {
        "name": "I Ain't Got Time!",
        "album": "Flower Boy",
        "year": 2017
      },
      {
        "name": "911 / Mr. Lonely (feat. Frank Ocean & Steve Lacy)",
        "album": "Flower Boy",
        "year": 2017
      },
      {
        "name": "Droppin' Seeds (feat. Lil' Wayne)",
        "album": "Flower Boy",
        "year": 2017
      },
      {
        "name": "November",
        "album": "Flower Boy",
        "year": 2017
      },
      {
        "name": "Glitter",
        "album": "Flower Boy",
        "year": 2017
      },
      {
        "name": "Enjoy Right Now, Today",
        "album": "Flower Boy",
        "year": 2017
      },
      {
        "name": "SIR BAUDELAIRE (feat. DJ Drama)",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "CORSO",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "LEMONHEAD (feat. 42 Dugg)",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "WUSYANAME (feat. YoungBoy Never Broke Again & Ty Dolla $ign)",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "LUMBERJACK",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "HOT WIND BLOWS (feat. Lil Wayne)",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "MASSA",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "RUNITUP (feat. Teezo Touchdown)",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "MANIFESTO (feat. Domo Genesis)",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "SWEET / I THOUGHT YOU WANTED TO DANCE (feat. Brent Faiyaz & Fana Hues)",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "MOMMA TALK",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "RISE! (feat. DAISY WORLD)",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "BLESSED",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "JUGGERNAUT (feat. Lil Uzi Vert & Pharrell Williams)",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "WILSHIRE",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "SAFARI",
        "album": "CALL ME IF YOU GET LOST",
        "year": 2021
      },
      {
        "name": "IGOR'S THEME",
        "album": "IGOR",
        "year": 2019
      },
      {
        "name": "EARFQUAKE",
        "album": "IGOR",
        "year": 2019
      },
      {
        "name": "I THINK",
        "album": "IGOR",
        "year": 2019
      },
      {
        "name": "EXACTLY WHAT YOU RUN FROM YOU END UP CHASING",
        "album": "IGOR",
        "year": 2019
      },
      {
        "name": "RUNNING OUT OF TIME",
        "album": "IGOR",
        "year": 2019
      },
      {
        "name": "NEW MAGIC WAND",
        "album": "IGOR",
        "year": 2019
      },
      {
        "name": "A BOY IS A GUN",
        "album": "IGOR",
        "year": 2019
      },
      {
        "name": "PUPPET",
        "album": "IGOR",
        "year": 2019
      },
      {
        "name": "WHAT'S GOOD",
        "album": "IGOR",
        "year": 2019
      },
      {
        "name": "GONE, GONE / THANK YOU",
        "album": "IGOR",
        "year": 2019
      },
      {
        "name": "I DON'T LOVE YOU ANYMORE",
        "album": "IGOR",
        "year": 2019
      },
      {
        "name": "ARE WE STILL FRIENDS?",
        "album": "IGOR",
        "year": 2019
      },
      {
        "name": "DEATHCAMP (feat. Cole Alexander)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "BUFFALO (feat. Shane Powers)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "PILOT (feat. Sydney Bennett)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "RUN (feat. Chaz Bundick & ScHoolboy Q)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "FIND YOUR WINGS (feat. Roy Ayers, Sydney Bennett & Kali Uchis)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "CHERRY BOMB",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "BLOW MY LOAD (feat. Wanya Morris, Dam-Funk, Austin Feinstein & Sydney Bennett)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "2SEATER (feat. Aaron Shaw, Samantha Nelson & Austin Feinstein)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "THE BROWN STAINS OF DARKEESE LATIFAH PART 6-12 (REMIX) [feat. ScHoolboy Q]",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "FUCKING YOUNG / PERFECT (feat. Charlie Wilson, Chaz Bundick, Sydney Bennett & Kali Uchis)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "SMUCKERS (feat. Lil Wayne & Kanye West)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "KEEP DA O'S (feat. Pharrell Williams & Coco O.)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "OKAGA, CA (feat. Alice Smith, Leon Ware & Clem Creevy)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "DEATHCAMP (Instrumental)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "BUFFALO (Instrumental)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "PILOT (Instrumental)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "RUN (Instrumental)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "FIND YOUR WINGS (Instrumental)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "CHERRY BOMB (Instrumental)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "BLOW MY LOAD (Instrumental)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "2SEATER (Instrumental)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "THE BROWN STAINS OF DARKEESE LATIFAH PART 6-12 (REMIX) [Instrumental]",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "FUCKING YOUNG / PERFECT (Instrumental)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "SMUCKERS (Instrumental)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "KEEP DA O'S (Instrumental)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "OKAGA, CA (Instrumental)",
        "album": "Cherry Bomb + Instrumentals",
        "year": 2015
      },
      {
        "name": "FUCKING YOUNG / PERFECT (feat. Charlie Wilson, Chaz Bundick, Syd Bennett, and Kali Uchis)",
        "album": "Cherry Bomb",
        "year": 2015
      },
      {
        "name": "BEST INTEREST",
        "album": "BEST INTEREST - Single",
        "year": 2020
      },
      {
        "name": "Peach Fuzz",
        "album": "Peach Fuzz - Single",
        "year": 2018
      },
      {
        "name": "2SEATER (feat. Aaron Shaw, Samantha Nelson, and Austin Feinstein)",
        "album": "Cherry Bomb",
        "year": 2015
      },
      {
        "name": "SMUCKERS (feat. Lil Wayne and Kanye West)",
        "album": "Cherry Bomb",
        "year": 2015
      },
      {
        "name": "GROUP B",
        "album": "GROUP B - Single",
        "year": 2020
      },
      {
        "name": "IFHY (feat. Pharrell Williams)",
        "album": "Wolf",
        "year": 2013
      }
    ]
  },
  {
    "name": "The Weeknd",
    "color": "#5DCAA5",
    "genre": "R&B/Soul",
    "trackCount": 72,
    "albums": [
      "Starboy",
      "Hurry Up Tomorrow",
      "Hurry Up Tomorrow (Video Album)",
      "After Hours",
      "House of Balloons (Original)",
      "The Highlights (Deluxe Video Album)"
    ],
    "tracks": [
      {
        "name": "The Hills",
        "album": "The Highlights (Deluxe Video Album)",
        "year": 2015
      },
      {
        "name": "Alone Again",
        "album": "After Hours",
        "year": 2020
      },
      {
        "name": "Too Late",
        "album": "After Hours",
        "year": 2020
      },
      {
        "name": "Hardest To Love",
        "album": "After Hours",
        "year": 2020
      },
      {
        "name": "Scared To Live",
        "album": "After Hours",
        "year": 2020
      },
      {
        "name": "Snowchild",
        "album": "After Hours",
        "year": 2020
      },
      {
        "name": "Escape From LA",
        "album": "After Hours",
        "year": 2020
      },
      {
        "name": "Heartless",
        "album": "After Hours",
        "year": 2019
      },
      {
        "name": "Faith",
        "album": "After Hours",
        "year": 2020
      },
      {
        "name": "Blinding Lights",
        "album": "After Hours",
        "year": 2019
      },
      {
        "name": "In Your Eyes",
        "album": "After Hours",
        "year": 2020
      },
      {
        "name": "Save Your Tears",
        "album": "After Hours",
        "year": 2020
      },
      {
        "name": "Repeat After Me (Interlude)",
        "album": "After Hours",
        "year": 2020
      },
      {
        "name": "After Hours",
        "album": "After Hours",
        "year": 2020
      },
      {
        "name": "Until I Bleed Out",
        "album": "After Hours",
        "year": 2020
      },
      {
        "name": "Starboy (feat. Daft Punk)",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "Party Monster",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "False Alarm",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "Reminder",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "Rockin’",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "Secrets",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "True Colors",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "Stargirl Interlude (feat. Lana Del Rey)",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "Sidewalks (feat. Kendrick Lamar)",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "Six Feet Under",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "Love To Lay",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "A Lonely Night",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "Attention",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "Ordinary Life",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "Nothing Without You",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "All I Know (feat. Future)",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "Die For You",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "I Feel It Coming (feat. Daft Punk)",
        "album": "Starboy",
        "year": 2016
      },
      {
        "name": "High For This (Original)",
        "album": "House of Balloons (Original)",
        "year": 2011
      },
      {
        "name": "What You Need (Original)",
        "album": "House of Balloons (Original)",
        "year": 2011
      },
      {
        "name": "House of Balloons / Glass Table Girls (Original)",
        "album": "House of Balloons (Original)",
        "year": 2011
      },
      {
        "name": "The Morning (Original)",
        "album": "House of Balloons (Original)",
        "year": 2011
      },
      {
        "name": "Wicked Games (Original)",
        "album": "House of Balloons (Original)",
        "year": 2011
      },
      {
        "name": "The Party & The After Party (Original)",
        "album": "House of Balloons (Original)",
        "year": 2011
      },
      {
        "name": "Coming Down (Original)",
        "album": "House of Balloons (Original)",
        "year": 2011
      },
      {
        "name": "Loft Music (Original)",
        "album": "House of Balloons (Original)",
        "year": 2011
      },
      {
        "name": "The Knowing (Original)",
        "album": "House of Balloons (Original)",
        "year": 2011
      },
      {
        "name": "Cry For Me",
        "album": "Hurry Up Tomorrow",
        "year": 2025
      },
      {
        "name": "I Can't Fucking Sing",
        "album": "Hurry Up Tomorrow",
        "year": 2025
      },
      {
        "name": "Until We're Skin & Bones",
        "album": "Hurry Up Tomorrow",
        "year": 2025
      },
      {
        "name": "Baptized In Fear",
        "album": "Hurry Up Tomorrow",
        "year": 2025
      },
      {
        "name": "Open Hearts",
        "album": "Hurry Up Tomorrow",
        "year": 2025
      },
      {
        "name": "Opening Night",
        "album": "Hurry Up Tomorrow",
        "year": 2025
      },
      {
        "name": "Given Up On Me",
        "album": "Hurry Up Tomorrow",
        "year": 2025
      },
      {
        "name": "I Can't Wait To Get There",
        "album": "Hurry Up Tomorrow",
        "year": 2025
      },
      {
        "name": "Niagara Falls",
        "album": "Hurry Up Tomorrow",
        "year": 2025
      },
      {
        "name": "Take Me Back To LA",
        "album": "Hurry Up Tomorrow",
        "year": 2025
      },
      {
        "name": "Give Me Mercy",
        "album": "Hurry Up Tomorrow",
        "year": 2025
      },
      {
        "name": "Drive",
        "album": "Hurry Up Tomorrow",
        "year": 2025
      },
      {
        "name": "Red Terror",
        "album": "Hurry Up Tomorrow",
        "year": 2025
      },
      {
        "name": "Without a Warning",
        "album": "Hurry Up Tomorrow",
        "year": 2025
      },
      {
        "name": "Hurry Up Tomorrow",
        "album": "Hurry Up Tomorrow",
        "year": 2025
      },
      {
        "name": "Cry For Me",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      },
      {
        "name": "I Can't Fucking Sing",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      },
      {
        "name": "Until We're Skin & Bones",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      },
      {
        "name": "Baptized In Fear",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      },
      {
        "name": "Open Hearts",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      },
      {
        "name": "Opening Night",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      },
      {
        "name": "Given Up On Me",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      },
      {
        "name": "I Can't Wait To Get There",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      },
      {
        "name": "Niagara Falls",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      },
      {
        "name": "Take Me Back To LA",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      },
      {
        "name": "Give Me Mercy",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      },
      {
        "name": "Drive",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      },
      {
        "name": "Red Terror",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      },
      {
        "name": "Without a Warning",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      },
      {
        "name": "Hurry Up Tomorrow",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      }
    ]
  },
  {
    "name": "BU$HI",
    "color": "#F0997B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 72,
    "albums": [
      "Bushi",
      "Bushi Tape 2",
      "Interlude",
      "Bushi 1.5",
      "ÉPILOGUE",
      "GRÜNT #60 - EP",
      "Mistral - Single",
      "Qatari - Single",
      "BlueSky - Single"
    ],
    "tracks": [
      {
        "name": "Obito",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Saturn City (feat. Mussy)",
        "album": "Bushi 1.5",
        "year": 2020
      },
      {
        "name": "Beach House (feat. Azur)",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Mistral",
        "album": "Mistral - Single",
        "year": 2021
      },
      {
        "name": "Qatari",
        "album": "Qatari - Single",
        "year": 2021
      },
      {
        "name": "No Love",
        "album": "Bushi 1.5",
        "year": 2020
      },
      {
        "name": "Obito, Pt. 2",
        "album": "Bushi 1.5",
        "year": 2020
      },
      {
        "name": "Melbourne (feat. Yuzmv)",
        "album": "Bushi 1.5",
        "year": 2020
      },
      {
        "name": "Sierra Leone",
        "album": "Bushi 1.5",
        "year": 2020
      },
      {
        "name": "L'Averse",
        "album": "Bushi 1.5",
        "year": 2020
      },
      {
        "name": "Téléphone",
        "album": "Bushi 1.5",
        "year": 2020
      },
      {
        "name": "Brassens",
        "album": "Bushi 1.5",
        "year": 2020
      },
      {
        "name": "Mes Streams",
        "album": "Bushi 1.5",
        "year": 2020
      },
      {
        "name": "Nitro",
        "album": "Bushi 1.5",
        "year": 2020
      },
      {
        "name": "Millenium",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Tesla",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Benson",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Drippy (feat. gouap)",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Dragon (feat. Mussy)",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Tutto Bene",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Yasuke",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Fast & Furious",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Mon Hoodie",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Jumpman",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "SUPERSTAR",
        "album": "ÉPILOGUE",
        "year": 2025
      },
      {
        "name": "IMMORTELS",
        "album": "ÉPILOGUE",
        "year": 2025
      },
      {
        "name": "STYLE DE VIE",
        "album": "ÉPILOGUE",
        "year": 2025
      },
      {
        "name": "AFTERPARTY",
        "album": "ÉPILOGUE",
        "year": 2025
      },
      {
        "name": "AUDI",
        "album": "ÉPILOGUE",
        "year": 2025
      },
      {
        "name": "MIA",
        "album": "ÉPILOGUE",
        "year": 2025
      },
      {
        "name": "BIGBRO",
        "album": "ÉPILOGUE",
        "year": 2025
      },
      {
        "name": "BÉNI X4",
        "album": "ÉPILOGUE",
        "year": 2025
      },
      {
        "name": "INTERLUDE",
        "album": "ÉPILOGUE",
        "year": 2025
      },
      {
        "name": "TOUS LES SOIRS",
        "album": "ÉPILOGUE",
        "year": 2025
      },
      {
        "name": "Margiela",
        "album": "Bushi Tape 2",
        "year": 2022
      },
      {
        "name": "Ma préférée",
        "album": "Bushi Tape 2",
        "year": 2022
      },
      {
        "name": "Louis",
        "album": "Bushi Tape 2",
        "year": 2022
      },
      {
        "name": "Big Ben",
        "album": "Bushi Tape 2",
        "year": 2022
      },
      {
        "name": "Phen",
        "album": "Bushi Tape 2",
        "year": 2022
      },
      {
        "name": "Parachute",
        "album": "Bushi Tape 2",
        "year": 2022
      },
      {
        "name": "Dillawave",
        "album": "Bushi Tape 2",
        "year": 2022
      },
      {
        "name": "Marathon",
        "album": "Bushi Tape 2",
        "year": 2022
      },
      {
        "name": "6 O'clock",
        "album": "Bushi Tape 2",
        "year": 2022
      },
      {
        "name": "Life",
        "album": "Bushi Tape 2",
        "year": 2022
      },
      {
        "name": "Peter Parker (feat. Mussy)",
        "album": "Bushi Tape 2",
        "year": 2022
      },
      {
        "name": "Goten",
        "album": "Bushi Tape 2",
        "year": 2022
      },
      {
        "name": "Link Up",
        "album": "Bushi Tape 2",
        "year": 2022
      },
      {
        "name": "BlueSky",
        "album": "BlueSky - Single",
        "year": 2019
      },
      {
        "name": "Obito",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Benson",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Millenium",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Fast & Furious",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Yasuke",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Beach House (feat. Azur)",
        "album": "Bushi",
        "year": 2020
      },
      {
        "name": "Majeur",
        "album": "Interlude",
        "year": 2022
      },
      {
        "name": "Boy",
        "album": "Interlude",
        "year": 2022
      },
      {
        "name": "Jamais",
        "album": "Interlude",
        "year": 2022
      },
      {
        "name": "FF",
        "album": "Interlude",
        "year": 2022
      },
      {
        "name": "Allo Allo",
        "album": "Interlude",
        "year": 2022
      },
      {
        "name": "Chrom",
        "album": "Interlude",
        "year": 2022
      },
      {
        "name": "9am",
        "album": "Interlude",
        "year": 2022
      },
      {
        "name": "X",
        "album": "Interlude",
        "year": 2022
      },
      {
        "name": "Pistolet",
        "album": "Interlude",
        "year": 2022
      },
      {
        "name": "Champagne",
        "album": "Interlude",
        "year": 2022
      },
      {
        "name": "Vrais amis",
        "album": "Interlude",
        "year": 2022
      },
      {
        "name": "Kingdom Hearts",
        "album": "Interlude",
        "year": 2022
      },
      {
        "name": "GIVENCHY (LIVE)",
        "album": "GRÜNT #60 - EP",
        "year": 2023
      },
      {
        "name": "GEPETTO (LIVE)",
        "album": "GRÜNT #60 - EP",
        "year": 2023
      },
      {
        "name": "PARAPLUIE",
        "album": "GRÜNT #60 - EP",
        "year": 2023
      },
      {
        "name": "EURO DOLLAR",
        "album": "GRÜNT #60 - EP",
        "year": 2023
      },
      {
        "name": "GIVENCHY",
        "album": "GRÜNT #60 - EP",
        "year": 2023
      },
      {
        "name": "GEPETTO",
        "album": "GRÜNT #60 - EP",
        "year": 2023
      }
    ]
  },
  {
    "name": "Hamza",
    "color": "#85B7EB",
    "genre": "Hip-Hop/Rap",
    "trackCount": 70,
    "albums": [
      "Zombie Life",
      "MANIA",
      "Sincèrement",
      "Drifté",
      "Paradise",
      "1994",
      "Santa Sauce 2",
      "H-24",
      "KYKY2BONDY - Single",
      "Tueurs"
    ],
    "tracks": [
      {
        "name": "Life",
        "album": "1994",
        "year": 2017
      },
      {
        "name": "God Bless (feat. Damso)",
        "album": "Santa Sauce 2",
        "year": 2019
      },
      {
        "name": "HS (feat. SCH)",
        "album": "Paradise",
        "year": 2019
      },
      {
        "name": "KYKY2BONDY",
        "album": "KYKY2BONDY - Single",
        "year": 2025
      },
      {
        "name": "ENCORE UNE NUIT",
        "album": "MANIA",
        "year": 2025
      },
      {
        "name": "KYKY2BONDY",
        "album": "MANIA",
        "year": 2025
      },
      {
        "name": "DRAGONS (feat. Werenoi)",
        "album": "MANIA",
        "year": 2025
      },
      {
        "name": "SLOVAKIA",
        "album": "MANIA",
        "year": 2025
      },
      {
        "name": "COME & SEE ME",
        "album": "MANIA",
        "year": 2025
      },
      {
        "name": "SMOKIN & DRINKIN",
        "album": "MANIA",
        "year": 2025
      },
      {
        "name": "LOCATION (feat. Byron Messia)",
        "album": "MANIA",
        "year": 2025
      },
      {
        "name": "OSCAR DE LA HOYA",
        "album": "MANIA",
        "year": 2025
      },
      {
        "name": "BOTTEGA VENETA",
        "album": "MANIA",
        "year": 2025
      },
      {
        "name": "TOXIC (feat. Rema)",
        "album": "MANIA",
        "year": 2025
      },
      {
        "name": "MEGAN",
        "album": "MANIA",
        "year": 2025
      },
      {
        "name": "AFRI",
        "album": "MANIA",
        "year": 2025
      },
      {
        "name": "YESTERDAY",
        "album": "MANIA",
        "year": 2025
      },
      {
        "name": "DESTINY",
        "album": "MANIA",
        "year": 2025
      },
      {
        "name": "FOREVER",
        "album": "MANIA",
        "year": 2025
      },
      {
        "name": "Minuit 13 (feat. Christine and the Queens & Oxmo Puccino)",
        "album": "Paradise",
        "year": 2019
      },
      {
        "name": "Mi Amor",
        "album": "H-24",
        "year": 2015
      },
      {
        "name": "Gasolina (feat. Gambi)",
        "album": "Santa Sauce 2",
        "year": 2019
      },
      {
        "name": "1994",
        "album": "1994",
        "year": 2017
      },
      {
        "name": "Je m'évade",
        "album": "Tueurs",
        "year": 2017
      },
      {
        "name": "Cuba",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Minimum",
        "album": "H-24",
        "year": 2015
      },
      {
        "name": "Godzilla",
        "album": "1994",
        "year": 2017
      },
      {
        "name": "Pasadena",
        "album": "1994",
        "year": 2017
      },
      {
        "name": "Galerie",
        "album": "Paradise",
        "year": 2019
      },
      {
        "name": "Blue Crystal",
        "album": "Paradise",
        "year": 2019
      },
      {
        "name": "Oseille",
        "album": "Santa Sauce 2",
        "year": 2019
      },
      {
        "name": "Validé",
        "album": "Paradise",
        "year": 2019
      },
      {
        "name": "Introduction",
        "album": "Introduction - Single",
        "year": 2023
      },
      {
        "name": "Lever Du Soleil",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Zombie Life",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "La Clef",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Tu Me Donnes Des Idées",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Mes Entrailles",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Mercedes",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Pardonne-Moi",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Rendez-Vous",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Slowdown",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Zeus",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Jamais Trop Jeune",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Hennessy",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Slow",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Au Top",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Marley",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Rolling Stone",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Nuit de Folie",
        "album": "Zombie Life",
        "year": 2016
      },
      {
        "name": "Drifté",
        "album": "Drifté",
        "year": 2023
      },
      {
        "name": "Drifté (Extended)",
        "album": "Drifté",
        "year": 2023
      },
      {
        "name": "Drifté (Sped Up)",
        "album": "Drifté",
        "year": 2023
      },
      {
        "name": "Drifté (Slowed Down)",
        "album": "Drifté",
        "year": 2023
      },
      {
        "name": "Drifté (Instrumental)",
        "album": "Drifté",
        "year": 2023
      },
      {
        "name": "Drifté (Acapella)",
        "album": "Drifté",
        "year": 2023
      },
      {
        "name": "Drifté (Radio Edit)",
        "album": "Drifté",
        "year": 2023
      },
      {
        "name": "Introduction",
        "album": "Sincèrement",
        "year": 2023
      },
      {
        "name": "Free YSL",
        "album": "Sincèrement",
        "year": 2023
      },
      {
        "name": "Ma Réalité",
        "album": "Sincèrement",
        "year": 2023
      },
      {
        "name": "Au Bout De La Nuit",
        "album": "Sincèrement",
        "year": 2023
      },
      {
        "name": "Only U",
        "album": "Sincèrement",
        "year": 2023
      },
      {
        "name": "Tsunami",
        "album": "Sincèrement",
        "year": 2023
      },
      {
        "name": "Codéine 19",
        "album": "Sincèrement",
        "year": 2023
      },
      {
        "name": "Nasa",
        "album": "Sincèrement",
        "year": 2023
      },
      {
        "name": "WWE",
        "album": "Sincèrement",
        "year": 2023
      },
      {
        "name": "Murder",
        "album": "Sincèrement",
        "year": 2023
      },
      {
        "name": "Plus Jamais La Même",
        "album": "Sincèrement",
        "year": 2023
      },
      {
        "name": "I Love U",
        "album": "Sincèrement",
        "year": 2023
      },
      {
        "name": "Sincèrement",
        "album": "Sincèrement",
        "year": 2023
      }
    ]
  },
  {
    "name": "Travis Scott",
    "color": "#97C459",
    "genre": "Hip-Hop/Rap",
    "trackCount": 68,
    "albums": [
      "UTOPIA",
      "ASTROWORLD",
      "Rodeo",
      "Birds In The Trap Sing McKnight",
      "JACKBOYS 2",
      "HIGHEST IN THE ROOM - Single"
    ],
    "tracks": [
      {
        "name": "SICKO MODE",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "HOUSTONFORNICATION",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "NO BYSTANDERS",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "COFFEE BEAN",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "CAROUSEL",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "CAN'T SAY",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "SKELETONS",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "NC-17",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "ASTROTHUNDER",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "WHO? WHAT!",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "STOP TRYING TO BE GOD",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "BUTTERFLY EFFECT",
        "album": "ASTROWORLD",
        "year": 2017
      },
      {
        "name": "R.I.P. SCREW",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "5% TINT",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "STARGAZING",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "YOSEMITE",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "WAKE UP",
        "album": "ASTROWORLD",
        "year": 2018
      },
      {
        "name": "goosebumps",
        "album": "Birds In The Trap Sing McKnight",
        "year": 2016
      },
      {
        "name": "HIGHEST IN THE ROOM",
        "album": "HIGHEST IN THE ROOM - Single",
        "year": 2019
      },
      {
        "name": "Pornography",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "Oh My Dis Side (feat. Quavo)",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "3500 (feat. Future & 2 Chainz)",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "Wasted (feat. Juicy J)",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "Pray 4 Love (feat. The Weeknd)",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "Nightcrawler (feat. Swae Lee & Chief Keef)",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "Piss On Your Grave (feat. Kanye West)",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "Antidote",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "Impossible",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "Maria I'm Drunk (feat. Justin Bieber & Young Thug)",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "Flying High (feat. Toro y Moi)",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "I Can Tell",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "Apple Pie",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "Ok Alright (feat. ScHoolboy Q)",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "Never Catch Me",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "KICK OUT",
        "album": "JACKBOYS 2",
        "year": 2025
      },
      {
        "name": "DUMBO",
        "album": "JACKBOYS 2",
        "year": 2025
      },
      {
        "name": "the ends",
        "album": "Birds In The Trap Sing McKnight",
        "year": 2016
      },
      {
        "name": "way back",
        "album": "Birds In The Trap Sing McKnight",
        "year": 2016
      },
      {
        "name": "coordinate",
        "album": "Birds In The Trap Sing McKnight",
        "year": 2016
      },
      {
        "name": "through the late night",
        "album": "Birds In The Trap Sing McKnight",
        "year": 2016
      },
      {
        "name": "beibs in the trap",
        "album": "Birds In The Trap Sing McKnight",
        "year": 2016
      },
      {
        "name": "sdp interlude",
        "album": "Birds In The Trap Sing McKnight",
        "year": 2016
      },
      {
        "name": "sweet sweet",
        "album": "Birds In The Trap Sing McKnight",
        "year": 2016
      },
      {
        "name": "outside",
        "album": "Birds In The Trap Sing McKnight",
        "year": 2016
      },
      {
        "name": "first take",
        "album": "Birds In The Trap Sing McKnight",
        "year": 2016
      },
      {
        "name": "lose",
        "album": "Birds In The Trap Sing McKnight",
        "year": 2016
      },
      {
        "name": "guidance",
        "album": "Birds In The Trap Sing McKnight",
        "year": 2016
      },
      {
        "name": "wonderful",
        "album": "Birds In The Trap Sing McKnight",
        "year": 2016
      },
      {
        "name": "90210 (feat. Kacy Hill)",
        "album": "Rodeo",
        "year": 2015
      },
      {
        "name": "HYAENA",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "THANK GOD",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "MODERN JAM (feat. Teezo Touchdown)",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "MY EYES",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "GOD'S COUNTRY",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "SIRENS",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "MELTDOWN (feat. Drake)",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "FE!N (feat. Playboi Carti)",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "DELRESTO (ECHOES) [feat. Beyoncé]",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "I KNOW ?",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "TOPIA TWINS (feat. Rob49 & 21 Savage)",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "CIRCUS MAXIMUS (feat. The Weeknd & Swae Lee)",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "PARASAIL (feat. Yung Lean & Dave Chappelle)",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "SKITZO (feat. Young Thug)",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "LOST FOREVER (feat. Westside Gunn)",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "LOOOVE (feat. Kid Cudi)",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "K-POP (feat. Bad Bunny & The Weeknd)",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "TELEKINESIS (feat. SZA & Future)",
        "album": "UTOPIA",
        "year": 2023
      },
      {
        "name": "TIL FURTHER NOTICE (feat. James Blake & 21 Savage)",
        "album": "UTOPIA",
        "year": 2023
      }
    ]
  },
  {
    "name": "disiz",
    "color": "#FAC775",
    "genre": "Hip-Hop/Rap",
    "trackCount": 68,
    "albums": [
      "Pacifique",
      "Le poisson rouge",
      "L'Amour...",
      "L’Amour",
      "Transe-lucide"
    ],
    "tracks": [
      {
        "name": "Qu'ils ont de la chance",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "TUE L'AMOUR",
        "album": "L’Amour",
        "year": 2022
      },
      {
        "name": "EMOJI SOLEIL JAUNE",
        "album": "L’Amour",
        "year": 2022
      },
      {
        "name": "All IN",
        "album": "L’Amour",
        "year": 2022
      },
      {
        "name": "KLIMT - TERMINAL 2",
        "album": "L’Amour",
        "year": 2022
      },
      {
        "name": "CASINO",
        "album": "L’Amour",
        "year": 2021
      },
      {
        "name": "ALLELUIA",
        "album": "L’Amour",
        "year": 2022
      },
      {
        "name": "L'AMOUR",
        "album": "L’Amour",
        "year": 2022
      },
      {
        "name": "SUBLIME",
        "album": "L’Amour",
        "year": 2022
      },
      {
        "name": "C'EST LE LOVE MA GUEULE",
        "album": "L’Amour",
        "year": 2022
      },
      {
        "name": "DISPO ?",
        "album": "L’Amour",
        "year": 2022
      },
      {
        "name": "POIDS LOURD",
        "album": "L’Amour",
        "year": 2022
      },
      {
        "name": "Radeau",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "Splash",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "Carré bleu",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "À petit feu",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "Menteur menteuse (feat. Margot Guera)",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "Marquises (feat. Hamza)",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "Compliqué",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "Meulé meulé / Aighttt",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "Watcha",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "L.U.T.T.E",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "Quand je serai chaos",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "Vibe",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "Poisson étrange",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "Ça va aller (Secret RMX)",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "Auto-Dance",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "MODE D’EMPLOI",
        "album": "L'Amour...",
        "year": 2023
      },
      {
        "name": "CONS’ DE LOVE",
        "album": "L'Amour...",
        "year": 2023
      },
      {
        "name": "OH MADELEINE",
        "album": "L'Amour...",
        "year": 2023
      },
      {
        "name": "QUARANTE-CINQ",
        "album": "L'Amour...",
        "year": 2023
      },
      {
        "name": "SUBLIME",
        "album": "L'Amour...",
        "year": 2022
      },
      {
        "name": "CASINO",
        "album": "L'Amour...",
        "year": 2021
      },
      {
        "name": "TUE L'AMOUR",
        "album": "L'Amour...",
        "year": 2022
      },
      {
        "name": "WEEKEND LOVER (feat. Archibald Smith)",
        "album": "L'Amour...",
        "year": 2022
      },
      {
        "name": "POIDS LOURD",
        "album": "L'Amour...",
        "year": 2022
      },
      {
        "name": "ALLELUIA",
        "album": "L'Amour...",
        "year": 2022
      },
      {
        "name": "C'EST LE LOVE MAGUEULE",
        "album": "L'Amour...",
        "year": 2022
      },
      {
        "name": "DISPO ?",
        "album": "L'Amour...",
        "year": 2022
      },
      {
        "name": "ALL IN",
        "album": "L'Amour...",
        "year": 2022
      },
      {
        "name": "KLIMT + TERMINAL 2",
        "album": "L'Amour...",
        "year": 2022
      },
      {
        "name": "EMOJI SOLEIL JAUNE",
        "album": "L'Amour...",
        "year": 2022
      },
      {
        "name": "L'AMOUR",
        "album": "L'Amour...",
        "year": 2022
      },
      {
        "name": "Intro",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "Le Challenger",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "Un Scratch, Un Beat, Un Rap",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "J'pète Les Plombs",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "C'est ça la France (feat. Eloquence)",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "Dieu Seul Sait Quand Le Glas Sonne",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "J'irai Cracher Sur Vos Tombes (feat. Taïro)",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "Ghetto Sitcom",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "Fuck Disiz",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "Klash Pas Quand Même (feat. Bricefa (SDLO))",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "Plus Le Temps",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "L'associé Du Diable",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "L'avocat Des Anges (feat. Toy)",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "Lyrics De Gamin (feat. Akhenaton)",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "Gnibi (feat. Thione Seck)",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "La Philosophie Du Hall (feat. Eloquence & Ruan Rozoff)",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "Le Poisson Rouge",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "Les Rumeurs (feat. JoeyStarr)",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "Le 6Ième Sens (feat. Bricefa, Dayen, Béton Armé, Cordelite & 13)",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "Outro (Disiz)",
        "album": "Le poisson rouge",
        "year": 2000
      },
      {
        "name": "Autre espèce",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "La fille de la piscine",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "Passage secret (Soma)",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "ADN",
        "album": "Pacifique",
        "year": 2017
      },
      {
        "name": "Miskine (feat. Mad)",
        "album": "Transe-lucide",
        "year": 2014
      }
    ]
  },
  {
    "name": "So La Lune",
    "color": "#AFA9EC",
    "genre": "Hip-Hop/Rap",
    "trackCount": 68,
    "albums": [
      "L'enfant de la pluie",
      "Nouveau Produit",
      "Fissure de vie",
      "NUMERO 11 - EP",
      "Kenna - EP",
      "Wilma - EP",
      "Tsuki",
      "Orbite - EP",
      "2ème faille (Silfra) - EP",
      "SOS - Single"
    ],
    "tracks": [
      {
        "name": "Rodé",
        "album": "Orbite - EP",
        "year": 2021
      },
      {
        "name": "Interlune",
        "album": "Fissure de vie",
        "year": 2022
      },
      {
        "name": "2 i",
        "album": "Fissure de vie",
        "year": 2022
      },
      {
        "name": "Range Ro",
        "album": "Fissure de vie",
        "year": 2022
      },
      {
        "name": "Soleil mourant",
        "album": "Fissure de vie",
        "year": 2022
      },
      {
        "name": "Dona",
        "album": "Fissure de vie",
        "year": 2022
      },
      {
        "name": "Outrône",
        "album": "Fissure de vie",
        "year": 2022
      },
      {
        "name": "Vide",
        "album": "Fissure de vie",
        "year": 2022
      },
      {
        "name": "Fin heureuse",
        "album": "Fissure de vie",
        "year": 2022
      },
      {
        "name": "Éternelle 2",
        "album": "Fissure de vie",
        "year": 2022
      },
      {
        "name": "Péché",
        "album": "Fissure de vie",
        "year": 2022
      },
      {
        "name": "Nicki",
        "album": "Fissure de vie",
        "year": 2022
      },
      {
        "name": "Medellín",
        "album": "Fissure de vie",
        "year": 2022
      },
      {
        "name": "Guérison",
        "album": "Fissure de vie",
        "year": 2022
      },
      {
        "name": "Déconnecté",
        "album": "Fissure de vie",
        "year": 2022
      },
      {
        "name": "Shinobi",
        "album": "Tsuki",
        "year": 2020
      },
      {
        "name": "Balade",
        "album": "Tsuki",
        "year": 2020
      },
      {
        "name": "C-11",
        "album": "Nouveau Produit",
        "year": 2025
      },
      {
        "name": "30 secondes",
        "album": "Nouveau Produit",
        "year": 2025
      },
      {
        "name": "Ça ira (feat. UZI)",
        "album": "Nouveau Produit",
        "year": 2025
      },
      {
        "name": "Motor",
        "album": "Nouveau Produit",
        "year": 2025
      },
      {
        "name": "Odéon",
        "album": "Nouveau Produit",
        "year": 2025
      },
      {
        "name": "Isolé",
        "album": "Nouveau Produit",
        "year": 2025
      },
      {
        "name": "Tout le temps (feat. Rim'K & Soprano)",
        "album": "Nouveau Produit",
        "year": 2025
      },
      {
        "name": "STDM",
        "album": "Nouveau Produit",
        "year": 2025
      },
      {
        "name": "Bendo Toute La Nuit (feat. Jolagreen23)",
        "album": "Nouveau Produit",
        "year": 2025
      },
      {
        "name": "Albator II",
        "album": "Nouveau Produit",
        "year": 2025
      },
      {
        "name": "Full Piège (feat. Guizmo)",
        "album": "Nouveau Produit",
        "year": 2025
      },
      {
        "name": "Journal",
        "album": "Nouveau Produit",
        "year": 2025
      },
      {
        "name": "Nouveau Produit",
        "album": "Nouveau Produit",
        "year": 2025
      },
      {
        "name": "Luc Besson (feat. Lujipeka)",
        "album": "Nouveau Produit",
        "year": 2025
      },
      {
        "name": "Le Masque",
        "album": "Nouveau Produit",
        "year": 2025
      },
      {
        "name": "Opening",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "Remontada",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "99 avenue",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "Bloqué",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "Un jour d'été",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "Perte de temps (feat. Khali)",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "L'Allemande",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "10 Hummers",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "Bip bip",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "Sali",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "Interlude : Froide l'averse",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "Suspects (feat. SCH)",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "OP",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "Le dernier maître de l'eau",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "Les toits de la ville",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "Triste temps",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "Au BPM",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "Sales images",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "Parfum automne (Bonus)",
        "album": "L'enfant de la pluie",
        "year": 2023
      },
      {
        "name": "3 FOIS X OU SANTANA",
        "album": "NUMERO 11 - EP",
        "year": 2024
      },
      {
        "name": "TITULAIRE",
        "album": "NUMERO 11 - EP",
        "year": 2024
      },
      {
        "name": "MAL DE MER",
        "album": "NUMERO 11 - EP",
        "year": 2024
      },
      {
        "name": "A DIX COULEURS",
        "album": "NUMERO 11 - EP",
        "year": 2024
      },
      {
        "name": "SA TEILLE SON J",
        "album": "NUMERO 11 - EP",
        "year": 2024
      },
      {
        "name": "L'averse",
        "album": "Kenna - EP",
        "year": 2022
      },
      {
        "name": "Si ça compte (feat. Green Montana)",
        "album": "Kenna - EP",
        "year": 2022
      },
      {
        "name": "Vie d'avant",
        "album": "Kenna - EP",
        "year": 2022
      },
      {
        "name": "Un peu de moi",
        "album": "Kenna - EP",
        "year": 2022
      },
      {
        "name": "Gépetto",
        "album": "Kenna - EP",
        "year": 2022
      },
      {
        "name": "Océan",
        "album": "Wilma - EP",
        "year": 2022
      },
      {
        "name": "La pierre",
        "album": "Wilma - EP",
        "year": 2022
      },
      {
        "name": "L'âme",
        "album": "Wilma - EP",
        "year": 2022
      },
      {
        "name": "Arkham",
        "album": "Wilma - EP",
        "year": 2022
      },
      {
        "name": "Numéro 11",
        "album": "Wilma - EP",
        "year": 2022
      },
      {
        "name": "Rob Lucci",
        "album": "2ème faille (Silfra) - EP",
        "year": 2021
      },
      {
        "name": "SOS",
        "album": "SOS - Single",
        "year": 2023
      }
    ]
  },
  {
    "name": "Jolagreen23",
    "color": "#F5C4B3",
    "genre": "Rap",
    "trackCount": 67,
    "albums": [
      "23 JOURS PLUS TARD",
      "GOTY EDITION",
      "+99XP",
      "RECHERCHE & DESTRUCTION",
      "Métal - Single"
    ],
    "tracks": [
      {
        "name": "SMACKDOWN VS RAW2009",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "7.5.0.8 ST LAZARE",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "MAOZEDONG",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "GUTEN TAG",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "APPEL D'UN BRO",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "1RUE PHILIPPE DE METZ",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "300.000",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "M4SHERMAN",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "DEEPSEEK",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "JOLLY ROGER",
        "album": "+99XP",
        "year": 2024
      },
      {
        "name": "LONGLIFE NICKY LARSON (feat. Green Montana)",
        "album": "+99XP",
        "year": 2024
      },
      {
        "name": "ESSKE ?",
        "album": "+99XP",
        "year": 2024
      },
      {
        "name": "1.2.3 (2023VERSION) [feat. Adèle Castillon]",
        "album": "+99XP",
        "year": 2024
      },
      {
        "name": "STALINGRAD",
        "album": "+99XP",
        "year": 2024
      },
      {
        "name": "CRASH BANDICOOT",
        "album": "+99XP",
        "year": 2024
      },
      {
        "name": "PUTAIN D'HIVER",
        "album": "+99XP",
        "year": 2024
      },
      {
        "name": "4BULLDOG",
        "album": "+99XP",
        "year": 2024
      },
      {
        "name": "PLUS LE MÊME (feat. Lesram)",
        "album": "+99XP",
        "year": 2024
      },
      {
        "name": "HELLCAT OU CAMARO",
        "album": "+99XP",
        "year": 2024
      },
      {
        "name": "BRICK BY BRICK",
        "album": "+99XP",
        "year": 2024
      },
      {
        "name": "SLIDE",
        "album": "+99XP",
        "year": 2024
      },
      {
        "name": "360TRICKSHOT",
        "album": "+99XP",
        "year": 2024
      },
      {
        "name": "800€",
        "album": "+99XP",
        "year": 2024
      },
      {
        "name": "KEDOISJFAIRE ?",
        "album": "+99XP",
        "year": 2024
      },
      {
        "name": "12HEURES MINUIT",
        "album": "RECHERCHE & DESTRUCTION",
        "year": 2023
      },
      {
        "name": "JOUR J (feat. Wallace Cleaver)",
        "album": "RECHERCHE & DESTRUCTION",
        "year": 2023
      },
      {
        "name": "GANGTAKA",
        "album": "RECHERCHE & DESTRUCTION",
        "year": 2023
      },
      {
        "name": "JE CONNAIS LA PATIENCE",
        "album": "RECHERCHE & DESTRUCTION",
        "year": 2023
      },
      {
        "name": "0.92",
        "album": "RECHERCHE & DESTRUCTION",
        "year": 2023
      },
      {
        "name": "C17",
        "album": "RECHERCHE & DESTRUCTION",
        "year": 2023
      },
      {
        "name": "OKC (feat. Benny the Butcher)",
        "album": "RECHERCHE & DESTRUCTION",
        "year": 2023
      },
      {
        "name": "MAYBACH F.L.O",
        "album": "RECHERCHE & DESTRUCTION",
        "year": 2023
      },
      {
        "name": "DESPERATE BRIKLIFE",
        "album": "RECHERCHE & DESTRUCTION",
        "year": 2023
      },
      {
        "name": "AIMBOT (2021VERSION)",
        "album": "RECHERCHE & DESTRUCTION",
        "year": 2023
      },
      {
        "name": "DRAGON2KOMODO",
        "album": "RECHERCHE & DESTRUCTION",
        "year": 2023
      },
      {
        "name": "BBP (BROKE.BEFORE.PRIME)",
        "album": "RECHERCHE & DESTRUCTION",
        "year": 2023
      },
      {
        "name": "Métal",
        "album": "Métal - Single",
        "year": 2026
      },
      {
        "name": "CR7 MAN UTD",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "ÉNERGIE (KI/CHAKRA)",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "FUMER LE VERT",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "KABUTO (RDA)",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "KINO DER TOTEN",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "JOINT DE SEUM",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "RENAULT SCENIC",
        "album": "GOTY EDITION",
        "year": 2025
      },
      {
        "name": "MONSTRES&DEMONS",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "JAPANEXPO",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "LOCKED UP (feat. Tiakola)",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "CRUELLA",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "PHANTOM",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "KADYROV",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "MON CARTOON",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "BLEUDECHANEL",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "2319 (feat. La Mano 1.9)",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "INAZUMA11",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "METAL",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "LA QUÊTE",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "PAR LA FENÊTRE",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "M1030",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "PARIS7",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "2 TEMPS EN TEMPS",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "JME SENS DIFFERENT",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "FOUTULESEUM",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "MARIA",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "FAUX SOURIRE",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "MADARASKIT",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "JOLAF (feat. La Fève)",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      },
      {
        "name": "23JOURSPLUSTARD",
        "album": "23 JOURS PLUS TARD",
        "year": 2026
      }
    ]
  },
  {
    "name": "Serge Gainsbourg",
    "color": "#9FE1CB",
    "genre": "Pop",
    "trackCount": 65,
    "albums": [
      "L'homme à tête de chou",
      "You're Under Arrest",
      "Love On The Beat",
      "Histoire de Melody Nelson",
      "Jane Birkin & Serge Gainsbourg",
      "Bonnie And Clyde",
      "Initials B.B.",
      "Gainsbourg percussions",
      "N°4",
      "Aux armes et caetera"
    ],
    "tracks": [
      {
        "name": "Love On The Beat",
        "album": "Love On The Beat",
        "year": 1984
      },
      {
        "name": "Sorry Angel",
        "album": "Love On The Beat",
        "year": 1984
      },
      {
        "name": "Hmm Hmm Hmm",
        "album": "Love On The Beat",
        "year": 1984
      },
      {
        "name": "Kiss Me Hardy",
        "album": "Love On The Beat",
        "year": 1984
      },
      {
        "name": "No Comment",
        "album": "Love On The Beat",
        "year": 1984
      },
      {
        "name": "I'm The Boy",
        "album": "Love On The Beat",
        "year": 1984
      },
      {
        "name": "Harley David Son Of A Bitch",
        "album": "Love On The Beat",
        "year": 1984
      },
      {
        "name": "Lemon Incest (feat. Charlotte Gainsbourg)",
        "album": "Love On The Beat",
        "year": 1984
      },
      {
        "name": "Melody",
        "album": "Histoire de Melody Nelson",
        "year": 1971
      },
      {
        "name": "Valse de Melody",
        "album": "Histoire de Melody Nelson",
        "year": 1971
      },
      {
        "name": "Ah Melody",
        "album": "Histoire de Melody Nelson",
        "year": 1971
      },
      {
        "name": "L'hôtel particulier (BOF \"Melody Nelson\")",
        "album": "Histoire de Melody Nelson",
        "year": 1971
      },
      {
        "name": "En Melody",
        "album": "Histoire de Melody Nelson",
        "year": 1971
      },
      {
        "name": "Cargo culte",
        "album": "Histoire de Melody Nelson",
        "year": 1971
      },
      {
        "name": "L'anamour",
        "album": "Jane Birkin & Serge Gainsbourg",
        "year": 1968
      },
      {
        "name": "Sous le soleil exactement",
        "album": "Jane Birkin & Serge Gainsbourg",
        "year": 1969
      },
      {
        "name": "69 année érotique (feat. Jane Birkin)",
        "album": "Jane Birkin & Serge Gainsbourg",
        "year": 1969
      },
      {
        "name": "Elisa (BOF \"L'horizon\")",
        "album": "Jane Birkin & Serge Gainsbourg",
        "year": 1969
      },
      {
        "name": "Les sucettes",
        "album": "Jane Birkin & Serge Gainsbourg",
        "year": 1969
      },
      {
        "name": "Manon (BOF \"Manon 70\")",
        "album": "Jane Birkin & Serge Gainsbourg",
        "year": 1969
      },
      {
        "name": "Pauvre Lola",
        "album": "Bonnie And Clyde",
        "year": 1968
      },
      {
        "name": "L'eau à la bouche (BOF \"L'eau à la bouche\")",
        "album": "Bonnie And Clyde",
        "year": 1968
      },
      {
        "name": "La Javanaise (Mono Version)",
        "album": "Bonnie And Clyde",
        "year": 1968
      },
      {
        "name": "Intoxicated Man",
        "album": "Bonnie And Clyde",
        "year": 1968
      },
      {
        "name": "Baudelaire (Sur Un Poème De Charles Beaudelaire)",
        "album": "Bonnie And Clyde",
        "year": 1959
      },
      {
        "name": "Docteur Jekyll et monsieur Hyde",
        "album": "Bonnie And Clyde",
        "year": 1968
      },
      {
        "name": "You're Under Arrest",
        "album": "You're Under Arrest",
        "year": 1987
      },
      {
        "name": "Five Easy Pisseuses",
        "album": "You're Under Arrest",
        "year": 1987
      },
      {
        "name": "Baille baille Samantha",
        "album": "You're Under Arrest",
        "year": 1987
      },
      {
        "name": "Suck Baby Suck",
        "album": "You're Under Arrest",
        "year": 1987
      },
      {
        "name": "Gloomy Sunday",
        "album": "You're Under Arrest",
        "year": 1987
      },
      {
        "name": "Aux enfants de la chance",
        "album": "You're Under Arrest",
        "year": 1987
      },
      {
        "name": "Shotgun",
        "album": "You're Under Arrest",
        "year": 1987
      },
      {
        "name": "Glass Securit",
        "album": "You're Under Arrest",
        "year": 1987
      },
      {
        "name": "Dispatch Box",
        "album": "You're Under Arrest",
        "year": 1987
      },
      {
        "name": "Mon légionnaire",
        "album": "You're Under Arrest",
        "year": 1987
      },
      {
        "name": "Rock Around The Bunker",
        "album": "Rock Around The Bunker",
        "year": 1975
      },
      {
        "name": "Initials B.B.",
        "album": "Initials B.B.",
        "year": 1968
      },
      {
        "name": "Comic Strip",
        "album": "Initials B.B.",
        "year": 1968
      },
      {
        "name": "New York USA",
        "album": "Gainsbourg percussions",
        "year": 1964
      },
      {
        "name": "Je suis venu te dire que je m'en vais",
        "album": "Vu de l'extérieur",
        "year": 1973
      },
      {
        "name": "Elaeudanla téitéia",
        "album": "Confidentiel",
        "year": 1963
      },
      {
        "name": "L'homme à tête de chou",
        "album": "L'homme à tête de chou",
        "year": 1976
      },
      {
        "name": "Chez Max coiffeur pour hommes",
        "album": "L'homme à tête de chou",
        "year": 1976
      },
      {
        "name": "Marilou reggae",
        "album": "L'homme à tête de chou",
        "year": 1976
      },
      {
        "name": "Transit à Marilou",
        "album": "L'homme à tête de chou",
        "year": 1976
      },
      {
        "name": "Flash Forward",
        "album": "L'homme à tête de chou",
        "year": 1976
      },
      {
        "name": "Aéroplanes",
        "album": "L'homme à tête de chou",
        "year": 1976
      },
      {
        "name": "Premiers symptômes",
        "album": "L'homme à tête de chou",
        "year": 1976
      },
      {
        "name": "Ma Lou Marilou",
        "album": "L'homme à tête de chou",
        "year": 1976
      },
      {
        "name": "Variations sur Marilou",
        "album": "L'homme à tête de chou",
        "year": 1976
      },
      {
        "name": "Meurtre à l'extincteur",
        "album": "L'homme à tête de chou",
        "year": 1976
      },
      {
        "name": "Marilou sous la neige",
        "album": "L'homme à tête de chou",
        "year": 1976
      },
      {
        "name": "Lunatic Asylum",
        "album": "L'homme à tête de chou",
        "year": 1976
      },
      {
        "name": "Couleur café",
        "album": "Gainsbourg percussions",
        "year": 1964
      },
      {
        "name": "Black Trombone",
        "album": "N°4",
        "year": 1962
      },
      {
        "name": "L'eau à la bouche (Bande originale du film \"L'eau à la bouche\")",
        "album": "L'eau à la bouche (Bande originale du film)",
        "year": 1960
      },
      {
        "name": "Vieille canaille",
        "album": "Aux armes et caetera",
        "year": 1979
      },
      {
        "name": "Requiem pour un c... (BOF \"Le pacha\")",
        "album": "L'album de sa vie",
        "year": 1968
      },
      {
        "name": "Le poinçonneur des Lilas",
        "album": "du Chant à la une !",
        "year": 1958
      },
      {
        "name": "Qui est 'In\", qui est \"Out\"",
        "album": "Initials B.B.",
        "year": 1968
      },
      {
        "name": "La chanson de Prévert",
        "album": "L'étonnant Serge Gainsbourg (N°3)",
        "year": 1961
      },
      {
        "name": "La nostalgie camarade",
        "album": "Mauvaises nouvelles des étoiles",
        "year": 1981
      },
      {
        "name": "La javanaise",
        "album": "N°4",
        "year": 1962
      },
      {
        "name": "Aux armes et caetera",
        "album": "Aux armes et caetera",
        "year": 1979
      }
    ]
  },
  {
    "name": "Westside Gunn",
    "color": "#C0DD97",
    "genre": "Hip-Hop/Rap",
    "trackCount": 64,
    "albums": [
      "Hitler Wears Hermes 8: Sincerely Adolf",
      "HEELS HAVE EYES 2",
      "12",
      "10",
      "HEELS HAVE EYES 3",
      "And Then You Pray For Me"
    ],
    "tracks": [
      {
        "name": "BOMME DES GARÇON",
        "album": "HEELS HAVE EYES 2",
        "year": 2025
      },
      {
        "name": "HEEL CENA",
        "album": "HEELS HAVE EYES 2",
        "year": 2025
      },
      {
        "name": "AMIRA KITCHEN (feat. Brother Tom Sos & AA Rashid)",
        "album": "HEELS HAVE EYES 2",
        "year": 2025
      },
      {
        "name": "POWER HOUSE HOBBS (feat. Benny the Butcher)",
        "album": "HEELS HAVE EYES 2",
        "year": 2025
      },
      {
        "name": "MANDELA",
        "album": "HEELS HAVE EYES 2",
        "year": 2025
      },
      {
        "name": "BRIKOLAI VOLKOFF (feat. Stove God Cooks)",
        "album": "HEELS HAVE EYES 2",
        "year": 2025
      },
      {
        "name": "AUNT GINA (feat. Skyzoo)",
        "album": "HEELS HAVE EYES 2",
        "year": 2025
      },
      {
        "name": "GLOWREALAH",
        "album": "HEELS HAVE EYES 2",
        "year": 2025
      },
      {
        "name": "PRICK (feat. Brother Tom Sos)",
        "album": "HEELS HAVE EYES 2",
        "year": 2025
      },
      {
        "name": "DEMNA LEFT BALENCI",
        "album": "HEELS HAVE EYES 2",
        "year": 2025
      },
      {
        "name": "BLOW HENDRY (feat. MIKE)",
        "album": "HEELS HAVE EYES 2",
        "year": 2025
      },
      {
        "name": "LOVE YOU PT. 2",
        "album": "HEELS HAVE EYES 2",
        "year": 2025
      },
      {
        "name": "MICHELLE WORLD",
        "album": "12",
        "year": 2025
      },
      {
        "name": "BOSWELL (feat. Estee Nack & Stove God Cooks)",
        "album": "12",
        "year": 2025
      },
      {
        "name": "ADAM PAGE (feat. Stove God Cooks)",
        "album": "12",
        "year": 2025
      },
      {
        "name": "VEERT (feat. Estee Nack & Stove God Cooks)",
        "album": "12",
        "year": 2025
      },
      {
        "name": "055 (feat. Stove God Cooks)",
        "album": "12",
        "year": 2025
      },
      {
        "name": "HEALTH SCIENCE (feat. Brother Tom Sos)",
        "album": "12",
        "year": 2025
      },
      {
        "name": "GUMBO YAYA (feat. Brother Tom Sos)",
        "album": "12",
        "year": 2025
      },
      {
        "name": "EAST MIAMI (feat. Estee Nack)",
        "album": "12",
        "year": 2025
      },
      {
        "name": "BURY ME WITH A STOVE (feat. Estee Nack)",
        "album": "12",
        "year": 2025
      },
      {
        "name": "OUTLANDER",
        "album": "12",
        "year": 2025
      },
      {
        "name": "DUMP WORLD (feat. Stove God Cooks & Elijah Hook)",
        "album": "12",
        "year": 2025
      },
      {
        "name": "Intro (feat. AA Rashid)",
        "album": "10",
        "year": 2022
      },
      {
        "name": "Super Kick Party",
        "album": "10",
        "year": 2022
      },
      {
        "name": "Shootouts In Soho (feat. A$AP Rocky)",
        "album": "10",
        "year": 2022
      },
      {
        "name": "Peppas (feat. Black Star)",
        "album": "10",
        "year": 2022
      },
      {
        "name": "Nigo Louis (feat. Westside Pootie)",
        "album": "10",
        "year": 2022
      },
      {
        "name": "BDP (feat. Rome Streetz & Stove God Cooks)",
        "album": "10",
        "year": 2022
      },
      {
        "name": "Science Class (feat. Busta Rhymes, Raekwon, Ghostface Killah & Stove God Cooks)",
        "album": "10",
        "year": 2022
      },
      {
        "name": "God Is Love (feat. Keisha Plum, Estee Nack & Stove God Cooks)",
        "album": "10",
        "year": 2022
      },
      {
        "name": "Switches On Everything (feat. Run The Jewels & Stove God Cooks)",
        "album": "10",
        "year": 2022
      },
      {
        "name": "Mac Don't Stop",
        "album": "10",
        "year": 2022
      },
      {
        "name": "Red Death (feat. Jay Worthy, Benny the Butcher, Stove God Cooks, Rome Streetz, Armani Caesar, Conway the Machine & Robby Takac)",
        "album": "10",
        "year": 2022
      },
      {
        "name": "Murders in Maxfields",
        "album": "Hitler Wears Hermes 8: Sincerely Adolf",
        "year": 2021
      },
      {
        "name": "Blessed Times (feat. AA Rashid)",
        "album": "Hitler Wears Hermes 8: Sincerely Adolf",
        "year": 2021
      },
      {
        "name": "Mariota (feat. Stove God Cooks)",
        "album": "Hitler Wears Hermes 8: Sincerely Adolf",
        "year": 2021
      },
      {
        "name": "Vogue cover (feat. Stove God Cooks)",
        "album": "Hitler Wears Hermes 8: Sincerely Adolf",
        "year": 2021
      },
      {
        "name": "Margiela Split Toes (feat. Mach-Hommy)",
        "album": "Hitler Wears Hermes 8: Sincerely Adolf",
        "year": 2021
      },
      {
        "name": "Draymond (feat. Stove God Cooks & Rome Streetz)",
        "album": "Hitler Wears Hermes 8: Sincerely Adolf",
        "year": 2021
      },
      {
        "name": "Peri Peri (feat. Rome Streetz)",
        "album": "Hitler Wears Hermes 8: Sincerely Adolf",
        "year": 2021
      },
      {
        "name": "RIGHT NOW (feat. Stove God Cooks & Jadakiss)",
        "album": "Hitler Wears Hermes 8: Sincerely Adolf",
        "year": 2021
      },
      {
        "name": "Westheimer (feat. Boldy James, Sauce Walka & Stove God Cooks)",
        "album": "Hitler Wears Hermes 8: Sincerely Adolf",
        "year": 2021
      },
      {
        "name": "Bash money (feat. Lil Wayne)",
        "album": "Hitler Wears Hermes 8: Sincerely Adolf",
        "year": 2021
      },
      {
        "name": "Claires Back (feat. Conway the Machine, Benny the Butcher & DJ Clue)",
        "album": "Hitler Wears Hermes 8: Sincerely Adolf",
        "year": 2021
      },
      {
        "name": "Spoonz (feat. Conway the Machine)",
        "album": "Hitler Wears Hermes 8: Sincerely Adolf",
        "year": 2021
      },
      {
        "name": "716 Mile (feat. Boldy James)",
        "album": "Hitler Wears Hermes 8: Sincerely Adolf",
        "year": 2021
      },
      {
        "name": "JOSH BISHOP INTRO",
        "album": "HEELS HAVE EYES 3",
        "year": 2025
      },
      {
        "name": "FREE ROLEYS (feat. Benny the Butcher)",
        "album": "HEELS HAVE EYES 3",
        "year": 2025
      },
      {
        "name": "MANKIND (feat. Stove God Cooks)",
        "album": "HEELS HAVE EYES 3",
        "year": 2025
      },
      {
        "name": "EDDIE BAUER",
        "album": "HEELS HAVE EYES 3",
        "year": 2025
      },
      {
        "name": "TITO SANTANA (feat. Rome Streetz)",
        "album": "HEELS HAVE EYES 3",
        "year": 2025
      },
      {
        "name": "TIFFANY BLUE",
        "album": "HEELS HAVE EYES 3",
        "year": 2025
      },
      {
        "name": "R TRUTH",
        "album": "HEELS HAVE EYES 3",
        "year": 2025
      },
      {
        "name": "BABAS",
        "album": "HEELS HAVE EYES 3",
        "year": 2025
      },
      {
        "name": "GREY ST",
        "album": "HEELS HAVE EYES 3",
        "year": 2025
      },
      {
        "name": "GUS SMACKER (feat. Brother Tom Sos)",
        "album": "HEELS HAVE EYES 3",
        "year": 2025
      },
      {
        "name": "JOSH BISHOP OUTRO",
        "album": "HEELS HAVE EYES 3",
        "year": 2025
      },
      {
        "name": "FLYGOD 2x",
        "album": "And Then You Pray For Me",
        "year": 2023
      },
      {
        "name": "DunnHill (feat. Rick Ross)",
        "album": "And Then You Pray For Me",
        "year": 2023
      },
      {
        "name": "House of GLORY (feat. Stove God Cooks)",
        "album": "And Then You Pray For Me",
        "year": 2023
      },
      {
        "name": "LL BOOL GUNN",
        "album": "And Then You Pray For Me",
        "year": 2023
      },
      {
        "name": "Babylon Bis (feat. Stove God Cooks & Keisha Plum)",
        "album": "And Then You Pray For Me",
        "year": 2023
      },
      {
        "name": "Ultra GriZelda (feat. Denzel Curry)",
        "album": "And Then You Pray For Me",
        "year": 2023
      }
    ]
  },
  {
    "name": "Lomepal",
    "color": "#F4C0D1",
    "genre": "Hip-Hop/Rap",
    "trackCount": 63,
    "albums": [
      "FLIP (Deluxe)",
      "Mauvais Ordre",
      "Jeannine",
      "Amina",
      "3 jours à Motorbass (Live acoustique)",
      "Seigneur",
      "Majesté",
      "ODSL - EP",
      "Tee",
      "Tout lâcher (Colors Session) - Single"
    ],
    "tracks": [
      {
        "name": "70",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Club",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Sur le sol",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Bryan Herman",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "1000°C (feat. Roméo Elvis)",
        "album": "Jeannine",
        "year": 2018
      },
      {
        "name": "R2D2",
        "album": "ODSL - EP",
        "year": 2016
      },
      {
        "name": "Ma cousin",
        "album": "Jeannine",
        "year": 2018
      },
      {
        "name": "Trop beau (live acoustique)",
        "album": "Amina",
        "year": 2019
      },
      {
        "name": "Yeux disent (Live acoustique)",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Ma cousin (live acoustique)",
        "album": "Amina",
        "year": 2019
      },
      {
        "name": "1000°C (Live acoustique)",
        "album": "3 jours à Motorbass (Live acoustique)",
        "year": 2019
      },
      {
        "name": "Beau la folie (Live acoustique)",
        "album": "3 jours à Motorbass (Live acoustique)",
        "year": 2019
      },
      {
        "name": "Yeux disent (Live acoustique)",
        "album": "3 jours à Motorbass (Live acoustique)",
        "year": 2019
      },
      {
        "name": "Trop beau (Live acoustique)",
        "album": "3 jours à Motorbass (Live acoustique)",
        "year": 2019
      },
      {
        "name": "Tee",
        "album": "Tee",
        "year": 2022
      },
      {
        "name": "Lucy (feat. 2Fingz)",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Auburn",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "Mauvais ordre",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "50°",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "À peu près",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "Hasarder",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "Etna",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "Le miel et le vinaigre",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "Maladie moderne",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "Tee",
        "album": "Tee",
        "year": 2022
      },
      {
        "name": "Prends ce que tu veux chez moi",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "Skit il",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "Crystal",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "Auburn",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "Skit lost memo",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "Decrescendo",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "Pour de faux",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "Beau la folie",
        "album": "Jeannine",
        "year": 2018
      },
      {
        "name": "Yeux disent",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Trop beau",
        "album": "Jeannine",
        "year": 2018
      },
      {
        "name": "Tout lâcher (Colors Session)",
        "album": "Tout lâcher (Colors Session) - Single",
        "year": 2018
      },
      {
        "name": "Ma cousin (Live acoustique)",
        "album": "3 jours à Motorbass (Live acoustique)",
        "year": 2019
      },
      {
        "name": "Flash",
        "album": "Amina",
        "year": 2019
      },
      {
        "name": "Ne me ramène pas",
        "album": "Jeannine",
        "year": 2018
      },
      {
        "name": "Tee",
        "album": "Mauvais Ordre",
        "year": 2022
      },
      {
        "name": "Oyasumi",
        "album": "ODSL - EP",
        "year": 2016
      },
      {
        "name": "Ça compte pas (feat. Caballero & JeanJass)",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Ray Liotta",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Majesté",
        "album": "Majesté",
        "year": 2015
      },
      {
        "name": "Chute libre",
        "album": "Seigneur",
        "year": 2014
      },
      {
        "name": "Avion malaisien",
        "album": "Majesté",
        "year": 2015
      },
      {
        "name": "Achille",
        "album": "ODSL - EP",
        "year": 2016
      },
      {
        "name": "Palpal",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Pommade",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Outsider",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Un peu de sang",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Malaise",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Les troubles du seigneur",
        "album": "Seigneur",
        "year": 2014
      },
      {
        "name": "Billet (feat. Roméo Elvis)",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Solo",
        "album": "Majesté",
        "year": 2015
      },
      {
        "name": "Avion",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Toi et moi",
        "album": "Seigneur",
        "year": 2014
      },
      {
        "name": "Enter the Void",
        "album": "Seigneur",
        "year": 2014
      },
      {
        "name": "Bécane (feat. Superpoze)",
        "album": "FLIP (Deluxe)",
        "year": 2017
      },
      {
        "name": "Dorian Tyrel",
        "album": "Seigneur",
        "year": 2014
      },
      {
        "name": "Yusuf",
        "album": "Amina",
        "year": 2019
      },
      {
        "name": "Ego",
        "album": "Majesté",
        "year": 2015
      },
      {
        "name": "Dave Grohl",
        "album": "Amina",
        "year": 2018
      }
    ]
  },
  {
    "name": "Ninho",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 63,
    "albums": [
      "M.I.L.S 3",
      "M.I.L.S",
      "M.I.L.S 2.0",
      "M.I.L.S 4",
      "Comme prévu",
      "5 bleus - Single",
      "Skywalker Haze - A COLORS SHOW - Single"
    ],
    "tracks": [
      {
        "name": "Elle m'a eu",
        "album": "Comme prévu",
        "year": 2017
      },
      {
        "name": "Dis-moi que tu m'aimes",
        "album": "M.I.L.S",
        "year": 2016
      },
      {
        "name": "Zipette",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "De l'autre côté (feat. Nekfeu)",
        "album": "Comme prévu",
        "year": 2017
      },
      {
        "name": "Promo (feat. Damso)",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "5 bleus",
        "album": "5 bleus - Single",
        "year": 2025
      },
      {
        "name": "Rose",
        "album": "Comme prévu",
        "year": 2017
      },
      {
        "name": "Skywalker Haze - A COLORS SHOW",
        "album": "Skywalker Haze - A COLORS SHOW - Single",
        "year": 2025
      },
      {
        "name": "Intro",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "M.I.L.S 3",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "Gros vendeurs",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "Mauvais Djo",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "La puerta",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "En chien",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "Centre commercial (feat. Heuss L'enfoiré)",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "Tu sais qu'on est gang (feat. Hös Copperfield)",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "C'était le rap",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "Lettre à une femme",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "Every day (feat. Griff)",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "Le jeu (feat. Yaro)",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "Bali",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "Millésimes",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "Filon",
        "album": "M.I.L.S 3",
        "year": 2020
      },
      {
        "name": "M.I.L.S 2.0",
        "album": "M.I.L.S 2.0",
        "year": 2018
      },
      {
        "name": "Fendi",
        "album": "M.I.L.S 2.0",
        "year": 2018
      },
      {
        "name": "PGP",
        "album": "M.I.L.S 2.0",
        "year": 2018
      },
      {
        "name": "Toutes options (feat. Blasko)",
        "album": "M.I.L.S 2.0",
        "year": 2018
      },
      {
        "name": "Mama No Cry",
        "album": "M.I.L.S 2.0",
        "year": 2018
      },
      {
        "name": "Pavé",
        "album": "M.I.L.S 2.0",
        "year": 2018
      },
      {
        "name": "Un Poco",
        "album": "M.I.L.S 2.0",
        "year": 2018
      },
      {
        "name": "44 (feat. Yaro)",
        "album": "M.I.L.S 2.0",
        "year": 2018
      },
      {
        "name": "Bavard",
        "album": "M.I.L.S 2.0",
        "year": 2018
      },
      {
        "name": "Chacun son tour",
        "album": "M.I.L.S 2.0",
        "year": 2018
      },
      {
        "name": "Coffrer",
        "album": "M.I.L.S 2.0",
        "year": 2018
      },
      {
        "name": "Vrais",
        "album": "M.I.L.S 2.0",
        "year": 2018
      },
      {
        "name": "Violet",
        "album": "M.I.L.S 2.0",
        "year": 2018
      },
      {
        "name": "Bob",
        "album": "M.I.L.S 2.0",
        "year": 2018
      },
      {
        "name": "M.I.L.S",
        "album": "M.I.L.S",
        "year": 2016
      },
      {
        "name": "Soleil",
        "album": "M.I.L.S",
        "year": 2016
      },
      {
        "name": "Sourire",
        "album": "M.I.L.S",
        "year": 2016
      },
      {
        "name": "Pour nous",
        "album": "M.I.L.S",
        "year": 2016
      },
      {
        "name": "Crésus (feat. Leto)",
        "album": "M.I.L.S",
        "year": 2016
      },
      {
        "name": "Monotonie",
        "album": "M.I.L.S",
        "year": 2016
      },
      {
        "name": "La Roma (feat. Sadek)",
        "album": "M.I.L.S",
        "year": 2016
      },
      {
        "name": "Elle a mal (feat. Niska)",
        "album": "M.I.L.S",
        "year": 2016
      },
      {
        "name": "Bitch Dab",
        "album": "M.I.L.S",
        "year": 2016
      },
      {
        "name": "Somnambule",
        "album": "M.I.L.S",
        "year": 2016
      },
      {
        "name": "Tout ira mieux",
        "album": "M.I.L.S",
        "year": 2016
      },
      {
        "name": "Malcolm",
        "album": "M.I.L.S",
        "year": 2016
      },
      {
        "name": "Ttr",
        "album": "M.I.L.S",
        "year": 2016
      },
      {
        "name": "INTRO - LA PRESSION",
        "album": "M.I.L.S 4",
        "year": 2026
      },
      {
        "name": "+971",
        "album": "M.I.L.S 4",
        "year": 2025
      },
      {
        "name": "WALLET",
        "album": "M.I.L.S 4",
        "year": 2026
      },
      {
        "name": "KING VON",
        "album": "M.I.L.S 4",
        "year": 2025
      },
      {
        "name": "RÉSINE",
        "album": "M.I.L.S 4",
        "year": 2026
      },
      {
        "name": "J’AI PAS CHANGÉ",
        "album": "M.I.L.S 4",
        "year": 2026
      },
      {
        "name": "AU 33ÈME",
        "album": "M.I.L.S 4",
        "year": 2026
      },
      {
        "name": "LETTRE À UN FILS",
        "album": "M.I.L.S 4",
        "year": 2026
      },
      {
        "name": "NWAR",
        "album": "M.I.L.S 4",
        "year": 2026
      },
      {
        "name": "N.W.A",
        "album": "M.I.L.S 4",
        "year": 2026
      },
      {
        "name": "PILIER",
        "album": "M.I.L.S 4",
        "year": 2026
      },
      {
        "name": "LES MAINS DEDANS",
        "album": "M.I.L.S 4",
        "year": 2026
      },
      {
        "name": "DES PIGES",
        "album": "M.I.L.S 4",
        "year": 2026
      }
    ]
  },
  {
    "name": "Wallace Cleaver",
    "color": "#1A5FB4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 62,
    "albums": [
      "merci",
      "Cauchemar (Deluxe)",
      "baiser",
      "à la recherche du temps perdu",
      "41BORO - EP",
      "Incendie - Single"
    ],
    "tracks": [
      {
        "name": "chromé",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "marcel.",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "Incendie",
        "album": "Incendie - Single",
        "year": 2025
      },
      {
        "name": "çalavie",
        "album": "baiser",
        "year": 2023
      },
      {
        "name": "déconnecté",
        "album": "baiser",
        "year": 2023
      },
      {
        "name": "dans ma tête",
        "album": "baiser",
        "year": 2023
      },
      {
        "name": "xtrois",
        "album": "baiser",
        "year": 2023
      },
      {
        "name": "murcielago (feat. Dxvl)",
        "album": "baiser",
        "year": 2023
      },
      {
        "name": "merci pour la douleur",
        "album": "baiser",
        "year": 2023
      },
      {
        "name": "est-ce que je l'aime ?",
        "album": "baiser",
        "year": 2023
      },
      {
        "name": "le cœur à papa (feat. Sheldon)",
        "album": "baiser",
        "year": 2023
      },
      {
        "name": "pleurer pour nous",
        "album": "baiser",
        "year": 2023
      },
      {
        "name": "content",
        "album": "baiser",
        "year": 2023
      },
      {
        "name": "le vent (feat. Mairo)",
        "album": "baiser",
        "year": 2023
      },
      {
        "name": "de rien pour la douceur",
        "album": "baiser",
        "year": 2023
      },
      {
        "name": "Intérieur nuit",
        "album": "Cauchemar (Deluxe)",
        "year": 2021
      },
      {
        "name": "Sibérie",
        "album": "Cauchemar (Deluxe)",
        "year": 2021
      },
      {
        "name": "Jnouns",
        "album": "Cauchemar (Deluxe)",
        "year": 2021
      },
      {
        "name": "45Camo",
        "album": "Cauchemar (Deluxe)",
        "year": 2020
      },
      {
        "name": "Neighbor",
        "album": "Cauchemar (Deluxe)",
        "year": 2021
      },
      {
        "name": "Hors de ma vue",
        "album": "Cauchemar (Deluxe)",
        "year": 2021
      },
      {
        "name": "Cauchemar",
        "album": "Cauchemar (Deluxe)",
        "year": 2021
      },
      {
        "name": "La neige",
        "album": "Cauchemar (Deluxe)",
        "year": 2021
      },
      {
        "name": "Extérieur jour",
        "album": "Cauchemar (Deluxe)",
        "year": 2021
      },
      {
        "name": "Miroir infini",
        "album": "Cauchemar (Deluxe)",
        "year": 2021
      },
      {
        "name": "Bleu",
        "album": "Cauchemar (Deluxe)",
        "year": 2021
      },
      {
        "name": "4x22 (Freestyle)",
        "album": "Cauchemar (Deluxe)",
        "year": 2021
      },
      {
        "name": "39°C",
        "album": "Cauchemar (Deluxe)",
        "year": 2021
      },
      {
        "name": "Les grands champs",
        "album": "Cauchemar (Deluxe)",
        "year": 2021
      },
      {
        "name": "La pluie",
        "album": "Cauchemar (Deluxe)",
        "year": 2021
      },
      {
        "name": "STS51L",
        "album": "Cauchemar (Deluxe)",
        "year": 2021
      },
      {
        "name": "demain",
        "album": "à la recherche du temps perdu",
        "year": 2021
      },
      {
        "name": "ici",
        "album": "à la recherche du temps perdu",
        "year": 2021
      },
      {
        "name": "41freestyle (+ ??)",
        "album": "à la recherche du temps perdu",
        "year": 2021
      },
      {
        "name": "regarde moi dans les yeux",
        "album": "à la recherche du temps perdu",
        "year": 2021
      },
      {
        "name": "250yz",
        "album": "à la recherche du temps perdu",
        "year": 2021
      },
      {
        "name": "là bas",
        "album": "à la recherche du temps perdu",
        "year": 2021
      },
      {
        "name": "briller (Interlude)",
        "album": "à la recherche du temps perdu",
        "year": 2021
      },
      {
        "name": "Reflet de lame",
        "album": "à la recherche du temps perdu",
        "year": 2021
      },
      {
        "name": "flaque de sang",
        "album": "à la recherche du temps perdu",
        "year": 2021
      },
      {
        "name": "144Broliques",
        "album": "41BORO - EP",
        "year": 2022
      },
      {
        "name": "Armata",
        "album": "41BORO - EP",
        "year": 2022
      },
      {
        "name": "La hyène",
        "album": "41BORO - EP",
        "year": 2022
      },
      {
        "name": "On sera quoi",
        "album": "41BORO - EP",
        "year": 2022
      },
      {
        "name": "Encore",
        "album": "41BORO - EP",
        "year": 2022
      },
      {
        "name": "Outro",
        "album": "41BORO - EP",
        "year": 2022
      },
      {
        "name": "plus rien n'est grave",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "pardon",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "xénon",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "le bus",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "plafond",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "merci..",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "sln vie",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "...",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "plus rien n'est grave",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "xénon",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "pardon",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "sln vie",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "merci..",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "plafond",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "le bus",
        "album": "merci",
        "year": 2024
      },
      {
        "name": "être moi",
        "album": "merci",
        "year": 2024
      }
    ]
  },
  {
    "name": "Daft Punk",
    "color": "#2D8A4E",
    "genre": "Dance",
    "trackCount": 62,
    "albums": [
      "Homework (25th Anniversary Edition)",
      "Discovery",
      "Human After All",
      "Random Access Memories"
    ],
    "tracks": [
      {
        "name": "One More Time",
        "album": "Discovery",
        "year": 2000
      },
      {
        "name": "Aerodynamic",
        "album": "Discovery",
        "year": 2001
      },
      {
        "name": "Digital Love",
        "album": "Discovery",
        "year": 2001
      },
      {
        "name": "Harder Better Faster Stronger",
        "album": "Discovery",
        "year": 2001
      },
      {
        "name": "Crescendolls",
        "album": "Discovery",
        "year": 2001
      },
      {
        "name": "Nightvision",
        "album": "Discovery",
        "year": 2001
      },
      {
        "name": "Superheroes",
        "album": "Discovery",
        "year": 2001
      },
      {
        "name": "High Life",
        "album": "Discovery",
        "year": 2001
      },
      {
        "name": "Voyager",
        "album": "Discovery",
        "year": 2001
      },
      {
        "name": "Veridis Quo",
        "album": "Discovery",
        "year": 2001
      },
      {
        "name": "Short Circuit",
        "album": "Discovery",
        "year": 2001
      },
      {
        "name": "Face to Face",
        "album": "Discovery",
        "year": 2001
      },
      {
        "name": "Too Long",
        "album": "Discovery",
        "year": 2001
      },
      {
        "name": "Daftendirekt",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "WDPK 83.7 FM",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Revolution 909",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Da Funk",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1995
      },
      {
        "name": "Phoenix",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Fresh",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Around the World",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Rollin' & Scratchin'",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Teachers",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "High Fidelity",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Rock'n Roll",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Oh Yeah",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Burnin'",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Indo Silver Club",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1996
      },
      {
        "name": "Alive",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Funk Ad",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Around the World (I:Cube Remix)",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Revolution 909 (Roger Sanchez & Junior Sanchez Remix)",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1998
      },
      {
        "name": "Around the World (Tee's Frozen Sun Mix)",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Around the World (Mellow Mix)",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Burnin' (DJ Sneak Main Mix)",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Around the World (Kenlou Mix)",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Burnin' (Ian Pooley Cut up Mix)",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Around the World (Motorbass Vice Mix)",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Around the World (Maw Remix)",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Burnin' (Slam Mix)",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Around the World (Original Lead On Mix)",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Burnin' (DJ Sneak Mongowarrier Mix)",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Around the World (Raw Dub)",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Teachers (Extended Mix)",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1997
      },
      {
        "name": "Revolution 909 (Revolution Accapella)",
        "album": "Homework (25th Anniversary Edition)",
        "year": 1998
      },
      {
        "name": "Give Life Back to Music",
        "album": "Random Access Memories",
        "year": 2013
      },
      {
        "name": "The Game of Love",
        "album": "Random Access Memories",
        "year": 2013
      },
      {
        "name": "Giorgio by Moroder",
        "album": "Random Access Memories",
        "year": 2013
      },
      {
        "name": "Within",
        "album": "Random Access Memories",
        "year": 2013
      },
      {
        "name": "Motherboard",
        "album": "Random Access Memories",
        "year": 2013
      },
      {
        "name": "Contact",
        "album": "Random Access Memories",
        "year": 2013
      },
      {
        "name": "Human After All",
        "album": "Human After All",
        "year": 2005
      },
      {
        "name": "The Prime Time of Your Life",
        "album": "Human After All",
        "year": 2005
      },
      {
        "name": "Robot Rock",
        "album": "Human After All",
        "year": 2005
      },
      {
        "name": "Steam Machine",
        "album": "Human After All",
        "year": 2005
      },
      {
        "name": "Make Love",
        "album": "Human After All",
        "year": 2005
      },
      {
        "name": "The Brainwasher",
        "album": "Human After All",
        "year": 2005
      },
      {
        "name": "On/Off",
        "album": "Human After All",
        "year": 2005
      },
      {
        "name": "Television Rules the Nation",
        "album": "Human After All",
        "year": 2005
      },
      {
        "name": "Technologic",
        "album": "Human After All",
        "year": 2005
      },
      {
        "name": "Emotion",
        "album": "Human After All",
        "year": 2005
      },
      {
        "name": "Something About Us",
        "album": "Discovery",
        "year": 2001
      },
      {
        "name": "Beyond",
        "album": "Random Access Memories",
        "year": 2013
      }
    ]
  },
  {
    "name": "Kid Cudi",
    "color": "#C4622D",
    "genre": "Hip-Hop/Rap",
    "trackCount": 59,
    "albums": [
      "Man On the Moon: The End of Day (Expanded Version)",
      "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
      "Man On the Moon III: The Chosen",
      "Man On the Moon: The End of Day"
    ],
    "tracks": [
      {
        "name": "She Knows This",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "Sky Might Fall",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Make Her Say (feat. Kanye West & Common) [Behind The Scenes]",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Make Her Say (feat. Kanye West & Common)",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Is There Any Love (feat. Wale) [Bonus Track]",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2008
      },
      {
        "name": "Man On the Moon (Bonus Track)",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Day 'n' Nite (Nightmare)",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2008
      },
      {
        "name": "T.G.I.F. (feat. Chip Tha Ripper) [Bonus Track]",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Day 'n' Nite (Crookers Remix)",
        "album": "Man On the Moon: The End of Day",
        "year": 2008
      },
      {
        "name": "Solo Dolo (Nightmare)",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Pursuit of Happiness (Nightmare) [feat. MGMT & Ratatat]",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Simple As...",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Make Her Say (feat. Kanye West & Common)",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "My World (feat. Billy Craven)",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Up Up & Away",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Heart of a Lion (Kid Cudi Theme Music)",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Hyyerr (feat. Chip Tha Ripper)",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Enter Galactic (Love Connection, Pt. I)",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Soundtrack 2 My Life",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Cudi Zone",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "In My Dreams (Cudder Anthem)",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Alive (Nightmare) [feat. Ratatat]",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Golf With The Broskis (Commentary)",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Ragin In Aussie Town",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Golf With The Broskis (With Out Commentary)",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "End Of Day",
        "album": "Man On the Moon: The End of Day (Expanded Version)",
        "year": 2009
      },
      {
        "name": "Elsie's Baby Boy (flashback)",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "Dive",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "Sept. 16",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "The Void",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "4 da Kidz",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "Damaged",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "Lovin' Me (feat. Phoebe Bridgers)",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "Heaven on Earth",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "Lord I Know",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "Tequila Shots",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "The Pale Moonlight",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "Solo Dolo, Pt. III",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "Sad People",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "Beautiful Trip",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "Another Day",
        "album": "Man On the Moon III: The Chosen",
        "year": 2020
      },
      {
        "name": "Don’t Play This Song (feat. Mary J. Blige)",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "Journey Of Mr. Rager",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2012
      },
      {
        "name": "Wild’n Cuz I’m Young",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "We Aite (Wake Your Mind Up)",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "Marijuana",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "The Mood",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "Mojo So Dope",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "Trapped In My Mind",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "REVOFEV",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "Scott Mescudi Vs. The World (feat. Cee-Lo)",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "All Along",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "GHOST!",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "Ashin’ Kusher",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "MANIAC (feat. Cage & St. Vincent)",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "Erase Me (feat. Kanye West)",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "Mr. Rager",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "These Worries (feat. Mary J. Blige)",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      },
      {
        "name": "The End (feat. GLC, Chip tha Ripper & Nicole Wray)",
        "album": "Man On The Moon II: The Legend Of Mr. Rager (Deluxe Edition)",
        "year": 2010
      }
    ]
  },
  {
    "name": "Brent Faiyaz",
    "color": "#7B4FA6",
    "genre": "R&B/Soul",
    "trackCount": 57,
    "albums": [
      "WASTELAND",
      "Sonder Son",
      "Larger Than Life",
      "Fuck the World",
      "Icon",
      "Poison - Single",
      "have to. - Single",
      "peter pan. - Single",
      "tony soprano. - Single"
    ],
    "tracks": [
      {
        "name": "Poison",
        "album": "Poison - Single",
        "year": 2016
      },
      {
        "name": "have to.",
        "album": "have to. - Single",
        "year": 2025
      },
      {
        "name": "Home",
        "album": "Sonder Son",
        "year": 2017
      },
      {
        "name": "Gang Over Luv",
        "album": "Sonder Son",
        "year": 2017
      },
      {
        "name": "Burn One (Interlude)",
        "album": "Sonder Son",
        "year": 2017
      },
      {
        "name": "First World Problemz / Nobody Carez",
        "album": "Sonder Son",
        "year": 2017
      },
      {
        "name": "Missin Out",
        "album": "Sonder Son",
        "year": 2017
      },
      {
        "name": "Stay Down",
        "album": "Sonder Son",
        "year": 2017
      },
      {
        "name": "L.A.",
        "album": "Sonder Son",
        "year": 2017
      },
      {
        "name": "Talk 2 U",
        "album": "Sonder Son",
        "year": 2017
      },
      {
        "name": "Sonder Son (Interlude)",
        "album": "Sonder Son",
        "year": 2017
      },
      {
        "name": "So Far Gone / Fast Life Bluez",
        "album": "Sonder Son",
        "year": 2017
      },
      {
        "name": "Needed",
        "album": "Sonder Son",
        "year": 2017
      },
      {
        "name": "All I Want",
        "album": "Sonder Son",
        "year": 2017
      },
      {
        "name": "peter pan.",
        "album": "peter pan. - Single",
        "year": 2025
      },
      {
        "name": "tony soprano.",
        "album": "tony soprano. - Single",
        "year": 2025
      },
      {
        "name": "Skyline",
        "album": "Fuck the World",
        "year": 2020
      },
      {
        "name": "Clouded",
        "album": "Fuck the World",
        "year": 2020
      },
      {
        "name": "Been Away",
        "album": "Fuck the World",
        "year": 2020
      },
      {
        "name": "Fuck the World (Summer in London)",
        "album": "Fuck the World",
        "year": 2020
      },
      {
        "name": "Let Me Know",
        "album": "Fuck the World",
        "year": 2020
      },
      {
        "name": "Soon Az I Get Home",
        "album": "Fuck the World",
        "year": 2020
      },
      {
        "name": "Rehab (Winter in Paris)",
        "album": "Fuck the World",
        "year": 2019
      },
      {
        "name": "Bluffin",
        "album": "Fuck the World",
        "year": 2020
      },
      {
        "name": "Lost Kids Get Money",
        "album": "Fuck the World",
        "year": 2020
      },
      {
        "name": "Make It Out",
        "album": "Fuck the World",
        "year": 2020
      },
      {
        "name": "VILLAIN'S THEME",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "LOOSE CHANGE",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "HEAL YOUR HEART (INTERLUDE)",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "SKIT: EGOMANIAC",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "ALL MINE",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "PRICE OF FAME",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "GHETTO GATSBY (feat. Alicia Keys)",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "WASTING TIME (feat. Drake & The Neptunes)",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "ROLLING STONE",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "FYTB (feat. Joony)",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "SKIT: OBLIVION",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "DEAD MAN WALKING",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "ROLE MODEL",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "JACKIE BROWN",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "BAD LUCK",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "SKIT: WAKE UP CALL",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "ANGEL",
        "album": "WASTELAND",
        "year": 2022
      },
      {
        "name": "Tim's Intro",
        "album": "Larger Than Life",
        "year": 2023
      },
      {
        "name": "Last One Left (feat. Missy Elliott & Lil Gray)",
        "album": "Larger Than Life",
        "year": 2023
      },
      {
        "name": "Forever Yours",
        "album": "Larger Than Life",
        "year": 2023
      },
      {
        "name": "Best Time",
        "album": "Larger Than Life",
        "year": 2023
      },
      {
        "name": "Big Mad Skit (feat. Princess Cro & Flee)",
        "album": "Larger Than Life",
        "year": 2023
      },
      {
        "name": "Moment of Your Life (feat. Coco Jones)",
        "album": "Larger Than Life",
        "year": 2023
      },
      {
        "name": "Wherever I Go",
        "album": "Larger Than Life",
        "year": 2023
      },
      {
        "name": "On This Side (feat. A$AP ANT & CruddyMurda)",
        "album": "Larger Than Life",
        "year": 2023
      },
      {
        "name": "Dawged Em Skit (feat. TTM Dawg)",
        "album": "Larger Than Life",
        "year": 2023
      },
      {
        "name": "Belong to You (feat. Babyface Ray)",
        "album": "Larger Than Life",
        "year": 2023
      },
      {
        "name": "WY@",
        "album": "Larger Than Life",
        "year": 2023
      },
      {
        "name": "Pistachios",
        "album": "Larger Than Life",
        "year": 2023
      },
      {
        "name": "have to.",
        "album": "Icon",
        "year": 2025
      },
      {
        "name": "butterflies.",
        "album": "Icon",
        "year": 2026
      }
    ]
  },
  {
    "name": "Caballero & JeanJass",
    "color": "#E8593C",
    "genre": "Hip-Hop/Rap",
    "trackCount": 56,
    "albums": [
      "Double Hélice 2",
      "High & Fines Herbes – Édition 420",
      "High & Fines Herbes",
      "Double hélice 3",
      "Double hélice",
      "Hat Trick",
      "Un Cadeau (feat. Roméo Elvis & Slimka) - Single",
      "Polaire - Single",
      "Grünt #49 - Single",
      "Tu connais pas - Single"
    ],
    "tracks": [
      {
        "name": "Sur Mon Nom",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "Rvre",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "Bonnes fréquentations",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "Match retour",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "TMTC",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "La base",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "Vrai ou faux (feat. Roméo Elvis)",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "Un endroit sûr",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "FDP",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "SVP",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "Ma Story (feat. Angele)",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "Pour ça (feat. Seven)",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "Voler",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "Soin",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "El Gordo Guapo",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "On est haut",
        "album": "Double Hélice 2",
        "year": 2017
      },
      {
        "name": "Un Cadeau (feat. Roméo Elvis & Slimka)",
        "album": "Un Cadeau (feat. Roméo Elvis & Slimka) - Single",
        "year": 2020
      },
      {
        "name": "Flash (feat. Alkpote)",
        "album": "High & Fines Herbes",
        "year": 2020
      },
      {
        "name": "Polaire",
        "album": "Polaire - Single",
        "year": 2021
      },
      {
        "name": "Hat Trick",
        "album": "Hat Trick",
        "year": 2021
      },
      {
        "name": "Californie",
        "album": "Double hélice 3",
        "year": 2018
      },
      {
        "name": "Repeat",
        "album": "Double hélice",
        "year": 2016
      },
      {
        "name": "Un Cadeau (feat. Roméo Elvis & Slimka)",
        "album": "High & Fines Herbes",
        "year": 2020
      },
      {
        "name": "Bon appétit",
        "album": "Grünt #49 - Single",
        "year": 2022
      },
      {
        "name": "Qu'est ce qui m'arrive",
        "album": "Hat Trick",
        "year": 2021
      },
      {
        "name": "Yessaï - Sur la carte",
        "album": "Double hélice",
        "year": 2016
      },
      {
        "name": "Incroyaux (feat. Roméo Elvis)",
        "album": "Double hélice 3",
        "year": 2018
      },
      {
        "name": "Tu connais pas",
        "album": "Tu connais pas - Single",
        "year": 2018
      },
      {
        "name": "Forcing",
        "album": "Double hélice 3",
        "year": 2018
      },
      {
        "name": "La lettre (Pt. 2)",
        "album": "Double hélice 3",
        "year": 2018
      },
      {
        "name": "Merci Beaucoup",
        "album": "Double hélice",
        "year": 2016
      },
      {
        "name": "Sonic (feat. Luv Resval)",
        "album": "High & Fines Herbes",
        "year": 2020
      },
      {
        "name": "Yellow (feat. Rim'K)",
        "album": "High & Fines Herbes",
        "year": 2020
      },
      {
        "name": "Vie ordinaire (feat. Oxmo Puccino & Swing)",
        "album": "High & Fines Herbes",
        "year": 2020
      },
      {
        "name": "Profondeurs Part II",
        "album": "High & Fines Herbes",
        "year": 2020
      },
      {
        "name": "Bae (feat. Hamza)",
        "album": "Double hélice 3",
        "year": 2018
      },
      {
        "name": "Skit-Eulz",
        "album": "High & Fines Herbes",
        "year": 2020
      },
      {
        "name": "Le monde a changé",
        "album": "Double hélice 3",
        "year": 2018
      },
      {
        "name": "Dégueulasse",
        "album": "Double hélice 3",
        "year": 2018
      },
      {
        "name": "Béatrice (feat. So La Lune)",
        "album": "Béatrice (feat. So La Lune) - Single",
        "year": 2023
      },
      {
        "name": "Très à propos (feat. H JeuneCrack)",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      },
      {
        "name": "Rouleur personnel",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      },
      {
        "name": "Zumba",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      },
      {
        "name": "Donut (feat. Rim'K & Soso Maness)",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      },
      {
        "name": "Béatrice (feat. So La Lune)",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      },
      {
        "name": "Skit Paolo Mirabelli",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      },
      {
        "name": "Tornado (feat. Enima & Limsa d'Aulnay)",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      },
      {
        "name": "NEW (feat. Le Juiice)",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      },
      {
        "name": "Type plante (feat. Savage Toddy)",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      },
      {
        "name": "Donne du love",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      },
      {
        "name": "Skit Jimmy the loutre (feat. Jimmy la loutre & Arthur Qwest)",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      },
      {
        "name": "La vie en vert (feat. Jok'air & Sopico)",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      },
      {
        "name": "Monster (feat. Rowjay)",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      },
      {
        "name": "BIP (feat. ElGrandeToto)",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      },
      {
        "name": "Un bon jour (feat. thaHomey)",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      },
      {
        "name": "Le générique",
        "album": "High & Fines Herbes – Édition 420",
        "year": 2023
      }
    ]
  },
  {
    "name": "XXXTENTACION",
    "color": "#3B8BD4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 56,
    "albums": [
      "?",
      "XXXTENTACION Presents: Members Only, Vol. 3",
      "17",
      "Revenge",
      "A GHETTO CHRISTMAS CAROL - EP",
      "SKINS",
      "Bad Vibes Forever",
      "Look At Me! - Single",
      "? (Deluxe)"
    ],
    "tracks": [
      {
        "name": "Moonlight",
        "album": "?",
        "year": 2018
      },
      {
        "name": "SAD!",
        "album": "?",
        "year": 2018
      },
      {
        "name": "Introduction (instructions)",
        "album": "?",
        "year": 2018
      },
      {
        "name": "ALONE, PART 3",
        "album": "?",
        "year": 2018
      },
      {
        "name": "the remedy for a broken heart (why am I so in love)",
        "album": "?",
        "year": 2018
      },
      {
        "name": "Floor 555",
        "album": "?",
        "year": 2018
      },
      {
        "name": "NUMB",
        "album": "?",
        "year": 2018
      },
      {
        "name": "infinity (888) [feat. Joey Bada$$]",
        "album": "?",
        "year": 2018
      },
      {
        "name": "going down!",
        "album": "?",
        "year": 2018
      },
      {
        "name": "Pain = BESTFRIEND (feat. Travis Barker)",
        "album": "?",
        "year": 2018
      },
      {
        "name": "love yourself (interlude)",
        "album": "?",
        "year": 2018
      },
      {
        "name": "SMASH! (feat. PnB Rock)",
        "album": "?",
        "year": 2018
      },
      {
        "name": "I don't even speak spanish lol (feat. Rio Santana, Judah & Andrez Babii)",
        "album": "?",
        "year": 2018
      },
      {
        "name": "changes",
        "album": "?",
        "year": 2018
      },
      {
        "name": "Hope",
        "album": "?",
        "year": 2018
      },
      {
        "name": "schizophrenia",
        "album": "?",
        "year": 2018
      },
      {
        "name": "before I close my eyes",
        "album": "?",
        "year": 2018
      },
      {
        "name": "Look At Me!",
        "album": "Look At Me! - Single",
        "year": 2015
      },
      {
        "name": "Jocelyn Flores",
        "album": "17",
        "year": 2017
      },
      {
        "name": "Everybody Dies In Their Nightmares",
        "album": "17",
        "year": 2017
      },
      {
        "name": "Revenge",
        "album": "17",
        "year": 2017
      },
      {
        "name": "Train food",
        "album": "SKINS",
        "year": 2018
      },
      {
        "name": "Orlando",
        "album": "17",
        "year": 2017
      },
      {
        "name": "hate will never win",
        "album": "A GHETTO CHRISTMAS CAROL - EP",
        "year": 2017
      },
      {
        "name": "bad vibes forever (feat. PnB Rock & Trippie Redd)",
        "album": "Bad Vibes Forever",
        "year": 2019
      },
      {
        "name": "numb the pain",
        "album": "Bad Vibes Forever",
        "year": 2019
      },
      {
        "name": "Depression & Obsession",
        "album": "17",
        "year": 2017
      },
      {
        "name": "A GHETTO CHRISTMAS CAROL",
        "album": "A GHETTO CHRISTMAS CAROL - EP",
        "year": 2017
      },
      {
        "name": "What in XXXTarnation (feat. Ski Mask the Slump God)",
        "album": "XXXTENTACION Presents: Members Only, Vol. 3",
        "year": 2017
      },
      {
        "name": "H2O (feat. Ski Mask the Slump God)",
        "album": "XXXTENTACION Presents: Members Only, Vol. 3",
        "year": 2017
      },
      {
        "name": "Butthole Girl! (feat. Tank Head, Robb Banks & Craig Xen)",
        "album": "XXXTENTACION Presents: Members Only, Vol. 3",
        "year": 2017
      },
      {
        "name": "Find Me (Intro)",
        "album": "XXXTENTACION Presents: Members Only, Vol. 3",
        "year": 2017
      },
      {
        "name": "Off the Wall! (feat. Ski Mask the Slump God)",
        "album": "XXXTENTACION Presents: Members Only, Vol. 3",
        "year": 2017
      },
      {
        "name": "4Peat (feat. Ski Mask the Slump God)",
        "album": "XXXTENTACION Presents: Members Only, Vol. 3",
        "year": 2017
      },
      {
        "name": "Maxipads for Everyone",
        "album": "XXXTENTACION Presents: Members Only, Vol. 3",
        "year": 2017
      },
      {
        "name": "Static Shock (feat. Ski Mask the Slump God)",
        "album": "XXXTENTACION Presents: Members Only, Vol. 3",
        "year": 2017
      },
      {
        "name": "Came2Kill (feat. Kid Trunks & Craig Xen)",
        "album": "XXXTENTACION Presents: Members Only, Vol. 3",
        "year": 2017
      },
      {
        "name": "Boost!",
        "album": "XXXTENTACION Presents: Members Only, Vol. 3",
        "year": 2017
      },
      {
        "name": "Carry On",
        "album": "17",
        "year": 2017
      },
      {
        "name": "Ayala (Outro)",
        "album": "17",
        "year": 2017
      },
      {
        "name": "UP LIKE AN INSOMNIAC (Freestyle)",
        "album": "A GHETTO CHRISTMAS CAROL - EP",
        "year": 2017
      },
      {
        "name": "Dead Inside (Interlude)",
        "album": "17",
        "year": 2017
      },
      {
        "name": "Save Me",
        "album": "17",
        "year": 2017
      },
      {
        "name": "King",
        "album": "Revenge",
        "year": 2016
      },
      {
        "name": "Slipknot (feat. Kin$oul & Killstation)",
        "album": "Revenge",
        "year": 2017
      },
      {
        "name": "Indecision",
        "album": "A GHETTO CHRISTMAS CAROL - EP",
        "year": 2017
      },
      {
        "name": "YuNg BrAtZ",
        "album": "Revenge",
        "year": 2016
      },
      {
        "name": "RIP Roach (feat. $ki Mask The Slump God)",
        "album": "Revenge",
        "year": 2016
      },
      {
        "name": "I Don't Wanna Do This Anymore",
        "album": "Revenge",
        "year": 2016
      },
      {
        "name": "Looking for a Star",
        "album": "Revenge",
        "year": 2017
      },
      {
        "name": "Red Light!",
        "album": "A GHETTO CHRISTMAS CAROL - EP",
        "year": 2017
      },
      {
        "name": "Bowser (feat. Ski Mask the Slump God)",
        "album": "XXXTENTACION Presents: Members Only, Vol. 3",
        "year": 2017
      },
      {
        "name": "The Explanation",
        "album": "17",
        "year": 2017
      },
      {
        "name": "Moonlight (Instrumental)",
        "album": "? (Deluxe)",
        "year": 2019
      },
      {
        "name": "Introduction",
        "album": "SKINS",
        "year": 2018
      },
      {
        "name": "STARING AT THE SKY",
        "album": "SKINS",
        "year": 2018
      }
    ]
  },
  {
    "name": "Hugo (TSR)",
    "color": "#4A9E5C",
    "genre": "Hip-Hop/Rap",
    "trackCount": 55,
    "albums": [
      "Fenêtre Sur Rue",
      "Tant qu'on est là",
      "Une vie et quelques",
      "Jeudi",
      "La Salle D'attente",
      "Flaque de samples",
      "La bombe H",
      "Là-Haut - Single",
      "Périmètre - Single",
      "Piège à loup - Single"
    ],
    "tracks": [
      {
        "name": "Là-Haut",
        "album": "Là-Haut - Single",
        "year": 2016
      },
      {
        "name": "Fenêtre Sur Rue",
        "album": "Fenêtre Sur Rue",
        "year": 2012
      },
      {
        "name": "Là-haut",
        "album": "Tant qu'on est là",
        "year": 2016
      },
      {
        "name": "Périmètre",
        "album": "Périmètre - Single",
        "year": 2020
      },
      {
        "name": "cœur brave",
        "album": "Une vie et quelques",
        "year": 2021
      },
      {
        "name": "Les mains devant les yeux",
        "album": "Une vie et quelques",
        "year": 2021
      },
      {
        "name": "Oubliettes",
        "album": "Une vie et quelques",
        "year": 2021
      },
      {
        "name": "Des voix résonnent",
        "album": "Une vie et quelques",
        "year": 2021
      },
      {
        "name": "Plaisirs tristes",
        "album": "Une vie et quelques",
        "year": 2021
      },
      {
        "name": "Senseï",
        "album": "Une vie et quelques",
        "year": 2020
      },
      {
        "name": "A la nôtre",
        "album": "Une vie et quelques",
        "year": 2021
      },
      {
        "name": "Périmètre",
        "album": "Une vie et quelques",
        "year": 2020
      },
      {
        "name": "2222 (Interlude)",
        "album": "Une vie et quelques",
        "year": 2021
      },
      {
        "name": "Coloc à terre (feat. Tragik)",
        "album": "Une vie et quelques",
        "year": 2021
      },
      {
        "name": "Point De Départ",
        "album": "Fenêtre Sur Rue",
        "year": 2012
      },
      {
        "name": "Ugotrip",
        "album": "Fenêtre Sur Rue",
        "year": 2012
      },
      {
        "name": "Alors Dites Pas",
        "album": "Fenêtre Sur Rue",
        "year": 2012
      },
      {
        "name": "Coma Artificiel",
        "album": "Fenêtre Sur Rue",
        "year": 2012
      },
      {
        "name": "La Ligne Verte",
        "album": "Fenêtre Sur Rue",
        "year": 2012
      },
      {
        "name": "Eldorado",
        "album": "Fenêtre Sur Rue",
        "year": 2012
      },
      {
        "name": "Interlude",
        "album": "Fenêtre Sur Rue",
        "year": 2012
      },
      {
        "name": "Dojo",
        "album": "Fenêtre Sur Rue",
        "year": 2012
      },
      {
        "name": "Piège à loup",
        "album": "Piège à loup - Single",
        "year": 2011
      },
      {
        "name": "Intact",
        "album": "Fenêtre Sur Rue",
        "year": 2012
      },
      {
        "name": "Dégradation",
        "album": "Fenêtre Sur Rue",
        "year": 2012
      },
      {
        "name": "Old Boy",
        "album": "Fenêtre Sur Rue",
        "year": 2012
      },
      {
        "name": "Point Final",
        "album": "Fenêtre Sur Rue",
        "year": 2012
      },
      {
        "name": "Rei",
        "album": "Tant qu'on est là",
        "year": 2017
      },
      {
        "name": "Exercice",
        "album": "Tant qu'on est là",
        "year": 2017
      },
      {
        "name": "Iceberg",
        "album": "Tant qu'on est là",
        "year": 2017
      },
      {
        "name": "Tant qu'on est là",
        "album": "Tant qu'on est là",
        "year": 2017
      },
      {
        "name": "La cage",
        "album": "Tant qu'on est là",
        "year": 2017
      },
      {
        "name": "En marge",
        "album": "Tant qu'on est là",
        "year": 2017
      },
      {
        "name": "Interlude",
        "album": "Tant qu'on est là",
        "year": 2017
      },
      {
        "name": "Les vieux de mon âge",
        "album": "Tant qu'on est là",
        "year": 2017
      },
      {
        "name": "Autour de moi",
        "album": "Tant qu'on est là",
        "year": 2017
      },
      {
        "name": "Pauvre roi",
        "album": "Tant qu'on est là",
        "year": 2017
      },
      {
        "name": "Couleur miroir",
        "album": "Tant qu'on est là",
        "year": 2017
      },
      {
        "name": "Jungle Urbaine",
        "album": "La Salle D'attente",
        "year": 2009
      },
      {
        "name": "Sélection naturelle",
        "album": "Flaque de samples",
        "year": 2008
      },
      {
        "name": "Cendrier plein et stylo vide",
        "album": "Flaque de samples",
        "year": 2008
      },
      {
        "name": "Objectif Lune",
        "album": "Flaque de samples",
        "year": 2008
      },
      {
        "name": "2 minutes pour convaincre",
        "album": "Flaque de samples",
        "year": 2008
      },
      {
        "name": "Un Pavé Dans La Marre",
        "album": "La Salle D'attente",
        "year": 2009
      },
      {
        "name": "L'habitude De La Biture",
        "album": "La Salle D'attente",
        "year": 2009
      },
      {
        "name": "La bombe H",
        "album": "La bombe H",
        "year": 2012
      },
      {
        "name": "Criminels au mic (feat. Foktu)",
        "album": "La bombe H",
        "year": 2012
      },
      {
        "name": "Fair Play Prod",
        "album": "La Salle D'attente",
        "year": 2009
      },
      {
        "name": "Intro",
        "album": "Jeudi",
        "year": 2023
      },
      {
        "name": "Jeudi",
        "album": "Jeudi",
        "year": 2023
      },
      {
        "name": "Cockpit",
        "album": "Jeudi",
        "year": 2023
      },
      {
        "name": "Les Rails",
        "album": "Jeudi",
        "year": 2023
      },
      {
        "name": "Valises",
        "album": "Jeudi",
        "year": 2023
      },
      {
        "name": "Tourbillon",
        "album": "Jeudi",
        "year": 2023
      },
      {
        "name": "Alors Dites Pas",
        "album": "Fenêtre Sur Rue",
        "year": 2010
      }
    ]
  },
  {
    "name": "Dinos",
    "color": "#9B4DCA",
    "genre": "Hip-Hop/Rap",
    "trackCount": 55,
    "albums": [
      "Imany",
      "Stamina,",
      "Hiver à Paris",
      "KINTSUGI",
      "Taciturne",
      "Imany Deluxe",
      "Stamina, Memento"
    ],
    "tracks": [
      {
        "name": "NOIR FLUO",
        "album": "KINTSUGI",
        "year": 2024
      },
      {
        "name": "SIGNE DE FEU",
        "album": "KINTSUGI",
        "year": 2024
      },
      {
        "name": "MERCURE RETROGRADE",
        "album": "KINTSUGI",
        "year": 2024
      },
      {
        "name": "TONY SOPRANO",
        "album": "KINTSUGI",
        "year": 2024
      },
      {
        "name": "HABESHA",
        "album": "KINTSUGI",
        "year": 2024
      },
      {
        "name": "DR MELFI",
        "album": "KINTSUGI",
        "year": 2024
      },
      {
        "name": "Les pleurs du mal",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Moins un (feat. Nekfeu)",
        "album": "Stamina,",
        "year": 2020
      },
      {
        "name": "No Love (feat. Marie Plassard)",
        "album": "Taciturne",
        "year": 2019
      },
      {
        "name": "Ciel pleure (feat. Laylow)",
        "album": "Stamina,",
        "year": 2020
      },
      {
        "name": "Judas (feat. Zefor & Zikxo)",
        "album": "Stamina,",
        "year": 2020
      },
      {
        "name": "Le nord se souvient (feat. Leto)",
        "album": "Stamina,",
        "year": 2020
      },
      {
        "name": "Corbillard",
        "album": "Stamina,",
        "year": 2020
      },
      {
        "name": "Prends soin de toi",
        "album": "Stamina,",
        "year": 2020
      },
      {
        "name": "Paranoïaque",
        "album": "Stamina,",
        "year": 2020
      },
      {
        "name": "Maman m'aime (feat. Da Uzi)",
        "album": "Stamina,",
        "year": 2020
      },
      {
        "name": "Césaire",
        "album": "Stamina,",
        "year": 2020
      },
      {
        "name": "Demain n'existe plus",
        "album": "Stamina,",
        "year": 2020
      },
      {
        "name": "Je Wanda (feat. Tayc)",
        "album": "Stamina,",
        "year": 2020
      },
      {
        "name": "93 mesures",
        "album": "Stamina,",
        "year": 2020
      },
      {
        "name": "Madone",
        "album": "Stamina,",
        "year": 2020
      },
      {
        "name": "Diptyque",
        "album": "Stamina,",
        "year": 2020
      },
      {
        "name": "Placebo",
        "album": "Imany Deluxe",
        "year": 2018
      },
      {
        "name": "Argentique",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Magenta",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Beuh et liqueurs (feat. Joke)",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Presque célèbre",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Sophistiqué",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Iceberg Slim",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Notifications",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Flashé",
        "album": "Imany",
        "year": 2017
      },
      {
        "name": "Havana & Malibu",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Rue sans nom",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Spleen",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Quelqu'un de mieux",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Bloody Mary (feat. Youssoupha)",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Hiver 2004",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Donne moi un peu de temps",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Helsinki",
        "album": "Imany",
        "year": 2018
      },
      {
        "name": "Les pleurs du mal",
        "album": "Imany Deluxe",
        "year": 2018
      },
      {
        "name": "XNXX",
        "album": "Taciturne",
        "year": 2019
      },
      {
        "name": "Du mal à te dire (feat. Damso)",
        "album": "Stamina, Memento",
        "year": 2021
      },
      {
        "name": "Rive Droite",
        "album": "Hiver à Paris",
        "year": 2022
      },
      {
        "name": "Modus Vivendi",
        "album": "Hiver à Paris",
        "year": 2022
      },
      {
        "name": "Quatre Saisons",
        "album": "Hiver à Paris",
        "year": 2022
      },
      {
        "name": "Simyaci",
        "album": "Hiver à Paris",
        "year": 2022
      },
      {
        "name": "Rive Gauche",
        "album": "Hiver à Paris",
        "year": 2022
      },
      {
        "name": "Rue de Sèvres",
        "album": "Hiver à Paris",
        "year": 2022
      },
      {
        "name": "CTRL + V",
        "album": "Hiver à Paris",
        "year": 2022
      },
      {
        "name": "Rouge Drama",
        "album": "Hiver à Paris",
        "year": 2022
      },
      {
        "name": "Par Amour",
        "album": "Hiver à Paris",
        "year": 2022
      },
      {
        "name": "Interlude",
        "album": "Hiver à Paris",
        "year": 2022
      },
      {
        "name": "Solitaire 1895",
        "album": "Hiver à Paris",
        "year": 2022
      },
      {
        "name": "ADN",
        "album": "Hiver à Paris",
        "year": 2022
      },
      {
        "name": "Aquarius",
        "album": "Hiver à Paris",
        "year": 2022
      }
    ]
  },
  {
    "name": "Ziak",
    "color": "#D4A017",
    "genre": "Hip-Hop/Rap",
    "trackCount": 55,
    "albums": [
      "Akimbo (Video Deluxe Album)",
      "Chrome",
      "Essonne History X",
      "Galerie - Single",
      "Raspoutine - Single",
      "S.P.S - Single",
      "Flocko - Single",
      "Ronaldo - Single",
      "C'est la vie - Single",
      "Double Dash - Single"
    ],
    "tracks": [
      {
        "name": "Capitale risque",
        "album": "Essonne History X",
        "year": 2025
      },
      {
        "name": "Grabba",
        "album": "Essonne History X",
        "year": 2024
      },
      {
        "name": "IOS",
        "album": "Essonne History X",
        "year": 2025
      },
      {
        "name": "Solide",
        "album": "Essonne History X",
        "year": 2025
      },
      {
        "name": "Lieu & Heure",
        "album": "Essonne History X",
        "year": 2025
      },
      {
        "name": "Belle madame",
        "album": "Essonne History X",
        "year": 2025
      },
      {
        "name": "Canaries",
        "album": "Essonne History X",
        "year": 2025
      },
      {
        "name": "Grain de riz",
        "album": "Essonne History X",
        "year": 2025
      },
      {
        "name": "La nuit",
        "album": "Essonne History X",
        "year": 2025
      },
      {
        "name": "Chassé-croisé",
        "album": "Essonne History X",
        "year": 2024
      },
      {
        "name": "Story",
        "album": "Essonne History X",
        "year": 2025
      },
      {
        "name": "Garçons de café",
        "album": "Essonne History X",
        "year": 2025
      },
      {
        "name": "Fixette",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2020
      },
      {
        "name": "Galerie",
        "album": "Galerie - Single",
        "year": 2021
      },
      {
        "name": "Raspoutine",
        "album": "Raspoutine - Single",
        "year": 2020
      },
      {
        "name": "S.P.S",
        "album": "S.P.S - Single",
        "year": 2021
      },
      {
        "name": "Flocko",
        "album": "Flocko - Single",
        "year": 2021
      },
      {
        "name": "Ronaldo",
        "album": "Ronaldo - Single",
        "year": 2020
      },
      {
        "name": "C'est la vie",
        "album": "C'est la vie - Single",
        "year": 2020
      },
      {
        "name": "Double Dash",
        "album": "Double Dash - Single",
        "year": 2021
      },
      {
        "name": "Coffre",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2021
      },
      {
        "name": "Badman Trip",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2021
      },
      {
        "name": "La zalousie (Interlude)",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2021
      },
      {
        "name": "Lloret de Mar",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2021
      },
      {
        "name": "Akimbo",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2021
      },
      {
        "name": "Gros lot",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2021
      },
      {
        "name": "Prière",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2021
      },
      {
        "name": "Vrai / Faux",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2021
      },
      {
        "name": "Lauiss",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2021
      },
      {
        "name": "Galerie",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2021
      },
      {
        "name": "Espace",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2021
      },
      {
        "name": "Le pacte",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2021
      },
      {
        "name": "Shonen",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2021
      },
      {
        "name": "S.P.S",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2021
      },
      {
        "name": "Parasite",
        "album": "Akimbo (Video Deluxe Album)",
        "year": 2021
      },
      {
        "name": "Ça suffit",
        "album": "Ça suffit - Single",
        "year": 2021
      },
      {
        "name": "LG",
        "album": "LG - Single",
        "year": 2020
      },
      {
        "name": "1 2 3 Soleil",
        "album": "1 2 3 Soleil - Single",
        "year": 2020
      },
      {
        "name": "Quatre",
        "album": "Quatre - Single",
        "year": 2020
      },
      {
        "name": "Manuel de vengeance",
        "album": "Manuel de vengeance - Single",
        "year": 2025
      },
      {
        "name": "Fixette",
        "album": "Fixette - Single",
        "year": 2020
      },
      {
        "name": "Même pas un grincement",
        "album": "Chrome",
        "year": 2023
      },
      {
        "name": "Démonstration",
        "album": "Chrome",
        "year": 2023
      },
      {
        "name": "Chrome",
        "album": "Chrome",
        "year": 2023
      },
      {
        "name": "Tomb Raider",
        "album": "Chrome",
        "year": 2023
      },
      {
        "name": "Op Ganté",
        "album": "Chrome",
        "year": 2023
      },
      {
        "name": "Seinen",
        "album": "Chrome",
        "year": 2023
      },
      {
        "name": "Ambiance vandale",
        "album": "Chrome",
        "year": 2023
      },
      {
        "name": "Pourquoi",
        "album": "Chrome",
        "year": 2023
      },
      {
        "name": "Le crime parfait",
        "album": "Chrome",
        "year": 2023
      },
      {
        "name": "Mauvais jour",
        "album": "Chrome",
        "year": 2023
      },
      {
        "name": "La plage",
        "album": "Chrome",
        "year": 2023
      },
      {
        "name": "Pour une fois",
        "album": "Chrome",
        "year": 2023
      },
      {
        "name": "Rappel des faits",
        "album": "Chrome",
        "year": 2023
      },
      {
        "name": "Désolé",
        "album": "Chrome",
        "year": 2023
      }
    ]
  },
  {
    "name": "Oxmo Puccino",
    "color": "#FF6B6B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 55,
    "albums": [
      "Opéra Puccino (Edition Collector)",
      "LA HAUTEUR DE LA LUNE",
      "Sheitan (bande originale du film) [radio Sheitan mixé par DJ Mehdi]"
    ],
    "tracks": [
      {
        "name": "Ouverture",
        "album": "LA HAUTEUR DE LA LUNE",
        "year": 2025
      },
      {
        "name": "Les Meilleurs",
        "album": "LA HAUTEUR DE LA LUNE",
        "year": 2025
      },
      {
        "name": "Miso clair",
        "album": "LA HAUTEUR DE LA LUNE",
        "year": 2025
      },
      {
        "name": "Jardin d'hiver",
        "album": "LA HAUTEUR DE LA LUNE",
        "year": 2025
      },
      {
        "name": "Ne pas m'aimer (feat. MC Solaar)",
        "album": "LA HAUTEUR DE LA LUNE",
        "year": 2025
      },
      {
        "name": "La hauteur de la lune (feat. Vanessa Paradis)",
        "album": "LA HAUTEUR DE LA LUNE",
        "year": 2025
      },
      {
        "name": "Plus loin que soi",
        "album": "LA HAUTEUR DE LA LUNE",
        "year": 2025
      },
      {
        "name": "Faut que j'te raconte",
        "album": "LA HAUTEUR DE LA LUNE",
        "year": 2025
      },
      {
        "name": "La fête des pères",
        "album": "LA HAUTEUR DE LA LUNE",
        "year": 2025
      },
      {
        "name": "Si tu dois",
        "album": "LA HAUTEUR DE LA LUNE",
        "year": 2025
      },
      {
        "name": "Intermezzo",
        "album": "LA HAUTEUR DE LA LUNE",
        "year": 2025
      },
      {
        "name": "Glock",
        "album": "LA HAUTEUR DE LA LUNE",
        "year": 2025
      },
      {
        "name": "Cosmos",
        "album": "LA HAUTEUR DE LA LUNE",
        "year": 2025
      },
      {
        "name": "Insomnie",
        "album": "LA HAUTEUR DE LA LUNE",
        "year": 2025
      },
      {
        "name": "Léger",
        "album": "LA HAUTEUR DE LA LUNE",
        "year": 2025
      },
      {
        "name": "Pucc Fiction",
        "album": "Sheitan (bande originale du film) [radio Sheitan mixé par DJ Mehdi]",
        "year": 2006
      },
      {
        "name": "Visions de vie (Remasterisé)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Black mafioso (Interlude) [Remasterisé]",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Hitman (Remasterisé)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 1998
      },
      {
        "name": "Qui peut le nier ! (Remasterisé)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Peur noire (Remasterisé)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "L'enfant seul (Remasterisé)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Alias Jon Smoke (Remasterisé)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 1998
      },
      {
        "name": "Peu de gens le savent (Interlude) [Remasterisé]",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 1998
      },
      {
        "name": "Amour et jalousie (Remasterisé)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "24 heures à vivre (feat. Akhenaton, Freeman, Le Rat Luciano & Pit Baccardi) [Remasterisé]",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 1998
      },
      {
        "name": "Sacré samedi soir (Remasterisé)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 1998
      },
      {
        "name": "Le jour où tu partiras (feat. K-Reen) [Remasterisé]",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 1998
      },
      {
        "name": "Sortilège (feat. Triomphe) [Remasterisé]",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 1998
      },
      {
        "name": "Black cyrano de bergerac (Interlude) [Remasterisé]",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Mensongeur (feat. K-Reen) [Remasterisé]",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "La lettre, tant de choses à dire (feat. Freeman) [Remasterisé]",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "La loi du point final (feat. Lino) [Remasterisé]",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Mourir 1000 fois (Remasterisé)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 1998
      },
      {
        "name": "Si t'aimes ta clique (feat. 113 Clan) [Bonus]",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Kijujqui ? (Bonus)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Sans-abris (feat. Kery James) [Bonus]",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Les p'tits d'ici (Bonus)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Mourir 1000 fois (Version trio acoustique)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "24 heures à vivre (Remix 2018) [feat. Pit Baccardi, Jazzy Bazz, Remy & Demi-Portion]",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Visions de vie (Instrumental)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Hitman (Instrumental)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Qui peut le nier ! (Instrumental)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Peur noire (Instrumental)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "L'enfant seul (Instrumental)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Alias Jon Smoke (Instrumental)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Amour et jalousie (Instrumental)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "24 heures à vivre (Instrumental)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Sacré samedi soir (Instrumental)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Le jour où tu partiras (Instrumental)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Sortilège (Instrumental)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Mensongeur (Instrumental)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "La lettre (Instrumental)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "La loi du point finale (Instrumental)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      },
      {
        "name": "Mourir 1000 fois (Instrumental)",
        "album": "Opéra Puccino (Edition Collector)",
        "year": 2018
      }
    ]
  },
  {
    "name": "Snoop Dogg",
    "color": "#4ECDC4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 54,
    "albums": [
      "Doggystyle",
      "The Best of Snoop Dogg",
      "I Wanna Thank Me",
      "Tha Blue Carpet Treatment",
      "Doggystyle (30th Anniversary Edition)",
      "R&G (Rhythm & Gangsta) - The Masterpiece",
      "Neva Left",
      "From Tha Streets 2 Tha Suites",
      "Tha Last Meal",
      "Snoop Dogg Presents Algorithm (Global Edition)"
    ],
    "tracks": [
      {
        "name": "Drop It Like It's Hot (feat. Pharrell Williams)",
        "album": "R&G (Rhythm & Gangsta) - The Masterpiece",
        "year": 2004
      },
      {
        "name": "Bathtub",
        "album": "Doggystyle",
        "year": 1993
      },
      {
        "name": "G Funk Intro",
        "album": "Doggystyle",
        "year": 1993
      },
      {
        "name": "Gin and Juice",
        "album": "Doggystyle",
        "year": 1993
      },
      {
        "name": "Tha Shiznit",
        "album": "Doggystyle",
        "year": 1993
      },
      {
        "name": "Lodi Dodi",
        "album": "Doggystyle",
        "year": 1993
      },
      {
        "name": "Murder Was the Case",
        "album": "Doggystyle",
        "year": 1993
      },
      {
        "name": "Serial Killa (feat. Doc, RBX & Tha Dogg Pound)",
        "album": "Doggystyle",
        "year": 1993
      },
      {
        "name": "Who Am I (What’s My Name)?",
        "album": "Doggystyle",
        "year": 1993
      },
      {
        "name": "For All My N****z & Bitches (feat. The Lady of Rage & Tha Dogg Pound)",
        "album": "Doggystyle",
        "year": 1993
      },
      {
        "name": "Ain’t No Fun (If the Homies Can’t Have None) [feat. Nate Dogg, Warren G & Kurupt]",
        "album": "Doggystyle",
        "year": 1993
      },
      {
        "name": "Doggy Dogg World (feat. Tha Dogg Pound & The Dramatics)",
        "album": "Doggystyle",
        "year": 1993
      },
      {
        "name": "Gz and Hustlas",
        "album": "Doggystyle",
        "year": 1993
      },
      {
        "name": "Pump Pump",
        "album": "Doggystyle",
        "year": 1993
      },
      {
        "name": "Ups & Downs (feat. Bee Gees)",
        "album": "R&G (Rhythm & Gangsta) - The Masterpiece",
        "year": 2004
      },
      {
        "name": "Take Me Away (feat. Russ & Wiz Khalifa)",
        "album": "I Wanna Thank Me",
        "year": 2019
      },
      {
        "name": "Wintertime in June (feat. Nate Dogg)",
        "album": "I Wanna Thank Me",
        "year": 2019
      },
      {
        "name": "Get My Money (feat. Prohoezak)",
        "album": "Snoop Dogg Presents Algorithm (Global Edition)",
        "year": 2021
      },
      {
        "name": "From tha Chuuuch to Da Palace (feat. Pharrell)",
        "album": "The Best of Snoop Dogg",
        "year": 2005
      },
      {
        "name": "Focused",
        "album": "I Wanna Thank Me",
        "year": 2019
      },
      {
        "name": "B Please (feat. Xzibit)",
        "album": "The Best of Snoop Dogg",
        "year": 2005
      },
      {
        "name": "Promise You This",
        "album": "Neva Left",
        "year": 2017
      },
      {
        "name": "Lay Low (feat. Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz)",
        "album": "The Best of Snoop Dogg",
        "year": 2005
      },
      {
        "name": "Just Dippin' (feat. Dr. Dre & Jewell)",
        "album": "The Best of Snoop Dogg",
        "year": 2005
      },
      {
        "name": "Still a G Thang",
        "album": "The Best of Snoop Dogg",
        "year": 1998
      },
      {
        "name": "The One & Only",
        "album": "The Best of Snoop Dogg",
        "year": 2002
      },
      {
        "name": "Stoplight",
        "album": "The Best of Snoop Dogg",
        "year": 2002
      },
      {
        "name": "Stacey Adams (feat. KoKane)",
        "album": "The Best of Snoop Dogg",
        "year": 2005
      },
      {
        "name": "420 (Blaze Up) [feat. Devin the Dude, Wiz Khalifa & DJ Battlecat)",
        "album": "Neva Left",
        "year": 2017
      },
      {
        "name": "Loosen' Control (feat. Butch Cassidy)",
        "album": "The Best of Snoop Dogg",
        "year": 2005
      },
      {
        "name": "Still a Thang",
        "album": "Da Game Is To Be Sold, Not To Be Told",
        "year": 1998
      },
      {
        "name": "Do It When I'm In It (feat. Jermaine Dupri, Ozuna & Slim Jxmmi)",
        "album": "I Wanna Thank Me",
        "year": 2019
      },
      {
        "name": "Let Bygones Be Bygones",
        "album": "I Wanna Thank Me",
        "year": 2019
      },
      {
        "name": "What U Talkin' Bout",
        "album": "I Wanna Thank Me",
        "year": 2019
      },
      {
        "name": "Boss' Life (feat. Akon)",
        "album": "Tha Blue Carpet Treatment",
        "year": 2006
      },
      {
        "name": "I Wanna Rock",
        "album": "Malice 'N Wonderland",
        "year": 2009
      },
      {
        "name": "Candy (Drippin' Like Water) [feat. E-40, MC Eiht, Goldie Loc, Daz and Kurupt)",
        "album": "Tha Blue Carpet Treatment",
        "year": 2006
      },
      {
        "name": "That's That Shit (R. Kelly) [feat. R. Kelly]",
        "album": "Tha Blue Carpet Treatment",
        "year": 2006
      },
      {
        "name": "Vato (feat. B-Real)",
        "album": "Tha Blue Carpet Treatment",
        "year": 2006
      },
      {
        "name": "Murder Was the Case",
        "album": "Doggystyle (30th Anniversary Edition)",
        "year": 1993
      },
      {
        "name": "Touch Away (feat. October London)",
        "album": "Touch Away (feat. October London) - Single",
        "year": 2022
      },
      {
        "name": "Gang Signs (feat. Mozzy)",
        "album": "From Tha Streets 2 Tha Suites",
        "year": 2021
      },
      {
        "name": "Roaches In My Ashtray (feat. Prohoezak)",
        "album": "From Tha Streets 2 Tha Suites",
        "year": 2021
      },
      {
        "name": "Gin and Juice",
        "album": "Doggystyle (30th Anniversary Edition)",
        "year": 1993
      },
      {
        "name": "Imagine (feat. Dr. Dre and D'Angelo)",
        "album": "Tha Blue Carpet Treatment",
        "year": 2006
      },
      {
        "name": "I Wanna F*ck You (feat. Akon)",
        "album": "Tha Blue Carpet Treatment",
        "year": 2006
      },
      {
        "name": "Sexual Eruption",
        "album": "Ego Trippin'",
        "year": 2007
      },
      {
        "name": "Beautiful (feat. Pharrell Williams & Uncle Charlie Wilson)",
        "album": "Paid Tha Cost To Be Da Bo$$",
        "year": 2002
      },
      {
        "name": "Let's Get Blown",
        "album": "R&G (Rhythm & Gangsta) - The Masterpiece",
        "year": 2004
      },
      {
        "name": "Lay Low (feat. Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz)",
        "album": "Tha Last Meal",
        "year": 2000
      },
      {
        "name": "Doggy Dogg World (feat. Tha Dogg Pound & The Dramatics)",
        "album": "Doggystyle (30th Anniversary Edition)",
        "year": 1993
      },
      {
        "name": "Ain’t No Fun (If the Homies Can’t Have None) [feat. Nate Dogg, Warren G & Kurupt]",
        "album": "Doggystyle (30th Anniversary Edition)",
        "year": 1993
      },
      {
        "name": "Who Am I (What’s My Name)?",
        "album": "Doggystyle (30th Anniversary Edition)",
        "year": 1993
      },
      {
        "name": "Snoop Dogg (What's My Name, Pt. 2)",
        "album": "Tha Last Meal",
        "year": 2000
      }
    ]
  },
  {
    "name": "The Notorious B.I.G.",
    "color": "#45B7D1",
    "genre": "Hip-Hop/Rap",
    "trackCount": 54,
    "albums": [
      "Ready To Die the Remaster",
      "Ready to Die (The Remaster)",
      "Born Again (2005 Remaster)"
    ],
    "tracks": [
      {
        "name": "Intro",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Things Done Changed",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Gimme the Loot",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Machine Gun Funk",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Warning",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Ready To Die",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "One More Chance",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "#!*@ Me",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Juicy",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Everyday Struggle",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Me and My B*tch",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Big Poppa",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Respect",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Friend of Mine",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Unbelievable",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Suicidal Thoughts",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Who Shot Ya",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Just Playing (Dreams)",
        "album": "Ready To Die the Remaster",
        "year": 1994
      },
      {
        "name": "Intro (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Things Done Changed (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Gimme the Loot (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Machine Gun Funk (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Warning (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Ready to Die (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "One More Chance (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Fuck Me (Interlude) [2005 Remaster]",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Juicy (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Everyday Struggle (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Me and My Bitch (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Big Poppa (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Respect (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Friend of Mine (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Unbelievable (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Suicidal Thoughts (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Who Shot Ya? (2005 Remaster)",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Just Playing (Dreams) [2005 Remaster]",
        "album": "Ready to Die (The Remaster)",
        "year": 1994
      },
      {
        "name": "Born Again (Intro) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "Notorious B.I.G. (feat. Lil' Kim & Puff Daddy) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "Dead Wrong (feat. Eminem) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "Hope You N****s Sleep (feat. Hot Boys & Big Tmer) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "Dangerous MC's (feat. Mark Curry, Snoop Dogg & Busta Rhymes) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "Biggie (feat. Junior M.A.F.I.A.) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "N****s (2005 Remaster)",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "Big Booty Hoes (feat. Too $hort) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "Would You Die for Me (feat. Lil' Kim & Puff Daddy) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "Come On (feat. Sadat X) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "Rap Phenomenon (feat. Redman & Method Man) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "Let Me Get Down (feat. G-Dep, Craig Mack & Missy \"Misdemeanor\" Elliott) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "Tonight (feat. Mobb Deep & Joe Hooker) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "If I Should Die Before I Wake (feat. Black Rob, Ice Cube, & Beanie Sigel) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "Who Shot Ya? (2005 Remaster)",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "Can I Get Witcha (feat. Lil' Cease) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "I Really Want to Show You (feat. K-CI & Jo-Jo & Nas) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      },
      {
        "name": "Ms. Wallace (Outro) [2005 Remaster]",
        "album": "Born Again (2005 Remaster)",
        "year": 1999
      }
    ]
  },
  {
    "name": "Laylow",
    "color": "#96CEB4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 53,
    "albums": [
      "TRINITY",
      "L'Étrange Histoire de Mr.Anderson",
      ".RAW-Z",
      ".Raw",
      "STUNTMEN (version single) [feat. Alpha Wann & Wit.] - Single",
      "Maladresse - Single",
      "Mercy"
    ],
    "tracks": [
      {
        "name": "Menu Principal",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "Piranha Baby",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "Plug (feat. Jok'air)",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "VAMONOS (feat. Alpha Wann)",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "Akanizer",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "TrinityVille",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "Mieux vaut pas regarder Part 1",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "Hillz (feat. S.Pri Noir)",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "Manuel d'Utilisation",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "Logiciel triste",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "Nakré",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "MILLION FLOWERZ",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "Initialisation",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "Longue Vie...",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "MEGATRON",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "Mieux vaut pas regarder Part 2",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "BURNING MAN (feat. Lomepal)",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "Il était une fois sous l'eau",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "Tentative de reconnexion",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "Poizon",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "...De Batard (feat. Wit.)",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "Dehors dans la Night",
        "album": "TRINITY",
        "year": 2020
      },
      {
        "name": "STUNTMEN (feat. Alpha Wann & Wit.) [version single]",
        "album": "STUNTMEN (version single) [feat. Alpha Wann & Wit.] - Single",
        "year": 2021
      },
      {
        "name": "+ De Pluie...",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "QUE LA PLUIE",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "VOIR LE MONDE BRÛLER",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "SPECIAL (feat. Nekfeu & Fousheé)",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "HELP !!!",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "C'est Eux Contre Nous",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "UNE HISTOIRE ÉTRANGE",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "LOST FOREST",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "FALLEN ANGELS (feat. slowthai)",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "Tu Comprends Maintenant ?",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "IVERSON",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "Bonsoir Mon Vieil Ami",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "WINDOW SHOPPER PART. 1",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "UN RÊVE ÉTRANGE",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "Ça Va Pas Être Possible...",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "R9R-LINE (feat. Damso)",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "Tu Veux Déjà Me Dire Aurevoir ?",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "NightShop BlaBla",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "STUNTMEN (feat. Alpha Wann & Wit.)",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "WINDOW SHOPPER PART. 2 (feat. Hamza)",
        "album": "L'Étrange Histoire de Mr.Anderson",
        "year": 2021
      },
      {
        "name": "Maladresse",
        "album": "Maladresse - Single",
        "year": 2018
      },
      {
        "name": "Vent de l'est",
        "album": ".RAW-Z",
        "year": 2018
      },
      {
        "name": "10'",
        "album": "Mercy",
        "year": 2016
      },
      {
        "name": "Bruit de couloir",
        "album": ".RAW-Z",
        "year": 2018
      },
      {
        "name": "Z-machine (feat. Wit.)",
        "album": ".RAW-Z",
        "year": 2018
      },
      {
        "name": "Visa (feat. Maad)",
        "album": ".RAW-Z",
        "year": 2018
      },
      {
        "name": "Prince de sang-mêlé",
        "album": ".RAW-Z",
        "year": 2018
      },
      {
        "name": "Hello .RAW-Z",
        "album": ".RAW-Z",
        "year": 2018
      },
      {
        "name": "Médaille",
        "album": ".Raw",
        "year": 2018
      },
      {
        "name": "Pk Tu M'intéresses",
        "album": ".Raw",
        "year": 2018
      }
    ]
  },
  {
    "name": "menace Santana",
    "color": "#FFEAA7",
    "genre": "Hip-Hop/Rap",
    "trackCount": 53,
    "albums": [
      "Freestyle Covid Part. 3",
      "!",
      "Freestyle covid Part. 1",
      "Into The Dark",
      "Guapman - Single",
      "Skiboy - Single",
      "Boosk'Halloween - Single",
      "Vendredi13Juin2025 - Single"
    ],
    "tracks": [
      {
        "name": "Freestyle covid 8",
        "album": "Freestyle covid Part. 1",
        "year": 2020
      },
      {
        "name": "Freestyle covid 9",
        "album": "Freestyle covid Part. 1",
        "year": 2021
      },
      {
        "name": "Freestyle covid 5",
        "album": "Freestyle covid Part. 1",
        "year": 2021
      },
      {
        "name": "Freestyle covid 4",
        "album": "Freestyle covid Part. 1",
        "year": 2020
      },
      {
        "name": "Freestyle covid 1",
        "album": "Freestyle covid Part. 1",
        "year": 2020
      },
      {
        "name": "Freestyle covid 3",
        "album": "Freestyle covid Part. 1",
        "year": 2020
      },
      {
        "name": "Freestyle covid 6",
        "album": "Freestyle covid Part. 1",
        "year": 2020
      },
      {
        "name": "Freestyle covid 2",
        "album": "Freestyle covid Part. 1",
        "year": 2021
      },
      {
        "name": "Freestyle covid 7",
        "album": "Freestyle covid Part. 1",
        "year": 2021
      },
      {
        "name": "Quand le soleil se lèvera à l'ouest !",
        "album": "!",
        "year": 2021
      },
      {
        "name": "Sans fin !",
        "album": "!",
        "year": 2021
      },
      {
        "name": "La petite voix !",
        "album": "!",
        "year": 2021
      },
      {
        "name": "Guapman",
        "album": "Guapman - Single",
        "year": 2022
      },
      {
        "name": "Skiboy",
        "album": "Skiboy - Single",
        "year": 2021
      },
      {
        "name": "Va au diable !!",
        "album": "!",
        "year": 2021
      },
      {
        "name": "Démon démon !",
        "album": "!",
        "year": 2021
      },
      {
        "name": "Fais un voeu !",
        "album": "!",
        "year": 2021
      },
      {
        "name": "L'apprentie sorcière !",
        "album": "!",
        "year": 2021
      },
      {
        "name": "Boo !",
        "album": "!",
        "year": 2021
      },
      {
        "name": "Vengeance !",
        "album": "!",
        "year": 2021
      },
      {
        "name": "Boosk'Halloween",
        "album": "Boosk'Halloween - Single",
        "year": 2021
      },
      {
        "name": "3e rêve !",
        "album": "!",
        "year": 2021
      },
      {
        "name": "Mauvais œil !",
        "album": "!",
        "year": 2021
      },
      {
        "name": "Dans le noir !",
        "album": "!",
        "year": 2021
      },
      {
        "name": "Vendredi13Juin2025",
        "album": "Vendredi13Juin2025 - Single",
        "year": 2025
      },
      {
        "name": "1809",
        "album": "Into The Dark",
        "year": 2022
      },
      {
        "name": "Il Était Une Fois",
        "album": "Into The Dark",
        "year": 2022
      },
      {
        "name": "FREDDY KRUEGER",
        "album": "Into The Dark",
        "year": 2022
      },
      {
        "name": "Le Cauchemar Continue",
        "album": "Into The Dark",
        "year": 2022
      },
      {
        "name": "45 Seconds",
        "album": "Into The Dark",
        "year": 2022
      },
      {
        "name": "Belek Ms",
        "album": "Into The Dark",
        "year": 2022
      },
      {
        "name": "Into The Dark",
        "album": "Into The Dark",
        "year": 2022
      },
      {
        "name": "Halloween",
        "album": "Into The Dark",
        "year": 2022
      },
      {
        "name": "Ma Drug ?",
        "album": "Into The Dark",
        "year": 2022
      },
      {
        "name": "Six",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "Le son avant l'intro",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "Intro",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "Freestyle CovIIId",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "Maracuja",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "Fanm Sé Dyab",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "Uncensored",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "This Is The Future",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "Adrenalean",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "Compton Most Wanted",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "Freestyle Covid 20",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "Freestyle Covid 21",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "Ik Ga Je Dood Maken",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "ChloroDrill",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "Neuf",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "EnAttendantFCP3",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "Shhh",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "¿",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      },
      {
        "name": "19 No Covid",
        "album": "Freestyle Covid Part. 3",
        "year": 2024
      }
    ]
  },
  {
    "name": "Oasis",
    "color": "#7F77DD",
    "genre": "Indie Rock",
    "trackCount": 51,
    "albums": [
      "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
      "Definitely Maybe"
    ],
    "tracks": [
      {
        "name": "Hello (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Roll With It (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Wonderwall (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Don't Look Back in Anger (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Hey Now! (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "(Untitled) [Remastered]",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Some Might Say (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Cast No Shadow (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "She's Electric (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Morning Glory (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "(Untitled II) [Remastered]",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Champagne Supernova (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Talk Tonight (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Acquiesce (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Headshrinker (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "It's Better People (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Rockin' Chair (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Step Out (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Underneath the Sky (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1996
      },
      {
        "name": "Cum on Feel the Noize (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1996
      },
      {
        "name": "Round Are Way (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "The Swamp Song (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "The Masterplan (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Bonehead's Bank Holiday (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Champagne Supernova (Brendan Lynch Mix) [Remastered]",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 2014
      },
      {
        "name": "You've Got to Hide Your Love Away (Remastered)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 1995
      },
      {
        "name": "Acquiesce (Live at Earls Court)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 2014
      },
      {
        "name": "Some Might Say (Demo)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 2014
      },
      {
        "name": "Some Might Say (Live at Roskilde)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 2014
      },
      {
        "name": "She's Electric (Demo)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 2014
      },
      {
        "name": "Talk Tonight (Live at Bath Pavillion)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 2014
      },
      {
        "name": "Rockin' Chair (Demo)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 2014
      },
      {
        "name": "Hello (Live at Roskilde)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 2014
      },
      {
        "name": "Roll With It (Live at Roskilde)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 2014
      },
      {
        "name": "Morning Glory (Live at Roskilde)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 2014
      },
      {
        "name": "Hey Now (Demo)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 2014
      },
      {
        "name": "Bonehead's Bank Holiday (Demo)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 2014
      },
      {
        "name": "Round Are Way (MTV Unplugged)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 2014
      },
      {
        "name": "Cast No Shadow (Live at Maine Road)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 2014
      },
      {
        "name": "The Masterplan (Live at Knebworth Park)",
        "album": "(What's The Story) Morning Glory? [Deluxe Remastered Edition]",
        "year": 2014
      },
      {
        "name": "Rock 'n' Roll Star",
        "album": "Definitely Maybe",
        "year": 1994
      },
      {
        "name": "Shakermaker",
        "album": "Definitely Maybe",
        "year": 1994
      },
      {
        "name": "Live Forever",
        "album": "Definitely Maybe",
        "year": 1994
      },
      {
        "name": "Up in the Sky",
        "album": "Definitely Maybe",
        "year": 1994
      },
      {
        "name": "Columbia",
        "album": "Definitely Maybe",
        "year": 1994
      },
      {
        "name": "Supersonic",
        "album": "Definitely Maybe",
        "year": 1994
      },
      {
        "name": "Bring It on Down",
        "album": "Definitely Maybe",
        "year": 1994
      },
      {
        "name": "Cigarettes & Alcohol",
        "album": "Definitely Maybe",
        "year": 1994
      },
      {
        "name": "Digsy's Dinner",
        "album": "Definitely Maybe",
        "year": 1994
      },
      {
        "name": "Slide Away",
        "album": "Definitely Maybe",
        "year": 1994
      },
      {
        "name": "Married With Children",
        "album": "Definitely Maybe",
        "year": 1994
      }
    ]
  },
  {
    "name": "Drake",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 51,
    "albums": [
      "For All The Dogs",
      "Certified Lover Boy",
      "Her Loss",
      "Scorpion",
      "Nothing Was the Same"
    ],
    "tracks": [
      {
        "name": "N 2 Deep (feat. Future)",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "Love All (feat. JAŸ-Z)",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "F*****g Fans",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "In The Bible (feat. Lil Durk & GIVĒON)",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "Girls Want Girls (feat. Lil Baby)",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "Way 2 Sexy (feat. Future & Young Thug)",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "You Only Live Twice (feat. Lil Wayne & Rick Ross)",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "TSU",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "IMY2 (feat. Kid Cudi)",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "Get Along Better (feat. Ty Dolla $ign)",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "Papi’s Home",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "Champagne Poetry",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "Fountains (feat. Tems)",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "7am On Bridle Path",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "Knife Talk (feat. 21 Savage & Project Pat)",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "No Friends In The Industry",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "Fair Trade (feat. Travis Scott)",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "Race My Mind",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "Pipe Down",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "The Remorse",
        "album": "Certified Lover Boy",
        "year": 2021
      },
      {
        "name": "BackOutsideBoyz",
        "album": "Her Loss",
        "year": 2022
      },
      {
        "name": "Middle of the Ocean",
        "album": "Her Loss",
        "year": 2022
      },
      {
        "name": "Jumbotron Shit Poppin",
        "album": "Her Loss",
        "year": 2022
      },
      {
        "name": "I Guess It’s Fuck Me",
        "album": "Her Loss",
        "year": 2022
      },
      {
        "name": "Finesse",
        "album": "Scorpion",
        "year": 2018
      },
      {
        "name": "Mob Ties",
        "album": "Scorpion",
        "year": 2018
      },
      {
        "name": "Is There More",
        "album": "Scorpion",
        "year": 2018
      },
      {
        "name": "Too Much (feat. Sampha)",
        "album": "Nothing Was the Same",
        "year": 2013
      },
      {
        "name": "Virginia Beach",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "Amen (feat. Teezo Touchdown)",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "Calling For You (feat. 21 Savage)",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "Fear Of Heights",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "Daylight",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "First Person Shooter (feat. J. Cole)",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "IDGAF (feat. Yeat)",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "7969 Santa",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "Slime You Out (feat. SZA)",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "Bahamas Promises",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "Tried Our Best",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "Screw The World (Interlude)",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "Drew A Picasso",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "Members Only (feat. PARTYNEXTDOOR)",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "What Would Pluto Do",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "All The Parties (feat. Chief Keef)",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "8am in Charlotte",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "BBL Love (Interlude)",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "Gently (feat. Bad Bunny)",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "Rich Baby Daddy (feat. Sexyy Red & SZA)",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "Another Late Night (feat. Lil Yachty)",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "Away From Home",
        "album": "For All The Dogs",
        "year": 2023
      },
      {
        "name": "Polar Opposites",
        "album": "For All The Dogs",
        "year": 2023
      }
    ]
  },
  {
    "name": "Charles Aznavour",
    "color": "#1D9E75",
    "genre": "French Pop",
    "trackCount": 51,
    "albums": [
      "Best Of 40 Chansons",
      "Hier... Encore (Nouvelles orchestrations)",
      "La Mamma",
      "Entre deux rêves",
      "Hier encore (Trap version - Gaidz mix) - Single"
    ],
    "tracks": [
      {
        "name": "Les filles d'aujourd'hui",
        "album": "Hier... Encore (Nouvelles orchestrations)",
        "year": 1975
      },
      {
        "name": "Entre nous",
        "album": "Entre deux rêves",
        "year": 1967
      },
      {
        "name": "Désormais",
        "album": "Hier... Encore (Nouvelles orchestrations)",
        "year": 1975
      },
      {
        "name": "Hier encore (Trap version - Gaidz mix)",
        "album": "Hier encore (Trap version - Gaidz mix) - Single",
        "year": 2023
      },
      {
        "name": "Je m'voyais déjà",
        "album": "Hier... Encore (Nouvelles orchestrations)",
        "year": 1975
      },
      {
        "name": "Que c'est triste Venise",
        "album": "Hier... Encore (Nouvelles orchestrations)",
        "year": 1975
      },
      {
        "name": "Si tu m'emportes",
        "album": "Hier... Encore (Nouvelles orchestrations)",
        "year": 1975
      },
      {
        "name": "Ton nom (2ème version)",
        "album": "Hier... Encore (Nouvelles orchestrations)",
        "year": 1975
      },
      {
        "name": "Et pourtant (Bande originale du film \"Cherchez l'idole\")",
        "album": "La Mamma",
        "year": 1963
      },
      {
        "name": "Bon anniversaire",
        "album": "Hier... Encore (Nouvelles orchestrations)",
        "year": 1975
      },
      {
        "name": "La Mamma (French Version)",
        "album": "La Mamma",
        "year": 1963
      },
      {
        "name": "Au creux de mon épaule",
        "album": "Best Of 40 Chansons",
        "year": 2013
      },
      {
        "name": "Sa jeunesse",
        "album": "Best Of 40 Chansons",
        "year": 2013
      },
      {
        "name": "Toi et moi",
        "album": "Best Of 40 Chansons",
        "year": 1994
      },
      {
        "name": "Le palais de nos chimères",
        "album": "Best Of 40 Chansons",
        "year": 1964
      },
      {
        "name": "Mes emmerdes (Remastered 2014)",
        "album": "Best Of 40 Chansons",
        "year": 1976
      },
      {
        "name": "À ma fille",
        "album": "Best Of 40 Chansons",
        "year": 1964
      },
      {
        "name": "Non je n'ai rien oublié",
        "album": "Best Of 40 Chansons",
        "year": 1994
      },
      {
        "name": "La bohème",
        "album": "Best Of 40 Chansons",
        "year": 1965
      },
      {
        "name": "Les deux guitares",
        "album": "Best Of 40 Chansons",
        "year": 1994
      },
      {
        "name": "Comme ils disent",
        "album": "Best Of 40 Chansons",
        "year": 1972
      },
      {
        "name": "Désormais",
        "album": "Best Of 40 Chansons",
        "year": 2013
      },
      {
        "name": "Bon anniversaire",
        "album": "Best Of 40 Chansons",
        "year": 2013
      },
      {
        "name": "Il te suffisait que je t'aime",
        "album": "Best Of 40 Chansons",
        "year": 2013
      },
      {
        "name": "Pour faire une jam",
        "album": "Best Of 40 Chansons",
        "year": 2013
      },
      {
        "name": "Les comédiens",
        "album": "Best Of 40 Chansons",
        "year": 1994
      },
      {
        "name": "La Mamma (French Version)",
        "album": "Best Of 40 Chansons",
        "year": 1983
      },
      {
        "name": "Emmenez-moi",
        "album": "Best Of 40 Chansons",
        "year": 1994
      },
      {
        "name": "Trousse chemise",
        "album": "Best Of 40 Chansons",
        "year": 1962
      },
      {
        "name": "Donne tes seize ans",
        "album": "Best Of 40 Chansons",
        "year": 2013
      },
      {
        "name": "Tu t'laisses aller",
        "album": "Best Of 40 Chansons",
        "year": 1983
      },
      {
        "name": "Sur Ma Vie",
        "album": "Best Of 40 Chansons",
        "year": 1963
      },
      {
        "name": "J'en déduis que je t'aime",
        "album": "Best Of 40 Chansons",
        "year": 1964
      },
      {
        "name": "Parce que",
        "album": "Best Of 40 Chansons",
        "year": 1964
      },
      {
        "name": "Je m'voyais déjà",
        "album": "Best Of 40 Chansons",
        "year": 1960
      },
      {
        "name": "Que c'est triste Venise",
        "album": "Best Of 40 Chansons",
        "year": 1983
      },
      {
        "name": "Il Faut Savoir (Remasterisé en 2001)",
        "album": "Best Of 40 Chansons",
        "year": 1961
      },
      {
        "name": "L'amour c'est comme un jour",
        "album": "Best Of 40 Chansons",
        "year": 1962
      },
      {
        "name": "Et pourtant (BOF \"Cherchez l’idole\")",
        "album": "Best Of 40 Chansons",
        "year": 1994
      },
      {
        "name": "Hier encore",
        "album": "Best Of 40 Chansons",
        "year": 1964
      },
      {
        "name": "Paris au mois d’Août",
        "album": "Best Of 40 Chansons",
        "year": 1995
      },
      {
        "name": "Après l'amour",
        "album": "Best Of 40 Chansons",
        "year": 1964
      },
      {
        "name": "Qui",
        "album": "Best Of 40 Chansons",
        "year": 1994
      },
      {
        "name": "Le temps",
        "album": "Best Of 40 Chansons",
        "year": 1964
      },
      {
        "name": "For Me Formidable",
        "album": "Best Of 40 Chansons",
        "year": 1963
      },
      {
        "name": "Avec",
        "album": "Best Of 40 Chansons",
        "year": 1964
      },
      {
        "name": "Plus bleu que tes yeux",
        "album": "Best Of 40 Chansons",
        "year": 2013
      },
      {
        "name": "L'amour et la guerre",
        "album": "Best Of 40 Chansons",
        "year": 1961
      },
      {
        "name": "Les plaisirs démodés",
        "album": "Best Of 40 Chansons",
        "year": 1994
      },
      {
        "name": "Mourir d'aimer",
        "album": "Best Of 40 Chansons",
        "year": 1995
      },
      {
        "name": "Jezebel",
        "album": "Best Of 40 Chansons",
        "year": 2004
      }
    ]
  },
  {
    "name": "Jok'air",
    "color": "#EF9F27",
    "genre": "Hip-Hop/Rap",
    "trackCount": 50,
    "albums": [
      "Jok'travolta : La fièvre",
      "Melvin de Paris",
      "Big Daddy Jok",
      "Jok'Rambo",
      "Jok'Pololo - EP"
    ],
    "tracks": [
      {
        "name": "Comme tu es (feat. Alonzo)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Gangster & Gentleman (feat. Laylow)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "4-5 (feat. ROC & Chich)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Bonbon à la menthe (feat. Mallaury)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Nos souvenirs (feat. Chilla & Yseult)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Vincent vega",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Jay'z & Beyoncé (feat. Suky)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Las Vegas",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Gyrophare",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "J'turn up (feat. Alkpote & NJD)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Club des 27",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Les yeux sont sur nous",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Pour mes supporters",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Jok'travolta",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Papa (feat. La Dictatrice)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "A la poursuite du bonheur",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Ola ola (feat. Sadek)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Scarla",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Radio sexe (Bonus Track)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Du sang et des cendres",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Sex drug beluga (feat. Ruskov, Juicy P & Hayce Lemsi)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Hendrix du tieks (feat. Kpoint & Cinco)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Tech9 (feat. Isha & Hatik)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Jeune papa (feat. Leto & Kitsune Kendra)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "La fièvre du samedi soir",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Oui monsieur (feat. MORE-BACK & Chich)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Mac (feat. ROC)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Ocho cinco (feat. Siboy & M.O. Thug)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Juice (feat. Jazzy Bazz)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Ta meuf est sèche (feat. Gros Mo & S.Pri Noir)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Mille-feuilles (feat. Le Juiice)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Liqueur (feat. Suky)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "2sans25 (feat. MC One)",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "L'amour est dans le binks",
        "album": "Jok'travolta : La fièvre",
        "year": 2019
      },
      {
        "name": "Abdomen",
        "album": "Big Daddy Jok",
        "year": 2017
      },
      {
        "name": "Squale (feat. Chich)",
        "album": "Big Daddy Jok",
        "year": 2017
      },
      {
        "name": "Big Daddy Jok",
        "album": "Big Daddy Jok",
        "year": 2017
      },
      {
        "name": "Jok'rambo",
        "album": "Jok'Rambo",
        "year": 2018
      },
      {
        "name": "Ce n'est pas serieux",
        "album": "Jok'Pololo - EP",
        "year": 2017
      },
      {
        "name": "Je vis cette mélodie",
        "album": "Melvin de Paris",
        "year": 2023
      },
      {
        "name": "Les artistes sont seuls",
        "album": "Melvin de Paris",
        "year": 2023
      },
      {
        "name": "Isma gère le business",
        "album": "Melvin de Paris",
        "year": 2023
      },
      {
        "name": "Soulja Boy",
        "album": "Melvin de Paris",
        "year": 2023
      },
      {
        "name": "La seule qui m'aime pour de vrai",
        "album": "Melvin de Paris",
        "year": 2023
      },
      {
        "name": "Shawty",
        "album": "Melvin de Paris",
        "year": 2023
      },
      {
        "name": "Nés pauvres",
        "album": "Melvin de Paris",
        "year": 2023
      },
      {
        "name": "Respect",
        "album": "Melvin de Paris",
        "year": 2023
      },
      {
        "name": "Mini Star",
        "album": "Melvin de Paris",
        "year": 2023
      },
      {
        "name": "Tous les jours c'est samedi",
        "album": "Melvin de Paris",
        "year": 2023
      },
      {
        "name": "Downtown",
        "album": "Melvin de Paris",
        "year": 2023
      }
    ]
  },
  {
    "name": "404Billy",
    "color": "#D4537E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 50,
    "albums": [
      "100",
      "Process",
      "BLKKKK VAN GOGH 3 - EP",
      "BLKKKK VAN GOGH - EP",
      "BLKKKK VAN GOGH 2 - EP",
      "UNDERDOG. - EP",
      "Mr.AAA - Single",
      "Cassius - Single",
      "Title Shot - Single",
      "Enfant Éternel - Single"
    ],
    "tracks": [
      {
        "name": "Anti Élite",
        "album": "BLKKKK VAN GOGH - EP",
        "year": 2022
      },
      {
        "name": "J'fais le bilan calmement",
        "album": "BLKKKK VAN GOGH - EP",
        "year": 2022
      },
      {
        "name": "Scream",
        "album": "BLKKKK VAN GOGH - EP",
        "year": 2022
      },
      {
        "name": "Kidvillain",
        "album": "BLKKKK VAN GOGH - EP",
        "year": 2022
      },
      {
        "name": "Ammu Nation",
        "album": "100",
        "year": 2021
      },
      {
        "name": "Antipodes",
        "album": "100",
        "year": 2021
      },
      {
        "name": "Orphelin",
        "album": "100",
        "year": 2021
      },
      {
        "name": "PAO",
        "album": "100",
        "year": 2021
      },
      {
        "name": "C'est pas interdit",
        "album": "100",
        "year": 2021
      },
      {
        "name": "De temps en temps",
        "album": "100",
        "year": 2021
      },
      {
        "name": "Mauvais",
        "album": "100",
        "year": 2021
      },
      {
        "name": "Encore",
        "album": "100",
        "year": 2021
      },
      {
        "name": "404Savage",
        "album": "100",
        "year": 2021
      },
      {
        "name": "Cadenas",
        "album": "100",
        "year": 2021
      },
      {
        "name": "Siège passager",
        "album": "100",
        "year": 2021
      },
      {
        "name": "Même drapeau",
        "album": "100",
        "year": 2021
      },
      {
        "name": "Silence",
        "album": "100",
        "year": 2021
      },
      {
        "name": "Big Bro",
        "album": "BLKKKK VAN GOGH 2 - EP",
        "year": 2023
      },
      {
        "name": "Flop!",
        "album": "BLKKKK VAN GOGH 2 - EP",
        "year": 2023
      },
      {
        "name": "Strictement Business",
        "album": "BLKKKK VAN GOGH 2 - EP",
        "year": 2023
      },
      {
        "name": "6 Pierres",
        "album": "BLKKKK VAN GOGH 2 - EP",
        "year": 2023
      },
      {
        "name": "Cassius",
        "album": "Cassius - Single",
        "year": 2023
      },
      {
        "name": "Title Shot",
        "album": "Title Shot - Single",
        "year": 2023
      },
      {
        "name": "Rageux",
        "album": "Process",
        "year": 2019
      },
      {
        "name": "Vécu",
        "album": "Process",
        "year": 2019
      },
      {
        "name": "Rouler",
        "album": "Process",
        "year": 2019
      },
      {
        "name": "Espèce",
        "album": "Process",
        "year": 2019
      },
      {
        "name": "404 Freestyle (feat. Blaz Pit)",
        "album": "Process",
        "year": 2019
      },
      {
        "name": "Preuve",
        "album": "Process",
        "year": 2019
      },
      {
        "name": "Jour de guerre",
        "album": "Process",
        "year": 2019
      },
      {
        "name": "Célèbre",
        "album": "Process",
        "year": 2019
      },
      {
        "name": "Réel",
        "album": "Process",
        "year": 2019
      },
      {
        "name": "Sombre fan (Bonus)",
        "album": "Process",
        "year": 2019
      },
      {
        "name": "Enfant Éternel",
        "album": "Enfant Éternel - Single",
        "year": 2023
      },
      {
        "name": "Sociologue & Sociopathe",
        "album": "Sociologue & Sociopathe - Single",
        "year": 2023
      },
      {
        "name": "Mouton Noir",
        "album": "Mouton Noir - Single",
        "year": 2022
      },
      {
        "name": "BOKANOVSKY.",
        "album": "UNDERDOG. - EP",
        "year": 2026
      },
      {
        "name": "SINNERS.",
        "album": "UNDERDOG. - EP",
        "year": 2026
      },
      {
        "name": "POOKIE LOC.",
        "album": "UNDERDOG. - EP",
        "year": 2026
      },
      {
        "name": "TOLKIEN.",
        "album": "UNDERDOG. - EP",
        "year": 2026
      },
      {
        "name": "authenticité.",
        "album": "Mr.AAA - Single",
        "year": 2023
      },
      {
        "name": "créativité.",
        "album": "Mr.AAA - Single",
        "year": 2023
      },
      {
        "name": "rareté.",
        "album": "Mr.AAA - Single",
        "year": 2023
      },
      {
        "name": "Rutt's",
        "album": "BLKKKK VAN GOGH 3 - EP",
        "year": 2023
      },
      {
        "name": "Amin Dada",
        "album": "BLKKKK VAN GOGH 3 - EP",
        "year": 2023
      },
      {
        "name": "Bumpy",
        "album": "BLKKKK VAN GOGH 3 - EP",
        "year": 2023
      },
      {
        "name": "Gengis Khan",
        "album": "BLKKKK VAN GOGH 3 - EP",
        "year": 2023
      },
      {
        "name": "Le meilleur des mondes",
        "album": "BLKKKK VAN GOGH 3 - EP",
        "year": 2023
      },
      {
        "name": "La Plus Grande Des Illusions",
        "album": "La Plus Grande Des Illusions - Single",
        "year": 2023
      },
      {
        "name": "PINOCCHIO EPEMBIA",
        "album": "PINOCCHIO EPEMBIA - Single",
        "year": 2024
      }
    ]
  },
  {
    "name": "La Fève",
    "color": "#378ADD",
    "genre": "Hip-Hop/Rap",
    "trackCount": 49,
    "albums": [
      "ERRR",
      "24",
      "BIGLAF",
      "L'AFFAMÉ - Single",
      "LOYAL - Single"
    ],
    "tracks": [
      {
        "name": "BIGLAF",
        "album": "BIGLAF",
        "year": 2024
      },
      {
        "name": "ETC",
        "album": "BIGLAF",
        "year": 2024
      },
      {
        "name": "PASSPORT",
        "album": "BIGLAF",
        "year": 2024
      },
      {
        "name": "DANS MA TÊTE",
        "album": "BIGLAF",
        "year": 2024
      },
      {
        "name": "CLAIREMENT",
        "album": "BIGLAF",
        "year": 2024
      },
      {
        "name": "TARIK INTERLUDE",
        "album": "BIGLAF",
        "year": 2024
      },
      {
        "name": "SANS PLUG",
        "album": "BIGLAF",
        "year": 2024
      },
      {
        "name": "PATIN",
        "album": "BIGLAF",
        "year": 2024
      },
      {
        "name": "BALENCIAGA",
        "album": "BIGLAF",
        "year": 2024
      },
      {
        "name": "RIEN D'ORIGINAL",
        "album": "BIGLAF",
        "year": 2024
      },
      {
        "name": "G-CODE",
        "album": "BIGLAF",
        "year": 2024
      },
      {
        "name": "25",
        "album": "BIGLAF",
        "year": 2024
      },
      {
        "name": "DISQUE D'OR",
        "album": "BIGLAF",
        "year": 2024
      },
      {
        "name": "VOIR AILLEURS (feat. Zamdane)",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "VOITURE SPORTIVE",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "ZOMBIE",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "KANYE WEST",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "CASTRO (feat. $ouley)",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "LONERRR",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "L'APPEL",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "ZAZA",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "BOXE INTERLUDE",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "VVS (feat. S.Téban)",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "MAUVAIS PAYEUR",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "CRENSHAW",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "RAT INTERLUDE",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "OTW",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "SAOULÉ",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "NO HOOK",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "LYELE OUTRO",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "BELEK",
        "album": "ERRR",
        "year": 2021
      },
      {
        "name": "L'AFFAMÉ",
        "album": "L'AFFAMÉ - Single",
        "year": 2020
      },
      {
        "name": "LOYAL",
        "album": "LOYAL - Single",
        "year": 2023
      },
      {
        "name": "ZAY INTRO",
        "album": "24",
        "year": 2023
      },
      {
        "name": "7W",
        "album": "24",
        "year": 2023
      },
      {
        "name": "ZAZA PART. 2",
        "album": "24",
        "year": 2023
      },
      {
        "name": "RIP KEED",
        "album": "24",
        "year": 2023
      },
      {
        "name": "24",
        "album": "24",
        "year": 2023
      },
      {
        "name": "NOSTALGIE INTERLUDE",
        "album": "24",
        "year": 2023
      },
      {
        "name": "MA CHIENNE DE TRAPLIFE",
        "album": "24",
        "year": 2023
      },
      {
        "name": "HOMESTUDIO",
        "album": "24",
        "year": 2023
      },
      {
        "name": "SUITE",
        "album": "24",
        "year": 2023
      },
      {
        "name": "LOYAL",
        "album": "24",
        "year": 2023
      },
      {
        "name": "NAVRÉ",
        "album": "24",
        "year": 2023
      },
      {
        "name": "OUVRE LA PORTE!",
        "album": "24",
        "year": 2023
      },
      {
        "name": "DJ",
        "album": "24",
        "year": 2023
      },
      {
        "name": "OUTRO",
        "album": "24",
        "year": 2023
      },
      {
        "name": "SHAWTY (BONUS)",
        "album": "24",
        "year": 2023
      },
      {
        "name": "SAMESHIT (BONUS)",
        "album": "24",
        "year": 2023
      }
    ]
  },
  {
    "name": "Freeze Corleone",
    "color": "#639922",
    "genre": "Hip-Hop/Rap",
    "trackCount": 48,
    "albums": [
      "LMF",
      "ADC",
      "Projet Blue Beam",
      "Desiigner - A COLORS SHOW - Single",
      "Téléphone - Single",
      "Freeze Raël (Video Edit) [Video Edit] - Single",
      "Règne sur le monde - Single",
      "Gaucho - Single",
      "F.D.T"
    ],
    "tracks": [
      {
        "name": "Intro",
        "album": "Projet Blue Beam",
        "year": 2018
      },
      {
        "name": "Jeremy Lin",
        "album": "Projet Blue Beam",
        "year": 2018
      },
      {
        "name": "3 Planètes",
        "album": "Projet Blue Beam",
        "year": 2018
      },
      {
        "name": "Lester",
        "album": "Projet Blue Beam",
        "year": 2018
      },
      {
        "name": "LRH",
        "album": "Projet Blue Beam",
        "year": 2018
      },
      {
        "name": "Fentanyl",
        "album": "Projet Blue Beam",
        "year": 2018
      },
      {
        "name": "S/O Congo Part.2",
        "album": "Projet Blue Beam",
        "year": 2018
      },
      {
        "name": "Fredo Santana",
        "album": "Projet Blue Beam",
        "year": 2018
      },
      {
        "name": "Baton rouge",
        "album": "Projet Blue Beam",
        "year": 2018
      },
      {
        "name": "Sacrifice de Masse (feat. Osirus Jack)",
        "album": "Projet Blue Beam",
        "year": 2018
      },
      {
        "name": "Donquixote Doflamingo",
        "album": "Projet Blue Beam",
        "year": 2018
      },
      {
        "name": "Desiigner - A COLORS SHOW",
        "album": "Desiigner - A COLORS SHOW - Single",
        "year": 2020
      },
      {
        "name": "Desiigner",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "Moncler (feat. La F)",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "Freeze Raël",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "R.I.P. Pop Smoke",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "Logo Audi (feat. Despo Rutti)",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "Big Pharma",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "Pas de refrain (feat. Kaki Santana)",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "Chen Laden",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "Stretch 4",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "Tarkov",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "PDM (feat. Alpha 5.20 & Shone)",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "Rap catéchisme (feat. Alpha Wann)",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "Numérologie (feat. Stavo)",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "Dans les buissons (feat. Le Roi Heenok & Osirus Jack)",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "L'art de la guerre (feat. Black Jack OBS)",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "Hors ligne",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "Téléphone",
        "album": "Téléphone - Single",
        "year": 2021
      },
      {
        "name": "Freeze Raël (Video Edit)",
        "album": "Freeze Raël (Video Edit) [Video Edit] - Single",
        "year": 2021
      },
      {
        "name": "Règne sur le monde",
        "album": "Règne sur le monde - Single",
        "year": 2021
      },
      {
        "name": "Gaucho",
        "album": "Gaucho - Single",
        "year": 2016
      },
      {
        "name": "Madara",
        "album": "F.D.T",
        "year": 2016
      },
      {
        "name": "Shavkat",
        "album": "ADC",
        "year": 2023
      },
      {
        "name": "Amérique du sud",
        "album": "ADC",
        "year": 2023
      },
      {
        "name": "MW2",
        "album": "ADC",
        "year": 2023
      },
      {
        "name": "Isshin Ashina",
        "album": "ADC",
        "year": 2023
      },
      {
        "name": "Shavkat",
        "album": "ADC",
        "year": 2023
      },
      {
        "name": "Amérique du sud",
        "album": "ADC",
        "year": 2023
      },
      {
        "name": "Ancelotti",
        "album": "ADC",
        "year": 2023
      },
      {
        "name": "Tse Chi Lop",
        "album": "ADC",
        "year": 2023
      },
      {
        "name": "Kpop",
        "album": "ADC",
        "year": 2023
      },
      {
        "name": "L'homme méthode",
        "album": "ADC",
        "year": 2023
      },
      {
        "name": "Bill Clinton",
        "album": "ADC",
        "year": 2023
      },
      {
        "name": "Voldemort",
        "album": "ADC",
        "year": 2023
      },
      {
        "name": "Argent noir part. 3",
        "album": "ADC",
        "year": 2023
      },
      {
        "name": "Jour de plus",
        "album": "ADC",
        "year": 2023
      },
      {
        "name": "Lamborghini bénie",
        "album": "ADC",
        "year": 2023
      }
    ]
  },
  {
    "name": "Kaaris",
    "color": "#993556",
    "genre": "Hip-Hop/Rap",
    "trackCount": 48,
    "albums": [
      "Or Noir Part 2 (Deluxe)",
      "Or noir",
      "Goulag - Single",
      "TONNANO - Single"
    ],
    "tracks": [
      {
        "name": "Goulag",
        "album": "Goulag - Single",
        "year": 2020
      },
      {
        "name": "2 Et demi",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "Pas de remède",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "Pablito",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2014
      },
      {
        "name": "Je bibi",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "Killé",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2014
      },
      {
        "name": "Paradis ou enfer",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "63",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "Intro",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2014
      },
      {
        "name": "Ciroc",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "Bouchon de Liège",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "Plus rien",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "Binks",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "Zoo",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "S.E.V.R.A.N",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2014
      },
      {
        "name": "Dès le départ",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "Tu me connais",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "Or noir",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "A l'heure",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2014
      },
      {
        "name": "Sombre",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2014
      },
      {
        "name": "Chargé",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2014
      },
      {
        "name": "Juste",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2014
      },
      {
        "name": "L.E.F (feat. Booba)",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "Bizon",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "MBM",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "Bébé",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "Je remplis l'sac",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2014
      },
      {
        "name": "A la barrière",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2013
      },
      {
        "name": "Comment je fais",
        "album": "Or Noir Part 2 (Deluxe)",
        "year": 2014
      },
      {
        "name": "Bébé",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "Plus rien",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "Bizon",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "L.E.F (feat. Booba)",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "Or noir",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "Tu me connais",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "Dès le départ",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "Pas de remède",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "2 et demi",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "63",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "À la barrière",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "Je bibi",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "Bouchon de liège",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "Paradis ou enfer",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "Zoo",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "Ciroc",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "Mbm",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "Binks",
        "album": "Or noir",
        "year": 2013
      },
      {
        "name": "TONNANO",
        "album": "TONNANO - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "Phil Collins",
    "color": "#0F6E56",
    "genre": "Pop",
    "trackCount": 48,
    "albums": [
      "No Jacket Required (Deluxe Edition) [Remastered]",
      "Face Value (Deluxe Edition)"
    ],
    "tracks": [
      {
        "name": "Sussudio (2016 Remastered)",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 1985
      },
      {
        "name": "Only You Know and I Know (2016 Remastered)",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 1985
      },
      {
        "name": "Long Long Way to Go (2016 Remastered)",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 1985
      },
      {
        "name": "I Don't Wanna Know (2016 Remastered)",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 1985
      },
      {
        "name": "One More Night (2016 Remastered)",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 1985
      },
      {
        "name": "Don't Lose My Number (2016 Remastered)",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 1985
      },
      {
        "name": "Who Said I Would (2016 Remastered)",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 1985
      },
      {
        "name": "Doesn't Anybody Stay Together Anymore (2016 Remastered)",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 1985
      },
      {
        "name": "Inside Out (2016 Remastered)",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 1985
      },
      {
        "name": "Take Me Home (2016 Remastered)",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 1985
      },
      {
        "name": "We Said Hello Goodbye (2016 Remastered)",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 2016
      },
      {
        "name": "Sussudio (Live) [2016 Remastered]",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 2016
      },
      {
        "name": "Don't Lose My Number (Live) [2016 Remastered]",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 2016
      },
      {
        "name": "Who Said I Would (Live) [2016 Remastered]",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 2016
      },
      {
        "name": "Long Long Way to Go (Live) [2016 Remastered]",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 2016
      },
      {
        "name": "Only You Know and I Know (Live) [2016 Remastered]",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 2016
      },
      {
        "name": "Easy Lover (Live) [2016 Remastered]",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 2016
      },
      {
        "name": "Inside Out (Live) [2016 Remastered]",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 2016
      },
      {
        "name": "Doesn't Anybody Stay Together Anymore (Live) [2016 Remastered]",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 2016
      },
      {
        "name": "One More Night (Live) [2016 Remastered]",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 2016
      },
      {
        "name": "Take Me Home (Live) [2016 Remastered]",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 2016
      },
      {
        "name": "Only You Know and I Know (Demo) [2016 Remastered]",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 2016
      },
      {
        "name": "One More Night (Demo) [2016 Remastered]",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 2016
      },
      {
        "name": "Take Me Home (Demo) [2016 Remastered]",
        "album": "No Jacket Required (Deluxe Edition) [Remastered]",
        "year": 2016
      },
      {
        "name": "In the Air Tonight",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "This Must Be Love",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "Behind the Lines",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "The Roof Is Leaking",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "Droned",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "Hand In Hand",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "I Missed Again",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "You Know What I Mean",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "Thunder and Lightning",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "I'm Not Moving",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "If Leaving Me Is Easy",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "Tomorrow Never Knows",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "Misunderstanding (Live)",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "If Leaving Me Is Easy (Live)",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "In the Air Tonight (Live)",
        "album": "Face Value (Deluxe Edition)",
        "year": 2016
      },
      {
        "name": "Behind the Lines (Live)",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "The Roof Is Leaking (Demo)",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "Hand In Hand (Live)",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "I Missed Again (Live)",
        "album": "Face Value (Deluxe Edition)",
        "year": 2016
      },
      {
        "name": "...And So to F (Live)",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "This Must Be Love (Demo)",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "Please Don't Ask (Demo)",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "Misunderstanding (Demo)",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      },
      {
        "name": "Against All Odds (Demo)",
        "album": "Face Value (Deluxe Edition)",
        "year": 1981
      }
    ]
  },
  {
    "name": "-M-",
    "color": "#BA7517",
    "genre": "French Pop",
    "trackCount": 48,
    "albums": [
      "Qui de nous deux (Edition 20ème anniversaire)",
      "Je dis aime",
      "îl",
      "Le tour de M"
    ],
    "tracks": [
      {
        "name": "Mon ego",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "La bonne étoile",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "Sous ta peau",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "À tes souhaits",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "Qui de nous deux",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "Ma mélodie",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "Quand je vais chez elle",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "La corde sensible",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "Je me démasque",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "C'est pas ta faute",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "Gimmick",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "Le radeau",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "Psyko Bug",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "Peau de fleur",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "Ton écho",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "Ma mélodie (Boombass Remix)",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "La bonne étoile (Version acoustique)",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "La bonne étoile (Duo dub) [feat. Ariane Moffat]",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "À tes souhaits (Live au Club de La Coopérative de Mai, 12 juin 2004)",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "Quand je vais chez elle (DJ Shalom Remix)",
        "album": "Qui de nous deux (Edition 20ème anniversaire)",
        "year": 2003
      },
      {
        "name": "Elle",
        "album": "îl",
        "year": 2012
      },
      {
        "name": "Le film",
        "album": "îl",
        "year": 2012
      },
      {
        "name": "Mojo",
        "album": "îl",
        "year": 2012
      },
      {
        "name": "Laisse aller",
        "album": "îl",
        "year": 2012
      },
      {
        "name": "Baïa",
        "album": "îl",
        "year": 2012
      },
      {
        "name": "Faites-moi souffrir",
        "album": "îl",
        "year": 2012
      },
      {
        "name": "Machine",
        "album": "îl",
        "year": 2012
      },
      {
        "name": "La vie tue",
        "album": "îl",
        "year": 2012
      },
      {
        "name": "La grosse bombe",
        "album": "îl",
        "year": 2012
      },
      {
        "name": "La maison de Saraï",
        "album": "îl",
        "year": 2012
      },
      {
        "name": "Océan",
        "album": "îl",
        "year": 2012
      },
      {
        "name": "Oualé",
        "album": "îl",
        "year": 2012
      },
      {
        "name": "Monde virtuel",
        "album": "Je dis aime",
        "year": 1999
      },
      {
        "name": "Je dis aime",
        "album": "Je dis aime",
        "year": 1999
      },
      {
        "name": "Onde sensuelle",
        "album": "Je dis aime",
        "year": 1999
      },
      {
        "name": "À celle qui dure",
        "album": "Je dis aime",
        "year": 1999
      },
      {
        "name": "Faut oublier",
        "album": "Je dis aime",
        "year": 1999
      },
      {
        "name": "Le Festival de connes",
        "album": "Je dis aime",
        "year": 1999
      },
      {
        "name": "Le Mec hamac",
        "album": "Je dis aime",
        "year": 1999
      },
      {
        "name": "Close to Me",
        "album": "Je dis aime",
        "year": 1999
      },
      {
        "name": "Émilie 1000 Volts",
        "album": "Je dis aime",
        "year": 1999
      },
      {
        "name": "Qui est le plus fragile",
        "album": "Je dis aime",
        "year": 1999
      },
      {
        "name": "Le Complexe du corn flakes",
        "album": "Je dis aime",
        "year": 1999
      },
      {
        "name": "Au lieu du crime",
        "album": "Je dis aime",
        "year": 1999
      },
      {
        "name": "Bonoboo",
        "album": "Je dis aime",
        "year": 1999
      },
      {
        "name": "Le Commun des motels",
        "album": "Je dis aime",
        "year": 1999
      },
      {
        "name": "Mama Sam",
        "album": "Je dis aime",
        "year": 1999
      },
      {
        "name": "Au suivant (Live)",
        "album": "Le tour de M",
        "year": 2003
      }
    ]
  },
  {
    "name": "Luidji",
    "color": "#534AB7",
    "genre": "Hip-Hop/Rap",
    "trackCount": 47,
    "albums": [
      "Tristesse Business : Saison 1",
      "Saison 00",
      "Mécanique des fluides - EP",
      "Pour deux âmes solitaires (Part.1) - Single",
      "Foufoune Palace - Single",
      "Boscolo Exedra - EP",
      "Marie Jeanne - Single",
      "Pour deux âmes solitaires (Part.2) - Single",
      "Dernier souffle - Single",
      "Galope S****e - Single"
    ],
    "tracks": [
      {
        "name": "Pour deux âmes solitaires (Part.1)",
        "album": "Pour deux âmes solitaires (Part.1) - Single",
        "year": 2017
      },
      {
        "name": "Foufoune Palace",
        "album": "Foufoune Palace - Single",
        "year": 2017
      },
      {
        "name": "Sirène",
        "album": "Boscolo Exedra - EP",
        "year": 2020
      },
      {
        "name": "Marie Jeanne",
        "album": "Marie Jeanne - Single",
        "year": 2017
      },
      {
        "name": "Pour deux âmes solitaires (Part.2)",
        "album": "Pour deux âmes solitaires (Part.2) - Single",
        "year": 2017
      },
      {
        "name": "ALEXIS",
        "album": "Saison 00",
        "year": 2023
      },
      {
        "name": "Télefoot",
        "album": "Saison 00",
        "year": 2023
      },
      {
        "name": "Joueur 1 (feat. Tuerie)",
        "album": "Saison 00",
        "year": 2023
      },
      {
        "name": "AYIDA",
        "album": "Saison 00",
        "year": 2023
      },
      {
        "name": "Sérénade",
        "album": "Saison 00",
        "year": 2023
      },
      {
        "name": "Reste en Vie",
        "album": "Saison 00",
        "year": 2023
      },
      {
        "name": "Les Aéroports et les Gares (feat. Astrønne)",
        "album": "Saison 00",
        "year": 2023
      },
      {
        "name": "Cabine",
        "album": "Saison 00",
        "year": 2023
      },
      {
        "name": "Bahia",
        "album": "Saison 00",
        "year": 2023
      },
      {
        "name": "DAMBALLAH",
        "album": "Saison 00",
        "year": 2023
      },
      {
        "name": "Miskine",
        "album": "Saison 00",
        "year": 2023
      },
      {
        "name": "Dr Komprann",
        "album": "Saison 00",
        "year": 2023
      },
      {
        "name": "Monde (feat. Ryan Koffi)",
        "album": "Saison 00",
        "year": 2023
      },
      {
        "name": "igné",
        "album": "Saison 00",
        "year": 2023
      },
      {
        "name": "Parisien",
        "album": "Mécanique des fluides - EP",
        "year": 2015
      },
      {
        "name": "Juicy",
        "album": "Mécanique des fluides - EP",
        "year": 2015
      },
      {
        "name": "Idiot",
        "album": "Mécanique des fluides - EP",
        "year": 2015
      },
      {
        "name": "Wavy",
        "album": "Mécanique des fluides - EP",
        "year": 2015
      },
      {
        "name": "Bouteille",
        "album": "Mécanique des fluides - EP",
        "year": 2015
      },
      {
        "name": "Mécanique des fluides",
        "album": "Mécanique des fluides - EP",
        "year": 2015
      },
      {
        "name": "Voyou",
        "album": "Mécanique des fluides - EP",
        "year": 2015
      },
      {
        "name": "Dernier souffle",
        "album": "Dernier souffle - Single",
        "year": 2017
      },
      {
        "name": "Galope S****e",
        "album": "Galope S****e - Single",
        "year": 2017
      },
      {
        "name": "Système",
        "album": "Tristesse Business : Saison 1",
        "year": 2019
      },
      {
        "name": "Agoué",
        "album": "Tristesse Business : Saison 1",
        "year": 2019
      },
      {
        "name": "7h59",
        "album": "7h59 - Single",
        "year": 2017
      },
      {
        "name": "Reste en Soif",
        "album": "Reste en Soif - Single",
        "year": 2017
      },
      {
        "name": "Gisèle - Part 4 (Piano Session)",
        "album": "Tristesse Business : Saison 1",
        "year": 2019
      },
      {
        "name": "Plus haut",
        "album": "Tristesse Business : Saison 1",
        "year": 2019
      },
      {
        "name": "Christian Dior",
        "album": "Tristesse Business : Saison 1",
        "year": 2019
      },
      {
        "name": "Vent d'hiver",
        "album": "Tristesse Business : Saison 1",
        "year": 2019
      },
      {
        "name": "Le remède",
        "album": "Tristesse Business : Saison 1",
        "year": 2019
      },
      {
        "name": "Gisèle - Part 4",
        "album": "Tristesse Business : Saison 1",
        "year": 2019
      },
      {
        "name": "Nazaré",
        "album": "Tristesse Business : Saison 1",
        "year": 2019
      },
      {
        "name": "Néons rouges / Belles chansons",
        "album": "Tristesse Business : Saison 1",
        "year": 2018
      },
      {
        "name": "Femme flic",
        "album": "Tristesse Business : Saison 1",
        "year": 2019
      },
      {
        "name": "Veuve Clicquot",
        "album": "Tristesse Business : Saison 1",
        "year": 2019
      },
      {
        "name": "3 ans",
        "album": "Tristesse Business : Saison 1",
        "year": 2019
      },
      {
        "name": "Tu le mérites",
        "album": "Tristesse Business : Saison 1",
        "year": 2019
      },
      {
        "name": "Basquiat",
        "album": "Tristesse Business : Saison 1",
        "year": 2019
      },
      {
        "name": "Mauvais réflexe",
        "album": "Tristesse Business : Saison 1",
        "year": 2018
      },
      {
        "name": "Les gens qui s'aiment",
        "album": "Tristesse Business : Saison 1",
        "year": 2019
      }
    ]
  },
  {
    "name": "J9ueve",
    "color": "#993C1D",
    "genre": "Rap",
    "trackCount": 46,
    "albums": [
      "HARMONY",
      "LE BIJOU LE PLUS BRILLANT",
      "Arc-en-ciel",
      "Le Neuf - EP",
      "Illusions",
      "Distanciel - Single",
      "JE NE PLEURE MEME PLUS (feat. Leto) - Single",
      "Tous Mes États (feat. La Fève) - Single",
      "Connecté",
      "Melody - Single"
    ],
    "tracks": [
      {
        "name": "Distanciel",
        "album": "Distanciel - Single",
        "year": 2021
      },
      {
        "name": "Top",
        "album": "Le Neuf - EP",
        "year": 2020
      },
      {
        "name": "2Step",
        "album": "Arc-en-ciel",
        "year": 2021
      },
      {
        "name": "Chica (feat. Lafleyne)",
        "album": "Arc-en-ciel",
        "year": 2021
      },
      {
        "name": "Vital (feat. Regularboy)",
        "album": "Arc-en-ciel",
        "year": 2021
      },
      {
        "name": "Les 100 pas",
        "album": "Arc-en-ciel",
        "year": 2021
      },
      {
        "name": "Interlude",
        "album": "Arc-en-ciel",
        "year": 2021
      },
      {
        "name": "Pissenlit (feat. La Fève)",
        "album": "Arc-en-ciel",
        "year": 2021
      },
      {
        "name": "In & Out",
        "album": "Arc-en-ciel",
        "year": 2021
      },
      {
        "name": "Distanciel",
        "album": "Arc-en-ciel",
        "year": 2021
      },
      {
        "name": "Plus rien à perdre",
        "album": "Arc-en-ciel",
        "year": 2021
      },
      {
        "name": "JE NE PLEURE MEME PLUS (feat. Leto)",
        "album": "JE NE PLEURE MEME PLUS (feat. Leto) - Single",
        "year": 2025
      },
      {
        "name": "N°14",
        "album": "HARMONY",
        "year": 2025
      },
      {
        "name": "EN FACE (feat. Keeqaid)",
        "album": "HARMONY",
        "year": 2025
      },
      {
        "name": "TRAGÉDIE",
        "album": "HARMONY",
        "year": 2025
      },
      {
        "name": "TANT DE NOUS",
        "album": "HARMONY",
        "year": 2025
      },
      {
        "name": "17 TEUDY",
        "album": "HARMONY",
        "year": 2024
      },
      {
        "name": "JE NE PLEURE MEME PLUS (feat. Leto)",
        "album": "HARMONY",
        "year": 2025
      },
      {
        "name": "RODEO",
        "album": "HARMONY",
        "year": 2025
      },
      {
        "name": "HOT SAUCE",
        "album": "HARMONY",
        "year": 2025
      },
      {
        "name": "#BG (feat. La Fève)",
        "album": "HARMONY",
        "year": 2025
      },
      {
        "name": "DRAMA",
        "album": "HARMONY",
        "year": 2025
      },
      {
        "name": "I <3 U (feat. Genezio)",
        "album": "HARMONY",
        "year": 2025
      },
      {
        "name": "2000TRAPBABY",
        "album": "HARMONY",
        "year": 2025
      },
      {
        "name": "DRINK N SEX (feat. Sonny Rave)",
        "album": "HARMONY",
        "year": 2025
      },
      {
        "name": "BOMBOM",
        "album": "HARMONY",
        "year": 2025
      },
      {
        "name": "DAY OFF",
        "album": "HARMONY",
        "year": 2025
      },
      {
        "name": "Tous Mes États (feat. La Fève)",
        "album": "Tous Mes États (feat. La Fève) - Single",
        "year": 2021
      },
      {
        "name": "Vague",
        "album": "Connecté",
        "year": 2021
      },
      {
        "name": "Melody",
        "album": "Melody - Single",
        "year": 2022
      },
      {
        "name": "Margiela",
        "album": "Le Neuf - EP",
        "year": 2020
      },
      {
        "name": "Lemon",
        "album": "Illusions",
        "year": 2022
      },
      {
        "name": "Melody",
        "album": "Illusions",
        "year": 2022
      },
      {
        "name": "INTRO",
        "album": "LE BIJOU LE PLUS BRILLANT",
        "year": 2023
      },
      {
        "name": "DIAMANT",
        "album": "LE BIJOU LE PLUS BRILLANT",
        "year": 2023
      },
      {
        "name": "LES SERPENTS (feat. Rounhaa)",
        "album": "LE BIJOU LE PLUS BRILLANT",
        "year": 2023
      },
      {
        "name": "SEX W/ ME",
        "album": "LE BIJOU LE PLUS BRILLANT",
        "year": 2023
      },
      {
        "name": "LE MONDE ETAIT A NOUS",
        "album": "LE BIJOU LE PLUS BRILLANT",
        "year": 2023
      },
      {
        "name": "SANS FAIRE EXPRÈS",
        "album": "LE BIJOU LE PLUS BRILLANT",
        "year": 2023
      },
      {
        "name": "RR INTERLUDE",
        "album": "LE BIJOU LE PLUS BRILLANT",
        "year": 2023
      },
      {
        "name": "LE BIJOU LE PLUS BRILLANT",
        "album": "LE BIJOU LE PLUS BRILLANT",
        "year": 2023
      },
      {
        "name": "LOUPER LE COCHE",
        "album": "LE BIJOU LE PLUS BRILLANT",
        "year": 2023
      },
      {
        "name": "DESIRE (feat. Ashbeck)",
        "album": "LE BIJOU LE PLUS BRILLANT",
        "year": 2023
      },
      {
        "name": "BBY LUV",
        "album": "LE BIJOU LE PLUS BRILLANT",
        "year": 2023
      },
      {
        "name": "LA MISSION",
        "album": "LE BIJOU LE PLUS BRILLANT",
        "year": 2023
      },
      {
        "name": "Sans toi (feat. Zamdane)",
        "album": "Sans toi (feat. Zamdane) - Single",
        "year": 2022
      }
    ]
  },
  {
    "name": "Népal",
    "color": "#085041",
    "genre": "Hip-Hop/Rap",
    "trackCount": 45,
    "albums": [
      "2016 - 2018",
      "Adios Bahamas",
      "445e Nuit",
      "KKSHISENSE8",
      "Cheddar - Single",
      "Benji - Single",
      "Même vie - Single",
      "Coach K - Single",
      "Règlement Space #3 - Single"
    ],
    "tracks": [
      {
        "name": "Niveau 1",
        "album": "445e Nuit",
        "year": 2017
      },
      {
        "name": "Maladavexa",
        "album": "445e Nuit",
        "year": 2017
      },
      {
        "name": "Love64 (Interlude)",
        "album": "445e Nuit",
        "year": 2017
      },
      {
        "name": "Deadpornstars (feat. Doums)",
        "album": "445e Nuit",
        "year": 2017
      },
      {
        "name": "Jugements (feat. 3010)",
        "album": "445e Nuit",
        "year": 2017
      },
      {
        "name": "Insomnie",
        "album": "445e Nuit",
        "year": 2017
      },
      {
        "name": "Kodak White",
        "album": "445e Nuit",
        "year": 2017
      },
      {
        "name": "Kamehouse",
        "album": "445e Nuit",
        "year": 2017
      },
      {
        "name": "Omotesando",
        "album": "KKSHISENSE8",
        "year": 2018
      },
      {
        "name": "Evisu",
        "album": "KKSHISENSE8",
        "year": 2018
      },
      {
        "name": "Babylone",
        "album": "KKSHISENSE8",
        "year": 2018
      },
      {
        "name": "150CC (feat. Gracy Hopkins)",
        "album": "KKSHISENSE8",
        "year": 2018
      },
      {
        "name": "Teczer",
        "album": "KKSHISENSE8",
        "year": 2018
      },
      {
        "name": "Cloud 8",
        "album": "KKSHISENSE8",
        "year": 2018
      },
      {
        "name": "Rien d'spécial",
        "album": "2016 - 2018",
        "year": 2016
      },
      {
        "name": "Opening",
        "album": "Adios Bahamas",
        "year": 2020
      },
      {
        "name": "Sundance",
        "album": "Adios Bahamas",
        "year": 2020
      },
      {
        "name": "Sans voir (feat. 3010)",
        "album": "Adios Bahamas",
        "year": 2020
      },
      {
        "name": "Là-bas",
        "album": "Adios Bahamas",
        "year": 2019
      },
      {
        "name": "Ennemis, Pt. 2 (feat. Di-Meh)",
        "album": "Adios Bahamas",
        "year": 2020
      },
      {
        "name": "Daruma",
        "album": "Adios Bahamas",
        "year": 2019
      },
      {
        "name": "Crossfader",
        "album": "Adios Bahamas",
        "year": 2020
      },
      {
        "name": "En face (feat. Nekfeu)",
        "album": "Adios Bahamas",
        "year": 2020
      },
      {
        "name": "Trajectoire",
        "album": "Adios Bahamas",
        "year": 2020
      },
      {
        "name": "Millionaire (feat. Doums)",
        "album": "Adios Bahamas",
        "year": 2020
      },
      {
        "name": "Vibe (feat. Sheldon)",
        "album": "Adios Bahamas",
        "year": 2020
      },
      {
        "name": "Lemonade",
        "album": "Adios Bahamas",
        "year": 2020
      },
      {
        "name": "Cheddar",
        "album": "Cheddar - Single",
        "year": 2020
      },
      {
        "name": "Babylone",
        "album": "2016 - 2018",
        "year": 2018
      },
      {
        "name": "Suga Suga (feat. Doums)",
        "album": "2016 - 2018",
        "year": 2016
      },
      {
        "name": "444 nuits",
        "album": "2016 - 2018",
        "year": 2016
      },
      {
        "name": "Niveau 1",
        "album": "2016 - 2018",
        "year": 2017
      },
      {
        "name": "Malik al mawt",
        "album": "2016 - 2018",
        "year": 2016
      },
      {
        "name": "Overdab (feat. Fixpen Sill & Walter)",
        "album": "2016 - 2018",
        "year": 2016
      },
      {
        "name": "Deadpornstars (feat. Doums)",
        "album": "2016 - 2018",
        "year": 2017
      },
      {
        "name": "Skyclub",
        "album": "2016 - 2018",
        "year": 2019
      },
      {
        "name": "Jugements (feat. 3010)",
        "album": "2016 - 2018",
        "year": 2017
      },
      {
        "name": "Cloud 8",
        "album": "2016 - 2018",
        "year": 2018
      },
      {
        "name": "150CC (feat. Gracy Hopkins)",
        "album": "2016 - 2018",
        "year": 2018
      },
      {
        "name": "Emoji",
        "album": "2016 - 2018",
        "year": 2016
      },
      {
        "name": "Kodak White",
        "album": "2016 - 2018",
        "year": 2017
      },
      {
        "name": "Benji",
        "album": "Benji - Single",
        "year": 2020
      },
      {
        "name": "Même vie",
        "album": "Même vie - Single",
        "year": 2020
      },
      {
        "name": "Coach K",
        "album": "Coach K - Single",
        "year": 2020
      },
      {
        "name": "Règlement Space #3",
        "album": "Règlement Space #3 - Single",
        "year": 2018
      }
    ]
  },
  {
    "name": "Maes",
    "color": "#854F0B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 45,
    "albums": [
      "LA VIE CONTINUE (BONUS)",
      "OMERTA",
      "EN ATTENDANT LVC 2",
      "Les derniers salopards",
      "FC BEAUDOTTES - Single"
    ],
    "tracks": [
      {
        "name": "Blanche (feat. Booba)",
        "album": "Les derniers salopards",
        "year": 2020
      },
      {
        "name": "Distant (feat. Ninho)",
        "album": "Les derniers salopards",
        "year": 2020
      },
      {
        "name": "ALPHA",
        "album": "EN ATTENDANT LVC 2",
        "year": 2024
      },
      {
        "name": "MONAK",
        "album": "EN ATTENDANT LVC 2",
        "year": 2024
      },
      {
        "name": "PHOTO",
        "album": "EN ATTENDANT LVC 2",
        "year": 2024
      },
      {
        "name": "GALERIE",
        "album": "EN ATTENDANT LVC 2",
        "year": 2024
      },
      {
        "name": "LA GOMME",
        "album": "EN ATTENDANT LVC 2",
        "year": 2024
      },
      {
        "name": "LE FER ET LES DÉLITS",
        "album": "EN ATTENDANT LVC 2",
        "year": 2024
      },
      {
        "name": "OFFSET",
        "album": "EN ATTENDANT LVC 2",
        "year": 2024
      },
      {
        "name": "DJANGO",
        "album": "EN ATTENDANT LVC 2",
        "year": 2024
      },
      {
        "name": "ARSENAL",
        "album": "EN ATTENDANT LVC 2",
        "year": 2024
      },
      {
        "name": "CAMP DES LOGES",
        "album": "EN ATTENDANT LVC 2",
        "year": 2024
      },
      {
        "name": "Intro",
        "album": "OMERTA",
        "year": 2023
      },
      {
        "name": "Frank Lucas",
        "album": "OMERTA",
        "year": 2023
      },
      {
        "name": "Opaque",
        "album": "OMERTA",
        "year": 2023
      },
      {
        "name": "Galactic",
        "album": "OMERTA",
        "year": 2023
      },
      {
        "name": "Fetty Wap",
        "album": "OMERTA",
        "year": 2022
      },
      {
        "name": "Omerta",
        "album": "OMERTA",
        "year": 2023
      },
      {
        "name": "Quand T’es Là",
        "album": "OMERTA",
        "year": 2023
      },
      {
        "name": "Le Moine",
        "album": "OMERTA",
        "year": 2023
      },
      {
        "name": "Rif",
        "album": "OMERTA",
        "year": 2023
      },
      {
        "name": "Araï",
        "album": "OMERTA",
        "year": 2023
      },
      {
        "name": "Haut Et Bas",
        "album": "OMERTA",
        "year": 2023
      },
      {
        "name": "La Moto",
        "album": "OMERTA",
        "year": 2023
      },
      {
        "name": "La Honda",
        "album": "OMERTA",
        "year": 2023
      },
      {
        "name": "Manon",
        "album": "OMERTA",
        "year": 2023
      },
      {
        "name": "FC BEAUDOTTES",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "HIJAMA",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "SANS BOUSSOLE",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "RIVOLI",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "HERMÈS",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "MAGIE",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "INTERPOL",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "MARIO",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "4MOTION (feat. PLK)",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "VALHALLA",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "BALANCE",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "93",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "YEEZY",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "LUMIÈRE",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "SAMU",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "INSOMNIE",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "SEVRAN B",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      },
      {
        "name": "FC BEAUDOTTES",
        "album": "FC BEAUDOTTES - Single",
        "year": 2024
      },
      {
        "name": "MAGIE",
        "album": "LA VIE CONTINUE (BONUS)",
        "year": 2024
      }
    ]
  },
  {
    "name": "Khali",
    "color": "#72243E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 43,
    "albums": [
      "IL ME RESSEMBLE PAS NON PLUS",
      "LAÏLA",
      "23 -",
      "PLM DEATHROW - EP",
      "21 - - Single",
      "FREE - Single",
      "LE MONDE EST À TOI - Single"
    ],
    "tracks": [
      {
        "name": "FREE",
        "album": "FREE - Single",
        "year": 2024
      },
      {
        "name": "BIENVENUE",
        "album": "LAÏLA",
        "year": 2021
      },
      {
        "name": "SIRÈNES (feat. Chanceko)",
        "album": "LAÏLA",
        "year": 2021
      },
      {
        "name": "D&G",
        "album": "LAÏLA",
        "year": 2021
      },
      {
        "name": "COULEURS",
        "album": "LAÏLA",
        "year": 2021
      },
      {
        "name": "LA TOILE",
        "album": "LAÏLA",
        "year": 2021
      },
      {
        "name": "FRANCE",
        "album": "LAÏLA",
        "year": 2021
      },
      {
        "name": "TIRE (INTERLUDE)",
        "album": "LAÏLA",
        "year": 2021
      },
      {
        "name": "ME3ZA",
        "album": "LAÏLA",
        "year": 2021
      },
      {
        "name": "YEAH YEAH",
        "album": "LAÏLA",
        "year": 2021
      },
      {
        "name": "BONBON",
        "album": "LAÏLA",
        "year": 2021
      },
      {
        "name": "LAÏLA BAÏDA",
        "album": "LAÏLA",
        "year": 2021
      },
      {
        "name": "NO PHOTO",
        "album": "21 - - Single",
        "year": 2021
      },
      {
        "name": "PEzZZ",
        "album": "21 - - Single",
        "year": 2021
      },
      {
        "name": "PLM DEATHROW",
        "album": "PLM DEATHROW - EP",
        "year": 2024
      },
      {
        "name": "FOREVER",
        "album": "PLM DEATHROW - EP",
        "year": 2024
      },
      {
        "name": "KHALI IL SAIT",
        "album": "PLM DEATHROW - EP",
        "year": 2024
      },
      {
        "name": "FREE",
        "album": "PLM DEATHROW - EP",
        "year": 2024
      },
      {
        "name": "LE MONDE EST À TOI",
        "album": "LE MONDE EST À TOI - Single",
        "year": 2022
      },
      {
        "name": "JE M'EN MOQUE EFFECTIVEMENT",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "EN VRAI",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "808",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "JAMAIS COMME ILS VONT",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "LE MONDE EST À TOI",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "KOLAF INTERLUDE",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "LA FLÈCHE",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "ON T'A PROMIS QUOI?",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "NO PSY",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "PAS DE ZGA INTERLUDE",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "PEPELE",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "G LE SEUL",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "BLOODY PLM",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "ENTRE PALMER ET PARIS ZOO",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "UMBRELLA",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "JE FERAI DE MON MIEUX",
        "album": "IL ME RESSEMBLE PAS NON PLUS",
        "year": 2022
      },
      {
        "name": "LE TEMPS PASSE TU SAIS",
        "album": "23 -",
        "year": 2023
      },
      {
        "name": "PATEK",
        "album": "23 -",
        "year": 2023
      },
      {
        "name": "BOTTEGA",
        "album": "23 -",
        "year": 2023
      },
      {
        "name": "LONDON",
        "album": "23 -",
        "year": 2023
      },
      {
        "name": "TREMBLEMENT DE TERRE",
        "album": "23 -",
        "year": 2023
      },
      {
        "name": "OMG",
        "album": "23 -",
        "year": 2023
      },
      {
        "name": "RIEN NE VA ME SUFFIRE",
        "album": "23 -",
        "year": 2023
      },
      {
        "name": "SILENCE",
        "album": "23 -",
        "year": 2023
      }
    ]
  },
  {
    "name": "Souffrance",
    "color": "#5DCAA5",
    "genre": "Hip-Hop/Rap",
    "trackCount": 43,
    "albums": [
      "Tranche de vie",
      "Tour de magie",
      "Eau de source"
    ],
    "tracks": [
      {
        "name": "Intro",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Périphérique",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Étoiles filantes",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Van Damme",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Café",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Mauvaise nouvelles",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Meurtre",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Lossa",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "A.M.D",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "93ème Zone",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Danny Glover",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Bruce Wayne",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Jeanne d'Arc",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Simba",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Mathématiques",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Rap assassin brut",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Racialiste",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Bicraveur blues",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Dernier texte",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "Outro",
        "album": "Tranche de vie",
        "year": 2021
      },
      {
        "name": "J'ouvre le feu",
        "album": "Tour de magie",
        "year": 2022
      },
      {
        "name": "Tour de magie",
        "album": "Tour de magie",
        "year": 2022
      },
      {
        "name": "Singe savant",
        "album": "Tour de magie",
        "year": 2022
      },
      {
        "name": "Solide",
        "album": "Tour de magie",
        "year": 2022
      },
      {
        "name": "Playback",
        "album": "Tour de magie",
        "year": 2022
      },
      {
        "name": "Comme en 2009",
        "album": "Tour de magie",
        "year": 2022
      },
      {
        "name": "Rive",
        "album": "Tour de magie",
        "year": 2022
      },
      {
        "name": "Vendredi 17 juin 2005",
        "album": "Tour de magie",
        "year": 2022
      },
      {
        "name": "Hall 26",
        "album": "Tour de magie",
        "year": 2022
      },
      {
        "name": "Bipolaire",
        "album": "Tour de magie",
        "year": 2022
      },
      {
        "name": "Plan annulé",
        "album": "Tour de magie",
        "year": 2022
      },
      {
        "name": "Kill them",
        "album": "Tour de magie",
        "year": 2022
      },
      {
        "name": "Au milieu des ombres",
        "album": "Tour de magie",
        "year": 2022
      },
      {
        "name": "Eau de source",
        "album": "Eau de source",
        "year": 2023
      },
      {
        "name": "Authentique",
        "album": "Eau de source",
        "year": 2023
      },
      {
        "name": "Khalass",
        "album": "Eau de source",
        "year": 2023
      },
      {
        "name": "Score",
        "album": "Eau de source",
        "year": 2023
      },
      {
        "name": "Tempête",
        "album": "Eau de source",
        "year": 2023
      },
      {
        "name": "Be water (Interlude) [feat. Soul Intellect]",
        "album": "Eau de source",
        "year": 2023
      },
      {
        "name": "Louvre",
        "album": "Eau de source",
        "year": 2023
      },
      {
        "name": "Métro",
        "album": "Eau de source",
        "year": 2023
      },
      {
        "name": "Ciel gris kebab grill",
        "album": "Eau de source",
        "year": 2023
      },
      {
        "name": "Pendu",
        "album": "Eau de source",
        "year": 2023
      }
    ]
  },
  {
    "name": "2Pac",
    "color": "#F0997B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 42,
    "albums": [
      "All Eyez On Me",
      "Me Against the World"
    ],
    "tracks": [
      {
        "name": "Ambitionz Az A Ridah",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "All About U (feat. Yani Hadati, Snoop Dogg, Nate Dogg & Fatal)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Skandalouz (feat. Nate Dogg)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Got My Mind Made Up (feat. Daz Dillinger, Method Man, Redman & Kurupt)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "How Do U Want It (feat. K-Ci & JoJo)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "2 Of Amerikaz Most Wanted (feat. Snoop Dogg)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "No More Pain",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Heartz Of Men",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Life Goes On",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Only God Can Judge Me (feat. Rappin' 4-Tay)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Tradin' War Stories (feat. Storm, C-Bo, Outlawz & CPO)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "California Love (feat. Dr. Dre & Roger Troutman) [Remix]",
        "album": "All Eyez On Me",
        "year": 1995
      },
      {
        "name": "I Ain't Mad At Cha (feat. Danny Boy)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "What's Ya Phone # (feat. Danny Boy)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Can't C Me",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Shorty Wanna Be A Thug",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Holla At Me",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Wonda Why They Call U Bytch",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "When We Ride (feat. Outlaw Immortals)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Thug Passion (feat. Jewell, Storm & Outlawz)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Picture Me Rollin' (feat. Big Syke, CPO & Danny Boy)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Check Out Time",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Ratha Be Ya Nigga (feat. Richie Rich)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "All Eyez On Me (feat. Big Syke)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Run Tha Streetz (feat. Storm, Mutah & Michelle)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Ain't Hard 2 Find (feat. E-40, Richie Rich, B-Legit & C-Bo)",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Heaven Ain't Hard 2 Find",
        "album": "All Eyez On Me",
        "year": 1996
      },
      {
        "name": "Intro",
        "album": "Me Against the World",
        "year": 1995
      },
      {
        "name": "If I Die 2Nite",
        "album": "Me Against the World",
        "year": 1995
      },
      {
        "name": "Me Against the World (feat. Dramacydal)",
        "album": "Me Against the World",
        "year": 1995
      },
      {
        "name": "So Many Tears",
        "album": "Me Against the World",
        "year": 1995
      },
      {
        "name": "Temptations",
        "album": "Me Against the World",
        "year": 1995
      },
      {
        "name": "Young N****z",
        "album": "Me Against the World",
        "year": 1995
      },
      {
        "name": "Heavy In the Game (feat. Richie Rich)",
        "album": "Me Against the World",
        "year": 1995
      },
      {
        "name": "Lord Knows",
        "album": "Me Against the World",
        "year": 1995
      },
      {
        "name": "Dear Mama",
        "album": "Me Against the World",
        "year": 1995
      },
      {
        "name": "It Ain't Easy",
        "album": "Me Against the World",
        "year": 1995
      },
      {
        "name": "Can U Get Away",
        "album": "Me Against the World",
        "year": 1995
      },
      {
        "name": "Old School",
        "album": "Me Against the World",
        "year": 1995
      },
      {
        "name": "Fuck the World",
        "album": "Me Against the World",
        "year": 1995
      },
      {
        "name": "Death Around the Corner",
        "album": "Me Against the World",
        "year": 1995
      },
      {
        "name": "Outlaw (feat. Dramacydal)",
        "album": "Me Against the World",
        "year": 1995
      }
    ]
  },
  {
    "name": "Bad Bunny",
    "color": "#85B7EB",
    "genre": "Latin",
    "trackCount": 42,
    "albums": [
      "Un Verano Sin Ti",
      "nadie sabe lo que va a pasar mañana",
      "DeBÍ TiRAR MáS FOToS"
    ],
    "tracks": [
      {
        "name": "Moscow Mule",
        "album": "Un Verano Sin Ti",
        "year": 2022
      },
      {
        "name": "Después de la Playa",
        "album": "Un Verano Sin Ti",
        "year": 2022
      },
      {
        "name": "Tití Me Preguntó",
        "album": "Un Verano Sin Ti",
        "year": 2022
      },
      {
        "name": "Un Ratito",
        "album": "Un Verano Sin Ti",
        "year": 2022
      },
      {
        "name": "Yo No Soy Celoso",
        "album": "Un Verano Sin Ti",
        "year": 2022
      },
      {
        "name": "Neverita",
        "album": "Un Verano Sin Ti",
        "year": 2022
      },
      {
        "name": "Efecto",
        "album": "Un Verano Sin Ti",
        "year": 2022
      },
      {
        "name": "Aguacero",
        "album": "Un Verano Sin Ti",
        "year": 2022
      },
      {
        "name": "Enséñame a Bailar",
        "album": "Un Verano Sin Ti",
        "year": 2022
      },
      {
        "name": "Dos Mil 16",
        "album": "Un Verano Sin Ti",
        "year": 2022
      },
      {
        "name": "El Apagón",
        "album": "Un Verano Sin Ti",
        "year": 2022
      },
      {
        "name": "Un Coco",
        "album": "Un Verano Sin Ti",
        "year": 2022
      },
      {
        "name": "Me Fui de Vacaciones",
        "album": "Un Verano Sin Ti",
        "year": 2022
      },
      {
        "name": "Un Verano Sin Ti",
        "album": "Un Verano Sin Ti",
        "year": 2022
      },
      {
        "name": "Agosto",
        "album": "Un Verano Sin Ti",
        "year": 2022
      },
      {
        "name": "NUEVAYoL",
        "album": "DeBÍ TiRAR MáS FOToS",
        "year": 2025
      },
      {
        "name": "VOY A LLeVARTE PA PR",
        "album": "DeBÍ TiRAR MáS FOToS",
        "year": 2025
      },
      {
        "name": "BAILE INoLVIDABLE",
        "album": "DeBÍ TiRAR MáS FOToS",
        "year": 2025
      },
      {
        "name": "EL CLúB",
        "album": "DeBÍ TiRAR MáS FOToS",
        "year": 2024
      },
      {
        "name": "KETU TeCRÉ",
        "album": "DeBÍ TiRAR MáS FOToS",
        "year": 2025
      },
      {
        "name": "BOKeTE",
        "album": "DeBÍ TiRAR MáS FOToS",
        "year": 2025
      },
      {
        "name": "KLOuFRENS",
        "album": "DeBÍ TiRAR MáS FOToS",
        "year": 2025
      },
      {
        "name": "TURiSTA",
        "album": "DeBÍ TiRAR MáS FOToS",
        "year": 2025
      },
      {
        "name": "PIToRRO DE COCO",
        "album": "DeBÍ TiRAR MáS FOToS",
        "year": 2024
      },
      {
        "name": "LO QUE LE PASÓ A HAWAii",
        "album": "DeBÍ TiRAR MáS FOToS",
        "year": 2025
      },
      {
        "name": "EoO",
        "album": "DeBÍ TiRAR MáS FOToS",
        "year": 2025
      },
      {
        "name": "DtMF",
        "album": "DeBÍ TiRAR MáS FOToS",
        "year": 2025
      },
      {
        "name": "LA MuDANZA",
        "album": "DeBÍ TiRAR MáS FOToS",
        "year": 2025
      },
      {
        "name": "NADIE SABE",
        "album": "nadie sabe lo que va a pasar mañana",
        "year": 2023
      },
      {
        "name": "MONACO",
        "album": "nadie sabe lo que va a pasar mañana",
        "year": 2023
      },
      {
        "name": "MR. OCTOBER",
        "album": "nadie sabe lo que va a pasar mañana",
        "year": 2023
      },
      {
        "name": "CYBERTRUCK",
        "album": "nadie sabe lo que va a pasar mañana",
        "year": 2023
      },
      {
        "name": "VOU 787",
        "album": "nadie sabe lo que va a pasar mañana",
        "year": 2023
      },
      {
        "name": "GRACIAS POR NADA",
        "album": "nadie sabe lo que va a pasar mañana",
        "year": 2023
      },
      {
        "name": "BABY NUEVA",
        "album": "nadie sabe lo que va a pasar mañana",
        "year": 2023
      },
      {
        "name": "LOS PITS",
        "album": "nadie sabe lo que va a pasar mañana",
        "year": 2023
      },
      {
        "name": "VUELVE CANDY B",
        "album": "nadie sabe lo que va a pasar mañana",
        "year": 2023
      },
      {
        "name": "BATICANO",
        "album": "nadie sabe lo que va a pasar mañana",
        "year": 2023
      },
      {
        "name": "NO ME QUIERO CASAR",
        "album": "nadie sabe lo que va a pasar mañana",
        "year": 2023
      },
      {
        "name": "WHERE SHE GOES",
        "album": "nadie sabe lo que va a pasar mañana",
        "year": 2023
      },
      {
        "name": "EUROPA :)",
        "album": "nadie sabe lo que va a pasar mañana",
        "year": 2023
      },
      {
        "name": "UN PREVIEW",
        "album": "nadie sabe lo que va a pasar mañana",
        "year": 2023
      }
    ]
  },
  {
    "name": "Stromae",
    "color": "#97C459",
    "genre": "French Pop",
    "trackCount": 41,
    "albums": [
      "Multitude (Video Album)",
      "Racine carrée",
      "Cheese"
    ],
    "tracks": [
      {
        "name": "Alors on danse (Radio Edit)",
        "album": "Cheese",
        "year": 2009
      },
      {
        "name": "Tous les mêmes",
        "album": "Racine carrée",
        "year": 2013
      },
      {
        "name": "Papaoutai",
        "album": "Racine carrée",
        "year": 2013
      },
      {
        "name": "Formidable",
        "album": "Racine carrée",
        "year": 2013
      },
      {
        "name": "Ta fête",
        "album": "Racine carrée",
        "year": 2013
      },
      {
        "name": "Bâtard",
        "album": "Racine carrée",
        "year": 2013
      },
      {
        "name": "Ave Cesaria",
        "album": "Racine carrée",
        "year": 2014
      },
      {
        "name": "Moules frites",
        "album": "Racine carrée",
        "year": 2013
      },
      {
        "name": "Carmen",
        "album": "Racine carrée",
        "year": 2015
      },
      {
        "name": "Humain à l'eau",
        "album": "Racine carrée",
        "year": 2013
      },
      {
        "name": "Quand c'est ?",
        "album": "Racine carrée",
        "year": 2015
      },
      {
        "name": "Sommeil",
        "album": "Racine carrée",
        "year": 2013
      },
      {
        "name": "Merci",
        "album": "Racine carrée",
        "year": 2013
      },
      {
        "name": "AVF",
        "album": "Racine carrée",
        "year": 2013
      },
      {
        "name": "Papaoutai (feat. Angel Haze)",
        "album": "Racine carrée",
        "year": 2013
      },
      {
        "name": "Invaincu",
        "album": "Multitude (Video Album)",
        "year": 2022
      },
      {
        "name": "Santé",
        "album": "Multitude (Video Album)",
        "year": 2021
      },
      {
        "name": "La solassitude",
        "album": "Multitude (Video Album)",
        "year": 2022
      },
      {
        "name": "Fils de joie",
        "album": "Multitude (Video Album)",
        "year": 2022
      },
      {
        "name": "L’enfer",
        "album": "Multitude (Video Album)",
        "year": 2022
      },
      {
        "name": "C’est que du bonheur",
        "album": "Multitude (Video Album)",
        "year": 2022
      },
      {
        "name": "Pas vraiment",
        "album": "Multitude (Video Album)",
        "year": 2022
      },
      {
        "name": "Riez",
        "album": "Multitude (Video Album)",
        "year": 2022
      },
      {
        "name": "Mon amour",
        "album": "Multitude (Video Album)",
        "year": 2022
      },
      {
        "name": "Déclaration",
        "album": "Multitude (Video Album)",
        "year": 2022
      },
      {
        "name": "Mauvaise journée",
        "album": "Multitude (Video Album)",
        "year": 2022
      },
      {
        "name": "Bonne journée",
        "album": "Multitude (Video Album)",
        "year": 2022
      },
      {
        "name": "Santé (Official Music Video)",
        "album": "Multitude (Video Album)",
        "year": 2022
      },
      {
        "name": "L’enfer",
        "album": "Multitude (Video Album)",
        "year": 2022
      },
      {
        "name": "Fils de joie",
        "album": "Multitude (Video Album)",
        "year": 2022
      },
      {
        "name": "Bienvenue chez moi",
        "album": "Cheese",
        "year": 2010
      },
      {
        "name": "Te Quiero",
        "album": "Cheese",
        "year": 2010
      },
      {
        "name": "Peace or Violence",
        "album": "Cheese",
        "year": 2010
      },
      {
        "name": "Rail de musique",
        "album": "Cheese",
        "year": 2010
      },
      {
        "name": "Summertime",
        "album": "Cheese",
        "year": 2010
      },
      {
        "name": "Dodo",
        "album": "Cheese",
        "year": 2010
      },
      {
        "name": "Sîlence",
        "album": "Cheese",
        "year": 2010
      },
      {
        "name": "Je cours",
        "album": "Cheese",
        "year": 2010
      },
      {
        "name": "House'Llelujah",
        "album": "Cheese",
        "year": 2010
      },
      {
        "name": "Cheese",
        "album": "Cheese",
        "year": 2010
      },
      {
        "name": "Alors on danse (90's Remix)",
        "album": "Cheese",
        "year": 2010
      }
    ]
  },
  {
    "name": "EDGE",
    "color": "#FAC775",
    "genre": "Hip-Hop/Rap",
    "trackCount": 41,
    "albums": [
      "De janvier à janvier",
      "OFFSHORE",
      "JANVIER...",
      "OFF",
      "Dilemme (feat. La Fève) - Single"
    ],
    "tracks": [
      {
        "name": "De janvier à janvier",
        "album": "De janvier à janvier",
        "year": 2025
      },
      {
        "name": "Nobody",
        "album": "De janvier à janvier",
        "year": 2024
      },
      {
        "name": "113",
        "album": "De janvier à janvier",
        "year": 2025
      },
      {
        "name": "Ayo Technology (feat. BEN plg)",
        "album": "De janvier à janvier",
        "year": 2025
      },
      {
        "name": "Quai de Jemmapes",
        "album": "De janvier à janvier",
        "year": 2025
      },
      {
        "name": "Hors de l'eau",
        "album": "De janvier à janvier",
        "year": 2025
      },
      {
        "name": "Slow",
        "album": "De janvier à janvier",
        "year": 2025
      },
      {
        "name": "Labyrinthe (feat. Toothpick)",
        "album": "De janvier à janvier",
        "year": 2025
      },
      {
        "name": "Interlude",
        "album": "De janvier à janvier",
        "year": 2025
      },
      {
        "name": "Opps et 17 (feat. Oldpee)",
        "album": "De janvier à janvier",
        "year": 2025
      },
      {
        "name": "Cadillac Escalade",
        "album": "De janvier à janvier",
        "year": 2025
      },
      {
        "name": "Bande Originale (feat. ISHA)",
        "album": "De janvier à janvier",
        "year": 2025
      },
      {
        "name": "Souvent soucieux",
        "album": "De janvier à janvier",
        "year": 2025
      },
      {
        "name": "Au départ (feat. Nemir)",
        "album": "De janvier à janvier",
        "year": 2025
      },
      {
        "name": "6 sours",
        "album": "De janvier à janvier",
        "year": 2024
      },
      {
        "name": "Derniers temps",
        "album": "JANVIER...",
        "year": 2024
      },
      {
        "name": "Gold Blooded",
        "album": "JANVIER...",
        "year": 2024
      },
      {
        "name": "Ohlavie",
        "album": "JANVIER...",
        "year": 2024
      },
      {
        "name": "Elixir",
        "album": "JANVIER...",
        "year": 2024
      },
      {
        "name": "Pas pour rien",
        "album": "JANVIER...",
        "year": 2024
      },
      {
        "name": "De janvier...",
        "album": "JANVIER...",
        "year": 2024
      },
      {
        "name": "Météo",
        "album": "OFFSHORE",
        "year": 2021
      },
      {
        "name": "E.D.G.E",
        "album": "OFFSHORE",
        "year": 2021
      },
      {
        "name": "LBMLB",
        "album": "OFFSHORE",
        "year": 2021
      },
      {
        "name": "Plata",
        "album": "OFFSHORE",
        "year": 2021
      },
      {
        "name": "Waze (feat. Enfantdepauvres)",
        "album": "OFFSHORE",
        "year": 2021
      },
      {
        "name": "Palace (feat. Jäde)",
        "album": "OFFSHORE",
        "year": 2021
      },
      {
        "name": "Datcha",
        "album": "OFFSHORE",
        "year": 2021
      },
      {
        "name": "Dilemme (feat. La Fève)",
        "album": "OFFSHORE",
        "year": 2021
      },
      {
        "name": "Pieux",
        "album": "OFFSHORE",
        "year": 2021
      },
      {
        "name": "Millésime (feat. Lowssa)",
        "album": "OFFSHORE",
        "year": 2021
      },
      {
        "name": "100 pas",
        "album": "OFFSHORE",
        "year": 2021
      },
      {
        "name": "Des nuages à la terre",
        "album": "OFFSHORE",
        "year": 2021
      },
      {
        "name": "20.000 (feat. Alpha Wann)",
        "album": "OFFSHORE",
        "year": 2021
      },
      {
        "name": "Schémas Monotones",
        "album": "OFFSHORE",
        "year": 2021
      },
      {
        "name": "Shelter",
        "album": "OFF",
        "year": 2020
      },
      {
        "name": "5h54",
        "album": "OFF",
        "year": 2020
      },
      {
        "name": "Routine",
        "album": "OFF",
        "year": 2020
      },
      {
        "name": "Ce soir (feat. robdbloc)",
        "album": "OFF",
        "year": 2020
      },
      {
        "name": "Obsolète",
        "album": "OFF",
        "year": 2020
      },
      {
        "name": "Dilemme (feat. La Fève)",
        "album": "Dilemme (feat. La Fève) - Single",
        "year": 2021
      }
    ]
  },
  {
    "name": "Rilès",
    "color": "#AFA9EC",
    "genre": "Hip-Hop/Rap",
    "trackCount": 40,
    "albums": [
      "WELCOME TO the JUNGLE (Deluxe)",
      "SURVIVAL MODE",
      "Pesetas - Single",
      "Brothers - Single",
      "Away - Single",
      "I Do It - Single",
      "GO CRAZY - Single",
      "LVL 36 - EP",
      "Una Vez Màs (Que Será, Será) - Single",
      "In the Jungle - Single"
    ],
    "tracks": [
      {
        "name": "Pesetas",
        "album": "Pesetas - Single",
        "year": 2017
      },
      {
        "name": "SURVIVAL",
        "album": "SURVIVAL MODE",
        "year": 2025
      },
      {
        "name": "BIG TROUBLE",
        "album": "SURVIVAL MODE",
        "year": 2024
      },
      {
        "name": "IT IS NOT A MISTAKE IF IT GOES IN CIRCLE",
        "album": "SURVIVAL MODE",
        "year": 2025
      },
      {
        "name": "NO REGRETS",
        "album": "SURVIVAL MODE",
        "year": 2025
      },
      {
        "name": "MONEY TREES",
        "album": "SURVIVAL MODE",
        "year": 2024
      },
      {
        "name": "BEAST",
        "album": "SURVIVAL MODE",
        "year": 2025
      },
      {
        "name": "PARADISE",
        "album": "SURVIVAL MODE",
        "year": 2025
      },
      {
        "name": "INTERLUDE",
        "album": "SURVIVAL MODE",
        "year": 2025
      },
      {
        "name": "DEAD OR ALIVE",
        "album": "SURVIVAL MODE",
        "year": 2025
      },
      {
        "name": "DON'T LIE",
        "album": "SURVIVAL MODE",
        "year": 2025
      },
      {
        "name": "SAVE MY MIND",
        "album": "SURVIVAL MODE",
        "year": 2025
      },
      {
        "name": "HOME",
        "album": "SURVIVAL MODE",
        "year": 2024
      },
      {
        "name": "READY TO DIE",
        "album": "SURVIVAL MODE",
        "year": 2025
      },
      {
        "name": "Admiration",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "No Tears",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "Brothers",
        "album": "Brothers - Single",
        "year": 2016
      },
      {
        "name": "E a Verdade",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "Queen",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "U Right?",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "Against the Clock",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "Myself N the Sea",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "Old Dayz",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "Resolution",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "I Love You",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "Are You a Star?",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "Me Falling",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "Utopia",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "Run!",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "!Outro – Eddy’s Laugh",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "!Bonus 1 : Yousatonmymind",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "Thank God",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "Away",
        "album": "Away - Single",
        "year": 2017
      },
      {
        "name": "I Do It",
        "album": "I Do It - Single",
        "year": 2016
      },
      {
        "name": "GO CRAZY",
        "album": "GO CRAZY - Single",
        "year": 2021
      },
      {
        "name": "Marijuana",
        "album": "WELCOME TO the JUNGLE (Deluxe)",
        "year": 2019
      },
      {
        "name": "FEELINGS",
        "album": "LVL 36 - EP",
        "year": 2020
      },
      {
        "name": "Una Vez Màs (Que Será, Será)",
        "album": "Una Vez Màs (Que Será, Será) - Single",
        "year": 2017
      },
      {
        "name": "In the Jungle",
        "album": "In the Jungle - Single",
        "year": 2017
      },
      {
        "name": "No Lie",
        "album": "No Lie - Single",
        "year": 2016
      }
    ]
  },
  {
    "name": "Yvnnis",
    "color": "#F5C4B3",
    "genre": "Hip-Hop/Rap",
    "trackCount": 39,
    "albums": [
      "DND",
      "Novae",
      "L'AFRO OU LES TRESSES",
      "SCORE! - EP",
      "Eternal Youth - EP",
      "SUD DE LA FRANCE - Single",
      "BARA - Single"
    ],
    "tracks": [
      {
        "name": "FÉDÉTOUR",
        "album": "SCORE! - EP",
        "year": 2024
      },
      {
        "name": "DONNELEGO",
        "album": "SCORE! - EP",
        "year": 2024
      },
      {
        "name": "ATARI",
        "album": "SCORE! - EP",
        "year": 2024
      },
      {
        "name": "JOAILLIER",
        "album": "SCORE! - EP",
        "year": 2024
      },
      {
        "name": "Vin Italien",
        "album": "Eternal Youth - EP",
        "year": 2022
      },
      {
        "name": "SUD DE LA FRANCE",
        "album": "SUD DE LA FRANCE - Single",
        "year": 2025
      },
      {
        "name": "BARA",
        "album": "BARA - Single",
        "year": 2025
      },
      {
        "name": "LESBRAS",
        "album": "DND",
        "year": 2025
      },
      {
        "name": "PRÉSIDENTIEL",
        "album": "DND",
        "year": 2025
      },
      {
        "name": "ABOMEY",
        "album": "DND",
        "year": 2025
      },
      {
        "name": "BIG SHOT",
        "album": "DND",
        "year": 2025
      },
      {
        "name": "PAS DU GENRE A GUINGUIN",
        "album": "DND",
        "year": 2025
      },
      {
        "name": "BARA",
        "album": "DND",
        "year": 2025
      },
      {
        "name": "EMOTICONE",
        "album": "DND",
        "year": 2025
      },
      {
        "name": "RADIO COTONOU",
        "album": "DND",
        "year": 2025
      },
      {
        "name": "SUD DE LA FRANCE",
        "album": "DND",
        "year": 2025
      },
      {
        "name": "DONOTDISTURB",
        "album": "DND",
        "year": 2025
      },
      {
        "name": "Cbpm",
        "album": "Novae",
        "year": 2023
      },
      {
        "name": "Washington",
        "album": "Novae",
        "year": 2023
      },
      {
        "name": "Ian Wright",
        "album": "Novae",
        "year": 2023
      },
      {
        "name": "+74 (feat. AAMO)",
        "album": "Novae",
        "year": 2023
      },
      {
        "name": "Encore",
        "album": "Novae",
        "year": 2023
      },
      {
        "name": "Héros",
        "album": "Novae",
        "year": 2022
      },
      {
        "name": "Nx2",
        "album": "Novae",
        "year": 2023
      },
      {
        "name": "Sur Le Gun",
        "album": "Novae",
        "year": 2023
      },
      {
        "name": "Vla",
        "album": "Novae",
        "year": 2023
      },
      {
        "name": "Soleil Pluvieux",
        "album": "Novae",
        "year": 2023
      },
      {
        "name": "Kali Uchis",
        "album": "Eternal Youth - EP",
        "year": 2022
      },
      {
        "name": "CERTIFIÉ (feat. Lyre & NeS)",
        "album": "Eternal Youth - EP",
        "year": 2022
      },
      {
        "name": "Fake",
        "album": "Eternal Youth - EP",
        "year": 2022
      },
      {
        "name": "GRAND PONT",
        "album": "L'AFRO OU LES TRESSES",
        "year": 2024
      },
      {
        "name": "GARE DU NORD",
        "album": "L'AFRO OU LES TRESSES",
        "year": 2023
      },
      {
        "name": "CHAMPAGNE & JERSEYS",
        "album": "L'AFRO OU LES TRESSES",
        "year": 2024
      },
      {
        "name": "LE PIÈGE",
        "album": "L'AFRO OU LES TRESSES",
        "year": 2024
      },
      {
        "name": "2 ACCORDS (INTERLUDE)",
        "album": "L'AFRO OU LES TRESSES",
        "year": 2024
      },
      {
        "name": "SEEDORF",
        "album": "L'AFRO OU LES TRESSES",
        "year": 2024
      },
      {
        "name": "SATIVA",
        "album": "L'AFRO OU LES TRESSES",
        "year": 2024
      },
      {
        "name": "MANAGER",
        "album": "L'AFRO OU LES TRESSES",
        "year": 2024
      },
      {
        "name": "JE(U)",
        "album": "L'AFRO OU LES TRESSES",
        "year": 2024
      }
    ]
  },
  {
    "name": "Booba",
    "color": "#9FE1CB",
    "genre": "Hip-Hop/Rap",
    "trackCount": 38,
    "albums": [
      "Temps mort",
      "Panthéon",
      "Nero nemesis",
      "Futur 2.0 (Deluxe)",
      "JAUNÉ (feat. Zed) - Single",
      "Autopsie 0",
      "Freestyle CKO - Single",
      "Seychelles - Single",
      "Ici C'est Paris (feat. Blessd) - Single"
    ],
    "tracks": [
      {
        "name": "Pinocchio (feat. Damso & Gato)",
        "album": "Nero nemesis",
        "year": 2015
      },
      {
        "name": "Kalash (feat. Kaaris)",
        "album": "Futur 2.0 (Deluxe)",
        "year": 2012
      },
      {
        "name": "JAUNÉ (feat. Zed)",
        "album": "JAUNÉ (feat. Zed) - Single",
        "year": 2020
      },
      {
        "name": "Scarface",
        "album": "Autopsie 0",
        "year": 2011
      },
      {
        "name": "92i veyron",
        "album": "Nero nemesis",
        "year": 2015
      },
      {
        "name": "Temps mort",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "Indépendants",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "Ecoute bien",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "Ma définition",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "Jusqu'ici tout va bien",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "Repose en paix",
        "album": "Temps mort",
        "year": 2001
      },
      {
        "name": "Le bitume avec une plume",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "Animals (feat. Lim & Moussa)",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "Sans ratures (feat. Nessbeal)",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "Interlude",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "100-8 Zoo (feat. Mala, Brams, Doums & Issaka)",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "On m'a dit",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "Nouvelle école (feat. Mala)",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "De mauvaise augure",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "Strass & paillettes (feat. Ali)",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "Destinée (feat. Kayna Samet)",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "Inédit",
        "album": "Temps mort",
        "year": 2002
      },
      {
        "name": "Tallac",
        "album": "Panthéon",
        "year": 2004
      },
      {
        "name": "Le mal par le mal",
        "album": "Panthéon",
        "year": 2004
      },
      {
        "name": "Commis d'office (feat. Mala)",
        "album": "Panthéon",
        "year": 2004
      },
      {
        "name": "N°10",
        "album": "Panthéon",
        "year": 2004
      },
      {
        "name": "Hors-Saison",
        "album": "Panthéon",
        "year": 2004
      },
      {
        "name": "R.A.P. (feat. Doums)",
        "album": "Panthéon",
        "year": 2004
      },
      {
        "name": "Baby (feat. Nessbeal)",
        "album": "Panthéon",
        "year": 2004
      },
      {
        "name": "La faucheuse",
        "album": "Panthéon",
        "year": 2004
      },
      {
        "name": "Mon son",
        "album": "Panthéon",
        "year": 2004
      },
      {
        "name": "Alter Ego (feat. Wayne Wonder)",
        "album": "Panthéon",
        "year": 2004
      },
      {
        "name": "Pazalaza pour sazamuser (feat. I2S & Brams)",
        "album": "Panthéon",
        "year": 2004
      },
      {
        "name": "Bâtiment C",
        "album": "Panthéon",
        "year": 2004
      },
      {
        "name": "Avant de partir (feat. Leya Masry)",
        "album": "Panthéon",
        "year": 2004
      },
      {
        "name": "Freestyle CKO",
        "album": "Freestyle CKO - Single",
        "year": 2024
      },
      {
        "name": "Seychelles",
        "album": "Seychelles - Single",
        "year": 2026
      },
      {
        "name": "Ici C'est Paris (feat. Blessd)",
        "album": "Ici C'est Paris (feat. Blessd) - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "Clara Luciani",
    "color": "#C0DD97",
    "genre": "French Pop",
    "trackCount": 38,
    "albums": [
      "Sainte-Victoire (avec Vidéos)",
      "Cœur",
      "Sainte-Victoire (Super-édition)"
    ],
    "tracks": [
      {
        "name": "Allô",
        "album": "Sainte-Victoire (Super-édition)",
        "year": 2018
      },
      {
        "name": "Cœur",
        "album": "Cœur",
        "year": 2021
      },
      {
        "name": "Le reste",
        "album": "Cœur",
        "year": 2021
      },
      {
        "name": "Le chanteur",
        "album": "Cœur",
        "year": 2021
      },
      {
        "name": "Tout le monde (sauf toi)",
        "album": "Cœur",
        "year": 2021
      },
      {
        "name": "Respire encore",
        "album": "Cœur",
        "year": 2021
      },
      {
        "name": "Amour toujours",
        "album": "Cœur",
        "year": 2021
      },
      {
        "name": "J'sais pas plaire",
        "album": "Cœur",
        "year": 2021
      },
      {
        "name": "La place",
        "album": "Cœur",
        "year": 2021
      },
      {
        "name": "Bandit",
        "album": "Cœur",
        "year": 2021
      },
      {
        "name": "Au revoir",
        "album": "Cœur",
        "year": 2021
      },
      {
        "name": "La grenade",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2017
      },
      {
        "name": "La baie",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2017
      },
      {
        "name": "On ne meurt pas d'amour",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2018
      },
      {
        "name": "Eddy",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2018
      },
      {
        "name": "Les fleurs",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2018
      },
      {
        "name": "Comme toi",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2017
      },
      {
        "name": "Drôle d'époque",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2018
      },
      {
        "name": "Monstre d'amour",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2017
      },
      {
        "name": "La dernière fois",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2018
      },
      {
        "name": "Dors",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2018
      },
      {
        "name": "Sainte-Victoire",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2018
      },
      {
        "name": "Nue",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2018
      },
      {
        "name": "Mon ombre",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2018
      },
      {
        "name": "Bovary",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2018
      },
      {
        "name": "Ma sœur",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2018
      },
      {
        "name": "Allô",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2018
      },
      {
        "name": "Emmanuelle",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2018
      },
      {
        "name": "Cette chanson",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2018
      },
      {
        "name": "La chanson de Delphine (feat. Vladimir Cauchemar)",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2018
      },
      {
        "name": "La grenade",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2021
      },
      {
        "name": "Nue",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2021
      },
      {
        "name": "Ma sœur",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2021
      },
      {
        "name": "La baie",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2021
      },
      {
        "name": "La chanson de Delphine",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2021
      },
      {
        "name": "Monstre d'amour",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2021
      },
      {
        "name": "Comme toi",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2021
      },
      {
        "name": "Emmanuelle - Live à la Villa Cavrois",
        "album": "Sainte-Victoire (avec Vidéos)",
        "year": 2021
      }
    ]
  },
  {
    "name": "Kekra",
    "color": "#F4C0D1",
    "genre": "Hip-Hop/Rap",
    "trackCount": 37,
    "albums": [
      "Stratos",
      "Vréalité",
      "Vréel 2",
      "Vréalité (feat. Niska) - Single",
      "Land",
      "Vréel 3",
      "Vréel",
      "Nuit et jour - Single"
    ],
    "tracks": [
      {
        "name": "Vréalité (feat. Niska)",
        "album": "Vréalité (feat. Niska) - Single",
        "year": 2019
      },
      {
        "name": "Wing Chun",
        "album": "Land",
        "year": 2018
      },
      {
        "name": "9 Milli",
        "album": "Vréel 2",
        "year": 2017
      },
      {
        "name": "Téléphone maison",
        "album": "Vréalité",
        "year": 2019
      },
      {
        "name": "Lights Out",
        "album": "Vréalité",
        "year": 2019
      },
      {
        "name": "COD",
        "album": "Vréalité",
        "year": 2019
      },
      {
        "name": "Vréalité (feat. Niska)",
        "album": "Vréalité",
        "year": 2019
      },
      {
        "name": "CLS",
        "album": "Vréalité",
        "year": 2019
      },
      {
        "name": "Chut",
        "album": "Vréalité",
        "year": 2019
      },
      {
        "name": "Doré (Interlude)",
        "album": "Vréalité",
        "year": 2019
      },
      {
        "name": "Korda",
        "album": "Vréalité",
        "year": 2019
      },
      {
        "name": "Violation",
        "album": "Vréalité",
        "year": 2019
      },
      {
        "name": "OSMS",
        "album": "Vréalité",
        "year": 2019
      },
      {
        "name": "Aznavour",
        "album": "Vréalité",
        "year": 2019
      },
      {
        "name": "Sans les thunes",
        "album": "Vréalité",
        "year": 2019
      },
      {
        "name": "Vrai-alité (Bonus Track)",
        "album": "Vréalité",
        "year": 2019
      },
      {
        "name": "Sans Visage",
        "album": "Vréel 2",
        "year": 2017
      },
      {
        "name": "Tout seul",
        "album": "Vréel 3",
        "year": 2017
      },
      {
        "name": "Pas joli",
        "album": "Vréel",
        "year": 2016
      },
      {
        "name": "Stratos",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Iverson",
        "album": "Stratos",
        "year": 2022
      },
      {
        "name": "J'arrête (feat. Zamdane)",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Combien de temps",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Trop tard",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Nuages",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Ingé son (feat. Alpha Wann & La Fève)",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Je pouvais",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Glock 18",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Disconnect",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Vibe & Sun",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Torts",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Lakehouse (feat. Hamza)",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Nuit et jour",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Spend that",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Mal parti",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Bloc de glace",
        "album": "Stratos",
        "year": 2023
      },
      {
        "name": "Nuit et jour",
        "album": "Nuit et jour - Single",
        "year": 2023
      }
    ]
  },
  {
    "name": "Zamdane",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 37,
    "albums": [
      "Couleur de ma peine",
      "SOLSAD",
      "Affamé (Saison 2)",
      "Grünt Tunes",
      "Formidable (Affamé #21) - Single"
    ],
    "tracks": [
      {
        "name": "Favaro",
        "album": "Grünt Tunes",
        "year": 2018
      },
      {
        "name": "Tout ce qu'il voulait",
        "album": "Couleur de ma peine",
        "year": 2022
      },
      {
        "name": "Zhar",
        "album": "Couleur de ma peine",
        "year": 2021
      },
      {
        "name": "Flouka",
        "album": "Couleur de ma peine",
        "year": 2022
      },
      {
        "name": "Naïf",
        "album": "Couleur de ma peine",
        "year": 2022
      },
      {
        "name": "C18",
        "album": "Couleur de ma peine",
        "year": 2022
      },
      {
        "name": "Stradivarius",
        "album": "Couleur de ma peine",
        "year": 2022
      },
      {
        "name": "Vide quand t'es pas là",
        "album": "Couleur de ma peine",
        "year": 2022
      },
      {
        "name": "Même à distance on est proches",
        "album": "Couleur de ma peine",
        "year": 2022
      },
      {
        "name": "1,2,3,4",
        "album": "Couleur de ma peine",
        "year": 2022
      },
      {
        "name": "Le monde par ma fenêtre",
        "album": "Couleur de ma peine",
        "year": 2022
      },
      {
        "name": "Foust L'Bando",
        "album": "Couleur de ma peine",
        "year": 2022
      },
      {
        "name": "Libre comme une colombe",
        "album": "Couleur de ma peine",
        "year": 2022
      },
      {
        "name": "Lettre à mon dieu",
        "album": "Couleur de ma peine",
        "year": 2022
      },
      {
        "name": "Incomplet comme février",
        "album": "Couleur de ma peine",
        "year": 2022
      },
      {
        "name": "Groupie love",
        "album": "Couleur de ma peine",
        "year": 2022
      },
      {
        "name": "Formidable (Affamé #21)",
        "album": "Formidable (Affamé #21) - Single",
        "year": 2023
      },
      {
        "name": "Vital (Affamé #6)",
        "album": "Affamé (Saison 2)",
        "year": 2021
      },
      {
        "name": "Histoires de la vraie vie (Affamé #7)",
        "album": "Affamé (Saison 2)",
        "year": 2021
      },
      {
        "name": "Hayati (Affamé #8)",
        "album": "Affamé (Saison 2)",
        "year": 2021
      },
      {
        "name": "GRRR (Affamé #9)",
        "album": "Affamé (Saison 2)",
        "year": 2021
      },
      {
        "name": "Athéna (Affamé #10)",
        "album": "Affamé (Saison 2)",
        "year": 2021
      },
      {
        "name": "Photogénique (Boosk’Affamé) [Affamé #11]",
        "album": "Affamé (Saison 2)",
        "year": 2021
      },
      {
        "name": "Sentimental (Affamé #12)",
        "album": "Affamé (Saison 2)",
        "year": 2021
      },
      {
        "name": "Marseille (Affamé #13)",
        "album": "Affamé (Saison 2)",
        "year": 2021
      },
      {
        "name": "Mouchkila",
        "album": "SOLSAD",
        "year": 2024
      },
      {
        "name": "À ma guise",
        "album": "SOLSAD",
        "year": 2024
      },
      {
        "name": "Million",
        "album": "SOLSAD",
        "year": 2024
      },
      {
        "name": "Printemps",
        "album": "SOLSAD",
        "year": 2024
      },
      {
        "name": "Un peu de moi",
        "album": "SOLSAD",
        "year": 2024
      },
      {
        "name": "Infini",
        "album": "SOLSAD",
        "year": 2024
      },
      {
        "name": "Stylo magique",
        "album": "SOLSAD",
        "year": 2024
      },
      {
        "name": "Lalalala",
        "album": "SOLSAD",
        "year": 2024
      },
      {
        "name": "Audi GT",
        "album": "SOLSAD",
        "year": 2024
      },
      {
        "name": "Fleurs",
        "album": "SOLSAD",
        "year": 2024
      },
      {
        "name": "Étoiles dans les yeux",
        "album": "SOLSAD",
        "year": 2024
      },
      {
        "name": "Monstres",
        "album": "SOLSAD",
        "year": 2024
      }
    ]
  },
  {
    "name": "Ateyaba",
    "color": "#1A5FB4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 37,
    "albums": [
      "La vie en Violet",
      "Infinigga",
      "Space Pack - EP",
      "ALC - Single"
    ],
    "tracks": [
      {
        "name": "SOLER",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "Cookies",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "Shenron",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "228",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "Angelique",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "Aureole",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "Pokeball",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "777",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "Majestic",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "Murakami",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "Cookies (Part II)",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "Deep Web",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "Crazy Girls",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "Ankh Nega",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "Cartier",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "StarTrak",
        "album": "La vie en Violet",
        "year": 2023
      },
      {
        "name": "Sekhmet",
        "album": "Infinigga",
        "year": 2021
      },
      {
        "name": "1 man gang",
        "album": "Infinigga",
        "year": 2021
      },
      {
        "name": "Purple Haze",
        "album": "Infinigga",
        "year": 2021
      },
      {
        "name": "Playa Part. II",
        "album": "Infinigga",
        "year": 2021
      },
      {
        "name": "Annie",
        "album": "Infinigga",
        "year": 2021
      },
      {
        "name": "$hopping",
        "album": "Infinigga",
        "year": 2021
      },
      {
        "name": "Final Fantasy",
        "album": "Infinigga",
        "year": 2021
      },
      {
        "name": "Nice",
        "album": "Infinigga",
        "year": 2021
      },
      {
        "name": "LGBIRI (Bonus)",
        "album": "Infinigga",
        "year": 2020
      },
      {
        "name": "Droptop (Bonus)",
        "album": "Infinigga",
        "year": 2020
      },
      {
        "name": "Av President Kennedy (Bonus)",
        "album": "Infinigga",
        "year": 2020
      },
      {
        "name": "PDRB (Bonus)",
        "album": "Infinigga",
        "year": 2020
      },
      {
        "name": "Naomi Freestyle (Bonus)",
        "album": "Infinigga",
        "year": 2020
      },
      {
        "name": "Rock With You",
        "album": "Infinigga",
        "year": 2018
      },
      {
        "name": "ALC",
        "album": "Infinigga",
        "year": 2021
      },
      {
        "name": "LGBIRI",
        "album": "Space Pack - EP",
        "year": 2020
      },
      {
        "name": "Droptop",
        "album": "Space Pack - EP",
        "year": 2020
      },
      {
        "name": "Av President Kennedy",
        "album": "Space Pack - EP",
        "year": 2020
      },
      {
        "name": "PDRB",
        "album": "Space Pack - EP",
        "year": 2020
      },
      {
        "name": "Naomi Freestyle",
        "album": "Space Pack - EP",
        "year": 2020
      },
      {
        "name": "ALC",
        "album": "ALC - Single",
        "year": 2021
      }
    ]
  },
  {
    "name": "JeanJass",
    "color": "#2D8A4E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 37,
    "albums": [
      "Goldman",
      "Doudoune en été – Temps additionnel",
      "Tous ces ongles rongés"
    ],
    "tracks": [
      {
        "name": "FLEX3X",
        "album": "Tous ces ongles rongés",
        "year": 2024
      },
      {
        "name": "intro",
        "album": "Tous ces ongles rongés",
        "year": 2024
      },
      {
        "name": "Olympien",
        "album": "Tous ces ongles rongés",
        "year": 2024
      },
      {
        "name": "GRADUATION",
        "album": "Tous ces ongles rongés",
        "year": 2024
      },
      {
        "name": "Honolulu",
        "album": "Tous ces ongles rongés",
        "year": 2024
      },
      {
        "name": "Emily blunt",
        "album": "Tous ces ongles rongés",
        "year": 2024
      },
      {
        "name": "TEMA",
        "album": "Tous ces ongles rongés",
        "year": 2024
      },
      {
        "name": "Un frère",
        "album": "Tous ces ongles rongés",
        "year": 2024
      },
      {
        "name": "Tous ces ongles rongés",
        "album": "Tous ces ongles rongés",
        "year": 2024
      },
      {
        "name": "Mes jambes",
        "album": "Goldman",
        "year": 2014
      },
      {
        "name": "Dans le mur",
        "album": "Doudoune en été – Temps additionnel",
        "year": 2022
      },
      {
        "name": "Roberto Baggio (feat. Youssoupha)",
        "album": "Doudoune en été – Temps additionnel",
        "year": 2022
      },
      {
        "name": "Inconvénients",
        "album": "Doudoune en été – Temps additionnel",
        "year": 2022
      },
      {
        "name": "Je glisse",
        "album": "Doudoune en été – Temps additionnel",
        "year": 2022
      },
      {
        "name": "Gratuitement",
        "album": "Doudoune en été – Temps additionnel",
        "year": 2022
      },
      {
        "name": "Grammy (feat. Tuerie)",
        "album": "Doudoune en été – Temps additionnel",
        "year": 2022
      },
      {
        "name": "Le Six (feat. Fuku)",
        "album": "Doudoune en été – Temps additionnel",
        "year": 2022
      },
      {
        "name": "S&L",
        "album": "Doudoune en été – Temps additionnel",
        "year": 2022
      },
      {
        "name": "Truman Show (feat. Jazzy Bazz)",
        "album": "Doudoune en été – Temps additionnel",
        "year": 2022
      },
      {
        "name": "Premier jour",
        "album": "Doudoune en été – Temps additionnel",
        "year": 2022
      },
      {
        "name": "24H",
        "album": "Doudoune en été – Temps additionnel",
        "year": 2022
      },
      {
        "name": "Orly Love (feat. Benjamin Vndredi)",
        "album": "Doudoune en été – Temps additionnel",
        "year": 2022
      },
      {
        "name": "Goldman",
        "album": "Goldman",
        "year": 2014
      },
      {
        "name": "NPQ",
        "album": "Goldman",
        "year": 2014
      },
      {
        "name": "Pas ton problème",
        "album": "Goldman",
        "year": 2014
      },
      {
        "name": "Vivre autrement",
        "album": "Goldman",
        "year": 2014
      },
      {
        "name": "Pippo inzaghi",
        "album": "Goldman",
        "year": 2014
      },
      {
        "name": "Viande grillée",
        "album": "Goldman",
        "year": 2014
      },
      {
        "name": "Un truc",
        "album": "Goldman",
        "year": 2014
      },
      {
        "name": "Goldman (Instrumental Bonus Track)",
        "album": "Goldman",
        "year": 2014
      },
      {
        "name": "NPQ (Instrumental Bonus Track)",
        "album": "Goldman",
        "year": 2014
      },
      {
        "name": "Mes jambes (Instrumental Bonus Track)",
        "album": "Goldman",
        "year": 2014
      },
      {
        "name": "Pas ton problème (Instrumental Bonus Track)",
        "album": "Goldman",
        "year": 2014
      },
      {
        "name": "Vivre autrement (Instrumental Bonus Track)",
        "album": "Goldman",
        "year": 2014
      },
      {
        "name": "Pippo inzagh (Instrumental Bonus Track)",
        "album": "Goldman",
        "year": 2014
      },
      {
        "name": "Viande grillée (Instrumental Bonus Track)",
        "album": "Goldman",
        "year": 2014
      },
      {
        "name": "Un truc (Instrumental Bonus Track)",
        "album": "Goldman",
        "year": 2014
      }
    ]
  },
  {
    "name": "Frank Ocean",
    "color": "#C4622D",
    "genre": "Pop",
    "trackCount": 37,
    "albums": [
      "Blonde",
      "channel ORANGE",
      "In My Room - Single",
      "Biking (feat. JAŸ-Z & Tyler, the Creator) - Single",
      "DHL - Single"
    ],
    "tracks": [
      {
        "name": "Nikes",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Ivy",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Pink + White",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Be Yourself",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Solo",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Skyline To",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Self Control",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Good Guy",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Nights",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Solo (Reprise)",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Pretty Sweet",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Facebook Story",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Close to You",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "White Ferrari",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Seigfried",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Godspeed",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Futura Free",
        "album": "Blonde",
        "year": 2016
      },
      {
        "name": "Start",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "Thinkin Bout You",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "Fertilizer",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "Sierra Leone",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "Sweet Life",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "Not Just Money",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "Super Rich Kids (feat. Earl Sweatshirt)",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "Pilot Jones",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "Crack Rock",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "Pyramids",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "Lost",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "White (feat. John Mayer)",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "Monks",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "Bad Religion",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "Pink Matter (feat. André 3000)",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "Forrest Gump",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "End",
        "album": "channel ORANGE",
        "year": 2012
      },
      {
        "name": "In My Room",
        "album": "In My Room - Single",
        "year": 2019
      },
      {
        "name": "Biking (feat. JAŸ-Z & Tyler, the Creator)",
        "album": "Biking (feat. JAŸ-Z & Tyler, the Creator) - Single",
        "year": 2017
      },
      {
        "name": "DHL",
        "album": "DHL - Single",
        "year": 2019
      }
    ]
  },
  {
    "name": "Francis Cabrel",
    "color": "#7B4FA6",
    "genre": "Pop",
    "trackCount": 37,
    "albums": [
      "L'essentiel (1977-2007)",
      "Samedi soir sur la terre (Remastered)"
    ],
    "tracks": [
      {
        "name": "Petite Marie",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "Les murs de poussière",
        "album": "L'essentiel (1977-2007)",
        "year": 1977
      },
      {
        "name": "Les chemins de traverse",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "Je l'aime à mourir",
        "album": "L'essentiel (1977-2007)",
        "year": 1979
      },
      {
        "name": "C'était l'hiver",
        "album": "L'essentiel (1977-2007)",
        "year": 1979
      },
      {
        "name": "La dâme de Haute-Savoie",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "L'encre de tes yeux",
        "album": "L'essentiel (1977-2007)",
        "year": 1980
      },
      {
        "name": "Je pense encore à toi",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "Ma place dans le trafic",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "Répondez-moi",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "La fille qui m'accompagne",
        "album": "L'essentiel (1977-2007)",
        "year": 1983
      },
      {
        "name": "Leila et les chasseurs",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "Les chevaliers Cathares",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "Said et Mohâmed",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "Encore Et Encore",
        "album": "L'essentiel (1977-2007)",
        "year": 1985
      },
      {
        "name": "Je te suivrai",
        "album": "L'essentiel (1977-2007)",
        "year": 1985
      },
      {
        "name": "Il faudra leur dire",
        "album": "L'essentiel (1977-2007)",
        "year": 1987
      },
      {
        "name": "Sarbacâne",
        "album": "L'essentiel (1977-2007)",
        "year": 1989
      },
      {
        "name": "C'est écrit",
        "album": "L'essentiel (1977-2007)",
        "year": 1989
      },
      {
        "name": "Rosie",
        "album": "L'essentiel (1977-2007)",
        "year": 1989
      },
      {
        "name": "La cabane du pêcheur",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "La corrida",
        "album": "L'essentiel (1977-2007)",
        "year": 1994
      },
      {
        "name": "Je t'aimais, je t'aime, je t'aimerai",
        "album": "L'essentiel (1977-2007)",
        "year": 1994
      },
      {
        "name": "Octobre",
        "album": "L'essentiel (1977-2007)",
        "year": 1994
      },
      {
        "name": "Samedi soir sur la terre (Live)",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "Hors-saison",
        "album": "L'essentiel (1977-2007)",
        "year": 1999
      },
      {
        "name": "Le reste du temps",
        "album": "L'essentiel (1977-2007)",
        "year": 1999
      },
      {
        "name": "Le monde est sourd",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "Les passantes (Live)",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "Quand j'aime une fois j'aime pour toujours (Live)",
        "album": "L'essentiel (1977-2007)",
        "year": 2000
      },
      {
        "name": "Les gens absents",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "Elle dort",
        "album": "L'essentiel (1977-2007)",
        "year": 2004
      },
      {
        "name": "Bonne nouvelle",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "Gardien de nuit (Extrait du \"Soldat rose\")",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "Les yeux bleus pleurant sous la pluie (Inédit)",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "Le gorille (Inédit)",
        "album": "L'essentiel (1977-2007)",
        "year": 2007
      },
      {
        "name": "Je t'aimais, je t'aime, je t'aimerai (Remastered)",
        "album": "Samedi soir sur la terre (Remastered)",
        "year": 1994
      }
    ]
  },
  {
    "name": "Queen",
    "color": "#E8593C",
    "genre": "Rock",
    "trackCount": 36,
    "albums": [
      "Sheer Heart Attack",
      "A Night at the Opera",
      "News of the World"
    ],
    "tracks": [
      {
        "name": "We Will Rock You",
        "album": "News of the World",
        "year": 1977
      },
      {
        "name": "We Are the Champions",
        "album": "News of the World",
        "year": 1977
      },
      {
        "name": "Sheer Heart Attack",
        "album": "News of the World",
        "year": 1977
      },
      {
        "name": "All Dead, All Dead",
        "album": "News of the World",
        "year": 1977
      },
      {
        "name": "Spread Your Wings",
        "album": "News of the World",
        "year": 1977
      },
      {
        "name": "Fight From the Inside",
        "album": "News of the World",
        "year": 1977
      },
      {
        "name": "Get Down, Make Love",
        "album": "News of the World",
        "year": 1977
      },
      {
        "name": "Sleeping On the Sidewalk",
        "album": "News of the World",
        "year": 1977
      },
      {
        "name": "Who Needs You",
        "album": "News of the World",
        "year": 1977
      },
      {
        "name": "It's Late",
        "album": "News of the World",
        "year": 1977
      },
      {
        "name": "My Melancholy Blues",
        "album": "News of the World",
        "year": 1977
      },
      {
        "name": "Death On Two Legs (Dedicated To...)",
        "album": "A Night at the Opera",
        "year": 1975
      },
      {
        "name": "Lazing On a Sunday Afternoon",
        "album": "A Night at the Opera",
        "year": 1975
      },
      {
        "name": "I'm In Love With My Car",
        "album": "A Night at the Opera",
        "year": 1975
      },
      {
        "name": "You're My Best Friend",
        "album": "A Night at the Opera",
        "year": 1975
      },
      {
        "name": "'39",
        "album": "A Night at the Opera",
        "year": 1975
      },
      {
        "name": "Sweet Lady",
        "album": "A Night at the Opera",
        "year": 1975
      },
      {
        "name": "Seaside Rendezvous",
        "album": "A Night at the Opera",
        "year": 1975
      },
      {
        "name": "The Prophet's Song",
        "album": "A Night at the Opera",
        "year": 1975
      },
      {
        "name": "Love of My Life",
        "album": "A Night at the Opera",
        "year": 1975
      },
      {
        "name": "Good Company",
        "album": "A Night at the Opera",
        "year": 1975
      },
      {
        "name": "Bohemian Rhapsody",
        "album": "A Night at the Opera",
        "year": 1975
      },
      {
        "name": "God Save the Queen",
        "album": "A Night at the Opera",
        "year": 1975
      },
      {
        "name": "Brighton Rock",
        "album": "Sheer Heart Attack",
        "year": 1974
      },
      {
        "name": "Killer Queen",
        "album": "Sheer Heart Attack",
        "year": 1974
      },
      {
        "name": "Tenement Funster",
        "album": "Sheer Heart Attack",
        "year": 1974
      },
      {
        "name": "Flick of the Wrist",
        "album": "Sheer Heart Attack",
        "year": 1974
      },
      {
        "name": "Lily of the Valley",
        "album": "Sheer Heart Attack",
        "year": 1974
      },
      {
        "name": "Now I'm Here",
        "album": "Sheer Heart Attack",
        "year": 1974
      },
      {
        "name": "In the Lap of the Gods",
        "album": "Sheer Heart Attack",
        "year": 1974
      },
      {
        "name": "Stone Cold Crazy",
        "album": "Sheer Heart Attack",
        "year": 1974
      },
      {
        "name": "Dear Friends",
        "album": "Sheer Heart Attack",
        "year": 1974
      },
      {
        "name": "Misfire",
        "album": "Sheer Heart Attack",
        "year": 1974
      },
      {
        "name": "Bring Back That Leroy Brown",
        "album": "Sheer Heart Attack",
        "year": 1974
      },
      {
        "name": "She Makes Me (Stormtrooper In Stilettos)",
        "album": "Sheer Heart Attack",
        "year": 1974
      },
      {
        "name": "In the Lap of the Gods... Revisited",
        "album": "Sheer Heart Attack",
        "year": 1974
      }
    ]
  },
  {
    "name": "Eloquence",
    "color": "#3B8BD4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 36,
    "albums": [
      "Extravaganza",
      "Eldorado Blvd"
    ],
    "tracks": [
      {
        "name": "Les oiseaux",
        "album": "Eldorado Blvd",
        "year": 2025
      },
      {
        "name": "Rapace",
        "album": "Eldorado Blvd",
        "year": 2025
      },
      {
        "name": "Rantanplan",
        "album": "Eldorado Blvd",
        "year": 2025
      },
      {
        "name": "Beluga (feat. ZoukNoir)",
        "album": "Eldorado Blvd",
        "year": 2025
      },
      {
        "name": "Macro sur la descente 3",
        "album": "Eldorado Blvd",
        "year": 2025
      },
      {
        "name": "La mort du dollar (feat. Jeune LC)",
        "album": "Eldorado Blvd",
        "year": 2025
      },
      {
        "name": "Bully",
        "album": "Eldorado Blvd",
        "year": 2025
      },
      {
        "name": "24 Comme kobe",
        "album": "Eldorado Blvd",
        "year": 2025
      },
      {
        "name": "Say la vie (feat. Danja)",
        "album": "Eldorado Blvd",
        "year": 2025
      },
      {
        "name": "Everest (feat. MVK)",
        "album": "Eldorado Blvd",
        "year": 2025
      },
      {
        "name": "Tequila Shots (feat. JeanJass)",
        "album": "Eldorado Blvd",
        "year": 2025
      },
      {
        "name": "Tumblr",
        "album": "Eldorado Blvd",
        "year": 2025
      },
      {
        "name": "Non alignés",
        "album": "Eldorado Blvd",
        "year": 2025
      },
      {
        "name": "Day 2 Day (feat. Uncle Mega)",
        "album": "Eldorado Blvd",
        "year": 2025
      },
      {
        "name": "Monsieur Sunshine",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Safran (feat. Ice Crimi)",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Piattella",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Caucasienne & Exotic",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Dead Président (feat. Okis)",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Cortez Interlude",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Nekpluzultra (feat. ZoukNoir)",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Avion de Chasse (feat. Jaspe)",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Kesmo Interlude",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Tapper Sur Les Tempes (feat. Infinit' & Tedax Max)",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Codéine Dream 2",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "DJ Khaled (feat. Sameer Ahmad)",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Kyo Itachi Interlude",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Zendaya (feat. Monseigneur Mike)",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Sincèrement Interlude",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Nachos (feat. Uncle Mega)",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Freebase (feat. H JeuneCrack)",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Fast Life (feat. Joe Lucazz & Siegel)",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Slone Interlude",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Saudade (feat. Urde)",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Infrarouge",
        "album": "Extravaganza",
        "year": 2024
      },
      {
        "name": "Roule Et Tais Toi Outro",
        "album": "Extravaganza",
        "year": 2024
      }
    ]
  },
  {
    "name": "KIK",
    "color": "#4A9E5C",
    "genre": "Hip-Hop/Rap",
    "trackCount": 35,
    "albums": [
      "PUZZLE",
      "Dimanche de Hippie, Vol. 2",
      "NANCY - Single",
      "OSBLC - Single",
      "EN ATTENDANT - Single",
      "Tout seul - Single",
      "Adieu mon cœur - Single",
      "Dimanche - Single",
      "Quoi de neuf? - Single",
      "Rayon de soleil - Single"
    ],
    "tracks": [
      {
        "name": "NANCY",
        "album": "NANCY - Single",
        "year": 2018
      },
      {
        "name": "Fuegolando (Kikesa Remix)",
        "album": "Dimanche de Hippie, Vol. 2",
        "year": 2018
      },
      {
        "name": "Déso pas déso",
        "album": "Dimanche de Hippie, Vol. 2",
        "year": 2018
      },
      {
        "name": "NANCY",
        "album": "NANCY - Single",
        "year": 2018
      },
      {
        "name": "OSBLC",
        "album": "OSBLC - Single",
        "year": 2018
      },
      {
        "name": "05h14",
        "album": "Dimanche de Hippie, Vol. 2",
        "year": 2018
      },
      {
        "name": "EN ATTENDANT",
        "album": "EN ATTENDANT - Single",
        "year": 2018
      },
      {
        "name": "Challenge incroyable #2",
        "album": "Dimanche de Hippie, Vol. 2",
        "year": 2018
      },
      {
        "name": "Tout seul",
        "album": "Tout seul - Single",
        "year": 2018
      },
      {
        "name": "Adieu mon cœur",
        "album": "Adieu mon cœur - Single",
        "year": 2018
      },
      {
        "name": "Dimanche",
        "album": "Dimanche - Single",
        "year": 2018
      },
      {
        "name": "En loge",
        "album": "Dimanche de Hippie, Vol. 2",
        "year": 2018
      },
      {
        "name": "Ce soir",
        "album": "Dimanche de Hippie, Vol. 2",
        "year": 2018
      },
      {
        "name": "Tourne en rond",
        "album": "Dimanche de Hippie, Vol. 2",
        "year": 2018
      },
      {
        "name": "Bisou",
        "album": "Dimanche de Hippie, Vol. 2",
        "year": 2018
      },
      {
        "name": "Intro (KIKESA / PUZZLE)",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "La paix",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "OUI",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "Quand j'étais petit",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "4 millions",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "Bandana mauve",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "Tous les jours",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "Très loin",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "1000 façons",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "Megazord (feat. Gaamo)",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "Dernier texto",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "T'es la meilleure",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "SOS",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "Adieu",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "Par habitude",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "Ikigai",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "Algie",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "Démonté (feat. De La Hoz)",
        "album": "PUZZLE",
        "year": 2019
      },
      {
        "name": "Quoi de neuf?",
        "album": "Quoi de neuf? - Single",
        "year": 2019
      },
      {
        "name": "Rayon de soleil",
        "album": "Rayon de soleil - Single",
        "year": 2019
      }
    ]
  },
  {
    "name": "Huntrill",
    "color": "#9B4DCA",
    "genre": "Hip-Hop/Rap",
    "trackCount": 35,
    "albums": [
      "LE BRUIT DE LA MACHINE À BILLETS",
      "Nouvelle Trap 2",
      "Nouvelle Trap",
      "4x4 NOIR - Single",
      "ANTICAPITALISTE - Single",
      "pullman&ritz (freestyle) - Single"
    ],
    "tracks": [
      {
        "name": "NOUVEAU PLUG",
        "album": "Nouvelle Trap 2",
        "year": 2024
      },
      {
        "name": "DYBALA",
        "album": "Nouvelle Trap 2",
        "year": 2024
      },
      {
        "name": "Rep FREDO SANTANA",
        "album": "Nouvelle Trap 2",
        "year": 2024
      },
      {
        "name": "MAASTRICHT",
        "album": "Nouvelle Trap 2",
        "year": 2024
      },
      {
        "name": "APPUIE-TÊTE",
        "album": "Nouvelle Trap 2",
        "year": 2024
      },
      {
        "name": "SUR LE DOS (FREESTYLE)",
        "album": "Nouvelle Trap 2",
        "year": 2024
      },
      {
        "name": "MONOGRAMME",
        "album": "Nouvelle Trap 2",
        "year": 2024
      },
      {
        "name": "FRRRSCHT.bip",
        "album": "Nouvelle Trap 2",
        "year": 2024
      },
      {
        "name": "HO HISSE! (feat. EDGE)",
        "album": "Nouvelle Trap 2",
        "year": 2024
      },
      {
        "name": "J'RECOMPTE",
        "album": "Nouvelle Trap 2",
        "year": 2024
      },
      {
        "name": "WHOLE LOTTA RACKsss",
        "album": "Nouvelle Trap 2",
        "year": 2024
      },
      {
        "name": "4x4 NOIR",
        "album": "4x4 NOIR - Single",
        "year": 2025
      },
      {
        "name": "Tesla",
        "album": "Nouvelle Trap",
        "year": 2019
      },
      {
        "name": "Margiela",
        "album": "Nouvelle Trap",
        "year": 2019
      },
      {
        "name": "Edition Limitée",
        "album": "Nouvelle Trap",
        "year": 2019
      },
      {
        "name": "AlexHunter Wang",
        "album": "Nouvelle Trap",
        "year": 2019
      },
      {
        "name": "PTSD",
        "album": "Nouvelle Trap",
        "year": 2019
      },
      {
        "name": "BMPA",
        "album": "Nouvelle Trap",
        "year": 2019
      },
      {
        "name": "Brille la Night",
        "album": "Nouvelle Trap",
        "year": 2019
      },
      {
        "name": "Nouveau Schlass",
        "album": "Nouvelle Trap",
        "year": 2019
      },
      {
        "name": "ANTICAPITALISTE",
        "album": "ANTICAPITALISTE - Single",
        "year": 2025
      },
      {
        "name": "pullman&ritz (freestyle)",
        "album": "pullman&ritz (freestyle) - Single",
        "year": 2024
      },
      {
        "name": "DiOR & CÉLiNE",
        "album": "LE BRUIT DE LA MACHINE À BILLETS",
        "year": 2025
      },
      {
        "name": "30 jours après",
        "album": "LE BRUIT DE LA MACHINE À BILLETS",
        "year": 2025
      },
      {
        "name": "SRT",
        "album": "LE BRUIT DE LA MACHINE À BILLETS",
        "year": 2025
      },
      {
        "name": "NOBU TRiP",
        "album": "LE BRUIT DE LA MACHINE À BILLETS",
        "year": 2025
      },
      {
        "name": "type de PiÉTONS",
        "album": "LE BRUIT DE LA MACHINE À BILLETS",
        "year": 2025
      },
      {
        "name": "4x4 NOIR",
        "album": "LE BRUIT DE LA MACHINE À BILLETS",
        "year": 2025
      },
      {
        "name": "RACCKKS DU COVID",
        "album": "LE BRUIT DE LA MACHINE À BILLETS",
        "year": 2025
      },
      {
        "name": "SUR LE SKi",
        "album": "LE BRUIT DE LA MACHINE À BILLETS",
        "year": 2025
      },
      {
        "name": "riche pas célèbre",
        "album": "LE BRUIT DE LA MACHINE À BILLETS",
        "year": 2025
      },
      {
        "name": "Gucci EN 2010",
        "album": "LE BRUIT DE LA MACHINE À BILLETS",
        "year": 2025
      },
      {
        "name": "BRÉSILIEN",
        "album": "LE BRUIT DE LA MACHINE À BILLETS",
        "year": 2025
      },
      {
        "name": "ANTICAPITALISTE",
        "album": "LE BRUIT DE LA MACHINE À BILLETS",
        "year": 2025
      },
      {
        "name": "Le fleuriste",
        "album": "LE BRUIT DE LA MACHINE À BILLETS",
        "year": 2025
      }
    ]
  },
  {
    "name": "Alpha Wann",
    "color": "#D4A017",
    "genre": "Hip-Hop/Rap",
    "trackCount": 35,
    "albums": [
      "UNE MAIN LAVE L'AUTRE",
      "Alph Lauren 3",
      "don dada mixtape vol 1",
      "Alph Lauren 2",
      "Alph Lauren",
      "PPP - Single",
      "Pistolet Rose 2 - A COLORS SHOW - Single"
    ],
    "tracks": [
      {
        "name": "STARSKY & HUTCH",
        "album": "UNE MAIN LAVE L'AUTRE",
        "year": 2018
      },
      {
        "name": "LE PIÈGE",
        "album": "UNE MAIN LAVE L'AUTRE",
        "year": 2018
      },
      {
        "name": "CASCADE (Remix)",
        "album": "UNE MAIN LAVE L'AUTRE",
        "year": 2018
      },
      {
        "name": "LANGAGE CRYPTÉ",
        "album": "UNE MAIN LAVE L'AUTRE",
        "year": 2018
      },
      {
        "name": "MACRO",
        "album": "UNE MAIN LAVE L'AUTRE",
        "year": 2018
      },
      {
        "name": "STUPÉFIANT ET NOIR",
        "album": "UNE MAIN LAVE L'AUTRE",
        "year": 2018
      },
      {
        "name": "UNE MAIN LAVE L'AUTRE",
        "album": "UNE MAIN LAVE L'AUTRE",
        "year": 2018
      },
      {
        "name": "FLAMME OLYMPIQUE",
        "album": "UNE MAIN LAVE L'AUTRE",
        "year": 2018
      },
      {
        "name": "ÇA VA ENSEMBLE",
        "album": "UNE MAIN LAVE L'AUTRE",
        "year": 2018
      },
      {
        "name": "CONTREX",
        "album": "UNE MAIN LAVE L'AUTRE",
        "year": 2018
      },
      {
        "name": "OLIVE & TOM",
        "album": "UNE MAIN LAVE L'AUTRE",
        "year": 2018
      },
      {
        "name": "POUR CELLES",
        "album": "UNE MAIN LAVE L'AUTRE",
        "year": 2018
      },
      {
        "name": "mitsubishi",
        "album": "don dada mixtape vol 1",
        "year": 2020
      },
      {
        "name": "philly flingo",
        "album": "don dada mixtape vol 1",
        "year": 2020
      },
      {
        "name": "fahrenheit 451",
        "album": "don dada mixtape vol 1",
        "year": 2020
      },
      {
        "name": "apdl",
        "album": "don dada mixtape vol 1",
        "year": 2020
      },
      {
        "name": "la lune attire la mer",
        "album": "don dada mixtape vol 1",
        "year": 2020
      },
      {
        "name": "carrelage italien",
        "album": "don dada mixtape vol 1",
        "year": 2020
      },
      {
        "name": "PISTOLET ROSE 2",
        "album": "PPP - Single",
        "year": 2019
      },
      {
        "name": "Alph Lauren",
        "album": "Alph Lauren 2",
        "year": 2016
      },
      {
        "name": "Paire de Prada",
        "album": "Alph Lauren 3",
        "year": 2018
      },
      {
        "name": "R5 et Murcielago",
        "album": "Alph Lauren 3",
        "year": 2018
      },
      {
        "name": "Courchevel (feat. K.S.A)",
        "album": "Alph Lauren 3",
        "year": 2018
      },
      {
        "name": "Louvre",
        "album": "Alph Lauren 3",
        "year": 2018
      },
      {
        "name": "Saint-Domingue",
        "album": "Alph Lauren 3",
        "year": 2018
      },
      {
        "name": "Kim K (feat. Doums)",
        "album": "Alph Lauren 3",
        "year": 2018
      },
      {
        "name": "Turban",
        "album": "Alph Lauren 3",
        "year": 2018
      },
      {
        "name": "Shanghai",
        "album": "Alph Lauren 3",
        "year": 2018
      },
      {
        "name": "Pistolet Rose 2 - A COLORS SHOW",
        "album": "Pistolet Rose 2 - A COLORS SHOW - Single",
        "year": 2019
      },
      {
        "name": "Barcelone",
        "album": "Alph Lauren 2",
        "year": 2016
      },
      {
        "name": "L'histoire d'un type bien",
        "album": "Alph Lauren",
        "year": 2014
      },
      {
        "name": "Steven Seagal",
        "album": "Alph Lauren",
        "year": 2014
      },
      {
        "name": "Protocole",
        "album": "Alph Lauren 2",
        "year": 2016
      },
      {
        "name": "Sous marin",
        "album": "Alph Lauren 2",
        "year": 2016
      },
      {
        "name": "Vortex",
        "album": "Alph Lauren 2",
        "year": 2016
      }
    ]
  },
  {
    "name": "Jazzy Bazz",
    "color": "#FF6B6B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 35,
    "albums": [
      "Memoria",
      "NIRVANA",
      "Nuit",
      "P-Town",
      "Rouler la nuit (feat. Sabrina Bellaouel) - Single"
    ],
    "tracks": [
      {
        "name": "Gizeh",
        "album": "NIRVANA",
        "year": 2025
      },
      {
        "name": "Night City",
        "album": "NIRVANA",
        "year": 2025
      },
      {
        "name": "Vertigo",
        "album": "NIRVANA",
        "year": 2025
      },
      {
        "name": "T'oublier",
        "album": "NIRVANA",
        "year": 2025
      },
      {
        "name": "Soledad",
        "album": "NIRVANA",
        "year": 2025
      },
      {
        "name": "Paris, TX (feat. Esso Luxueux)",
        "album": "NIRVANA",
        "year": 2025
      },
      {
        "name": "Interlude",
        "album": "NIRVANA",
        "year": 2025
      },
      {
        "name": "Nirvana",
        "album": "NIRVANA",
        "year": 2025
      },
      {
        "name": "Death Row",
        "album": "NIRVANA",
        "year": 2025
      },
      {
        "name": "C'était demain",
        "album": "NIRVANA",
        "year": 2025
      },
      {
        "name": "Michel-Ange",
        "album": "NIRVANA",
        "year": 2025
      },
      {
        "name": "Skit 2034",
        "album": "NIRVANA",
        "year": 2025
      },
      {
        "name": "Souviens-toi (feat. Tuerie)",
        "album": "NIRVANA",
        "year": 2025
      },
      {
        "name": "Zone 19 (feat. EDGE)",
        "album": "Memoria",
        "year": 2021
      },
      {
        "name": "Panorama (feat. Alpha Wann)",
        "album": "Memoria",
        "year": 2022
      },
      {
        "name": "Destinée",
        "album": "Memoria",
        "year": 2022
      },
      {
        "name": "Élément 115 (feat. Nekfeu)",
        "album": "Memoria",
        "year": 2022
      },
      {
        "name": "P-Town Blues",
        "album": "Memoria",
        "year": 2022
      },
      {
        "name": "D.ieu",
        "album": "Memoria",
        "year": 2021
      },
      {
        "name": "Interlude",
        "album": "Memoria",
        "year": 2022
      },
      {
        "name": "Arkham Anthem",
        "album": "Memoria",
        "year": 2022
      },
      {
        "name": "Sablier",
        "album": "Memoria",
        "year": 2022
      },
      {
        "name": "Memoria",
        "album": "Memoria",
        "year": 2022
      },
      {
        "name": "Mental (feat. robdbloc)",
        "album": "Memoria",
        "year": 2022
      },
      {
        "name": "Dark City (feat. EDGE)",
        "album": "Memoria",
        "year": 2022
      },
      {
        "name": "Cœur, Conscience",
        "album": "Memoria",
        "year": 2022
      },
      {
        "name": "Nouvelle 3.14",
        "album": "Memoria",
        "year": 2022
      },
      {
        "name": ".RAW Spleen (feat. Laylow)",
        "album": "Memoria",
        "year": 2022
      },
      {
        "name": "Albiceleste (feat. Josman)",
        "album": "Memoria",
        "year": 2022
      },
      {
        "name": "Memento Mori",
        "album": "Memoria",
        "year": 2022
      },
      {
        "name": "Rouler la nuit (feat. Sabrina Bellaouel)",
        "album": "Rouler la nuit (feat. Sabrina Bellaouel) - Single",
        "year": 2016
      },
      {
        "name": "Éternité (feat. Nekfeu)",
        "album": "Nuit",
        "year": 2018
      },
      {
        "name": "Leticia",
        "album": "Nuit",
        "year": 2018
      },
      {
        "name": "Trompes de Fallope",
        "album": "P-Town",
        "year": 2016
      },
      {
        "name": "Le roseau",
        "album": "P-Town",
        "year": 2016
      }
    ]
  },
  {
    "name": "Daniel Caesar",
    "color": "#4ECDC4",
    "genre": "R&B/Soul",
    "trackCount": 35,
    "albums": [
      "NEVER ENOUGH (Bonus Version)",
      "Freudian",
      "CASE STUDY 01",
      "Get You - Single"
    ],
    "tracks": [
      {
        "name": "Best Part (feat. H.E.R.)",
        "album": "Freudian",
        "year": 2017
      },
      {
        "name": "Hold Me Down",
        "album": "Freudian",
        "year": 2017
      },
      {
        "name": "Neu Roses (Transgressor's Song)",
        "album": "Freudian",
        "year": 2017
      },
      {
        "name": "Loose",
        "album": "Freudian",
        "year": 2017
      },
      {
        "name": "We Find Love",
        "album": "Freudian",
        "year": 2017
      },
      {
        "name": "Blessed",
        "album": "Freudian",
        "year": 2017
      },
      {
        "name": "Take Me Away (feat. Syd)",
        "album": "Freudian",
        "year": 2017
      },
      {
        "name": "Transform (feat. Charlotte Day Wilson)",
        "album": "Freudian",
        "year": 2017
      },
      {
        "name": "Freudian",
        "album": "Freudian",
        "year": 2017
      },
      {
        "name": "Ocho Rios",
        "album": "NEVER ENOUGH (Bonus Version)",
        "year": 2023
      },
      {
        "name": "Valentina",
        "album": "NEVER ENOUGH (Bonus Version)",
        "year": 2023
      },
      {
        "name": "Let Me Go",
        "album": "NEVER ENOUGH (Bonus Version)",
        "year": 2023
      },
      {
        "name": "Do You Like Me?",
        "album": "NEVER ENOUGH (Bonus Version)",
        "year": 2023
      },
      {
        "name": "Always",
        "album": "NEVER ENOUGH (Bonus Version)",
        "year": 2023
      },
      {
        "name": "Cool",
        "album": "NEVER ENOUGH (Bonus Version)",
        "year": 2023
      },
      {
        "name": "Buyer's Remorse (feat. Omar Apollo)",
        "album": "NEVER ENOUGH (Bonus Version)",
        "year": 2023
      },
      {
        "name": "Shot My Baby",
        "album": "NEVER ENOUGH (Bonus Version)",
        "year": 2023
      },
      {
        "name": "Pain Is Inevitable",
        "album": "NEVER ENOUGH (Bonus Version)",
        "year": 2023
      },
      {
        "name": "Vince Van Gogh",
        "album": "NEVER ENOUGH (Bonus Version)",
        "year": 2023
      },
      {
        "name": "Superpowers",
        "album": "NEVER ENOUGH (Bonus Version)",
        "year": 2023
      },
      {
        "name": "Unstoppable",
        "album": "NEVER ENOUGH (Bonus Version)",
        "year": 2023
      },
      {
        "name": "Please Do Not Lean (feat. BADBADNOTGOOD) [Bonus]",
        "album": "NEVER ENOUGH (Bonus Version)",
        "year": 2022
      },
      {
        "name": "Always (feat. Summer Walker) [Bonus]",
        "album": "NEVER ENOUGH (Bonus Version)",
        "year": 2023
      },
      {
        "name": "Valentina (feat. Rick Ross) [Bonus]",
        "album": "NEVER ENOUGH (Bonus Version)",
        "year": 2023
      },
      {
        "name": "ENTROPY",
        "album": "CASE STUDY 01",
        "year": 2019
      },
      {
        "name": "CYANIDE",
        "album": "CASE STUDY 01",
        "year": 2019
      },
      {
        "name": "FRONTAL LOBE MUZIK (feat. Pharrell Williams)",
        "album": "CASE STUDY 01",
        "year": 2019
      },
      {
        "name": "OPEN UP",
        "album": "CASE STUDY 01",
        "year": 2019
      },
      {
        "name": "RESTORE THE FEELING (feat. Jacob Collier & Sean Leon)",
        "album": "CASE STUDY 01",
        "year": 2019
      },
      {
        "name": "SUPERPOSITION (feat. John Mayer)",
        "album": "CASE STUDY 01",
        "year": 2019
      },
      {
        "name": "TOO DEEP TO TURN BACK",
        "album": "CASE STUDY 01",
        "year": 2019
      },
      {
        "name": "COMPLEXITIES",
        "album": "CASE STUDY 01",
        "year": 2019
      },
      {
        "name": "ARE YOU OK?",
        "album": "CASE STUDY 01",
        "year": 2019
      },
      {
        "name": "Japanese Denim",
        "album": "Get You - Single",
        "year": 2016
      },
      {
        "name": "Get You (feat. Kali Uchis)",
        "album": "Freudian",
        "year": 2016
      }
    ]
  },
  {
    "name": "Suprême NTM",
    "color": "#45B7D1",
    "genre": "Hip-Hop/Rap",
    "trackCount": 35,
    "albums": [
      "Paris sous les bombes",
      "Suprême NTM"
    ],
    "tracks": [
      {
        "name": "Intro",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "Back dans les bacs",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "Laisse pas traîner ton fils",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "That's My People",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "Seine Saint-Denis Style",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "Interlude",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "Ma Benz",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "C'est arrivé près d'chez toi",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "On est encore là, Pt. 1",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "Odeurs de soufre",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "Je vise juste",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "Pose ton Gun",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "Respire",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "On est encore là, Pt. 2",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "Hardcore sur le Beat",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "Outro",
        "album": "Suprême NTM",
        "year": 1998
      },
      {
        "name": "Intro",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Plus jamais ça",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Tout n'est pas si facile",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Come Again (pour que ça sonne funk)",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Qu'est-ce qu'on attend",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Nouvelle école",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Le rêve",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Old Skool",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Intro (Paris sous les bombes)",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Paris sous les bombes",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Pass pass le oinj",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Qui paiera les dégâts ? (DJ Clyde Remix)",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Sista B. (Intermède)",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Est-ce la vie ou moi",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "La fièvre",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Popopop !! (Freestyle)",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Outro",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Come Again 2 (Remix)",
        "album": "Paris sous les bombes",
        "year": 1995
      },
      {
        "name": "Affirmative Action (feat. Nas) [Saint-Denis Style Remix]",
        "album": "Paris sous les bombes",
        "year": 1995
      }
    ]
  },
  {
    "name": "Mister V",
    "color": "#96CEB4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 34,
    "albums": [
      "MVP",
      "Double V",
      "Viano (feat. Samy Ceezy) - Single",
      "Clash astéroïde - EP",
      "MVP (Réédition)"
    ],
    "tracks": [
      {
        "name": "Viano (feat. Samy Ceezy)",
        "album": "Viano (feat. Samy Ceezy) - Single",
        "year": 2018
      },
      {
        "name": "Top album",
        "album": "Double V",
        "year": 2017
      },
      {
        "name": "Venice",
        "album": "Double V",
        "year": 2017
      },
      {
        "name": "Petit déjeuner",
        "album": "Double V",
        "year": 2017
      },
      {
        "name": "Deutsche Qualität (feat. Samy Ceezy)",
        "album": "Double V",
        "year": 2017
      },
      {
        "name": "Demain",
        "album": "Double V",
        "year": 2017
      },
      {
        "name": "Nightcall",
        "album": "Double V",
        "year": 2017
      },
      {
        "name": "Apollo13 (feat. Juice)",
        "album": "Double V",
        "year": 2017
      },
      {
        "name": "Bulletproof",
        "album": "Double V",
        "year": 2017
      },
      {
        "name": "Space Jam (feat. Hayce Lemsi & Volts Face)",
        "album": "Double V",
        "year": 2017
      },
      {
        "name": "Gville (feat. Tortoz)",
        "album": "Double V",
        "year": 2017
      },
      {
        "name": "Thérapie",
        "album": "Double V",
        "year": 2017
      },
      {
        "name": "Cendrillon",
        "album": "Double V",
        "year": 2017
      },
      {
        "name": "Bonobo (Bonus Track)",
        "album": "Double V",
        "year": 2017
      },
      {
        "name": "Impact iminent",
        "album": "Clash astéroïde - EP",
        "year": 2017
      },
      {
        "name": "Payakaroon",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Moulin rouge",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Titanic",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Gang (feat. Dosseh)",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Miami Heat",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Femme de ménage",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Tudo Bem",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Facetime",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Pirelli (feat. JUL)",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Vice City",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Vert",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Clinton",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Kungfu",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Lidl",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "On y est",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Menace",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Boogie",
        "album": "MVP",
        "year": 2020
      },
      {
        "name": "Jamais (feat. PLK)",
        "album": "MVP",
        "year": 2019
      },
      {
        "name": "Facetime",
        "album": "MVP (Réédition)",
        "year": 2020
      }
    ]
  },
  {
    "name": "OBOY",
    "color": "#FFEAA7",
    "genre": "Hip-Hop/Rap",
    "trackCount": 34,
    "albums": [
      "No crari",
      "Mafana",
      "Southside",
      "OMEGA",
      "R10 - Single",
      "Boy - Single",
      "FAST FAST - Single",
      "Mafana 2 - EP"
    ],
    "tracks": [
      {
        "name": "Phantom",
        "album": "Mafana",
        "year": 2020
      },
      {
        "name": "Meilleurs (feat. 4Keus)",
        "album": "Mafana",
        "year": 2020
      },
      {
        "name": "Fané",
        "album": "Mafana",
        "year": 2020
      },
      {
        "name": "Mélodie",
        "album": "Mafana",
        "year": 2020
      },
      {
        "name": "Rémus",
        "album": "Mafana",
        "year": 2020
      },
      {
        "name": "Lunettes noires",
        "album": "Mafana",
        "year": 2020
      },
      {
        "name": "Louis V",
        "album": "No crari",
        "year": 2021
      },
      {
        "name": "Cosmos",
        "album": "No crari",
        "year": 2021
      },
      {
        "name": "Air tlanta",
        "album": "No crari",
        "year": 2021
      },
      {
        "name": "Armada",
        "album": "No crari",
        "year": 2021
      },
      {
        "name": "Terrible",
        "album": "No crari",
        "year": 2021
      },
      {
        "name": "No blata",
        "album": "No crari",
        "year": 2021
      },
      {
        "name": "Ariel",
        "album": "No crari",
        "year": 2021
      },
      {
        "name": "P2 interlude",
        "album": "No crari",
        "year": 2021
      },
      {
        "name": "Aqua86",
        "album": "No crari",
        "year": 2021
      },
      {
        "name": "Bétoile",
        "album": "No crari",
        "year": 2021
      },
      {
        "name": "Wu-Tang",
        "album": "OMEGA",
        "year": 2019
      },
      {
        "name": "Cabeza",
        "album": "Mafana",
        "year": 2020
      },
      {
        "name": "Cobra",
        "album": "Southside",
        "year": 2018
      },
      {
        "name": "Elvira",
        "album": "No crari",
        "year": 2021
      },
      {
        "name": "Cruel",
        "album": "No crari",
        "year": 2020
      },
      {
        "name": "Ysl",
        "album": "No crari",
        "year": 2021
      },
      {
        "name": "Avec toi",
        "album": "OMEGA",
        "year": 2019
      },
      {
        "name": "SLS",
        "album": "Southside",
        "year": 2018
      },
      {
        "name": "TDB",
        "album": "No crari",
        "year": 2021
      },
      {
        "name": "Geronimo",
        "album": "Southside",
        "year": 2018
      },
      {
        "name": "Cabeleira",
        "album": "Southside",
        "year": 2018
      },
      {
        "name": "Veste en cuir",
        "album": "Southside",
        "year": 2018
      },
      {
        "name": "Hot Sauce",
        "album": "Southside",
        "year": 2018
      },
      {
        "name": "R10",
        "album": "R10 - Single",
        "year": 2019
      },
      {
        "name": "Boy",
        "album": "Boy - Single",
        "year": 2019
      },
      {
        "name": "FAST FAST",
        "album": "FAST FAST - Single",
        "year": 2022
      },
      {
        "name": "Jolie Go",
        "album": "Mafana 2 - EP",
        "year": 2025
      },
      {
        "name": "200",
        "album": "OMEGA",
        "year": 2019
      }
    ]
  },
  {
    "name": "Brigitte Bardot",
    "color": "#7F77DD",
    "genre": "Pop",
    "trackCount": 34,
    "albums": [
      "Brigitte Bardot Show 67",
      "Les 50 plus belles chansons de Brigitte Bardot",
      "Bonnie And Clyde",
      "Bubble Gum",
      "Brigitte Bardot",
      "The Best of Bardot",
      "BB",
      "B.B. 64 (2003 Remaster)",
      "Nue Au Soleil",
      "60 tubes des années 60, Vol. 1"
    ],
    "tracks": [
      {
        "name": "Bubble Gum",
        "album": "Bonnie And Clyde",
        "year": 1968
      },
      {
        "name": "Un jour comme un autre",
        "album": "Bonnie And Clyde",
        "year": 1968
      },
      {
        "name": "La madrague",
        "album": "Bonnie And Clyde",
        "year": 1968
      },
      {
        "name": "Everybody Loves My Baby",
        "album": "Bonnie And Clyde",
        "year": 1968
      },
      {
        "name": "Harley Davidson",
        "album": "Brigitte Bardot Show 67",
        "year": 1963
      },
      {
        "name": "Mister Sun",
        "album": "Brigitte Bardot Show 67",
        "year": 1968
      },
      {
        "name": "Ay Que Viva La Sangria",
        "album": "Brigitte Bardot Show 67",
        "year": 1968
      },
      {
        "name": "Ce N'est Pas Vrai",
        "album": "Brigitte Bardot Show 67",
        "year": 1968
      },
      {
        "name": "Gang Gang",
        "album": "Brigitte Bardot Show 67",
        "year": 1968
      },
      {
        "name": "Oh Qu'il Est Vilain",
        "album": "Brigitte Bardot Show 67",
        "year": 1968
      },
      {
        "name": "Je Reviendrai Toujours Vers Toi",
        "album": "Brigitte Bardot Show 67",
        "year": 1968
      },
      {
        "name": "On Déménage",
        "album": "Brigitte Bardot Show 67",
        "year": 1968
      },
      {
        "name": "Le Diable Est Anglais",
        "album": "Brigitte Bardot Show 67",
        "year": 1968
      },
      {
        "name": "Contact",
        "album": "Brigitte Bardot Show 67",
        "year": 1968
      },
      {
        "name": "Les hommes endormis",
        "album": "Bubble Gum",
        "year": 1994
      },
      {
        "name": "Bubble gum",
        "album": "Bubble Gum",
        "year": 1994
      },
      {
        "name": "Contact",
        "album": "The Best of Bardot",
        "year": 2004
      },
      {
        "name": "Le diable est anglais",
        "album": "BB",
        "year": 1968
      },
      {
        "name": "Harley Davidson",
        "album": "BB",
        "year": 1963
      },
      {
        "name": "L'appareil à sous",
        "album": "The Best of Bardot",
        "year": 2004
      },
      {
        "name": "La fille de paille",
        "album": "Brigitte Bardot",
        "year": 1963
      },
      {
        "name": "Tu veux ou tu veux pas",
        "album": "Brigitte Bardot",
        "year": 1963
      },
      {
        "name": "À La Fin De L'été",
        "album": "Les 50 plus belles chansons de Brigitte Bardot",
        "year": 1963
      },
      {
        "name": "Ah! les p'tites femmes de Paris (feat. Jeanne Moreau)",
        "album": "Les 50 plus belles chansons de Brigitte Bardot",
        "year": 1963
      },
      {
        "name": "Gang Gang",
        "album": "Les 50 plus belles chansons de Brigitte Bardot",
        "year": 1968
      },
      {
        "name": "Je T'aime Moi Non Plus (feat. Serge Gainsbourg)",
        "album": "Les 50 plus belles chansons de Brigitte Bardot",
        "year": 1996
      },
      {
        "name": "Nue au soleil",
        "album": "Nue Au Soleil",
        "year": 1963
      },
      {
        "name": "Sidonie (Tiré du film \"Vie privée\")",
        "album": "60 tubes des années 60, Vol. 1",
        "year": 1962
      },
      {
        "name": "Moi je joue",
        "album": "Bubble Gum",
        "year": 1994
      },
      {
        "name": "Ne me laisse pas l'aimer",
        "album": "Brigitte Bardot",
        "year": 1964
      },
      {
        "name": "Les Amis De La Musique",
        "album": "Les 50 plus belles chansons de Brigitte Bardot",
        "year": 1963
      },
      {
        "name": "Je Me Donne À Qui Me Plaît",
        "album": "Les 50 plus belles chansons de Brigitte Bardot",
        "year": 1963
      },
      {
        "name": "Maria ninguen",
        "album": "B.B. 64 (2003 Remaster)",
        "year": 1964
      },
      {
        "name": "Une histoire de plage",
        "album": "B.B. 64 (2003 Remaster)",
        "year": 1964
      }
    ]
  },
  {
    "name": "Luther",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 34,
    "albums": [
      "EXIT",
      "GARÇON",
      "Trame",
      "IDD - EP",
      "ALAKAZAM + BLAKE & MORTIMER - Single",
      "alibi - Single"
    ],
    "tracks": [
      {
        "name": "PK TU M'APL ?",
        "album": "GARÇON",
        "year": 2023
      },
      {
        "name": "ALAKAZAM",
        "album": "GARÇON",
        "year": 2022
      },
      {
        "name": "BLAKE & MORTIMER",
        "album": "GARÇON",
        "year": 2022
      },
      {
        "name": "MA VIE D'AVANT",
        "album": "GARÇON",
        "year": 2023
      },
      {
        "name": "LESSGUI",
        "album": "GARÇON",
        "year": 2022
      },
      {
        "name": "LE SANG",
        "album": "GARÇON",
        "year": 2023
      },
      {
        "name": "TORIEL (VENI VIDI VIDE)",
        "album": "GARÇON",
        "year": 2023
      },
      {
        "name": "GARÇON",
        "album": "GARÇON",
        "year": 2023
      },
      {
        "name": "ALAKAZAM",
        "album": "ALAKAZAM + BLAKE & MORTIMER - Single",
        "year": 2022
      },
      {
        "name": "alibi",
        "album": "alibi - Single",
        "year": 2025
      },
      {
        "name": "Maille",
        "album": "Trame",
        "year": 2020
      },
      {
        "name": "Hégemon",
        "album": "Trame",
        "year": 2020
      },
      {
        "name": "Dinar (feat. BU$HI)",
        "album": "Trame",
        "year": 2020
      },
      {
        "name": "Le faire",
        "album": "Trame",
        "year": 2020
      },
      {
        "name": "Savane",
        "album": "Trame",
        "year": 2020
      },
      {
        "name": "VVS",
        "album": "Trame",
        "year": 2020
      },
      {
        "name": "Kamado",
        "album": "Trame",
        "year": 2020
      },
      {
        "name": "Trame (Outro)",
        "album": "Trame",
        "year": 2020
      },
      {
        "name": "Intro",
        "album": "IDD - EP",
        "year": 2021
      },
      {
        "name": "Yuto & Yugi",
        "album": "IDD - EP",
        "year": 2021
      },
      {
        "name": "20 Mach/s (interlude)",
        "album": "IDD - EP",
        "year": 2021
      },
      {
        "name": "Finesse",
        "album": "IDD - EP",
        "year": 2021
      },
      {
        "name": "Baume à lèvres",
        "album": "IDD - EP",
        "year": 2021
      },
      {
        "name": "Chrysant3mes",
        "album": "IDD - EP",
        "year": 2021
      },
      {
        "name": "PABO",
        "album": "EXIT",
        "year": 2024
      },
      {
        "name": "ROUGE GORON",
        "album": "EXIT",
        "year": 2024
      },
      {
        "name": "MOSSY COBBLESTONE",
        "album": "EXIT",
        "year": 2024
      },
      {
        "name": "T3",
        "album": "EXIT",
        "year": 2024
      },
      {
        "name": "JOURNAL DE QUÊTES",
        "album": "EXIT",
        "year": 2024
      },
      {
        "name": "SEUIL",
        "album": "EXIT",
        "year": 2024
      },
      {
        "name": "uSQUAD",
        "album": "EXIT",
        "year": 2024
      },
      {
        "name": "CHÂTEAU FORT",
        "album": "EXIT",
        "year": 2024
      },
      {
        "name": "LOOK",
        "album": "EXIT",
        "year": 2024
      },
      {
        "name": "ALED",
        "album": "EXIT",
        "year": 2024
      }
    ]
  },
  {
    "name": "Youssoupha",
    "color": "#1D9E75",
    "genre": "Hip-Hop/Rap",
    "trackCount": 34,
    "albums": [
      "Noir d****",
      "AMOUR SUPREME",
      "Les Préliminaires - Single",
      "Zequin Theory - Single"
    ],
    "tracks": [
      {
        "name": "L'amour",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "Viens",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "J'ai changé",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "Menace de mort",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "Histoires vraies (feat. Corneille)",
        "album": "Noir d****",
        "year": 2011
      },
      {
        "name": "Irréversible",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "Les disques de mon père (feat. Tabu Ley Rochereau)",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "L'enfer c'est les autres",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "B.A.O. (Bouche à oreille) [feat. Taïpan]",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "Gestelude, pt. 1 (feat. Sam's)",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "Noir désir (feat. Staff Benda Bilili)",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "Tout l'amour du monde",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "Dreamin' (feat. Indila)",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "Gestelude, pt. 2 (feat. S-pi)",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "La vie est belle (feat. Lfdv)",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "Espérance de vie",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "4h37 (Outro)",
        "album": "Noir d****",
        "year": 2012
      },
      {
        "name": "SUPRÊME",
        "album": "AMOUR SUPREME",
        "year": 2025
      },
      {
        "name": "ZEQUIN THEORY",
        "album": "AMOUR SUPREME",
        "year": 2024
      },
      {
        "name": "NOUVEAU KARATÉ",
        "album": "AMOUR SUPREME",
        "year": 2025
      },
      {
        "name": "LES ALMADIES (Interlude)",
        "album": "AMOUR SUPREME",
        "year": 2025
      },
      {
        "name": "DIEU EST GRANDE",
        "album": "AMOUR SUPREME",
        "year": 2025
      },
      {
        "name": "FAIRE MIEUX",
        "album": "AMOUR SUPREME",
        "year": 2025
      },
      {
        "name": "GOSPEL MOLOTOV",
        "album": "AMOUR SUPREME",
        "year": 2025
      },
      {
        "name": "GRANDS BOUBOUS DES ANCÊTRES",
        "album": "AMOUR SUPREME",
        "year": 2025
      },
      {
        "name": "PROSE COMBAT",
        "album": "AMOUR SUPREME",
        "year": 2025
      },
      {
        "name": "AMOUR SUPRÊME",
        "album": "AMOUR SUPREME",
        "year": 2025
      },
      {
        "name": "GOD BLESS",
        "album": "AMOUR SUPREME",
        "year": 2025
      },
      {
        "name": "GIGI",
        "album": "AMOUR SUPREME",
        "year": 2025
      },
      {
        "name": "PRIER SANS CRAINTE",
        "album": "AMOUR SUPREME",
        "year": 2025
      },
      {
        "name": "Zequin Theory",
        "album": "Zequin Theory - Single",
        "year": 2024
      },
      {
        "name": "Zequin Theory",
        "album": "Les Préliminaires - Single",
        "year": 2024
      },
      {
        "name": "Jusqu'à la Folie (feat. B.B. Jacques)",
        "album": "Les Préliminaires - Single",
        "year": 2024
      },
      {
        "name": "Paro",
        "album": "Les Préliminaires - Single",
        "year": 2024
      }
    ]
  },
  {
    "name": "Werenoi",
    "color": "#EF9F27",
    "genre": "Hip-Hop/Rap",
    "trackCount": 34,
    "albums": [
      "Carré",
      "Telegram",
      "Pyramide 2"
    ],
    "tracks": [
      {
        "name": "Jamal",
        "album": "Telegram",
        "year": 2022
      },
      {
        "name": "Intro Rolex",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Maison hantée",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Ciao (feat. Ninho)",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Figaro",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Grisaille",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Laboratoire",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Virus",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Tout seul (feat. Tiakola)",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "L'ancien",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Vroum Vroum",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Satan 2",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Nos labels c'est du papel (feat. Lacrim)",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Boussole",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Escorte (feat. PLK)",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Salaire",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Rude Boy",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Chemin d'or",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "10.03.2023",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Millionnaire",
        "album": "Carré",
        "year": 2023
      },
      {
        "name": "Vulgaire",
        "album": "Telegram",
        "year": 2022
      },
      {
        "name": "Crédibilité",
        "album": "Telegram",
        "year": 2022
      },
      {
        "name": "Balmain",
        "album": "Telegram",
        "year": 2022
      },
      {
        "name": "Le sas",
        "album": "Telegram",
        "year": 2022
      },
      {
        "name": "7 vie la",
        "album": "Telegram",
        "year": 2022
      },
      {
        "name": "Ndrangheta",
        "album": "Telegram",
        "year": 2022
      },
      {
        "name": "Sale histoire (feat. Rimkus)",
        "album": "Telegram",
        "year": 2022
      },
      {
        "name": "Déjà vu",
        "album": "Telegram",
        "year": 2022
      },
      {
        "name": "Solitaire",
        "album": "Telegram",
        "year": 2022
      },
      {
        "name": "Selfie (feat. Maes)",
        "album": "Telegram",
        "year": 2022
      },
      {
        "name": "Ordinateur",
        "album": "Telegram",
        "year": 2022
      },
      {
        "name": "All eyes on me",
        "album": "Telegram",
        "year": 2022
      },
      {
        "name": "3 singes (feat. Ninho)",
        "album": "Telegram",
        "year": 2022
      },
      {
        "name": "Pétunias",
        "album": "Pyramide 2",
        "year": 2024
      }
    ]
  },
  {
    "name": "Azur",
    "color": "#D4537E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 33,
    "albums": [
      "LOST TAPE",
      "Horizon",
      "FUCK*NEXT - EP",
      "Période - Single",
      "Bitch Fuckrr - Single"
    ],
    "tracks": [
      {
        "name": "Land La",
        "album": "Horizon",
        "year": 2022
      },
      {
        "name": "Affiliation",
        "album": "Horizon",
        "year": 2022
      },
      {
        "name": "Brand New",
        "album": "Horizon",
        "year": 2022
      },
      {
        "name": "Minute",
        "album": "Horizon",
        "year": 2022
      },
      {
        "name": "PDG (feat. HeyMikey!)",
        "album": "Horizon",
        "year": 2022
      },
      {
        "name": "Daytona",
        "album": "Horizon",
        "year": 2022
      },
      {
        "name": "C.University",
        "album": "Horizon",
        "year": 2022
      },
      {
        "name": "Elon",
        "album": "Horizon",
        "year": 2022
      },
      {
        "name": "Relapse",
        "album": "Horizon",
        "year": 2022
      },
      {
        "name": "Intro",
        "album": "FUCK*NEXT - EP",
        "year": 2020
      },
      {
        "name": "Encre de Chine",
        "album": "FUCK*NEXT - EP",
        "year": 2020
      },
      {
        "name": "34",
        "album": "FUCK*NEXT - EP",
        "year": 2020
      },
      {
        "name": "Trempolean (Bonus Track)",
        "album": "FUCK*NEXT - EP",
        "year": 2020
      },
      {
        "name": "Iconique",
        "album": "FUCK*NEXT - EP",
        "year": 2020
      },
      {
        "name": "A.M.I",
        "album": "FUCK*NEXT - EP",
        "year": 2020
      },
      {
        "name": "Période",
        "album": "Période - Single",
        "year": 2018
      },
      {
        "name": "Bitch Fuckrr",
        "album": "Bitch Fuckrr - Single",
        "year": 2020
      },
      {
        "name": "GO HARD",
        "album": "LOST TAPE",
        "year": 2025
      },
      {
        "name": "J'PARLE AVEC MON CAKE",
        "album": "LOST TAPE",
        "year": 2025
      },
      {
        "name": "DANGEROUS",
        "album": "LOST TAPE",
        "year": 2025
      },
      {
        "name": "LAQUELLE EST LA BEST",
        "album": "LOST TAPE",
        "year": 2025
      },
      {
        "name": "AUCUN REMORDS",
        "album": "LOST TAPE",
        "year": 2025
      },
      {
        "name": "DEUX SECONDES",
        "album": "LOST TAPE",
        "year": 2025
      },
      {
        "name": "LUNDI À LUNDI",
        "album": "LOST TAPE",
        "year": 2025
      },
      {
        "name": "RIVAGE (INTERLUDE)",
        "album": "LOST TAPE",
        "year": 2025
      },
      {
        "name": "FRIENDLY LINE",
        "album": "LOST TAPE",
        "year": 2025
      },
      {
        "name": "B.T.W (S/O DJ SUZYY)",
        "album": "LOST TAPE",
        "year": 2025
      },
      {
        "name": "KOBRA",
        "album": "LOST TAPE",
        "year": 2025
      },
      {
        "name": "3,4,JAM!",
        "album": "LOST TAPE",
        "year": 2025
      },
      {
        "name": "ALL-IN",
        "album": "LOST TAPE",
        "year": 2025
      },
      {
        "name": "PLAN B",
        "album": "LOST TAPE",
        "year": 2025
      },
      {
        "name": "MONTREAL",
        "album": "LOST TAPE",
        "year": 2025
      },
      {
        "name": "FOREIGN",
        "album": "LOST TAPE",
        "year": 2025
      }
    ]
  },
  {
    "name": "Swing",
    "color": "#378ADD",
    "genre": "Hip-Hop/Rap",
    "trackCount": 32,
    "albums": [
      "AU REVOIR SIMEON",
      "Marabout",
      "Alt F4",
      "Mérite - Single"
    ],
    "tracks": [
      {
        "name": "Mérite",
        "album": "Mérite - Single",
        "year": 2024
      },
      {
        "name": "Rivage (feat. Le Motel)",
        "album": "Marabout",
        "year": 2018
      },
      {
        "name": "Corbeaux (feat. Le Motel)",
        "album": "Marabout",
        "year": 2018
      },
      {
        "name": "Cercle",
        "album": "Marabout",
        "year": 2018
      },
      {
        "name": "Richesse",
        "album": "Marabout",
        "year": 2018
      },
      {
        "name": "Canopée",
        "album": "Marabout",
        "year": 2018
      },
      {
        "name": "Planer",
        "album": "Marabout",
        "year": 2018
      },
      {
        "name": "Mama (feat. Blu Samu)",
        "album": "Marabout",
        "year": 2018
      },
      {
        "name": "Gris",
        "album": "Alt F4",
        "year": 2020
      },
      {
        "name": "Soon (feat. Dune & Crayon)",
        "album": "Alt F4",
        "year": 2020
      },
      {
        "name": "Brousse",
        "album": "Alt F4",
        "year": 2020
      },
      {
        "name": "Pas Besoin De Raison",
        "album": "Alt F4",
        "year": 2020
      },
      {
        "name": "N.",
        "album": "Alt F4",
        "year": 2019
      },
      {
        "name": "Indélébile (feat. Nemir)",
        "album": "Alt F4",
        "year": 2020
      },
      {
        "name": "Outro",
        "album": "Marabout",
        "year": 2018
      },
      {
        "name": "Interlude",
        "album": "Marabout",
        "year": 2018
      },
      {
        "name": "Cours De Danse",
        "album": "Marabout",
        "year": 2018
      },
      {
        "name": "MALADRESSE",
        "album": "AU REVOIR SIMEON",
        "year": 2023
      },
      {
        "name": "GIGI",
        "album": "AU REVOIR SIMEON",
        "year": 2023
      },
      {
        "name": "KOBE",
        "album": "AU REVOIR SIMEON",
        "year": 2023
      },
      {
        "name": "UN SEUL CIEL (feat. Prince Waly)",
        "album": "AU REVOIR SIMEON",
        "year": 2023
      },
      {
        "name": "2YEUX",
        "album": "AU REVOIR SIMEON",
        "year": 2023
      },
      {
        "name": "MOSAÏQUE",
        "album": "AU REVOIR SIMEON",
        "year": 2023
      },
      {
        "name": "REC030221",
        "album": "AU REVOIR SIMEON",
        "year": 2023
      },
      {
        "name": "MAGRITTE",
        "album": "AU REVOIR SIMEON",
        "year": 2023
      },
      {
        "name": "REYKJAVIK (feat. YG Pablo)",
        "album": "AU REVOIR SIMEON",
        "year": 2023
      },
      {
        "name": "NO FUTURE",
        "album": "AU REVOIR SIMEON",
        "year": 2023
      },
      {
        "name": "MELANOME",
        "album": "AU REVOIR SIMEON",
        "year": 2023
      },
      {
        "name": "MAFIA",
        "album": "AU REVOIR SIMEON",
        "year": 2023
      },
      {
        "name": ".WAV",
        "album": "AU REVOIR SIMEON",
        "year": 2023
      },
      {
        "name": "VISION",
        "album": "AU REVOIR SIMEON",
        "year": 2023
      },
      {
        "name": "2:22",
        "album": "AU REVOIR SIMEON",
        "year": 2023
      }
    ]
  },
  {
    "name": "sean",
    "color": "#639922",
    "genre": "Hip-Hop/Rap",
    "trackCount": 32,
    "albums": [
      "Restez Prince",
      "OÙ EST PASSÉ ZEUDOG ?",
      "à moitié loup",
      "MP3+WAV",
      "Mercutio - EP"
    ],
    "tracks": [
      {
        "name": "Sunshine",
        "album": "MP3+WAV",
        "year": 2020
      },
      {
        "name": "prix à payer",
        "album": "à moitié loup",
        "year": 2020
      },
      {
        "name": "laquelle",
        "album": "à moitié loup",
        "year": 2020
      },
      {
        "name": "Symphonie",
        "album": "MP3+WAV",
        "year": 2020
      },
      {
        "name": "sur la moon",
        "album": "à moitié loup",
        "year": 2020
      },
      {
        "name": "Mi Hijo",
        "album": "Mercutio - EP",
        "year": 2019
      },
      {
        "name": "Pourquoi",
        "album": "Mercutio - EP",
        "year": 2019
      },
      {
        "name": "LES OISEAUX TOMBENT DU CIEL",
        "album": "OÙ EST PASSÉ ZEUDOG ?",
        "year": 2023
      },
      {
        "name": "J'AI FAILLI",
        "album": "OÙ EST PASSÉ ZEUDOG ?",
        "year": 2024
      },
      {
        "name": "COUPER DES CONFETTIS",
        "album": "OÙ EST PASSÉ ZEUDOG ?",
        "year": 2023
      },
      {
        "name": "POURQUOI MOI ?",
        "album": "OÙ EST PASSÉ ZEUDOG ?",
        "year": 2023
      },
      {
        "name": "ENTRE LA LUNE ET MOI",
        "album": "OÙ EST PASSÉ ZEUDOG ?",
        "year": 2024
      },
      {
        "name": "SOUVIENS-TOI",
        "album": "OÙ EST PASSÉ ZEUDOG ?",
        "year": 2024
      },
      {
        "name": "NIQUE UN FACHO",
        "album": "OÙ EST PASSÉ ZEUDOG ?",
        "year": 2024
      },
      {
        "name": "FEUILLE SHIT CLOPE",
        "album": "OÙ EST PASSÉ ZEUDOG ?",
        "year": 2024
      },
      {
        "name": "LÈVE TON DOIGT",
        "album": "OÙ EST PASSÉ ZEUDOG ?",
        "year": 2024
      },
      {
        "name": "LES FILLES",
        "album": "OÙ EST PASSÉ ZEUDOG ?",
        "year": 2024
      },
      {
        "name": "ARRÊTE DE PLEURER",
        "album": "OÙ EST PASSÉ ZEUDOG ?",
        "year": 2024
      },
      {
        "name": "LES CROCODILES",
        "album": "OÙ EST PASSÉ ZEUDOG ?",
        "year": 2024
      },
      {
        "name": "Plus jeune",
        "album": "Restez Prince",
        "year": 2022
      },
      {
        "name": "Train de vie",
        "album": "Restez Prince",
        "year": 2022
      },
      {
        "name": "Piano Black",
        "album": "Restez Prince",
        "year": 2022
      },
      {
        "name": "Janeiro",
        "album": "Restez Prince",
        "year": 2022
      },
      {
        "name": "Ma place",
        "album": "Restez Prince",
        "year": 2022
      },
      {
        "name": "Hey Baby (feat. S.Pri Noir)",
        "album": "Restez Prince",
        "year": 2022
      },
      {
        "name": "Mauvais marins",
        "album": "Restez Prince",
        "year": 2022
      },
      {
        "name": "Diamant",
        "album": "Restez Prince",
        "year": 2021
      },
      {
        "name": "Zeudog vie",
        "album": "Restez Prince",
        "year": 2022
      },
      {
        "name": "Omax",
        "album": "Restez Prince",
        "year": 2021
      },
      {
        "name": "Square",
        "album": "Restez Prince",
        "year": 2022
      },
      {
        "name": "Vide",
        "album": "Restez Prince",
        "year": 2022
      },
      {
        "name": "Coup du berger",
        "album": "Restez Prince",
        "year": 2022
      }
    ]
  },
  {
    "name": "ROSALÍA",
    "color": "#993556",
    "genre": "Pop Latino",
    "trackCount": 32,
    "albums": [
      "MOTOMAMI +",
      "LUX"
    ],
    "tracks": [
      {
        "name": "Sexo, Violencia y Llantas",
        "album": "LUX",
        "year": 2025
      },
      {
        "name": "Reliquia",
        "album": "LUX",
        "year": 2025
      },
      {
        "name": "Divinize",
        "album": "LUX",
        "year": 2025
      },
      {
        "name": "Porcelana",
        "album": "LUX",
        "year": 2025
      },
      {
        "name": "Mio Cristo Piange Diamanti",
        "album": "LUX",
        "year": 2025
      },
      {
        "name": "Mundo Nuevo",
        "album": "LUX",
        "year": 2025
      },
      {
        "name": "De Madrugá",
        "album": "LUX",
        "year": 2025
      },
      {
        "name": "Dios Es Un Stalker",
        "album": "LUX",
        "year": 2025
      },
      {
        "name": "La Yugular",
        "album": "LUX",
        "year": 2025
      },
      {
        "name": "Sauvignon Blanc",
        "album": "LUX",
        "year": 2025
      },
      {
        "name": "Magnolias",
        "album": "LUX",
        "year": 2025
      },
      {
        "name": "SAOKO",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "CANDY",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "BULERÍAS",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "CHICKEN TERIYAKI",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "HENTAI",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "BIZCOCHITO",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "G3 N15",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "MOTOMAMI",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "DIABLO",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "DELIRIO DE GRANDEZA",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "CUUUUuuuuuute",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "Abcdefg",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "COMO UN G",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "Thank Yu :)",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "DESPECHÁ",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "LA FAMA (Live en el Palau Sant Jordi)",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "AISLAMIENTO",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "LA KILIÉ",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "LAX",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "CHIRI",
        "album": "MOTOMAMI +",
        "year": 2022
      },
      {
        "name": "SAKURA",
        "album": "MOTOMAMI +",
        "year": 2022
      }
    ]
  },
  {
    "name": "H JeuneCrack",
    "color": "#0F6E56",
    "genre": "Hip-Hop/Rap",
    "trackCount": 32,
    "albums": [
      "1er Mouvement",
      "3ème Cycle",
      "2ème Mouvement",
      "2ème Cycle",
      "Mathématiques - Single"
    ],
    "tracks": [
      {
        "name": "Kaboul Kitchen",
        "album": "1er Mouvement",
        "year": 2025
      },
      {
        "name": "Sade",
        "album": "1er Mouvement",
        "year": 2025
      },
      {
        "name": "Le beau geste",
        "album": "1er Mouvement",
        "year": 2025
      },
      {
        "name": "Le gros caillou",
        "album": "1er Mouvement",
        "year": 2025
      },
      {
        "name": "Manita",
        "album": "1er Mouvement",
        "year": 2025
      },
      {
        "name": "Hustleuse",
        "album": "1er Mouvement",
        "year": 2025
      },
      {
        "name": "Deuxième peau",
        "album": "1er Mouvement",
        "year": 2025
      },
      {
        "name": "Kassded",
        "album": "1er Mouvement",
        "year": 2025
      },
      {
        "name": "Bienvenue à Gattaca",
        "album": "2ème Cycle",
        "year": 2022
      },
      {
        "name": "Intelligent",
        "album": "2ème Cycle",
        "year": 2022
      },
      {
        "name": "Dromadaire",
        "album": "2ème Cycle",
        "year": 2022
      },
      {
        "name": "Métaphysique",
        "album": "2ème Cycle",
        "year": 2022
      },
      {
        "name": "L'eau chaude",
        "album": "2ème Cycle",
        "year": 2022
      },
      {
        "name": "Chambre 8344",
        "album": "2ème Cycle",
        "year": 2022
      },
      {
        "name": "Parle vrai",
        "album": "2ème Cycle",
        "year": 2022
      },
      {
        "name": "La Trinité",
        "album": "3ème Cycle",
        "year": 2022
      },
      {
        "name": "Musée",
        "album": "3ème Cycle",
        "year": 2022
      },
      {
        "name": "3 Meufs",
        "album": "3ème Cycle",
        "year": 2022
      },
      {
        "name": "Vrai Crack",
        "album": "3ème Cycle",
        "year": 2022
      },
      {
        "name": "La Cantine",
        "album": "3ème Cycle",
        "year": 2022
      },
      {
        "name": "L'éther",
        "album": "3ème Cycle",
        "year": 2022
      },
      {
        "name": "Le joueur le plus précieux",
        "album": "3ème Cycle",
        "year": 2022
      },
      {
        "name": "Mr le Prouveur (fin alternative)",
        "album": "3ème Cycle",
        "year": 2022
      },
      {
        "name": "Mathématiques",
        "album": "Mathématiques - Single",
        "year": 2026
      },
      {
        "name": "Piscine intérieure",
        "album": "2ème Mouvement",
        "year": 2026
      },
      {
        "name": "Frida skrilla",
        "album": "2ème Mouvement",
        "year": 2026
      },
      {
        "name": "Dogme95",
        "album": "2ème Mouvement",
        "year": 2026
      },
      {
        "name": "Mathématiques",
        "album": "2ème Mouvement",
        "year": 2026
      },
      {
        "name": "Jordan4",
        "album": "2ème Mouvement",
        "year": 2026
      },
      {
        "name": "Kodak Black",
        "album": "2ème Mouvement",
        "year": 2026
      },
      {
        "name": "37degrés",
        "album": "2ème Mouvement",
        "year": 2026
      },
      {
        "name": "L'origine",
        "album": "2ème Mouvement",
        "year": 2026
      }
    ]
  },
  {
    "name": "Columbine",
    "color": "#BA7517",
    "genre": "Hip-Hop/Rap",
    "trackCount": 31,
    "albums": [
      "Enfants terribles",
      "Adieu bientôt",
      "Clubbing For Columbine",
      "Adieu, au revoir",
      "Cache-Cache - Single",
      "Pierre, feuille, papier, ciseaux - Single"
    ],
    "tracks": [
      {
        "name": "Les Prélis",
        "album": "Clubbing For Columbine",
        "year": 2016
      },
      {
        "name": "Fireworks",
        "album": "Enfants terribles",
        "year": 2017
      },
      {
        "name": "Enfants terribles",
        "album": "Enfants terribles",
        "year": 2017
      },
      {
        "name": "Rémi",
        "album": "Enfants terribles",
        "year": 2017
      },
      {
        "name": "College Rules",
        "album": "Enfants terribles",
        "year": 2017
      },
      {
        "name": "Woohoo",
        "album": "Enfants terribles",
        "year": 2017
      },
      {
        "name": "Talkie-walkie",
        "album": "Enfants terribles",
        "year": 2017
      },
      {
        "name": "Été triste",
        "album": "Enfants terribles",
        "year": 2017
      },
      {
        "name": "Les caméléons",
        "album": "Enfants terribles",
        "year": 2017
      },
      {
        "name": "1000",
        "album": "Enfants terribles",
        "year": 2017
      },
      {
        "name": "Temps électrique",
        "album": "Enfants terribles",
        "year": 2017
      },
      {
        "name": "Dans ma chambre",
        "album": "Enfants terribles",
        "year": 2017
      },
      {
        "name": "Mode avion",
        "album": "Enfants terribles",
        "year": 2017
      },
      {
        "name": "Château de sable",
        "album": "Enfants terribles",
        "year": 2017
      },
      {
        "name": "C'est pas grave",
        "album": "Adieu, au revoir",
        "year": 2019
      },
      {
        "name": "Adieu bientôt",
        "album": "Adieu, au revoir",
        "year": 2018
      },
      {
        "name": "Cache-Cache",
        "album": "Cache-Cache - Single",
        "year": 2018
      },
      {
        "name": "Pierre, feuille, papier, ciseaux",
        "album": "Pierre, feuille, papier, ciseaux - Single",
        "year": 2017
      },
      {
        "name": "Age d'or",
        "album": "Adieu bientôt",
        "year": 2018
      },
      {
        "name": "Borderline",
        "album": "Adieu bientôt",
        "year": 2018
      },
      {
        "name": "Mandragore",
        "album": "Clubbing For Columbine",
        "year": 2016
      },
      {
        "name": "Dom Pérignon",
        "album": "Clubbing For Columbine",
        "year": 2016
      },
      {
        "name": "Fleurs Du Mal",
        "album": "Clubbing For Columbine",
        "year": 2016
      },
      {
        "name": "Boîte noire",
        "album": "Adieu bientôt",
        "year": 2018
      },
      {
        "name": "La gloire ou l'asile",
        "album": "Adieu bientôt",
        "year": 2018
      },
      {
        "name": "Vampire",
        "album": "Adieu, au revoir",
        "year": 2019
      },
      {
        "name": "Indochine",
        "album": "Adieu bientôt",
        "year": 2018
      },
      {
        "name": "Bart Simpson",
        "album": "Adieu bientôt",
        "year": 2018
      },
      {
        "name": "Le bal des fous",
        "album": "Adieu bientôt",
        "year": 2018
      },
      {
        "name": "Topless",
        "album": "Adieu bientôt",
        "year": 2018
      },
      {
        "name": "Age d'or",
        "album": "Adieu, au revoir",
        "year": 2018
      }
    ]
  },
  {
    "name": "Bruno Mars",
    "color": "#534AB7",
    "genre": "Pop",
    "trackCount": 31,
    "albums": [
      "Doo-Wops & Hooligans",
      "Unorthodox Jukebox",
      "24K Magic"
    ],
    "tracks": [
      {
        "name": "Young Girls",
        "album": "Unorthodox Jukebox",
        "year": 2012
      },
      {
        "name": "Locked Out of Heaven",
        "album": "Unorthodox Jukebox",
        "year": 2012
      },
      {
        "name": "Gorilla",
        "album": "Unorthodox Jukebox",
        "year": 2012
      },
      {
        "name": "Treasure",
        "album": "Unorthodox Jukebox",
        "year": 2012
      },
      {
        "name": "Moonshine",
        "album": "Unorthodox Jukebox",
        "year": 2012
      },
      {
        "name": "When I Was Your Man",
        "album": "Unorthodox Jukebox",
        "year": 2012
      },
      {
        "name": "Natalie",
        "album": "Unorthodox Jukebox",
        "year": 2012
      },
      {
        "name": "Show Me",
        "album": "Unorthodox Jukebox",
        "year": 2012
      },
      {
        "name": "Money Make Her Smile",
        "album": "Unorthodox Jukebox",
        "year": 2012
      },
      {
        "name": "If I Knew",
        "album": "Unorthodox Jukebox",
        "year": 2012
      },
      {
        "name": "24K Magic",
        "album": "24K Magic",
        "year": 2016
      },
      {
        "name": "Chunky",
        "album": "24K Magic",
        "year": 2016
      },
      {
        "name": "Perm",
        "album": "24K Magic",
        "year": 2016
      },
      {
        "name": "That's What I Like",
        "album": "24K Magic",
        "year": 2016
      },
      {
        "name": "Versace On The Floor",
        "album": "24K Magic",
        "year": 2016
      },
      {
        "name": "Straight Up & Down",
        "album": "24K Magic",
        "year": 2016
      },
      {
        "name": "Calling All My Lovelies",
        "album": "24K Magic",
        "year": 2016
      },
      {
        "name": "Finesse",
        "album": "24K Magic",
        "year": 2016
      },
      {
        "name": "Too Good to Say Goodbye",
        "album": "24K Magic",
        "year": 2016
      },
      {
        "name": "Grenade",
        "album": "Doo-Wops & Hooligans",
        "year": 2010
      },
      {
        "name": "Just the Way You Are",
        "album": "Doo-Wops & Hooligans",
        "year": 2010
      },
      {
        "name": "Our First Time",
        "album": "Doo-Wops & Hooligans",
        "year": 2010
      },
      {
        "name": "Runaway Baby",
        "album": "Doo-Wops & Hooligans",
        "year": 2010
      },
      {
        "name": "The Lazy Song",
        "album": "Doo-Wops & Hooligans",
        "year": 2010
      },
      {
        "name": "Marry You",
        "album": "Doo-Wops & Hooligans",
        "year": 2010
      },
      {
        "name": "Talking to the Moon",
        "album": "Doo-Wops & Hooligans",
        "year": 2010
      },
      {
        "name": "Liquor Store Blues (feat. Damian \"Jr. Gong\" Marley)",
        "album": "Doo-Wops & Hooligans",
        "year": 2010
      },
      {
        "name": "Count on Me",
        "album": "Doo-Wops & Hooligans",
        "year": 2010
      },
      {
        "name": "The Other Side (feat. CeeLo Green and B.o.B)",
        "album": "Doo-Wops & Hooligans",
        "year": 2010
      },
      {
        "name": "Somewhere in Brooklyn (Bonus Track)",
        "album": "Doo-Wops & Hooligans",
        "year": 2010
      },
      {
        "name": "Talking to the Moon (Acoustic Piano) [Bonus Track]",
        "album": "Doo-Wops & Hooligans",
        "year": 2010
      }
    ]
  },
  {
    "name": "Makala",
    "color": "#993C1D",
    "genre": "Hip-Hop/Rap",
    "trackCount": 31,
    "albums": [
      "Radio Suicide",
      "YAMOTO",
      "Grünt Tunes",
      "TRIBUS DISPARUES - Single",
      "HOTEL YOTSUYA - Single"
    ],
    "tracks": [
      {
        "name": "Ginger juice",
        "album": "Grünt Tunes",
        "year": 2017
      },
      {
        "name": "TRIBUS DISPARUES",
        "album": "TRIBUS DISPARUES - Single",
        "year": 2025
      },
      {
        "name": "Savannah",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "ICICÉLAO",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Bankable",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Goatier",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Fashion Week (feat. Rico TK)",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Brigitte Barbade",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Big Boy Mak (Bimbo Version)",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Hit Machine (feat. Ike Ortiz)",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Radio Suicide",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "King Pistol (feat. Slimka)",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Margaret Dry",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Civilisation (feat. Varnish La Piscine & Mr. Lacroix)",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Liberty",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Sad Boy",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Movie",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "McEnroe",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Tante VV",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "S.O.S (feat. Varnish La Piscine)",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Nice Smile / Mr. Synopsis",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Le roi de la Floride",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "Outro (feat. Varnish La Piscine)",
        "album": "Radio Suicide",
        "year": 2019
      },
      {
        "name": "YAMOTEMA",
        "album": "YAMOTO",
        "year": 2026
      },
      {
        "name": "PRENDS SOIN DE TOI",
        "album": "YAMOTO",
        "year": 2026
      },
      {
        "name": "TRIBUS DISPARUES",
        "album": "YAMOTO",
        "year": 2025
      },
      {
        "name": "LOKETO",
        "album": "YAMOTO",
        "year": 2026
      },
      {
        "name": "HOTEL YOTSUYA",
        "album": "YAMOTO",
        "year": 2025
      },
      {
        "name": "DEMBOUZ",
        "album": "YAMOTO",
        "year": 2026
      },
      {
        "name": "WHIM MASERATI",
        "album": "YAMOTO",
        "year": 2026
      },
      {
        "name": "HOTEL YOTSUYA",
        "album": "HOTEL YOTSUYA - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "Guru",
    "color": "#085041",
    "genre": "Jazz",
    "trackCount": 31,
    "albums": [
      "Jazzmatazz Volume II: The New Reality",
      "Jazzmatazz, Vol.1"
    ],
    "tracks": [
      {
        "name": "Introduction",
        "album": "Jazzmatazz, Vol.1",
        "year": 1993
      },
      {
        "name": "Loungin'",
        "album": "Jazzmatazz, Vol.1",
        "year": 1993
      },
      {
        "name": "When You're Near",
        "album": "Jazzmatazz, Vol.1",
        "year": 1993
      },
      {
        "name": "Transit Ride",
        "album": "Jazzmatazz, Vol.1",
        "year": 1993
      },
      {
        "name": "No Time to Play",
        "album": "Jazzmatazz, Vol.1",
        "year": 1993
      },
      {
        "name": "Down the Backstreets",
        "album": "Jazzmatazz, Vol.1",
        "year": 1993
      },
      {
        "name": "Respectful Dedications",
        "album": "Jazzmatazz, Vol.1",
        "year": 1993
      },
      {
        "name": "Take a Look (At Yourself)",
        "album": "Jazzmatazz, Vol.1",
        "year": 1993
      },
      {
        "name": "Trust Me",
        "album": "Jazzmatazz, Vol.1",
        "year": 1993
      },
      {
        "name": "Slicker Than Most",
        "album": "Jazzmatazz, Vol.1",
        "year": 1993
      },
      {
        "name": "Le Bien, Le Mal",
        "album": "Jazzmatazz, Vol.1",
        "year": 1993
      },
      {
        "name": "Sights in the City",
        "album": "Jazzmatazz, Vol.1",
        "year": 1993
      },
      {
        "name": "Intro (Light It Up) / Jazzalude I / New Reality Style",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Lifesaver (feat. Baybe)",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Living In This World (feat. Sweet Sable)",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Looking Through Darkness (feat. Mica Paris)",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Skit A (Interview) / Watch What You Say [feat. Chaka Khan & Branford Marsalis]",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Jazzalude II: Defining Purpose",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "For You (feat. Meshell Ndegeocello & Kenny Garrett)",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Lost Souls (feat. Darren Galea, Jason Kay, Stuart Zender & Wallace Collins)",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Insert B (The Real Deal) / Nobody Knows [feat. Shara Nelson & Jan Kincaid]",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Jazzalude III: Hip Hop As A Way Of Life",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Respect The Architect (feat. Bahamadia, Ramsey Lewis, Brian Holt & DJ Scratch)",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Feel The Music (feat. Guru's Jazzmatazz, Paul Ferguson & Baybe)",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Young Ladies (feat. DJ Sean-ski, Big Shug, Kenny Garrett, Reuben Wilson, Brian Holt, Patra & Kool Keith)",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "The Traveler (feat. Donald Byrd)",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Jazzalude IV: Maintaining Focus",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Count Your Blessings (feat. Brian Holt & Bernard Purdie)",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Choice Of Weapons (feat. Courtney Pine, D.C. Lee, Gus Da Vigilante & DENNIS MITCHELL)",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Something In The Past (feat. Freddie Hubbard)",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      },
      {
        "name": "Skit B (Alot On My Mind) / Revelation [feat. Ronny Jordan]",
        "album": "Jazzmatazz Volume II: The New Reality",
        "year": 1995
      }
    ]
  },
  {
    "name": "Zed",
    "color": "#854F0B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 31,
    "albums": [
      "Malcom",
      "NEPHILIM, Pt. 1"
    ],
    "tracks": [
      {
        "name": "Tassoultante",
        "album": "NEPHILIM, Pt. 1",
        "year": 2026
      },
      {
        "name": "Mauboussin",
        "album": "NEPHILIM, Pt. 1",
        "year": 2026
      },
      {
        "name": "Loyal",
        "album": "NEPHILIM, Pt. 1",
        "year": 2025
      },
      {
        "name": "5 sur 5",
        "album": "NEPHILIM, Pt. 1",
        "year": 2026
      },
      {
        "name": "Pick Up",
        "album": "NEPHILIM, Pt. 1",
        "year": 2026
      },
      {
        "name": "Calendrier",
        "album": "NEPHILIM, Pt. 1",
        "year": 2026
      },
      {
        "name": "LMPL",
        "album": "NEPHILIM, Pt. 1",
        "year": 2025
      },
      {
        "name": "8013",
        "album": "NEPHILIM, Pt. 1",
        "year": 2026
      },
      {
        "name": "30 Mètres",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Nephilim",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Pour de vrai",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Solitaire (feat. SDM)",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Shaggy (feat. Nekfeu)",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Celle-ci",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Interlude (Malcom)",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "#ZEDEUDÉ (60)",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Ice (feat. Laylow)",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "F.A.M",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Süle (feat. Zola & Kore)",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Douleurs",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Mauvaise mine (feat. Ziak)",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Mini moi",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "TPLS",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Malcom X (feat. Josman & Jolagreen23)",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Long Life",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Fame (feat. Green Montana)",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Hockey (feat. La Mano 1.9)",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Sac à 3k",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "M3",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "Sauron",
        "album": "Malcom",
        "year": 2024
      },
      {
        "name": "SKY",
        "album": "Malcom",
        "year": 2024
      }
    ]
  },
  {
    "name": "Elton John",
    "color": "#72243E",
    "genre": "Rock",
    "trackCount": 30,
    "albums": [
      "Goodbye Yellow Brick Road (2014 Remaster)",
      "Captain Fantastic and the Brown Dirt Cowboy"
    ],
    "tracks": [
      {
        "name": "Captain Fantastic and the Brown Dirt Cowboy",
        "album": "Captain Fantastic and the Brown Dirt Cowboy",
        "year": 1975
      },
      {
        "name": "Tower of Babel",
        "album": "Captain Fantastic and the Brown Dirt Cowboy",
        "year": 1975
      },
      {
        "name": "Bitter Fingers",
        "album": "Captain Fantastic and the Brown Dirt Cowboy",
        "year": 1975
      },
      {
        "name": "Tell Me When the Whistle Blows",
        "album": "Captain Fantastic and the Brown Dirt Cowboy",
        "year": 1975
      },
      {
        "name": "Someone Saved My Life Tonight",
        "album": "Captain Fantastic and the Brown Dirt Cowboy",
        "year": 1975
      },
      {
        "name": "(Gotta Get A) Meal Ticket",
        "album": "Captain Fantastic and the Brown Dirt Cowboy",
        "year": 1975
      },
      {
        "name": "Better Off Dead",
        "album": "Captain Fantastic and the Brown Dirt Cowboy",
        "year": 1975
      },
      {
        "name": "Writing",
        "album": "Captain Fantastic and the Brown Dirt Cowboy",
        "year": 1975
      },
      {
        "name": "We All Fall In Love Sometimes",
        "album": "Captain Fantastic and the Brown Dirt Cowboy",
        "year": 1975
      },
      {
        "name": "Curtains",
        "album": "Captain Fantastic and the Brown Dirt Cowboy",
        "year": 1975
      },
      {
        "name": "Lucy In the Sky With Diamonds",
        "album": "Captain Fantastic and the Brown Dirt Cowboy",
        "year": 1974
      },
      {
        "name": "One Day At a Time",
        "album": "Captain Fantastic and the Brown Dirt Cowboy",
        "year": 1974
      },
      {
        "name": "Philadelphia Freedom",
        "album": "Captain Fantastic and the Brown Dirt Cowboy",
        "year": 1975
      },
      {
        "name": "Funeral for a Friend / Love Lies Bleeding (2014 Remaster)",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "Candle In the Wind (2014 Remaster)",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "Bennie and the Jets (2014 Remaster)",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "Goodbye Yellow Brick Road (2014 Remaster)",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "This Song Has No Title (2014 Remaster)",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "Grey Seal (2014 Remaster)",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "Jamaica Jerk-Off (2014 Remaster)",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "I've Seen That Movie Too (2014 Remaster)",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "Sweet Painted Lady (2014 Remaster)",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "The Ballad of Danny Bailey (1909-1934) [2014 Remaster]",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "Dirty Little Girl (2014 Remaster)",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "All the Girls Love Alice (2014 Remaster)",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "Your Sister Can't Twist (But She Can Rock 'N Roll) [2014 Remaster]",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "Saturday Night's Alright for Fighting (2014 Remaster)",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "Roy Rogers (2014 Remaster)",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "Social Disease (2014 Remaster)",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      },
      {
        "name": "Harmony (2014 Remaster)",
        "album": "Goodbye Yellow Brick Road (2014 Remaster)",
        "year": 1973
      }
    ]
  },
  {
    "name": "Joke",
    "color": "#5DCAA5",
    "genre": "Hip-Hop/Rap",
    "trackCount": 30,
    "albums": [
      "Ateyaba",
      "PANDEMIC!"
    ],
    "tracks": [
      {
        "name": "Rockin' Drunker JOKE",
        "album": "PANDEMIC!",
        "year": 2023
      },
      {
        "name": "PandemicDream～光差す方へ～",
        "album": "PANDEMIC!",
        "year": 2023
      },
      {
        "name": "素晴らしい日々",
        "album": "PANDEMIC!",
        "year": 2023
      },
      {
        "name": "ノンフィクション",
        "album": "PANDEMIC!",
        "year": 2023
      },
      {
        "name": "バスタブ",
        "album": "PANDEMIC!",
        "year": 2023
      },
      {
        "name": "トランジスタ",
        "album": "PANDEMIC!",
        "year": 2023
      },
      {
        "name": "Moon,Call me out",
        "album": "PANDEMIC!",
        "year": 2023
      },
      {
        "name": "Shiny Days",
        "album": "PANDEMIC!",
        "year": 2023
      },
      {
        "name": "Dancin' in the rain",
        "album": "PANDEMIC!",
        "year": 2023
      },
      {
        "name": "Old Friend",
        "album": "PANDEMIC!",
        "year": 2023
      },
      {
        "name": "私が死ねばよかった",
        "album": "PANDEMIC!",
        "year": 2023
      },
      {
        "name": "Pharaon",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "Majeur En L'Air",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "Black Card (feat. Pusha T)",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "Menace Interlude",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "Menace",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "Jen Selter",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "New Jack City",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "Miley (feat. Dosseh)",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "On est sur les nerfs",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "Venus",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "French Riviera (feat. Jhené Aiko)",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "Casino",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "4 Pattes",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "Oyé Sapapaya (feat. Titan)",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "Ateyaba",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "Niamtougou (Outro)",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "Anubis (feat. Bip's)",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "Amistad",
        "album": "Ateyaba",
        "year": 2014
      },
      {
        "name": "Sphinx (feat. Rim'K & Seth Gueko)",
        "album": "Ateyaba",
        "year": 2014
      }
    ]
  },
  {
    "name": "Theodora",
    "color": "#F0997B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 29,
    "albums": [
      "MEGA BBL",
      "BAD BOY LOVESTORY",
      "KONGOLESE SOUS BBL - Single",
      "Miss Kitoko - Single",
      "Des mythos - Single"
    ],
    "tracks": [
      {
        "name": "FNG",
        "album": "BAD BOY LOVESTORY",
        "year": 2024
      },
      {
        "name": "FASHION DESIGNA",
        "album": "BAD BOY LOVESTORY",
        "year": 2024
      },
      {
        "name": "KONGOLESE SOUS BBL",
        "album": "BAD BOY LOVESTORY",
        "year": 2024
      },
      {
        "name": "BAD BOY LOVESTORY",
        "album": "BAD BOY LOVESTORY",
        "year": 2024
      },
      {
        "name": "SORRY SORRY SO",
        "album": "BAD BOY LOVESTORY",
        "year": 2024
      },
      {
        "name": "Entracte : Histoire d’amour, Commerarges et Chardonney",
        "album": "BAD BOY LOVESTORY",
        "year": 2024
      },
      {
        "name": "ILS ME RIENT TOUS AU NEZ",
        "album": "BAD BOY LOVESTORY",
        "year": 2024
      },
      {
        "name": "#IL",
        "album": "BAD BOY LOVESTORY",
        "year": 2024
      },
      {
        "name": "UN MEILLEUR NOUS",
        "album": "BAD BOY LOVESTORY",
        "year": 2024
      },
      {
        "name": "MON CASQUE",
        "album": "BAD BOY LOVESTORY",
        "year": 2024
      },
      {
        "name": "Doutes en boucle",
        "album": "BAD BOY LOVESTORY",
        "year": 2024
      },
      {
        "name": "PAPA <3",
        "album": "MEGA BBL",
        "year": 2025
      },
      {
        "name": "FNG",
        "album": "MEGA BBL",
        "year": 2024
      },
      {
        "name": "FASHION DESIGNA",
        "album": "MEGA BBL",
        "year": 2024
      },
      {
        "name": "I WANNA",
        "album": "MEGA BBL",
        "year": 2025
      },
      {
        "name": "MON BÉBÉ (feat. Brazy)",
        "album": "MEGA BBL",
        "year": 2025
      },
      {
        "name": "BAD BOY LOVESTORY",
        "album": "MEGA BBL",
        "year": 2024
      },
      {
        "name": "SORRY SORRY SO",
        "album": "MEGA BBL",
        "year": 2024
      },
      {
        "name": "Entracte : Histoire d’amour, Commérages et Chardonnay",
        "album": "MEGA BBL",
        "year": 2024
      },
      {
        "name": "BAD BOY LACKED",
        "album": "MEGA BBL",
        "year": 2025
      },
      {
        "name": "ILS ME RIENT TOUS AU NEZ",
        "album": "MEGA BBL",
        "year": 2024
      },
      {
        "name": "UN MEILLEUR NOUS",
        "album": "MEGA BBL",
        "year": 2024
      },
      {
        "name": "#IL",
        "album": "MEGA BBL",
        "year": 2024
      },
      {
        "name": "DO U WANNA ?",
        "album": "MEGA BBL",
        "year": 2024
      },
      {
        "name": "MON CASQUE",
        "album": "MEGA BBL",
        "year": 2024
      },
      {
        "name": "Doutes en boucle",
        "album": "MEGA BBL",
        "year": 2024
      },
      {
        "name": "KONGOLESE SOUS BBL",
        "album": "KONGOLESE SOUS BBL - Single",
        "year": 2024
      },
      {
        "name": "Miss Kitoko",
        "album": "Miss Kitoko - Single",
        "year": 2026
      },
      {
        "name": "Des mythos",
        "album": "Des mythos - Single",
        "year": 2026
      }
    ]
  },
  {
    "name": "Pixies",
    "color": "#85B7EB",
    "genre": "Alternative",
    "trackCount": 29,
    "albums": [
      "Surfer Rosa (2007 Remaster)",
      "Doolittle",
      "Pixies at the BBC, 1988-91",
      "Death to the Pixies",
      "Wave of Mutilation: Best of Pixies",
      "Debaser - EP",
      "Here Comes Your Man - EP",
      "Can You Ever Forgive Me? (Original Motion Picture Soundtrack)"
    ],
    "tracks": [
      {
        "name": "Debaser (Cliff Norrell Mix)",
        "album": "Debaser - EP",
        "year": 1997
      },
      {
        "name": "Tame (John Peel Session (9th October 1988))",
        "album": "Pixies at the BBC, 1988-91",
        "year": 1998
      },
      {
        "name": "Wave of Mutilation",
        "album": "Death to the Pixies",
        "year": 1989
      },
      {
        "name": "I Bleed",
        "album": "Doolittle",
        "year": 1989
      },
      {
        "name": "Here Comes Your Man",
        "album": "Here Comes Your Man - EP",
        "year": 1989
      },
      {
        "name": "Dead",
        "album": "Doolittle",
        "year": 1989
      },
      {
        "name": "Monkey Gone to Heaven (Mark Goodier Session (18th August 1990))",
        "album": "Pixies at the BBC, 1988-91",
        "year": 1998
      },
      {
        "name": "Mr. Grieves",
        "album": "Doolittle",
        "year": 1989
      },
      {
        "name": "Crackity Jones",
        "album": "Doolittle",
        "year": 1989
      },
      {
        "name": "La La Love You",
        "album": "Doolittle",
        "year": 1989
      },
      {
        "name": "No. 13 Baby",
        "album": "Doolittle",
        "year": 1989
      },
      {
        "name": "There Goes My Gun",
        "album": "Can You Ever Forgive Me? (Original Motion Picture Soundtrack)",
        "year": 1989
      },
      {
        "name": "Hey",
        "album": "Wave of Mutilation: Best of Pixies",
        "year": 1988
      },
      {
        "name": "Silver",
        "album": "Doolittle",
        "year": 1989
      },
      {
        "name": "Gouge Away",
        "album": "Death to the Pixies",
        "year": 1989
      },
      {
        "name": "Bone Machine (2007 Remaster)",
        "album": "Surfer Rosa (2007 Remaster)",
        "year": 1988
      },
      {
        "name": "Break My Body (2007 Remaster)",
        "album": "Surfer Rosa (2007 Remaster)",
        "year": 1988
      },
      {
        "name": "Something Against You (2007 Remaster)",
        "album": "Surfer Rosa (2007 Remaster)",
        "year": 1988
      },
      {
        "name": "Broken Face (2007 Remaster)",
        "album": "Surfer Rosa (2007 Remaster)",
        "year": 1988
      },
      {
        "name": "Gigantic (2007 Remaster)",
        "album": "Surfer Rosa (2007 Remaster)",
        "year": 1988
      },
      {
        "name": "River Euphrates (2007 Remaster)",
        "album": "Surfer Rosa (2007 Remaster)",
        "year": 1988
      },
      {
        "name": "Where Is My Mind? (2007 Remaster)",
        "album": "Surfer Rosa (2007 Remaster)",
        "year": 1988
      },
      {
        "name": "Cactus (2007 Remaster)",
        "album": "Surfer Rosa (2007 Remaster)",
        "year": 1988
      },
      {
        "name": "Tony's Theme (2007 Remaster)",
        "album": "Surfer Rosa (2007 Remaster)",
        "year": 1988
      },
      {
        "name": "Oh My Golly! (2007 Remaster)",
        "album": "Surfer Rosa (2007 Remaster)",
        "year": 1988
      },
      {
        "name": "Vamos (Surfer Rosa) [2007 Remaster]",
        "album": "Surfer Rosa (2007 Remaster)",
        "year": 1988
      },
      {
        "name": "I'm Amazed (2007 Remaster)",
        "album": "Surfer Rosa (2007 Remaster)",
        "year": 1988
      },
      {
        "name": "Brick Is Red (2007 Remaster)",
        "album": "Surfer Rosa (2007 Remaster)",
        "year": 1988
      },
      {
        "name": "Where Is My Mind?",
        "album": "Wave of Mutilation: Best of Pixies",
        "year": 1988
      }
    ]
  },
  {
    "name": "PLK",
    "color": "#97C459",
    "genre": "Hip-Hop/Rap",
    "trackCount": 28,
    "albums": [
      "Grand Garçon",
      "Ténébreux",
      "Platinum",
      "Polak"
    ],
    "tracks": [
      {
        "name": "Pas les mêmes",
        "album": "Platinum",
        "year": 2018
      },
      {
        "name": "Monégasque",
        "album": "Polak",
        "year": 2018
      },
      {
        "name": "Émotif (Booska 1H)",
        "album": "Polak",
        "year": 2019
      },
      {
        "name": "All Night",
        "album": "Ténébreux",
        "year": 2017
      },
      {
        "name": "Izé",
        "album": "Platinum",
        "year": 2018
      },
      {
        "name": "La rue",
        "album": "Platinum",
        "year": 2018
      },
      {
        "name": "Platinum",
        "album": "Platinum",
        "year": 2018
      },
      {
        "name": "Pas besoin",
        "album": "Platinum",
        "year": 2018
      },
      {
        "name": "Mentalité",
        "album": "Platinum",
        "year": 2018
      },
      {
        "name": "Du mal",
        "album": "Ténébreux",
        "year": 2017
      },
      {
        "name": "Ténébreux",
        "album": "Ténébreux",
        "year": 2017
      },
      {
        "name": "Casino",
        "album": "Ténébreux",
        "year": 2017
      },
      {
        "name": "Yeux",
        "album": "Ténébreux",
        "year": 2017
      },
      {
        "name": "Faut croire",
        "album": "Ténébreux",
        "year": 2017
      },
      {
        "name": "Tu crois j'suis con ou quoi",
        "album": "Grand Garçon",
        "year": 2026
      },
      {
        "name": "Pocahontas",
        "album": "Grand Garçon",
        "year": 2026
      },
      {
        "name": "Business class",
        "album": "Grand Garçon",
        "year": 2026
      },
      {
        "name": "Sacré quotidien",
        "album": "Grand Garçon",
        "year": 2026
      },
      {
        "name": "Façon d'penser",
        "album": "Grand Garçon",
        "year": 2026
      },
      {
        "name": "Henri cimer",
        "album": "Grand Garçon",
        "year": 2026
      },
      {
        "name": "Le cœur des hommes",
        "album": "Grand Garçon",
        "year": 2026
      },
      {
        "name": "Toi",
        "album": "Grand Garçon",
        "year": 2026
      },
      {
        "name": "Tu dors ?",
        "album": "Grand Garçon",
        "year": 2026
      },
      {
        "name": "Sac à dos",
        "album": "Grand Garçon",
        "year": 2026
      },
      {
        "name": "Plus j'avance",
        "album": "Grand Garçon",
        "year": 2026
      },
      {
        "name": "Bleu & rouge",
        "album": "Grand Garçon",
        "year": 2026
      },
      {
        "name": "Pas comme eux",
        "album": "Grand Garçon",
        "year": 2026
      },
      {
        "name": "Aimer",
        "album": "Ténébreux",
        "year": 2017
      }
    ]
  },
  {
    "name": "Angèle",
    "color": "#FAC775",
    "genre": "French Pop",
    "trackCount": 28,
    "albums": [
      "Nonante-Cinq La Suite (Deluxe)",
      "Brol"
    ],
    "tracks": [
      {
        "name": "La thune",
        "album": "Brol",
        "year": 2018
      },
      {
        "name": "Balance ton quoi",
        "album": "Brol",
        "year": 2018
      },
      {
        "name": "Jalousie",
        "album": "Brol",
        "year": 2018
      },
      {
        "name": "Tout oublier (feat. Roméo Elvis)",
        "album": "Brol",
        "year": 2018
      },
      {
        "name": "La loi de Murphy",
        "album": "Brol",
        "year": 2017
      },
      {
        "name": "Nombreux",
        "album": "Brol",
        "year": 2018
      },
      {
        "name": "Victime des réseaux",
        "album": "Brol",
        "year": 2018
      },
      {
        "name": "Les matins",
        "album": "Brol",
        "year": 2018
      },
      {
        "name": "Je veux tes yeux",
        "album": "Brol",
        "year": 2018
      },
      {
        "name": "Ta reine",
        "album": "Brol",
        "year": 2018
      },
      {
        "name": "Flemme",
        "album": "Brol",
        "year": 2018
      },
      {
        "name": "Flou",
        "album": "Brol",
        "year": 2018
      },
      {
        "name": "Bruxelles je t’aime",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2021
      },
      {
        "name": "Libre",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2021
      },
      {
        "name": "On s’habitue",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2021
      },
      {
        "name": "Solo",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2021
      },
      {
        "name": "Pensées positives",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2021
      },
      {
        "name": "Taxi",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2021
      },
      {
        "name": "Plus de sens",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2021
      },
      {
        "name": "Tempête",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2021
      },
      {
        "name": "Profite",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2021
      },
      {
        "name": "Mots justes",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2021
      },
      {
        "name": "Mauvais rêves",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2021
      },
      {
        "name": "Amour, Haine & Danger",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2022
      },
      {
        "name": "Promets-moi",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2022
      },
      {
        "name": "Patrick",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2022
      },
      {
        "name": "Le temps fera les choses",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2022
      },
      {
        "name": "Le temps fera les choses (Alternative version)",
        "album": "Nonante-Cinq La Suite (Deluxe)",
        "year": 2022
      }
    ]
  },
  {
    "name": "Guy2Bezbar",
    "color": "#AFA9EC",
    "genre": "Rap",
    "trackCount": 28,
    "albums": [
      "Jeunesse Dorée",
      "Black House",
      "Monaco - Single",
      "Maison Blanche",
      "Tu sais bien (feat. Joé Dwèt Filé) - Single"
    ],
    "tracks": [
      {
        "name": "Jerrican (feat. La Mano 1.9)",
        "album": "Black House",
        "year": 2025
      },
      {
        "name": "L'arène",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "Big mama",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "Pourquoi?",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "Cullinan",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "Paillettes et strass (feat. SDM)",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "Wagyu du Jap'",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "Bvlgari (feat. KLN)",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "Je pense à toi",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "OTF (feat. VL400)",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "10 sur 10 (feat. Aya Nakamura)",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "Tarmac",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "Bora Bora",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "Tu sais bien (feat. Joé Dwèt Filé)",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "Gatsby",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "Oyaya (feat. La Mano 1.9)",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "La jeunesse dorée (feat. Killa Predator)",
        "album": "Jeunesse Dorée",
        "year": 2025
      },
      {
        "name": "Intro Black House",
        "album": "Black House",
        "year": 2025
      },
      {
        "name": "Belly (feat. Rick Ross)",
        "album": "Black House",
        "year": 2025
      },
      {
        "name": "Bébé à moi",
        "album": "Black House",
        "year": 2025
      },
      {
        "name": "Figaro (feat. Josman)",
        "album": "Black House",
        "year": 2025
      },
      {
        "name": "P**** Valet",
        "album": "Black House",
        "year": 2025
      },
      {
        "name": "Chaser",
        "album": "Black House",
        "year": 2025
      },
      {
        "name": "Nouvelle R",
        "album": "Black House",
        "year": 2025
      },
      {
        "name": "Batmobile",
        "album": "Black House",
        "year": 2025
      },
      {
        "name": "Monaco",
        "album": "Monaco - Single",
        "year": 2024
      },
      {
        "name": "Monaco",
        "album": "Maison Blanche",
        "year": 2024
      },
      {
        "name": "Tu sais bien (feat. Joé Dwèt Filé)",
        "album": "Tu sais bien (feat. Joé Dwèt Filé) - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "NeS",
    "color": "#F5C4B3",
    "genre": "Hip-Hop/Rap",
    "trackCount": 28,
    "albums": [
      "N.E.S vol.1",
      "LA COURSE",
      "ÇA VA ALLER",
      "LE SOURIRE D'UNE TOMBE - Single"
    ],
    "tracks": [
      {
        "name": "LA COURSE - intro",
        "album": "LA COURSE",
        "year": 2022
      },
      {
        "name": "PUCHKA",
        "album": "LA COURSE",
        "year": 2022
      },
      {
        "name": "LPALP",
        "album": "LA COURSE",
        "year": 2022
      },
      {
        "name": "MINIMUM VITAL",
        "album": "LA COURSE",
        "year": 2022
      },
      {
        "name": "KILLCAM (feat. Luther)",
        "album": "LA COURSE",
        "year": 2022
      },
      {
        "name": "PÔLE SUD - interlude",
        "album": "LA COURSE",
        "year": 2022
      },
      {
        "name": "SANS CESSE",
        "album": "LA COURSE",
        "year": 2022
      },
      {
        "name": "UN TEL",
        "album": "LA COURSE",
        "year": 2022
      },
      {
        "name": "TOPAZ",
        "album": "LA COURSE",
        "year": 2022
      },
      {
        "name": "Kevlar",
        "album": "N.E.S vol.1",
        "year": 2021
      },
      {
        "name": "Marcel Proust (feat. Rotolini BRD)",
        "album": "N.E.S vol.1",
        "year": 2021
      },
      {
        "name": "Visions (feat. Tiny BRD)",
        "album": "N.E.S vol.1",
        "year": 2021
      },
      {
        "name": "Turquoise",
        "album": "N.E.S vol.1",
        "year": 2021
      },
      {
        "name": "Nine-four, Pt. 2 (feat. BRD Teengr)",
        "album": "N.E.S vol.1",
        "year": 2021
      },
      {
        "name": "Wilson",
        "album": "N.E.S vol.1",
        "year": 2021
      },
      {
        "name": "Freestyle MC WACK",
        "album": "N.E.S vol.1",
        "year": 2021
      },
      {
        "name": "10 Ko (feat. Rotolini BRD)",
        "album": "N.E.S vol.1",
        "year": 2021
      },
      {
        "name": "Automatique (feat. Deemax BRD)",
        "album": "N.E.S vol.1",
        "year": 2021
      },
      {
        "name": "Compresses",
        "album": "N.E.S vol.1",
        "year": 2021
      },
      {
        "name": "LE SOURIRE D'UNE TOMBE",
        "album": "LE SOURIRE D'UNE TOMBE - Single",
        "year": 2023
      },
      {
        "name": "CVA",
        "album": "ÇA VA ALLER",
        "year": 2023
      },
      {
        "name": "A/R",
        "album": "ÇA VA ALLER",
        "year": 2023
      },
      {
        "name": "SCOREBOARD",
        "album": "ÇA VA ALLER",
        "year": 2023
      },
      {
        "name": "LES SAPES QUE J'VEUX",
        "album": "ÇA VA ALLER",
        "year": 2023
      },
      {
        "name": "-94°C (feat. Yvnnis)",
        "album": "ÇA VA ALLER",
        "year": 2023
      },
      {
        "name": "4X4 (feat. Deemax BRD)",
        "album": "ÇA VA ALLER",
        "year": 2023
      },
      {
        "name": "RER C",
        "album": "ÇA VA ALLER",
        "year": 2023
      },
      {
        "name": "LE SOURIRE D'UNE TOMBE",
        "album": "ÇA VA ALLER",
        "year": 2023
      }
    ]
  },
  {
    "name": "Ärsenik",
    "color": "#9FE1CB",
    "genre": "Hip-Hop/Rap",
    "trackCount": 28,
    "albums": [
      "Quelque chose a survécu",
      "Quelques gouttes suffisent"
    ],
    "tracks": [
      {
        "name": "Quelque chose a survécu",
        "album": "Quelque chose a survécu",
        "year": 2003
      },
      {
        "name": "P.O.I.S.O.N.",
        "album": "Quelque chose a survécu",
        "year": 2002
      },
      {
        "name": "P***** de poésie",
        "album": "Quelque chose a survécu",
        "year": 2003
      },
      {
        "name": "J't'emmerde",
        "album": "Quelque chose a survécu",
        "year": 2003
      },
      {
        "name": "Rue de la haine",
        "album": "Quelque chose a survécu",
        "year": 2002
      },
      {
        "name": "Les anges aux poings serrés",
        "album": "Quelque chose a survécu",
        "year": 2003
      },
      {
        "name": "Regarde le monde",
        "album": "Quelque chose a survécu",
        "year": 2002
      },
      {
        "name": "Monsieur qui ?",
        "album": "Quelque chose a survécu",
        "year": 2002
      },
      {
        "name": "Rester vivant",
        "album": "Quelque chose a survécu",
        "year": 2002
      },
      {
        "name": "Pousse les watts",
        "album": "Quelque chose a survécu",
        "year": 2003
      },
      {
        "name": "Thérapie de groupe",
        "album": "Quelque chose a survécu",
        "year": 2003
      },
      {
        "name": "On n'a plus trop de temps",
        "album": "Quelque chose a survécu",
        "year": 2003
      },
      {
        "name": "Ghetto blaster",
        "album": "Quelque chose a survécu",
        "year": 2003
      },
      {
        "name": "Paradis assassiné",
        "album": "Quelque chose a survécu",
        "year": 2003
      },
      {
        "name": "Shaolin / 6ème chaudron (Remix)",
        "album": "Quelque chose a survécu",
        "year": 2003
      },
      {
        "name": "2.0.0.2 (Beats monstres)",
        "album": "Quelque chose a survécu",
        "year": 2003
      },
      {
        "name": "J't'emmerde (Remix)",
        "album": "Quelque chose a survécu",
        "year": 2003
      },
      {
        "name": "Intro",
        "album": "Quelques gouttes suffisent",
        "year": 1998
      },
      {
        "name": "Boxe avec les mots",
        "album": "Quelques gouttes suffisent",
        "year": 1998
      },
      {
        "name": "Sexe, pouvoir & biftons",
        "album": "Quelques gouttes suffisent",
        "year": 1998
      },
      {
        "name": "Jour 2 tonnerre",
        "album": "Quelques gouttes suffisent",
        "year": 1998
      },
      {
        "name": "Quelques gouttes suffisent",
        "album": "Quelques gouttes suffisent",
        "year": 1998
      },
      {
        "name": "Chrysanthèmes",
        "album": "Quelques gouttes suffisent",
        "year": 1998
      },
      {
        "name": "Interlude",
        "album": "Quelques gouttes suffisent",
        "year": 1998
      },
      {
        "name": "Une saison blanche et sèche",
        "album": "Quelques gouttes suffisent",
        "year": 1998
      },
      {
        "name": "Ils m'appellent",
        "album": "Quelques gouttes suffisent",
        "year": 1998
      },
      {
        "name": "La rue t'observe",
        "album": "Quelques gouttes suffisent",
        "year": 1998
      },
      {
        "name": "Boxe avec les mots (Remix K.O. technique)",
        "album": "Quelques gouttes suffisent",
        "year": 1998
      }
    ]
  },
  {
    "name": "63OG",
    "color": "#C0DD97",
    "genre": "Hip-Hop/Rap",
    "trackCount": 28,
    "albums": [
      "6TR9C9",
      "6TR9C9 DE LUXE"
    ],
    "tracks": [
      {
        "name": "tout petit",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "jeune à jamais",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "solo dolo",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "phase de H",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "boss (feat. Sherifflazone)",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "pas encore",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "sorti des tours",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "40000gang",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "honda civic",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "jeff bezos",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "VIP (feat. Cochise)",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "ruiné",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "nouvelle amie",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "au sol",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "big ass butt",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "maudit ou béni",
        "album": "6TR9C9",
        "year": 2025
      },
      {
        "name": "porte monnaie",
        "album": "6TR9C9 DE LUXE",
        "year": 2025
      },
      {
        "name": "LBB",
        "album": "6TR9C9 DE LUXE",
        "year": 2025
      },
      {
        "name": "sur ma tombe",
        "album": "6TR9C9 DE LUXE",
        "year": 2025
      },
      {
        "name": "poukwa (elle m'demande)",
        "album": "6TR9C9 DE LUXE",
        "year": 2025
      },
      {
        "name": "eto'o",
        "album": "6TR9C9 DE LUXE",
        "year": 2025
      },
      {
        "name": "apogée",
        "album": "6TR9C9 DE LUXE",
        "year": 2025
      },
      {
        "name": "goyard",
        "album": "6TR9C9 DE LUXE",
        "year": 2025
      },
      {
        "name": "private plane",
        "album": "6TR9C9 DE LUXE",
        "year": 2025
      },
      {
        "name": "R.J.C (belek)",
        "album": "6TR9C9 DE LUXE",
        "year": 2025
      },
      {
        "name": "une journée",
        "album": "6TR9C9 DE LUXE",
        "year": 2025
      },
      {
        "name": "MTL",
        "album": "6TR9C9 DE LUXE",
        "year": 2025
      },
      {
        "name": "SK Mode",
        "album": "6TR9C9 DE LUXE",
        "year": 2025
      }
    ]
  },
  {
    "name": "Juice WRLD",
    "color": "#F4C0D1",
    "genre": "Hip-Hop/Rap",
    "trackCount": 27,
    "albums": [
      "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
      "Death Race for Love",
      "Goodbye & Good Riddance"
    ],
    "tracks": [
      {
        "name": "Big",
        "album": "Death Race for Love",
        "year": 2019
      },
      {
        "name": "Robbery",
        "album": "Death Race for Love",
        "year": 2019
      },
      {
        "name": "Lucid Dreams",
        "album": "Goodbye & Good Riddance",
        "year": 2018
      },
      {
        "name": "Intro",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "All Girls Are The Same",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "Lucid Dreams",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "Lean Wit Me",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "No Good",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "Wasted (feat. Lil Uzi Vert)",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "I'm Still",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "734",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2021
      },
      {
        "name": "Betrayal (Skit)",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "Candles",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "Scared Of Love (with instrumental by Ghost Loft)",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "Used To",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "Karma (Skit)",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "Hurt Me",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "Black & White",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "Long Gone",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "End Of The Road",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "I'll Be Fine",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "Lucid Dreams (feat. Lil Uzi Vert) [Remix]",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2021
      },
      {
        "name": "Glo’d Up",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2018
      },
      {
        "name": "All Girls Are The Same",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2023
      },
      {
        "name": "Lucid Dreams",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2023
      },
      {
        "name": "Lean Wit Me",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2023
      },
      {
        "name": "Black & White",
        "album": "Goodbye & Good Riddance (5 Year Anniversary Edition) [Deluxe]",
        "year": 2023
      }
    ]
  },
  {
    "name": "Playboi Carti",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 27,
    "albums": [
      "Whole Lotta Red",
      "Hurry Up Tomorrow (Video Album)",
      "Playboi Carti"
    ],
    "tracks": [
      {
        "name": "Vamp Anthem",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "New Tank",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "Teen X (feat. Future)",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "Meh",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "New N3on",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "Control",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "Stop Breathing",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "Over",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "Beno!",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "ILoveUIHateU",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "Die4Guy",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "JumpOutTheHouse",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "Not PLaying",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "M3tamorphosis (feat. Kid Cudi)",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "Slay3r",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "F33l Lik3 Dyin",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "No Sl33p",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "Punk Monk",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "On That Time",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "King Vamp",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "Rockstar Made",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "Place",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "Sky",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "Go2DaMoon (feat. Kanye West)",
        "album": "Whole Lotta Red",
        "year": 2020
      },
      {
        "name": "Location",
        "album": "Playboi Carti",
        "year": 2017
      },
      {
        "name": "Timeless",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2024
      },
      {
        "name": "Timeless",
        "album": "Hurry Up Tomorrow (Video Album)",
        "year": 2025
      }
    ]
  },
  {
    "name": "LORENZO",
    "color": "#1A5FB4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 26,
    "albums": [
      "Sex In the City",
      "Empereur du sale",
      "Rien à branler",
      "Beurette de luxe - Single",
      "Freestyle du sale - Single",
      "Je vous déteste tous - Single",
      "Légende Vivante - Single",
      "Catastrophe - Single",
      "Sex In The City"
    ],
    "tracks": [
      {
        "name": "Bizarre (feat. Vald)",
        "album": "Rien à branler",
        "year": 2018
      },
      {
        "name": "Beurette de luxe",
        "album": "Beurette de luxe - Single",
        "year": 2017
      },
      {
        "name": "Freestyle du sale",
        "album": "Freestyle du sale - Single",
        "year": 2017
      },
      {
        "name": "Beurette de luxe",
        "album": "Empereur du sale",
        "year": 2017
      },
      {
        "name": "Freestyle du sale",
        "album": "Empereur du sale",
        "year": 2017
      },
      {
        "name": "Ah c'est cool",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Juste un soir",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Revolver rose",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Voyage auditif (feat. Poto Rico)",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Parler de quoi",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Sexto",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Impec (feat. Tommy Cash & Vladimir Cauchemar)",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Pumpidup (feat. Oliver Tree)",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Kekchose",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Nique la BAC",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Power Rangers",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Nous deux (feat. Shy'm)",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Toujours plus (feat. Orelsan)",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Intro",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Nana (feat. Les Anticipateurs)",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Damdamdeo",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "MBK Rocket",
        "album": "Sex In the City",
        "year": 2019
      },
      {
        "name": "Je vous déteste tous",
        "album": "Je vous déteste tous - Single",
        "year": 2020
      },
      {
        "name": "Légende Vivante",
        "album": "Légende Vivante - Single",
        "year": 2021
      },
      {
        "name": "Catastrophe",
        "album": "Catastrophe - Single",
        "year": 2022
      },
      {
        "name": "Power Rangers",
        "album": "Sex In The City",
        "year": 2019
      }
    ]
  },
  {
    "name": "Ino Casablanca",
    "color": "#2D8A4E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 26,
    "albums": [
      "TAMARA",
      "DEMNA",
      "EXTASIA"
    ],
    "tracks": [
      {
        "name": "NOUVO GROOVE",
        "album": "TAMARA",
        "year": 2025
      },
      {
        "name": "ALBUFEIRA",
        "album": "TAMARA",
        "year": 2025
      },
      {
        "name": "AVANT LA FIN (feat. Nensi)",
        "album": "TAMARA",
        "year": 2025
      },
      {
        "name": "ORANJ",
        "album": "TAMARA",
        "year": 2025
      },
      {
        "name": "FUCK LARR",
        "album": "TAMARA",
        "year": 2024
      },
      {
        "name": "CIAO, MY LOVE !",
        "album": "TAMARA",
        "year": 2024
      },
      {
        "name": "PARAPLUI",
        "album": "TAMARA",
        "year": 2025
      },
      {
        "name": "MAYET",
        "album": "TAMARA",
        "year": 2025
      },
      {
        "name": "DEGRÉS FAHRENHEIT",
        "album": "TAMARA",
        "year": 2025
      },
      {
        "name": "RACAILLE",
        "album": "TAMARA",
        "year": 2025
      },
      {
        "name": "SULFUREUX",
        "album": "DEMNA",
        "year": 2022
      },
      {
        "name": "ABSENS",
        "album": "DEMNA",
        "year": 2022
      },
      {
        "name": "APOCALIPS",
        "album": "DEMNA",
        "year": 2022
      },
      {
        "name": "BÂT'2",
        "album": "DEMNA",
        "year": 2022
      },
      {
        "name": "GVU",
        "album": "DEMNA",
        "year": 2022
      },
      {
        "name": "DMN 3022",
        "album": "DEMNA",
        "year": 2022
      },
      {
        "name": "VARYS",
        "album": "DEMNA",
        "year": 2022
      },
      {
        "name": "SAUVAGE (Bonus Track)",
        "album": "DEMNA",
        "year": 2022
      },
      {
        "name": "DIMA RAVE",
        "album": "EXTASIA",
        "year": 2025
      },
      {
        "name": "BISSAP DU 20ÈME",
        "album": "EXTASIA",
        "year": 2025
      },
      {
        "name": "FLOCAGE",
        "album": "EXTASIA",
        "year": 2025
      },
      {
        "name": "CLUBMASTER",
        "album": "EXTASIA",
        "year": 2025
      },
      {
        "name": "DIMA RAVE ENCORE",
        "album": "EXTASIA",
        "year": 2025
      },
      {
        "name": "EXTAZ",
        "album": "EXTASIA",
        "year": 2025
      },
      {
        "name": "KITLÉ",
        "album": "EXTASIA",
        "year": 2025
      },
      {
        "name": "PARAMOUR",
        "album": "EXTASIA",
        "year": 2025
      }
    ]
  },
  {
    "name": "Infinit'",
    "color": "#C4622D",
    "genre": "Hip-Hop/Rap",
    "trackCount": 25,
    "albums": [
      "888",
      "Mr LE FAIRE",
      "ABOVE THE DREAM - EP",
      "Ma vie est un film II"
    ],
    "tracks": [
      {
        "name": "Cigarette 2 haine (feat. Alpha Wann)",
        "album": "Ma vie est un film II",
        "year": 2020
      },
      {
        "name": "ROULEZ (feat. Jacky Brown)",
        "album": "Mr LE FAIRE",
        "year": 2025
      },
      {
        "name": "CORTÈGE",
        "album": "Mr LE FAIRE",
        "year": 2025
      },
      {
        "name": "TOP 3",
        "album": "Mr LE FAIRE",
        "year": 2025
      },
      {
        "name": "CASH GAGNANT (feat. VEUST)",
        "album": "Mr LE FAIRE",
        "year": 2025
      },
      {
        "name": "DÉCAPOTABLE",
        "album": "Mr LE FAIRE",
        "year": 2025
      },
      {
        "name": "LE FILM CONTINUE (feat. Mairo & H JeuneCrack)",
        "album": "Mr LE FAIRE",
        "year": 2025
      },
      {
        "name": "ENVIRONNEMENT",
        "album": "Mr LE FAIRE",
        "year": 2025
      },
      {
        "name": "TYPE NORD AF",
        "album": "Mr LE FAIRE",
        "year": 2025
      },
      {
        "name": "INF IS BACK",
        "album": "ABOVE THE DREAM - EP",
        "year": 2025
      },
      {
        "name": "UN SEUL PLAN",
        "album": "ABOVE THE DREAM - EP",
        "year": 2025
      },
      {
        "name": "RIEN SAVOIR",
        "album": "ABOVE THE DREAM - EP",
        "year": 2025
      },
      {
        "name": "ELLE LE SAIT",
        "album": "ABOVE THE DREAM - EP",
        "year": 2025
      },
      {
        "name": "Intro",
        "album": "888",
        "year": 2024
      },
      {
        "name": "Mr Météo",
        "album": "888",
        "year": 2024
      },
      {
        "name": "Parano",
        "album": "888",
        "year": 2023
      },
      {
        "name": "Imagine",
        "album": "888",
        "year": 2024
      },
      {
        "name": "Comportement",
        "album": "888",
        "year": 2024
      },
      {
        "name": "Messagerie",
        "album": "888",
        "year": 2024
      },
      {
        "name": "Bateau",
        "album": "888",
        "year": 2024
      },
      {
        "name": "Dictionnaire",
        "album": "888",
        "year": 2024
      },
      {
        "name": "Contact",
        "album": "888",
        "year": 2024
      },
      {
        "name": "VVS",
        "album": "888",
        "year": 2024
      },
      {
        "name": "Zippo",
        "album": "888",
        "year": 2024
      },
      {
        "name": "Tous les gens",
        "album": "888",
        "year": 2024
      }
    ]
  },
  {
    "name": "S-Crew",
    "color": "#7B4FA6",
    "genre": "Hip-Hop/Rap",
    "trackCount": 25,
    "albums": [
      "SZR 2001",
      "Destins liés",
      "Seine Zoo"
    ],
    "tracks": [
      {
        "name": "La Danse De L'Homme Saoul (feat. Super Social Jeez)",
        "album": "Seine Zoo",
        "year": 2013
      },
      {
        "name": "La loi du plus fort",
        "album": "SZR 2001",
        "year": 2022
      },
      {
        "name": "Plus rien à faire",
        "album": "SZR 2001",
        "year": 2022
      },
      {
        "name": "2001",
        "album": "SZR 2001",
        "year": 2022
      },
      {
        "name": "Maintenant",
        "album": "SZR 2001",
        "year": 2022
      },
      {
        "name": "Chez nous",
        "album": "SZR 2001",
        "year": 2022
      },
      {
        "name": "Trilogie",
        "album": "SZR 2001",
        "year": 2022
      },
      {
        "name": "N'oublie pas",
        "album": "SZR 2001",
        "year": 2022
      },
      {
        "name": "Ouais Boy",
        "album": "SZR 2001",
        "year": 2022
      },
      {
        "name": "Djadja",
        "album": "SZR 2001",
        "year": 2022
      },
      {
        "name": "Manque de sommeil",
        "album": "SZR 2001",
        "year": 2022
      },
      {
        "name": "Encore",
        "album": "SZR 2001",
        "year": 2022
      },
      {
        "name": "22",
        "album": "SZR 2001",
        "year": 2022
      },
      {
        "name": "Drap sur les opps",
        "album": "SZR 2001",
        "year": 2022
      },
      {
        "name": "Fight Club",
        "album": "SZR 2001",
        "year": 2022
      },
      {
        "name": "Les parisiennes (feat. Super Social Jeez)",
        "album": "Seine Zoo",
        "year": 2013
      },
      {
        "name": "Nés pour mener",
        "album": "Destins liés",
        "year": 2016
      },
      {
        "name": "Démarre",
        "album": "Destins liés",
        "year": 2016
      },
      {
        "name": "Félins",
        "album": "Destins liés",
        "year": 2016
      },
      {
        "name": "On va le faire",
        "album": "Destins liés",
        "year": 2016
      },
      {
        "name": "J’aurais pas dû",
        "album": "Destins liés",
        "year": 2016
      },
      {
        "name": "Fugazi",
        "album": "Destins liés",
        "year": 2016
      },
      {
        "name": "Aéroplane",
        "album": "Seine Zoo",
        "year": 2013
      },
      {
        "name": "C’est pas un film",
        "album": "Destins liés",
        "year": 2016
      },
      {
        "name": "Fausse note",
        "album": "Destins liés",
        "year": 2016
      }
    ]
  },
  {
    "name": "Dau",
    "color": "#E8593C",
    "genre": "Rap",
    "trackCount": 25,
    "albums": [
      "ÉTATS D'ÂMES",
      "AMAZING",
      "Finale - Nouvelle École - Single"
    ],
    "tracks": [
      {
        "name": "WELCOME BACK",
        "album": "AMAZING",
        "year": 2024
      },
      {
        "name": "BMI",
        "album": "AMAZING",
        "year": 2024
      },
      {
        "name": "CAPITAINE",
        "album": "AMAZING",
        "year": 2024
      },
      {
        "name": "AVLV",
        "album": "AMAZING",
        "year": 2024
      },
      {
        "name": "ALLEMAND",
        "album": "AMAZING",
        "year": 2024
      },
      {
        "name": "CHEZ NOUS",
        "album": "AMAZING",
        "year": 2024
      },
      {
        "name": "100 FOIS",
        "album": "AMAZING",
        "year": 2025
      },
      {
        "name": "CHAT NOIR",
        "album": "AMAZING",
        "year": 2024
      },
      {
        "name": "AMAZED (feat. Jewel Usain)",
        "album": "AMAZING",
        "year": 2024
      },
      {
        "name": "COEURS BALAFRÉS",
        "album": "AMAZING",
        "year": 2024
      },
      {
        "name": "BIENVENUE",
        "album": "ÉTATS D'ÂMES",
        "year": 2024
      },
      {
        "name": "GTI",
        "album": "ÉTATS D'ÂMES",
        "year": 2024
      },
      {
        "name": "JANVIER / DÉCEMBRE",
        "album": "ÉTATS D'ÂMES",
        "year": 2024
      },
      {
        "name": "JE N'SAIS PAS",
        "album": "ÉTATS D'ÂMES",
        "year": 2024
      },
      {
        "name": "MAMAN S'INQUIÈTE",
        "album": "ÉTATS D'ÂMES",
        "year": 2024
      },
      {
        "name": "4 FAÇONS",
        "album": "ÉTATS D'ÂMES",
        "year": 2024
      },
      {
        "name": "RESPIRE",
        "album": "ÉTATS D'ÂMES",
        "year": 2024
      },
      {
        "name": "EN PERTE",
        "album": "ÉTATS D'ÂMES",
        "year": 2024
      },
      {
        "name": "ÉTATS D'ÂMES",
        "album": "ÉTATS D'ÂMES",
        "year": 2024
      },
      {
        "name": "AMAZING",
        "album": "ÉTATS D'ÂMES",
        "year": 2024
      },
      {
        "name": "ROBERT JOHNSON",
        "album": "ÉTATS D'ÂMES",
        "year": 2024
      },
      {
        "name": "MIDNIGHT",
        "album": "ÉTATS D'ÂMES",
        "year": 2024
      },
      {
        "name": "TEMA",
        "album": "ÉTATS D'ÂMES",
        "year": 2024
      },
      {
        "name": "WORKOUT MENTAL",
        "album": "ÉTATS D'ÂMES",
        "year": 2024
      },
      {
        "name": "Finale - Nouvelle École",
        "album": "Finale - Nouvelle École - Single",
        "year": 2023
      }
    ]
  },
  {
    "name": "Metro Boomin",
    "color": "#3B8BD4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 25,
    "albums": [
      "HEROES & VILLAINS (Heroes Version)",
      "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE) [METROVERSE INSTRUMENTAL EDITION]"
    ],
    "tracks": [
      {
        "name": "Around Me (feat. Don Toliver)",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "On Time (Instrumental)",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "Superhero (Heroes & Villains) [Instrumental]",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "Too Many Nights (Instrumental)",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "Raindrops (Insane) [Instrumental]",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "Umbrella (Instrumental)",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "Trance (Instrumental)",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "Around Me (Instrumental)",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "Metro Spider (Instrumental)",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "I Can't Save You (Interlude) [Instrumental]",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "Creepin' (Instrumental)",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "Niagara Falls (Foot or 2) [Instrumental]",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "Walk Em Down (Don't Kill Civilians) [Instrumental]",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "Lock On Me (Instrumental)",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "Feel The Fiyaaaah (Instrumental)",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "All The Money (Instrumental - Bonus)",
        "album": "HEROES & VILLAINS (Heroes Version)",
        "year": 2022
      },
      {
        "name": "Annihilate (Spider-Man: Across the Spider-Verse - Instrumental)",
        "album": "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE) [METROVERSE INSTRUMENTAL EDITION]",
        "year": 2023
      },
      {
        "name": "Am I Dreaming (Instrumental)",
        "album": "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE) [METROVERSE INSTRUMENTAL EDITION]",
        "year": 2023
      },
      {
        "name": "All The Way Live (Spider-Man: Across the Spider-Verse - Instrumental)",
        "album": "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE) [METROVERSE INSTRUMENTAL EDITION]",
        "year": 2023
      },
      {
        "name": "Calling (Spider-Man: Across the Spider-Verse - Instrumental)",
        "album": "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE) [METROVERSE INSTRUMENTAL EDITION]",
        "year": 2023
      },
      {
        "name": "Link Up (Spider-Verse Remix (Spider-Man: Across the Spider-Verse - Instrumental))",
        "album": "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE) [METROVERSE INSTRUMENTAL EDITION]",
        "year": 2023
      },
      {
        "name": "Self Love (Spider-Man: Across the Spider-Verse - Instrumental)",
        "album": "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE) [METROVERSE INSTRUMENTAL EDITION]",
        "year": 2023
      },
      {
        "name": "Home (Instrumental)",
        "album": "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE) [METROVERSE INSTRUMENTAL EDITION]",
        "year": 2023
      },
      {
        "name": "Nonviolent Communication (Instrumental)",
        "album": "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE) [METROVERSE INSTRUMENTAL EDITION]",
        "year": 2023
      },
      {
        "name": "Nas Morales (Instrumental)",
        "album": "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE) [METROVERSE INSTRUMENTAL EDITION]",
        "year": 2023
      }
    ]
  },
  {
    "name": "Rounhaa",
    "color": "#4A9E5C",
    "genre": "Hip-Hop/Rap",
    "trackCount": 24,
    "albums": [
      "MÖBIUS",
      "JAAFAR",
      "sasori + fantom - Single"
    ],
    "tracks": [
      {
        "name": "sasori",
        "album": "sasori + fantom - Single",
        "year": 2025
      },
      {
        "name": "LE FRÈRE DE MOÏSE",
        "album": "JAAFAR",
        "year": 2024
      },
      {
        "name": "LOVE DEATH ROBOTS",
        "album": "JAAFAR",
        "year": 2024
      },
      {
        "name": "2B2T",
        "album": "JAAFAR",
        "year": 2023
      },
      {
        "name": "KONTAKT",
        "album": "JAAFAR",
        "year": 2024
      },
      {
        "name": "MOOD 0",
        "album": "JAAFAR",
        "year": 2024
      },
      {
        "name": "TOTENINSEL",
        "album": "JAAFAR",
        "year": 2024
      },
      {
        "name": "BRUTAL",
        "album": "JAAFAR",
        "year": 2024
      },
      {
        "name": "WALLL",
        "album": "JAAFAR",
        "year": 2024
      },
      {
        "name": "UMM KULTHUM",
        "album": "JAAFAR",
        "year": 2024
      },
      {
        "name": "YASMEEN",
        "album": "JAAFAR",
        "year": 2024
      },
      {
        "name": "GRIS TANGER",
        "album": "JAAFAR",
        "year": 2024
      },
      {
        "name": "PAPURIR",
        "album": "MÖBIUS",
        "year": 2022
      },
      {
        "name": "MUSIC SOUNDS BETTER WITH YOU",
        "album": "MÖBIUS",
        "year": 2022
      },
      {
        "name": "LE MORT",
        "album": "MÖBIUS",
        "year": 2022
      },
      {
        "name": "CELINE (feat. Gio)",
        "album": "MÖBIUS",
        "year": 2022
      },
      {
        "name": "ICE",
        "album": "MÖBIUS",
        "year": 2022
      },
      {
        "name": "MAFIA",
        "album": "MÖBIUS",
        "year": 2022
      },
      {
        "name": "MR. & MRS. SMITH (feat. J9ueve)",
        "album": "MÖBIUS",
        "year": 2022
      },
      {
        "name": "BOO",
        "album": "MÖBIUS",
        "year": 2022
      },
      {
        "name": "ILLÉGAL TRISTE",
        "album": "MÖBIUS",
        "year": 2022
      },
      {
        "name": "WISH I WAS SPECIAL",
        "album": "MÖBIUS",
        "year": 2022
      },
      {
        "name": "BONBON&FLEUR",
        "album": "MÖBIUS",
        "year": 2022
      },
      {
        "name": "LE VENTRE ET LA TOMBE",
        "album": "MÖBIUS",
        "year": 2022
      }
    ]
  },
  {
    "name": "Koba LaD",
    "color": "#9B4DCA",
    "genre": "Hip-Hop/Rap",
    "trackCount": 24,
    "albums": [
      "VII",
      "L' affranchi",
      "Train De Vie - Single",
      "Aventador - Single",
      "Mortel - Single",
      "L'affranchi (Deluxe)",
      "RR 9.1 (feat. Niska) - Single",
      "7 sur 7 (feat. Freeze corleone) - Single"
    ],
    "tracks": [
      {
        "name": "Intro",
        "album": "VII",
        "year": 2018
      },
      {
        "name": "Chambre 122",
        "album": "VII",
        "year": 2018
      },
      {
        "name": "Honey",
        "album": "VII",
        "year": 2018
      },
      {
        "name": "Moments durs",
        "album": "VII",
        "year": 2018
      },
      {
        "name": "Everyday",
        "album": "VII",
        "year": 2018
      },
      {
        "name": "La C",
        "album": "VII",
        "year": 2018
      },
      {
        "name": "Suge",
        "album": "VII",
        "year": 2018
      },
      {
        "name": "Tout",
        "album": "VII",
        "year": 2018
      },
      {
        "name": "Train de vie",
        "album": "VII",
        "year": 2018
      },
      {
        "name": "Rachète",
        "album": "VII",
        "year": 2018
      },
      {
        "name": "Recul",
        "album": "VII",
        "year": 2018
      },
      {
        "name": "Oyé",
        "album": "VII",
        "year": 2018
      },
      {
        "name": "Seven Binks (feat. Bolémvn & Mafia Spartiate)",
        "album": "VII",
        "year": 2018
      },
      {
        "name": "J'en veux",
        "album": "VII",
        "year": 2018
      },
      {
        "name": "Train de vie",
        "album": "Train De Vie - Single",
        "year": 2018
      },
      {
        "name": "ORgueilleux",
        "album": "VII",
        "year": 2018
      },
      {
        "name": "Aventador",
        "album": "Aventador - Single",
        "year": 2019
      },
      {
        "name": "RR 9.1 (feat. Niska)",
        "album": "L' affranchi",
        "year": 2019
      },
      {
        "name": "Mortel",
        "album": "Mortel - Single",
        "year": 2019
      },
      {
        "name": "Marie",
        "album": "L'affranchi (Deluxe)",
        "year": 2019
      },
      {
        "name": "Quotidien (feat. Ninho)",
        "album": "L' affranchi",
        "year": 2019
      },
      {
        "name": "Matin (feat. Maes)",
        "album": "L' affranchi",
        "year": 2019
      },
      {
        "name": "RR 9.1 (feat. Niska)",
        "album": "RR 9.1 (feat. Niska) - Single",
        "year": 2019
      },
      {
        "name": "7 sur 7 (feat. Freeze corleone)",
        "album": "7 sur 7 (feat. Freeze corleone) - Single",
        "year": 2020
      }
    ]
  },
  {
    "name": "Lyonzon",
    "color": "#D4A017",
    "genre": "Hip-Hop/Rap",
    "trackCount": 24,
    "albums": [
      "En attendant la popance",
      "Kriegsmarine",
      "Gang Gang - Single",
      "En attendant la popance 2",
      "Benibla freestyle - Single",
      "Arah 3 - Single",
      "The Independence of the Seas"
    ],
    "tracks": [
      {
        "name": "Lyonzon Lyonzon",
        "album": "Kriegsmarine",
        "year": 2018
      },
      {
        "name": "Gang Gang",
        "album": "Gang Gang - Single",
        "year": 2021
      },
      {
        "name": "Origami",
        "album": "En attendant la popance 2",
        "year": 2021
      },
      {
        "name": "Benibla freestyle",
        "album": "Benibla freestyle - Single",
        "year": 2018
      },
      {
        "name": "Arah 3",
        "album": "Arah 3 - Single",
        "year": 2019
      },
      {
        "name": "La menace",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Safari (feat. Jkobb)",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Trop",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Og",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Comme nous",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Maman",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Bon cash",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Tah sah",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Parle pas russe",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Simple d'accès",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Joker",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "La mafia",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Faux fake (feat. JMK$)",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Xavi",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Range ton tah",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Matrix",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "V12",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Paramètres",
        "album": "En attendant la popance",
        "year": 2019
      },
      {
        "name": "Molly",
        "album": "The Independence of the Seas",
        "year": 2018
      }
    ]
  },
  {
    "name": "Zinée",
    "color": "#FF6B6B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 24,
    "albums": [
      "OSMIN",
      "Cobalt",
      "bouclier - Single",
      "MEZZEL (feat. Chilly Gonzales) - Single"
    ],
    "tracks": [
      {
        "name": "Agrafe",
        "album": "Cobalt",
        "year": 2021
      },
      {
        "name": "Matière grise",
        "album": "Cobalt",
        "year": 2021
      },
      {
        "name": "Grenadine",
        "album": "Cobalt",
        "year": 2021
      },
      {
        "name": "Parle moi (feat. M Le Maudit)",
        "album": "Cobalt",
        "year": 2021
      },
      {
        "name": "Même pas mal",
        "album": "Cobalt",
        "year": 2021
      },
      {
        "name": "Zinée club",
        "album": "Cobalt",
        "year": 2021
      },
      {
        "name": "WGA (feat. sean)",
        "album": "Cobalt",
        "year": 2021
      },
      {
        "name": "Enfant roi",
        "album": "Cobalt",
        "year": 2021
      },
      {
        "name": "Dallas",
        "album": "Cobalt",
        "year": 2021
      },
      {
        "name": "Acier",
        "album": "Cobalt",
        "year": 2021
      },
      {
        "name": "MEZZEL (feat. Chilly Gonzales)",
        "album": "OSMIN",
        "year": 2024
      },
      {
        "name": "SPACE MOUNTAIN",
        "album": "OSMIN",
        "year": 2024
      },
      {
        "name": "OLA",
        "album": "OSMIN",
        "year": 2024
      },
      {
        "name": "ECHO",
        "album": "OSMIN",
        "year": 2024
      },
      {
        "name": "BABY VOICE",
        "album": "OSMIN",
        "year": 2024
      },
      {
        "name": "LA REINE ET LA LUNE",
        "album": "OSMIN",
        "year": 2024
      },
      {
        "name": "IMANI & LISA",
        "album": "OSMIN",
        "year": 2024
      },
      {
        "name": "LA CHENILLE",
        "album": "OSMIN",
        "year": 2024
      },
      {
        "name": "SABLE BLEU",
        "album": "OSMIN",
        "year": 2024
      },
      {
        "name": "EROSION",
        "album": "OSMIN",
        "year": 2024
      },
      {
        "name": "BALEINES",
        "album": "OSMIN",
        "year": 2024
      },
      {
        "name": "OSMIN",
        "album": "OSMIN",
        "year": 2024
      },
      {
        "name": "bouclier",
        "album": "bouclier - Single",
        "year": 2025
      },
      {
        "name": "MEZZEL (feat. Chilly Gonzales)",
        "album": "MEZZEL (feat. Chilly Gonzales) - Single",
        "year": 2024
      }
    ]
  },
  {
    "name": "Jungle Jack",
    "color": "#4ECDC4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 23,
    "albums": [
      "JUNGLE DES ILLUSIONS VOL 2",
      "JUNGLE DES ILLUSIONS VOL 1"
    ],
    "tracks": [
      {
        "name": "CHARBON ET DEVOUEMENT",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "KABUKI",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "SYSTÈME D",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "L'ÉQUILIBRISTE",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "VUE IMPRENABLE SUR LA JUNGLE",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "QUARTIERS EST (feat. Souffrance)",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "L'HOMME AU PLAN",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "CAMP D'ENTRAÎNEMENT (feat. Mairo)",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "AVEC LE TEMPS",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "XX FILES (feat. Alpha Wann)",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "LE CHEMIN",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "MENIL ET UNE NUIT",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "DRAGONS AQUATIQUES (feat. Nucky Thompson)",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "LA GRAINE",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "SOLEILS DE L'AMOUR (feat. Bloop-Hä & G High DJo)",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "BOURG PALETTE",
        "album": "JUNGLE DES ILLUSIONS VOL 2",
        "year": 2024
      },
      {
        "name": "JUNGLE PACK",
        "album": "JUNGLE DES ILLUSIONS VOL 1",
        "year": 2021
      },
      {
        "name": "LA DÉCOUVERTE DU FEU",
        "album": "JUNGLE DES ILLUSIONS VOL 1",
        "year": 2021
      },
      {
        "name": "DOOMSCROLL",
        "album": "JUNGLE DES ILLUSIONS VOL 1",
        "year": 2021
      },
      {
        "name": "VPN",
        "album": "JUNGLE DES ILLUSIONS VOL 1",
        "year": 2021
      },
      {
        "name": "VEGAPUNK",
        "album": "JUNGLE DES ILLUSIONS VOL 1",
        "year": 2021
      },
      {
        "name": "JUNGLE JACK",
        "album": "JUNGLE DES ILLUSIONS VOL 1",
        "year": 2021
      },
      {
        "name": "LA COLLINE DE L'EST",
        "album": "JUNGLE DES ILLUSIONS VOL 1",
        "year": 2021
      }
    ]
  },
  {
    "name": "Livaï",
    "color": "#45B7D1",
    "genre": "Hip-Hop/Rap",
    "trackCount": 23,
    "albums": [
      "Voss",
      "Au revoir - Single",
      "Règlement Noir Freestyle - Single",
      "Rizzla ou OCB - Single",
      "Hiver - Single",
      "Laisse moi (feat. Ablv) - Single",
      "Comme des étrangers - Single",
      "Parfait - Single",
      "Pluton - Single",
      "Distance (feat. Yoksi) - Single"
    ],
    "tracks": [
      {
        "name": "Au revoir",
        "album": "Au revoir - Single",
        "year": 2019
      },
      {
        "name": "Règlement Noir Freestyle",
        "album": "Règlement Noir Freestyle - Single",
        "year": 2020
      },
      {
        "name": "Rizzla ou OCB",
        "album": "Rizzla ou OCB - Single",
        "year": 2019
      },
      {
        "name": "Au revoir",
        "album": "Au revoir - Single",
        "year": 2019
      },
      {
        "name": "Hiver",
        "album": "Hiver - Single",
        "year": 2020
      },
      {
        "name": "Laisse moi (feat. Ablv)",
        "album": "Laisse moi (feat. Ablv) - Single",
        "year": 2019
      },
      {
        "name": "Comme des étrangers",
        "album": "Comme des étrangers - Single",
        "year": 2020
      },
      {
        "name": "Parfait",
        "album": "Parfait - Single",
        "year": 2019
      },
      {
        "name": "Pluton",
        "album": "Pluton - Single",
        "year": 2019
      },
      {
        "name": "Distance (feat. Yoksi)",
        "album": "Distance (feat. Yoksi) - Single",
        "year": 2018
      },
      {
        "name": "Rookie",
        "album": "Rookie - Single",
        "year": 2019
      },
      {
        "name": "Salass #1",
        "album": "Salass #1 - Single",
        "year": 2019
      },
      {
        "name": "4k",
        "album": "Voss",
        "year": 2020
      },
      {
        "name": "Prévu",
        "album": "Voss",
        "year": 2020
      },
      {
        "name": "Ton corps, ton cœur",
        "album": "Voss",
        "year": 2020
      },
      {
        "name": "Intro",
        "album": "Voss",
        "year": 2020
      },
      {
        "name": "La nuit",
        "album": "Voss",
        "year": 2020
      },
      {
        "name": "Voss",
        "album": "Voss",
        "year": 2020
      },
      {
        "name": "Néant",
        "album": "Voss",
        "year": 2020
      },
      {
        "name": "Quelqu'un de bien",
        "album": "Voss",
        "year": 2020
      },
      {
        "name": "Rupture",
        "album": "Voss",
        "year": 2020
      },
      {
        "name": "Parenthèse",
        "album": "Voss",
        "year": 2020
      },
      {
        "name": "Messe basse",
        "album": "Voss",
        "year": 2020
      }
    ]
  },
  {
    "name": "BEN plg",
    "color": "#96CEB4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 23,
    "albums": [
      "Dire je t'aime",
      "Paraît que les miracles n'existent pas",
      "J'rêve mieux qu'avant - EP"
    ],
    "tracks": [
      {
        "name": "Béni",
        "album": "Paraît que les miracles n'existent pas",
        "year": 2025
      },
      {
        "name": "On tombe, on réessaye",
        "album": "Paraît que les miracles n'existent pas",
        "year": 2025
      },
      {
        "name": "La Haine en DVD",
        "album": "Paraît que les miracles n'existent pas",
        "year": 2025
      },
      {
        "name": "Tête à l'envers (feat. Zkr)",
        "album": "Paraît que les miracles n'existent pas",
        "year": 2025
      },
      {
        "name": "Le riz et la sauce",
        "album": "Paraît que les miracles n'existent pas",
        "year": 2025
      },
      {
        "name": "Bague en plaqué",
        "album": "Paraît que les miracles n'existent pas",
        "year": 2025
      },
      {
        "name": "La couleur des vitres teintées",
        "album": "Paraît que les miracles n'existent pas",
        "year": 2025
      },
      {
        "name": "Chaque jour un peu plus",
        "album": "Paraît que les miracles n'existent pas",
        "year": 2025
      },
      {
        "name": "Paraît que les miracles n'existent pas",
        "album": "Paraît que les miracles n'existent pas",
        "year": 2025
      },
      {
        "name": "Guerres de pissenlits",
        "album": "Dire je t'aime",
        "year": 2024
      },
      {
        "name": "Ah bah ouais",
        "album": "J'rêve mieux qu'avant - EP",
        "year": 2023
      },
      {
        "name": "Mieux qu'avant",
        "album": "J'rêve mieux qu'avant - EP",
        "year": 2023
      },
      {
        "name": "Théâtre de marionnettes",
        "album": "J'rêve mieux qu'avant - EP",
        "year": 2023
      },
      {
        "name": "Silhouette des ombres",
        "album": "Dire je t'aime",
        "year": 2024
      },
      {
        "name": "Prochaine fois",
        "album": "Dire je t'aime",
        "year": 2024
      },
      {
        "name": "On a pris l'habitude",
        "album": "Dire je t'aime",
        "year": 2024
      },
      {
        "name": "Dire je t'aime",
        "album": "Dire je t'aime",
        "year": 2024
      },
      {
        "name": "Faire un album à Marseille",
        "album": "Dire je t'aime",
        "year": 2024
      },
      {
        "name": "Les mégots dans le bac à sable",
        "album": "Dire je t'aime",
        "year": 2024
      },
      {
        "name": "Plus peur du monde",
        "album": "Dire je t'aime",
        "year": 2024
      },
      {
        "name": "Le goût du sel",
        "album": "Dire je t'aime",
        "year": 2023
      },
      {
        "name": "Tu parles d'une blague",
        "album": "Dire je t'aime",
        "year": 2024
      },
      {
        "name": "Faut pas oublier de dire je t'aime",
        "album": "Dire je t'aime",
        "year": 2024
      }
    ]
  },
  {
    "name": "La Mano 1.9",
    "color": "#FFEAA7",
    "genre": "Hip-Hop/Rap",
    "trackCount": 23,
    "albums": [
      "R.A.T",
      "Sexy Woman - Single",
      "I'M SORRY - Single",
      "VIP (feat. XVI) - Single",
      "BUSINESSMAN - Single",
      "R.A.T (Deluxe)",
      "R.A.T #2  - Single",
      "Célibataire - Single",
      "Adrénaline / Maradona - Single"
    ],
    "tracks": [
      {
        "name": "Sexy Woman",
        "album": "Sexy Woman - Single",
        "year": 2025
      },
      {
        "name": "I'M SORRY",
        "album": "I'M SORRY - Single",
        "year": 2024
      },
      {
        "name": "Encore",
        "album": "R.A.T",
        "year": 2025
      },
      {
        "name": "Handek",
        "album": "R.A.T",
        "year": 2025
      },
      {
        "name": "I'm Sorry",
        "album": "R.A.T",
        "year": 2024
      },
      {
        "name": "4K",
        "album": "R.A.T",
        "year": 2025
      },
      {
        "name": "Mailler",
        "album": "R.A.T",
        "year": 2025
      },
      {
        "name": "City",
        "album": "R.A.T",
        "year": 2025
      },
      {
        "name": "27.06.25 (Magie)",
        "album": "R.A.T",
        "year": 2025
      },
      {
        "name": "Businessman",
        "album": "R.A.T",
        "year": 2025
      },
      {
        "name": "Bomberman",
        "album": "R.A.T",
        "year": 2025
      },
      {
        "name": "Célibataire",
        "album": "R.A.T",
        "year": 2025
      },
      {
        "name": "Sexy Woman",
        "album": "R.A.T",
        "year": 2025
      },
      {
        "name": "No pain, No Gain",
        "album": "R.A.T",
        "year": 2025
      },
      {
        "name": "LVL UP",
        "album": "R.A.T",
        "year": 2025
      },
      {
        "name": "Génération",
        "album": "R.A.T",
        "year": 2025
      },
      {
        "name": "Kilo",
        "album": "R.A.T",
        "year": 2025
      },
      {
        "name": "VIP (feat. XVI)",
        "album": "VIP (feat. XVI) - Single",
        "year": 2026
      },
      {
        "name": "BUSINESSMAN",
        "album": "BUSINESSMAN - Single",
        "year": 2025
      },
      {
        "name": "Handek",
        "album": "R.A.T (Deluxe)",
        "year": 2025
      },
      {
        "name": "R.A.T #2",
        "album": "R.A.T #2  - Single",
        "year": 2025
      },
      {
        "name": "Célibataire",
        "album": "Célibataire - Single",
        "year": 2025
      },
      {
        "name": "Adrénaline / Maradona",
        "album": "Adrénaline / Maradona - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "Prince Waly",
    "color": "#7F77DD",
    "genre": "Hip-Hop/Rap",
    "trackCount": 23,
    "albums": [
      "Moussa",
      "BO Y Z Vol.2",
      "Balotelli (feat. Freeze Corleone) - Single"
    ],
    "tracks": [
      {
        "name": "Bleu (feat. Arthur Teboul)",
        "album": "Moussa",
        "year": 2022
      },
      {
        "name": "Walygator",
        "album": "Moussa",
        "year": 2022
      },
      {
        "name": "Avertisseurs, Part. 2",
        "album": "Moussa",
        "year": 2022
      },
      {
        "name": "Rottweiler (feat. Ali)",
        "album": "Moussa",
        "year": 2022
      },
      {
        "name": "Balotelli (feat. Freeze Corleone)",
        "album": "Moussa",
        "year": 2022
      },
      {
        "name": "Messe",
        "album": "Moussa",
        "year": 2022
      },
      {
        "name": "Movie",
        "album": "Moussa",
        "year": 2022
      },
      {
        "name": "Moussa (Part II) - Interlude",
        "album": "Moussa",
        "year": 2022
      },
      {
        "name": "Cra$h (feat. Enchantée Julia & Jazzy Bazz)",
        "album": "Moussa",
        "year": 2022
      },
      {
        "name": "Problème (feat. Luidji & Makala)",
        "album": "Moussa",
        "year": 2022
      },
      {
        "name": "BBF",
        "album": "Moussa",
        "year": 2022
      },
      {
        "name": "Broke",
        "album": "Moussa",
        "year": 2022
      },
      {
        "name": "Miroir",
        "album": "Moussa",
        "year": 2022
      },
      {
        "name": "Mercy",
        "album": "Moussa",
        "year": 2022
      },
      {
        "name": "Âme sœur (feat. Enchantée Julia)",
        "album": "BO Y Z Vol.2",
        "year": 2023
      },
      {
        "name": "Charm el-Cheikh",
        "album": "BO Y Z Vol.2",
        "year": 2023
      },
      {
        "name": "MP5",
        "album": "BO Y Z Vol.2",
        "year": 2023
      },
      {
        "name": "Manucure",
        "album": "BO Y Z Vol.2",
        "year": 2023
      },
      {
        "name": "Belly (feat. Dinos)",
        "album": "BO Y Z Vol.2",
        "year": 2023
      },
      {
        "name": "Passement de jambes (Part II)",
        "album": "BO Y Z Vol.2",
        "year": 2023
      },
      {
        "name": "Coquelicot",
        "album": "BO Y Z Vol.2",
        "year": 2023
      },
      {
        "name": "Risotto",
        "album": "BO Y Z Vol.2",
        "year": 2023
      },
      {
        "name": "Balotelli (feat. Freeze Corleone)",
        "album": "Balotelli (feat. Freeze Corleone) - Single",
        "year": 2022
      }
    ]
  },
  {
    "name": "HLD",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 23,
    "albums": [
      "DROGUE 2",
      "Drogue"
    ],
    "tracks": [
      {
        "name": "RS",
        "album": "Drogue",
        "year": 2023
      },
      {
        "name": "Tout pour les loves",
        "album": "Drogue",
        "year": 2023
      },
      {
        "name": "Reptile",
        "album": "Drogue",
        "year": 2023
      },
      {
        "name": "Damas",
        "album": "Drogue",
        "year": 2023
      },
      {
        "name": "Solution",
        "album": "Drogue",
        "year": 2023
      },
      {
        "name": "H",
        "album": "Drogue",
        "year": 2023
      },
      {
        "name": "Bastos",
        "album": "Drogue",
        "year": 2023
      },
      {
        "name": "Analog",
        "album": "Drogue",
        "year": 2023
      },
      {
        "name": "Medley",
        "album": "Drogue",
        "year": 2023
      },
      {
        "name": "Dans le crime",
        "album": "Drogue",
        "year": 2023
      },
      {
        "name": "AMG",
        "album": "Drogue",
        "year": 2023
      },
      {
        "name": "INTRO",
        "album": "DROGUE 2",
        "year": 2025
      },
      {
        "name": "CANINES",
        "album": "DROGUE 2",
        "year": 2025
      },
      {
        "name": "CRITICAL",
        "album": "DROGUE 2",
        "year": 2025
      },
      {
        "name": "VIF",
        "album": "DROGUE 2",
        "year": 2025
      },
      {
        "name": "RÉSINE & MACHE",
        "album": "DROGUE 2",
        "year": 2025
      },
      {
        "name": "SOLO",
        "album": "DROGUE 2",
        "year": 2025
      },
      {
        "name": "INTERLUDE",
        "album": "DROGUE 2",
        "year": 2025
      },
      {
        "name": "HYÈNES",
        "album": "DROGUE 2",
        "year": 2025
      },
      {
        "name": "MARIA",
        "album": "DROGUE 2",
        "year": 2025
      },
      {
        "name": "MÉDAILLÉ",
        "album": "DROGUE 2",
        "year": 2025
      },
      {
        "name": "PAR TERRE",
        "album": "DROGUE 2",
        "year": 2025
      },
      {
        "name": "OUTRO",
        "album": "DROGUE 2",
        "year": 2025
      }
    ]
  },
  {
    "name": "Migos",
    "color": "#1D9E75",
    "genre": "Hip-Hop/Rap",
    "trackCount": 23,
    "albums": [
      "Culture II"
    ],
    "tracks": [
      {
        "name": "Higher We Go (Intro)",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Supastars",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Narcos",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "BBO (Bad Bitches Only) [feat. 21 Savage]",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Auto Pilot",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Walk It Talk It (feat. Drake)",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Emoji A Chain",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "CC (feat. Gucci Mane)",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Stir Fry",
        "album": "Culture II",
        "year": 2017
      },
      {
        "name": "Too Much Jewelry",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Gang Gang",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "White Sand (feat. Travis Scott, Ty Dolla $ign & Big Sean)",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Crown the Kings",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Flooded",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Beast",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Open It Up",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Movin' Too Fast",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Work Hard",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Notice Me (feat. Post Malone)",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Too Playa (feat. 2 Chainz)",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Made Men",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Top Down On Da NAWF",
        "album": "Culture II",
        "year": 2018
      },
      {
        "name": "Culture National Anthem (Outro)",
        "album": "Culture II",
        "year": 2018
      }
    ]
  },
  {
    "name": "Vacra",
    "color": "#EF9F27",
    "genre": "Afro-Pop",
    "trackCount": 22,
    "albums": [
      "Pygmalion",
      "Galatée"
    ],
    "tracks": [
      {
        "name": "Malibo",
        "album": "Pygmalion",
        "year": 2024
      },
      {
        "name": "Moscou",
        "album": "Pygmalion",
        "year": 2024
      },
      {
        "name": "Agent secret",
        "album": "Pygmalion",
        "year": 2024
      },
      {
        "name": "Hérisson",
        "album": "Pygmalion",
        "year": 2024
      },
      {
        "name": "Oh My (feat. Soolking)",
        "album": "Pygmalion",
        "year": 2024
      },
      {
        "name": "Pas comme ça",
        "album": "Pygmalion",
        "year": 2024
      },
      {
        "name": "M",
        "album": "Pygmalion",
        "year": 2024
      },
      {
        "name": "Cadran suisse",
        "album": "Pygmalion",
        "year": 2024
      },
      {
        "name": "Te quiero",
        "album": "Pygmalion",
        "year": 2024
      },
      {
        "name": "Avec toi",
        "album": "Pygmalion",
        "year": 2024
      },
      {
        "name": "Pas touché",
        "album": "Pygmalion",
        "year": 2024
      },
      {
        "name": "Nounou",
        "album": "Pygmalion",
        "year": 2024
      },
      {
        "name": "Imina",
        "album": "Pygmalion",
        "year": 2024
      },
      {
        "name": "J’aimerais lui dire",
        "album": "Pygmalion",
        "year": 2024
      },
      {
        "name": "Moto",
        "album": "Galatée",
        "year": 2023
      },
      {
        "name": "Tiki Taka",
        "album": "Galatée",
        "year": 2022
      },
      {
        "name": "Plan séquence",
        "album": "Galatée",
        "year": 2021
      },
      {
        "name": "Champipi",
        "album": "Galatée",
        "year": 2023
      },
      {
        "name": "Anémone",
        "album": "Galatée",
        "year": 2023
      },
      {
        "name": "Moi ça va",
        "album": "Galatée",
        "year": 2023
      },
      {
        "name": "Copilote (feat. Young Jonn)",
        "album": "Galatée",
        "year": 2023
      },
      {
        "name": "Coucou",
        "album": "Galatée",
        "year": 2023
      }
    ]
  },
  {
    "name": "Radiohead",
    "color": "#D4537E",
    "genre": "Alternative",
    "trackCount": 22,
    "albums": [
      "The Bends",
      "In Rainbows"
    ],
    "tracks": [
      {
        "name": "15 Step",
        "album": "In Rainbows",
        "year": 2007
      },
      {
        "name": "Bodysnatchers",
        "album": "In Rainbows",
        "year": 2007
      },
      {
        "name": "Nude",
        "album": "In Rainbows",
        "year": 2007
      },
      {
        "name": "Weird Fishes / Arpeggi",
        "album": "In Rainbows",
        "year": 2007
      },
      {
        "name": "All I Need",
        "album": "In Rainbows",
        "year": 2007
      },
      {
        "name": "Faust Arp",
        "album": "In Rainbows",
        "year": 2007
      },
      {
        "name": "Reckoner",
        "album": "In Rainbows",
        "year": 2007
      },
      {
        "name": "House of Cards",
        "album": "In Rainbows",
        "year": 2007
      },
      {
        "name": "Jigsaw Falling Into Place",
        "album": "In Rainbows",
        "year": 2007
      },
      {
        "name": "Videotape",
        "album": "In Rainbows",
        "year": 2007
      },
      {
        "name": "Planet Telex",
        "album": "The Bends",
        "year": 1995
      },
      {
        "name": "The Bends",
        "album": "The Bends",
        "year": 1995
      },
      {
        "name": "High and Dry",
        "album": "The Bends",
        "year": 1995
      },
      {
        "name": "Fake Plastic Trees",
        "album": "The Bends",
        "year": 1995
      },
      {
        "name": "Bones",
        "album": "The Bends",
        "year": 1995
      },
      {
        "name": "(Nice Dream)",
        "album": "The Bends",
        "year": 1995
      },
      {
        "name": "Just",
        "album": "The Bends",
        "year": 1995
      },
      {
        "name": "My Iron Lung",
        "album": "The Bends",
        "year": 1994
      },
      {
        "name": "Bullet Proof ... I Wish I Was",
        "album": "The Bends",
        "year": 1995
      },
      {
        "name": "Black Star",
        "album": "The Bends",
        "year": 1995
      },
      {
        "name": "Sulk",
        "album": "The Bends",
        "year": 1995
      },
      {
        "name": "Street Spirit (Fade Out)",
        "album": "The Bends",
        "year": 1995
      }
    ]
  },
  {
    "name": "TRZ",
    "color": "#378ADD",
    "genre": "Hip-Hop/Rap",
    "trackCount": 22,
    "albums": [
      "O.B.S",
      "TRANSIT"
    ],
    "tracks": [
      {
        "name": "Omar Souleyman",
        "album": "TRANSIT",
        "year": 2024
      },
      {
        "name": "Shelby",
        "album": "TRANSIT",
        "year": 2024
      },
      {
        "name": "Étrangère",
        "album": "TRANSIT",
        "year": 2024
      },
      {
        "name": "C'est Honnête",
        "album": "TRANSIT",
        "year": 2024
      },
      {
        "name": "Code",
        "album": "TRANSIT",
        "year": 2024
      },
      {
        "name": "Virage",
        "album": "TRANSIT",
        "year": 2024
      },
      {
        "name": "Barksdale",
        "album": "TRANSIT",
        "year": 2024
      },
      {
        "name": "Pavarotti",
        "album": "TRANSIT",
        "year": 2024
      },
      {
        "name": "Griselda",
        "album": "TRANSIT",
        "year": 2024
      },
      {
        "name": "Europe 22",
        "album": "O.B.S",
        "year": 2020
      },
      {
        "name": "Bâtiment",
        "album": "O.B.S",
        "year": 2020
      },
      {
        "name": "Kennedy Bridge",
        "album": "O.B.S",
        "year": 2020
      },
      {
        "name": "Obscur",
        "album": "O.B.S",
        "year": 2020
      },
      {
        "name": "Artifice",
        "album": "O.B.S",
        "year": 2020
      },
      {
        "name": "Train de vie",
        "album": "O.B.S",
        "year": 2020
      },
      {
        "name": "Freestyle Insalubre 8",
        "album": "O.B.S",
        "year": 2020
      },
      {
        "name": "Nwar",
        "album": "O.B.S",
        "year": 2020
      },
      {
        "name": "Escalier",
        "album": "O.B.S",
        "year": 2020
      },
      {
        "name": "11.43",
        "album": "O.B.S",
        "year": 2020
      },
      {
        "name": "Chemise Ouverte",
        "album": "O.B.S",
        "year": 2020
      },
      {
        "name": "Square",
        "album": "O.B.S",
        "year": 2020
      },
      {
        "name": "Hennessy (feat. RFK)",
        "album": "O.B.S",
        "year": 2020
      }
    ]
  },
  {
    "name": "Kalash Criminel",
    "color": "#639922",
    "genre": "Hip-Hop/Rap",
    "trackCount": 21,
    "albums": [
      "BON COURAGE",
      "R.A.S",
      "Oyoki",
      "But en or (feat. Damso) - Single"
    ],
    "tracks": [
      {
        "name": "Sale sonorité",
        "album": "R.A.S",
        "year": 2016
      },
      {
        "name": "Piano sombre",
        "album": "Oyoki",
        "year": 2017
      },
      {
        "name": "But en or (feat. Damso)",
        "album": "But en or (feat. Damso) - Single",
        "year": 2020
      },
      {
        "name": "10 12 14 bureau",
        "album": "R.A.S",
        "year": 2016
      },
      {
        "name": "LE MONDE EST PETIT ET DIEU EST GRAND",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "AMI.E NOIR.E",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "T'ES PAS D'LA FAMILLE",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "YES YES YES",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "ENCORE LES PROBLÈMES (feat. Freeze Corleone)",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "COUP D'ÉTAT",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "LE RECRUTEMENT DE BEN LADEN",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "NGANNOU SANS BOBBY",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "VIENS QUE J'TE FRAPPE",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "FALLAIT M'LE DIRE AVANT",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "KISS & FLY",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "LE FLOW DE MOBUTU SUR UNE PROD TRAP",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "AVERTISSEMENT DE BAVARDAGE (feat. La Fève)",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "TRAFFIC",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "YEMEN, pt. I (feat. Josman)",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "SAUVAGERIE RADIO",
        "album": "BON COURAGE",
        "year": 2024
      },
      {
        "name": "COEUR BLANC COMME JUL",
        "album": "BON COURAGE",
        "year": 2024
      }
    ]
  },
  {
    "name": "Tuerie",
    "color": "#993556",
    "genre": "Hip-Hop/Rap",
    "trackCount": 21,
    "albums": [
      "Les Amants Terribles",
      "Bleu Gospel"
    ],
    "tracks": [
      {
        "name": "Les Amants Terribles",
        "album": "Les Amants Terribles",
        "year": 2025
      },
      {
        "name": "Sorcière",
        "album": "Les Amants Terribles",
        "year": 2025
      },
      {
        "name": "FLOP",
        "album": "Les Amants Terribles",
        "year": 2025
      },
      {
        "name": "Pièce maîtresse",
        "album": "Les Amants Terribles",
        "year": 2025
      },
      {
        "name": "Sauve-moi",
        "album": "Les Amants Terribles",
        "year": 2025
      },
      {
        "name": "Lundi",
        "album": "Les Amants Terribles",
        "year": 2025
      },
      {
        "name": "Kobe",
        "album": "Les Amants Terribles",
        "year": 2025
      },
      {
        "name": "Bruno",
        "album": "Les Amants Terribles",
        "year": 2025
      },
      {
        "name": "MAÎTRE NAGEUR",
        "album": "Les Amants Terribles",
        "year": 2025
      },
      {
        "name": "BOULBI STATE OF MIND",
        "album": "Les Amants Terribles",
        "year": 2025
      },
      {
        "name": "Troll",
        "album": "Les Amants Terribles",
        "year": 2025
      },
      {
        "name": "THE BORING SONG",
        "album": "Les Amants Terribles",
        "year": 2025
      },
      {
        "name": "Dirty Magnolia",
        "album": "Les Amants Terribles",
        "year": 2025
      },
      {
        "name": "Carton",
        "album": "Les Amants Terribles",
        "year": 2025
      },
      {
        "name": "Low",
        "album": "Bleu Gospel",
        "year": 2020
      },
      {
        "name": "PRÊCHE !",
        "album": "Bleu Gospel",
        "year": 2021
      },
      {
        "name": "Sublime",
        "album": "Bleu Gospel",
        "year": 2021
      },
      {
        "name": "Silence",
        "album": "Bleu Gospel",
        "year": 2020
      },
      {
        "name": "Tiroir Bleu",
        "album": "Bleu Gospel",
        "year": 2021
      },
      {
        "name": "Puff",
        "album": "Bleu Gospel",
        "year": 2021
      },
      {
        "name": "Le givre et le vent",
        "album": "Bleu Gospel",
        "year": 2021
      }
    ]
  },
  {
    "name": "L2B",
    "color": "#0F6E56",
    "genre": "Hip-Hop/Rap",
    "trackCount": 21,
    "albums": [
      "Nés Pour Briller",
      "Nés Pour Briller : Book II",
      "Pélican - Single",
      "Nés Pour Briller : Book I"
    ],
    "tracks": [
      {
        "name": "Intro",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "Daily Paper",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "Check",
        "album": "Nés Pour Briller",
        "year": 2024
      },
      {
        "name": "Pélican",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "No Chance",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "SOS",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "Palerme",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "Point G",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "Essentiel",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "Real Bad Man",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "Movie",
        "album": "Nés Pour Briller",
        "year": 2024
      },
      {
        "name": "Tout Pour L'équipe",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "Tu M'en Veux",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "Billionaire",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "Men In Black",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "C'est Carré",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "Méchant",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "Tout Recommencer",
        "album": "Nés Pour Briller",
        "year": 2025
      },
      {
        "name": "Tout Pour L'équipe",
        "album": "Nés Pour Briller : Book II",
        "year": 2025
      },
      {
        "name": "Pélican",
        "album": "Pélican - Single",
        "year": 2025
      },
      {
        "name": "Movie",
        "album": "Nés Pour Briller : Book I",
        "year": 2024
      }
    ]
  },
  {
    "name": "Surprise",
    "color": "#BA7517",
    "genre": "Hip-Hop/Rap",
    "trackCount": 21,
    "albums": [
      "Le plus beau des monstres",
      "SI Y'A UN MONDE"
    ],
    "tracks": [
      {
        "name": "SI Y’A UN MONDE",
        "album": "SI Y'A UN MONDE",
        "year": 2025
      },
      {
        "name": "FRENCHTOUCH (feat. Mandyspie)",
        "album": "SI Y'A UN MONDE",
        "year": 2025
      },
      {
        "name": "DISTANT",
        "album": "SI Y'A UN MONDE",
        "year": 2025
      },
      {
        "name": "JACK & SALLY",
        "album": "SI Y'A UN MONDE",
        "year": 2025
      },
      {
        "name": "CAUCHEMAR",
        "album": "SI Y'A UN MONDE",
        "year": 2025
      },
      {
        "name": "DERNIER ÉTÉ",
        "album": "SI Y'A UN MONDE",
        "year": 2025
      },
      {
        "name": "RIEN DE NOUVEAU",
        "album": "SI Y'A UN MONDE",
        "year": 2025
      },
      {
        "name": "+ RIEN À VOIR",
        "album": "SI Y'A UN MONDE",
        "year": 2025
      },
      {
        "name": "CHACUN SON DOS",
        "album": "SI Y'A UN MONDE",
        "year": 2025
      },
      {
        "name": "Ça donne pas envie",
        "album": "Le plus beau des monstres",
        "year": 2024
      },
      {
        "name": "Méchant dans les films",
        "album": "Le plus beau des monstres",
        "year": 2024
      },
      {
        "name": "Ego",
        "album": "Le plus beau des monstres",
        "year": 2024
      },
      {
        "name": "??? (Sdsdjs)",
        "album": "Le plus beau des monstres",
        "year": 2024
      },
      {
        "name": "La pluie",
        "album": "Le plus beau des monstres",
        "year": 2024
      },
      {
        "name": "Pas différente",
        "album": "Le plus beau des monstres",
        "year": 2024
      },
      {
        "name": "Nocive",
        "album": "Le plus beau des monstres",
        "year": 2024
      },
      {
        "name": "Interlude (feat. lou danferr)",
        "album": "Le plus beau des monstres",
        "year": 2024
      },
      {
        "name": "Y'en a qu'une",
        "album": "Le plus beau des monstres",
        "year": 2024
      },
      {
        "name": "Lavande",
        "album": "Le plus beau des monstres",
        "year": 2024
      },
      {
        "name": "Les crêpes",
        "album": "Le plus beau des monstres",
        "year": 2024
      },
      {
        "name": "Ici on voit pas les étoiles",
        "album": "Le plus beau des monstres",
        "year": 2024
      }
    ]
  },
  {
    "name": "Mobb Deep",
    "color": "#534AB7",
    "genre": "Hip-Hop/Rap",
    "trackCount": 21,
    "albums": [
      "The Infamous (25th Anniversary Expanded Edition)"
    ],
    "tracks": [
      {
        "name": "The Start of Your Ending (41st Side)",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "(The Infamous Prelude)",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Survival of the Fittest",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Eye for a Eye (Your Beef Is Mines) [feat. Nas & Raekwon]",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "(Just Step Prelude)",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Give Up the Goods (Just Step) [feat. Big Noyd]",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Temperature's Rising (feat. Crystal Johnson)",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Up North Trip",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Trife Life",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Q.U. - Hectic",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Right Back at You (feat. Ghostface Killah, Raekwon & Big Noyd)",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "(The Grave Prelude)",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Cradle to the Grave",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Drink Away the Pain (Situations) [feat. Q-Tip]",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Shook Ones, Pt. II",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Party Over (feat. Big Noyd)",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Shook Ones, Part I (Original Version)",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "The Money (Version 2) [Infamous Sessions Mix]",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Lifestyles of the Infamous (Infamous Sessions Mix)",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Shook Ones, Pt. I (Instrumental)",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      },
      {
        "name": "Shook Ones, Pt. II (Instrumental)",
        "album": "The Infamous (25th Anniversary Expanded Edition)",
        "year": 1995
      }
    ]
  },
  {
    "name": "Artr",
    "color": "#993C1D",
    "genre": "Hip-Hop/Rap",
    "trackCount": 21,
    "albums": [
      "En 4 lettres",
      "Histoire de",
      "G LA DALLE ou rien - Single"
    ],
    "tracks": [
      {
        "name": "La Substance",
        "album": "En 4 lettres",
        "year": 2025
      },
      {
        "name": "Bon chance!",
        "album": "En 4 lettres",
        "year": 2025
      },
      {
        "name": "Le physio",
        "album": "En 4 lettres",
        "year": 2025
      },
      {
        "name": "Dans ma poche",
        "album": "En 4 lettres",
        "year": 2025
      },
      {
        "name": "L'argent et les seins",
        "album": "En 4 lettres",
        "year": 2025
      },
      {
        "name": "31 décembre 2023",
        "album": "En 4 lettres",
        "year": 2025
      },
      {
        "name": "Le guide",
        "album": "En 4 lettres",
        "year": 2025
      },
      {
        "name": "He's not available",
        "album": "En 4 lettres",
        "year": 2025
      },
      {
        "name": "Le tabouret",
        "album": "En 4 lettres",
        "year": 2025
      },
      {
        "name": "Tatouage soleil (feat. 2geeked)",
        "album": "En 4 lettres",
        "year": 2025
      },
      {
        "name": "Le mec du tabac",
        "album": "En 4 lettres",
        "year": 2024
      },
      {
        "name": "L'anneau",
        "album": "En 4 lettres",
        "year": 2025
      },
      {
        "name": "Despo Rutti mood",
        "album": "Histoire de",
        "year": 2024
      },
      {
        "name": "Si vraiment!",
        "album": "Histoire de",
        "year": 2024
      },
      {
        "name": "@Wemby (feat. Strano)",
        "album": "Histoire de",
        "year": 2024
      },
      {
        "name": "Tonnerre 2 Zeus",
        "album": "Histoire de",
        "year": 2024
      },
      {
        "name": "Les Caresses des Chiennes",
        "album": "Histoire de",
        "year": 2024
      },
      {
        "name": "Comme dirait l'autre (feat. M Le Maudit)",
        "album": "Histoire de",
        "year": 2024
      },
      {
        "name": "La Voisine",
        "album": "Histoire de",
        "year": 2024
      },
      {
        "name": "Mi Parfum Mi Shit",
        "album": "Histoire de",
        "year": 2024
      },
      {
        "name": "G LA DALLE ou rien",
        "album": "G LA DALLE ou rien - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "A$AP Rocky",
    "color": "#085041",
    "genre": "Rap",
    "trackCount": 21,
    "albums": [
      "Don't Be Dumb",
      "TESTING",
      "AT.LONG.LAST.A$AP"
    ],
    "tracks": [
      {
        "name": "Everyday (feat. Rod Stewart x Miguel x Mark Ronson)",
        "album": "AT.LONG.LAST.A$AP",
        "year": 2015
      },
      {
        "name": "Purity (feat. Frank Ocean)",
        "album": "TESTING",
        "year": 2018
      },
      {
        "name": "Kids Turned Out Fine",
        "album": "TESTING",
        "year": 2018
      },
      {
        "name": "ORDER OF PROTECTION",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "HELICOPTER",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "INTERROGATION (SKIT)",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "STOLE YA FLOW",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "STAY HERE 4 LIFE (feat. Brent Faiyaz)",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "PLAYA",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "NO TRESPASSING",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "STOP SNITCHING (feat. Bossman Dlow & Sauce Walka)",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "STFU (feat. Slay Squad)",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "PUNK ROCKY",
        "album": "Don't Be Dumb",
        "year": 2025
      },
      {
        "name": "AIR FORCE (BLACK DEMARCO)",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "WHISKEY (RELEASE ME) [feat. Gorillaz & Westside Gunn]",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "ROBBERY (feat. Doechii)",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "DON'T BE DUMB / TRIP BABY",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "THE END (feat. will.i.am & Jessica Pratt)",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "SWAT TEAM",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "FISH N STEAK (WHAT IT IS) [feat. Tyler, The Creator & Jozzy]",
        "album": "Don't Be Dumb",
        "year": 2026
      },
      {
        "name": "Album Teaser",
        "album": "Don't Be Dumb",
        "year": 2026
      }
    ]
  },
  {
    "name": "Sadek",
    "color": "#854F0B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 21,
    "albums": [
      "Toujours ouvert tout l'été (Réédition)",
      "#VVRDL"
    ],
    "tracks": [
      {
        "name": "Petit prince",
        "album": "#VVRDL",
        "year": 2017
      },
      {
        "name": "Maybach",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Pas d'âme",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Pour toi",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Buzz",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Le prix de demain",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Intro Jour",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Poulailler",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Tata",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Koalas",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Soumawe (feat. Marella)",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Mon pied, ton pied",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Canada",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Sans toi",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Intro Nuit",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Qui dit mieux ?",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Le zin",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Les traîtres",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Drip",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Uber",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      },
      {
        "name": "Tendrement",
        "album": "Toujours ouvert tout l'été (Réédition)",
        "year": 2023
      }
    ]
  },
  {
    "name": "ISHA & Limsa D'aulnay",
    "color": "#72243E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 21,
    "albums": [
      "Bitume Caviar (vol.2)",
      "Bitume Caviar, Vol.1",
      "Berlingo - Single"
    ],
    "tracks": [
      {
        "name": "Berlingo",
        "album": "Bitume Caviar (vol.2)",
        "year": 2025
      },
      {
        "name": "15K",
        "album": "Bitume Caviar (vol.2)",
        "year": 2025
      },
      {
        "name": "Visiblement",
        "album": "Bitume Caviar (vol.2)",
        "year": 2025
      },
      {
        "name": "Fin de ce monde",
        "album": "Bitume Caviar (vol.2)",
        "year": 2025
      },
      {
        "name": "Maître-nageur",
        "album": "Bitume Caviar (vol.2)",
        "year": 2025
      },
      {
        "name": "Pommeau de douche",
        "album": "Bitume Caviar (vol.2)",
        "year": 2025
      },
      {
        "name": "Abd al Malik & Wallen",
        "album": "Bitume Caviar (vol.2)",
        "year": 2025
      },
      {
        "name": "Trafics locaux",
        "album": "Bitume Caviar (vol.2)",
        "year": 2025
      },
      {
        "name": "La vie qu'on mène (feat. Yamê)",
        "album": "Bitume Caviar (vol.2)",
        "year": 2025
      },
      {
        "name": "Ça suffit pas",
        "album": "Bitume Caviar (vol.2)",
        "year": 2025
      },
      {
        "name": "Berlingo",
        "album": "Berlingo - Single",
        "year": 2025
      },
      {
        "name": "Clio 4",
        "album": "Bitume Caviar, Vol.1",
        "year": 2023
      },
      {
        "name": "Le chant des cigales",
        "album": "Bitume Caviar, Vol.1",
        "year": 2023
      },
      {
        "name": "Inna di Club",
        "album": "Bitume Caviar, Vol.1",
        "year": 2023
      },
      {
        "name": "Lotissement",
        "album": "Bitume Caviar, Vol.1",
        "year": 2023
      },
      {
        "name": "Le plan A",
        "album": "Bitume Caviar, Vol.1",
        "year": 2023
      },
      {
        "name": "Le plan B",
        "album": "Bitume Caviar, Vol.1",
        "year": 2023
      },
      {
        "name": "Tard le soir",
        "album": "Bitume Caviar, Vol.1",
        "year": 2023
      },
      {
        "name": "Jimmy Fallon",
        "album": "Bitume Caviar, Vol.1",
        "year": 2023
      },
      {
        "name": "A mes yeux",
        "album": "Bitume Caviar, Vol.1",
        "year": 2023
      },
      {
        "name": "SRSD",
        "album": "Bitume Caviar, Vol.1",
        "year": 2023
      }
    ]
  },
  {
    "name": "Gazo",
    "color": "#5DCAA5",
    "genre": "Hip-Hop/Rap",
    "trackCount": 20,
    "albums": [
      "KMT",
      "Drill FR 4 (feat. Freeze Corleone) - Single",
      "TCHIN 2X - Single",
      "DRILL FR",
      "APOCALYPSE",
      "KAT (feat. La Rvfleuze) - Single"
    ],
    "tracks": [
      {
        "name": "Drill FR 4 (feat. Freeze Corleone)",
        "album": "Drill FR 4 (feat. Freeze Corleone) - Single",
        "year": 2020
      },
      {
        "name": "TCHIN 2X",
        "album": "TCHIN 2X - Single",
        "year": 2020
      },
      {
        "name": "HAINE&SEX",
        "album": "DRILL FR",
        "year": 2021
      },
      {
        "name": "HENNESSY",
        "album": "KMT",
        "year": 2022
      },
      {
        "name": "GRA GRA BOOM (feat. Skread)",
        "album": "KMT",
        "year": 2022
      },
      {
        "name": "IMPACT",
        "album": "KMT",
        "year": 2022
      },
      {
        "name": "DIE",
        "album": "KMT",
        "year": 2022
      },
      {
        "name": "FLEURS (feat. Tiakola)",
        "album": "KMT",
        "year": 2022
      },
      {
        "name": "MOLLY",
        "album": "KMT",
        "year": 2022
      },
      {
        "name": "CÉLINE 3X",
        "album": "KMT",
        "year": 2022
      },
      {
        "name": "BOSS",
        "album": "KMT",
        "year": 2022
      },
      {
        "name": "MAUVAIS 2X (feat. Ninho)",
        "album": "KMT",
        "year": 2022
      },
      {
        "name": "BECTE",
        "album": "KMT",
        "year": 2022
      },
      {
        "name": "LETTRE À UN OPPS",
        "album": "KMT",
        "year": 2022
      },
      {
        "name": "BODIES (feat. Damso)",
        "album": "KMT",
        "year": 2022
      },
      {
        "name": "JEUX DANGEREUX",
        "album": "KMT",
        "year": 2022
      },
      {
        "name": "RAPPEL",
        "album": "KMT",
        "year": 2022
      },
      {
        "name": "M.A.L.A (feat. M Huncho)",
        "album": "KMT",
        "year": 2022
      },
      {
        "name": "NANANI NANANA",
        "album": "APOCALYPSE",
        "year": 2024
      },
      {
        "name": "KAT (feat. La Rvfleuze)",
        "album": "KAT (feat. La Rvfleuze) - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "PNL",
    "color": "#F0997B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 20,
    "albums": [
      "Dans la légende",
      "Que la famille",
      "Le monde Chico"
    ],
    "tracks": [
      {
        "name": "DA",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "Mira",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "Bené",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "Bambina",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "Humain",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "Sheita",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "Tu sais pas",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "Dans la légende",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "Luz de Luna",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "Je t'haine",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "Cramés",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "Jusqu'au dernier gramme",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "Naha",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "Onizuka",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "Kratos",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "Uranus",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "La vie est belle",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "J'suis QLF",
        "album": "Dans la légende",
        "year": 2016
      },
      {
        "name": "La petite voix",
        "album": "Que la famille",
        "year": 2015
      },
      {
        "name": "Le monde ou rien",
        "album": "Le monde Chico",
        "year": 2015
      }
    ]
  },
  {
    "name": "Don Toliver",
    "color": "#85B7EB",
    "genre": "Hip-Hop/Rap",
    "trackCount": 20,
    "albums": [
      "OCTANE",
      "JACKBOYS 2",
      "Heaven Or Hell"
    ],
    "tracks": [
      {
        "name": "NO COMMENTS",
        "album": "JACKBOYS 2",
        "year": 2025
      },
      {
        "name": "Euphoria (feat. Kaash Paige & Travis Scott)",
        "album": "Heaven Or Hell",
        "year": 2020
      },
      {
        "name": "E85",
        "album": "OCTANE",
        "year": 2026
      },
      {
        "name": "Body",
        "album": "OCTANE",
        "year": 2026
      },
      {
        "name": "Rendezvous (feat. Yeat)",
        "album": "OCTANE",
        "year": 2026
      },
      {
        "name": "Secondhand (feat. Rema)",
        "album": "OCTANE",
        "year": 2026
      },
      {
        "name": "Tiramisu",
        "album": "OCTANE",
        "year": 2025
      },
      {
        "name": "ATM",
        "album": "OCTANE",
        "year": 2026
      },
      {
        "name": "Long Way To Calabasas",
        "album": "OCTANE",
        "year": 2026
      },
      {
        "name": "Rosary (feat. Travis Scott)",
        "album": "OCTANE",
        "year": 2026
      },
      {
        "name": "All The Signs (feat. Teezo Touchdown)",
        "album": "OCTANE",
        "year": 2026
      },
      {
        "name": "Call Back",
        "album": "OCTANE",
        "year": 2025
      },
      {
        "name": "Tuition",
        "album": "OCTANE",
        "year": 2026
      },
      {
        "name": "K9 (feat. SahBabii)",
        "album": "OCTANE",
        "year": 2026
      },
      {
        "name": "Excavator",
        "album": "OCTANE",
        "year": 2026
      },
      {
        "name": "Gemstone",
        "album": "OCTANE",
        "year": 2026
      },
      {
        "name": "OPPOSITE",
        "album": "OCTANE",
        "year": 2026
      },
      {
        "name": "TMU",
        "album": "OCTANE",
        "year": 2026
      },
      {
        "name": "Pleasure’s Mine",
        "album": "OCTANE",
        "year": 2026
      },
      {
        "name": "Sweet Home",
        "album": "OCTANE",
        "year": 2026
      }
    ]
  },
  {
    "name": "GAL",
    "color": "#97C459",
    "genre": "Hip-Hop/Rap",
    "trackCount": 20,
    "albums": [
      "JeuneBeurDeLaFontaine, Vol. 2",
      "JeuneBeurDeLaFontaine (vol.1)",
      "Du caviar pour mon chien - EP"
    ],
    "tracks": [
      {
        "name": "Je le pèse Intro",
        "album": "Du caviar pour mon chien - EP",
        "year": 2025
      },
      {
        "name": "C pas Bambi c le cerf",
        "album": "Du caviar pour mon chien - EP",
        "year": 2025
      },
      {
        "name": "Doggybag",
        "album": "Du caviar pour mon chien - EP",
        "year": 2025
      },
      {
        "name": "Je vis, je meurs, la nuit",
        "album": "Du caviar pour mon chien - EP",
        "year": 2025
      },
      {
        "name": "Kendrick Lamar",
        "album": "Du caviar pour mon chien - EP",
        "year": 2025
      },
      {
        "name": "mélodiedubas",
        "album": "JeuneBeurDeLaFontaine (vol.1)",
        "year": 2024
      },
      {
        "name": "cellekejcapte",
        "album": "JeuneBeurDeLaFontaine (vol.1)",
        "year": 2024
      },
      {
        "name": "saintcloud",
        "album": "JeuneBeurDeLaFontaine (vol.1)",
        "year": 2024
      },
      {
        "name": "lameufkejaime",
        "album": "JeuneBeurDeLaFontaine (vol.1)",
        "year": 2024
      },
      {
        "name": "letempsdunbackwood",
        "album": "JeuneBeurDeLaFontaine (vol.1)",
        "year": 2024
      },
      {
        "name": "saveumefaire",
        "album": "JeuneBeurDeLaFontaine (vol.1)",
        "year": 2024
      },
      {
        "name": "surlebanc",
        "album": "JeuneBeurDeLaFontaine (vol.1)",
        "year": 2024
      },
      {
        "name": "moimême",
        "album": "JeuneBeurDeLaFontaine, Vol. 2",
        "year": 2025
      },
      {
        "name": "ramènemoiunflingue",
        "album": "JeuneBeurDeLaFontaine, Vol. 2",
        "year": 2025
      },
      {
        "name": "khaptastenda",
        "album": "JeuneBeurDeLaFontaine, Vol. 2",
        "year": 2025
      },
      {
        "name": "toustypesdebavons",
        "album": "JeuneBeurDeLaFontaine, Vol. 2",
        "year": 2025
      },
      {
        "name": "jrépondsplus",
        "album": "JeuneBeurDeLaFontaine, Vol. 2",
        "year": 2025
      },
      {
        "name": "ledripdemichael",
        "album": "JeuneBeurDeLaFontaine, Vol. 2",
        "year": 2025
      },
      {
        "name": "tournerlapage",
        "album": "JeuneBeurDeLaFontaine, Vol. 2",
        "year": 2025
      },
      {
        "name": "lemomentprésent",
        "album": "JeuneBeurDeLaFontaine, Vol. 2",
        "year": 2025
      }
    ]
  },
  {
    "name": "Godson & Anybxdy",
    "color": "#FAC775",
    "genre": "Hip-Hop/Rap",
    "trackCount": 20,
    "albums": [
      "ENFANT SOLDAT",
      "LE SALON DES CONDAMNÉS"
    ],
    "tracks": [
      {
        "name": "INTRO",
        "album": "ENFANT SOLDAT",
        "year": 2023
      },
      {
        "name": "CDLF",
        "album": "ENFANT SOLDAT",
        "year": 2023
      },
      {
        "name": "HAKA",
        "album": "ENFANT SOLDAT",
        "year": 2023
      },
      {
        "name": "VERSETS",
        "album": "ENFANT SOLDAT",
        "year": 2023
      },
      {
        "name": "MAGMA",
        "album": "ENFANT SOLDAT",
        "year": 2023
      },
      {
        "name": "GLOCK",
        "album": "ENFANT SOLDAT",
        "year": 2023
      },
      {
        "name": "ABDOMEN",
        "album": "ENFANT SOLDAT",
        "year": 2023
      },
      {
        "name": "GO",
        "album": "ENFANT SOLDAT",
        "year": 2023
      },
      {
        "name": "HENNESSY",
        "album": "ENFANT SOLDAT",
        "year": 2023
      },
      {
        "name": "INTERLUDE",
        "album": "ENFANT SOLDAT",
        "year": 2023
      },
      {
        "name": "RÉCIFS",
        "album": "ENFANT SOLDAT",
        "year": 2023
      },
      {
        "name": "SALON DES CONDAMNÉS",
        "album": "LE SALON DES CONDAMNÉS",
        "year": 2024
      },
      {
        "name": "NINO BROWN",
        "album": "LE SALON DES CONDAMNÉS",
        "year": 2024
      },
      {
        "name": "INTERLUDE",
        "album": "LE SALON DES CONDAMNÉS",
        "year": 2024
      },
      {
        "name": "T'ES MON AMI MTN",
        "album": "LE SALON DES CONDAMNÉS",
        "year": 2024
      },
      {
        "name": "POSITIF",
        "album": "LE SALON DES CONDAMNÉS",
        "year": 2024
      },
      {
        "name": "LÂCHE L'AFFAIRE",
        "album": "LE SALON DES CONDAMNÉS",
        "year": 2024
      },
      {
        "name": "PARADISE",
        "album": "LE SALON DES CONDAMNÉS",
        "year": 2024
      },
      {
        "name": "PLUS DE RÊVES",
        "album": "LE SALON DES CONDAMNÉS",
        "year": 2024
      },
      {
        "name": "LA LIGNE VERTE",
        "album": "LE SALON DES CONDAMNÉS",
        "year": 2024
      }
    ]
  },
  {
    "name": "Green Montana",
    "color": "#AFA9EC",
    "genre": "Hip-Hop/Rap",
    "trackCount": 20,
    "albums": [
      "SAUDADE",
      "NOSTALGIA+",
      "Orange Métallique - Single"
    ],
    "tracks": [
      {
        "name": "PAPIERS",
        "album": "NOSTALGIA+",
        "year": 2022
      },
      {
        "name": "Amsterdam",
        "album": "Orange Métallique - Single",
        "year": 2018
      },
      {
        "name": "phileas fogg",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "ishtar",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "bissap",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "bank",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "inspecteur gadget",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "beverly hills 90210",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "dashboard",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "oseille mon amour",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "saudade",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "la brique et la drogue",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "ekenge",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "alfred borden",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "riche nouveau monde",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "barcelona92",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "mc laren & likelemba",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "la haine",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "paire de celine",
        "album": "SAUDADE",
        "year": 2024
      },
      {
        "name": "finalement riche",
        "album": "SAUDADE",
        "year": 2024
      }
    ]
  },
  {
    "name": "8ruki",
    "color": "#F5C4B3",
    "genre": "Hip-Hop/Rap",
    "trackCount": 20,
    "albums": [
      "Lobby",
      "Steam"
    ],
    "tracks": [
      {
        "name": "Roule un Shit",
        "album": "Steam",
        "year": 2019
      },
      {
        "name": "emmené",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "edhec flow",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "caractère",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "normal",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "j'dormais",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "sang d'encre",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "soustrait",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "pressure 2",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "j'ai fais",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "top 3 freestyle",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "awesome",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "ferme la",
        "album": "Lobby",
        "year": 2025
      },
      {
        "name": "emic flow",
        "album": "Lobby",
        "year": 2025
      },
      {
        "name": "pas la même",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "twerk",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "rain",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "vetements",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "flingue en or",
        "album": "Lobby",
        "year": 2026
      },
      {
        "name": "lack",
        "album": "Lobby",
        "year": 2026
      }
    ]
  },
  {
    "name": "MC Solaar",
    "color": "#9FE1CB",
    "genre": "Hip-Hop/Rap",
    "trackCount": 20,
    "albums": [
      "Qui sème le vent récolte le tempo (Deluxe video album)"
    ],
    "tracks": [
      {
        "name": "Intro",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "Qui sème le vent récolte le tempo",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "Matière grasse contre matière grise",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "Victime de la mode",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "L'histoire de l'art",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "Armand est mort",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "Quartier nord",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "Interlude",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "À temps partiel",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "Caroline",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "La musique adoucit les mœurs",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "Bouge de là (Part. 1)",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "Bouge de là (Part. 2)",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "Ragga Jam",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "La devise",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "Funky Dreamer",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 1991
      },
      {
        "name": "Qui sème le vent récolte le tempo (Clip Officiel)",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 2021
      },
      {
        "name": "Victime de la mode (Clip Officiel)",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 2021
      },
      {
        "name": "Caroline (Clip Officiel)",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 2021
      },
      {
        "name": "Bouge de là (clip officiel)",
        "album": "Qui sème le vent récolte le tempo (Deluxe video album)",
        "year": 2021
      }
    ]
  },
  {
    "name": "MHD",
    "color": "#C0DD97",
    "genre": "Hip-Hop/Rap",
    "trackCount": 19,
    "albums": [
      "19"
    ],
    "tracks": [
      {
        "name": "Intro Mansa (feat. Salif Keita)",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Encore",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Rouler",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Bravo",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Le temps (feat. Orelsan)",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Papalé",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Fuego",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Bébé (feat. Dadju)",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Interlude trap 2",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Oh la la",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Bella (feat. Wizkid)",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Afro Trap Pt. 10 (Moula Gang)",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Samedi dimanche",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Feeling",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Aleo (feat. Yemi Alade)",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Porsche Panamera (feat. Koys)",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Moussa",
        "album": "19",
        "year": 2018
      },
      {
        "name": "Senseless Ting (feat. Stefflon Don)",
        "album": "19",
        "year": 2018
      },
      {
        "name": "XIX",
        "album": "19",
        "year": 2018
      }
    ]
  },
  {
    "name": "Caballero",
    "color": "#F4C0D1",
    "genre": "Hip-Hop/Rap",
    "trackCount": 19,
    "albums": [
      "Dose héroïque",
      "OSITO"
    ],
    "tracks": [
      {
        "name": "VG&DV",
        "album": "Dose héroïque",
        "year": 2024
      },
      {
        "name": "Les géants",
        "album": "Dose héroïque",
        "year": 2024
      },
      {
        "name": "7YEAH (un tel miracle)",
        "album": "Dose héroïque",
        "year": 2024
      },
      {
        "name": "Plus belle vue",
        "album": "Dose héroïque",
        "year": 2024
      },
      {
        "name": "pas dit (feat. Benjamin Vndredi)",
        "album": "Dose héroïque",
        "year": 2024
      },
      {
        "name": "Populaire",
        "album": "Dose héroïque",
        "year": 2024
      },
      {
        "name": "50¢ (feat. Dinos)",
        "album": "Dose héroïque",
        "year": 2024
      },
      {
        "name": "El polló",
        "album": "Dose héroïque",
        "year": 2024
      },
      {
        "name": "HÉROÏQUE",
        "album": "Dose héroïque",
        "year": 2024
      },
      {
        "name": "Le genre de truc qui reste à Vegas (feat. Edge)",
        "album": "Dose héroïque",
        "year": 2024
      },
      {
        "name": "Vernissage (feat. Lesram)",
        "album": "Dose héroïque",
        "year": 2024
      },
      {
        "name": "Rose orangé",
        "album": "Dose héroïque",
        "year": 2024
      },
      {
        "name": "PARTIE I : BOULIMIQUE",
        "album": "OSITO",
        "year": 2022
      },
      {
        "name": "PARTIE II : TIME CRISIS",
        "album": "OSITO",
        "year": 2022
      },
      {
        "name": "PARTIE III : ÉNERGUMÈNE",
        "album": "OSITO",
        "year": 2022
      },
      {
        "name": "PARTIE IV : PHALANGES BLEUTÉES",
        "album": "OSITO",
        "year": 2022
      },
      {
        "name": "PARTIE V : TOURNESOLS",
        "album": "OSITO",
        "year": 2022
      },
      {
        "name": "Robot",
        "album": "OSITO",
        "year": 2022
      },
      {
        "name": "Imagine ce son en concert",
        "album": "OSITO",
        "year": 2022
      }
    ]
  },
  {
    "name": "Jaymee",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 19,
    "albums": [
      "Brand New Jazz Trilogie",
      "ÇA C'EST DU RUN - EP",
      "ÇA C'EST DU RUN 2 - EP"
    ],
    "tracks": [
      {
        "name": "HOLLISTER",
        "album": "ÇA C'EST DU RUN 2 - EP",
        "year": 2024
      },
      {
        "name": "GRANDES CHOSES",
        "album": "ÇA C'EST DU RUN 2 - EP",
        "year": 2024
      },
      {
        "name": "PART DE MOI",
        "album": "ÇA C'EST DU RUN 2 - EP",
        "year": 2024
      },
      {
        "name": "CREUX",
        "album": "ÇA C'EST DU RUN 2 - EP",
        "year": 2024
      },
      {
        "name": "BIZZ",
        "album": "ÇA C'EST DU RUN - EP",
        "year": 2024
      },
      {
        "name": "TOUT LE MONDE AUTOUR",
        "album": "ÇA C'EST DU RUN - EP",
        "year": 2024
      },
      {
        "name": "SUAREZ EN 2014 (feat. Furlax)",
        "album": "ÇA C'EST DU RUN - EP",
        "year": 2024
      },
      {
        "name": "OUH !",
        "album": "ÇA C'EST DU RUN - EP",
        "year": 2024
      },
      {
        "name": "BRIGHT",
        "album": "ÇA C'EST DU RUN - EP",
        "year": 2024
      },
      {
        "name": "DM",
        "album": "ÇA C'EST DU RUN - EP",
        "year": 2024
      },
      {
        "name": "Brand New Jazz",
        "album": "Brand New Jazz Trilogie",
        "year": 2023
      },
      {
        "name": "Brand New Jazz 2",
        "album": "Brand New Jazz Trilogie",
        "year": 2023
      },
      {
        "name": "Brand New Jazz 3",
        "album": "Brand New Jazz Trilogie",
        "year": 2023
      },
      {
        "name": "Brand New Jazz (sped up)",
        "album": "Brand New Jazz Trilogie",
        "year": 2023
      },
      {
        "name": "Brand New Jazz 2 (sped up)",
        "album": "Brand New Jazz Trilogie",
        "year": 2023
      },
      {
        "name": "Brand New Jazz 3 (sped up)",
        "album": "Brand New Jazz Trilogie",
        "year": 2023
      },
      {
        "name": "Brand New Jazz (slowed)",
        "album": "Brand New Jazz Trilogie",
        "year": 2023
      },
      {
        "name": "Brand New Jazz 2 (slowed)",
        "album": "Brand New Jazz Trilogie",
        "year": 2023
      },
      {
        "name": "Brand New Jazz 3 (slowed)",
        "album": "Brand New Jazz Trilogie",
        "year": 2023
      }
    ]
  },
  {
    "name": "Youssef Swatt's",
    "color": "#1A5FB4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 19,
    "albums": [
      "Pour que les étoiles brillent",
      "Chute Libre"
    ],
    "tracks": [
      {
        "name": "Turbulences",
        "album": "Chute Libre",
        "year": 2024
      },
      {
        "name": "L’ordre des choses",
        "album": "Chute Libre",
        "year": 2025
      },
      {
        "name": "24CARATS",
        "album": "Chute Libre",
        "year": 2025
      },
      {
        "name": "Le monde qui tourne autour de moi",
        "album": "Chute Libre",
        "year": 2025
      },
      {
        "name": "Générique de fin",
        "album": "Chute Libre",
        "year": 2025
      },
      {
        "name": "Le Rap est mort",
        "album": "Pour que les étoiles brillent",
        "year": 2022
      },
      {
        "name": "Le poids des mots (feat. Oxmo Puccino)",
        "album": "Pour que les étoiles brillent",
        "year": 2022
      },
      {
        "name": "Remonter le temps",
        "album": "Pour que les étoiles brillent",
        "year": 2021
      },
      {
        "name": "Ma belle",
        "album": "Pour que les étoiles brillent",
        "year": 2022
      },
      {
        "name": "Fais-le",
        "album": "Pour que les étoiles brillent",
        "year": 2022
      },
      {
        "name": "Alinéa",
        "album": "Pour que les étoiles brillent",
        "year": 2022
      },
      {
        "name": "Bic rouge",
        "album": "Pour que les étoiles brillent",
        "year": 2022
      },
      {
        "name": "Allume la lumière",
        "album": "Pour que les étoiles brillent",
        "year": 2022
      },
      {
        "name": "Miroir",
        "album": "Pour que les étoiles brillent",
        "year": 2022
      },
      {
        "name": "Les invisibles",
        "album": "Pour que les étoiles brillent",
        "year": 2022
      },
      {
        "name": "Entre deux chaises",
        "album": "Pour que les étoiles brillent",
        "year": 2022
      },
      {
        "name": "Solo",
        "album": "Pour que les étoiles brillent",
        "year": 2022
      },
      {
        "name": "L'amie imaginaire",
        "album": "Pour que les étoiles brillent",
        "year": 2022
      },
      {
        "name": "Quelques notes suffisent",
        "album": "Pour que les étoiles brillent",
        "year": 2022
      }
    ]
  },
  {
    "name": "SDM",
    "color": "#2D8A4E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 19,
    "albums": [
      "Liens du 100",
      "A LA VIE A LA MORT"
    ],
    "tracks": [
      {
        "name": "Mr. Ocho",
        "album": "Liens du 100",
        "year": 2022
      },
      {
        "name": "Bolide allemand",
        "album": "Liens du 100",
        "year": 2022
      },
      {
        "name": "Ragnar",
        "album": "Liens du 100",
        "year": 2022
      },
      {
        "name": "Si tu savais",
        "album": "Liens du 100",
        "year": 2022
      },
      {
        "name": "Cette année-là",
        "album": "Liens du 100",
        "year": 2022
      },
      {
        "name": "Dans le club",
        "album": "Liens du 100",
        "year": 2022
      },
      {
        "name": "Jacque*** Bag",
        "album": "Liens du 100",
        "year": 2022
      },
      {
        "name": "2sang43",
        "album": "Liens du 100",
        "year": 2022
      },
      {
        "name": "Redescends (feat. Tiakola)",
        "album": "Liens du 100",
        "year": 2022
      },
      {
        "name": "File de gauche",
        "album": "Liens du 100",
        "year": 2022
      },
      {
        "name": "Le temps",
        "album": "Liens du 100",
        "year": 2022
      },
      {
        "name": "Sang40",
        "album": "Liens du 100",
        "year": 2022
      },
      {
        "name": "Ragnar",
        "album": "Liens du 100",
        "year": 2022
      },
      {
        "name": "Cette année-là",
        "album": "Liens du 100",
        "year": 2022
      },
      {
        "name": "Redescends (feat. Tiakola)",
        "album": "Liens du 100",
        "year": 2022
      },
      {
        "name": "MERCI",
        "album": "A LA VIE A LA MORT",
        "year": 2024
      },
      {
        "name": "POUR ELLE",
        "album": "A LA VIE A LA MORT",
        "year": 2024
      },
      {
        "name": "CARTIER SANTOS",
        "album": "A LA VIE A LA MORT",
        "year": 2024
      },
      {
        "name": "ALVALM",
        "album": "A LA VIE A LA MORT",
        "year": 2024
      }
    ]
  },
  {
    "name": "kawa!",
    "color": "#C4622D",
    "genre": "Hip-Hop/Rap",
    "trackCount": 19,
    "albums": [
      "kawa vs. Le Monde",
      "2019"
    ],
    "tracks": [
      {
        "name": "AERUS",
        "album": "2019",
        "year": 2025
      },
      {
        "name": "WAR MACHINE",
        "album": "2019",
        "year": 2025
      },
      {
        "name": "RIO",
        "album": "2019",
        "year": 2025
      },
      {
        "name": "HILLS",
        "album": "2019",
        "year": 2025
      },
      {
        "name": "SAFETY",
        "album": "2019",
        "year": 2025
      },
      {
        "name": "SCORE",
        "album": "2019",
        "year": 2025
      },
      {
        "name": "SAINT LOUIS",
        "album": "2019",
        "year": 2025
      },
      {
        "name": "CONTRE LE MONDE",
        "album": "kawa vs. Le Monde",
        "year": 2026
      },
      {
        "name": "LES ANIMALS",
        "album": "kawa vs. Le Monde",
        "year": 2026
      },
      {
        "name": "EX AEQUO",
        "album": "kawa vs. Le Monde",
        "year": 2026
      },
      {
        "name": "BYE",
        "album": "kawa vs. Le Monde",
        "year": 2026
      },
      {
        "name": "MCLAREN",
        "album": "kawa vs. Le Monde",
        "year": 2026
      },
      {
        "name": "MANTEAU NOIR",
        "album": "kawa vs. Le Monde",
        "year": 2026
      },
      {
        "name": "MAUVAISES HABITUDES",
        "album": "kawa vs. Le Monde",
        "year": 2026
      },
      {
        "name": "OUTSIDER",
        "album": "kawa vs. Le Monde",
        "year": 2026
      },
      {
        "name": "OUSMANE",
        "album": "kawa vs. Le Monde",
        "year": 2026
      },
      {
        "name": "T-PAIN",
        "album": "kawa vs. Le Monde",
        "year": 2026
      },
      {
        "name": "COME AGAIN",
        "album": "kawa vs. Le Monde",
        "year": 2026
      },
      {
        "name": "SEYCHELLES",
        "album": "kawa vs. Le Monde",
        "year": 2026
      }
    ]
  },
  {
    "name": "Sneazzy",
    "color": "#7B4FA6",
    "genre": "Hip-Hop/Rap",
    "trackCount": 18,
    "albums": [
      "NOUVO MODE",
      "Dieu bénisse Supersound, saison 3",
      "Dieu bénisse Supersound, saison 2",
      "Skurt Cobain (feat. Nekfeu) - Single",
      "Dieu bénisse Supersound",
      "Tchernobyl - Single",
      "FEU RÉGULIER - Single",
      "N17 - Single",
      "V - Single",
      "Ouais mec - Single"
    ],
    "tracks": [
      {
        "name": "Skurt Cobain (feat. Nekfeu)",
        "album": "Skurt Cobain (feat. Nekfeu) - Single",
        "year": 2016
      },
      {
        "name": "Skurt Cobain (feat. Nekfeu)",
        "album": "Dieu bénisse Supersound",
        "year": 2016
      },
      {
        "name": "Jenny from da Blocka (feat. Laylow & Jok'air)",
        "album": "Dieu bénisse Supersound, saison 3",
        "year": 2017
      },
      {
        "name": "ÉTINCELLES (feat. Alpha Wann, Nekfeu & S.Pri Noir)",
        "album": "NOUVO MODE",
        "year": 2020
      },
      {
        "name": "Parle pas trop (feat. Caballero, Alpha Wann & Doums)",
        "album": "Dieu bénisse Supersound, saison 3",
        "year": 2017
      },
      {
        "name": "ZÉRO DÉTAIL (feat. Nekfeu)",
        "album": "NOUVO MODE",
        "year": 2020
      },
      {
        "name": "N17",
        "album": "Dieu bénisse Supersound, saison 2",
        "year": 2017
      },
      {
        "name": "30040",
        "album": "Dieu bénisse Supersound, saison 3",
        "year": 2017
      },
      {
        "name": "3afia",
        "album": "Dieu bénisse Supersound, saison 2",
        "year": 2017
      },
      {
        "name": "Tchernobyl",
        "album": "Tchernobyl - Single",
        "year": 2018
      },
      {
        "name": "FEU RÉGULIER",
        "album": "FEU RÉGULIER - Single",
        "year": 2020
      },
      {
        "name": "N17",
        "album": "N17 - Single",
        "year": 2017
      },
      {
        "name": "V",
        "album": "V - Single",
        "year": 2018
      },
      {
        "name": "Ouais mec",
        "album": "Ouais mec - Single",
        "year": 2016
      },
      {
        "name": "À QUOI TU JOUES",
        "album": "NOUVO MODE",
        "year": 2020
      },
      {
        "name": "FEU RÉGULIER 2",
        "album": "FEU RÉGULIER 2 - Single",
        "year": 2020
      },
      {
        "name": "CIGARETTES (feat. Arma Jackson)",
        "album": "NOUVO MODE",
        "year": 2020
      },
      {
        "name": "Amaru",
        "album": "Amaru - Single",
        "year": 2016
      }
    ]
  },
  {
    "name": "Beyoncé",
    "color": "#E8593C",
    "genre": "Pop",
    "trackCount": 18,
    "albums": [
      "RENAISSANCE",
      "I AM...SASHA FIERCE",
      "I AM...SASHA FIERCE (Deluxe Version)"
    ],
    "tracks": [
      {
        "name": "If I Were a Boy",
        "album": "I AM...SASHA FIERCE",
        "year": 2008
      },
      {
        "name": "If I Were a Boy",
        "album": "I AM...SASHA FIERCE (Deluxe Version)",
        "year": 2008
      },
      {
        "name": "I'M THAT GIRL",
        "album": "RENAISSANCE",
        "year": 2022
      },
      {
        "name": "COZY",
        "album": "RENAISSANCE",
        "year": 2022
      },
      {
        "name": "ALIEN SUPERSTAR",
        "album": "RENAISSANCE",
        "year": 2022
      },
      {
        "name": "CUFF IT",
        "album": "RENAISSANCE",
        "year": 2022
      },
      {
        "name": "ENERGY (feat. BEAM)",
        "album": "RENAISSANCE",
        "year": 2022
      },
      {
        "name": "BREAK MY SOUL",
        "album": "RENAISSANCE",
        "year": 2022
      },
      {
        "name": "CHURCH GIRL",
        "album": "RENAISSANCE",
        "year": 2022
      },
      {
        "name": "PLASTIC OFF THE SOFA",
        "album": "RENAISSANCE",
        "year": 2022
      },
      {
        "name": "VIRGO'S GROOVE",
        "album": "RENAISSANCE",
        "year": 2022
      },
      {
        "name": "MOVE (feat. Grace Jones & Tems)",
        "album": "RENAISSANCE",
        "year": 2022
      },
      {
        "name": "HEATED",
        "album": "RENAISSANCE",
        "year": 2022
      },
      {
        "name": "THIQUE",
        "album": "RENAISSANCE",
        "year": 2022
      },
      {
        "name": "ALL UP IN YOUR MIND",
        "album": "RENAISSANCE",
        "year": 2022
      },
      {
        "name": "AMERICA HAS A PROBLEM",
        "album": "RENAISSANCE",
        "year": 2022
      },
      {
        "name": "PURE/HONEY",
        "album": "RENAISSANCE",
        "year": 2022
      },
      {
        "name": "SUMMER RENAISSANCE",
        "album": "RENAISSANCE",
        "year": 2022
      }
    ]
  },
  {
    "name": "Guizmo",
    "color": "#3B8BD4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 18,
    "albums": [
      "10 ANS",
      "#GPG",
      "Renard",
      "Fardeaux Du Renard - Single"
    ],
    "tracks": [
      {
        "name": "Attendez-moi",
        "album": "#GPG",
        "year": 2016
      },
      {
        "name": "Pas du même monde (feat. Bigflo & Oli)",
        "album": "Renard",
        "year": 2018
      },
      {
        "name": "Fardeaux Du Renard",
        "album": "Fardeaux Du Renard - Single",
        "year": 2025
      },
      {
        "name": "Ça mène nulle part",
        "album": "10 ANS",
        "year": 2021
      },
      {
        "name": "C'était écrit",
        "album": "10 ANS",
        "year": 2021
      },
      {
        "name": "10 ans",
        "album": "10 ANS",
        "year": 2021
      },
      {
        "name": "Fatigué patron",
        "album": "10 ANS",
        "year": 2021
      },
      {
        "name": "Rien à faire avec toi",
        "album": "10 ANS",
        "year": 2021
      },
      {
        "name": "Guiz & Teez (feat. TAÏZ)",
        "album": "10 ANS",
        "year": 2021
      },
      {
        "name": "Room",
        "album": "10 ANS",
        "year": 2021
      },
      {
        "name": "Tragique (feat. Klem)",
        "album": "10 ANS",
        "year": 2021
      },
      {
        "name": "Tout ça pour le bénéf",
        "album": "10 ANS",
        "year": 2021
      },
      {
        "name": "Blizzard",
        "album": "10 ANS",
        "year": 2021
      },
      {
        "name": "Araaaah (feat. Atanih)",
        "album": "10 ANS",
        "year": 2021
      },
      {
        "name": "Hello",
        "album": "10 ANS",
        "year": 2021
      },
      {
        "name": "Retiens le bien",
        "album": "10 ANS",
        "year": 2021
      },
      {
        "name": "Beuverly Hills",
        "album": "10 ANS",
        "year": 2021
      },
      {
        "name": "Seyar",
        "album": "10 ANS",
        "year": 2021
      }
    ]
  },
  {
    "name": "Kodak Black",
    "color": "#4A9E5C",
    "genre": "Hip-Hop/Rap",
    "trackCount": 18,
    "albums": [
      "Dying to Live",
      "Haitian Boy Kodak",
      "Project Baby 2: All Grown Up (Deluxe)",
      "Testimony - Single",
      "Bill Israel"
    ],
    "tracks": [
      {
        "name": "Don't Wanna Breathe",
        "album": "Project Baby 2: All Grown Up (Deluxe)",
        "year": 2017
      },
      {
        "name": "Testimony",
        "album": "Testimony - Single",
        "year": 2018
      },
      {
        "name": "Malcolm X.X.X.",
        "album": "Dying to Live",
        "year": 2018
      },
      {
        "name": "Testimony",
        "album": "Dying to Live",
        "year": 2018
      },
      {
        "name": "Identity Theft",
        "album": "Dying to Live",
        "year": 2018
      },
      {
        "name": "Transgression",
        "album": "Dying to Live",
        "year": 2018
      },
      {
        "name": "Calling My Spirit",
        "album": "Dying to Live",
        "year": 2018
      },
      {
        "name": "In the Flesh",
        "album": "Dying to Live",
        "year": 2018
      },
      {
        "name": "From the Cradle",
        "album": "Dying to Live",
        "year": 2018
      },
      {
        "name": "If I'm Lyin, I'm Flyin",
        "album": "Dying to Live",
        "year": 2018
      },
      {
        "name": "Could of Been Different",
        "album": "Dying to Live",
        "year": 2018
      },
      {
        "name": "Round the Roses",
        "album": "Haitian Boy Kodak",
        "year": 2021
      },
      {
        "name": "Basement on Fire",
        "album": "Haitian Boy Kodak",
        "year": 2021
      },
      {
        "name": "Oracle",
        "album": "Haitian Boy Kodak",
        "year": 2021
      },
      {
        "name": "Maffioso",
        "album": "Haitian Boy Kodak",
        "year": 2021
      },
      {
        "name": "Dummy Green",
        "album": "Bill Israel",
        "year": 2020
      },
      {
        "name": "Roll in Peace (feat. XXXTENTACION)",
        "album": "Project Baby 2: All Grown Up (Deluxe)",
        "year": 2017
      },
      {
        "name": "Unexplainable",
        "album": "Project Baby 2: All Grown Up (Deluxe)",
        "year": 2017
      }
    ]
  },
  {
    "name": "Limsa D'aulnay",
    "color": "#9B4DCA",
    "genre": "Hip-Hop/Rap",
    "trackCount": 18,
    "albums": [
      "Logique, Pt. 3 - EP",
      "Logique, Pt. 2 - EP",
      "Logique, Pt. 1 - EP",
      "Grünt Tunes",
      "Tout Simplement - Single"
    ],
    "tracks": [
      {
        "name": "Ff",
        "album": "Grünt Tunes",
        "year": 2018
      },
      {
        "name": "Tout Simplement",
        "album": "Tout Simplement - Single",
        "year": 2023
      },
      {
        "name": "Faux Départ",
        "album": "Logique, Pt. 3 - EP",
        "year": 2022
      },
      {
        "name": "J'me sens Fou ce Soir",
        "album": "Logique, Pt. 3 - EP",
        "year": 2022
      },
      {
        "name": "Paradis Vide",
        "album": "Logique, Pt. 3 - EP",
        "year": 2022
      },
      {
        "name": "Footballeur",
        "album": "Logique, Pt. 3 - EP",
        "year": 2022
      },
      {
        "name": "Comme la Lune",
        "album": "Logique, Pt. 3 - EP",
        "year": 2022
      },
      {
        "name": "Black Room - Bonus Track",
        "album": "Logique, Pt. 3 - EP",
        "year": 2022
      },
      {
        "name": "Seul Two",
        "album": "Logique, Pt. 2 - EP",
        "year": 2020
      },
      {
        "name": "ASB",
        "album": "Logique, Pt. 2 - EP",
        "year": 2020
      },
      {
        "name": "Starting Block (feat. Isha)",
        "album": "Logique, Pt. 2 - EP",
        "year": 2020
      },
      {
        "name": "Ça M'arrange (feat. Jean Jass)",
        "album": "Logique, Pt. 2 - EP",
        "year": 2020
      },
      {
        "name": "Le Ptit Limsa",
        "album": "Logique, Pt. 2 - EP",
        "year": 2020
      },
      {
        "name": "4 Décembre",
        "album": "Logique, Pt. 1 - EP",
        "year": 2020
      },
      {
        "name": "Attiré Par La Night",
        "album": "Logique, Pt. 1 - EP",
        "year": 2020
      },
      {
        "name": "Lost Highway",
        "album": "Logique, Pt. 1 - EP",
        "year": 2020
      },
      {
        "name": "Avec Moi",
        "album": "Logique, Pt. 1 - EP",
        "year": 2020
      },
      {
        "name": "Duper",
        "album": "Logique, Pt. 1 - EP",
        "year": 2020
      }
    ]
  },
  {
    "name": "Bigflo & Oli",
    "color": "#D4A017",
    "genre": "Hip-Hop/Rap",
    "trackCount": 18,
    "albums": [
      "Karma",
      "La vraie vie (Deluxe)",
      "44D - Single",
      "Vendredi 13 Mars - Single",
      "Focus - Single",
      "Mexico en Janvier_freestyle 2025 - Single",
      "Cadaqués en Novembre_freestyle 2025 - Single"
    ],
    "tracks": [
      {
        "name": "La vraie vie",
        "album": "La vraie vie (Deluxe)",
        "year": 2017
      },
      {
        "name": "44D",
        "album": "44D - Single",
        "year": 2026
      },
      {
        "name": "Vendredi 13 Mars",
        "album": "Vendredi 13 Mars - Single",
        "year": 2026
      },
      {
        "name": "Focus",
        "album": "Focus - Single",
        "year": 2026
      },
      {
        "name": "Family Business",
        "album": "Karma",
        "year": 2026
      },
      {
        "name": "Minimum !",
        "album": "Karma",
        "year": 2026
      },
      {
        "name": "44D",
        "album": "Karma",
        "year": 2026
      },
      {
        "name": "Karma",
        "album": "Karma",
        "year": 2026
      },
      {
        "name": "Le Retour du Texte",
        "album": "Karma",
        "year": 2026
      },
      {
        "name": "Focus",
        "album": "Karma",
        "year": 2026
      },
      {
        "name": "Le goût du sel",
        "album": "Karma",
        "year": 2026
      },
      {
        "name": "Picasso",
        "album": "Karma",
        "year": 2026
      },
      {
        "name": "DU RAP HARDCORE",
        "album": "Karma",
        "year": 2026
      },
      {
        "name": "W_Osaka_hotel.mp3",
        "album": "Karma",
        "year": 2026
      },
      {
        "name": "Remontada",
        "album": "Karma",
        "year": 2026
      },
      {
        "name": "Les Dieux et les Rois",
        "album": "Karma",
        "year": 2026
      },
      {
        "name": "Mexico en Janvier_freestyle 2025",
        "album": "Mexico en Janvier_freestyle 2025 - Single",
        "year": 2025
      },
      {
        "name": "Cadaqués en Novembre_freestyle 2025",
        "album": "Cadaqués en Novembre_freestyle 2025 - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "Veridis Project",
    "color": "#FF6B6B",
    "genre": "Electronic",
    "trackCount": 18,
    "albums": [
      "avec le temps tout partira",
      "Voir le soleil - EP",
      "FEMTOSOULS - Single",
      "Bushi Mononoké - Single",
      "Initial K2A - Single",
      "Ver92is Quo - Single"
    ],
    "tracks": [
      {
        "name": "Fragments",
        "album": "avec le temps tout partira",
        "year": 2025
      },
      {
        "name": "RAW",
        "album": "avec le temps tout partira",
        "year": 2025
      },
      {
        "name": "e.motion",
        "album": "avec le temps tout partira",
        "year": 2025
      },
      {
        "name": "Horizon",
        "album": "avec le temps tout partira",
        "year": 2025
      },
      {
        "name": "Interlude",
        "album": "avec le temps tout partira",
        "year": 2025
      },
      {
        "name": "Agheel",
        "album": "avec le temps tout partira",
        "year": 2025
      },
      {
        "name": "Ether",
        "album": "avec le temps tout partira",
        "year": 2025
      },
      {
        "name": "Eden",
        "album": "avec le temps tout partira",
        "year": 2025
      },
      {
        "name": "Cosmos End",
        "album": "avec le temps tout partira",
        "year": 2025
      },
      {
        "name": "FEMTOSOULS",
        "album": "FEMTOSOULS - Single",
        "year": 2024
      },
      {
        "name": "Bushi Mononoké",
        "album": "Bushi Mononoké - Single",
        "year": 2024
      },
      {
        "name": "Initial K2A",
        "album": "Initial K2A - Single",
        "year": 2023
      },
      {
        "name": "Ver92is Quo",
        "album": "Ver92is Quo - Single",
        "year": 2022
      },
      {
        "name": "Le vent se lève",
        "album": "Voir le soleil - EP",
        "year": 2025
      },
      {
        "name": "Voir le soleil",
        "album": "Voir le soleil - EP",
        "year": 2025
      },
      {
        "name": "Tant de peine",
        "album": "Voir le soleil - EP",
        "year": 2025
      },
      {
        "name": "Ghorba",
        "album": "Voir le soleil - EP",
        "year": 2025
      },
      {
        "name": "Sur ton étoile",
        "album": "Voir le soleil - EP",
        "year": 2025
      }
    ]
  },
  {
    "name": "Chanceko",
    "color": "#4ECDC4",
    "genre": "Alternative Rap",
    "trackCount": 18,
    "albums": [
      "La voix dans ma tête (Deluxe)"
    ],
    "tracks": [
      {
        "name": "Un dimanche",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2023
      },
      {
        "name": "Ma dignité (feat. Khali)",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2023
      },
      {
        "name": "S.o.L.o",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2023
      },
      {
        "name": "État second PART. 1 - Euphorie",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2023
      },
      {
        "name": "Ces choses que tu ne sais pas",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2023
      },
      {
        "name": "Balance",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2023
      },
      {
        "name": "Ma fierté.",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2023
      },
      {
        "name": "La voix dans ma tête",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2023
      },
      {
        "name": "Accalmie",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2023
      },
      {
        "name": "Sorry",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2023
      },
      {
        "name": "Pyjama party",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2023
      },
      {
        "name": "Un lundi",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2023
      },
      {
        "name": "Everyday",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2023
      },
      {
        "name": "Un dimanche (Live session)",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2024
      },
      {
        "name": "S.o.L.o (Live session)",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2024
      },
      {
        "name": "Ces choses que tu ne sais pas (Live session)",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2024
      },
      {
        "name": "Accalmie (Live session)",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2024
      },
      {
        "name": "Pyjama party (Live session)",
        "album": "La voix dans ma tête (Deluxe)",
        "year": 2024
      }
    ]
  },
  {
    "name": "LEDOUBLE",
    "color": "#45B7D1",
    "genre": "Hip-Hop/Rap",
    "trackCount": 18,
    "albums": [
      "SOUTHSIDE THERAPY : Problèmes Particuliers, Pt. 1",
      "Avec un grand A"
    ],
    "tracks": [
      {
        "name": "LES 200 INTRO",
        "album": "SOUTHSIDE THERAPY : Problèmes Particuliers, Pt. 1",
        "year": 2025
      },
      {
        "name": "ONLY M&F",
        "album": "SOUTHSIDE THERAPY : Problèmes Particuliers, Pt. 1",
        "year": 2025
      },
      {
        "name": "LOUNISLEDOUBLEENHOODPLACE (feat. OgLounis)",
        "album": "SOUTHSIDE THERAPY : Problèmes Particuliers, Pt. 1",
        "year": 2025
      },
      {
        "name": "LA MOUSTIQUAIRE",
        "album": "SOUTHSIDE THERAPY : Problèmes Particuliers, Pt. 1",
        "year": 2025
      },
      {
        "name": "CODE TRICHEUR (feat. 3xmacoño)",
        "album": "SOUTHSIDE THERAPY : Problèmes Particuliers, Pt. 1",
        "year": 2025
      },
      {
        "name": "FRERE TYPE BEAT",
        "album": "SOUTHSIDE THERAPY : Problèmes Particuliers, Pt. 1",
        "year": 2025
      },
      {
        "name": "GAL INTERLUDE (JM PAS LES RAPPEURS) [feat. GAL]",
        "album": "SOUTHSIDE THERAPY : Problèmes Particuliers, Pt. 1",
        "year": 2025
      },
      {
        "name": "AVEC BABA",
        "album": "SOUTHSIDE THERAPY : Problèmes Particuliers, Pt. 1",
        "year": 2025
      },
      {
        "name": "GUY66 (feat. CHAVI)",
        "album": "SOUTHSIDE THERAPY : Problèmes Particuliers, Pt. 1",
        "year": 2025
      },
      {
        "name": "JSAVAIS TROP QUOI DIRE",
        "album": "SOUTHSIDE THERAPY : Problèmes Particuliers, Pt. 1",
        "year": 2025
      },
      {
        "name": "SUPPORT IS THE NEW RESPECT OUTRO",
        "album": "SOUTHSIDE THERAPY : Problèmes Particuliers, Pt. 1",
        "year": 2025
      },
      {
        "name": "CANADA",
        "album": "Avec un grand A",
        "year": 2023
      },
      {
        "name": "RAF (feat. Chavi)",
        "album": "Avec un grand A",
        "year": 2023
      },
      {
        "name": "CATANE",
        "album": "Avec un grand A",
        "year": 2023
      },
      {
        "name": "GROS TONY",
        "album": "Avec un grand A",
        "year": 2023
      },
      {
        "name": "PARTYNEXTDOOR",
        "album": "Avec un grand A",
        "year": 2023
      },
      {
        "name": "FLOW CARABINE (feat. DEELEE S)",
        "album": "Avec un grand A",
        "year": 2023
      },
      {
        "name": "LE N ET LE C",
        "album": "Avec un grand A",
        "year": 2023
      }
    ]
  },
  {
    "name": "21 Savage",
    "color": "#96CEB4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 17,
    "albums": [
      "i am > i was (Deluxe)",
      "Her Loss"
    ],
    "tracks": [
      {
        "name": "ball w/o you",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "pad lock",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "good day",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "asmr",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "all my friends",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "can't leave without it",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "out for the night",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "4L",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "break da law",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "a&t",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "letter 2 my momma",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "gun smoke",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "out for the night (part 2)",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "1.5",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "monster",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "a lot",
        "album": "i am > i was (Deluxe)",
        "year": 2018
      },
      {
        "name": "3AM on Glenwood",
        "album": "Her Loss",
        "year": 2022
      }
    ]
  },
  {
    "name": "Central Cee",
    "color": "#FFEAA7",
    "genre": "Hip-Hop/Rap",
    "trackCount": 17,
    "albums": [
      "Wild West",
      "Day in the Life - Single",
      "Obsessed With You - Single",
      "ALL ROADS LEAD HOME"
    ],
    "tracks": [
      {
        "name": "Day in the Life",
        "album": "Day in the Life - Single",
        "year": 2020
      },
      {
        "name": "Obsessed With You",
        "album": "Obsessed With You - Single",
        "year": 2021
      },
      {
        "name": "Hate It Or Luv It",
        "album": "Wild West",
        "year": 2021
      },
      {
        "name": "Fraud",
        "album": "Wild West",
        "year": 2021
      },
      {
        "name": "Sex Money Drugs",
        "album": "Wild West",
        "year": 2021
      },
      {
        "name": "Dun Deal",
        "album": "Wild West",
        "year": 2021
      },
      {
        "name": "Commitment Issues",
        "album": "Wild West",
        "year": 2021
      },
      {
        "name": "Day in the Life",
        "album": "Wild West",
        "year": 2020
      },
      {
        "name": "Ruby",
        "album": "Wild West",
        "year": 2021
      },
      {
        "name": "6 For 6",
        "album": "Wild West",
        "year": 2021
      },
      {
        "name": "Tension",
        "album": "Wild West",
        "year": 2021
      },
      {
        "name": "Gangbiz",
        "album": "Wild West",
        "year": 2021
      },
      {
        "name": "The Bag",
        "album": "Wild West",
        "year": 2021
      },
      {
        "name": "Loading",
        "album": "Wild West",
        "year": 2020
      },
      {
        "name": "Xmas Eve",
        "album": "Wild West",
        "year": 2021
      },
      {
        "name": "Pinging (6 Figures)",
        "album": "Wild West",
        "year": 2021
      },
      {
        "name": "ICEMAN FREESTYLE",
        "album": "ALL ROADS LEAD HOME",
        "year": 2026
      }
    ]
  },
  {
    "name": "Doums",
    "color": "#7F77DD",
    "genre": "Hip-Hop/Rap",
    "trackCount": 17,
    "albums": [
      "Pull à capuche et billets mauves",
      "Règlement Freestyle #5 - Single",
      "Pilote"
    ],
    "tracks": [
      {
        "name": "Intro",
        "album": "Pull à capuche et billets mauves",
        "year": 2022
      },
      {
        "name": "Movie",
        "album": "Pull à capuche et billets mauves",
        "year": 2022
      },
      {
        "name": "90' (feat. Freeze corleone)",
        "album": "Pull à capuche et billets mauves",
        "year": 2022
      },
      {
        "name": "Thalasso (feat. Headie One)",
        "album": "Pull à capuche et billets mauves",
        "year": 2022
      },
      {
        "name": "Banlieu",
        "album": "Pull à capuche et billets mauves",
        "year": 2022
      },
      {
        "name": "Entre 5 et 7 (Freestyle)",
        "album": "Pull à capuche et billets mauves",
        "year": 2022
      },
      {
        "name": "On s'aime (Remix)",
        "album": "Pull à capuche et billets mauves",
        "year": 2022
      },
      {
        "name": "Roméo doit mourir",
        "album": "Pull à capuche et billets mauves",
        "year": 2022
      },
      {
        "name": "South London (feat. Nekfeu)",
        "album": "Pull à capuche et billets mauves",
        "year": 2022
      },
      {
        "name": "Mondéo (feat. PLK)",
        "album": "Pull à capuche et billets mauves",
        "year": 2022
      },
      {
        "name": "Stars (feat. Laylow)",
        "album": "Pull à capuche et billets mauves",
        "year": 2022
      },
      {
        "name": "Fresh",
        "album": "Pull à capuche et billets mauves",
        "year": 2022
      },
      {
        "name": "Électron Libre (feat. Jazzy Bazz, 2zer & Eff Gee)",
        "album": "Pull à capuche et billets mauves",
        "year": 2022
      },
      {
        "name": "Un Deux Marqué le Pas (feat. MHD)",
        "album": "Pull à capuche et billets mauves",
        "year": 2022
      },
      {
        "name": "Roller Champagne",
        "album": "Pull à capuche et billets mauves",
        "year": 2022
      },
      {
        "name": "Règlement Freestyle #5",
        "album": "Règlement Freestyle #5 - Single",
        "year": 2017
      },
      {
        "name": "Jeunes retraités (feat. Alpha Wann)",
        "album": "Pilote",
        "year": 2017
      }
    ]
  },
  {
    "name": "Coelho",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 17,
    "albums": [
      "Un jour de moins",
      "Vanités",
      "Philadelphia",
      "Amf - Nouvelle École - Single",
      "LE SOLEIL NE S'ÉTEINT JAMAIS",
      "notre france adorée - Single"
    ],
    "tracks": [
      {
        "name": "Eternité",
        "album": "Vanités",
        "year": 2018
      },
      {
        "name": "Désirs",
        "album": "Vanités",
        "year": 2018
      },
      {
        "name": "Longue Vie",
        "album": "Philadelphia",
        "year": 2017
      },
      {
        "name": "Amf - Nouvelle École",
        "album": "Amf - Nouvelle École - Single",
        "year": 2023
      },
      {
        "name": "Le temps d'un verre",
        "album": "Un jour de moins",
        "year": 2022
      },
      {
        "name": "Maudit",
        "album": "Un jour de moins",
        "year": 2022
      },
      {
        "name": "Anonymat",
        "album": "Un jour de moins",
        "year": 2022
      },
      {
        "name": "Yomb",
        "album": "Un jour de moins",
        "year": 2022
      },
      {
        "name": "Un jour de moins",
        "album": "Un jour de moins",
        "year": 2022
      },
      {
        "name": "À ma place",
        "album": "Un jour de moins",
        "year": 2022
      },
      {
        "name": "Mes névroses (feat. Tuerie)",
        "album": "Un jour de moins",
        "year": 2022
      },
      {
        "name": "Pour cette vie (feat. IPNDEGO)",
        "album": "Un jour de moins",
        "year": 2022
      },
      {
        "name": "Petit frère",
        "album": "Un jour de moins",
        "year": 2022
      },
      {
        "name": "Vision",
        "album": "Un jour de moins",
        "year": 2022
      },
      {
        "name": "Lessgo",
        "album": "Un jour de moins",
        "year": 2022
      },
      {
        "name": "SOUNDCHECK (BONUS TRACK)",
        "album": "LE SOLEIL NE S'ÉTEINT JAMAIS",
        "year": 2023
      },
      {
        "name": "notre france adorée",
        "album": "notre france adorée - Single",
        "year": 2026
      }
    ]
  },
  {
    "name": "Deen Burbigo",
    "color": "#1D9E75",
    "genre": "Hip-Hop/Rap",
    "trackCount": 17,
    "albums": [
      "OG SAN",
      "OG SAN II",
      "Cercle vertueux"
    ],
    "tracks": [
      {
        "name": "AGENT ORANGE (feat. Nekfeu)",
        "album": "OG SAN",
        "year": 2021
      },
      {
        "name": "SENNIN MODE",
        "album": "OG SAN",
        "year": 2021
      },
      {
        "name": "OG SAN",
        "album": "Cercle vertueux",
        "year": 2020
      },
      {
        "name": "CERCLE VICIEUX",
        "album": "Cercle vertueux",
        "year": 2020
      },
      {
        "name": "DES LITRES ET DES VOLTS",
        "album": "OG SAN II",
        "year": 2023
      },
      {
        "name": "AMOUR",
        "album": "OG SAN II",
        "year": 2023
      },
      {
        "name": "COQUILLAGE",
        "album": "OG SAN II",
        "year": 2023
      },
      {
        "name": "RECOMMANDE",
        "album": "OG SAN II",
        "year": 2023
      },
      {
        "name": "OKINAWA",
        "album": "OG SAN II",
        "year": 2023
      },
      {
        "name": "FICHU",
        "album": "OG SAN II",
        "year": 2023
      },
      {
        "name": "OJIISAMA",
        "album": "OG SAN",
        "year": 2021
      },
      {
        "name": "MENTALITE",
        "album": "OG SAN",
        "year": 2021
      },
      {
        "name": "AGENT ORANGE (feat. Nekfeu)",
        "album": "OG SAN",
        "year": 2021
      },
      {
        "name": "PROMOTION",
        "album": "OG SAN",
        "year": 2021
      },
      {
        "name": "SMITH",
        "album": "OG SAN",
        "year": 2021
      },
      {
        "name": "MANSA MOUSSA",
        "album": "OG SAN",
        "year": 2021
      },
      {
        "name": "D1",
        "album": "OG SAN",
        "year": 2021
      }
    ]
  },
  {
    "name": "La Fouine",
    "color": "#EF9F27",
    "genre": "Hip-Hop/Rap",
    "trackCount": 17,
    "albums": [
      "Capitale du crime 3"
    ],
    "tracks": [
      {
        "name": "Nouveau Boss",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "Vntm.com (feat. Dj Khaled)",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "C'est ça le thème",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "Ben Laden",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "Encore une nuit (feat. Corneille & Soprano)",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "J'arrive en balle (feat. Fababy)",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "Rollin' Like a Boss (feat. T-Pain & Mackenson)",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "Jalousie (feat. Leck, Sixcoup & Fababy)",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "On se refait (feat. Mister You)",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "Meilleur Ennemi (feat. Nessbeal)",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "T'es mort dans l'film (feat. Ace Hood)",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "Vécu (feat. Kamelancien)",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "Tu vas prendre cher (feat. Orelsan)",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "Bienvenue dans le 78",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "Pendez-les 2012 (feat. R.E.D.K., S.Pri Noir, still fresh & Sadek)",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "Drogba (feat. Alonzo, Sultan & M.A.S.)",
        "album": "Capitale du crime 3",
        "year": 2011
      },
      {
        "name": "Capitale du crime 3 (feat. 3010 & Sneazzy West)",
        "album": "Capitale du crime 3",
        "year": 2011
      }
    ]
  },
  {
    "name": "J. Cole",
    "color": "#D4537E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 17,
    "albums": [
      "The Fall-Off"
    ],
    "tracks": [
      {
        "name": "29 Intro",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "Two Six",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "SAFETY",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "Poor Thang",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "WHO TF IZ U",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "Drum n Bass",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "The Let Out",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "Bombs in the Ville/Hit the Gas",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "Lonely at the Top (Bonus)",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "39 Intro",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "The Fall-Off is Inevitable",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "Life Sentence",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "Man Up Above",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "I Love Her Again",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "Quik Stop",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "and the whole world is the Ville",
        "album": "The Fall-Off",
        "year": 2026
      },
      {
        "name": "Ocean Way (Bonus)",
        "album": "The Fall-Off",
        "year": 2026
      }
    ]
  },
  {
    "name": "rob",
    "color": "#378ADD",
    "genre": "Hip-Hop/Rap",
    "trackCount": 17,
    "albums": [
      "Reality Check",
      "La part des anges - partie 1",
      "Caméo - EP"
    ],
    "tracks": [
      {
        "name": "Caméo",
        "album": "Caméo - EP",
        "year": 2023
      },
      {
        "name": "Pourquoi",
        "album": "Caméo - EP",
        "year": 2023
      },
      {
        "name": "Cash",
        "album": "Caméo - EP",
        "year": 2023
      },
      {
        "name": "6/7",
        "album": "Caméo - EP",
        "year": 2023
      },
      {
        "name": "Charbon & finesse",
        "album": "La part des anges - partie 1",
        "year": 2026
      },
      {
        "name": "Réflexes de voleur",
        "album": "La part des anges - partie 1",
        "year": 2026
      },
      {
        "name": "Le bruit des sirènes",
        "album": "La part des anges - partie 1",
        "year": 2026
      },
      {
        "name": "Trajectoires",
        "album": "La part des anges - partie 1",
        "year": 2026
      },
      {
        "name": "Grove Street",
        "album": "La part des anges - partie 1",
        "year": 2026
      },
      {
        "name": "Thoiry",
        "album": "Reality Check",
        "year": 2025
      },
      {
        "name": "5AM",
        "album": "Reality Check",
        "year": 2025
      },
      {
        "name": "Movie",
        "album": "Reality Check",
        "year": 2025
      },
      {
        "name": "100%",
        "album": "Reality Check",
        "year": 2025
      },
      {
        "name": "On s'habitue à tout",
        "album": "Reality Check",
        "year": 2025
      },
      {
        "name": "Up in smoke",
        "album": "Reality Check",
        "year": 2025
      },
      {
        "name": "Win win",
        "album": "Reality Check",
        "year": 2025
      },
      {
        "name": "Reality Check",
        "album": "Reality Check",
        "year": 2025
      }
    ]
  },
  {
    "name": "HOUDI",
    "color": "#639922",
    "genre": "Hip-Hop/Rap",
    "trackCount": 16,
    "albums": [
      "SUN7",
      "HOOD VOLUME.1"
    ],
    "tracks": [
      {
        "name": "HLM PARASOL",
        "album": "HOOD VOLUME.1",
        "year": 2024
      },
      {
        "name": "PEINE",
        "album": "HOOD VOLUME.1",
        "year": 2024
      },
      {
        "name": "HOOD",
        "album": "HOOD VOLUME.1",
        "year": 2024
      },
      {
        "name": "OP",
        "album": "HOOD VOLUME.1",
        "year": 2024
      },
      {
        "name": "BABYLONE",
        "album": "HOOD VOLUME.1",
        "year": 2024
      },
      {
        "name": "BELLE CHANSON",
        "album": "HOOD VOLUME.1",
        "year": 2023
      },
      {
        "name": "BONUS INQUIÉTANT",
        "album": "HOOD VOLUME.1",
        "year": 2024
      },
      {
        "name": "SENSATION",
        "album": "SUN7",
        "year": 2023
      },
      {
        "name": "MÉDICALE",
        "album": "SUN7",
        "year": 2023
      },
      {
        "name": "M'EFFACER",
        "album": "SUN7",
        "year": 2023
      },
      {
        "name": "AVANT TOI",
        "album": "SUN7",
        "year": 2023
      },
      {
        "name": "SCOOTER",
        "album": "SUN7",
        "year": 2023
      },
      {
        "name": "RAPPEL",
        "album": "SUN7",
        "year": 2023
      },
      {
        "name": "SUN7",
        "album": "SUN7",
        "year": 2023
      },
      {
        "name": "SORCIÈRE",
        "album": "SUN7",
        "year": 2023
      },
      {
        "name": "HOUTRO",
        "album": "SUN7",
        "year": 2023
      }
    ]
  },
  {
    "name": "Eminem",
    "color": "#993556",
    "genre": "Hip-Hop/Rap",
    "trackCount": 16,
    "albums": [
      "The Marshall Mathers LP"
    ],
    "tracks": [
      {
        "name": "Public Service Announcement 2000",
        "album": "The Marshall Mathers LP",
        "year": 2000
      },
      {
        "name": "Bitch Please 2 (feat. Dr. Dre, Snoop Dogg, Alvin Joiner & Nate Dogg)",
        "album": "The Marshall Mathers LP",
        "year": 2000
      },
      {
        "name": "Ken Kaniff (Skit)",
        "album": "The Marshall Mathers LP",
        "year": 2000
      },
      {
        "name": "Kill You",
        "album": "The Marshall Mathers LP",
        "year": 2000
      },
      {
        "name": "Drug Ballad",
        "album": "The Marshall Mathers LP",
        "year": 2000
      },
      {
        "name": "Amityville (feat. Bizarre)",
        "album": "The Marshall Mathers LP",
        "year": 2000
      },
      {
        "name": "Kim",
        "album": "The Marshall Mathers LP",
        "year": 2000
      },
      {
        "name": "Under the Influence (feat. D12)",
        "album": "The Marshall Mathers LP",
        "year": 2000
      },
      {
        "name": "Stan (feat. Dido)",
        "album": "The Marshall Mathers LP",
        "year": 2000
      },
      {
        "name": "Criminal",
        "album": "The Marshall Mathers LP",
        "year": 2000
      },
      {
        "name": "The Way I Am",
        "album": "The Marshall Mathers LP",
        "year": 2000
      },
      {
        "name": "Who Knew",
        "album": "The Marshall Mathers LP",
        "year": 2000
      },
      {
        "name": "The Real Slim Shady",
        "album": "The Marshall Mathers LP",
        "year": 2000
      },
      {
        "name": "Remember Me? (feat. RBX & Sticky Fingaz)",
        "album": "The Marshall Mathers LP",
        "year": 2000
      },
      {
        "name": "I'm Back",
        "album": "The Marshall Mathers LP",
        "year": 2000
      },
      {
        "name": "Marshall Mathers",
        "album": "The Marshall Mathers LP",
        "year": 2000
      }
    ]
  },
  {
    "name": "Kpri",
    "color": "#0F6E56",
    "genre": "Hip-Hop/Rap",
    "trackCount": 16,
    "albums": [
      "Kpri Tape, Vol. 3",
      "Kpri Tape, Vol. 2",
      "Booskpri - Single",
      "Volant - Single"
    ],
    "tracks": [
      {
        "name": "Intro",
        "album": "Kpri Tape, Vol. 3",
        "year": 2022
      },
      {
        "name": "Interlude",
        "album": "Kpri Tape, Vol. 3",
        "year": 2022
      },
      {
        "name": "24/7",
        "album": "Kpri Tape, Vol. 3",
        "year": 2022
      },
      {
        "name": "Maybach Phantom (feat. Freeze corleone)",
        "album": "Kpri Tape, Vol. 3",
        "year": 2022
      },
      {
        "name": "Basket",
        "album": "Kpri Tape, Vol. 3",
        "year": 2022
      },
      {
        "name": "Business",
        "album": "Kpri Tape, Vol. 3",
        "year": 2022
      },
      {
        "name": "Frappe 3 (feat. ASHE 22)",
        "album": "Kpri Tape, Vol. 3",
        "year": 2022
      },
      {
        "name": "À la base",
        "album": "Kpri Tape, Vol. 3",
        "year": 2022
      },
      {
        "name": "Automatique",
        "album": "Kpri Tape, Vol. 3",
        "year": 2022
      },
      {
        "name": "Hôtel",
        "album": "Kpri Tape, Vol. 3",
        "year": 2022
      },
      {
        "name": "Outro",
        "album": "Kpri Tape, Vol. 3",
        "year": 2022
      },
      {
        "name": "Volant",
        "album": "Kpri Tape, Vol. 3",
        "year": 2022
      },
      {
        "name": "Booskpri",
        "album": "Booskpri - Single",
        "year": 2021
      },
      {
        "name": "Interlude",
        "album": "Kpri Tape, Vol. 2",
        "year": 2021
      },
      {
        "name": "Volant",
        "album": "Volant - Single",
        "year": 2022
      },
      {
        "name": "Barceloneta",
        "album": "Kpri Tape, Vol. 2",
        "year": 2021
      }
    ]
  },
  {
    "name": "Lunatic",
    "color": "#BA7517",
    "genre": "Hip-Hop/Rap",
    "trackCount": 16,
    "albums": [
      "Mauvais œil",
      "Sampler Addictive Spécial Boulogne",
      "Illegal music"
    ],
    "tracks": [
      {
        "name": "La lettre",
        "album": "Mauvais œil",
        "year": 2000
      },
      {
        "name": "Intro",
        "album": "Mauvais œil",
        "year": 2000
      },
      {
        "name": "Pas l'temps pour les regrets",
        "album": "Mauvais œil",
        "year": 2000
      },
      {
        "name": "Groupe sanguin",
        "album": "Sampler Addictive Spécial Boulogne",
        "year": 2001
      },
      {
        "name": "L'effort de paix (feat. Sir Doum's)",
        "album": "Mauvais œil",
        "year": 2000
      },
      {
        "name": "Si tu kiffes pas...",
        "album": "Mauvais œil",
        "year": 2000
      },
      {
        "name": "Têtes brûlées",
        "album": "Mauvais œil",
        "year": 2000
      },
      {
        "name": "92 I (feat. Maleka Morte)",
        "album": "Mauvais œil",
        "year": 2000
      },
      {
        "name": "HLM 3",
        "album": "Mauvais œil",
        "year": 2000
      },
      {
        "name": "Le son qui met la pression",
        "album": "Mauvais œil",
        "year": 2000
      },
      {
        "name": "Avertisseurs",
        "album": "Mauvais œil",
        "year": 2000
      },
      {
        "name": "Le silence n'est pas un oubli (feat. Jockey)",
        "album": "Mauvais œil",
        "year": 2000
      },
      {
        "name": "Mauvais œil",
        "album": "Mauvais œil",
        "year": 2000
      },
      {
        "name": "Civilisé",
        "album": "Illegal music",
        "year": 2002
      },
      {
        "name": "B.O. (Banlieue ouest)",
        "album": "Mauvais œil",
        "year": 2000
      },
      {
        "name": "Groupe sanguin",
        "album": "Sampler Addictive Spécial Boulogne",
        "year": 2001
      }
    ]
  },
  {
    "name": "BabySolo33",
    "color": "#534AB7",
    "genre": "Hip-Hop/Rap",
    "trackCount": 16,
    "albums": [
      "Life Of Giulietta",
      "xoxo - Single"
    ],
    "tracks": [
      {
        "name": "Cinderella : Chapitre I",
        "album": "Life Of Giulietta",
        "year": 2025
      },
      {
        "name": "Dress2Impress",
        "album": "Life Of Giulietta",
        "year": 2025
      },
      {
        "name": "Giulietta",
        "album": "Life Of Giulietta",
        "year": 2025
      },
      {
        "name": "Tous les garçons",
        "album": "Life Of Giulietta",
        "year": 2025
      },
      {
        "name": "Fashion Victime",
        "album": "Life Of Giulietta",
        "year": 2025
      },
      {
        "name": "3kichta",
        "album": "Life Of Giulietta",
        "year": 2025
      },
      {
        "name": "Tatu Tears (2015)",
        "album": "Life Of Giulietta",
        "year": 2025
      },
      {
        "name": "P'tite tragédie",
        "album": "Life Of Giulietta",
        "year": 2025
      },
      {
        "name": "Lune rouge : Chapitre II",
        "album": "Life Of Giulietta",
        "year": 2025
      },
      {
        "name": "Rue des douves",
        "album": "Life Of Giulietta",
        "year": 2025
      },
      {
        "name": "Roméo 2.0",
        "album": "Life Of Giulietta",
        "year": 2025
      },
      {
        "name": "nvr again",
        "album": "Life Of Giulietta",
        "year": 2025
      },
      {
        "name": "LilB (2009)",
        "album": "Life Of Giulietta",
        "year": 2025
      },
      {
        "name": "Au bout du monde",
        "album": "Life Of Giulietta",
        "year": 2025
      },
      {
        "name": "rose carmin",
        "album": "Life Of Giulietta",
        "year": 2025
      },
      {
        "name": "xoxo",
        "album": "xoxo - Single",
        "year": 2023
      }
    ]
  },
  {
    "name": "Lil Wayne",
    "color": "#993C1D",
    "genre": "Hip-Hop/Rap",
    "trackCount": 16,
    "albums": [
      "Tha Carter V (Deluxe)",
      "Tha Carter V"
    ],
    "tracks": [
      {
        "name": "Used 2",
        "album": "Tha Carter V",
        "year": 2018
      },
      {
        "name": "Open Letter",
        "album": "Tha Carter V",
        "year": 2018
      },
      {
        "name": "Problems",
        "album": "Tha Carter V",
        "year": 2018
      },
      {
        "name": "Dedicate",
        "album": "Tha Carter V (Deluxe)",
        "year": 2018
      },
      {
        "name": "Open Safe",
        "album": "Tha Carter V",
        "year": 2018
      },
      {
        "name": "Mona Lisa (feat. Kendrick Lamar)",
        "album": "Tha Carter V (Deluxe)",
        "year": 2018
      },
      {
        "name": "Let It Fly (feat. Travis Scott)",
        "album": "Tha Carter V",
        "year": 2018
      },
      {
        "name": "Let It Fly (feat. Travis Scott)",
        "album": "Tha Carter V (Deluxe)",
        "year": 2018
      },
      {
        "name": "Mona Lisa (feat. Kendrick Lamar)",
        "album": "Tha Carter V",
        "year": 2018
      },
      {
        "name": "Start This Shit Off Right (feat. Ashanti & Mack Maine)",
        "album": "Tha Carter V (Deluxe)",
        "year": 2018
      },
      {
        "name": "Scottie",
        "album": "Tha Carter V (Deluxe)",
        "year": 2020
      },
      {
        "name": "Can't Be Broken",
        "album": "Tha Carter V",
        "year": 2018
      },
      {
        "name": "Took His Time",
        "album": "Tha Carter V (Deluxe)",
        "year": 2018
      },
      {
        "name": "Dope N****z (feat. Snoop Dogg)",
        "album": "Tha Carter V (Deluxe)",
        "year": 2018
      },
      {
        "name": "Let It All Work Out",
        "album": "Tha Carter V (Deluxe)",
        "year": 2018
      },
      {
        "name": "Demon",
        "album": "Tha Carter V (Deluxe)",
        "year": 2018
      }
    ]
  },
  {
    "name": "Westside Gunn & DJ Drama",
    "color": "#085041",
    "genre": "Hip-Hop/Rap",
    "trackCount": 16,
    "albums": [
      "Still Praying",
      "And Then You Pray For Me"
    ],
    "tracks": [
      {
        "name": "Waly Fay",
        "album": "Still Praying",
        "year": 2024
      },
      {
        "name": "Justin Roberts",
        "album": "Still Praying",
        "year": 2024
      },
      {
        "name": "Beef Bar",
        "album": "Still Praying",
        "year": 2024
      },
      {
        "name": "Max Caster",
        "album": "Still Praying",
        "year": 2024
      },
      {
        "name": "Dr. Britt Baker (feat. Brother Tom Sos)",
        "album": "Still Praying",
        "year": 2024
      },
      {
        "name": "I Know Verdy",
        "album": "Still Praying",
        "year": 2024
      },
      {
        "name": "Speedy 40",
        "album": "Still Praying",
        "year": 2024
      },
      {
        "name": "Duran Duran",
        "album": "Still Praying",
        "year": 2024
      },
      {
        "name": "Runway Pieces At The Last Supper",
        "album": "Still Praying",
        "year": 2024
      },
      {
        "name": "Bike Air Interlude",
        "album": "Still Praying",
        "year": 2024
      },
      {
        "name": "Free Shots (feat. Conway the Machine)",
        "album": "Still Praying",
        "year": 2024
      },
      {
        "name": "Still Praying (feat. Stove God Cooks, Benny the Butcher, Conway the Machine & Boldy James)",
        "album": "Still Praying",
        "year": 2024
      },
      {
        "name": "Underground King (feat. Rome Streetz & Westside Pootie)",
        "album": "Still Praying",
        "year": 2024
      },
      {
        "name": "Lesalleon",
        "album": "Still Praying",
        "year": 2024
      },
      {
        "name": "1989 (feat. Stove God Cooks)",
        "album": "And Then You Pray For Me",
        "year": 2023
      },
      {
        "name": "Suicide in Selfridges",
        "album": "And Then You Pray For Me",
        "year": 2023
      }
    ]
  },
  {
    "name": "8ruki & Binks Beatz",
    "color": "#854F0B",
    "genre": "Rap",
    "trackCount": 16,
    "albums": [
      "INT8TION"
    ],
    "tracks": [
      {
        "name": "WAGYU",
        "album": "INT8TION",
        "year": 2023
      },
      {
        "name": "LOBSTER",
        "album": "INT8TION",
        "year": 2023
      },
      {
        "name": "MANY MANE",
        "album": "INT8TION",
        "year": 2022
      },
      {
        "name": "MAKE IT RAIN (feat. thaHomey)",
        "album": "INT8TION",
        "year": 2023
      },
      {
        "name": "STAY UP",
        "album": "INT8TION",
        "year": 2023
      },
      {
        "name": "PLUS D'ESPOIR",
        "album": "INT8TION",
        "year": 2023
      },
      {
        "name": "LUNE (feat. So La Lune)",
        "album": "INT8TION",
        "year": 2023
      },
      {
        "name": "ÉLÉMENT",
        "album": "INT8TION",
        "year": 2023
      },
      {
        "name": "LET IT GO (feat. Jäde)",
        "album": "INT8TION",
        "year": 2023
      },
      {
        "name": "HELL NAH (feat. Zaky)",
        "album": "INT8TION",
        "year": 2023
      },
      {
        "name": "PADERYL",
        "album": "INT8TION",
        "year": 2022
      },
      {
        "name": "MUC",
        "album": "INT8TION",
        "year": 2023
      },
      {
        "name": "LEVER TÔT (feat. BU$HI)",
        "album": "INT8TION",
        "year": 2023
      },
      {
        "name": "PINK LEMONADE",
        "album": "INT8TION",
        "year": 2023
      },
      {
        "name": "POTS CASSÉS",
        "album": "INT8TION",
        "year": 2023
      },
      {
        "name": "D ROSE",
        "album": "INT8TION",
        "year": 2023
      }
    ]
  },
  {
    "name": "IAM",
    "color": "#72243E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 16,
    "albums": [
      "L'école du micro d'argent"
    ],
    "tracks": [
      {
        "name": "L'école du micro d'argent",
        "album": "L'école du micro d'argent",
        "year": 1997
      },
      {
        "name": "Dangereux",
        "album": "L'école du micro d'argent",
        "year": 1997
      },
      {
        "name": "Nés sous la même étoile",
        "album": "L'école du micro d'argent",
        "year": 1997
      },
      {
        "name": "La saga",
        "album": "L'école du micro d'argent",
        "year": 1997
      },
      {
        "name": "Petit frère",
        "album": "L'école du micro d'argent",
        "year": 1997
      },
      {
        "name": "Elle donne son corps avant son nom",
        "album": "L'école du micro d'argent",
        "year": 1997
      },
      {
        "name": "L'empire du côté obscur",
        "album": "L'école du micro d'argent",
        "year": 1997
      },
      {
        "name": "Regarde",
        "album": "L'école du micro d'argent",
        "year": 1997
      },
      {
        "name": "L'enfer",
        "album": "L'école du micro d'argent",
        "year": 1997
      },
      {
        "name": "Quand tu allais on revenait",
        "album": "L'école du micro d'argent",
        "year": 1997
      },
      {
        "name": "Chez le mac",
        "album": "L'école du micro d'argent",
        "year": 1997
      },
      {
        "name": "Un bon son brut pour les truands",
        "album": "L'école du micro d'argent",
        "year": 1997
      },
      {
        "name": "Bouger la tête",
        "album": "L'école du micro d'argent",
        "year": 1997
      },
      {
        "name": "Un cri court dans la nuit",
        "album": "L'école du micro d'argent",
        "year": 1997
      },
      {
        "name": "Independenza",
        "album": "L'école du micro d'argent",
        "year": 1997
      },
      {
        "name": "Demain, c'est loin",
        "album": "L'école du micro d'argent",
        "year": 1997
      }
    ]
  },
  {
    "name": "Lauryn Hill",
    "color": "#5DCAA5",
    "genre": "R&B/Soul",
    "trackCount": 16,
    "albums": [
      "The Miseducation of Lauryn Hill"
    ],
    "tracks": [
      {
        "name": "Intro",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      },
      {
        "name": "Lost Ones",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      },
      {
        "name": "Ex-Factor",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      },
      {
        "name": "To Zion (feat. Carlos Santana)",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      },
      {
        "name": "Doo Wop (That Thing)",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      },
      {
        "name": "Superstar",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      },
      {
        "name": "Final Hour",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      },
      {
        "name": "When It Hurts so Bad",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      },
      {
        "name": "I Used to Love Him (feat. Mary J. Blige)",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      },
      {
        "name": "Forgive Them Father",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      },
      {
        "name": "Every Ghetto, Every City",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      },
      {
        "name": "Nothing Even Matters (feat. D'Angelo)",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      },
      {
        "name": "Everything Is Everything",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      },
      {
        "name": "The Miseducation of Lauryn Hill",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      },
      {
        "name": "Can't Take My Eyes Off of You (I Love You Baby)",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      },
      {
        "name": "Tell Him",
        "album": "The Miseducation of Lauryn Hill",
        "year": 1998
      }
    ]
  },
  {
    "name": "Diam's",
    "color": "#F0997B",
    "genre": "Pop",
    "trackCount": 15,
    "albums": [
      "Dans ma bulle"
    ],
    "tracks": [
      {
        "name": "Introduction",
        "album": "Dans ma bulle",
        "year": 2006
      },
      {
        "name": "La boulette (Génération nan nan)",
        "album": "Dans ma bulle",
        "year": 2005
      },
      {
        "name": "Ma France à moi",
        "album": "Dans ma bulle",
        "year": 2006
      },
      {
        "name": "Feuille blanche",
        "album": "Dans ma bulle",
        "year": 2006
      },
      {
        "name": "Jeune demoiselle",
        "album": "Dans ma bulle",
        "year": 2006
      },
      {
        "name": "Car tu portes mon nom",
        "album": "Dans ma bulle",
        "year": 2006
      },
      {
        "name": "Marine (Version 2006)",
        "album": "Dans ma bulle",
        "year": 2006
      },
      {
        "name": "Dans ma bulle",
        "album": "Dans ma bulle",
        "year": 2006
      },
      {
        "name": "Par amour",
        "album": "Dans ma bulle",
        "year": 2006
      },
      {
        "name": "Big Up",
        "album": "Dans ma bulle",
        "year": 2006
      },
      {
        "name": "Confessions nocturnes (feat. Vitaa)",
        "album": "Dans ma bulle",
        "year": 2006
      },
      {
        "name": "T.S.",
        "album": "Dans ma bulle",
        "year": 2006
      },
      {
        "name": "Me revoilà (avec Jacky Brown)",
        "album": "Dans ma bulle",
        "year": 2006
      },
      {
        "name": "Cause à effet (Version 2006)",
        "album": "Dans ma bulle",
        "year": 2006
      },
      {
        "name": "Petite banlieusarde",
        "album": "Dans ma bulle",
        "year": 2006
      }
    ]
  },
  {
    "name": "113",
    "color": "#85B7EB",
    "genre": "Hip-Hop/Rap",
    "trackCount": 15,
    "albums": [
      "113 fout la merde"
    ],
    "tracks": [
      {
        "name": "Danger: Intro",
        "album": "113 fout la merde",
        "year": 2002
      },
      {
        "name": "De l'autre côté de la rue",
        "album": "113 fout la merde",
        "year": 2002
      },
      {
        "name": "Traffic (feat. Daddy Mory)",
        "album": "113 fout la merde",
        "year": 2003
      },
      {
        "name": "Le guide du loubard",
        "album": "113 fout la merde",
        "year": 2003
      },
      {
        "name": "Les bronzés",
        "album": "113 fout la merde",
        "year": 2002
      },
      {
        "name": "Pas de paroles en l'air",
        "album": "113 fout la merde",
        "year": 2002
      },
      {
        "name": "113 fout la merde (feat. Thomas Bangalter)",
        "album": "113 fout la merde",
        "year": 2003
      },
      {
        "name": "10ème bougie",
        "album": "113 fout la merde",
        "year": 2003
      },
      {
        "name": "Désert",
        "album": "113 fout la merde",
        "year": 2002
      },
      {
        "name": "On roule, on rôde (feat. Don Choa & Le Rat Luciano)",
        "album": "113 fout la merde",
        "year": 2003
      },
      {
        "name": "La familia",
        "album": "113 fout la merde",
        "year": 2003
      },
      {
        "name": "Assoce de ... (feat. Karlito & Rohff)",
        "album": "113 fout la merde",
        "year": 2002
      },
      {
        "name": "Militant",
        "album": "113 fout la merde",
        "year": 2003
      },
      {
        "name": "Outro (113 fout la merde)",
        "album": "113 fout la merde",
        "year": 2002
      },
      {
        "name": "37°2",
        "album": "113 fout la merde",
        "year": 2002
      }
    ]
  },
  {
    "name": "47ter",
    "color": "#97C459",
    "genre": "Hip-Hop/Rap",
    "trackCount": 15,
    "albums": [
      "L'adresse",
      "Côte Ouest - Single"
    ],
    "tracks": [
      {
        "name": "Un air qui fait",
        "album": "L'adresse",
        "year": 2019
      },
      {
        "name": "Personne",
        "album": "L'adresse",
        "year": 2019
      },
      {
        "name": "L'adresse",
        "album": "L'adresse",
        "year": 2019
      },
      {
        "name": "On avait dit",
        "album": "L'adresse",
        "year": 2019
      },
      {
        "name": "30",
        "album": "L'adresse",
        "year": 2019
      },
      {
        "name": "Sans toi",
        "album": "L'adresse",
        "year": 2019
      },
      {
        "name": "Harakiri",
        "album": "L'adresse",
        "year": 2019
      },
      {
        "name": "Côte ouest",
        "album": "L'adresse",
        "year": 2019
      },
      {
        "name": "Jamais su",
        "album": "L'adresse",
        "year": 2019
      },
      {
        "name": "Chaque soir",
        "album": "L'adresse",
        "year": 2019
      },
      {
        "name": "Laissez-les partir",
        "album": "L'adresse",
        "year": 2019
      },
      {
        "name": "Assieds-toi",
        "album": "L'adresse",
        "year": 2019
      },
      {
        "name": "Soleil noir",
        "album": "L'adresse",
        "year": 2019
      },
      {
        "name": "Plus tard",
        "album": "L'adresse",
        "year": 2019
      },
      {
        "name": "Côte Ouest",
        "album": "Côte Ouest - Single",
        "year": 2019
      }
    ]
  },
  {
    "name": "Les Chaussettes Noires",
    "color": "#FAC775",
    "genre": "Electronic",
    "trackCount": 15,
    "albums": [
      "Tout Eddy... ou presque 1960-1964"
    ],
    "tracks": [
      {
        "name": "Be Bop a Lula (version 1960)",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Tu Parles Trop",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Si Seulement",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Daniela (De quoi te mêles-tu Daniela)",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1961
      },
      {
        "name": "Eddie Sois Bon",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1940
      },
      {
        "name": "Hey Pony",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Dactylo Rock",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1961
      },
      {
        "name": "Quand Je Te Vois",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1961
      },
      {
        "name": "Chérie Oh Chérie",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1961
      },
      {
        "name": "Infidèle",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Les Enchaînés",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1940
      },
      {
        "name": "Je Reviendrai Bientôt",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Parce Que Tu Sais (extrait du film \"Comment réusir en amour\")",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Oublie-Moi (extrait du film \"Comment réusir en amour\")",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Il Revient",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      }
    ]
  },
  {
    "name": "Eddy Mitchell",
    "color": "#AFA9EC",
    "genre": "Electronic",
    "trackCount": 15,
    "albums": [
      "Tout Eddy... ou presque 1960-1964"
    ],
    "tracks": [
      {
        "name": "Je Ne Pense Qu'à L'amour",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Be Bop a Lula (version 1963)",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Chain Gang",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Quand Une Fille Me Plait",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Je Reviendrai",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Ma Maîtresse D'école",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1963
      },
      {
        "name": "Tu N'as Rien De Tout Ça",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Sentimentale",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Blue Jean Bop",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Pas De Chance",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Repose Beethoven",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1964
      },
      {
        "name": "Detective Privé",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1964
      },
      {
        "name": "Fauché",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "J'ai Tout Perdu",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      },
      {
        "name": "Toujours Un Coin Qui Me Rappelle",
        "album": "Tout Eddy... ou presque 1960-1964",
        "year": 1987
      }
    ]
  },
  {
    "name": "Freeze Corleone & ASHE 22",
    "color": "#F5C4B3",
    "genre": "Hip-Hop/Rap",
    "trackCount": 15,
    "albums": [
      "RIYAD SADIO",
      "Scellé part.2 - Single",
      "LMF",
      "DÉGRADÉ - Single",
      "SCELLÉ PART. 4 - Single"
    ],
    "tracks": [
      {
        "name": "Scellé part.2",
        "album": "Scellé part.2 - Single",
        "year": 2020
      },
      {
        "name": "Scellé part.2",
        "album": "LMF",
        "year": 2020
      },
      {
        "name": "MOISSANITE",
        "album": "RIYAD SADIO",
        "year": 2022
      },
      {
        "name": "CARTIER",
        "album": "RIYAD SADIO",
        "year": 2022
      },
      {
        "name": "OUTRO",
        "album": "RIYAD SADIO",
        "year": 2022
      },
      {
        "name": "INTRO",
        "album": "RIYAD SADIO",
        "year": 2022
      },
      {
        "name": "BILLETS",
        "album": "RIYAD SADIO",
        "year": 2022
      },
      {
        "name": "OLIVINE",
        "album": "RIYAD SADIO",
        "year": 2022
      },
      {
        "name": "SCELLÉ PART. 4",
        "album": "RIYAD SADIO",
        "year": 2022
      },
      {
        "name": "SADIO RIYAD",
        "album": "RIYAD SADIO",
        "year": 2022
      },
      {
        "name": "INTERLUDE",
        "album": "RIYAD SADIO",
        "year": 2022
      },
      {
        "name": "YASSER",
        "album": "RIYAD SADIO",
        "year": 2022
      },
      {
        "name": "DÉGRADÉ",
        "album": "RIYAD SADIO",
        "year": 2022
      },
      {
        "name": "DÉGRADÉ",
        "album": "DÉGRADÉ - Single",
        "year": 2022
      },
      {
        "name": "SCELLÉ PART. 4",
        "album": "SCELLÉ PART. 4 - Single",
        "year": 2022
      }
    ]
  },
  {
    "name": "21 Savage & Metro Boomin",
    "color": "#9FE1CB",
    "genre": "Hip-Hop/Rap",
    "trackCount": 15,
    "albums": [
      "SAVAGE MODE II"
    ],
    "tracks": [
      {
        "name": "Rich Nigga Shit (feat. Young Thug)",
        "album": "SAVAGE MODE II",
        "year": 2020
      },
      {
        "name": "Intro",
        "album": "SAVAGE MODE II",
        "year": 2020
      },
      {
        "name": "Runnin",
        "album": "SAVAGE MODE II",
        "year": 2020
      },
      {
        "name": "Glock in My Lap",
        "album": "SAVAGE MODE II",
        "year": 2020
      },
      {
        "name": "Mr. Right Now (feat. Drake)",
        "album": "SAVAGE MODE II",
        "year": 2020
      },
      {
        "name": "Slidin",
        "album": "SAVAGE MODE II",
        "year": 2020
      },
      {
        "name": "Many Men",
        "album": "SAVAGE MODE II",
        "year": 2020
      },
      {
        "name": "Snitches & Rats (Interlude)",
        "album": "SAVAGE MODE II",
        "year": 2020
      },
      {
        "name": "Snitches & Rats (feat. Young Nudy)",
        "album": "SAVAGE MODE II",
        "year": 2020
      },
      {
        "name": "My Dawg",
        "album": "SAVAGE MODE II",
        "year": 2020
      },
      {
        "name": "Steppin on N****s",
        "album": "SAVAGE MODE II",
        "year": 2020
      },
      {
        "name": "Brand New Draco",
        "album": "SAVAGE MODE II",
        "year": 2020
      },
      {
        "name": "No Opp Left Behind",
        "album": "SAVAGE MODE II",
        "year": 2020
      },
      {
        "name": "RIP Luv",
        "album": "SAVAGE MODE II",
        "year": 2020
      },
      {
        "name": "Said N Done",
        "album": "SAVAGE MODE II",
        "year": 2020
      }
    ]
  },
  {
    "name": "Jeune Mort",
    "color": "#C0DD97",
    "genre": "Hip-Hop/Rap",
    "trackCount": 15,
    "albums": [
      "ZOO - EP",
      "Avant l'Aube - EP",
      "MORTUUS - EP"
    ],
    "tracks": [
      {
        "name": "Pandémonium",
        "album": "Avant l'Aube - EP",
        "year": 2022
      },
      {
        "name": "Étoile triste",
        "album": "Avant l'Aube - EP",
        "year": 2022
      },
      {
        "name": "Ganph",
        "album": "Avant l'Aube - EP",
        "year": 2022
      },
      {
        "name": "Neptune",
        "album": "Avant l'Aube - EP",
        "year": 2022
      },
      {
        "name": "Jeune Mort",
        "album": "MORTUUS - EP",
        "year": 2022
      },
      {
        "name": "Cavale",
        "album": "MORTUUS - EP",
        "year": 2022
      },
      {
        "name": "80mg",
        "album": "MORTUUS - EP",
        "year": 2022
      },
      {
        "name": "Bateau à voile",
        "album": "MORTUUS - EP",
        "year": 2022
      },
      {
        "name": "POCHTAR",
        "album": "ZOO - EP",
        "year": 2025
      },
      {
        "name": "DEMI-LUNE",
        "album": "ZOO - EP",
        "year": 2025
      },
      {
        "name": "DESCENTE",
        "album": "ZOO - EP",
        "year": 2025
      },
      {
        "name": "TOUR DU MONDE",
        "album": "ZOO - EP",
        "year": 2025
      },
      {
        "name": "MAISON",
        "album": "ZOO - EP",
        "year": 2025
      },
      {
        "name": "PAPIER PEINT JAUNE",
        "album": "ZOO - EP",
        "year": 2025
      },
      {
        "name": "cœur cassé",
        "album": "Avant l'Aube - EP",
        "year": 2022
      }
    ]
  },
  {
    "name": "Mani Deïz & okis",
    "color": "#F4C0D1",
    "genre": "Hip-Hop/Rap",
    "trackCount": 15,
    "albums": [
      "Rêve d'un rouilleur"
    ],
    "tracks": [
      {
        "name": "Roi des banaveurs",
        "album": "Rêve d'un rouilleur",
        "year": 2023
      },
      {
        "name": "Le bruit des bots",
        "album": "Rêve d'un rouilleur",
        "year": 2023
      },
      {
        "name": "La meuf du snack",
        "album": "Rêve d'un rouilleur",
        "year": 2023
      },
      {
        "name": "Paresse saine",
        "album": "Rêve d'un rouilleur",
        "year": 2023
      },
      {
        "name": "Kiffeurs",
        "album": "Rêve d'un rouilleur",
        "year": 2023
      },
      {
        "name": "Le silence",
        "album": "Rêve d'un rouilleur",
        "year": 2023
      },
      {
        "name": "Tinkiet",
        "album": "Rêve d'un rouilleur",
        "year": 2023
      },
      {
        "name": "Rappeur de Lyon",
        "album": "Rêve d'un rouilleur",
        "year": 2023
      },
      {
        "name": "Panier de Vienne",
        "album": "Rêve d'un rouilleur",
        "year": 2023
      },
      {
        "name": "Control",
        "album": "Rêve d'un rouilleur",
        "year": 2023
      },
      {
        "name": "Textile",
        "album": "Rêve d'un rouilleur",
        "year": 2023
      },
      {
        "name": "Derrière la tête",
        "album": "Rêve d'un rouilleur",
        "year": 2023
      },
      {
        "name": "Pioncer mieux",
        "album": "Rêve d'un rouilleur",
        "year": 2023
      },
      {
        "name": "J'arrive",
        "album": "Rêve d'un rouilleur",
        "year": 2023
      },
      {
        "name": "Demain à l'aube",
        "album": "Rêve d'un rouilleur",
        "year": 2023
      }
    ]
  },
  {
    "name": "Osirus Jack",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 15,
    "albums": [
      "TSAR NOIR",
      "Nouvelle Ère"
    ],
    "tracks": [
      {
        "name": "T.E.N",
        "album": "Nouvelle Ère",
        "year": 2021
      },
      {
        "name": "Onde de choc, pt. II (feat. DOC OVG & Black Jack OBS)",
        "album": "TSAR NOIR",
        "year": 2024
      },
      {
        "name": "Killuavie",
        "album": "TSAR NOIR",
        "year": 2024
      },
      {
        "name": "Kyrie Irving",
        "album": "TSAR NOIR",
        "year": 2024
      },
      {
        "name": "Connectés (feat. Slim C)",
        "album": "TSAR NOIR",
        "year": 2024
      },
      {
        "name": "OSS",
        "album": "TSAR NOIR",
        "year": 2024
      },
      {
        "name": "Lyoto Machida",
        "album": "TSAR NOIR",
        "year": 2024
      },
      {
        "name": "Normandie",
        "album": "TSAR NOIR",
        "year": 2024
      },
      {
        "name": "Bolo Yeung (feat. Alpha Wann)",
        "album": "TSAR NOIR",
        "year": 2024
      },
      {
        "name": "5000L",
        "album": "TSAR NOIR",
        "year": 2024
      },
      {
        "name": "Dangote",
        "album": "TSAR NOIR",
        "year": 2024
      },
      {
        "name": "Onde de choc, pt. II (feat. DOC OVG & Black Jack OBS)",
        "album": "TSAR NOIR",
        "year": 2024
      },
      {
        "name": "Sous-marin",
        "album": "TSAR NOIR",
        "year": 2024
      },
      {
        "name": "Neuralink (feat. Freeze Corleone)",
        "album": "TSAR NOIR",
        "year": 2024
      },
      {
        "name": "Nicolas III",
        "album": "TSAR NOIR",
        "year": 2024
      }
    ]
  },
  {
    "name": "Flee Lord & Roc Marciano",
    "color": "#1A5FB4",
    "genre": "Hip-Hop",
    "trackCount": 15,
    "albums": [
      "Delgado (Deluxe Edition)"
    ],
    "tracks": [
      {
        "name": "Delgado Intro",
        "album": "Delgado (Deluxe Edition)",
        "year": 2021
      },
      {
        "name": "Slow Down",
        "album": "Delgado (Deluxe Edition)",
        "year": 2021
      },
      {
        "name": "Shouts to the Mobb / Medusa (feat. Conway The Machine)",
        "album": "Delgado (Deluxe Edition)",
        "year": 2021
      },
      {
        "name": "This What Ya Want? (feat. DJ Boogieman)",
        "album": "Delgado (Deluxe Edition)",
        "year": 2021
      },
      {
        "name": "Breath of Air (feat. Ransom & DJ Boogieman)",
        "album": "Delgado (Deluxe Edition)",
        "year": 2021
      },
      {
        "name": "Trim the Fat (feat. Stove God Cooks)",
        "album": "Delgado (Deluxe Edition)",
        "year": 2021
      },
      {
        "name": "Skipping Town",
        "album": "Delgado (Deluxe Edition)",
        "year": 2021
      },
      {
        "name": "Breeze in a Porsche",
        "album": "Delgado (Deluxe Edition)",
        "year": 2021
      },
      {
        "name": "First Kill",
        "album": "Delgado (Deluxe Edition)",
        "year": 2021
      },
      {
        "name": "Delgado Outro",
        "album": "Delgado (Deluxe Edition)",
        "year": 2021
      },
      {
        "name": "Roc Reunion (feat. Eto)",
        "album": "Delgado (Deluxe Edition)",
        "year": 2021
      },
      {
        "name": "Mobb Bop (feat. G4 Jag)",
        "album": "Delgado (Deluxe Edition)",
        "year": 2021
      },
      {
        "name": "Real vs. Whatever (feat. T.F & Bun B)",
        "album": "Delgado (Deluxe Edition)",
        "year": 2021
      },
      {
        "name": "Pirate Lords (feat. Knowledge The Pirate)",
        "album": "Delgado (Deluxe Edition)",
        "year": 2021
      },
      {
        "name": "4 Point Play",
        "album": "Delgado (Deluxe Edition)",
        "year": 2021
      }
    ]
  },
  {
    "name": "Asinine",
    "color": "#2D8A4E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 15,
    "albums": [
      "La jetée",
      "Doom - Single",
      "Demi Moore / Vivement quoi - Single",
      "Tout va bien - Single",
      "On voit que moi dans la city - Single"
    ],
    "tracks": [
      {
        "name": "Comme des pierres",
        "album": "La jetée",
        "year": 2025
      },
      {
        "name": "Lalaland",
        "album": "La jetée",
        "year": 2025
      },
      {
        "name": "Cage thoracique",
        "album": "La jetée",
        "year": 2025
      },
      {
        "name": "Meute de loups",
        "album": "La jetée",
        "year": 2025
      },
      {
        "name": "Anchorage",
        "album": "La jetée",
        "year": 2025
      },
      {
        "name": "Le ciel est sourd",
        "album": "La jetée",
        "year": 2025
      },
      {
        "name": "100 ans",
        "album": "La jetée",
        "year": 2025
      },
      {
        "name": "Si le soleil existe",
        "album": "La jetée",
        "year": 2025
      },
      {
        "name": "Demi Moore",
        "album": "Demi Moore / Vivement quoi - Single",
        "year": 2023
      },
      {
        "name": "Tout va bien",
        "album": "Tout va bien - Single",
        "year": 2022
      },
      {
        "name": "On voit que moi dans la city",
        "album": "On voit que moi dans la city - Single",
        "year": 2022
      },
      {
        "name": "Vivement quoi",
        "album": "Demi Moore / Vivement quoi - Single",
        "year": 2023
      },
      {
        "name": "La bête",
        "album": "Doom - Single",
        "year": 2026
      },
      {
        "name": "Solange",
        "album": "Doom - Single",
        "year": 2026
      },
      {
        "name": "Que du vent",
        "album": "Doom - Single",
        "year": 2026
      }
    ]
  },
  {
    "name": "Jaywill",
    "color": "#C4622D",
    "genre": "Hip-Hop/Rap",
    "trackCount": 15,
    "albums": [
      "COLD LONER'S REVENGE",
      "WANTED"
    ],
    "tracks": [
      {
        "name": "WANTED",
        "album": "WANTED",
        "year": 2021
      },
      {
        "name": "MILLION",
        "album": "WANTED",
        "year": 2021
      },
      {
        "name": "QUAND ON AURA LE MONDE",
        "album": "WANTED",
        "year": 2021
      },
      {
        "name": "MODE AVION",
        "album": "WANTED",
        "year": 2021
      },
      {
        "name": "HOUDINI",
        "album": "COLD LONER'S REVENGE",
        "year": 2024
      },
      {
        "name": "18",
        "album": "COLD LONER'S REVENGE",
        "year": 2024
      },
      {
        "name": "OCARINA FOREST",
        "album": "COLD LONER'S REVENGE",
        "year": 2024
      },
      {
        "name": "CENDRES",
        "album": "COLD LONER'S REVENGE",
        "year": 2024
      },
      {
        "name": "MITSUBISHI (feat. Yvnnis)",
        "album": "COLD LONER'S REVENGE",
        "year": 2024
      },
      {
        "name": "I DON'T BELONG",
        "album": "COLD LONER'S REVENGE",
        "year": 2024
      },
      {
        "name": "IMPRIMÉ ASIATIQUE",
        "album": "COLD LONER'S REVENGE",
        "year": 2024
      },
      {
        "name": "DÉSERTEURS",
        "album": "COLD LONER'S REVENGE",
        "year": 2024
      },
      {
        "name": "CANNES",
        "album": "COLD LONER'S REVENGE",
        "year": 2024
      },
      {
        "name": "BAHAMAS",
        "album": "COLD LONER'S REVENGE",
        "year": 2024
      },
      {
        "name": "WESTON",
        "album": "COLD LONER'S REVENGE",
        "year": 2024
      }
    ]
  },
  {
    "name": "Lord Esperanza",
    "color": "#7B4FA6",
    "genre": "Hip-Hop/Rap",
    "trackCount": 15,
    "albums": [
      "Polaroïd",
      "Internet",
      "#Lordesperanzadanstaville",
      "Silver - Single",
      "Encore Elle - Single"
    ],
    "tracks": [
      {
        "name": "Roi du monde",
        "album": "Internet",
        "year": 2018
      },
      {
        "name": "Boulevard",
        "album": "Internet",
        "year": 2018
      },
      {
        "name": "Silver",
        "album": "Silver - Single",
        "year": 2017
      },
      {
        "name": "Noir, Pt. 2",
        "album": "Polaroïd",
        "year": 2017
      },
      {
        "name": "Noir",
        "album": "Polaroïd",
        "year": 2017
      },
      {
        "name": "La couleur des sentiments",
        "album": "Polaroïd",
        "year": 2017
      },
      {
        "name": "Love Courtney",
        "album": "Internet",
        "year": 2018
      },
      {
        "name": "Anna",
        "album": "Polaroïd",
        "year": 2017
      },
      {
        "name": "Roses noires",
        "album": "Polaroïd",
        "year": 2017
      },
      {
        "name": "Tutoyer le ciel",
        "album": "Polaroïd",
        "year": 2017
      },
      {
        "name": "Noir remix (feat. Nelick, Eden Dillinger, Lasco, Zamdane, Youri, Chilla, Lucci & Lonepsi)",
        "album": "Internet",
        "year": 2018
      },
      {
        "name": "Encore Elle",
        "album": "Encore Elle - Single",
        "year": 2017
      },
      {
        "name": "Polaroïd",
        "album": "Polaroïd",
        "year": 2017
      },
      {
        "name": "Nénuphar",
        "album": "#Lordesperanzadanstaville",
        "year": 2018
      },
      {
        "name": "Vide ton chargeur",
        "album": "#Lordesperanzadanstaville",
        "year": 2018
      }
    ]
  },
  {
    "name": "Jeune Morty",
    "color": "#E8593C",
    "genre": "Hip-Hop/Rap",
    "trackCount": 15,
    "albums": [
      "Eponyme"
    ],
    "tracks": [
      {
        "name": "Oasis",
        "album": "Eponyme",
        "year": 2025
      },
      {
        "name": "Plata",
        "album": "Eponyme",
        "year": 2025
      },
      {
        "name": "Zoumana",
        "album": "Eponyme",
        "year": 2025
      },
      {
        "name": "Glock Perfection",
        "album": "Eponyme",
        "year": 2025
      },
      {
        "name": "Couture",
        "album": "Eponyme",
        "year": 2025
      },
      {
        "name": "Ghetto Punk",
        "album": "Eponyme",
        "year": 2025
      },
      {
        "name": "Zoo XXL",
        "album": "Eponyme",
        "year": 2025
      },
      {
        "name": "Project",
        "album": "Eponyme",
        "year": 2025
      },
      {
        "name": "777Problems",
        "album": "Eponyme",
        "year": 2025
      },
      {
        "name": "Solo Dolo*",
        "album": "Eponyme",
        "year": 2025
      },
      {
        "name": "777Heavens",
        "album": "Eponyme",
        "year": 2025
      },
      {
        "name": "MC Maï",
        "album": "Eponyme",
        "year": 2025
      },
      {
        "name": "Wya",
        "album": "Eponyme",
        "year": 2025
      },
      {
        "name": "Malfrat",
        "album": "Eponyme",
        "year": 2025
      },
      {
        "name": "Cour",
        "album": "Eponyme",
        "year": 2025
      }
    ]
  },
  {
    "name": "Adèle Castillon & Videoclub",
    "color": "#3B8BD4",
    "genre": "French Pop",
    "trackCount": 15,
    "albums": [
      "Plaisir Risque Dépendance"
    ],
    "tracks": [
      {
        "name": "Notice",
        "album": "Plaisir Risque Dépendance",
        "year": 2023
      },
      {
        "name": "Sensations",
        "album": "Plaisir Risque Dépendance",
        "year": 2023
      },
      {
        "name": "Gabrielle",
        "album": "Plaisir Risque Dépendance",
        "year": 2023
      },
      {
        "name": "Alabama",
        "album": "Plaisir Risque Dépendance",
        "year": 2023
      },
      {
        "name": "Doliprane",
        "album": "Plaisir Risque Dépendance",
        "year": 2023
      },
      {
        "name": "Promis",
        "album": "Plaisir Risque Dépendance",
        "year": 2023
      },
      {
        "name": "Souvenirs",
        "album": "Plaisir Risque Dépendance",
        "year": 2023
      },
      {
        "name": "Impala",
        "album": "Plaisir Risque Dépendance",
        "year": 2023
      },
      {
        "name": "Novembre",
        "album": "Plaisir Risque Dépendance",
        "year": 2023
      },
      {
        "name": "PRD",
        "album": "Plaisir Risque Dépendance",
        "year": 2023
      },
      {
        "name": "Partir",
        "album": "Plaisir Risque Dépendance",
        "year": 2023
      },
      {
        "name": "Je t'aime",
        "album": "Plaisir Risque Dépendance",
        "year": 2023
      },
      {
        "name": "Rêve",
        "album": "Plaisir Risque Dépendance",
        "year": 2023
      },
      {
        "name": "Petite Fille",
        "album": "Plaisir Risque Dépendance",
        "year": 2023
      },
      {
        "name": "C'est Drôle",
        "album": "Plaisir Risque Dépendance",
        "year": 2023
      }
    ]
  },
  {
    "name": "Duan Wasi",
    "color": "#4A9E5C",
    "genre": "Electronic",
    "trackCount": 15,
    "albums": [
      "Licious"
    ],
    "tracks": [
      {
        "name": "Glow",
        "album": "Licious",
        "year": 2022
      },
      {
        "name": "Roller Coaster",
        "album": "Licious",
        "year": 2022
      },
      {
        "name": "Caprice",
        "album": "Licious",
        "year": 2022
      },
      {
        "name": "Interception",
        "album": "Licious",
        "year": 2022
      },
      {
        "name": "Moonjam",
        "album": "Licious",
        "year": 2022
      },
      {
        "name": "Solar Heat",
        "album": "Licious",
        "year": 2022
      },
      {
        "name": "Stepup",
        "album": "Licious",
        "year": 2022
      },
      {
        "name": "Respiration",
        "album": "Licious",
        "year": 2022
      },
      {
        "name": "Dtpa",
        "album": "Licious",
        "year": 2022
      },
      {
        "name": "Beach Slide",
        "album": "Licious",
        "year": 2022
      },
      {
        "name": "In the Honeypot",
        "album": "Licious",
        "year": 2022
      },
      {
        "name": "Cherry Cubes",
        "album": "Licious",
        "year": 2022
      },
      {
        "name": "Adagio",
        "album": "Licious",
        "year": 2022
      },
      {
        "name": "Clapp Keys Repeat",
        "album": "Licious",
        "year": 2022
      },
      {
        "name": "Other Lenses",
        "album": "Licious",
        "year": 2022
      }
    ]
  },
  {
    "name": "55ASKY",
    "color": "#9B4DCA",
    "genre": "Dance",
    "trackCount": 15,
    "albums": [
      "TAEDIUM",
      "Volim te"
    ],
    "tracks": [
      {
        "name": "manumax",
        "album": "Volim te",
        "year": 2025
      },
      {
        "name": "Joli doll",
        "album": "Volim te",
        "year": 2025
      },
      {
        "name": "marc㋡flint",
        "album": "Volim te",
        "year": 2025
      },
      {
        "name": "Volim te",
        "album": "Volim te",
        "year": 2025
      },
      {
        "name": "Lost u",
        "album": "Volim te",
        "year": 2025
      },
      {
        "name": "POIL DE SIFAKA",
        "album": "TAEDIUM",
        "year": 2025
      },
      {
        "name": "PALABRE",
        "album": "TAEDIUM",
        "year": 2025
      },
      {
        "name": "OPIACÉ",
        "album": "TAEDIUM",
        "year": 2025
      },
      {
        "name": "SASERAKWA",
        "album": "TAEDIUM",
        "year": 2025
      },
      {
        "name": "MEMENTO (feat. Laïoss)",
        "album": "TAEDIUM",
        "year": 2025
      },
      {
        "name": "PLZ SCUZ MI",
        "album": "TAEDIUM",
        "year": 2025
      },
      {
        "name": "PLEIN DPOUSSIÈRE",
        "album": "TAEDIUM",
        "year": 2025
      },
      {
        "name": "BOSSANOVATRICE",
        "album": "TAEDIUM",
        "year": 2025
      },
      {
        "name": "PHENERWIN",
        "album": "TAEDIUM",
        "year": 2025
      },
      {
        "name": "PUPAZZO",
        "album": "TAEDIUM",
        "year": 2025
      }
    ]
  },
  {
    "name": "Varnish La Piscine",
    "color": "#D4A017",
    "genre": "Hip-Hop/Rap",
    "trackCount": 14,
    "albums": [
      "THIS LAKE IS SUCCESSFUL",
      "METRONOME POLE DANCE TWIST AMAZONE (Bande originale du film)"
    ],
    "tracks": [
      {
        "name": "NUBIAN FARLOW",
        "album": "THIS LAKE IS SUCCESSFUL",
        "year": 2023
      },
      {
        "name": "RING ISLAND",
        "album": "THIS LAKE IS SUCCESSFUL",
        "year": 2023
      },
      {
        "name": "QUARTZ FREESTYLE (feat. Snubnose Frankenstein)",
        "album": "THIS LAKE IS SUCCESSFUL",
        "year": 2023
      },
      {
        "name": "\"CEVICHE\"...",
        "album": "THIS LAKE IS SUCCESSFUL",
        "year": 2023
      },
      {
        "name": "SHOPPING, AMAURY LEFÈVRE",
        "album": "THIS LAKE IS SUCCESSFUL",
        "year": 2023
      },
      {
        "name": "NUVOJOB",
        "album": "THIS LAKE IS SUCCESSFUL",
        "year": 2023
      },
      {
        "name": "BYE BYE FOREVER",
        "album": "THIS LAKE IS SUCCESSFUL",
        "year": 2023
      },
      {
        "name": "PALPATINE INTRO / TWIST AMAZONE",
        "album": "METRONOME POLE DANCE TWIST AMAZONE (Bande originale du film)",
        "year": 2020
      },
      {
        "name": "DIRTY BOSSA",
        "album": "METRONOME POLE DANCE TWIST AMAZONE (Bande originale du film)",
        "year": 2020
      },
      {
        "name": "ADIOS, TORNADO'S EFFECT",
        "album": "METRONOME POLE DANCE TWIST AMAZONE (Bande originale du film)",
        "year": 2020
      },
      {
        "name": "ORDRE SUPRÊME",
        "album": "METRONOME POLE DANCE TWIST AMAZONE (Bande originale du film)",
        "year": 2020
      },
      {
        "name": "KISS",
        "album": "METRONOME POLE DANCE TWIST AMAZONE (Bande originale du film)",
        "year": 2020
      },
      {
        "name": "BB BLACK SWAN by James Bradwell (feat. Rico TK)",
        "album": "METRONOME POLE DANCE TWIST AMAZONE (Bande originale du film)",
        "year": 2020
      },
      {
        "name": "ILLUSION SUR MAUNA LOA",
        "album": "METRONOME POLE DANCE TWIST AMAZONE (Bande originale du film)",
        "year": 2020
      }
    ]
  },
  {
    "name": "Doc Gynéco",
    "color": "#FF6B6B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 14,
    "albums": [
      "Première Consultation"
    ],
    "tracks": [
      {
        "name": "No se vende la calle (L.A. Razza Mix)",
        "album": "Première Consultation",
        "year": 1996
      },
      {
        "name": "Dans ma rue (Hight with the chronic)",
        "album": "Première Consultation",
        "year": 1996
      },
      {
        "name": "Nirvana",
        "album": "Première Consultation",
        "year": 1996
      },
      {
        "name": "Tel Père Tel Fils (Papa Was a Rollin Stone)",
        "album": "Première Consultation",
        "year": 1996
      },
      {
        "name": "Celui qui vient chez toi (Quand tu n'es pas là)",
        "album": "Première Consultation",
        "year": 1996
      },
      {
        "name": "Viens voir le docteur (Dirty Moog mix)",
        "album": "Première Consultation",
        "year": 1996
      },
      {
        "name": "Né Ici",
        "album": "Première Consultation",
        "year": 1996
      },
      {
        "name": "Passement De Jambes",
        "album": "Première Consultation",
        "year": 1996
      },
      {
        "name": "Ma S****e À Moi",
        "album": "Première Consultation",
        "year": 1996
      },
      {
        "name": "Première Consultation",
        "album": "Première Consultation",
        "year": 1996
      },
      {
        "name": "Si Tu Crois Que Je Peze",
        "album": "Première Consultation",
        "year": 1996
      },
      {
        "name": "Classez Moi Dans La Variet",
        "album": "Première Consultation",
        "year": 1996
      },
      {
        "name": "Les Filles Du Moove",
        "album": "Première Consultation",
        "year": 1996
      },
      {
        "name": "Vanessa",
        "album": "Première Consultation",
        "year": 1996
      }
    ]
  },
  {
    "name": "Roshi",
    "color": "#4ECDC4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 14,
    "albums": [
      "SOMOTRO",
      "Attaque (feat. Key Largo) - Single",
      "SOMOTRO RESURRECCIÓN"
    ],
    "tracks": [
      {
        "name": "Attaque (feat. Key Largo)",
        "album": "Attaque (feat. Key Largo) - Single",
        "year": 2019
      },
      {
        "name": "J'suis encore là",
        "album": "SOMOTRO",
        "year": 2025
      },
      {
        "name": "Rouge & Noir",
        "album": "SOMOTRO",
        "year": 2025
      },
      {
        "name": "J'en jette",
        "album": "SOMOTRO",
        "year": 2025
      },
      {
        "name": "C'est nous",
        "album": "SOMOTRO",
        "year": 2025
      },
      {
        "name": "J'en rêve",
        "album": "SOMOTRO",
        "year": 2025
      },
      {
        "name": "Demain",
        "album": "SOMOTRO",
        "year": 2025
      },
      {
        "name": "Interlude",
        "album": "SOMOTRO",
        "year": 2025
      },
      {
        "name": "Hollow",
        "album": "SOMOTRO",
        "year": 2025
      },
      {
        "name": "Avalanche",
        "album": "SOMOTRO",
        "year": 2025
      },
      {
        "name": "Papels",
        "album": "SOMOTRO",
        "year": 2025
      },
      {
        "name": "Bouteille",
        "album": "SOMOTRO",
        "year": 2025
      },
      {
        "name": "C'est moi",
        "album": "SOMOTRO",
        "year": 2025
      },
      {
        "name": "Bon plavon (feat. Vacra)",
        "album": "SOMOTRO RESURRECCIÓN",
        "year": 2026
      }
    ]
  },
  {
    "name": "SEB",
    "color": "#45B7D1",
    "genre": "Hip-Hop/Rap",
    "trackCount": 14,
    "albums": [
      "Crash Test",
      "Level up - Single",
      "Antistress - Single"
    ],
    "tracks": [
      {
        "name": "Level up",
        "album": "Level up - Single",
        "year": 2020
      },
      {
        "name": "Antistress",
        "album": "Antistress - Single",
        "year": 2020
      },
      {
        "name": "Taedium",
        "album": "Crash Test",
        "year": 2020
      },
      {
        "name": "Mauvais cœur",
        "album": "Crash Test",
        "year": 2021
      },
      {
        "name": "Intro",
        "album": "Crash Test",
        "year": 2021
      },
      {
        "name": "SPAM",
        "album": "Crash Test",
        "year": 2021
      },
      {
        "name": "+33 7 48 40 97 42",
        "album": "Crash Test",
        "year": 2021
      },
      {
        "name": "Flemme",
        "album": "Crash Test",
        "year": 2020
      },
      {
        "name": "Feeling",
        "album": "Crash Test",
        "year": 2021
      },
      {
        "name": "Comme ça",
        "album": "Crash Test",
        "year": 2021
      },
      {
        "name": "Le schéma",
        "album": "Crash Test",
        "year": 2021
      },
      {
        "name": "Salam",
        "album": "Crash Test",
        "year": 2021
      },
      {
        "name": "Cette vie-là",
        "album": "Crash Test",
        "year": 2021
      },
      {
        "name": "Prends d'la vitesse",
        "album": "Crash Test",
        "year": 2021
      }
    ]
  },
  {
    "name": "Jewel Usain",
    "color": "#96CEB4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 14,
    "albums": [
      "Où les garçons grandissent",
      "Skateboard - Single"
    ],
    "tracks": [
      {
        "name": "Skateboard",
        "album": "Skateboard - Single",
        "year": 2020
      },
      {
        "name": "Compliqué",
        "album": "Où les garçons grandissent",
        "year": 2023
      },
      {
        "name": "Nouvel export",
        "album": "Où les garçons grandissent",
        "year": 2023
      },
      {
        "name": "Skit : L'Ancien",
        "album": "Où les garçons grandissent",
        "year": 2023
      },
      {
        "name": "Skit : La Licorne",
        "album": "Où les garçons grandissent",
        "year": 2023
      },
      {
        "name": "Poussière",
        "album": "Où les garçons grandissent",
        "year": 2023
      },
      {
        "name": "Les journées se ressemblent",
        "album": "Où les garçons grandissent",
        "year": 2023
      },
      {
        "name": "OLGG",
        "album": "Où les garçons grandissent",
        "year": 2023
      },
      {
        "name": "Grand",
        "album": "Où les garçons grandissent",
        "year": 2023
      },
      {
        "name": "Je reste là",
        "album": "Où les garçons grandissent",
        "year": 2023
      },
      {
        "name": "Pastille bleue",
        "album": "Où les garçons grandissent",
        "year": 2023
      },
      {
        "name": "The Hustler's Book",
        "album": "Où les garçons grandissent",
        "year": 2023
      },
      {
        "name": "Le biff part.2",
        "album": "Où les garçons grandissent",
        "year": 2023
      },
      {
        "name": "Bleu marine",
        "album": "Où les garçons grandissent",
        "year": 2023
      }
    ]
  },
  {
    "name": "okis & Mani Deïz",
    "color": "#FFEAA7",
    "genre": "Hip-Hop/Rap",
    "trackCount": 14,
    "albums": [
      "TRIPLE CRÈME",
      "LA CRÈME"
    ],
    "tracks": [
      {
        "name": "KENSINGTON",
        "album": "LA CRÈME",
        "year": 2025
      },
      {
        "name": "TREMOLO",
        "album": "LA CRÈME",
        "year": 2025
      },
      {
        "name": "SI J'ALLAIS MOURIR CE SOIR",
        "album": "LA CRÈME",
        "year": 2025
      },
      {
        "name": "TOUT ROULE",
        "album": "LA CRÈME",
        "year": 2025
      },
      {
        "name": "SMALA MUNICIPALE",
        "album": "LA CRÈME",
        "year": 2025
      },
      {
        "name": "LE CALEPIN DE FREDDY",
        "album": "LA CRÈME",
        "year": 2025
      },
      {
        "name": "LA FAUTE A PAS DE CHANCE",
        "album": "TRIPLE CRÈME",
        "year": 2025
      },
      {
        "name": "GOLDEN FANG",
        "album": "TRIPLE CRÈME",
        "year": 2025
      },
      {
        "name": "JASPER ET HORACE",
        "album": "TRIPLE CRÈME",
        "year": 2025
      },
      {
        "name": "MAGNUM",
        "album": "TRIPLE CRÈME",
        "year": 2025
      },
      {
        "name": "TABAC FROID",
        "album": "TRIPLE CRÈME",
        "year": 2025
      },
      {
        "name": "LAIT CAILLÉ",
        "album": "TRIPLE CRÈME",
        "year": 2025
      },
      {
        "name": "LA MAGIE DU COUP DE BOL",
        "album": "TRIPLE CRÈME",
        "year": 2025
      },
      {
        "name": "LA CRÈME",
        "album": "TRIPLE CRÈME",
        "year": 2025
      }
    ]
  },
  {
    "name": "Kaaris & Kalash Criminel",
    "color": "#7F77DD",
    "genre": "Hip-Hop/Rap",
    "trackCount": 14,
    "albums": [
      "SVR"
    ],
    "tracks": [
      {
        "name": "Goudronné",
        "album": "SVR",
        "year": 2022
      },
      {
        "name": "King Von",
        "album": "SVR",
        "year": 2022
      },
      {
        "name": "BBL",
        "album": "SVR",
        "year": 2022
      },
      {
        "name": "Barillet",
        "album": "SVR",
        "year": 2022
      },
      {
        "name": "Fiché S",
        "album": "SVR",
        "year": 2022
      },
      {
        "name": "Sur le banc",
        "album": "SVR",
        "year": 2022
      },
      {
        "name": "Shooter",
        "album": "SVR",
        "year": 2022
      },
      {
        "name": "Balistique",
        "album": "SVR",
        "year": 2022
      },
      {
        "name": "Tous les jours",
        "album": "SVR",
        "year": 2022
      },
      {
        "name": "Angle mort",
        "album": "SVR",
        "year": 2022
      },
      {
        "name": "Tu dois des sous",
        "album": "SVR",
        "year": 2022
      },
      {
        "name": "Tchalla",
        "album": "SVR",
        "year": 2021
      },
      {
        "name": "C'est nous les O.G",
        "album": "SVR",
        "year": 2022
      },
      {
        "name": "Les abymes",
        "album": "SVR",
        "year": 2022
      }
    ]
  },
  {
    "name": "Mandyspie",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 14,
    "albums": [
      "Polar Escape",
      "MINUIT MOINS UNE - EP"
    ],
    "tracks": [
      {
        "name": "INSTABLE",
        "album": "MINUIT MOINS UNE - EP",
        "year": 2025
      },
      {
        "name": "ATYPICAL",
        "album": "MINUIT MOINS UNE - EP",
        "year": 2025
      },
      {
        "name": "FETTI",
        "album": "MINUIT MOINS UNE - EP",
        "year": 2025
      },
      {
        "name": "LOLITA",
        "album": "MINUIT MOINS UNE - EP",
        "year": 2025
      },
      {
        "name": "FAIRYTALE",
        "album": "MINUIT MOINS UNE - EP",
        "year": 2025
      },
      {
        "name": "RIDE OR DIE",
        "album": "MINUIT MOINS UNE - EP",
        "year": 2025
      },
      {
        "name": "Window",
        "album": "Polar Escape",
        "year": 2023
      },
      {
        "name": "Yu Gi Oh",
        "album": "Polar Escape",
        "year": 2023
      },
      {
        "name": "Méchant",
        "album": "Polar Escape",
        "year": 2023
      },
      {
        "name": "Peach",
        "album": "Polar Escape",
        "year": 2023
      },
      {
        "name": "Winter",
        "album": "Polar Escape",
        "year": 2023
      },
      {
        "name": "HateNote",
        "album": "Polar Escape",
        "year": 2023
      },
      {
        "name": "Parasité",
        "album": "Polar Escape",
        "year": 2023
      },
      {
        "name": "Fall in luv (feat. Modjow)",
        "album": "Polar Escape",
        "year": 2023
      }
    ]
  },
  {
    "name": "Knowledge the Pirate & Roc Marciano",
    "color": "#1D9E75",
    "genre": "Hip-Hop/Rap",
    "trackCount": 14,
    "albums": [
      "The Round Table"
    ],
    "tracks": [
      {
        "name": "Eating Etiquette",
        "album": "The Round Table",
        "year": 2025
      },
      {
        "name": "Golden Rules",
        "album": "The Round Table",
        "year": 2025
      },
      {
        "name": "Takes a Ten",
        "album": "The Round Table",
        "year": 2025
      },
      {
        "name": "The Outfit",
        "album": "The Round Table",
        "year": 2025
      },
      {
        "name": "Magic & Kareem",
        "album": "The Round Table",
        "year": 2025
      },
      {
        "name": "Addicted to Danger",
        "album": "The Round Table",
        "year": 2025
      },
      {
        "name": "Ride Wit a P",
        "album": "The Round Table",
        "year": 2025
      },
      {
        "name": "Food For Thought",
        "album": "The Round Table",
        "year": 2025
      },
      {
        "name": "Forks and Knives",
        "album": "The Round Table",
        "year": 2025
      },
      {
        "name": "Gut Feeling",
        "album": "The Round Table",
        "year": 2025
      },
      {
        "name": "1 ON ME",
        "album": "The Round Table",
        "year": 2025
      },
      {
        "name": "Young Thugs",
        "album": "The Round Table",
        "year": 2025
      },
      {
        "name": "Servitude",
        "album": "The Round Table",
        "year": 2025
      },
      {
        "name": "Receipts",
        "album": "The Round Table",
        "year": 2025
      }
    ]
  },
  {
    "name": "JAŸ-Z & Kanye West",
    "color": "#EF9F27",
    "genre": "Hip-Hop/Rap",
    "trackCount": 14,
    "albums": [
      "Watch the Throne (Deluxe)"
    ],
    "tracks": [
      {
        "name": "No Church in the Wild (feat. Frank Ocean & The-Dream)",
        "album": "Watch the Throne (Deluxe)",
        "year": 2011
      },
      {
        "name": "Lift Off (feat. Beyoncé)",
        "album": "Watch the Throne (Deluxe)",
        "year": 2011
      },
      {
        "name": "Ni**as in Paris",
        "album": "Watch the Throne (Deluxe)",
        "year": 2011
      },
      {
        "name": "Otis (feat. Otis Redding)",
        "album": "Watch the Throne (Deluxe)",
        "year": 2011
      },
      {
        "name": "Gotta Have It",
        "album": "Watch the Throne (Deluxe)",
        "year": 2011
      },
      {
        "name": "New Day",
        "album": "Watch the Throne (Deluxe)",
        "year": 2011
      },
      {
        "name": "That's My Bitch",
        "album": "Watch the Throne (Deluxe)",
        "year": 2011
      },
      {
        "name": "Welcome to the Jungle",
        "album": "Watch the Throne (Deluxe)",
        "year": 2011
      },
      {
        "name": "Who Gon Stop Me",
        "album": "Watch the Throne (Deluxe)",
        "year": 2011
      },
      {
        "name": "Murder to Excellence",
        "album": "Watch the Throne (Deluxe)",
        "year": 2011
      },
      {
        "name": "Made in America (feat. Frank Ocean)",
        "album": "Watch the Throne (Deluxe)",
        "year": 2011
      },
      {
        "name": "Why I Love You (feat. Mr Hudson)",
        "album": "Watch the Throne (Deluxe)",
        "year": 2011
      },
      {
        "name": "Primetime",
        "album": "Watch the Throne (Deluxe)",
        "year": 2011
      },
      {
        "name": "The Joy (feat. Curtis Mayfield)",
        "album": "Watch the Throne (Deluxe)",
        "year": 2011
      }
    ]
  },
  {
    "name": "Durden",
    "color": "#D4537E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 14,
    "albums": [
      "Travail, Argent, Laisse",
      "Kaliuga 001 - Single",
      "Kaliuga 002 - Single"
    ],
    "tracks": [
      {
        "name": "PERLE RARE",
        "album": "Travail, Argent, Laisse",
        "year": 2024
      },
      {
        "name": "WINTER PAS DE NEIGE",
        "album": "Travail, Argent, Laisse",
        "year": 2024
      },
      {
        "name": "SOUTH PARK",
        "album": "Travail, Argent, Laisse",
        "year": 2024
      },
      {
        "name": "10 33 (feat. Souffrance)",
        "album": "Travail, Argent, Laisse",
        "year": 2024
      },
      {
        "name": "interlude",
        "album": "Travail, Argent, Laisse",
        "year": 2024
      },
      {
        "name": "BOUSSA",
        "album": "Travail, Argent, Laisse",
        "year": 2024
      },
      {
        "name": "DALLE & SACRIFICES",
        "album": "Travail, Argent, Laisse",
        "year": 2024
      },
      {
        "name": "LION ROUGE",
        "album": "Travail, Argent, Laisse",
        "year": 2024
      },
      {
        "name": "3arbi d'Alabasta",
        "album": "Kaliuga 001 - Single",
        "year": 2025
      },
      {
        "name": "Gang Activity (feat. César & L.E.O)",
        "album": "Kaliuga 001 - Single",
        "year": 2025
      },
      {
        "name": "nouvel enregistrement 124",
        "album": "Kaliuga 001 - Single",
        "year": 2025
      },
      {
        "name": "Sale blédard",
        "album": "Kaliuga 002 - Single",
        "year": 2025
      },
      {
        "name": "C'est toi qui paye",
        "album": "Kaliuga 002 - Single",
        "year": 2025
      },
      {
        "name": "nouvel enregistrement 125",
        "album": "Kaliuga 002 - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "Rémy",
    "color": "#378ADD",
    "genre": "Hip-Hop/Rap",
    "trackCount": 14,
    "albums": [
      "C'est Rémy",
      "On traîne - Single"
    ],
    "tracks": [
      {
        "name": "Memento Mori (feat. Mac Tyer)",
        "album": "C'est Rémy",
        "year": 2018
      },
      {
        "name": "Comme à l'ancienne (feat. Mac Tyer)",
        "album": "C'est Rémy",
        "year": 2017
      },
      {
        "name": "On traîne",
        "album": "On traîne - Single",
        "year": 2017
      },
      {
        "name": "Bandits",
        "album": "C'est Rémy",
        "year": 2018
      },
      {
        "name": "Dans le Binks",
        "album": "C'est Rémy",
        "year": 2018
      },
      {
        "name": "Un peu ivre",
        "album": "C'est Rémy",
        "year": 2018
      },
      {
        "name": "Ne me quitte pas",
        "album": "C'est Rémy",
        "year": 2018
      },
      {
        "name": "Rappelle-toi",
        "album": "C'est Rémy",
        "year": 2018
      },
      {
        "name": "Toujours au quartier",
        "album": "C'est Rémy",
        "year": 2018
      },
      {
        "name": "Mon frérot",
        "album": "C'est Rémy",
        "year": 2018
      },
      {
        "name": "Pas besoin",
        "album": "C'est Rémy",
        "year": 2018
      },
      {
        "name": "J'ai vu",
        "album": "C'est Rémy",
        "year": 2017
      },
      {
        "name": "On traîne",
        "album": "C'est Rémy",
        "year": 2017
      },
      {
        "name": "Note de piano",
        "album": "C'est Rémy",
        "year": 2018
      }
    ]
  },
  {
    "name": "Yares",
    "color": "#639922",
    "genre": "Hip-Hop/Rap",
    "trackCount": 13,
    "albums": [
      "REQUiEM",
      "EARLY WORKS - EP",
      "YORKE - Single"
    ],
    "tracks": [
      {
        "name": "YORKE",
        "album": "YORKE - Single",
        "year": 2022
      },
      {
        "name": "BEN10",
        "album": "REQUiEM",
        "year": 2022
      },
      {
        "name": "YORKE",
        "album": "REQUiEM",
        "year": 2022
      },
      {
        "name": "BLOODBORNE (feat. Sawé bi)",
        "album": "REQUiEM",
        "year": 2022
      },
      {
        "name": "À L'AiDE - INTERLUDE",
        "album": "REQUiEM",
        "year": 2022
      },
      {
        "name": "PERSONA",
        "album": "REQUiEM",
        "year": 2022
      },
      {
        "name": "CRASH",
        "album": "REQUiEM",
        "year": 2022
      },
      {
        "name": "3",
        "album": "REQUiEM",
        "year": 2022
      },
      {
        "name": "à cœur ouvert",
        "album": "EARLY WORKS - EP",
        "year": 2023
      },
      {
        "name": "poezy",
        "album": "EARLY WORKS - EP",
        "year": 2023
      },
      {
        "name": "marche ou crève",
        "album": "EARLY WORKS - EP",
        "year": 2023
      },
      {
        "name": "acouphènes",
        "album": "EARLY WORKS - EP",
        "year": 2023
      },
      {
        "name": "salem (outro)",
        "album": "EARLY WORKS - EP",
        "year": 2023
      }
    ]
  },
  {
    "name": "Mairo & Hopital",
    "color": "#993556",
    "genre": "Rap",
    "trackCount": 13,
    "albums": [
      "LA FIEV"
    ],
    "tracks": [
      {
        "name": "nitro LA FIEV",
        "album": "LA FIEV",
        "year": 2025
      },
      {
        "name": "dope",
        "album": "LA FIEV",
        "year": 2025
      },
      {
        "name": "i.think",
        "album": "LA FIEV",
        "year": 2025
      },
      {
        "name": "fight4GE",
        "album": "LA FIEV",
        "year": 2025
      },
      {
        "name": "paramount",
        "album": "LA FIEV",
        "year": 2025
      },
      {
        "name": "minuit (feat. Niels Schack)",
        "album": "LA FIEV",
        "year": 2025
      },
      {
        "name": "radio skit",
        "album": "LA FIEV",
        "year": 2025
      },
      {
        "name": "blccd tears",
        "album": "LA FIEV",
        "year": 2025
      },
      {
        "name": "antidote ou venin",
        "album": "LA FIEV",
        "year": 2025
      },
      {
        "name": "la patte brisée (feat. Ike Ortiz)",
        "album": "LA FIEV",
        "year": 2025
      },
      {
        "name": "température",
        "album": "LA FIEV",
        "year": 2025
      },
      {
        "name": "la tortue et le liev",
        "album": "LA FIEV",
        "year": 2025
      },
      {
        "name": "45%",
        "album": "LA FIEV",
        "year": 2025
      }
    ]
  },
  {
    "name": "Ghost Killer Track",
    "color": "#0F6E56",
    "genre": "Hip-Hop/Rap",
    "trackCount": 13,
    "albums": [
      "Que de l'amour",
      "Grünt Tunes"
    ],
    "tracks": [
      {
        "name": "Rodéo (feat. Nelick)",
        "album": "Grünt Tunes",
        "year": 2018
      },
      {
        "name": "Jamais comme avant (feat. DMS)",
        "album": "Que de l'amour",
        "year": 2022
      },
      {
        "name": "Rien qui allait (feat. Khali)",
        "album": "Que de l'amour",
        "year": 2022
      },
      {
        "name": "Smile:( (feat. So La Lune)",
        "album": "Que de l'amour",
        "year": 2022
      },
      {
        "name": "Voyage (feat. mademoiselle lou)",
        "album": "Que de l'amour",
        "year": 2022
      },
      {
        "name": "Espoir (feat. JMK$)",
        "album": "Que de l'amour",
        "year": 2022
      },
      {
        "name": "Eclipse (feat. Kerchak)",
        "album": "Que de l'amour",
        "year": 2022
      },
      {
        "name": "GO (feat. J9ueve)",
        "album": "Que de l'amour",
        "year": 2023
      },
      {
        "name": "Un jour (feat. Zamdane)",
        "album": "Que de l'amour",
        "year": 2023
      },
      {
        "name": "Oxygène (feat. winnterzuko)",
        "album": "Que de l'amour",
        "year": 2023
      },
      {
        "name": "Dans ma tête (feat. Bianca Costa)",
        "album": "Que de l'amour",
        "year": 2023
      },
      {
        "name": "Business Man (feat. Favé)",
        "album": "Que de l'amour",
        "year": 2023
      },
      {
        "name": "3sel (feat. Rounhaa)",
        "album": "Que de l'amour",
        "year": 2023
      }
    ]
  },
  {
    "name": "Lesram",
    "color": "#BA7517",
    "genre": "Rap",
    "trackCount": 13,
    "albums": [
      "MALVADO",
      "Grünt Tunes"
    ],
    "tracks": [
      {
        "name": "Relance",
        "album": "Grünt Tunes",
        "year": 2018
      },
      {
        "name": "TAKITA",
        "album": "MALVADO",
        "year": 2025
      },
      {
        "name": "DUREMENT",
        "album": "MALVADO",
        "year": 2025
      },
      {
        "name": "HORROR SHOW",
        "album": "MALVADO",
        "year": 2025
      },
      {
        "name": "BLACK MIRROR",
        "album": "MALVADO",
        "year": 2025
      },
      {
        "name": "MALVADO",
        "album": "MALVADO",
        "year": 2025
      },
      {
        "name": "BANANA KUSH",
        "album": "MALVADO",
        "year": 2025
      },
      {
        "name": "KOULOUKA",
        "album": "MALVADO",
        "year": 2025
      },
      {
        "name": "ELLE",
        "album": "MALVADO",
        "year": 2025
      },
      {
        "name": "DANS MA TÊTE",
        "album": "MALVADO",
        "year": 2025
      },
      {
        "name": "FOLIE DES GRANDEURS",
        "album": "MALVADO",
        "year": 2025
      },
      {
        "name": "AUSTIN POWERS (feat. Limsa D'aulnay)",
        "album": "MALVADO",
        "year": 2025
      },
      {
        "name": "ASHITAKA",
        "album": "MALVADO",
        "year": 2025
      }
    ]
  },
  {
    "name": "nelick",
    "color": "#534AB7",
    "genre": "Hip-Hop/Rap",
    "trackCount": 13,
    "albums": [
      "KiwiBunnyTape",
      "Tatoo",
      "DIEU SAUVE KIWIBUNNY (Mfit)",
      "Grünt Tunes",
      "JOYSTICK (feat. Jäde & kofi bae) - Single",
      "Règlement Freestyle #1 - Single"
    ],
    "tracks": [
      {
        "name": "Poudre dodo",
        "album": "Grünt Tunes",
        "year": 2018
      },
      {
        "name": "JOYSTICK (feat. Jäde & kofi bae)",
        "album": "JOYSTICK (feat. Jäde & kofi bae) - Single",
        "year": 2025
      },
      {
        "name": "cadillac",
        "album": "Tatoo",
        "year": 2021
      },
      {
        "name": "DIEU SAUVE KIWIBUNNY",
        "album": "DIEU SAUVE KIWIBUNNY (Mfit)",
        "year": 2018
      },
      {
        "name": "KiwiBunnyLove",
        "album": "KiwiBunnyTape",
        "year": 2018
      },
      {
        "name": "Règlement Freestyle #1",
        "album": "Règlement Freestyle #1 - Single",
        "year": 2017
      },
      {
        "name": "10 Décembre",
        "album": "KiwiBunnyTape",
        "year": 2018
      },
      {
        "name": "Rooftop (feat. Lord Esperanza)",
        "album": "KiwiBunnyTape",
        "year": 2018
      },
      {
        "name": "Range Rover",
        "album": "KiwiBunnyTape",
        "year": 2018
      },
      {
        "name": "ÉPHÉMÈRE",
        "album": "DIEU SAUVE KIWIBUNNY (Mfit)",
        "year": 2018
      },
      {
        "name": "seul dans le club",
        "album": "Tatoo",
        "year": 2021
      },
      {
        "name": "allô?",
        "album": "Tatoo",
        "year": 2021
      },
      {
        "name": "Beach_Life_Type_Beat",
        "album": "KiwiBunnyTape",
        "year": 2018
      }
    ]
  },
  {
    "name": "Vald, Vladimir Cauchemar & TODIEFOR",
    "color": "#993C1D",
    "genre": "Hip-Hop/Rap",
    "trackCount": 13,
    "albums": [
      "PANDEMONIUM RELOADED"
    ],
    "tracks": [
      {
        "name": "DEMON RELOADED",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      },
      {
        "name": "DIEU MERCI RELOADED",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      },
      {
        "name": "REGULATION RELOADED",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      },
      {
        "name": "TAL / TAL",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      },
      {
        "name": "QUE DES PROBLEMES RELOADED",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      },
      {
        "name": "PROZACZOPIXAN RELOADED",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      },
      {
        "name": "INTERLUDE RELOADED",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      },
      {
        "name": "GAUCHE DROITE RELOADED",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      },
      {
        "name": "RAP RIP",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      },
      {
        "name": "DARKNET RELOADED",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      },
      {
        "name": "UFOV RELOADED",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      },
      {
        "name": "PANDEMONIUM RELOADED",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      },
      {
        "name": "FLPVC RELOADED",
        "album": "PANDEMONIUM RELOADED",
        "year": 2025
      }
    ]
  },
  {
    "name": "Ptite Soeur, neophron & FEMTOGO",
    "color": "#085041",
    "genre": "Hip-Hop/Rap",
    "trackCount": 13,
    "albums": [
      "PRETTY DOLLCORPSE"
    ],
    "tracks": [
      {
        "name": "WHITE CHAMBER TALK",
        "album": "PRETTY DOLLCORPSE",
        "year": 2025
      },
      {
        "name": "100 000 LUMEN",
        "album": "PRETTY DOLLCORPSE",
        "year": 2025
      },
      {
        "name": "HANK J.",
        "album": "PRETTY DOLLCORPSE",
        "year": 2025
      },
      {
        "name": "BACHA BAZI WHISTLEBLOWER",
        "album": "PRETTY DOLLCORPSE",
        "year": 2025
      },
      {
        "name": "GEIGER COUNTER",
        "album": "PRETTY DOLLCORPSE",
        "year": 2025
      },
      {
        "name": "EVIL KNIEVEL",
        "album": "PRETTY DOLLCORPSE",
        "year": 2025
      },
      {
        "name": "SIXTH FLOOR",
        "album": "PRETTY DOLLCORPSE",
        "year": 2025
      },
      {
        "name": "G. MCKENNA",
        "album": "PRETTY DOLLCORPSE",
        "year": 2025
      },
      {
        "name": "PUKE SOMETHING",
        "album": "PRETTY DOLLCORPSE",
        "year": 2025
      },
      {
        "name": "MIRRROIR",
        "album": "PRETTY DOLLCORPSE",
        "year": 2025
      },
      {
        "name": "SEPTICÉMIE",
        "album": "PRETTY DOLLCORPSE",
        "year": 2025
      },
      {
        "name": "P***** D* C****",
        "album": "PRETTY DOLLCORPSE",
        "year": 2025
      },
      {
        "name": "LE MÔME",
        "album": "PRETTY DOLLCORPSE",
        "year": 2025
      }
    ]
  },
  {
    "name": "Steve Lacy",
    "color": "#854F0B",
    "genre": "R&B/Soul",
    "trackCount": 13,
    "albums": [
      "The Lo-Fis",
      "Apollo XXI",
      "Some - Single",
      "C U Girl - Single",
      "Steve Lacy's Demo - EP",
      "Dark Red - Single"
    ],
    "tracks": [
      {
        "name": "Some",
        "album": "Some - Single",
        "year": 2016
      },
      {
        "name": "C U Girl",
        "album": "C U Girl - Single",
        "year": 2015
      },
      {
        "name": "Basement Jack",
        "album": "Apollo XXI",
        "year": 2019
      },
      {
        "name": "Some",
        "album": "Steve Lacy's Demo - EP",
        "year": 2016
      },
      {
        "name": "Infrunami",
        "album": "The Lo-Fis",
        "year": 2020
      },
      {
        "name": "N Side",
        "album": "Apollo XXI",
        "year": 2019
      },
      {
        "name": "Dark Red",
        "album": "Dark Red - Single",
        "year": 2017
      },
      {
        "name": "Out of Me Head",
        "album": "The Lo-Fis",
        "year": 2020
      },
      {
        "name": "Uuuu",
        "album": "The Lo-Fis",
        "year": 2020
      },
      {
        "name": "Lay Me down",
        "album": "Apollo XXI",
        "year": 2019
      },
      {
        "name": "Atomic Vomit",
        "album": "The Lo-Fis",
        "year": 2020
      },
      {
        "name": "Only If",
        "album": "Apollo XXI",
        "year": 2019
      },
      {
        "name": "Thats No Fun",
        "album": "The Lo-Fis",
        "year": 2020
      }
    ]
  },
  {
    "name": "Gemen",
    "color": "#72243E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 13,
    "albums": [
      "SAVOIR (S')AIMER C'EST TOUT",
      "idées sombres - Single",
      "façon d'être - Single"
    ],
    "tracks": [
      {
        "name": "idées sombres",
        "album": "idées sombres - Single",
        "year": 2026
      },
      {
        "name": "GEMEN IL EST LONELY",
        "album": "SAVOIR (S')AIMER C'EST TOUT",
        "year": 2024
      },
      {
        "name": "C'EST NOUS !",
        "album": "SAVOIR (S')AIMER C'EST TOUT",
        "year": 2024
      },
      {
        "name": "LA MAIN SUR LE COEUR",
        "album": "SAVOIR (S')AIMER C'EST TOUT",
        "year": 2024
      },
      {
        "name": "WOW",
        "album": "SAVOIR (S')AIMER C'EST TOUT",
        "year": 2024
      },
      {
        "name": "FAIS LA MUSIQUE COMME TU LA SENS",
        "album": "SAVOIR (S')AIMER C'EST TOUT",
        "year": 2024
      },
      {
        "name": "MAISON DE CAMPAGNE",
        "album": "SAVOIR (S')AIMER C'EST TOUT",
        "year": 2024
      },
      {
        "name": "SMS",
        "album": "SAVOIR (S')AIMER C'EST TOUT",
        "year": 2024
      },
      {
        "name": "JAMAIS L'INVERSE",
        "album": "SAVOIR (S')AIMER C'EST TOUT",
        "year": 2024
      },
      {
        "name": "RADIO",
        "album": "SAVOIR (S')AIMER C'EST TOUT",
        "year": 2024
      },
      {
        "name": "LE SANG QUI COULE",
        "album": "SAVOIR (S')AIMER C'EST TOUT",
        "year": 2024
      },
      {
        "name": "JE T'AIME",
        "album": "SAVOIR (S')AIMER C'EST TOUT",
        "year": 2024
      },
      {
        "name": "façon d'être",
        "album": "façon d'être - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "Jeune Lion",
    "color": "#5DCAA5",
    "genre": "Hip-Hop/Rap",
    "trackCount": 13,
    "albums": [
      "BEFORE BABYLONE BURNT",
      "HIGHLY SPIRITUAL",
      "J U D A - Single"
    ],
    "tracks": [
      {
        "name": "SOUL",
        "album": "HIGHLY SPIRITUAL",
        "year": 2023
      },
      {
        "name": "J U D A",
        "album": "J U D A - Single",
        "year": 2021
      },
      {
        "name": "43e BIMA",
        "album": "BEFORE BABYLONE BURNT",
        "year": 2022
      },
      {
        "name": "QABBALA",
        "album": "BEFORE BABYLONE BURNT",
        "year": 2022
      },
      {
        "name": "TAKORADI PT2",
        "album": "BEFORE BABYLONE BURNT",
        "year": 2022
      },
      {
        "name": "BIRDMAN",
        "album": "BEFORE BABYLONE BURNT",
        "year": 2022
      },
      {
        "name": "222",
        "album": "BEFORE BABYLONE BURNT",
        "year": 2022
      },
      {
        "name": "AC MILAN",
        "album": "BEFORE BABYLONE BURNT",
        "year": 2022
      },
      {
        "name": "ARGENT DIAMANT OR",
        "album": "BEFORE BABYLONE BURNT",
        "year": 2022
      },
      {
        "name": "DEAR NYAMIEN",
        "album": "BEFORE BABYLONE BURNT",
        "year": 2022
      },
      {
        "name": "NYAMIEN JAHOVIA",
        "album": "BEFORE BABYLONE BURNT",
        "year": 2022
      },
      {
        "name": "MAUDIT BABYLONIEN",
        "album": "BEFORE BABYLONE BURNT",
        "year": 2022
      },
      {
        "name": "LION NOUVELLE VAGUE",
        "album": "HIGHLY SPIRITUAL",
        "year": 2022
      }
    ]
  },
  {
    "name": "slowburn",
    "color": "#F0997B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 13,
    "albums": [
      "a place called home - Single",
      "A Night Like This - Single",
      "where dreams take place - Single",
      "everlasting - Single",
      "stars fell where we walked - Single",
      "a setting sun - Single",
      "time will pass us by - Single",
      "To Bed - Single",
      "a familiar warmth - Single",
      "for a lifetime - Single"
    ],
    "tracks": [
      {
        "name": "a place called home",
        "album": "a place called home - Single",
        "year": 2024
      },
      {
        "name": "A Night Like This",
        "album": "A Night Like This - Single",
        "year": 2024
      },
      {
        "name": "where dreams take place (garrett's version) [feat. 96 Zeus]",
        "album": "where dreams take place - Single",
        "year": 2025
      },
      {
        "name": "everlasting",
        "album": "everlasting - Single",
        "year": 2024
      },
      {
        "name": "stars fell where we walked",
        "album": "stars fell where we walked - Single",
        "year": 2025
      },
      {
        "name": "a setting sun",
        "album": "a setting sun - Single",
        "year": 2026
      },
      {
        "name": "time will pass us by",
        "album": "time will pass us by - Single",
        "year": 2024
      },
      {
        "name": "To Bed",
        "album": "To Bed - Single",
        "year": 2024
      },
      {
        "name": "a familiar warmth",
        "album": "a familiar warmth - Single",
        "year": 2024
      },
      {
        "name": "for a lifetime",
        "album": "for a lifetime - Single",
        "year": 2025
      },
      {
        "name": "under the same moon",
        "album": "under the same moon - Single",
        "year": 2025
      },
      {
        "name": "somewhere in the static",
        "album": "somewhere in the static - Single",
        "year": 2025
      },
      {
        "name": "where the daylight went",
        "album": "where the daylight went - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "U2",
    "color": "#85B7EB",
    "genre": "Rock",
    "trackCount": 12,
    "albums": [
      "Songs of Innocence",
      "U218 Singles (Deluxe Version)"
    ],
    "tracks": [
      {
        "name": "Sleep Like a Baby Tonight",
        "album": "Songs of Innocence",
        "year": 2014
      },
      {
        "name": "Volcano",
        "album": "Songs of Innocence",
        "year": 2014
      },
      {
        "name": "Cedarwood Road",
        "album": "Songs of Innocence",
        "year": 2014
      },
      {
        "name": "Raised By Wolves",
        "album": "Songs of Innocence",
        "year": 2014
      },
      {
        "name": "The Troubles",
        "album": "Songs of Innocence",
        "year": 2014
      },
      {
        "name": "This Is Where You Can Reach Me Now",
        "album": "Songs of Innocence",
        "year": 2014
      },
      {
        "name": "California (There Is No End to Love)",
        "album": "Songs of Innocence",
        "year": 2014
      },
      {
        "name": "Every Breaking Wave",
        "album": "Songs of Innocence",
        "year": 2014
      },
      {
        "name": "Song for Someone",
        "album": "Songs of Innocence",
        "year": 2014
      },
      {
        "name": "The Miracle (Of Joey Ramone)",
        "album": "Songs of Innocence",
        "year": 2014
      },
      {
        "name": "Iris (Hold Me Close)",
        "album": "Songs of Innocence",
        "year": 2014
      },
      {
        "name": "One",
        "album": "U218 Singles (Deluxe Version)",
        "year": 1991
      }
    ]
  },
  {
    "name": "KIKESA",
    "color": "#97C459",
    "genre": "Hip-Hop/Rap",
    "trackCount": 12,
    "albums": [
      "Dimanche de Hippie, Vol. 3"
    ],
    "tracks": [
      {
        "name": "Rose",
        "album": "Dimanche de Hippie, Vol. 3",
        "year": 2018
      },
      {
        "name": "Je réponds à vos commentaires",
        "album": "Dimanche de Hippie, Vol. 3",
        "year": 2018
      },
      {
        "name": "Loin d'ici",
        "album": "Dimanche de Hippie, Vol. 3",
        "year": 2018
      },
      {
        "name": "Session Live",
        "album": "Dimanche de Hippie, Vol. 3",
        "year": 2018
      },
      {
        "name": "Depuis quand",
        "album": "Dimanche de Hippie, Vol. 3",
        "year": 2018
      },
      {
        "name": "Quand ça s'arrête (feat. Nemir)",
        "album": "Dimanche de Hippie, Vol. 3",
        "year": 2018
      },
      {
        "name": "Tout pour plaire (feat. VSO)",
        "album": "Dimanche de Hippie, Vol. 3",
        "year": 2018
      },
      {
        "name": "Trop",
        "album": "Dimanche de Hippie, Vol. 3",
        "year": 2018
      },
      {
        "name": "Je vous aime",
        "album": "Dimanche de Hippie, Vol. 3",
        "year": 2018
      },
      {
        "name": "Soulever des mamans",
        "album": "Dimanche de Hippie, Vol. 3",
        "year": 2018
      },
      {
        "name": "Erika - Bonus",
        "album": "Dimanche de Hippie, Vol. 3",
        "year": 2018
      },
      {
        "name": "07 56 89 24 89",
        "album": "Dimanche de Hippie, Vol. 3",
        "year": 2018
      }
    ]
  },
  {
    "name": "Victor Solf",
    "color": "#FAC775",
    "genre": "French Pop",
    "trackCount": 12,
    "albums": [
      "Tout peut durer"
    ],
    "tracks": [
      {
        "name": "Tout peut durer",
        "album": "Tout peut durer",
        "year": 2024
      },
      {
        "name": "Colère",
        "album": "Tout peut durer",
        "year": 2025
      },
      {
        "name": "Des pays pas sages",
        "album": "Tout peut durer",
        "year": 2025
      },
      {
        "name": "Que le cœur",
        "album": "Tout peut durer",
        "year": 2024
      },
      {
        "name": "Ce qui compte",
        "album": "Tout peut durer",
        "year": 2025
      },
      {
        "name": "Figur",
        "album": "Tout peut durer",
        "year": 2025
      },
      {
        "name": "787 Hale Road",
        "album": "Tout peut durer",
        "year": 2025
      },
      {
        "name": "Plus jamais rentrer",
        "album": "Tout peut durer",
        "year": 2025
      },
      {
        "name": "Multiple",
        "album": "Tout peut durer",
        "year": 2025
      },
      {
        "name": "Emilie",
        "album": "Tout peut durer",
        "year": 2025
      },
      {
        "name": "La nuit je...",
        "album": "Tout peut durer",
        "year": 2025
      },
      {
        "name": "Le meilleur de toi",
        "album": "Tout peut durer",
        "year": 2025
      }
    ]
  },
  {
    "name": "Yonis",
    "color": "#AFA9EC",
    "genre": "Hip-Hop/Rap",
    "trackCount": 12,
    "albums": [
      "Instawrite"
    ],
    "tracks": [
      {
        "name": "Adrénaline",
        "album": "Instawrite",
        "year": 2021
      },
      {
        "name": "Ctrl-z",
        "album": "Instawrite",
        "year": 2021
      },
      {
        "name": "Vdm",
        "album": "Instawrite",
        "year": 2021
      },
      {
        "name": "Unana",
        "album": "Instawrite",
        "year": 2021
      },
      {
        "name": "Vroum vroum",
        "album": "Instawrite",
        "year": 2020
      },
      {
        "name": "Soleil",
        "album": "Instawrite",
        "year": 2021
      },
      {
        "name": "C'est comme ça",
        "album": "Instawrite",
        "year": 2021
      },
      {
        "name": "Mon pote",
        "album": "Instawrite",
        "year": 2021
      },
      {
        "name": "Danser jusqu'à la mort",
        "album": "Instawrite",
        "year": 2021
      },
      {
        "name": "Parfum",
        "album": "Instawrite",
        "year": 2021
      },
      {
        "name": "Bye bye",
        "album": "Instawrite",
        "year": 2021
      },
      {
        "name": "Sister",
        "album": "Instawrite",
        "year": 2021
      }
    ]
  },
  {
    "name": "Saturn Citizen",
    "color": "#F5C4B3",
    "genre": "Hip-Hop/Rap",
    "trackCount": 12,
    "albums": [
      "Saturn Tape, Vol. 1"
    ],
    "tracks": [
      {
        "name": "Cosmos",
        "album": "Saturn Tape, Vol. 1",
        "year": 2019
      },
      {
        "name": "Entrax",
        "album": "Saturn Tape, Vol. 1",
        "year": 2019
      },
      {
        "name": "Tous Les Matins",
        "album": "Saturn Tape, Vol. 1",
        "year": 2019
      },
      {
        "name": "À La Mode",
        "album": "Saturn Tape, Vol. 1",
        "year": 2019
      },
      {
        "name": "Plage (feat. Mazoo)",
        "album": "Saturn Tape, Vol. 1",
        "year": 2019
      },
      {
        "name": "Billets Verts",
        "album": "Saturn Tape, Vol. 1",
        "year": 2019
      },
      {
        "name": "Arthur Morgan",
        "album": "Saturn Tape, Vol. 1",
        "year": 2019
      },
      {
        "name": "Phénomène Raven",
        "album": "Saturn Tape, Vol. 1",
        "year": 2019
      },
      {
        "name": "Spontané",
        "album": "Saturn Tape, Vol. 1",
        "year": 2019
      },
      {
        "name": "Graviti",
        "album": "Saturn Tape, Vol. 1",
        "year": 2019
      },
      {
        "name": "Donna",
        "album": "Saturn Tape, Vol. 1",
        "year": 2019
      },
      {
        "name": "Découpe",
        "album": "Saturn Tape, Vol. 1",
        "year": 2019
      }
    ]
  },
  {
    "name": "Ashh",
    "color": "#9FE1CB",
    "genre": "Hip-Hop/Rap",
    "trackCount": 12,
    "albums": [
      "Mila 809",
      "CRUISE",
      "L'AMOUR ET LA VIOLENCE",
      "Cruise",
      "Chillance Avenue - EP",
      "Stereotype - EP"
    ],
    "tracks": [
      {
        "name": "Nostalgie",
        "album": "CRUISE",
        "year": 2015
      },
      {
        "name": "Motel",
        "album": "CRUISE",
        "year": 2015
      },
      {
        "name": "ROUGE (feat. MC Solaar)",
        "album": "L'AMOUR ET LA VIOLENCE",
        "year": 2021
      },
      {
        "name": "Nenufar",
        "album": "Mila 809",
        "year": 2017
      },
      {
        "name": "105",
        "album": "Mila 809",
        "year": 2017
      },
      {
        "name": "Sofomor",
        "album": "Mila 809",
        "year": 2017
      },
      {
        "name": "Valey",
        "album": "Mila 809",
        "year": 2017
      },
      {
        "name": "Lemonade",
        "album": "Cruise",
        "year": 2015
      },
      {
        "name": "Allume un Blunt",
        "album": "Chillance Avenue - EP",
        "year": 2014
      },
      {
        "name": "AK",
        "album": "Mila 809",
        "year": 2017
      },
      {
        "name": "Satur",
        "album": "Mila 809",
        "year": 2017
      },
      {
        "name": "16",
        "album": "Stereotype - EP",
        "year": 2018
      }
    ]
  },
  {
    "name": "1PLIKÉ140",
    "color": "#C0DD97",
    "genre": "Hip-Hop/Rap",
    "trackCount": 12,
    "albums": [
      "1PLIKTOI (Vol. 2)",
      "1PLIKTOI",
      "ARRÊTEZ-LE !, Vol. 2"
    ],
    "tracks": [
      {
        "name": "BARRETTE DE 50",
        "album": "1PLIKTOI (Vol. 2)",
        "year": 2020
      },
      {
        "name": "NO HOOK",
        "album": "1PLIKTOI (Vol. 2)",
        "year": 2020
      },
      {
        "name": "DOLCE VITA",
        "album": "1PLIKTOI (Vol. 2)",
        "year": 2020
      },
      {
        "name": "DANS TON ENCEINTE",
        "album": "1PLIKTOI (Vol. 2)",
        "year": 2020
      },
      {
        "name": "ENFERMÉ",
        "album": "1PLIKTOI (Vol. 2)",
        "year": 2020
      },
      {
        "name": "EST-CE QUE T’ASSUMES ?",
        "album": "1PLIKTOI (Vol. 2)",
        "year": 2020
      },
      {
        "name": "JUSTE À TEMPS",
        "album": "1PLIKTOI (Vol. 2)",
        "year": 2020
      },
      {
        "name": "CADENASSÉ",
        "album": "1PLIKTOI (Vol. 2)",
        "year": 2020
      },
      {
        "name": "LOPSA STORY",
        "album": "1PLIKTOI (Vol. 2)",
        "year": 2020
      },
      {
        "name": "ZÉRO CONNEXION",
        "album": "1PLIKTOI (Vol. 2)",
        "year": 2020
      },
      {
        "name": "Dans mon assiette",
        "album": "1PLIKTOI",
        "year": 2020
      },
      {
        "name": "CANADA",
        "album": "ARRÊTEZ-LE !, Vol. 2",
        "year": 2022
      }
    ]
  },
  {
    "name": "Heuss L'enfoiré & Vald",
    "color": "#F4C0D1",
    "genre": "Hip-Hop/Rap",
    "trackCount": 12,
    "albums": [
      "Horizon vertical"
    ],
    "tracks": [
      {
        "name": "Vhr",
        "album": "Horizon vertical",
        "year": 2020
      },
      {
        "name": "Mauvais",
        "album": "Horizon vertical",
        "year": 2020
      },
      {
        "name": "Guccissima",
        "album": "Horizon vertical",
        "year": 2020
      },
      {
        "name": "Royal cheese",
        "album": "Horizon vertical",
        "year": 2020
      },
      {
        "name": "Diviser pour mieux régner",
        "album": "Horizon vertical",
        "year": 2020
      },
      {
        "name": "Canada",
        "album": "Horizon vertical",
        "year": 2020
      },
      {
        "name": "Mélange",
        "album": "Horizon vertical",
        "year": 2020
      },
      {
        "name": "Matrixé",
        "album": "Horizon vertical",
        "year": 2020
      },
      {
        "name": "1992",
        "album": "Horizon vertical",
        "year": 2020
      },
      {
        "name": "Horizon vertical",
        "album": "Horizon vertical",
        "year": 2020
      },
      {
        "name": "Adios",
        "album": "Horizon vertical",
        "year": 2020
      },
      {
        "name": "2014",
        "album": "Horizon vertical",
        "year": 2020
      }
    ]
  },
  {
    "name": "Richie Beats",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 12,
    "albums": [
      "Oh My God Vol.1"
    ],
    "tracks": [
      {
        "name": "FLY2LA - Instrumental",
        "album": "Oh My God Vol.1",
        "year": 2023
      },
      {
        "name": "CDG - Instrumental",
        "album": "Oh My God Vol.1",
        "year": 2023
      },
      {
        "name": "Tempted - Instrumental",
        "album": "Oh My God Vol.1",
        "year": 2023
      },
      {
        "name": "Peter Pan/Hollow - Instrumental",
        "album": "Oh My God Vol.1",
        "year": 2023
      },
      {
        "name": "Soul Calibur - Instrumental",
        "album": "Oh My God Vol.1",
        "year": 2023
      },
      {
        "name": "Chut! - Instrumental",
        "album": "Oh My God Vol.1",
        "year": 2023
      },
      {
        "name": "Tagada - Instrumental",
        "album": "Oh My God Vol.1",
        "year": 2023
      },
      {
        "name": "L.V - Instrumental",
        "album": "Oh My God Vol.1",
        "year": 2023
      },
      {
        "name": "Étoile - Instrumental",
        "album": "Oh My God Vol.1",
        "year": 2023
      },
      {
        "name": "Maradona 10 - Instrumental",
        "album": "Oh My God Vol.1",
        "year": 2023
      },
      {
        "name": "Tesla - Instrumental",
        "album": "Oh My God Vol.1",
        "year": 2023
      },
      {
        "name": "Sommet - Instrumental",
        "album": "Oh My God Vol.1",
        "year": 2023
      }
    ]
  },
  {
    "name": "THÉA",
    "color": "#1A5FB4",
    "genre": "Rock",
    "trackCount": 12,
    "albums": [
      "MEMENTO",
      "h4rdr0ck3r - Single"
    ],
    "tracks": [
      {
        "name": "h4rdr0ck3r",
        "album": "h4rdr0ck3r - Single",
        "year": 2025
      },
      {
        "name": "AAAAAAAH",
        "album": "MEMENTO",
        "year": 2021
      },
      {
        "name": "Guillotine",
        "album": "MEMENTO",
        "year": 2021
      },
      {
        "name": "À la mort",
        "album": "MEMENTO",
        "year": 2023
      },
      {
        "name": "Enfant doué.e",
        "album": "MEMENTO",
        "year": 2021
      },
      {
        "name": "Derniers mots",
        "album": "MEMENTO",
        "year": 2022
      },
      {
        "name": "Entropie",
        "album": "MEMENTO",
        "year": 2023
      },
      {
        "name": "Bal de chair",
        "album": "MEMENTO",
        "year": 2023
      },
      {
        "name": "Sous la Lune",
        "album": "MEMENTO",
        "year": 2023
      },
      {
        "name": "Ça ira",
        "album": "MEMENTO",
        "year": 2023
      },
      {
        "name": "De Salem et d'ailleurs",
        "album": "MEMENTO",
        "year": 2023
      },
      {
        "name": "Grisaille (Bonus Track)",
        "album": "MEMENTO",
        "year": 2022
      }
    ]
  },
  {
    "name": "A2H",
    "color": "#2D8A4E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 12,
    "albums": [
      "Libre",
      "Les hommes pleurent en hiver (Winter Tape)",
      "Summer Stories Kushtape, Vol. 2",
      "Rédemption",
      "Blues - Single",
      "OG - Single",
      "L'amour"
    ],
    "tracks": [
      {
        "name": "Brasier (feat. Sam's)",
        "album": "Rédemption",
        "year": 2020
      },
      {
        "name": "Mélo (feat. Sowlie)",
        "album": "Libre",
        "year": 2016
      },
      {
        "name": "Grenadine",
        "album": "Summer Stories Kushtape, Vol. 2",
        "year": 2016
      },
      {
        "name": "Une dernière fois",
        "album": "Libre",
        "year": 2016
      },
      {
        "name": "Pardonnez-moi",
        "album": "Libre",
        "year": 2016
      },
      {
        "name": "King Chill",
        "album": "Les hommes pleurent en hiver (Winter Tape)",
        "year": 2017
      },
      {
        "name": "Sans dire adieu (feat. Sowlie)",
        "album": "Les hommes pleurent en hiver (Winter Tape)",
        "year": 2017
      },
      {
        "name": "Woodstock",
        "album": "Summer Stories Kushtape, Vol. 2",
        "year": 2016
      },
      {
        "name": "Blues",
        "album": "Blues - Single",
        "year": 2018
      },
      {
        "name": "OG",
        "album": "OG - Single",
        "year": 2020
      },
      {
        "name": "Prélude avant l'amour",
        "album": "L'amour",
        "year": 2018
      },
      {
        "name": "Avant de s'enfuir",
        "album": "Les hommes pleurent en hiver (Winter Tape)",
        "year": 2017
      }
    ]
  },
  {
    "name": "Guerta",
    "color": "#C4622D",
    "genre": "Hip-Hop/Rap",
    "trackCount": 12,
    "albums": [
      "Les Derniers Samouraïs 2.0"
    ],
    "tracks": [
      {
        "name": "Hara-Kiri",
        "album": "Les Derniers Samouraïs 2.0",
        "year": 2022
      },
      {
        "name": "Benz",
        "album": "Les Derniers Samouraïs 2.0",
        "year": 2022
      },
      {
        "name": "Medley",
        "album": "Les Derniers Samouraïs 2.0",
        "year": 2022
      },
      {
        "name": "Asian Drill (feat. Le Croc)",
        "album": "Les Derniers Samouraïs 2.0",
        "year": 2022
      },
      {
        "name": "Shinigami (Interlude)",
        "album": "Les Derniers Samouraïs 2.0",
        "year": 2022
      },
      {
        "name": "Picador",
        "album": "Les Derniers Samouraïs 2.0",
        "year": 2022
      },
      {
        "name": "Pirhana (feat. Tekmé)",
        "album": "Les Derniers Samouraïs 2.0",
        "year": 2022
      },
      {
        "name": "La planque",
        "album": "Les Derniers Samouraïs 2.0",
        "year": 2022
      },
      {
        "name": "Dernière note",
        "album": "Les Derniers Samouraïs 2.0",
        "year": 2022
      },
      {
        "name": "Bouillant (feat. Nkess) [Bonus track]",
        "album": "Les Derniers Samouraïs 2.0",
        "year": 2022
      },
      {
        "name": "T'es un bon (feat. Tino 19 réseaux) [Bonus track]",
        "album": "Les Derniers Samouraïs 2.0",
        "year": 2022
      },
      {
        "name": "J'comprends pas (feat. Djiro) [Bonus track]",
        "album": "Les Derniers Samouraïs 2.0",
        "year": 2022
      }
    ]
  },
  {
    "name": "Wiz Khalifa",
    "color": "#7B4FA6",
    "genre": "Hip-Hop/Rap",
    "trackCount": 12,
    "albums": [
      "Laugh Now, Fly Later",
      "Rolling Papers 2",
      "The Saga of Wiz Khalifa (Deluxe)",
      "The Weeddocks",
      "Khalifa",
      "O.N.I.F.C.",
      "Blacc Hollywood (Deluxe Version)"
    ],
    "tracks": [
      {
        "name": "Villa",
        "album": "The Saga of Wiz Khalifa (Deluxe)",
        "year": 2020
      },
      {
        "name": "City of Steel",
        "album": "Laugh Now, Fly Later",
        "year": 2017
      },
      {
        "name": "420 Freestyle",
        "album": "Rolling Papers 2",
        "year": 2018
      },
      {
        "name": "Fr Fr (feat. Lil Skies)",
        "album": "Rolling Papers 2",
        "year": 2018
      },
      {
        "name": "Global Access",
        "album": "Laugh Now, Fly Later",
        "year": 2017
      },
      {
        "name": "Letterman",
        "album": "Laugh Now, Fly Later",
        "year": 2017
      },
      {
        "name": "Bootsy Bellows",
        "album": "Rolling Papers 2",
        "year": 2018
      },
      {
        "name": "California",
        "album": "The Weeddocks",
        "year": 2013
      },
      {
        "name": "Stay Focused",
        "album": "Laugh Now, Fly Later",
        "year": 2017
      },
      {
        "name": "Cowboy",
        "album": "Khalifa",
        "year": 2016
      },
      {
        "name": "Fall Asleep",
        "album": "O.N.I.F.C.",
        "year": 2012
      },
      {
        "name": "No Gain",
        "album": "Blacc Hollywood (Deluxe Version)",
        "year": 2014
      }
    ]
  },
  {
    "name": "Mac DeMarco",
    "color": "#E8593C",
    "genre": "Alternative",
    "trackCount": 12,
    "albums": [
      "2",
      "This Old Dog"
    ],
    "tracks": [
      {
        "name": "For the First Time",
        "album": "This Old Dog",
        "year": 2017
      },
      {
        "name": "Cooking Up Something Good",
        "album": "2",
        "year": 2012
      },
      {
        "name": "Dreaming",
        "album": "2",
        "year": 2012
      },
      {
        "name": "Freaking Out the Neighborhood",
        "album": "2",
        "year": 2012
      },
      {
        "name": "Annie",
        "album": "2",
        "year": 2012
      },
      {
        "name": "Ode to Viceroy",
        "album": "2",
        "year": 2012
      },
      {
        "name": "Robson Girl",
        "album": "2",
        "year": 2012
      },
      {
        "name": "The Stars Keep On Calling My Name",
        "album": "2",
        "year": 2012
      },
      {
        "name": "My Kind of Woman",
        "album": "2",
        "year": 2012
      },
      {
        "name": "Boe Zaah",
        "album": "2",
        "year": 2012
      },
      {
        "name": "Sherrill",
        "album": "2",
        "year": 2012
      },
      {
        "name": "Still Together",
        "album": "2",
        "year": 2012
      }
    ]
  },
  {
    "name": "CHAVI & LV la prudence",
    "color": "#3B8BD4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 12,
    "albums": [
      "CARPOOL LANE",
      "FPA - Single"
    ],
    "tracks": [
      {
        "name": "MIRINDA",
        "album": "CARPOOL LANE",
        "year": 2025
      },
      {
        "name": "LO QUE NO PUDO SER",
        "album": "CARPOOL LANE",
        "year": 2025
      },
      {
        "name": "BELSUNCE",
        "album": "CARPOOL LANE",
        "year": 2025
      },
      {
        "name": "LE GABIAN",
        "album": "CARPOOL LANE",
        "year": 2025
      },
      {
        "name": "EXTENDO",
        "album": "CARPOOL LANE",
        "year": 2025
      },
      {
        "name": "PK TU CRACHE",
        "album": "CARPOOL LANE",
        "year": 2025
      },
      {
        "name": "SARAH CONOR",
        "album": "CARPOOL LANE",
        "year": 2025
      },
      {
        "name": "CARPOOL LANE",
        "album": "CARPOOL LANE",
        "year": 2025
      },
      {
        "name": "FPA",
        "album": "CARPOOL LANE",
        "year": 2025
      },
      {
        "name": "SLIME LOVE",
        "album": "CARPOOL LANE",
        "year": 2025
      },
      {
        "name": "ALL THE TIMES",
        "album": "CARPOOL LANE",
        "year": 2025
      },
      {
        "name": "FPA",
        "album": "FPA - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "Al-Walid",
    "color": "#4A9E5C",
    "genre": "Hip-Hop/Rap",
    "trackCount": 12,
    "albums": [
      "Y'A UN SOLEIL EN MOI"
    ],
    "tracks": [
      {
        "name": "Specimen",
        "album": "Y'A UN SOLEIL EN MOI",
        "year": 2024
      },
      {
        "name": "Gueule du loup/rhum brun",
        "album": "Y'A UN SOLEIL EN MOI",
        "year": 2024
      },
      {
        "name": "Jeune Beur",
        "album": "Y'A UN SOLEIL EN MOI",
        "year": 2024
      },
      {
        "name": "FilmNoir",
        "album": "Y'A UN SOLEIL EN MOI",
        "year": 2024
      },
      {
        "name": "coti et canettes",
        "album": "Y'A UN SOLEIL EN MOI",
        "year": 2024
      },
      {
        "name": "Station service",
        "album": "Y'A UN SOLEIL EN MOI",
        "year": 2024
      },
      {
        "name": "Détecteur de mort",
        "album": "Y'A UN SOLEIL EN MOI",
        "year": 2024
      },
      {
        "name": "Skit",
        "album": "Y'A UN SOLEIL EN MOI",
        "year": 2024
      },
      {
        "name": "Guedes",
        "album": "Y'A UN SOLEIL EN MOI",
        "year": 2024
      },
      {
        "name": "Voyage999",
        "album": "Y'A UN SOLEIL EN MOI",
        "year": 2024
      },
      {
        "name": "Pirogue",
        "album": "Y'A UN SOLEIL EN MOI",
        "year": 2024
      },
      {
        "name": "Ouaouahhe",
        "album": "Y'A UN SOLEIL EN MOI",
        "year": 2024
      }
    ]
  },
  {
    "name": "Adèle Castillon",
    "color": "#9B4DCA",
    "genre": "Pop",
    "trackCount": 12,
    "albums": [
      "Crèvecoeur"
    ],
    "tracks": [
      {
        "name": "Crève-cœur",
        "album": "Crèvecoeur",
        "year": 2024
      },
      {
        "name": "À la folie",
        "album": "Crèvecoeur",
        "year": 2024
      },
      {
        "name": "Ce soir (feat. Gazo)",
        "album": "Crèvecoeur",
        "year": 2024
      },
      {
        "name": "lèche_vitrine_demo1.wav",
        "album": "Crèvecoeur",
        "year": 2024
      },
      {
        "name": "Frissons (feat. winnterzuko)",
        "album": "Crèvecoeur",
        "year": 2024
      },
      {
        "name": "Subutex",
        "album": "Crèvecoeur",
        "year": 2024
      },
      {
        "name": "Rien qu'ça",
        "album": "Crèvecoeur",
        "year": 2025
      },
      {
        "name": "Je me demande (feat. Louane)",
        "album": "Crèvecoeur",
        "year": 2024
      },
      {
        "name": "It might never end (feat. Declan McKenna)",
        "album": "Crèvecoeur",
        "year": 2025
      },
      {
        "name": "Comme ça (feat. Sopico)",
        "album": "Crèvecoeur",
        "year": 2025
      },
      {
        "name": "21 grammes (feat. pablopablo)",
        "album": "Crèvecoeur",
        "year": 2025
      },
      {
        "name": "Oh non :(",
        "album": "Crèvecoeur",
        "year": 2025
      }
    ]
  },
  {
    "name": "Chilla",
    "color": "#D4A017",
    "genre": "Hip-Hop/Rap",
    "trackCount": 11,
    "albums": [
      "Karma",
      "1er jour d'école - Single"
    ],
    "tracks": [
      {
        "name": "Sale chienne",
        "album": "Karma",
        "year": 2017
      },
      {
        "name": "Si j'étais un homme",
        "album": "Karma",
        "year": 2017
      },
      {
        "name": "Aller sans retour",
        "album": "Karma",
        "year": 2017
      },
      {
        "name": "Trouble",
        "album": "Karma",
        "year": 2017
      },
      {
        "name": "Millionnaire (feat. Sofiane)",
        "album": "Karma",
        "year": 2017
      },
      {
        "name": "Moral",
        "album": "Karma",
        "year": 2017
      },
      {
        "name": "Je viens de nulle part",
        "album": "Karma",
        "year": 2017
      },
      {
        "name": "Tant pis",
        "album": "Karma",
        "year": 2017
      },
      {
        "name": "Carpe Diem",
        "album": "Karma",
        "year": 2017
      },
      {
        "name": "Chico",
        "album": "Karma",
        "year": 2017
      },
      {
        "name": "1er jour d'école",
        "album": "1er jour d'école - Single",
        "year": 2018
      }
    ]
  },
  {
    "name": "Amy Winehouse",
    "color": "#FF6B6B",
    "genre": "R&B/Soul",
    "trackCount": 11,
    "albums": [
      "Back to Black"
    ],
    "tracks": [
      {
        "name": "Rehab",
        "album": "Back to Black",
        "year": 2006
      },
      {
        "name": "You Know I'm No Good",
        "album": "Back to Black",
        "year": 2006
      },
      {
        "name": "Me & Mr. Jones",
        "album": "Back to Black",
        "year": 2006
      },
      {
        "name": "Just Friends",
        "album": "Back to Black",
        "year": 2006
      },
      {
        "name": "Back to Black",
        "album": "Back to Black",
        "year": 2006
      },
      {
        "name": "Love Is a Losing Game",
        "album": "Back to Black",
        "year": 2006
      },
      {
        "name": "Tears Dry On Their Own",
        "album": "Back to Black",
        "year": 2006
      },
      {
        "name": "Wake Up Alone",
        "album": "Back to Black",
        "year": 2006
      },
      {
        "name": "Some Unholy War",
        "album": "Back to Black",
        "year": 2006
      },
      {
        "name": "He Can Only Hold Her",
        "album": "Back to Black",
        "year": 2006
      },
      {
        "name": "Addicted",
        "album": "Back to Black",
        "year": 2006
      }
    ]
  },
  {
    "name": "thaHomey & Skuna",
    "color": "#4ECDC4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 11,
    "albums": [
      "HEAT",
      "CASINO (feat. La Fève) - Single"
    ],
    "tracks": [
      {
        "name": "LOIN DEVANT (feat. Chanceko)",
        "album": "HEAT",
        "year": 2022
      },
      {
        "name": "WORK",
        "album": "HEAT",
        "year": 2022
      },
      {
        "name": "CASINO (feat. La Fève)",
        "album": "HEAT",
        "year": 2022
      },
      {
        "name": "SHAKE!",
        "album": "HEAT",
        "year": 2022
      },
      {
        "name": "E-THOT",
        "album": "HEAT",
        "year": 2022
      },
      {
        "name": "BRUCE LEE",
        "album": "HEAT",
        "year": 2022
      },
      {
        "name": "HITTERS",
        "album": "HEAT",
        "year": 2022
      },
      {
        "name": "THONG SONG",
        "album": "HEAT",
        "year": 2022
      },
      {
        "name": "LEFT RIGHT",
        "album": "HEAT",
        "year": 2022
      },
      {
        "name": "C'ÉTAIT LONG",
        "album": "HEAT",
        "year": 2022
      },
      {
        "name": "CASINO (feat. La Fève)",
        "album": "CASINO (feat. La Fève) - Single",
        "year": 2022
      }
    ]
  },
  {
    "name": "EDGE & Ratu$",
    "color": "#45B7D1",
    "genre": "Hip-Hop/Rap",
    "trackCount": 11,
    "albums": [
      "EN LESSGUILL"
    ],
    "tracks": [
      {
        "name": "LESSGOO/LETSGUILL",
        "album": "EN LESSGUILL",
        "year": 2022
      },
      {
        "name": "7/7",
        "album": "EN LESSGUILL",
        "year": 2022
      },
      {
        "name": "HORS BORD",
        "album": "EN LESSGUILL",
        "year": 2022
      },
      {
        "name": "CETTE NUIT",
        "album": "EN LESSGUILL",
        "year": 2022
      },
      {
        "name": "J'ADORE",
        "album": "EN LESSGUILL",
        "year": 2022
      },
      {
        "name": "LA NOYADE",
        "album": "EN LESSGUILL",
        "year": 2021
      },
      {
        "name": "CASTING",
        "album": "EN LESSGUILL",
        "year": 2022
      },
      {
        "name": "CDG",
        "album": "EN LESSGUILL",
        "year": 2022
      },
      {
        "name": "TWERK",
        "album": "EN LESSGUILL",
        "year": 2022
      },
      {
        "name": "SBTR/GLDSTN (feat. Deen Burbigo)",
        "album": "EN LESSGUILL",
        "year": 2022
      },
      {
        "name": "ADDICTIONS",
        "album": "EN LESSGUILL",
        "year": 2022
      }
    ]
  },
  {
    "name": "Arsaphe",
    "color": "#96CEB4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 11,
    "albums": [
      "GHOST MODEL"
    ],
    "tracks": [
      {
        "name": "13",
        "album": "GHOST MODEL",
        "year": 2025
      },
      {
        "name": "PARADIS",
        "album": "GHOST MODEL",
        "year": 2025
      },
      {
        "name": "NOTATION",
        "album": "GHOST MODEL",
        "year": 2025
      },
      {
        "name": "PIXEL21",
        "album": "GHOST MODEL",
        "year": 2025
      },
      {
        "name": "MAUVAIS",
        "album": "GHOST MODEL",
        "year": 2025
      },
      {
        "name": "12aDec",
        "album": "GHOST MODEL",
        "year": 2025
      },
      {
        "name": "L'APPEL",
        "album": "GHOST MODEL",
        "year": 2025
      },
      {
        "name": "ZONE HABITABLE",
        "album": "GHOST MODEL",
        "year": 2025
      },
      {
        "name": "NOUVEAU SANG",
        "album": "GHOST MODEL",
        "year": 2025
      },
      {
        "name": "DANK",
        "album": "GHOST MODEL",
        "year": 2025
      },
      {
        "name": "COLLINE",
        "album": "GHOST MODEL",
        "year": 2025
      }
    ]
  },
  {
    "name": "Drake & 21 Savage",
    "color": "#FFEAA7",
    "genre": "Hip-Hop/Rap",
    "trackCount": 11,
    "albums": [
      "Her Loss"
    ],
    "tracks": [
      {
        "name": "Rich Flex",
        "album": "Her Loss",
        "year": 2022
      },
      {
        "name": "Major Distribution",
        "album": "Her Loss",
        "year": 2022
      },
      {
        "name": "On BS",
        "album": "Her Loss",
        "year": 2022
      },
      {
        "name": "Privileged Rappers",
        "album": "Her Loss",
        "year": 2022
      },
      {
        "name": "Spin Bout U",
        "album": "Her Loss",
        "year": 2022
      },
      {
        "name": "Hours In Silence",
        "album": "Her Loss",
        "year": 2022
      },
      {
        "name": "Treacherous Twins",
        "album": "Her Loss",
        "year": 2022
      },
      {
        "name": "Circo Loco",
        "album": "Her Loss",
        "year": 2022
      },
      {
        "name": "P***y & Millions (feat. Travis Scott)",
        "album": "Her Loss",
        "year": 2022
      },
      {
        "name": "Broke Boys",
        "album": "Her Loss",
        "year": 2022
      },
      {
        "name": "More M’s",
        "album": "Her Loss",
        "year": 2022
      }
    ]
  },
  {
    "name": "Oklou",
    "color": "#7F77DD",
    "genre": "Alternative",
    "trackCount": 11,
    "albums": [
      "choke enough"
    ],
    "tracks": [
      {
        "name": "endless",
        "album": "choke enough",
        "year": 2025
      },
      {
        "name": "thank you for recording",
        "album": "choke enough",
        "year": 2025
      },
      {
        "name": "family and friends",
        "album": "choke enough",
        "year": 2024
      },
      {
        "name": "obvious",
        "album": "choke enough",
        "year": 2024
      },
      {
        "name": "ict",
        "album": "choke enough",
        "year": 2025
      },
      {
        "name": "choke enough",
        "album": "choke enough",
        "year": 2024
      },
      {
        "name": "(;'༎ຶٹ༎ຶ')",
        "album": "choke enough",
        "year": 2025
      },
      {
        "name": "plague dogs",
        "album": "choke enough",
        "year": 2025
      },
      {
        "name": "forces",
        "album": "choke enough",
        "year": 2025
      },
      {
        "name": "want to wanna come back",
        "album": "choke enough",
        "year": 2025
      },
      {
        "name": "blade bird",
        "album": "choke enough",
        "year": 2025
      }
    ]
  },
  {
    "name": "Nobodylikesbirdie",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 11,
    "albums": [
      "Manifest."
    ],
    "tracks": [
      {
        "name": "Manifest",
        "album": "Manifest.",
        "year": 2025
      },
      {
        "name": "Rempart",
        "album": "Manifest.",
        "year": 2025
      },
      {
        "name": "Echelle Sociale",
        "album": "Manifest.",
        "year": 2025
      },
      {
        "name": "Blue Jean",
        "album": "Manifest.",
        "year": 2025
      },
      {
        "name": "Pas de reproches",
        "album": "Manifest.",
        "year": 2025
      },
      {
        "name": "Numéro 10",
        "album": "Manifest.",
        "year": 2025
      },
      {
        "name": "La mairie de Lille",
        "album": "Manifest.",
        "year": 2025
      },
      {
        "name": "Bataille de la somme",
        "album": "Manifest.",
        "year": 2025
      },
      {
        "name": "RPST",
        "album": "Manifest.",
        "year": 2025
      },
      {
        "name": "L'autre côté",
        "album": "Manifest.",
        "year": 2025
      },
      {
        "name": "Sors d'chez toi ma gueule",
        "album": "Manifest.",
        "year": 2025
      }
    ]
  },
  {
    "name": "Morcheeba",
    "color": "#1D9E75",
    "genre": "Electronic",
    "trackCount": 11,
    "albums": [
      "Big Calm"
    ],
    "tracks": [
      {
        "name": "The Sea",
        "album": "Big Calm",
        "year": 1998
      },
      {
        "name": "Shoulder Holster",
        "album": "Big Calm",
        "year": 1997
      },
      {
        "name": "Part of the Process",
        "album": "Big Calm",
        "year": 1998
      },
      {
        "name": "Blindfold",
        "album": "Big Calm",
        "year": 1998
      },
      {
        "name": "Let Me See",
        "album": "Big Calm",
        "year": 1998
      },
      {
        "name": "Bullet Proof",
        "album": "Big Calm",
        "year": 1998
      },
      {
        "name": "Over and Over",
        "album": "Big Calm",
        "year": 1998
      },
      {
        "name": "Friction",
        "album": "Big Calm",
        "year": 1998
      },
      {
        "name": "Diggin' In a Watery Grave",
        "album": "Big Calm",
        "year": 1998
      },
      {
        "name": "Fear and Love",
        "album": "Big Calm",
        "year": 1998
      },
      {
        "name": "Big Calm",
        "album": "Big Calm",
        "year": 1998
      }
    ]
  },
  {
    "name": "Gustavo Cerati",
    "color": "#EF9F27",
    "genre": "Soundtrack",
    "trackCount": 11,
    "albums": [
      "+ Bien (Música de la Película)"
    ],
    "tracks": [
      {
        "name": "La Costura de Dios",
        "album": "+ Bien (Música de la Película)",
        "year": 2001
      },
      {
        "name": "Kuro",
        "album": "+ Bien (Música de la Película)",
        "year": 2001
      },
      {
        "name": "Es Solo una Ilusión",
        "album": "+ Bien (Música de la Película)",
        "year": 2001
      },
      {
        "name": "Paracaidas",
        "album": "+ Bien (Música de la Película)",
        "year": 2001
      },
      {
        "name": "Regando",
        "album": "+ Bien (Música de la Película)",
        "year": 2001
      },
      {
        "name": "La Costura de Dios V2",
        "album": "+ Bien (Música de la Película)",
        "year": 2001
      },
      {
        "name": "Simil Paraíso",
        "album": "+ Bien (Música de la Película)",
        "year": 2001
      },
      {
        "name": "Todos Duermen",
        "album": "+ Bien (Música de la Película)",
        "year": 2001
      },
      {
        "name": "Llegaste",
        "album": "+ Bien (Música de la Película)",
        "year": 2001
      },
      {
        "name": "Paisaje Porcelana",
        "album": "+ Bien (Música de la Película)",
        "year": 2001
      },
      {
        "name": "+ Bien",
        "album": "+ Bien (Música de la Película)",
        "year": 2001
      }
    ]
  },
  {
    "name": "Selug & $enar",
    "color": "#D4537E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 10,
    "albums": [
      "No Signal",
      "Le Jour Se Lève - EP"
    ],
    "tracks": [
      {
        "name": "Le Signal",
        "album": "No Signal",
        "year": 2024
      },
      {
        "name": "Philip Price",
        "album": "No Signal",
        "year": 2024
      },
      {
        "name": "Run Away",
        "album": "No Signal",
        "year": 2024
      },
      {
        "name": "L'enfant Des Flammes",
        "album": "No Signal",
        "year": 2024
      },
      {
        "name": "Bnp",
        "album": "No Signal",
        "year": 2024
      },
      {
        "name": "Peur De Me Noyer",
        "album": "No Signal",
        "year": 2024
      },
      {
        "name": "Corbeau",
        "album": "No Signal",
        "year": 2024
      },
      {
        "name": "Guess Why",
        "album": "Le Jour Se Lève - EP",
        "year": 2023
      },
      {
        "name": "Pas Clair",
        "album": "Le Jour Se Lève - EP",
        "year": 2023
      },
      {
        "name": "Le Jour Se Lève",
        "album": "Le Jour Se Lève - EP",
        "year": 2023
      }
    ]
  },
  {
    "name": "L'Or du Commun",
    "color": "#378ADD",
    "genre": "Hip-Hop/Rap",
    "trackCount": 10,
    "albums": [
      "Zeppelin",
      "Sapiens",
      "Règlement Freestyle #12 - Single"
    ],
    "tracks": [
      {
        "name": "Apollo (feat. Roméo Elvis)",
        "album": "Zeppelin",
        "year": 2017
      },
      {
        "name": "Homosapiens",
        "album": "Sapiens",
        "year": 2018
      },
      {
        "name": "1000",
        "album": "Zeppelin",
        "year": 2017
      },
      {
        "name": "Mets la gomme",
        "album": "Zeppelin",
        "year": 2017
      },
      {
        "name": "Règlement Freestyle #12",
        "album": "Règlement Freestyle #12 - Single",
        "year": 2018
      },
      {
        "name": "Prison vide",
        "album": "Sapiens",
        "year": 2018
      },
      {
        "name": "Léon",
        "album": "Zeppelin",
        "year": 2017
      },
      {
        "name": "Cordes métalliques",
        "album": "Zeppelin",
        "year": 2017
      },
      {
        "name": "Cendres et pollen",
        "album": "Zeppelin",
        "year": 2017
      },
      {
        "name": "Étrangers",
        "album": "Zeppelin",
        "year": 2017
      }
    ]
  },
  {
    "name": "Django",
    "color": "#639922",
    "genre": "Hip-Hop/Rap",
    "trackCount": 10,
    "albums": [
      "S/O le Flem",
      "Fichu - Single",
      "Oiseaux - Single",
      "Fable - Single",
      "Fury - Single",
      "Cyanure (feat. Freeze Corleone) - Single",
      "Flex - Single",
      "Jason Bourne - Single",
      "Nuages - Single"
    ],
    "tracks": [
      {
        "name": "Fichu",
        "album": "Fichu - Single",
        "year": 2016
      },
      {
        "name": "Oiseaux",
        "album": "Oiseaux - Single",
        "year": 2016
      },
      {
        "name": "Fable",
        "album": "Fable - Single",
        "year": 2017
      },
      {
        "name": "Pyramide (feat. Osirus Jack)",
        "album": "S/O le Flem",
        "year": 2020
      },
      {
        "name": "Fury",
        "album": "Fury - Single",
        "year": 2020
      },
      {
        "name": "S/O le Flem (feat. Roi Heenok & Freeze Corleone)",
        "album": "S/O le Flem",
        "year": 2020
      },
      {
        "name": "Cyanure (feat. Freeze Corleone)",
        "album": "Cyanure (feat. Freeze Corleone) - Single",
        "year": 2019
      },
      {
        "name": "Flex",
        "album": "Flex - Single",
        "year": 2017
      },
      {
        "name": "Jason Bourne",
        "album": "Jason Bourne - Single",
        "year": 2017
      },
      {
        "name": "Nuages",
        "album": "Nuages - Single",
        "year": 2017
      }
    ]
  },
  {
    "name": "Bruno Mars, Anderson .Paak & Silk Sonic",
    "color": "#993556",
    "genre": "R&B/Soul",
    "trackCount": 10,
    "albums": [
      "An Evening with Silk Sonic"
    ],
    "tracks": [
      {
        "name": "Silk Sonic Intro",
        "album": "An Evening with Silk Sonic",
        "year": 2021
      },
      {
        "name": "Leave the Door Open",
        "album": "An Evening with Silk Sonic",
        "year": 2021
      },
      {
        "name": "Fly As Me",
        "album": "An Evening with Silk Sonic",
        "year": 2021
      },
      {
        "name": "After Last Night (with Thundercat & Bootsy Collins)",
        "album": "An Evening with Silk Sonic",
        "year": 2021
      },
      {
        "name": "Smokin Out the Window",
        "album": "An Evening with Silk Sonic",
        "year": 2021
      },
      {
        "name": "Put On a Smile",
        "album": "An Evening with Silk Sonic",
        "year": 2021
      },
      {
        "name": "777",
        "album": "An Evening with Silk Sonic",
        "year": 2021
      },
      {
        "name": "Skate",
        "album": "An Evening with Silk Sonic",
        "year": 2021
      },
      {
        "name": "Love's Train",
        "album": "An Evening with Silk Sonic",
        "year": 2022
      },
      {
        "name": "Blast Off",
        "album": "An Evening with Silk Sonic",
        "year": 2021
      }
    ]
  },
  {
    "name": "Jungle Jack & JeanJass",
    "color": "#0F6E56",
    "genre": "Hip-Hop/Rap",
    "trackCount": 10,
    "albums": [
      "Cognacs & Cigarettes"
    ],
    "tracks": [
      {
        "name": "Dyonysos",
        "album": "Cognacs & Cigarettes",
        "year": 2024
      },
      {
        "name": "Dictons égyptiens",
        "album": "Cognacs & Cigarettes",
        "year": 2025
      },
      {
        "name": "Châteldon",
        "album": "Cognacs & Cigarettes",
        "year": 2025
      },
      {
        "name": "Rougon-Macquart",
        "album": "Cognacs & Cigarettes",
        "year": 2025
      },
      {
        "name": "Miyazaki",
        "album": "Cognacs & Cigarettes",
        "year": 2025
      },
      {
        "name": "Huile de mort (Interlude)",
        "album": "Cognacs & Cigarettes",
        "year": 2025
      },
      {
        "name": "Champagne violet",
        "album": "Cognacs & Cigarettes",
        "year": 2025
      },
      {
        "name": "Göbekli Tepe",
        "album": "Cognacs & Cigarettes",
        "year": 2025
      },
      {
        "name": "Le bruit et l'odeur",
        "album": "Cognacs & Cigarettes",
        "year": 2025
      },
      {
        "name": "Peintures rupestres",
        "album": "Cognacs & Cigarettes",
        "year": 2025
      }
    ]
  },
  {
    "name": "Purple Disco Machine",
    "color": "#BA7517",
    "genre": "Dance",
    "trackCount": 10,
    "albums": [
      "Club Exotica"
    ],
    "tracks": [
      {
        "name": "Dopamine (feat. Eyelar) [John Summit Remix - Mixed]",
        "album": "Club Exotica",
        "year": 2021
      },
      {
        "name": "Opposite of Crazy (feat. Bloom Twins) [The Emperor Machine Remix - Mixed]",
        "album": "Club Exotica",
        "year": 2021
      },
      {
        "name": "Fireworks (feat. Moss Kena & The Knocks) [Club Dub Mix - Mixed]",
        "album": "Club Exotica",
        "year": 2021
      },
      {
        "name": "Don't Stop (Extended Mix - Mixed)",
        "album": "Club Exotica",
        "year": 2021
      },
      {
        "name": "Can't Get Enough (feat. Sahara Beck) [Monte Remix - Mixed]",
        "album": "Club Exotica",
        "year": 2021
      },
      {
        "name": "Playbox (Alex Virgo Remix - Mixed)",
        "album": "Club Exotica",
        "year": 2021
      },
      {
        "name": "Exotica (feat. Mind Enterprises) [Club Mix - Mixed]",
        "album": "Club Exotica",
        "year": 2021
      },
      {
        "name": "Wanna Feel Like A Lover (feat. Ed Mac) [Poolside Remix - Mixed]",
        "album": "Club Exotica",
        "year": 2021
      },
      {
        "name": "Loneliness (feat. Francesca Lombardo) [Art of Tones Remix - Mixed]",
        "album": "Club Exotica",
        "year": 2021
      },
      {
        "name": "Hands to the Sky (feat. Fiorious & House Gospel Choir) [Floorplan Justified Remix - Mixed]",
        "album": "Club Exotica",
        "year": 2021
      }
    ]
  },
  {
    "name": "Sameer Ahmad",
    "color": "#534AB7",
    "genre": "Hip-Hop/Rap",
    "trackCount": 10,
    "albums": [
      "Effendi"
    ],
    "tracks": [
      {
        "name": "Sikaru",
        "album": "Effendi",
        "year": 2021
      },
      {
        "name": "Prodige",
        "album": "Effendi",
        "year": 2021
      },
      {
        "name": "Pazuzu",
        "album": "Effendi",
        "year": 2021
      },
      {
        "name": "Diogène",
        "album": "Effendi",
        "year": 2021
      },
      {
        "name": "Bleu Delta",
        "album": "Effendi",
        "year": 2021
      },
      {
        "name": "Nora Miao",
        "album": "Effendi",
        "year": 2021
      },
      {
        "name": "Vera Cruz",
        "album": "Effendi",
        "year": 2021
      },
      {
        "name": "Effendi",
        "album": "Effendi",
        "year": 2021
      },
      {
        "name": "Siddhartha",
        "album": "Effendi",
        "year": 2021
      },
      {
        "name": "Matriochka",
        "album": "Effendi",
        "year": 2021
      }
    ]
  },
  {
    "name": "ISHA",
    "color": "#993C1D",
    "genre": "Rap",
    "trackCount": 10,
    "albums": [
      "Drôle d'oiseau",
      "Drôle d'oiseau - Single"
    ],
    "tracks": [
      {
        "name": "Drôle d'oiseau",
        "album": "Drôle d'oiseau - Single",
        "year": 2025
      },
      {
        "name": "Capitaine flam",
        "album": "Drôle d'oiseau",
        "year": 2025
      },
      {
        "name": "La vie à Brenda (feat. Dinos)",
        "album": "Drôle d'oiseau",
        "year": 2025
      },
      {
        "name": "Caravane Pt. 2",
        "album": "Drôle d'oiseau",
        "year": 2025
      },
      {
        "name": "Un dernier café à Cergy",
        "album": "Drôle d'oiseau",
        "year": 2025
      },
      {
        "name": "Raz de marée (feat. Green Montana)",
        "album": "Drôle d'oiseau",
        "year": 2025
      },
      {
        "name": "Caesars palace",
        "album": "Drôle d'oiseau",
        "year": 2025
      },
      {
        "name": "F*ck le mainstream",
        "album": "Drôle d'oiseau",
        "year": 2025
      },
      {
        "name": "Benzo blanche",
        "album": "Drôle d'oiseau",
        "year": 2025
      },
      {
        "name": "Drôle d'oiseau",
        "album": "Drôle d'oiseau",
        "year": 2025
      }
    ]
  },
  {
    "name": "ZZCCMXTP",
    "color": "#085041",
    "genre": "Hip-Hop/Rap",
    "trackCount": 10,
    "albums": [
      "ZZCCMXTP"
    ],
    "tracks": [
      {
        "name": "Le milli",
        "album": "ZZCCMXTP",
        "year": 2022
      },
      {
        "name": "Délirium Café (feat. Pandrezz)",
        "album": "ZZCCMXTP",
        "year": 2022
      },
      {
        "name": "Merci (feat. Pandrezz)",
        "album": "ZZCCMXTP",
        "year": 2022
      },
      {
        "name": "Nous sommes les Daft Punk (feat. Pandrezz)",
        "album": "ZZCCMXTP",
        "year": 2022
      },
      {
        "name": "Nous y sommes",
        "album": "ZZCCMXTP",
        "year": 2022
      },
      {
        "name": "Vodka Rhum Contrex (feat. Pandrezz, Gonevane Jones & Warren Opinel)",
        "album": "ZZCCMXTP",
        "year": 2022
      },
      {
        "name": "CDI Freestyle (feat. Pandrezz)",
        "album": "ZZCCMXTP",
        "year": 2022
      },
      {
        "name": "Askip (feat. Pandrezz)",
        "album": "ZZCCMXTP",
        "year": 2022
      },
      {
        "name": "Rudeboy (feat. Pandrezz)",
        "album": "ZZCCMXTP",
        "year": 2022
      },
      {
        "name": "Interlude Clash (feat. Pandrezz)",
        "album": "ZZCCMXTP",
        "year": 2022
      }
    ]
  },
  {
    "name": "Asfar Shamsi",
    "color": "#854F0B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 10,
    "albums": [
      "Le dilemme du hérisson",
      "2006 - Single"
    ],
    "tracks": [
      {
        "name": "boîte à musique",
        "album": "Le dilemme du hérisson",
        "year": 2024
      },
      {
        "name": "qu'est-ce-que je sais faire de mieux ?",
        "album": "Le dilemme du hérisson",
        "year": 2024
      },
      {
        "name": "escrocs",
        "album": "Le dilemme du hérisson",
        "year": 2025
      },
      {
        "name": "le monde est noir (sans personne)",
        "album": "Le dilemme du hérisson",
        "year": 2025
      },
      {
        "name": "nuage bleu",
        "album": "Le dilemme du hérisson",
        "year": 2025
      },
      {
        "name": "les montagnes avec",
        "album": "Le dilemme du hérisson",
        "year": 2024
      },
      {
        "name": "grands ensembles",
        "album": "Le dilemme du hérisson",
        "year": 2025
      },
      {
        "name": "animal",
        "album": "Le dilemme du hérisson",
        "year": 2024
      },
      {
        "name": "un pommier dans mon ventre",
        "album": "Le dilemme du hérisson",
        "year": 2025
      },
      {
        "name": "2006",
        "album": "2006 - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "Shayne",
    "color": "#72243E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 10,
    "albums": [
      "CONTROL",
      "FAKE FRIENDS - Single",
      "5-STAR - Single"
    ],
    "tracks": [
      {
        "name": "CTRL",
        "album": "CONTROL",
        "year": 2024
      },
      {
        "name": "ULTIM8",
        "album": "CONTROL",
        "year": 2024
      },
      {
        "name": "LA MACHINE",
        "album": "CONTROL",
        "year": 2024
      },
      {
        "name": "CHAQUE FOIS",
        "album": "CONTROL",
        "year": 2024
      },
      {
        "name": "MANTEAU NOIR",
        "album": "CONTROL",
        "year": 2024
      },
      {
        "name": "BILLETS MAUVES",
        "album": "CONTROL",
        "year": 2024
      },
      {
        "name": "AILLEURS",
        "album": "CONTROL",
        "year": 2024
      },
      {
        "name": "OUTRO",
        "album": "CONTROL",
        "year": 2024
      },
      {
        "name": "FAKE FRIENDS",
        "album": "FAKE FRIENDS - Single",
        "year": 2025
      },
      {
        "name": "5-STAR",
        "album": "5-STAR - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "Casseurs Flowters",
    "color": "#5DCAA5",
    "genre": "Hip-Hop/Rap",
    "trackCount": 10,
    "albums": [
      "Orelsan et Gringe sont les Casseurs Flowters",
      "Comment c'est loin"
    ],
    "tracks": [
      {
        "name": "Inachevés",
        "album": "Comment c'est loin",
        "year": 2015
      },
      {
        "name": "16h22 - Deux connards dans un abribus",
        "album": "Orelsan et Gringe sont les Casseurs Flowters",
        "year": 2013
      },
      {
        "name": "01h47 - Change de pote",
        "album": "Orelsan et Gringe sont les Casseurs Flowters",
        "year": 2013
      },
      {
        "name": "Si facile",
        "album": "Comment c'est loin",
        "year": 2015
      },
      {
        "name": "18h30 - Bloqué",
        "album": "Orelsan et Gringe sont les Casseurs Flowters",
        "year": 2013
      },
      {
        "name": "Freestyle Radio Phoenix",
        "album": "Comment c'est loin",
        "year": 2015
      },
      {
        "name": "22h31 - Fais les backs",
        "album": "Orelsan et Gringe sont les Casseurs Flowters",
        "year": 2013
      },
      {
        "name": "15h02 - Regarde comme il fait beau (dehors)",
        "album": "Orelsan et Gringe sont les Casseurs Flowters",
        "year": 2013
      },
      {
        "name": "À l’heure où je me couche",
        "album": "Comment c'est loin",
        "year": 2015
      },
      {
        "name": "06h16 - Des histoires à raconter",
        "album": "Orelsan et Gringe sont les Casseurs Flowters",
        "year": 2013
      }
    ]
  },
  {
    "name": "Cherry Pie & BBP",
    "color": "#F0997B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 10,
    "albums": [
      "TITAN",
      "BLIZZARD - Single"
    ],
    "tracks": [
      {
        "name": "BLIZZARD",
        "album": "BLIZZARD - Single",
        "year": 2025
      },
      {
        "name": "L'HISTOIRE DE MOUSSA",
        "album": "TITAN",
        "year": 2025
      },
      {
        "name": "BLIZZARD",
        "album": "TITAN",
        "year": 2025
      },
      {
        "name": "BEAUX-ARTS",
        "album": "TITAN",
        "year": 2025
      },
      {
        "name": "BUNKER",
        "album": "TITAN",
        "year": 2025
      },
      {
        "name": "PALACE",
        "album": "TITAN",
        "year": 2025
      },
      {
        "name": "GÉNÉRATION Z",
        "album": "TITAN",
        "year": 2025
      },
      {
        "name": "L'ÉTRANGER",
        "album": "TITAN",
        "year": 2025
      },
      {
        "name": "SPRITE & GLAÇONS",
        "album": "TITAN",
        "year": 2025
      },
      {
        "name": "TITAN",
        "album": "TITAN",
        "year": 2025
      }
    ]
  },
  {
    "name": "Flynt",
    "color": "#85B7EB",
    "genre": "Hip-Hop/Rap",
    "trackCount": 10,
    "albums": [
      "MONSIEUR JULIEN"
    ],
    "tracks": [
      {
        "name": "ENCORE CHAUD",
        "album": "MONSIEUR JULIEN",
        "year": 2025
      },
      {
        "name": "HUIT CHIFFRES",
        "album": "MONSIEUR JULIEN",
        "year": 2025
      },
      {
        "name": "HISTOIRES VRAIES",
        "album": "MONSIEUR JULIEN",
        "year": 2025
      },
      {
        "name": "V15",
        "album": "MONSIEUR JULIEN",
        "year": 2025
      },
      {
        "name": "MAUVAIS POUR LE BUSINESS",
        "album": "MONSIEUR JULIEN",
        "year": 2023
      },
      {
        "name": "BIZI",
        "album": "MONSIEUR JULIEN",
        "year": 2025
      },
      {
        "name": "MEILLEUR SPOT",
        "album": "MONSIEUR JULIEN",
        "year": 2025
      },
      {
        "name": "C'EST PAS MON STYLE",
        "album": "MONSIEUR JULIEN",
        "year": 2025
      },
      {
        "name": "MONSIEUR JULIEN",
        "album": "MONSIEUR JULIEN",
        "year": 2025
      },
      {
        "name": "MICHEL MONTANA",
        "album": "MONSIEUR JULIEN",
        "year": 2025
      }
    ]
  },
  {
    "name": "Not for Radio",
    "color": "#97C459",
    "genre": "Alternative",
    "trackCount": 10,
    "albums": [
      "Melt"
    ],
    "tracks": [
      {
        "name": "Puddles",
        "album": "Melt",
        "year": 2025
      },
      {
        "name": "My Turn",
        "album": "Melt",
        "year": 2025
      },
      {
        "name": "Moment",
        "album": "Melt",
        "year": 2025
      },
      {
        "name": "Back To You",
        "album": "Melt",
        "year": 2025
      },
      {
        "name": "Swan",
        "album": "Melt",
        "year": 2025
      },
      {
        "name": "Not the Only One",
        "album": "Melt",
        "year": 2025
      },
      {
        "name": "Magnet",
        "album": "Melt",
        "year": 2025
      },
      {
        "name": "Vueltas",
        "album": "Melt",
        "year": 2025
      },
      {
        "name": "Water On Your Nose",
        "album": "Melt",
        "year": 2025
      },
      {
        "name": "Slip",
        "album": "Melt",
        "year": 2025
      }
    ]
  },
  {
    "name": "Feng",
    "color": "#FAC775",
    "genre": "Hip-Hop/Rap",
    "trackCount": 10,
    "albums": [
      "What The Feng"
    ],
    "tracks": [
      {
        "name": "Kids from the west",
        "album": "What The Feng",
        "year": 2025
      },
      {
        "name": "Soul 2 soul",
        "album": "What The Feng",
        "year": 2025
      },
      {
        "name": "Memories",
        "album": "What The Feng",
        "year": 2025
      },
      {
        "name": "YOLO",
        "album": "What The Feng",
        "year": 2025
      },
      {
        "name": "Ayia Napa",
        "album": "What The Feng",
        "year": 2025
      },
      {
        "name": "XY",
        "album": "What The Feng",
        "year": 2025
      },
      {
        "name": "Left for USA",
        "album": "What The Feng",
        "year": 2025
      },
      {
        "name": "Who do u wanna be",
        "album": "What The Feng",
        "year": 2025
      },
      {
        "name": "Mum, im an artist",
        "album": "What The Feng",
        "year": 2025
      },
      {
        "name": "Me vs the world",
        "album": "What The Feng",
        "year": 2025
      }
    ]
  },
  {
    "name": "Eazy-E",
    "color": "#AFA9EC",
    "genre": "Rap",
    "trackCount": 10,
    "albums": [
      "Str8 off Tha Streetz of Muthaphuckin Compton"
    ],
    "tracks": [
      {
        "name": "First Power",
        "album": "Str8 off Tha Streetz of Muthaphuckin Compton",
        "year": 1996
      },
      {
        "name": "Just Tah Let U Know",
        "album": "Str8 off Tha Streetz of Muthaphuckin Compton",
        "year": 1996
      },
      {
        "name": "Sippin on a 40 (feat. Gangsta Dresta & B.G. Knocc Out)",
        "album": "Str8 off Tha Streetz of Muthaphuckin Compton",
        "year": 1996
      },
      {
        "name": "Nutz on Ya Chin",
        "album": "Str8 off Tha Streetz of Muthaphuckin Compton",
        "year": 1996
      },
      {
        "name": "Tha Real (feat. MC Ren)",
        "album": "Str8 off Tha Streetz of Muthaphuckin Compton",
        "year": 1996
      },
      {
        "name": "Hit the Hooker",
        "album": "Str8 off Tha Streetz of Muthaphuckin Compton",
        "year": 1996
      },
      {
        "name": "Creep n Crawl",
        "album": "Str8 off Tha Streetz of Muthaphuckin Compton",
        "year": 1996
      },
      {
        "name": "Wut Would You Do (feat. Dirty Red)",
        "album": "Str8 off Tha Streetz of Muthaphuckin Compton",
        "year": 1996
      },
      {
        "name": "Gangsta Beat 4tha Street (feat. Gangsta Dresta, Menajahtwa & B.G. Knocc Out)",
        "album": "Str8 off Tha Streetz of Muthaphuckin Compton",
        "year": 1996
      },
      {
        "name": "Eternal E (feat. Gangsta Dresta, Menajahtwa & B.G. Knocc Out)",
        "album": "Str8 off Tha Streetz of Muthaphuckin Compton",
        "year": 1996
      }
    ]
  },
  {
    "name": "The Whitest Boy Alive",
    "color": "#F5C4B3",
    "genre": "Alternative",
    "trackCount": 10,
    "albums": [
      "Dreams"
    ],
    "tracks": [
      {
        "name": "Burning",
        "album": "Dreams",
        "year": 2006
      },
      {
        "name": "Golden Cage",
        "album": "Dreams",
        "year": 2006
      },
      {
        "name": "Fireworks",
        "album": "Dreams",
        "year": 2006
      },
      {
        "name": "Done With You",
        "album": "Dreams",
        "year": 2006
      },
      {
        "name": "Don't Give Up",
        "album": "Dreams",
        "year": 2006
      },
      {
        "name": "Above You",
        "album": "Dreams",
        "year": 2006
      },
      {
        "name": "Inflation",
        "album": "Dreams",
        "year": 2006
      },
      {
        "name": "Figures",
        "album": "Dreams",
        "year": 2006
      },
      {
        "name": "Borders",
        "album": "Dreams",
        "year": 2006
      },
      {
        "name": "All Ears",
        "album": "Dreams",
        "year": 2006
      }
    ]
  },
  {
    "name": "Advm",
    "color": "#9FE1CB",
    "genre": "Hip-Hop/Rap",
    "trackCount": 9,
    "albums": [
      ".ÉTEINT LE SOLEIL.",
      ".s'oublier encore."
    ],
    "tracks": [
      {
        "name": ".jeunarogant.",
        "album": ".s'oublier encore.",
        "year": 2023
      },
      {
        "name": ".CHÂTEAU DANS LE CIEL.",
        "album": ".ÉTEINT LE SOLEIL.",
        "year": 2025
      },
      {
        "name": ".COMME LA BÊTE.",
        "album": ".ÉTEINT LE SOLEIL.",
        "year": 2025
      },
      {
        "name": ".BULLE.",
        "album": ".ÉTEINT LE SOLEIL.",
        "year": 2025
      },
      {
        "name": ".INFIRMIÈRE.",
        "album": ".ÉTEINT LE SOLEIL.",
        "year": 2025
      },
      {
        "name": ".ACOUPHÈNES.",
        "album": ".ÉTEINT LE SOLEIL.",
        "year": 2025
      },
      {
        "name": ".JACK WHITE.",
        "album": ".ÉTEINT LE SOLEIL.",
        "year": 2025
      },
      {
        "name": ".TON PARADIS.",
        "album": ".ÉTEINT LE SOLEIL.",
        "year": 2025
      },
      {
        "name": ".MONDE AUTOUR.",
        "album": ".ÉTEINT LE SOLEIL.",
        "year": 2025
      }
    ]
  },
  {
    "name": "Hologram Lo' & Huntrill",
    "color": "#C0DD97",
    "genre": "Hip-Hop/Rap",
    "trackCount": 9,
    "albums": [
      "REPLICA 2"
    ],
    "tracks": [
      {
        "name": "STRIP",
        "album": "REPLICA 2",
        "year": 2024
      },
      {
        "name": "REPLIC44",
        "album": "REPLICA 2",
        "year": 2024
      },
      {
        "name": "Le biff et moi",
        "album": "REPLICA 2",
        "year": 2024
      },
      {
        "name": "SUPPLIER",
        "album": "REPLICA 2",
        "year": 2024
      },
      {
        "name": "LV Dans Le BOLT",
        "album": "REPLICA 2",
        "year": 2024
      },
      {
        "name": "a.k.a MARGI",
        "album": "REPLICA 2",
        "year": 2024
      },
      {
        "name": "TRISTESSE QUI COÛTE CHÈRE",
        "album": "REPLICA 2",
        "year": 2024
      },
      {
        "name": "Rotschild Flow (BONUS TRACK)",
        "album": "REPLICA 2",
        "year": 2024
      },
      {
        "name": "Le jour de la signature (BONUS TRACK)",
        "album": "REPLICA 2",
        "year": 2024
      }
    ]
  },
  {
    "name": "Zola",
    "color": "#F4C0D1",
    "genre": "Hip-Hop/Rap",
    "trackCount": 9,
    "albums": [
      "Cicatrices",
      "Survie (Version deluxe)",
      "Bro Bro - Single",
      "Bernard Tapie - Single",
      "Taxi 5 (Bande originale inspirée du film)"
    ],
    "tracks": [
      {
        "name": "Papers (feat. Ninho)",
        "album": "Cicatrices",
        "year": 2019
      },
      {
        "name": "L1 L2",
        "album": "Cicatrices",
        "year": 2019
      },
      {
        "name": "Astroboy",
        "album": "Cicatrices",
        "year": 2019
      },
      {
        "name": "Bro Bro",
        "album": "Bro Bro - Single",
        "year": 2020
      },
      {
        "name": "Bernard Tapie",
        "album": "Bernard Tapie - Single",
        "year": 2018
      },
      {
        "name": "Papillon",
        "album": "Survie (Version deluxe)",
        "year": 2020
      },
      {
        "name": "Extasy",
        "album": "Cicatrices",
        "year": 2018
      },
      {
        "name": "California Girl",
        "album": "Taxi 5 (Bande originale inspirée du film)",
        "year": 2018
      },
      {
        "name": "Bad Bi",
        "album": "Survie (Version deluxe)",
        "year": 2020
      }
    ]
  },
  {
    "name": "Zeu",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 9,
    "albums": [
      "WATERGATE",
      "Grünt Tunes"
    ],
    "tracks": [
      {
        "name": "Piou piou (feat. Ormaz & PLK)",
        "album": "Grünt Tunes",
        "year": 2018
      },
      {
        "name": "INTRO",
        "album": "WATERGATE",
        "year": 2023
      },
      {
        "name": "HAALAND",
        "album": "WATERGATE",
        "year": 2022
      },
      {
        "name": "ONYX",
        "album": "WATERGATE",
        "year": 2023
      },
      {
        "name": "JDAY",
        "album": "WATERGATE",
        "year": 2023
      },
      {
        "name": "CYPRESS HILL",
        "album": "WATERGATE",
        "year": 2023
      },
      {
        "name": "J’DEVRAIS",
        "album": "WATERGATE",
        "year": 2023
      },
      {
        "name": "BVB",
        "album": "WATERGATE",
        "year": 2023
      },
      {
        "name": "RARE",
        "album": "WATERGATE",
        "year": 2023
      }
    ]
  },
  {
    "name": "La Fève & Kosei",
    "color": "#1A5FB4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 9,
    "albums": [
      "KOLAF"
    ],
    "tracks": [
      {
        "name": "LA BRUME",
        "album": "KOLAF",
        "year": 2020
      },
      {
        "name": "LA FOUDRE",
        "album": "KOLAF",
        "year": 2020
      },
      {
        "name": "JEUNE INTERLUDE",
        "album": "KOLAF",
        "year": 2020
      },
      {
        "name": "VILAIN (feat. Khali)",
        "album": "KOLAF",
        "year": 2020
      },
      {
        "name": "ALCHIMIE",
        "album": "KOLAF",
        "year": 2020
      },
      {
        "name": "SNITCH",
        "album": "KOLAF",
        "year": 2020
      },
      {
        "name": "DIEZ",
        "album": "KOLAF",
        "year": 2020
      },
      {
        "name": "BELLE SOMME",
        "album": "KOLAF",
        "year": 2020
      },
      {
        "name": "DSMJ",
        "album": "KOLAF",
        "year": 2020
      }
    ]
  },
  {
    "name": "Doc OVG & Richie Beats",
    "color": "#2D8A4E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 9,
    "albums": [
      "Para Bellum 1"
    ],
    "tracks": [
      {
        "name": "Vendre",
        "album": "Para Bellum 1",
        "year": 2024
      },
      {
        "name": "40G",
        "album": "Para Bellum 1",
        "year": 2025
      },
      {
        "name": "Brique",
        "album": "Para Bellum 1",
        "year": 2025
      },
      {
        "name": "Tout droit",
        "album": "Para Bellum 1",
        "year": 2025
      },
      {
        "name": "Para Bellum",
        "album": "Para Bellum 1",
        "year": 2025
      },
      {
        "name": "Ekip type",
        "album": "Para Bellum 1",
        "year": 2024
      },
      {
        "name": "Fuck",
        "album": "Para Bellum 1",
        "year": 2025
      },
      {
        "name": "Au dessus",
        "album": "Para Bellum 1",
        "year": 2025
      },
      {
        "name": "Actif",
        "album": "Para Bellum 1",
        "year": 2025
      }
    ]
  },
  {
    "name": "Kay The Prodigy & Mezzo Millo",
    "color": "#C4622D",
    "genre": "Hip-Hop/Rap",
    "trackCount": 9,
    "albums": [
      "EASTERN WIND 2 : BLOOM EDITION"
    ],
    "tracks": [
      {
        "name": "Lil Bi",
        "album": "EASTERN WIND 2 : BLOOM EDITION",
        "year": 2023
      },
      {
        "name": "Vent de Nuit",
        "album": "EASTERN WIND 2 : BLOOM EDITION",
        "year": 2023
      },
      {
        "name": "Pretty Face",
        "album": "EASTERN WIND 2 : BLOOM EDITION",
        "year": 2024
      },
      {
        "name": "Mon Amour",
        "album": "EASTERN WIND 2 : BLOOM EDITION",
        "year": 2023
      },
      {
        "name": "Race",
        "album": "EASTERN WIND 2 : BLOOM EDITION",
        "year": 2024
      },
      {
        "name": "Dumb",
        "album": "EASTERN WIND 2 : BLOOM EDITION",
        "year": 2023
      },
      {
        "name": "Maladie (feat. Sirlo)",
        "album": "EASTERN WIND 2 : BLOOM EDITION",
        "year": 2024
      },
      {
        "name": "Fantomas",
        "album": "EASTERN WIND 2 : BLOOM EDITION",
        "year": 2023
      },
      {
        "name": "Damoclès",
        "album": "EASTERN WIND 2 : BLOOM EDITION",
        "year": 2024
      }
    ]
  },
  {
    "name": "baby hayabusa & neophron",
    "color": "#7B4FA6",
    "genre": "Alternative",
    "trackCount": 9,
    "albums": [
      "Faded Flower Story (Deluxe) - EP",
      "Deadly Poison Sting - EP"
    ],
    "tracks": [
      {
        "name": "Sparadrap",
        "album": "Faded Flower Story (Deluxe) - EP",
        "year": 2024
      },
      {
        "name": "Volcano Love",
        "album": "Faded Flower Story (Deluxe) - EP",
        "year": 2024
      },
      {
        "name": "Grimoire",
        "album": "Faded Flower Story (Deluxe) - EP",
        "year": 2024
      },
      {
        "name": "À Jamais",
        "album": "Faded Flower Story (Deluxe) - EP",
        "year": 2024
      },
      {
        "name": "Vernita Green",
        "album": "Faded Flower Story (Deluxe) - EP",
        "year": 2024
      },
      {
        "name": "La Mèche",
        "album": "Faded Flower Story (Deluxe) - EP",
        "year": 2024
      },
      {
        "name": "Scars",
        "album": "Deadly Poison Sting - EP",
        "year": 2023
      },
      {
        "name": "Bad",
        "album": "Deadly Poison Sting - EP",
        "year": 2023
      },
      {
        "name": "Ivy",
        "album": "Deadly Poison Sting - EP",
        "year": 2023
      }
    ]
  },
  {
    "name": "Eden Dillinger",
    "color": "#E8593C",
    "genre": "Hip-Hop/Rap",
    "trackCount": 9,
    "albums": [
      "n o t e s v o c a l e s",
      "Rouge Gorge - Single",
      "Killcam (feat. Django & Lord Esperanza) - Single",
      "Olaf"
    ],
    "tracks": [
      {
        "name": "Rouge Gorge",
        "album": "Rouge Gorge - Single",
        "year": 2016
      },
      {
        "name": "Killcam (feat. Django & Lord Esperanza)",
        "album": "Killcam (feat. Django & Lord Esperanza) - Single",
        "year": 2016
      },
      {
        "name": "Thé Vert (feat. Tengo John)",
        "album": "Olaf",
        "year": 2017
      },
      {
        "name": "c o n s e i l s",
        "album": "n o t e s v o c a l e s",
        "year": 2021
      },
      {
        "name": "l o i n d e s y e u x",
        "album": "n o t e s v o c a l e s",
        "year": 2021
      },
      {
        "name": "p r i s o n",
        "album": "n o t e s v o c a l e s",
        "year": 2021
      },
      {
        "name": "t r o u d e m é m o i r e",
        "album": "n o t e s v o c a l e s",
        "year": 2021
      },
      {
        "name": "e x c u s e s",
        "album": "n o t e s v o c a l e s",
        "year": 2021
      },
      {
        "name": "m a u d i t",
        "album": "n o t e s v o c a l e s",
        "year": 2021
      }
    ]
  },
  {
    "name": "2L",
    "color": "#3B8BD4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 9,
    "albums": [
      "Fugue"
    ],
    "tracks": [
      {
        "name": "Styx",
        "album": "Fugue",
        "year": 2025
      },
      {
        "name": "Saigne",
        "album": "Fugue",
        "year": 2025
      },
      {
        "name": "Course",
        "album": "Fugue",
        "year": 2025
      },
      {
        "name": "No(s) Déception[s]",
        "album": "Fugue",
        "year": 2025
      },
      {
        "name": "Toutes les saisons",
        "album": "Fugue",
        "year": 2025
      },
      {
        "name": "100 Repères",
        "album": "Fugue",
        "year": 2025
      },
      {
        "name": "La mort",
        "album": "Fugue",
        "year": 2025
      },
      {
        "name": "Contrôle",
        "album": "Fugue",
        "year": 2025
      },
      {
        "name": "Vacances",
        "album": "Fugue",
        "year": 2025
      }
    ]
  },
  {
    "name": "Jeune LC",
    "color": "#4A9E5C",
    "genre": "Hip-Hop/Rap",
    "trackCount": 9,
    "albums": [
      "Coton Blanc Argent Sale"
    ],
    "tracks": [
      {
        "name": "Nouveau jeune",
        "album": "Coton Blanc Argent Sale",
        "year": 2025
      },
      {
        "name": "G Original",
        "album": "Coton Blanc Argent Sale",
        "year": 2025
      },
      {
        "name": "Coton blanc",
        "album": "Coton Blanc Argent Sale",
        "year": 2025
      },
      {
        "name": "Déscolarisé",
        "album": "Coton Blanc Argent Sale",
        "year": 2024
      },
      {
        "name": "Bricks",
        "album": "Coton Blanc Argent Sale",
        "year": 2025
      },
      {
        "name": "Kadhafi (feat. Ichon)",
        "album": "Coton Blanc Argent Sale",
        "year": 2025
      },
      {
        "name": "Dans le 10",
        "album": "Coton Blanc Argent Sale",
        "year": 2025
      },
      {
        "name": "Océan",
        "album": "Coton Blanc Argent Sale",
        "year": 2025
      },
      {
        "name": "Autour de minuit",
        "album": "Coton Blanc Argent Sale",
        "year": 2025
      }
    ]
  },
  {
    "name": "Yvnnis & lilchick",
    "color": "#9B4DCA",
    "genre": "Hip-Hop/Rap",
    "trackCount": 9,
    "albums": [
      "PARHELIA"
    ],
    "tracks": [
      {
        "name": "LE PASSÉ",
        "album": "PARHELIA",
        "year": 2022
      },
      {
        "name": "GOYARD",
        "album": "PARHELIA",
        "year": 2022
      },
      {
        "name": "KATAS",
        "album": "PARHELIA",
        "year": 2022
      },
      {
        "name": "+1",
        "album": "PARHELIA",
        "year": 2022
      },
      {
        "name": "CENDRES INTERLUDE",
        "album": "PARHELIA",
        "year": 2022
      },
      {
        "name": "J'AIME!",
        "album": "PARHELIA",
        "year": 2022
      },
      {
        "name": "94 CONNEXION (feat. NeS)",
        "album": "PARHELIA",
        "year": 2022
      },
      {
        "name": "BEE GEES",
        "album": "PARHELIA",
        "year": 2022
      },
      {
        "name": "MEKTOUB OUTRO",
        "album": "PARHELIA",
        "year": 2022
      }
    ]
  },
  {
    "name": "JeanJass & Keroué",
    "color": "#D4A017",
    "genre": "Hip-Hop/Rap",
    "trackCount": 8,
    "albums": [
      "SCOPE - EP"
    ],
    "tracks": [
      {
        "name": "Damn",
        "album": "SCOPE - EP",
        "year": 2024
      },
      {
        "name": "La clim",
        "album": "SCOPE - EP",
        "year": 2024
      },
      {
        "name": "Comme vous",
        "album": "SCOPE - EP",
        "year": 2024
      },
      {
        "name": "Skit rangefinder",
        "album": "SCOPE - EP",
        "year": 2024
      },
      {
        "name": "Deathnote",
        "album": "SCOPE - EP",
        "year": 2024
      },
      {
        "name": "Okocha",
        "album": "SCOPE - EP",
        "year": 2024
      },
      {
        "name": "Skit short game",
        "album": "SCOPE - EP",
        "year": 2024
      },
      {
        "name": "L'averse",
        "album": "SCOPE - EP",
        "year": 2024
      }
    ]
  },
  {
    "name": "Zeu, Epektase, Pandrezz & j'san",
    "color": "#FF6B6B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 8,
    "albums": [
      "DOPPELGÄNGER"
    ],
    "tracks": [
      {
        "name": "BIONIC",
        "album": "DOPPELGÄNGER",
        "year": 2024
      },
      {
        "name": "RASPADORI",
        "album": "DOPPELGÄNGER",
        "year": 2024
      },
      {
        "name": "BEHERIT",
        "album": "DOPPELGÄNGER",
        "year": 2024
      },
      {
        "name": "BIRKIN RUNTZ",
        "album": "DOPPELGÄNGER",
        "year": 2024
      },
      {
        "name": "DOPPELGÄNGER",
        "album": "DOPPELGÄNGER",
        "year": 2024
      },
      {
        "name": "CRACK AUDIBLE",
        "album": "DOPPELGÄNGER",
        "year": 2024
      },
      {
        "name": "ROI DES ROIS",
        "album": "DOPPELGÄNGER",
        "year": 2024
      },
      {
        "name": "DEAGLE POURPRE",
        "album": "DOPPELGÄNGER",
        "year": 2024
      }
    ]
  },
  {
    "name": "okis",
    "color": "#4ECDC4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 8,
    "albums": [
      "OK"
    ],
    "tracks": [
      {
        "name": "PAS D'EFFORT",
        "album": "OK",
        "year": 2022
      },
      {
        "name": "TOUR DE MAGIE",
        "album": "OK",
        "year": 2022
      },
      {
        "name": "PELO 2 VILLE",
        "album": "OK",
        "year": 2022
      },
      {
        "name": "BEAUX RÊVES",
        "album": "OK",
        "year": 2022
      },
      {
        "name": "TUTU",
        "album": "OK",
        "year": 2022
      },
      {
        "name": "MAN ON THE MOON",
        "album": "OK",
        "year": 2022
      },
      {
        "name": "VERTIGO",
        "album": "OK",
        "year": 2022
      },
      {
        "name": "ARRIÈRE-PLAN",
        "album": "OK",
        "year": 2022
      }
    ]
  },
  {
    "name": "DJ Premier & Roc Marciano",
    "color": "#45B7D1",
    "genre": "Hip-Hop",
    "trackCount": 8,
    "albums": [
      "The Coldest Profession"
    ],
    "tracks": [
      {
        "name": "Arrival",
        "album": "The Coldest Profession",
        "year": 2025
      },
      {
        "name": "Armani Section",
        "album": "The Coldest Profession",
        "year": 2025
      },
      {
        "name": "Prayer Hands",
        "album": "The Coldest Profession",
        "year": 2025
      },
      {
        "name": "Good To Go",
        "album": "The Coldest Profession",
        "year": 2025
      },
      {
        "name": "Glory Hole",
        "album": "The Coldest Profession",
        "year": 2025
      },
      {
        "name": "RocMarkable",
        "album": "The Coldest Profession",
        "year": 2025
      },
      {
        "name": "Travel Fox",
        "album": "The Coldest Profession",
        "year": 2025
      },
      {
        "name": "Execution Style",
        "album": "The Coldest Profession",
        "year": 2025
      }
    ]
  },
  {
    "name": "Georgio",
    "color": "#96CEB4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 8,
    "albums": [
      "Héra",
      "Sacré",
      "Ciel enflammé - Sacré",
      "Ἥρα (Héra réédition)",
      "Bleu noir"
    ],
    "tracks": [
      {
        "name": "Brûle",
        "album": "Héra",
        "year": 2016
      },
      {
        "name": "Les anges dans des robes rouges",
        "album": "Sacré",
        "year": 2020
      },
      {
        "name": "Full Moon (feat. S.Pri Noir)",
        "album": "Ciel enflammé - Sacré",
        "year": 2021
      },
      {
        "name": "Je te dirai tout",
        "album": "Sacré",
        "year": 2021
      },
      {
        "name": "Liberté invisible",
        "album": "Ἥρα (Héra réédition)",
        "year": 2017
      },
      {
        "name": "Svetlana et Maïakovski",
        "album": "Héra",
        "year": 2016
      },
      {
        "name": "Bleu noir",
        "album": "Bleu noir",
        "year": 2015
      },
      {
        "name": "L'espoir meurt en dernier",
        "album": "Héra",
        "year": 2016
      }
    ]
  },
  {
    "name": "Sopico",
    "color": "#FFEAA7",
    "genre": "Hip-Hop/Rap",
    "trackCount": 8,
    "albums": [
      "Mojo",
      "YË",
      "Ëpisode 1 - Single",
      "Le hasard ou la chance (Colors Version) - Single",
      "3.33% - Single"
    ],
    "tracks": [
      {
        "name": "Étrange enfant",
        "album": "Ëpisode 1 - Single",
        "year": 2017
      },
      {
        "name": "Bonne étoile",
        "album": "YË",
        "year": 2018
      },
      {
        "name": "Mojo",
        "album": "Mojo",
        "year": 2016
      },
      {
        "name": "Arbre de vie",
        "album": "YË",
        "year": 2018
      },
      {
        "name": "Ciel bleu",
        "album": "Mojo",
        "year": 2016
      },
      {
        "name": "Robotique",
        "album": "Mojo",
        "year": 2016
      },
      {
        "name": "Le hasard ou la chance (Colors Version)",
        "album": "Le hasard ou la chance (Colors Version) - Single",
        "year": 2017
      },
      {
        "name": "3.33%",
        "album": "3.33% - Single",
        "year": 2017
      }
    ]
  },
  {
    "name": "James Loup",
    "color": "#7F77DD",
    "genre": "Hip-Hop/Rap",
    "trackCount": 8,
    "albums": [
      "50% POUR MAMAN"
    ],
    "tracks": [
      {
        "name": "27 PIGES",
        "album": "50% POUR MAMAN",
        "year": 2025
      },
      {
        "name": "50% POUR MAMAN",
        "album": "50% POUR MAMAN",
        "year": 2025
      },
      {
        "name": "TQT PAS J'SUIS DANS L'UBER",
        "album": "50% POUR MAMAN",
        "year": 2025
      },
      {
        "name": "J'VOULAIS ÊTRE GRAND",
        "album": "50% POUR MAMAN",
        "year": 2025
      },
      {
        "name": "EN GROS C TOUT",
        "album": "50% POUR MAMAN",
        "year": 2025
      },
      {
        "name": "MAILLOT DE FOOT À MARRAKECH",
        "album": "50% POUR MAMAN",
        "year": 2025
      },
      {
        "name": "J'IMAGINE",
        "album": "50% POUR MAMAN",
        "year": 2025
      },
      {
        "name": "PRINCESSE ATOMIQUE (Bonus Track)",
        "album": "50% POUR MAMAN",
        "year": 2025
      }
    ]
  },
  {
    "name": "Saïf",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 8,
    "albums": [
      "L'hiver"
    ],
    "tracks": [
      {
        "name": "Marche ou crève",
        "album": "L'hiver",
        "year": 2025
      },
      {
        "name": "Medusa",
        "album": "L'hiver",
        "year": 2025
      },
      {
        "name": "L'hiver",
        "album": "L'hiver",
        "year": 2025
      },
      {
        "name": "Le contrat",
        "album": "L'hiver",
        "year": 2025
      },
      {
        "name": "Le malheur est matinal",
        "album": "L'hiver",
        "year": 2025
      },
      {
        "name": "Malade",
        "album": "L'hiver",
        "year": 2025
      },
      {
        "name": "Les yeux ouverts",
        "album": "L'hiver",
        "year": 2025
      },
      {
        "name": "Pas rose",
        "album": "L'hiver",
        "year": 2025
      }
    ]
  },
  {
    "name": "Dominic Fike",
    "color": "#1D9E75",
    "genre": "Alternative",
    "trackCount": 8,
    "albums": [
      "Don't Forget About Me, Demos"
    ],
    "tracks": [
      {
        "name": "3 Nights",
        "album": "Don't Forget About Me, Demos",
        "year": 2018
      },
      {
        "name": "She Wants My Money",
        "album": "Don't Forget About Me, Demos",
        "year": 2018
      },
      {
        "name": "Babydoll",
        "album": "Don't Forget About Me, Demos",
        "year": 2018
      },
      {
        "name": "Westcoast Collective",
        "album": "Don't Forget About Me, Demos",
        "year": 2018
      },
      {
        "name": "Socks",
        "album": "Don't Forget About Me, Demos",
        "year": 2018
      },
      {
        "name": "King of Everything",
        "album": "Don't Forget About Me, Demos",
        "year": 2018
      },
      {
        "name": "Falling Asleep",
        "album": "Don't Forget About Me, Demos",
        "year": 2018
      },
      {
        "name": "Batshit",
        "album": "Don't Forget About Me, Demos",
        "year": 2018
      }
    ]
  },
  {
    "name": "Dosseh",
    "color": "#EF9F27",
    "genre": "Hip-Hop/Rap",
    "trackCount": 7,
    "albums": [
      "Yuri",
      "Vidalo$$A",
      "Trop tôt pour mourir",
      "Victor Newman - Single"
    ],
    "tracks": [
      {
        "name": "Habitué",
        "album": "Vidalo$$A",
        "year": 2018
      },
      {
        "name": "Infréquentables (feat. Booba)",
        "album": "Yuri",
        "year": 2016
      },
      {
        "name": "À chaque jour...",
        "album": "Vidalo$$A",
        "year": 2018
      },
      {
        "name": "Putain d'époque (feat. Nekfeu)",
        "album": "Yuri",
        "year": 2016
      },
      {
        "name": "Djamel",
        "album": "Trop tôt pour mourir",
        "year": 2022
      },
      {
        "name": "Infréquentables (feat. Booba)",
        "album": "Yuri",
        "year": 2016
      },
      {
        "name": "Victor Newman",
        "album": "Victor Newman - Single",
        "year": 2026
      }
    ]
  },
  {
    "name": "Roméo Elvis & Le Motel",
    "color": "#D4537E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 7,
    "albums": [
      "Morale 2",
      "Morale 2luxe"
    ],
    "tracks": [
      {
        "name": "Pogo",
        "album": "Morale 2luxe",
        "year": 2018
      },
      {
        "name": "Sabena",
        "album": "Morale 2",
        "year": 2017
      },
      {
        "name": "J'ai vu (feat. Angèle)",
        "album": "Morale 2",
        "year": 2017
      },
      {
        "name": "Nappeux (feat. Grems)",
        "album": "Morale 2luxe",
        "year": 2017
      },
      {
        "name": "Bébé aime la drogue",
        "album": "Morale 2",
        "year": 2017
      },
      {
        "name": "Ma tête",
        "album": "Morale 2",
        "year": 2017
      },
      {
        "name": "Lenita",
        "album": "Morale 2",
        "year": 2017
      }
    ]
  },
  {
    "name": "RASKA",
    "color": "#378ADD",
    "genre": "Hip-Hop/Rap",
    "trackCount": 7,
    "albums": [
      "BIG SANTA TAPE (feat. rad cartier, Bekar, Sto, Slimka, Beeby & thaHomey)"
    ],
    "tracks": [
      {
        "name": "BigSantaTape Story",
        "album": "BIG SANTA TAPE (feat. rad cartier, Bekar, Sto, Slimka, Beeby & thaHomey)",
        "year": 2021
      },
      {
        "name": "Canada (feat. Bekar)",
        "album": "BIG SANTA TAPE (feat. rad cartier, Bekar, Sto, Slimka, Beeby & thaHomey)",
        "year": 2021
      },
      {
        "name": "Magie (feat. Sto)",
        "album": "BIG SANTA TAPE (feat. rad cartier, Bekar, Sto, Slimka, Beeby & thaHomey)",
        "year": 2021
      },
      {
        "name": "Uberx (feat. thaHomey)",
        "album": "BIG SANTA TAPE (feat. rad cartier, Bekar, Sto, Slimka, Beeby & thaHomey)",
        "year": 2021
      },
      {
        "name": "Yeux Noirs (feat. Beeby)",
        "album": "BIG SANTA TAPE (feat. rad cartier, Bekar, Sto, Slimka, Beeby & thaHomey)",
        "year": 2021
      },
      {
        "name": "Venturi.wav (feat. rad cartier)",
        "album": "BIG SANTA TAPE (feat. rad cartier, Bekar, Sto, Slimka, Beeby & thaHomey)",
        "year": 2021
      },
      {
        "name": "Seven (feat. Slimka)",
        "album": "BIG SANTA TAPE (feat. rad cartier, Bekar, Sto, Slimka, Beeby & thaHomey)",
        "year": 2021
      }
    ]
  },
  {
    "name": "Ry's",
    "color": "#639922",
    "genre": "Hip-Hop/Rap",
    "trackCount": 7,
    "albums": [
      "LUCHA LIBRE",
      "PROVISION D'URGENCE (feat. Jacques De Sample) - Single"
    ],
    "tracks": [
      {
        "name": "MYSTERIO AVEC LES CHAINES (feat. ViceVersa)",
        "album": "LUCHA LIBRE",
        "year": 2025
      },
      {
        "name": "HOME RUN (feat. Jacques De Sample)",
        "album": "LUCHA LIBRE",
        "year": 2025
      },
      {
        "name": "RUE DU DEPART (feat. Jacques De Sample)",
        "album": "LUCHA LIBRE",
        "year": 2025
      },
      {
        "name": "INTERLUTTE (feat. Jacques De Sample)",
        "album": "LUCHA LIBRE",
        "year": 2025
      },
      {
        "name": "FULL LETHAL RACKET (feat. Jacques De Sample)",
        "album": "PROVISION D'URGENCE (feat. Jacques De Sample) - Single",
        "year": 2025
      },
      {
        "name": "LA GUERRE AVEC DES RIMES (feat. Jacques De Sample)",
        "album": "PROVISION D'URGENCE (feat. Jacques De Sample) - Single",
        "year": 2025
      },
      {
        "name": "PONZI (feat. Jacques De Sample)",
        "album": "PROVISION D'URGENCE (feat. Jacques De Sample) - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "Kerchak",
    "color": "#993556",
    "genre": "Hip-Hop/Rap",
    "trackCount": 7,
    "albums": [
      "Beuh R - Single",
      "Tarzan - Single",
      "Sabor - Single",
      "Jane - Single",
      "Kerchak - Single",
      "Tantor - Single",
      "Blue - Single"
    ],
    "tracks": [
      {
        "name": "Beuh R",
        "album": "Beuh R - Single",
        "year": 2022
      },
      {
        "name": "Tarzan",
        "album": "Tarzan - Single",
        "year": 2022
      },
      {
        "name": "Sabor",
        "album": "Sabor - Single",
        "year": 2022
      },
      {
        "name": "Jane",
        "album": "Jane - Single",
        "year": 2022
      },
      {
        "name": "Kerchak",
        "album": "Kerchak - Single",
        "year": 2022
      },
      {
        "name": "Tantor",
        "album": "Tantor - Single",
        "year": 2022
      },
      {
        "name": "Blue",
        "album": "Blue - Single",
        "year": 2022
      }
    ]
  },
  {
    "name": "Mezzo Millo & Kay The Prodigy",
    "color": "#0F6E56",
    "genre": "Hip-Hop/Rap",
    "trackCount": 7,
    "albums": [
      "Eastern Wind Deluxe"
    ],
    "tracks": [
      {
        "name": "Crime Parfait",
        "album": "Eastern Wind Deluxe",
        "year": 2022
      },
      {
        "name": "Hornomes",
        "album": "Eastern Wind Deluxe",
        "year": 2022
      },
      {
        "name": "Starlight (Interlude)",
        "album": "Eastern Wind Deluxe",
        "year": 2022
      },
      {
        "name": "Goût du Miel",
        "album": "Eastern Wind Deluxe",
        "year": 2022
      },
      {
        "name": "Red22",
        "album": "Eastern Wind Deluxe",
        "year": 2022
      },
      {
        "name": "Mega",
        "album": "Eastern Wind Deluxe",
        "year": 2023
      },
      {
        "name": "Abandonne Tù",
        "album": "Eastern Wind Deluxe",
        "year": 2023
      }
    ]
  },
  {
    "name": "Whaleed Smith",
    "color": "#BA7517",
    "genre": "Hip-Hop/Rap",
    "trackCount": 7,
    "albums": [
      "SAHARIAN TAPE"
    ],
    "tracks": [
      {
        "name": "INTRO",
        "album": "SAHARIAN TAPE",
        "year": 2024
      },
      {
        "name": "MAFIA ITALIENNE",
        "album": "SAHARIAN TAPE",
        "year": 2024
      },
      {
        "name": "NOIR3ARBI FREESTYLE",
        "album": "SAHARIAN TAPE",
        "year": 2024
      },
      {
        "name": "SANG + CANINES",
        "album": "SAHARIAN TAPE",
        "year": 2024
      },
      {
        "name": "SWEAT BLANC",
        "album": "SAHARIAN TAPE",
        "year": 2024
      },
      {
        "name": "DURAG ORANGE & LUNETTES NOIRES",
        "album": "SAHARIAN TAPE",
        "year": 2024
      },
      {
        "name": "PSYCHO REALM",
        "album": "SAHARIAN TAPE",
        "year": 2024
      }
    ]
  },
  {
    "name": "Lowtso",
    "color": "#534AB7",
    "genre": "Hip-Hop/Rap",
    "trackCount": 7,
    "albums": [
      "BZZZZZZ - EP",
      "MALABARZZZ - Single"
    ],
    "tracks": [
      {
        "name": "MALABARZZZ",
        "album": "MALABARZZZ - Single",
        "year": 2023
      },
      {
        "name": "EXPÉRIENCE",
        "album": "BZZZZZZ - EP",
        "year": 2023
      },
      {
        "name": "MALABARZZZ",
        "album": "BZZZZZZ - EP",
        "year": 2023
      },
      {
        "name": "ÇA GLISSE (feat. 3uzz)",
        "album": "BZZZZZZ - EP",
        "year": 2023
      },
      {
        "name": "AFTER B4STON (feat. LEON, Typex & Vadez)",
        "album": "BZZZZZZ - EP",
        "year": 2023
      },
      {
        "name": "TABLEAU",
        "album": "BZZZZZZ - EP",
        "year": 2023
      },
      {
        "name": "OUTRO BZZZZZZ",
        "album": "BZZZZZZ - EP",
        "year": 2023
      }
    ]
  },
  {
    "name": "Keroué",
    "color": "#993C1D",
    "genre": "Hip-Hop/Rap",
    "trackCount": 7,
    "albums": [
      "CANDELA"
    ],
    "tracks": [
      {
        "name": "Lumen",
        "album": "CANDELA",
        "year": 2023
      },
      {
        "name": "Cette shit",
        "album": "CANDELA",
        "year": 2023
      },
      {
        "name": "OSEF (feat. NeS)",
        "album": "CANDELA",
        "year": 2023
      },
      {
        "name": "Pablo",
        "album": "CANDELA",
        "year": 2023
      },
      {
        "name": "J'y vais tout seul",
        "album": "CANDELA",
        "year": 2023
      },
      {
        "name": "Rien de grave",
        "album": "CANDELA",
        "year": 2023
      },
      {
        "name": "Gymnopédies",
        "album": "CANDELA",
        "year": 2023
      }
    ]
  },
  {
    "name": "noni",
    "color": "#085041",
    "genre": "Hip-Hop/Rap",
    "trackCount": 7,
    "albums": [
      "Atlas - Single",
      "pillow case - Single",
      "same year - Single",
      "night night - Single",
      "Tele - Single",
      "Thursday - Single",
      "glasses (feat. sepia tones) - Single"
    ],
    "tracks": [
      {
        "name": "Atlas",
        "album": "Atlas - Single",
        "year": 2025
      },
      {
        "name": "pillow case",
        "album": "pillow case - Single",
        "year": 2026
      },
      {
        "name": "same year",
        "album": "same year - Single",
        "year": 2025
      },
      {
        "name": "night night",
        "album": "night night - Single",
        "year": 2025
      },
      {
        "name": "Tele",
        "album": "Tele - Single",
        "year": 2025
      },
      {
        "name": "Thursday",
        "album": "Thursday - Single",
        "year": 2025
      },
      {
        "name": "glasses (feat. sepia tones)",
        "album": "glasses (feat. sepia tones) - Single",
        "year": 2026
      }
    ]
  },
  {
    "name": "Davodka",
    "color": "#854F0B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 6,
    "albums": [
      "Mise au poing",
      "À juste titre",
      "Accusé de réflexion"
    ],
    "tracks": [
      {
        "name": "Le vers 2 trop",
        "album": "Mise au poing",
        "year": 2015
      },
      {
        "name": "Matrice",
        "album": "À juste titre",
        "year": 2019
      },
      {
        "name": "Flemme olympique",
        "album": "Accusé de réflexion",
        "year": 2017
      },
      {
        "name": "Accusé de réflexion chapitre 1",
        "album": "Accusé de réflexion",
        "year": 2017
      },
      {
        "name": "Mise a flow (feat. Cenza)",
        "album": "Mise au poing",
        "year": 2015
      },
      {
        "name": "Matrice",
        "album": "À juste titre",
        "year": 2019
      }
    ]
  },
  {
    "name": "Rihanna",
    "color": "#72243E",
    "genre": "Pop",
    "trackCount": 6,
    "albums": [
      "Good Girl Gone Bad: Reloaded",
      "Unapologetic (Deluxe Version)",
      "ANTI (Deluxe)",
      "Rated R",
      "Loud (Deluxe)"
    ],
    "tracks": [
      {
        "name": "Diamonds",
        "album": "Unapologetic (Deluxe Version)",
        "year": 2012
      },
      {
        "name": "Work (feat. Drake)",
        "album": "ANTI (Deluxe)",
        "year": 2016
      },
      {
        "name": "Don't Stop the Music",
        "album": "Good Girl Gone Bad: Reloaded",
        "year": 2007
      },
      {
        "name": "Umbrella (feat. JAY Z)",
        "album": "Good Girl Gone Bad: Reloaded",
        "year": 2007
      },
      {
        "name": "Rude Boy",
        "album": "Rated R",
        "year": 2009
      },
      {
        "name": "Only Girl (In the World)",
        "album": "Loud (Deluxe)",
        "year": 2010
      }
    ]
  },
  {
    "name": "Rendez-Vous ASMR",
    "color": "#5DCAA5",
    "genre": "Spoken Word",
    "trackCount": 6,
    "albums": [
      "ASMR Nouveau Micro - EP"
    ],
    "tracks": [
      {
        "name": "Introduction Chuchotée",
        "album": "ASMR Nouveau Micro - EP",
        "year": 2024
      },
      {
        "name": "Moumoute, Tapping Pomelo",
        "album": "ASMR Nouveau Micro - EP",
        "year": 2024
      },
      {
        "name": "Éponge Scratchy",
        "album": "ASMR Nouveau Micro - EP",
        "year": 2024
      },
      {
        "name": "Maillet",
        "album": "ASMR Nouveau Micro - EP",
        "year": 2024
      },
      {
        "name": "Petite Brosse à Mascara",
        "album": "ASMR Nouveau Micro - EP",
        "year": 2024
      },
      {
        "name": "Mic Brushing, Tapping, Scratching",
        "album": "ASMR Nouveau Micro - EP",
        "year": 2024
      }
    ]
  },
  {
    "name": "Soolking",
    "color": "#F0997B",
    "genre": "R&B/Soul",
    "trackCount": 6,
    "albums": [
      "Vintage",
      "Africa Jungle Part.1",
      "Tkt Pas - Single",
      "Carré OK (feat. GIMS) - Single",
      "Populaire (feat. Lacrim) - Single"
    ],
    "tracks": [
      {
        "name": "Chihuahua (feat. Gambi)",
        "album": "Vintage",
        "year": 2020
      },
      {
        "name": "CNLZ (feat. Jul & Kliff)",
        "album": "Vintage",
        "year": 2020
      },
      {
        "name": "Tour du monde (feat. L2B)",
        "album": "Africa Jungle Part.1",
        "year": 2025
      },
      {
        "name": "Tkt Pas",
        "album": "Tkt Pas - Single",
        "year": 2025
      },
      {
        "name": "Carré OK (feat. GIMS)",
        "album": "Carré OK (feat. GIMS) - Single",
        "year": 2024
      },
      {
        "name": "Populaire (feat. Lacrim)",
        "album": "Populaire (feat. Lacrim) - Single",
        "year": 2025
      }
    ]
  },
  {
    "name": "Dave",
    "color": "#85B7EB",
    "genre": "Hip-Hop/Rap",
    "trackCount": 6,
    "albums": [
      "The Boy Who Played the Harp",
      "PSYCHODRAMA"
    ],
    "tracks": [
      {
        "name": "Location (feat. Burna Boy)",
        "album": "PSYCHODRAMA",
        "year": 2019
      },
      {
        "name": "175 Months",
        "album": "The Boy Who Played the Harp",
        "year": 2025
      },
      {
        "name": "My 27th Birthday",
        "album": "The Boy Who Played the Harp",
        "year": 2025
      },
      {
        "name": "Marvellous",
        "album": "The Boy Who Played the Harp",
        "year": 2025
      },
      {
        "name": "Fairchild",
        "album": "The Boy Who Played the Harp",
        "year": 2025
      },
      {
        "name": "The Boy Who Played the Harp",
        "album": "The Boy Who Played the Harp",
        "year": 2025
      }
    ]
  },
  {
    "name": "Bricksy & 3g & BabySolo33",
    "color": "#97C459",
    "genre": "Hip-Hop/Rap",
    "trackCount": 6,
    "albums": [
      "Stress & Paillettes - EP"
    ],
    "tracks": [
      {
        "name": "12Am",
        "album": "Stress & Paillettes - EP",
        "year": 2022
      },
      {
        "name": "Danger (feat. Realo & Yuri Online)",
        "album": "Stress & Paillettes - EP",
        "year": 2022
      },
      {
        "name": "Could U Forget",
        "album": "Stress & Paillettes - EP",
        "year": 2022
      },
      {
        "name": "Stress & Paillettes",
        "album": "Stress & Paillettes - EP",
        "year": 2022
      },
      {
        "name": "Love Story (feat. Azur & Mh)",
        "album": "Stress & Paillettes - EP",
        "year": 2022
      },
      {
        "name": "Pascommmel",
        "album": "Stress & Paillettes - EP",
        "year": 2022
      }
    ]
  },
  {
    "name": "23 Megabits",
    "color": "#FAC775",
    "genre": "Hip-Hop/Rap",
    "trackCount": 6,
    "albums": [
      "23MEGATAPE",
      "23 MEGASPHERE"
    ],
    "tracks": [
      {
        "name": "Rouge (feat. Gemroz & sim01)",
        "album": "23MEGATAPE",
        "year": 2025
      },
      {
        "name": "16h06 (feat. Gemroz)",
        "album": "23MEGATAPE",
        "year": 2025
      },
      {
        "name": "Quand Misha fait du piano au Redhall",
        "album": "23MEGATAPE",
        "year": 2025
      },
      {
        "name": "Les Couleurs (feat. Ball, Advm, luXe Timeless, Sholo Senseï, Ry's, Esmo, Toothpick & Surprise)",
        "album": "23MEGATAPE",
        "year": 2025
      },
      {
        "name": "23 MEGARADIO",
        "album": "23 MEGASPHERE",
        "year": 2023
      },
      {
        "name": "Flamel Interlude",
        "album": "23 MEGASPHERE",
        "year": 2023
      }
    ]
  },
  {
    "name": "Médine",
    "color": "#AFA9EC",
    "genre": "Hip-Hop/Rap",
    "trackCount": 6,
    "albums": [
      "STENTOR, act I",
      "Grand Médine"
    ],
    "tracks": [
      {
        "name": "stentor",
        "album": "STENTOR, act I",
        "year": 2025
      },
      {
        "name": "media training",
        "album": "STENTOR, act I",
        "year": 2025
      },
      {
        "name": "jemila",
        "album": "STENTOR, act I",
        "year": 2025
      },
      {
        "name": "QI. RAP",
        "album": "STENTOR, act I",
        "year": 2025
      },
      {
        "name": "reste à vivre",
        "album": "STENTOR, act I",
        "year": 2025
      },
      {
        "name": "Tue l'amour",
        "album": "Grand Médine",
        "year": 2020
      }
    ]
  },
  {
    "name": "Baby Keem",
    "color": "#F5C4B3",
    "genre": "Hip-Hop/Rap",
    "trackCount": 6,
    "albums": [
      "Ca$ino",
      "hooligan / sons & critics - Single",
      "DIE FOR MY BITCH"
    ],
    "tracks": [
      {
        "name": "hooligan",
        "album": "hooligan / sons & critics - Single",
        "year": 2020
      },
      {
        "name": "HONEST",
        "album": "DIE FOR MY BITCH",
        "year": 2019
      },
      {
        "name": "Circus Circus Free$tyle",
        "album": "Ca$ino",
        "year": 2026
      },
      {
        "name": "Good Flirts (feat. Kendrick Lamar & Momo Boyd)",
        "album": "Ca$ino",
        "year": 2026
      },
      {
        "name": "House Money",
        "album": "Ca$ino",
        "year": 2026
      },
      {
        "name": "Ca$ino",
        "album": "Ca$ino",
        "year": 2026
      }
    ]
  },
  {
    "name": "Jwles",
    "color": "#9FE1CB",
    "genre": "Hip-Hop/Rap",
    "trackCount": 6,
    "albums": [
      "Le Zin Dans Le Vide - Single",
      "Argentine - Single",
      "31 - Single",
      "Connecté",
      "Trop Gentil - Single"
    ],
    "tracks": [
      {
        "name": "Argentine",
        "album": "Argentine - Single",
        "year": 2022
      },
      {
        "name": "31",
        "album": "31 - Single",
        "year": 2022
      },
      {
        "name": "Aux Impôts À St - Denis",
        "album": "Connecté",
        "year": 2021
      },
      {
        "name": "Rideau",
        "album": "Le Zin Dans Le Vide - Single",
        "year": 2021
      },
      {
        "name": "Bernard Lagat",
        "album": "Le Zin Dans Le Vide - Single",
        "year": 2021
      },
      {
        "name": "Trop Gentil",
        "album": "Trop Gentil - Single",
        "year": 2022
      }
    ]
  },
  {
    "name": "FEMTOGO",
    "color": "#C0DD97",
    "genre": "Hip-Hop/Rap",
    "trackCount": 6,
    "albums": [
      "NAMELESS BELLIGERENT - EP"
    ],
    "tracks": [
      {
        "name": "NEMBUTAL",
        "album": "NAMELESS BELLIGERENT - EP",
        "year": 2023
      },
      {
        "name": "GAISERIC",
        "album": "NAMELESS BELLIGERENT - EP",
        "year": 2023
      },
      {
        "name": "SCOPOLAMINE",
        "album": "NAMELESS BELLIGERENT - EP",
        "year": 2023
      },
      {
        "name": "JADE LA HYÈNE",
        "album": "NAMELESS BELLIGERENT - EP",
        "year": 2023
      },
      {
        "name": "SAVILE ROW",
        "album": "NAMELESS BELLIGERENT - EP",
        "year": 2023
      },
      {
        "name": "RAINY DAY",
        "album": "NAMELESS BELLIGERENT - EP",
        "year": 2023
      }
    ]
  },
  {
    "name": "Le Dé",
    "color": "#F4C0D1",
    "genre": "Hip-Hop/Rap",
    "trackCount": 6,
    "albums": [
      "Delta Plane"
    ],
    "tracks": [
      {
        "name": "4zoo",
        "album": "Delta Plane",
        "year": 2016
      },
      {
        "name": "Triple bicéphale",
        "album": "Delta Plane",
        "year": 2016
      },
      {
        "name": "Espace temps (feat. Swing)",
        "album": "Delta Plane",
        "year": 2016
      },
      {
        "name": "Beurre de Marrakech",
        "album": "Delta Plane",
        "year": 2016
      },
      {
        "name": "Liège, Liège",
        "album": "Delta Plane",
        "year": 2016
      },
      {
        "name": "Nouvelle vague (feat. Primero)",
        "album": "Delta Plane",
        "year": 2016
      }
    ]
  },
  {
    "name": "USKY",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 6,
    "albums": [
      "Porte dorée : saison 2",
      "Mojo",
      "Porte dorée : saison 1",
      "Noura"
    ],
    "tracks": [
      {
        "name": "Fer",
        "album": "Porte dorée : saison 2",
        "year": 2019
      },
      {
        "name": "Chronomètre",
        "album": "Mojo",
        "year": 2016
      },
      {
        "name": "Fossette (feat. Jok'air)",
        "album": "Porte dorée : saison 2",
        "year": 2019
      },
      {
        "name": "Pour voir",
        "album": "Porte dorée : saison 2",
        "year": 2019
      },
      {
        "name": "Môme (feat. iCon)",
        "album": "Porte dorée : saison 1",
        "year": 2018
      },
      {
        "name": "Saint-Emilion",
        "album": "Noura",
        "year": 2025
      }
    ]
  },
  {
    "name": "Rich The Kid",
    "color": "#1A5FB4",
    "genre": "Hip-Hop/Rap",
    "trackCount": 6,
    "albums": [
      "The World Is Yours",
      "BOSS MAN",
      "The World Is Yours 2"
    ],
    "tracks": [
      {
        "name": "Splashin",
        "album": "The World Is Yours 2",
        "year": 2018
      },
      {
        "name": "Leave Me",
        "album": "The World Is Yours",
        "year": 2018
      },
      {
        "name": "New Freezer (feat. Kendrick Lamar)",
        "album": "The World Is Yours",
        "year": 2017
      },
      {
        "name": "Easy",
        "album": "BOSS MAN",
        "year": 2020
      },
      {
        "name": "Far From You",
        "album": "BOSS MAN",
        "year": 2020
      },
      {
        "name": "World Is Yours",
        "album": "The World Is Yours",
        "year": 2018
      }
    ]
  },
  {
    "name": "Mairo",
    "color": "#2D8A4E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 6,
    "albums": [
      "omar chappier"
    ],
    "tracks": [
      {
        "name": "la mouche",
        "album": "omar chappier",
        "year": 2023
      },
      {
        "name": "crack crack",
        "album": "omar chappier",
        "year": 2023
      },
      {
        "name": "nouvelle écriture",
        "album": "omar chappier",
        "year": 2023
      },
      {
        "name": "dope sound",
        "album": "omar chappier",
        "year": 2023
      },
      {
        "name": "larousse (feat. NeS & Wallace Cleaver)",
        "album": "omar chappier",
        "year": 2023
      },
      {
        "name": "pov 2023",
        "album": "omar chappier",
        "year": 2023
      }
    ]
  },
  {
    "name": "Moca Cabana",
    "color": "#C4622D",
    "genre": "Downtempo",
    "trackCount": 6,
    "albums": [
      "In Bedween - Single",
      "Low Tide - Single",
      "Stone Breaths - Single",
      "Still Sand - Single",
      "Pillow Times - Single",
      "Snowy Paws - Single"
    ],
    "tracks": [
      {
        "name": "In Bedween",
        "album": "In Bedween - Single",
        "year": 2025
      },
      {
        "name": "Low Tide",
        "album": "Low Tide - Single",
        "year": 2025
      },
      {
        "name": "Stone Breaths",
        "album": "Stone Breaths - Single",
        "year": 2025
      },
      {
        "name": "Still Sand",
        "album": "Still Sand - Single",
        "year": 2025
      },
      {
        "name": "Pillow Times",
        "album": "Pillow Times - Single",
        "year": 2024
      },
      {
        "name": "Snowy Paws",
        "album": "Snowy Paws - Single",
        "year": 2024
      }
    ]
  },
  {
    "name": "Fuku & JeanJass",
    "color": "#7B4FA6",
    "genre": "Hip-Hop/Rap",
    "trackCount": 6,
    "albums": [
      "Phoenix - EP"
    ],
    "tracks": [
      {
        "name": "Astroboy",
        "album": "Phoenix - EP",
        "year": 2023
      },
      {
        "name": "Phoenix",
        "album": "Phoenix - EP",
        "year": 2023
      },
      {
        "name": "Guap (feat. thaHomey)",
        "album": "Phoenix - EP",
        "year": 2023
      },
      {
        "name": "Run x2",
        "album": "Phoenix - EP",
        "year": 2023
      },
      {
        "name": "S/O Big Slime (feat. Kosa)",
        "album": "Phoenix - EP",
        "year": 2023
      },
      {
        "name": "Hiver (feat. Kosa & Meso)",
        "album": "Phoenix - EP",
        "year": 2023
      }
    ]
  },
  {
    "name": "GIMS",
    "color": "#E8593C",
    "genre": "Hip-Hop/Rap",
    "trackCount": 5,
    "albums": [
      "Mon cœur avait raison",
      "NINAO - Single",
      "AIR FORCE BLANCHE (feat. JUL) - Single",
      "LE NORD SE SOUVIENT : L'ODYSSÉE",
      "LE NORD SE SOUVIENT"
    ],
    "tracks": [
      {
        "name": "Tu vas me manquer (Pilule Bleue)",
        "album": "Mon cœur avait raison",
        "year": 2015
      },
      {
        "name": "NINAO",
        "album": "NINAO - Single",
        "year": 2025
      },
      {
        "name": "AIR FORCE BLANCHE (feat. JUL)",
        "album": "AIR FORCE BLANCHE (feat. JUL) - Single",
        "year": 2025
      },
      {
        "name": "AIR FORCE BLANCHE (feat. JUL)",
        "album": "LE NORD SE SOUVIENT : L'ODYSSÉE",
        "year": 2025
      },
      {
        "name": "CIEL",
        "album": "LE NORD SE SOUVIENT",
        "year": 2024
      }
    ]
  },
  {
    "name": "twenty one pilots",
    "color": "#3B8BD4",
    "genre": "Alternative",
    "trackCount": 5,
    "albums": [
      "Blurryface",
      "Suicide Squad: The Album"
    ],
    "tracks": [
      {
        "name": "Stressed Out",
        "album": "Blurryface",
        "year": 2015
      },
      {
        "name": "Ride",
        "album": "Blurryface",
        "year": 2015
      },
      {
        "name": "Heathens",
        "album": "Suicide Squad: The Album",
        "year": 2016
      },
      {
        "name": "Heavydirtysoul",
        "album": "Blurryface",
        "year": 2015
      },
      {
        "name": "Lane Boy",
        "album": "Blurryface",
        "year": 2015
      }
    ]
  },
  {
    "name": "Advm & Le N",
    "color": "#4A9E5C",
    "genre": "Hip-Hop/Rap",
    "trackCount": 5,
    "albums": [
      ".moins de bruit que ses démons."
    ],
    "tracks": [
      {
        "name": ".démons.",
        "album": ".moins de bruit que ses démons.",
        "year": 2023
      },
      {
        "name": ".pk tu pleures?",
        "album": ".moins de bruit que ses démons.",
        "year": 2023
      },
      {
        "name": ".béénii.",
        "album": ".moins de bruit que ses démons.",
        "year": 2023
      },
      {
        "name": ".Hennessy.",
        "album": ".moins de bruit que ses démons.",
        "year": 2023
      },
      {
        "name": ".DEMAIN",
        "album": ".moins de bruit que ses démons.",
        "year": 2023
      }
    ]
  },
  {
    "name": "Ico",
    "color": "#9B4DCA",
    "genre": "Hip-Hop/Rap",
    "trackCount": 5,
    "albums": [
      "Petit con",
      "L'album - Single",
      "Siri - Single"
    ],
    "tracks": [
      {
        "name": "L'album",
        "album": "L'album - Single",
        "year": 2019
      },
      {
        "name": "Dédicace",
        "album": "Petit con",
        "year": 2019
      },
      {
        "name": "Siri",
        "album": "Siri - Single",
        "year": 2018
      },
      {
        "name": "Stéphanie",
        "album": "Petit con",
        "year": 2019
      },
      {
        "name": "Tabasco",
        "album": "Petit con",
        "year": 2019
      }
    ]
  },
  {
    "name": "D. ACE",
    "color": "#D4A017",
    "genre": "Hip-Hop/Rap",
    "trackCount": 5,
    "albums": [
      "Inévitable",
      "Hip-hop - Single",
      "Mangas - Single",
      "Vox Cordis"
    ],
    "tracks": [
      {
        "name": "Hip-hop",
        "album": "Hip-hop - Single",
        "year": 2017
      },
      {
        "name": "Mangas 2",
        "album": "Inévitable",
        "year": 2018
      },
      {
        "name": "Petite sœur",
        "album": "Inévitable",
        "year": 2018
      },
      {
        "name": "Mangas",
        "album": "Mangas - Single",
        "year": 2017
      },
      {
        "name": "Mangas 4",
        "album": "Vox Cordis",
        "year": 2020
      }
    ]
  },
  {
    "name": "Krisy",
    "color": "#FF6B6B",
    "genre": "Hip-Hop/Rap",
    "trackCount": 5,
    "albums": [
      "Paradis d'amour",
      "Mélodie - Single",
      "Tueurs",
      "Aucune émotion - Single"
    ],
    "tracks": [
      {
        "name": "Erotiquement votre (feat. Instagram Followers)",
        "album": "Paradis d'amour",
        "year": 2017
      },
      {
        "name": "Mélodie",
        "album": "Mélodie - Single",
        "year": 2017
      },
      {
        "name": "Dernière fois",
        "album": "Tueurs",
        "year": 2017
      },
      {
        "name": "Jeune Julio",
        "album": "Paradis d'amour",
        "year": 2017
      },
      {
        "name": "Aucune émotion",
        "album": "Aucune émotion - Single",
        "year": 2016
      }
    ]
  },
  {
    "name": "Francis Lai",
    "color": "#4ECDC4",
    "genre": "Pop",
    "trackCount": 5,
    "albums": [
      "Brigitte Bardot Show 67"
    ],
    "tracks": [
      {
        "name": "Marseillaise Générique (instrumental)",
        "album": "Brigitte Bardot Show 67",
        "year": 1968
      },
      {
        "name": "Saint-Tropez (instrumental)",
        "album": "Brigitte Bardot Show 67",
        "year": 1968
      },
      {
        "name": "Port Grimaud (instrumental)",
        "album": "Brigitte Bardot Show 67",
        "year": 1968
      },
      {
        "name": "Paris (instrumental)",
        "album": "Brigitte Bardot Show 67",
        "year": 1968
      },
      {
        "name": "David B (instrumental)",
        "album": "Brigitte Bardot Show 67",
        "year": 1968
      }
    ]
  },
  {
    "name": "FEMTOGO & neophron",
    "color": "#45B7D1",
    "genre": "Hip-Hop/Rap",
    "trackCount": 5,
    "albums": [
      "FRANCS-TIREURS PARTISANS - EP"
    ],
    "tracks": [
      {
        "name": "MACALLAN SPEECH",
        "album": "FRANCS-TIREURS PARTISANS - EP",
        "year": 2025
      },
      {
        "name": "MME. RIFFAUD",
        "album": "FRANCS-TIREURS PARTISANS - EP",
        "year": 2025
      },
      {
        "name": "BOCATHEVA",
        "album": "FRANCS-TIREURS PARTISANS - EP",
        "year": 2025
      },
      {
        "name": "OFF ROAD",
        "album": "FRANCS-TIREURS PARTISANS - EP",
        "year": 2025
      },
      {
        "name": "UN AUTRE JOUR",
        "album": "FRANCS-TIREURS PARTISANS - EP",
        "year": 2025
      }
    ]
  },
  {
    "name": "thaHomey, Milanezie & kofi bae",
    "color": "#96CEB4",
    "genre": "Alternative Rap",
    "trackCount": 5,
    "albums": [
      "Old Money, New Money - EP"
    ],
    "tracks": [
      {
        "name": "Sac de Fric",
        "album": "Old Money, New Money - EP",
        "year": 2025
      },
      {
        "name": "Barry Trill",
        "album": "Old Money, New Money - EP",
        "year": 2025
      },
      {
        "name": "Train de vie PIMP",
        "album": "Old Money, New Money - EP",
        "year": 2025
      },
      {
        "name": "Roule avec kofi milanezie",
        "album": "Old Money, New Money - EP",
        "year": 2025
      },
      {
        "name": "Sorry 4 Da Wait",
        "album": "Old Money, New Money - EP",
        "year": 2025
      }
    ]
  },
  {
    "name": "Juice",
    "color": "#FFEAA7",
    "genre": "Hip-Hop/Rap",
    "trackCount": 5,
    "albums": [
      "Floraison - EP",
      "La Lumière des Spots - Single"
    ],
    "tracks": [
      {
        "name": "Merci",
        "album": "Floraison - EP",
        "year": 2022
      },
      {
        "name": "Rainbow",
        "album": "Floraison - EP",
        "year": 2022
      },
      {
        "name": "La Fête",
        "album": "Floraison - EP",
        "year": 2022
      },
      {
        "name": "Mo Money Mo Problems",
        "album": "Floraison - EP",
        "year": 2022
      },
      {
        "name": "La Lumière des Spots",
        "album": "La Lumière des Spots - Single",
        "year": 2022
      }
    ]
  },
  {
    "name": "Silvr Knight. & FEMTOGO",
    "color": "#7F77DD",
    "genre": "Hip-Hop/Rap",
    "trackCount": 5,
    "albums": [
      "La Bête - EP"
    ],
    "tracks": [
      {
        "name": "ADATA",
        "album": "La Bête - EP",
        "year": 2024
      },
      {
        "name": "Draga Daï",
        "album": "La Bête - EP",
        "year": 2024
      },
      {
        "name": "4000Kestrel",
        "album": "La Bête - EP",
        "year": 2024
      },
      {
        "name": "GEÔLE (feat. baby hayabusa)",
        "album": "La Bête - EP",
        "year": 2024
      },
      {
        "name": "Tuer la Bête",
        "album": "La Bête - EP",
        "year": 2024
      }
    ]
  },
  {
    "name": "Ocho & Freeze Corleone",
    "color": "#D85A30",
    "genre": "Hip-Hop/Rap",
    "trackCount": 5,
    "albums": [
      "LM$ (Chopped & $crewed)",
      "Projet Purrp Beam"
    ],
    "tracks": [
      {
        "name": "3 Planètes (Chopped & $crewed)",
        "album": "Projet Purrp Beam",
        "year": 2019
      },
      {
        "name": "L'Art de la Guerre (Chopped & $crewed)",
        "album": "LM$ (Chopped & $crewed)",
        "year": 2021
      },
      {
        "name": "Hors Ligne (Chopped & $crewed)",
        "album": "LM$ (Chopped & $crewed)",
        "year": 2021
      },
      {
        "name": "Freeze Raël (Chopped & $crewed)",
        "album": "LM$ (Chopped & $crewed)",
        "year": 2021
      },
      {
        "name": "Donquixote Doflamingo (Chopped & $crewed)",
        "album": "Projet Purrp Beam",
        "year": 2019
      }
    ]
  },
  {
    "name": "Lord Esperanza & Majeur-Mineur",
    "color": "#1D9E75",
    "genre": "Hip-Hop/Rap",
    "trackCount": 5,
    "albums": [
      "Drapeau Noir"
    ],
    "tracks": [
      {
        "name": "Drapeau Noir",
        "album": "Drapeau Noir",
        "year": 2017
      },
      {
        "name": "L'insolence Des Élus",
        "album": "Drapeau Noir",
        "year": 2017
      },
      {
        "name": "Love Yourself",
        "album": "Drapeau Noir",
        "year": 2017
      },
      {
        "name": "Danse Avec Les Ombres",
        "album": "Drapeau Noir",
        "year": 2017
      },
      {
        "name": "Comme Tous Les Autres (feat. Shaby)",
        "album": "Drapeau Noir",
        "year": 2017
      }
    ]
  },
  {
    "name": "Lil Peep",
    "color": "#EF9F27",
    "genre": "Hip-Hop/Rap",
    "trackCount": 5,
    "albums": [
      "Come Over When You're Sober, Pt. 2",
      "Come Over When You're Sober, Pt. 1",
      "EVERYBODY'S EVERYTHING"
    ],
    "tracks": [
      {
        "name": "Life is Beautiful",
        "album": "Come Over When You're Sober, Pt. 2",
        "year": 2018
      },
      {
        "name": "Leanin'",
        "album": "Come Over When You're Sober, Pt. 2",
        "year": 2018
      },
      {
        "name": "Benz Truck (гелик)",
        "album": "Come Over When You're Sober, Pt. 1",
        "year": 2017
      },
      {
        "name": "Runaway",
        "album": "Come Over When You're Sober, Pt. 2",
        "year": 2018
      },
      {
        "name": "PRINCESS",
        "album": "EVERYBODY'S EVERYTHING",
        "year": 2019
      }
    ]
  },
  {
    "name": "Ledé Markson",
    "color": "#D4537E",
    "genre": "Hip-Hop/Rap",
    "trackCount": 5,
    "albums": [
      "Napalm - EP"
    ],
    "tracks": [
      {
        "name": "Momentum",
        "album": "Napalm - EP",
        "year": 2021
      },
      {
        "name": "Liège Flippe",
        "album": "Napalm - EP",
        "year": 2017
      },
      {
        "name": "PS",
        "album": "Napalm - EP",
        "year": 2017
      },
      {
        "name": "ALZ",
        "album": "Napalm - EP",
        "year": 2017
      },
      {
        "name": "Momentum",
        "album": "Napalm - EP",
        "year": 2021
      }
    ]
  }
];
