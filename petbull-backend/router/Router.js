'use strict';

// install
const express = require('express');
const { Controller } = require('../controller/Controller');
const router = express.Router();
const { petRouter } = require('./petRouter');

router.use('/', Controller.Homepage);
router.get('/pet', petRouter);




module.exports = { router };