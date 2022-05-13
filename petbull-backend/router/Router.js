'use strict';

// install
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ini sayaaa')
})

module.exports = router ;