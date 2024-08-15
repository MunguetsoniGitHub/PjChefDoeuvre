
const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const { getAnnonceById, createAnnonce, updateAnnonce, deleteAnnonce, getAllAnnonces, upload } = require('../controllers/annonceController');

// const upload = require('../middleware/upload');

// POST - Créer une nouvelle annonce
router.post('/', upload.array('images'), createAnnonce);

// GET - Récupérer toutes les annonces
router.get('/', getAllAnnonces);

// GET - Récupérer une annonce par son ID
router.get('/:id', authMiddleware, getAnnonceById);  

// PUT - Mettre à jour une annonce existante
router.put('/:id', updateAnnonce);

// DELETE - Supprimer une annonce par son ID
router.delete('/:id', deleteAnnonce);
  

module.exports = router;
