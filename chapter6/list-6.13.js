const {assert} = require("../assert");

Number.prototype.add = function (num) {
    return this + num;
};

let n = 5;
assert(n.add(3) === 8, "It works when the number is a variable.");
assert((5).add(3) === 8, "Also works if a number wrapped in parentheses.");
//assert(5.add(3) === 8, "What about a simple literal?"); 直接抛异常的。