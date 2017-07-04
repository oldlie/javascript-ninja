const {assert} = require("../assert");

function Ninja() {
    this.swung = true;
    this.swingSword = function () {
        console.log("Instance ss");
        return !this.swung;
    };
};

var ninja = new Ninja();

Ninja.prototype.swingSword = function () {
    console.log("Prototyep ss");
    return this.swung;
};

assert(ninja.swingSword(), "Called the instance method, not the prototype method.");