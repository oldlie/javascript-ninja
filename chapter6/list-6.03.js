const {assert} = require("../assert");

function Ninja() {
    this.swung = true;
};

var ninja = new Ninja();

Ninja.prototype.swingSword = function () {
    return this.swung;
};

assert(ninja.swingSword(), "Method exists, even out of order.");