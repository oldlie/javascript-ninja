const {assert} = require("../assert"); 

function Person() {};
Person.prototype.dance = function () {};

function Ninja() {};
Ninja.prototype = new Person();

var ninja = new Ninja();
assert(ninja instanceof Ninja, "ninja receives functionality from Ninja prototype.");
assert(ninja instanceof Person, "... and the Person prototype.");
assert(ninja instanceof Object, "... and the Object protottype.");
assert(typeof ninja.dance == "function", "... and can dance");