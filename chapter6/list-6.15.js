const {assert} = require("../assert");

function MyArray() {};
MyArray.prototype.length = 0;

(function () {
    let methods = ['push', 'pop', 'shift', 'unshift', 'slice', 'splice', 'join'];
    
    for (let i = 0; i < methods.length; i++) (function (name) {
        MyArray.prototype[name] = function () {
            return Array.prototype[name].apply(this, arguments);
        };
    })(methods[i]);
})();

let mine = new MyArray();
mine.push(1,2,3);

assert(mine.length ===3, "All the items are in  our sub-classed array.");
assert(!(mine instanceof Array), "We are not subclassing Array, though.");