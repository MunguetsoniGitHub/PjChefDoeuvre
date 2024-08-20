
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialisation de l'application Express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('dotenv').config();
console.log("DATABASE_URL:", process.env.DATABASE_URL);

// // Passport - google config
// const passport = require('./config/passport');
// const session = require('express-session');
// const authRoutesGoogle = require('./routes/authRoutesGoogle');
// app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use('/api/auth', authRoutesGoogle);

const authRoutes = require('./routes/authRoutes');

// const authController = require('./controllers/authController');
// const authMiddleware = require('./middleware/authMiddleware');

const utilisateurRoutes = require('./routes/utilisateurRoutes');
const annonceRoutes = require('./routes/annonceRoutes');
const enchereRoutes = require('./routes/enchereRoutes');
const imageRoutes = require('./routes/imageRoutes');
const demandeValidationRoutes = require('./routes/demandeValidationRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const offreRoutes = require('./routes/offreRoutes');
const paiementsAcompteRoutes = require('./routes/paiementsAcompteRoutes');

const path = require('path');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

// Middleware pour traiter les données au format JSON
app.use(express.json());

// app.use(cors({
//   // origin: 'http://localhost:5173',
//   origin: 'https://mimmoencheres.netlify.app',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
//   credentials: true
// }));

// Autoriser les requêtes CORS de tous les domaines (à adapter selon vos besoins)
// app.use(cors());

const corsOptions = {
  origin: 'https://mimmoencheres.netlify.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true, // Si vous utilisez des cookies ou des sessions
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Répondre aux préflights



app.use('/api/auth', authRoutes);


// Montage des routes "Utilisateur"
app.use('/api/utilisateurs', utilisateurRoutes);
app.use('/api/annonces', annonceRoutes);
// app.use('/encheres', enchereRoutes);
app.use('/api/images', imageRoutes);
app.use('/demandes-validation', demandeValidationRoutes);
app.use('/notifications', notificationRoutes);
// app.use('/offre', offreRoutes);
app.use('/paiements-acompte', paiementsAcompteRoutes);

app.use('/api', enchereRoutes);
app.use('/api/offre', offreRoutes);

// Configuration du serveur Express pour servir les fichiers statiques
app.use('/uploads', express.static(path.join(__dirname, '../..', 'uploads')));

// Définition des routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/annonces', async (req, res) => {
  try {
    const annonces = await annonceModel.getAllAnnonces();
    res.json(annonces);
  } catch (error) {
    res.status(500).send('Une erreur est survenue lors de la récupération des annonces.');
  }
});





