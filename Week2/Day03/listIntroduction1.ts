
'use strict';


let names: string[] = [];
let names2: string[] = ["ahmad", "viktor", "Sany", "Jhony"];

names.push("William");
names.push("John");
names.push("Amanda");



let printedLength: number = names.length;
let printedLength2: number = names2.length;



console.log(printedLength);
console.log(printedLength2);

console.log(names);

if (names.length == 0) {


    console.log("The List is Empty");


} else {

    console.log("The list is not Empty");


}

console.log(names[2]);


function PrintingFunction(value: string){


    console.log(value);


}
names.forEach(PrintingFunction);
