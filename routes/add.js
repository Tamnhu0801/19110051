const express = require('express');
const router = express.Router();
const controllers = require('../controllers/PostsController');

router.get('', controllers.addPost);
router.post('', controllers.addPost);

module.exports = router;