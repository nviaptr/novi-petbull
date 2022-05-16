'use strict'

/**
 * Class declaration
 * write static method
 * module export class
 */

class Controller {
    static Homepage(req, res) {
        res.send('Hello dari Controller');
    }
}

module.exports = {
    Controller,
};