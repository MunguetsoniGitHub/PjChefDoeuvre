
const express = require('express');
const { authController, protectedRoute } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();


router.post('/login', authController.login);
router.get('/protected', authMiddleware, protectedRoute);

module.exports = router;
