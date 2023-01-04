const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');

router.get('/list',PostController.findALl);
router.get('/:id',PostController.findOne);

module.exports = router;