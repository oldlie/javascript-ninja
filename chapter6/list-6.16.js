const {assert} = require("../assert");

function User(first, last) {
    this.name = `${first} ${last}`;
};

let user = User('Ichigo', 'Kurosaki');

assert(user, "User instantiated.");
assert(user.name == "Ichigo Kurosaki", "User name correctly assinged.");