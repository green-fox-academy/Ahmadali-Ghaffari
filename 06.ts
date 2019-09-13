'use strict';

let c: number = 123;
let credits: number=47;
let isBonus: Boolean=false;

if (credits>=50 && isBonus == false){

    c=c-2;

}else if(credits <50 && isBonus == false){

    c=--c;

}else if (isBonus == true){

    c = c;

}

console.log(c);

