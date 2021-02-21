const express = require('express');
const router = express.Router()
const MongoClient = require('mongodb').MongoClient;

//====================================

var usersRouter = require('./users');
var moviesRouter = require('./movies');
var typingRouter = require('./typing');

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('/typing', typingRouter);

module.exports = router;