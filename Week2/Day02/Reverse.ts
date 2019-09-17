'use strict';

let text: string= "ahmad";
let reversedArray : string[] = [];
let stringArray : string[] = [];




function Reverse( B : string) : string [] {

    stringArray= B.split("");

console.log(text.length);

    let i = stringArray.length;
    let v : number =0;
    let j :number =0;

    for (i;i>v;i--){

        reversedArray[j] = stringArray[i-1];
        
        j=j+1;


    }

    console.log(reversedArray.length);
    return reversedArray;




    }

    console.log(Reverse(text));



