const { getAll, create, getOne, remove, update, setSongArtists, setSongGenres } = require('../controllers/song.controllers');
const express = require('express');

const songRouter = express.Router();

songRouter.route('/songs')
    .get(getAll)
    .post(create);

songRouter.route('/songs/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

songRouter.route('/songs/:id/artists')
    .post(setSongArtists);

songRouter.route('/songs/:id/genres')
    .post(setSongGenres);

module.exports = songRouter;