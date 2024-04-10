const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/', gameController.getGames);
router.post('/create', gameController.createGame);
router.post('/join/:id', gameController.joinGame);

module.exports = router;