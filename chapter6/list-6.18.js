const {assert} = require("../assert");

function Test() {
    return this instanceof arguments.callee; // node 环境也是可以运行的。
};

assert(!Test(), "We did not instantiate, so it returns false.");
assert(new Test(), "We did instantiate, returning true.");