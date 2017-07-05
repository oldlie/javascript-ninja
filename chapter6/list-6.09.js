const {assert} = require("../assert");

//if (!Array.prototype.forEach) { 使用 node 测试时自带 forEach 的
    Array.prototype.forEach = function (callback, context) {
        console.log("my forEach");
        for (let i = 0; i < this.length; i++) {
            callback.call(context || null, this[i], i, this);
        }
    };
//}

["a", "b", "c"].forEach(function(value, index, array) {
    assert(value, "Is position " + index + " out of " + (array.length - 1));
});