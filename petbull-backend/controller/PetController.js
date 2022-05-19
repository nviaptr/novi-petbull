'use strict'

/**
 * class declaration
 * write static method
 * add model to controller
 * module export class
 */

const { Pet } = require('../model/Pet');

class petController {
    static Tes(req, res) {
        Pet.showAllPets((err, data) => {
            if (err) {
                console.log('Controller error');
            } else {
                res.json({
                    title :'API Backend Petshop',
                    message: 'Koleksi Petshop',
                    status: 100,
                    data,
                });
            }
        });
    }

    // static FindPetById(req, res) {
    //     // console.log('ini id', req.params.id);
    //     const { id } = req.params;
    //     Pet.showPetById(id, (err, data) => {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             res.json({
    //                 title: 'API Backend Petshop',
    //                 message: 'Koleksi Petshop',
    //                 status: 100,
    //                 data,
    //             });
    //         }
    //     });
    // }

    // static AddNewPet(req, res) {
    //     let payload = req.body;
    //     payload.pet_price = +req.body.pet_price;
    //     payload.pet_stock = +req.body.pet_stock;

    //     // check if any empty value

    //     for (const each in payload) {
    //         if (!payload[each]) {
    //             payload[each] = null;
    //         }
    //     }
    //     console.log(payload, 'ini adalah payload');

    //     Pet.createPet(payload, (err, data) => {
    //         if (err) {
    //             console.log('Controller error');
    //         } else {
    //             res.json({
    //                 title: 'API Backend Petshop',
    //                 message: 'Koleksi Petshop',
    //                 status: 100,
    //                 data,
    //             });
    //         }
    // });
    // }

    // static UpdatePet(req, res) {
    //     let payload = req.body;
    //     payload.pet_price = +req.body.pet_price;
    //     payload.pet_stock = +req.body.pet_stock;

    //     // check if any empty value

    //     for (const each in payload) {
    //         if (!payload[each]) {
    //             payload[each] = null;
    //         }
    //     }
    //     console.log(payload, 'ini adalah payload');

    //     let id = req.params.id;

    //     Pet.updatePetById(id, payload, (err, data) => {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             res.json(data);
    //         }
    //     });
    // }
}

module.exports = {
    petController,
};