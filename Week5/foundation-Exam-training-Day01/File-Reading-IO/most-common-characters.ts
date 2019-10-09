'use strict';

function twoMostCommonCharaters(fileName: string): String {
    const fs = require('fs');
    let content: string = fs.readFileSync(fileName, 'utf8');
    let line: string[] = content.split('');
    let max: number = 0;
    let maxKey: string = '';
    let characterOccured = new Object;

    for (let i = 0; i < line.length; i++) {
        if (characterOccured.hasOwnProperty(line[i])) {
            characterOccured[line[i]] += 1;
        } else {
            characterOccured[line[i]] = 1;
        }
    }
    Object.keys(characterOccured).forEach(function (element) {
        if (characterOccured[element] >= max) {
            max = characterOccured[element];
            maxKey = element;
        }
    });
    try {
        let content: string = fs.readFileSync(fileName, 'utf8');
    } catch (error) {
        console.log("The file name is not correct!!")
    }
    return maxKey;
}

console.log(twoMostCommonCharaters("file1-forTrialExam.txt"));

