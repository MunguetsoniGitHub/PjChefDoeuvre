

const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

// router.get('/', imageController.imageController.getAllImages);
router.get('/:id', imageController.imageController.getImageById);
router.post('/', imageController.imageController.createImage);
// router.put('/:id', imageController.updateImage);
// router.delete('/:id', imageController.deleteImage);

// Récupérer toutes les images d'une annonce spécifique
router.get('/annonce/:annonceId', imageController.getImagesByAnnonceId);

// Mettre à jour une image
router.put('/:id', imageController.imageController.updateImage);

// Supprimer une image
router.delete('/:id', imageController.imageController.deleteImage);

module.exports = router
