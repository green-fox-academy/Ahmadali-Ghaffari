'use strict';

declare function require(path: string): any;
export { };
const fs = require('fs');

let numbers: number[] = [1, 2, 3, 4, 5];

numbers.push(6, 7);

//console.log(numbers);


let content: string = '';
let content2: string = "";
//content= fs.readFileSync('Apprentice.csv','utf8');

//console.log(content);

try {
    //open a network connection

    content = fs.readFileSync('Apprentice.csv', 'utf8');
    console.log("this will be printed");
    console.log("See the content of the FILE:" + content);

    content2 = fs.readFileSync('Apprentice.csv', 'utf8');


} catch (Error) {

    console.log("Please provide the correct name of the file!");


} finally {

    console.log('------------------------I AM IN THE FINALLY PART----------------------------')
    //close the network connection
}


let lines: string[] = content.split("\r\n");

console.log(lines);

//console.log(lines[0]);

//for (let i = 0; i < lines.length; ++i) {
//
//    console.log(lines[i]);
//
//}

//lines.forEach(line =>{console.log(line)})

//console.log(content2);
let names: string[] = [];


for (let line of lines) {


    let parts = line.split(',');



    console.log(parts);

    console.log('Name: ' + parts[0]);
    let examResult: number = parseInt(parts[3]);

    try {
        printExamResults(examResult);
    }
    catch (error) {
        console.log('Go home and try again');
    }

    console.log();

    names.push(parts[0]);
}
fs.writeFileSync('ApprenticeNames.txt', names.join(';'), 'utf8');       
fs.writeFileSync('ApprenticeNames2.txt', names, 'utf8');
fs.writeFileSync('ApprenticeNames3.txt', names.join('-'), 'utf8');




function printExamResults(examResult: number) {
    if (examResult < 0) {
        throw 'The exam result is not correct, it suppose to be at least 0';
    }

    console.log('Exam result: ' + examResult);
}

