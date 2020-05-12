const fs = require('fs');
const util = require('util');

// promisify - Transforma e retorna uma função antiga com CALLBACK para uma nova com PROMISE.
class Reader {

    constructor() {
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filepath) {
        try {
            return await this.reader(filepath, {encoding: 'utf-8'});
        } catch(err) {
            return undefined;
        }
    }
}

module.exports = Reader;