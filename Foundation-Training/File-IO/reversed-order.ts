'use strict';

function reversingOrder(): void {

    let content: string;
    let lines: string[] = [];
    let reversedText: string;


    const fs = require('fs');
    try {
        content = fs.readFileSync("reversed-order.txt", 'utf8');
    }

    catch (error) {
        console.log("the file name is not correct!!!!!")
        process.exit();
    }
    lines = content.split("\r\n")
    lines = lines.reverse();
    reversedText=lines.join("\r\n")
    if (reversedText.length > 0) {
        try {
            fs.writeFileSync('decryptedReversedOrderText.txt',reversedText, 'utf8');
        }
        catch (e) {
            console.log(e);
            process.exit;
        }
    }

}
reversingOrder();