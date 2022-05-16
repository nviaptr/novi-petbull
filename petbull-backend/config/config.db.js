'use strict'

// install mysql
const mysql = require('mysql')

// import connect to database 
const DBConfig = require('./config.db')

// create connect to database 
const connectDB = mysql.createConnection({
    host: DBConfig.HOST,
    port: DBConfig.PORT,
    user: DBConfig.USER,
    password: DBConfig.PASSWORD,
    database: DBConfig.DB,
})

// create connect mysql
connectDB.connect(err => {
    if (err) throw err ;
    console.log('database ini connect yess', err)
})

// export modul
module.exports = connectDB;