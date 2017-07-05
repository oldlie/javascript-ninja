const {assert} = require("../assert");

Object.prototype.keys = function () {
    let keys = [];
    for (let pro in this){
        console.log(`will push property: ${pro}`);
        keys.push(pro);
    } 
    return keys;
};

let obj = { a: 1, b: 2, c: 3 };

assert(obj.keys().length === 3, 'There are three properties in this object.');

console.log("Actual properties count:", obj.keys().length);