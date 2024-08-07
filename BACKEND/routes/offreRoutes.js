

const express = require('express');
const router = express.Router();
const {offreController, soumettreOffre} = require('../controllers/offreController');

// router.get('/', offreController.getAllOffres);
router.get('/:id', offreController.getOffreById);
// router.post('/', offreController.createOffre);
router.put('/:id', offreController.updateOffre);
router.delete('/:id', offreController.deleteOffre);


router.post('/', soumettreOffre);

module.exports = router;
