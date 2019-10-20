'use strict';

function wordFrequencyMethod(frequency: number): void {
    let content: string;
    let lines: string[] = [];
    let parts: string[] = [];
    let allWords: string[] = [];
    let occuredWords = new Object;
    let selectedWords: string[] = [];
    const fs = require('fs');

    try {
        content = fs.readFileSync("input.txt", 'utf8');
    }

    catch (error) {
        console.log("the file name is not correct!!!!!")
        process.exit();
    }

    lines = content.split("\r\n");
    lines.forEach(function (element) {
        parts = element.split(" ");
        for (let i: number = 0; i < parts.length; i++) {
            allWords.push(parts[i]);
        }
    });

    for (let j: number = 0; j < allWords.length; j++) {
        if (occuredWords.hasOwnProperty(allWords[j])) {
            occuredWords[allWords[j]] += 1;
        } else {
            occuredWords[allWords[j]] = 1;
        }
    }

    Object.keys(occuredWords).forEach(function (element) {
        if (occuredWords[element] == frequency) {
            selectedWords.push(element);
        }
    });

    if (selectedWords.length > 0) {
        try {
            fs.writeFileSync('output.txt', selectedWords.join(','), 'utf8');
        }
        catch (e) {
            console.log(e);
            process.exit;
        }
    }
}

wordFrequencyMethod(2)