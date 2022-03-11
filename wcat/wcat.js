// 1st Command  ->  node wcat.js filepath  ->  displays content of a file in terminal
// 2nd Command  ->  node wcat.js filepath1 filepath2 filepath3 ...  ->  displays content of all the files in terminal in concatination in the given order 

// Process to take input from user in nodeJS  ->  now write in terminal  ->  node wcat.js I took input. 
// let input = process.argv;
// console.log(input); 

// node wcat.js f1.txt  ->  we don't want to get node wcat.js just the input
const fs = require("fs");
let inputArr = process.argv.slice(2);  // this will slice out 0th and 1st index and print from 2nd
// console.log(input);

// let optionArr = [];
let filesArr = [];     // Files Array   ->  This is to capture all files  ->  example : someone wants 6 files
//console.log(filesArr);    // output: []
// Placed files path in filesArr 
for (let i=0; i < inputArr.length /* Suppose length of number of files is 3 then loop will be from 0-2 */; i++) {
    filesArr.push(inputArr[i]);   // filesaArr will be filled with inputArr
}
// console.log("Files to be read are: " + filesArr);     // output: Files to be read are: file1,file2,file3
 
// check if all the files are present or exists
for (let i = 0; i < filesArr.length; i++) {
    let doesExist = fs.existsSync(filesArr[i]);    // Returns true if the path exists, false otherwise.
    if (!doesExist) {
        console.log("Files does not Exist ");
        return;
    }
}

// Content reading and appending starts
let content = "";
for (let i = 0; i < filesArr.length; i++) {
    let fileContent = fs.readFileSync(filesArr[i]);
    content += fileContent + "\n";    // \n -> to append next files content from next line
} 
console.log(content);