"use strict";

function addingTwoMatrises(matris1: number[][], matris2: number[][]) {

    let newMatris: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    for (let i = 0; i < matris1.length; i++) {
        for (let j = 0; j < matris2.length; j++) {
            newMatris[i][j] = matris1[i][j] + matris2[i][j]
        }
    }
    return newMatris;
}

console.log(addingTwoMatrises([[5, 2, 3], [6, 8, 1], [0, 2, -3]], [[6, 8, 2], [1, 3, 0], [2, 8, 5]]));

