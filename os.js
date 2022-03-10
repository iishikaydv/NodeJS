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
//console.log(os.release());

// Returns a string identifying the operating system platform. The value is set at compile time.
console.log(os.platform());  

// Returns the operating system name as returned by uname(3).
console.log(os.type());  

// Returns the total amount of system memory in bytes as an integer.
// console.log(os.totalmem());

// // Returns the system uptime in number of seconds.
// console.log(os.uptime());
let uptimeInMin = os.uptime() / 3600;
// console.log(uptimeInMin);

// // Returns information about the currently effective user.
// console.log(os.userInfo());
