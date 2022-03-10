//os  ->  Operating System Module  ->  This module provides function that you can use to retrieve information from the underlying os and interact with it.
const os = require("os");

//returns the underlying architecture
let mySystemArch = os.arch();  // Tells about system architecture
//console.log(mySystemArch);

// returns information on the cpus
let myCpuInfo = os.cpus();
//console.log(myCpuInfo); 

// returns the host name of the operating system as a string
let hostName = os.hostname();
//console.log(hostName); 

//Returns an object containing network interfaces that have been assigned a network address
let networkInfo = os.networkInterfaces();
//console.log(networkInfo);

// Returns the operating system as a string.
console.log(os.release());