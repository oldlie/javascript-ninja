const {assert} = require("../assert");

function Ninja() {};

var ninja = new Ninja();
var ninja2 = new ninja.constructor(); // 注意别丢了 new 关键字

assert(ninja2 instanceof Ninja, "It's a Ninja.");
assert(ninja != ninja2, "But not the same Ninja.");