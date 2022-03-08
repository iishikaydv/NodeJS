//fs  ->  file system module
// Synchronous API
const fs = require("fs");  // require  ->  require takes module in a string  ->  fs is in built module whose path is not defined because it is inside require

let res = fs.appendFileSync("f1.txt", "Hello I am F2 File.");// File ko append krta h  ->  File nhi h toh create krta h
fs.appendFileSync("f1.txt", "You Guys are smart.");
console.log(res);