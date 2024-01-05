const express = require('express');
const genreRouter = require('./genre.router');
const artistRouter = require('./artist.router');
const router = express.Router();

// colocar las rutas aquí
router.use(genreRouter);
router.use(artistRouter);

module.exports = router;