

const express = require('express');
const router = express.Router();
const utilisateurController = require('../controllers/utilisateurController');

// GET - Récupérer tous les utilisateurs
router.get('/', utilisateurController.getAllUtilisateurs);

// GET - Récupérer un utilisateur par son ID
router.get('/:id', utilisateurController.getUtilisateurById);

// POST - Créer un nouvel utilisateur
router.post('/', utilisateurController.createUtilisateur);

// PUT - Mettre à jour un utilisateur existant
router.put('/:id', utilisateurController.updateUtilisateur);

// DELETE - Supprimer un utilisateur par son ID
router.delete('/:id', utilisateurController.deleteUtilisateur);

module.exports = router;
