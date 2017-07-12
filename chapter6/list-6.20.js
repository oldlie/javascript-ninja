const {assert} = require("../assert");

(function () {
    var initializing = false,
        superPattern = /xyz/.test(function () { xys; }) ? /\b_super\b/ : /.*/;

    Object.subClass = function (properties) {

        var _super = this.prototype;

        // 初始化超类
        initializing = true;
        var proto = new this();
        initializing = false;

        for (var name in properties) {
            proto[name] = typeof properties[name] == "function" &&
                typeof _super == "function" &&
                superPattern.test(properties[name]) ? 
                (function(name, fn) {
                    return function() {
                        var tmp = this._super;

                        this._super = _super[name];

                        var ret = fn.apply(this, arguments);
                        this._super = tmp;

                        return ret;
                    };
                })(name, properties[name]) : 
                properties[name];
        }

        function Class() {
            if (!initializing && this.init) {
                this.init.apply(this, arguments);
            }
        };

        Class.prototype = proto;
        Class.constructor = Class;
        Class.subClass = arguments.callee;

        return Class;
    };
})();

var Person = Object.subClass({
    init: function(isDancing) {
        this.isDancing = isDancing;
    },
    dance: function() {
        return this.isDancing;
    }
});

var Ninja = Object.subClass({
    init: function () {
        this._super(false);
    },
    dance: function () {
        return this._super();
    },
    swingSword: function () {
        return true;
    }
});

var person = new Person(true);
assert(person.dance(), "The person is dancing.");

var ninja = new Ninja();
assert(ninja.swingSword(), "The sword is swing.");
assert(!ninja.dance(), "The ninja is not dancing.");

assert(person instanceof Person, "person is a Person.");
assert(ninja instanceof Ninja && ninja instanceof Person, "ninja is a Ninja and a Person.");