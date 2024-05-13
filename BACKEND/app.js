
// Importation des modules
const express = require('express');


// Initialisation de l'application Express
const app = express();

// Middleware pour traiter les données au format JSON
app.use(express.json());

// Définition des routes
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  // Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});