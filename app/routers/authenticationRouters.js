// routes.js
const express = require('express');
const router = express.Router();
const authenticationController = require('./controllers/authenticationController');

// Ruta para el inicio de sesión
router.post('/login', authenticationController.login);

module.exports = router;
