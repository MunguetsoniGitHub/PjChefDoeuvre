

const express = require('express');
const router = express.Router();
const demandeValidationController = require('../controllers/demandeValidationController');

router.get('/', demandeValidationController.getAllDemandesValidation);
router.get('/:id', demandeValidationController.getDemandeValidationById);
router.post('/', demandeValidationController.createDemandeValidation);
router.put('/:id', demandeValidationController.updateDemandeValidation);
router.delete('/:id', demandeValidationController.deleteDemandeValidation);

module.exports = router;
