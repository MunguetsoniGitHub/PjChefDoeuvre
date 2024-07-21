
const express = require('express');
const router = express.Router();
const annonceController = require('../controllers/annonceController');
// const annonceModel = require('../models/annonceModel');


const authMiddleware = require('../middleware/authMiddleware');
// // const { createAnnonce } = require('../controllers/annonceController');

const upload = require('../middleware/upload');

router.post('/', upload.array('images'), annonceController.createAnnonce);


const {
  // getAnnonceById,
  // annonceController,
  getAllAnnonces,
  participate,
  removeParticipation,
  checkParticipation,
} = require('../controllers/annonceController');

// Participation aux enchères d'une annonce

router.get('/', getAllAnnonces);
router.post('/participer', participate);
router.delete('/participer', removeParticipation);
router.get('/checkParticipation', checkParticipation);

// GET - Récupérer toutes les annonces
// router.get('/annonces', annonceController.getAllAnnonces);

// GET - Récupérer une annonce par son ID
router.get('/:id', authMiddleware, annonceController.getAnnonceById);  

// POST - Créer une nouvelle annonce
// router.post('/', annonceController.createAnnonce);

// PUT - Mettre à jour une annonce existante
router.put('/:id', annonceController.updateAnnonce);

// DELETE - Supprimer une annonce par son ID
router.delete('/:id', annonceController.deleteAnnonce);
  

module.exports = router;
