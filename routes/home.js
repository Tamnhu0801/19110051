const express = require('express');
const router = express.Router();
const controllers = require('../controllers/PostsController');

router.get('',controllers.getAllPosts);
router.get('/:id', controllers.getPostById);
router.post('/:id/addComment', controllers.addComment);

module.exports = router;