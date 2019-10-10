'use strict';

function rotateMatris(matrix: number[][]) {

    matrix = matrix.reverse();
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    return matrix;
}
console.table([[1, 7, 9], [4, 0, 6], [3, 5, 8]]);
console.table(rotateMatris([[1, 7, 9], [4, 0, 6], [3, 5, 8]]));