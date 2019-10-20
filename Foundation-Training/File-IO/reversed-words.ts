'use strict';

function reversingWordsAndLines(): void {
    let content: string;
    const fs = require('fs');
    let lines: string[] = [];
    let reversedLines: string[] = [];
    let characterParts: string[] = [];
    let reversedCharacters: string;
    let correctedtext: string;

    try {
        content = fs.readFileSync("reversed-words.txt", 'utf8');
    }

    catch (error) {
        console.log("the file name is not correct!!!!!")
        process.exit();
    }

    lines = content.split("\r\n");
    for (let i: number = 0; i < lines.length; i++) {
        characterParts = lines[i].split("");
        characterParts.reverse();
        reversedCharacters = characterParts.join("");
        reversedLines.push(reversedCharacters);
    }

    correctedtext = reversedLines.join("\r\n");
    if (correctedtext.length > 0) {
        try {
            fs.writeFileSync('corrected-reversed-words.txt', correctedtext, 'utf8');
        }
        catch (e) {
            console.log(e);
            process.exit;
        }
    }
}

reversingWordsAndLines();