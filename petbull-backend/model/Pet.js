'use strict'

/**
 * sql init from config
 * class book init
 */

const sql = require('../config/db');

class Pet {
    constructor (
        id_pet,
        nama_pet,
        umur_pet,
        jenis_pet

    ) {
        this.id_pet = id_pet;
        this.nama_pet = nama_pet;
        this.umur_pet = umur_pet;
        this.jenis_pet = jenis_pet;
    }
    static showAllPets(result) {
        let sqlQuery = ` SELECT * FROM pet`;
        sql.query(sqlQuery, (err, res) => {
            if (err) {
                console.log('This is Err => /n', err);
                result(err, null);
            } else {
                let rawData = res;
                let pets = [];
                let pet;
                rawData.forEach((eachData) => {
                    user = new User (
                        eachData.id_pet,
                        eachData.nama_pet,
                        eachData.umur_pet,
                        eachData.jenis_pet
                    );
                    pets.push(pet);
                });
                console.log('result', pets);
                result(null, pets);
            }
    });
    }
}

module.exports = {
    Pet,
};
