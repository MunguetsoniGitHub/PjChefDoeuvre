

// Importation des modules
const express = require('express');
const utilisateurRoutes = require('./routes/utilisateurRoutes');
// const annonceModel = require('./models/annonceModel');
const annonceRoutes = require('./routes/annonceRoutes');
const enchereRoutes = require('./routes/enchereRoutes');
const imageRoutes = require('./routes/imageRoutes');
const demandeValidationRoutes = require('./routes/demandeValidationRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const offreRoutes = require('./routes/offreRoutes');
const paiementsAcompteRoutes = require('./routes/paiementsAcompteRoutes');

// Initialisation de l'application Express
const app = express();

// Middleware pour traiter les données au format JSON
app.use(express.json());

// Montage des routes "Utilisateur"
app.use('/utilisateurs', utilisateurRoutes);
app.use('/annonces', annonceRoutes);
app.use('/encheres', enchereRoutes);
app.use('/images', imageRoutes);
app.use('/demandes-validation', demandeValidationRoutes);
app.use('/notifications', notificationRoutes);
app.use('/offres', offreRoutes);
app.use('/paiements-acompte', paiementsAcompteRoutes);

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

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});



