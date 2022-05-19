'use strict';

// install
const express = require('express');
const { Controller } = require('../controller/Controller');
const router = express.Router();
const { petRouter } = require('./petRouter');
// const { userRouter } = require('./userRouter');

router.get('/', Controller.Homepage);
router.use('/pet', petRouter);
// router.use('/user', userRouter);




module.exports = { router };