'use strict';

function isSymmetric(matrix: number[][]): boolean {
    let transposeMatrix: number[][] = [];

    for (let i: number = 0; i < matrix.length; i++) {
        let line: number[] = [];

        for (let j: number = 0; j < matrix.length; j++) {
            line.push(matrix[j][i]);
        }
        transposeMatrix.push(line);
    }
    console.table(transposeMatrix)

    if (transposeMatrix == matrix) {
        return true;
    } else {
        return false;
    }
}

console.log(isSymmetric([
    [1, 0, 2],
    [0, 2, 2],
    [2, 2, 5]]));