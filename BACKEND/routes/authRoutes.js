
const express = require('express');
// const { login, protectedRoute } = require('../controllers/authController');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();


// router.post('/login', login);
// router.get('/protected', authMiddleware, protectedRoute);

router.post('/login', authController.login);
router.get('/dashboard', authMiddleware, authController.protectedRoute);

// router.post('/login', authMiddleware, login);
// router.get('/protected', authMiddleware, protectedRoute);

module.exports = router;
