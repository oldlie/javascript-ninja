const {assert} = require("../assert");

Object.prototype.keys = function () {
    let keys = [];
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
};

let obj = { a: 1, b: 2, c: 3 };

assert(obj.keys().length === 3, 'There are three properties in this object.');