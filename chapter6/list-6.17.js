const {assert} = require("../assert");

function User(first, last) {
    this.name = `${first} ${last}`;
    console.log(this.name);
};

var name = 'Rukia';

var user = User('Ichigo',  'Kurosaki');

assert(name == 'Rukia', 'Name was set to Rukia'); 
console.log('name:', name);
// 在Node中测试通过了，和书上不一样。Node的this和浏览器中还是不一样的。
// 浏览器中是不会通过的。