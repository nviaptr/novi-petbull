// 'use strict'

// /**
//  * sql init from config
//  * class book init
//  */

// const sql = require('../config/db');

// class User {
//     constructor (
//         id_user,
//         username,
//         password,
//         email,
//         telepon,
//         alamat
//     ) {
//         this.id_user = id_user;
//         this.username = username;
//         this.password = password;
//         this.email = email;
//         this.telepon = telepon;
//         this.alamat = alamat;
//     }

//     static showAllUser(result) {
//         let sqlQuery = ` SELECT * FROM user`;
//         sql.query(sqlQuery, (err, res) => {
//             if (err) {
//                 console.log('This is Err => /n', err);
//                 result(err, null);
//             } else {
//                 let rawData = res;
//                 let users = [];
//                 let user;
//                 rawData.forEach((eachData) => {
//                     user = new User (
//                         eachData.id_user,
//                         eachData.username,
//                         eachData.password,
//                         eachData.email,
//                         eachData.telepon,
//                         eachData.alamat
//                     );
//                     users.push(user);
//                 });
//                 console.log('result', users);
//                 result(null, users);
//             }
//     });
//     }
// }
