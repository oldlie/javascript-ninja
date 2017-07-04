function assert(value, desc) {
    var result = value ? "Pass" : "Fail";
    console.log(`${result} ======> ${desc}`);
};

module.exports.assert = assert;