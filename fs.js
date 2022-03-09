//fs  ->  file system module
// Synchronous API
const fs = require("fs");  // require  ->  require takes module in a string  ->  fs is in built module whose path is not defined because it is inside require
const abc = require("./f1.txt");  //same folder ki acces skrni ho toh
//const abc = require("../js/closures");   // dusre folder se file access krni ho toh

// let res = fs.appendFileSync("f1.txt", "Hello I am F2 File.");// File ko append krta h  ->  File nhi h toh create krta h
// fs.appendFileSync("f1.txt", "You Guys are smart.");
// console.log(res);

// // let data = fs.readFileSync("f1.txt");  // Returns content of the path
// // console.log(typeof(data));    // data is a type of buffer(Encoding/Decoding -> ) object  
// // console.log(data);   // This buffer code is understood by just computer so we have to complete it into string
// // console.log(data + "");    // Converted buffer object into string
// let data = fs.readFileSync("f1.txt","utf-8");    // utf-8 -> Pdh k lekr aao aur esi language m odhna jo hum bhi smjh paye
