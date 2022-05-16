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

// endpoint : all pet
petRouter.get('/', function (req, res){
    res.send('halo ini router petshop');
});

module.exports = { petRouter };


