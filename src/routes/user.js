const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/list',UserController.getAll);
router.get('/:id',UserController.getOne);

module.exports = router;