'use strict'

/**
 * initialization express
 * require pet controller
 * main endpoint
 * module exports
 */

// initialization
const express = require('express');
const petRouter = express.Router();


// inisiasi pet controller
const {petController} = require('../controller/petController');

// endpoint : all pet
petRouter.get('/', petController.Tes);
module.exports = { petRouter };


