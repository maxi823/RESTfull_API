const express = require('express');
const router = express.Router();
const libroController = require('../controller/libro.controller');

router.get('/', libroController.getLibros);
router.post('/', libroController.createLibro);

module.exports = router;
