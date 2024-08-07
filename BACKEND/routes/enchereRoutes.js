

const express = require('express');
const router = express.Router();
const {enchereController, 
    // inscrireUtilisateur
    getEnchereDetails, getOffres, inscrireEnchere } = require('../controllers/enchereController');

router.get('/', enchereController.getAllEncheres);
router.get('/:id', enchereController.getEnchereById);
router.post('/', enchereController.createEnchere);
router.put('/:id', enchereController.updateEnchere);
router.delete('/:id', enchereController.deleteEnchere);

// router.post('/:enchereId/inscrire', inscrireUtilisateur);

router.get('/enchere/:annonceId', getEnchereDetails);
// router.get('/enchere/:enchereId', getEnchereDetails);

router.get('/offres/:annonceId', getOffres);
// router.get('/offres/:enchereId', getOffres);


// router.post('/enchere/:annonceId/inscrire', inscrireEnchere);
router.post('/enchere/:enchereId/inscrire', inscrireEnchere);

module.exports = router;
