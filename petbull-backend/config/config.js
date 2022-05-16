'use strict'

// install dotenv
require('dotenv').config

// create connect to database 
module.exports = {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
}