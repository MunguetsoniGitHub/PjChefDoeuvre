


const express = require('express');
const router = express.Router();
// const annonceController = require('../controllers/annonceController');
const annonceModel = require('../models/annonceModel');

// GET - Récupérer toutes les annonces
// router.get('/annonces', annonceController.getAllAnnonces);
router.get('/', async (req, res) => {
    try {
      const annonces = await annonceModel.getAllAnnonces();
      res.json(annonces);
    } catch (error) {
      res.status(500).send('Une erreur est survenue lors de la récupération des annonces.');
    }
  });

// GET - Récupérer une annonce par son ID
// router.get('/annonces/:id', annonceController.getAnnonceById);
router.get('/:id', async (req, res) => {
    const annonceId = req.params.id;
    
    try {
      const annonce = await annonceModel.getAnnonceById(annonceId);
      if (!annonce) {
        res.status(404).send('Annonce non trouvée.');
      } else {
        res.json(annonce);
      }
    } catch (error) {
      res.status(500).send('Une erreur est survenue lors de la récupération de l\'annonce.');
    }
  });
  

// POST - Créer une nouvelle annonce
// router.post('/annonces', annonceController.createAnnonce);
router.post('/', async (req, res) => {
    try {
      const nouvelleAnnonce = await annonceModel.createAnnonce(req.body);
      res.status(201).json(nouvelleAnnonce);
    } catch (error) {
      res.status(500).send('Une erreur est survenue lors de l\'ajout de l\'annonce.');
    }
  });
  

// PUT - Mettre à jour une annonce existante
// router.put('/annonces/:id', annonceController.updateAnnonce);
router.put('/:id', async (req, res) => {
    const annonceId = req.params.id;
    const nouvelleDonnee = req.body;
    
    try {
      const annonceMiseAJour = await annonceModel.updateAnnonce(annonceId, nouvelleDonnee);
      res.json(annonceMiseAJour);
    } catch (error) {
      res.status(500).send('Une erreur est survenue lors de la mise à jour de l\'annonce.');
    }
  });
  

// DELETE - Supprimer une annonce par son ID
// router.delete('/annonces/:id', annonceController.deleteAnnonce);
router.delete('/:id', async (req, res) => {
    const annonceId = req.params.id;
    
    try {
      await annonceModel.deleteAnnonce(annonceId);
      res.status(204).send();
    } catch (error) {
      res.status(500).send('Une erreur est survenue lors de la suppression de l\'annonce.');
    }
  });
  

module.exports = router;
