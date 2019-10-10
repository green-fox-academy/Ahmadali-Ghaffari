'use strict';

function mostProductiveYear(fileName: string): number {

    try {
        const fs = require('fs');
        let content: string = fs.readFileSync(fileName, 'utf8');
    } catch{
        console.log("the file name is not correct !!!")
    }
    const fs = require('fs');
    let content: string = fs.readFileSync(fileName, 'utf8');
    let lines: string[] = content.split('\r\n');
    //console.log(lines);
    let yearArray: string[] = [];
    let yearOccured = new Object;
    let maxKey: number = 0;
    let max: number = 0;
    let tempArray:string[];

    for (let i = 0; i < lines.length; i++) {
        // two2dLineArray.push(lines[i].split(','))
      tempArray = lines[i].split(',');
      yearArray.push(tempArray[2]);
    }
   
    for (let k = 0; k < yearArray.length; k++) {
        if (yearOccured.hasOwnProperty(yearArray[k])) {
            yearOccured[yearArray[k]] += 1
        } else {
            yearOccured[yearArray[k]] = 1
        }
    }
    Object.keys(yearOccured).forEach(function (element) {
        if (yearOccured[element] >= max) {
            max = yearOccured[element];
            maxKey = parseInt(element);
        }
    });
    return maxKey
}

console.log(mostProductiveYear("movie.txt"));
