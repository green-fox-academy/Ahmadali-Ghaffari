'use strict'

const fs = require('fs');

let content: string = '';
let parts: string[] = [];

content = fs.readFileSync('my-file.txt', 'utf8');
let lines: string[] = content.split('\n');
let lineMatris: string[][] = [];


for (let i = 0; i < lines.length; i++) {

    let line: string;

    lineMatris.push(lines[i].trim().split(','));

}

try {

    //  console.log(content);
    //console.log("=======================================")

    //console.log("=================THE PARTS================")
    //console.log(parts);
}

finally {

    console.log('');

}

//console.log(lineMatris);

let printingExtraLine: string[] = ['The Knight2', 'chama', 'student', 'JavaScript','\r\n'];
printingExtraLine.join( ' ');


fs.appendFileSync('my-file.txt', printingExtraLine, 'utf8');
    
