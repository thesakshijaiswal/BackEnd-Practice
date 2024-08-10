const peter = "peter";
const sam = "sam";
const sayHi = require("./utils");
sayHi(peter);
sayHi(sam);

//global variables in node: dirname, filename, require, module
console.log(__dirname);
console.log(__filename)