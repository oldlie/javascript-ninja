const {assert} = require("../assert");

function Ninja() {};

var ninja = new Ninja();

assert(typeof ninja == "object", "The type of the instance is object.");
assert(ninja instanceof Ninja, "instanceof identifies the constructor.");
assert(ninja.constructor == Ninja, "The ninja object was created by the Ninja function.");