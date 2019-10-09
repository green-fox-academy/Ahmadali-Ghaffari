'use strict'

function swearWords(fileName: string) {

    const fs = require('fs');
    let content: string = fs.readFileSync(fileName, 'utf8');
  
    //let line: string[] = content.split(/\W+/);
    let line: string[] = content.split(" ");

    console.log(line);
    let wordsOccured = new Object;
    let badWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'Cunt'];

    for (let i = 0; i < badWords.length; i++) {
        if (wordsOccured.hasOwnProperty(badWords[i]) == false) {
            wordsOccured[badWords[i]] = 0;
        }
    }
    for (let j = 0; j < line.length; j++) {
        if (wordsOccured.hasOwnProperty(line[j]) == true) {
            wordsOccured[line[j]] += 1
        }
    }

    console.log(wordsOccured);
}
swearWords("File2-Trial-swearWords.txt");