



const express = require('express');
const router = express.Router();
const paiementsAcompteController = require('../controllers/paiementsAcompteController');

router.get('/', paiementsAcompteController.getAllPaiementsAcompte);
router.get('/:id', paiementsAcompteController.getPaiementsAcompteById);
router.post('/', paiementsAcompteController.createPaiementsAcompte);
router.put('/:id', paiementsAcompteController.updatePaiementsAcompte);
router.delete('/:id', paiementsAcompteController.deletePaiementsAcompte);

module.exports = router;
