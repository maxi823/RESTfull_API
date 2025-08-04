const express = require('express');
const router = express.Router();
const prestamoController = require('../controller/prestamo.controller');

router.get('/', prestamoController.getPrestamos);
router.post('/', prestamoController.createPrestamo);

module.exports = router;
