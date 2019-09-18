'use strict';

let newString : string= "ahmadali";
//let splitArray : string[]= newString.split("");

//let reversedArray :string[]= splitArray.reverse();

//console.log(reversedArray);

////////////////////////////////////////////////

function reversingFunction (input : string):string []{


    let splitArray : string[]= input.split("");

let reversedArray :string[]= splitArray.reverse();

return reversedArray;

}

console.log(reversingFunction(newString));
