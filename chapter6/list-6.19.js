const {assert} = require("../assert");

function User(first, last) {
    if (!(this instanceof arguments.callee)) {
        return new User(first, last);
    }
    this.name = `${first} ${last}`;
    console.log(this.name);
};

var name = 'Rukia';

var user = User('Ichigo',  'Kurosaki');

assert(name == 'Rukia', 'Name was set to Rukia');
assert(user instanceof User, "User instantiated");
assert(user.name == "Ichigo Kurosaki", "User name correctly assgined.");