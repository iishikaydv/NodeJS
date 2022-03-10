//os  ->  Operating System Module  ->  This module provides function that you can use to retrieve information from the underlying os and interact with it.
const os = require("os");

//returns the underlying architecture
let mySystemArch = os.arch();  // Tells about system architecture
console.log(mySystemArch);