'use strict'

import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;


}


function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

console.log(dominoes);

for (let i: number = 0; i < 5; i++) {

    let check = dominoes[i].values[1];
    console.log(check);
    console.log(dominoes[i + 1].values[0]);
    let j: number = i;

    while (check != dominoes[j + 1].values[0]) {

        let checker :boolean=true;
        checker = check == dominoes[j + 1].values[0];

       // if (check == dominoes[j + 1].values[0]) {
if(checker){
            let x: number;
            let y: number;

            x = dominoes[j + 1].values[0];
            y = dominoes[j + 1].values[1];

            dominoes[i + 1].values[0] = x;
            dominoes[i + 1].values[1] = y;

        }


        check = dominoes[j + 1].values[1];

        if (j < 4) {

            ++j;
        }
        console.log(j);

        if (j == 4) {

            break;
        }


    }
}
console.log(dominoes);





