

const express = require('express');
const router = express.Router();
const enchereController = require('../controllers/enchereController');

router.get('/', enchereController.getAllEncheres);
router.get('/:id', enchereController.getEnchereById);
router.post('/', enchereController.createEnchere);
router.put('/:id', enchereController.updateEnchere);
router.delete('/:id', enchereController.deleteEnchere);

module.exports = router;
