const express = require('express');
const router = express.Router();
const controllers = require('../controllers/PostsController');

router.get('/:id', controllers.deletePost);

module.exports = router;