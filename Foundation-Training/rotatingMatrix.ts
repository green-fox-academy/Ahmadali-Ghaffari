'use strict';

export function rotatingMatrix(matrix: number[][]): number[][] {

    let rotatedMatrix: number[][] = [];

    for (let i: number = 0; i < matrix.length; i++) {
        let line: number[] = [];

        for (let j: number = matrix.length; j > 0; j--) {
            line.push(matrix[j - 1][i]);
        }
        rotatedMatrix.push(line);
    }
    return rotatedMatrix;
}

console.table(rotatingMatrix([[2, 5, 7, 5, 8, 4], [3, 1, 4, 4, 4, 7], [6, 3, 8, 7, 7, 5], [3, 1, 4, 5, 9, 3], [3, 4, 6, 8, 2, 6], [4, 5, 5, 4, 3, 6]]));