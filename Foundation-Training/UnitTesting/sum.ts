'use strict';

export class Summation {
    public sum(integerList: number[]): number {
        let total: number = 0;
        integerList.forEach(function (element) {
            total = total + element;
        });
        return total;
    }
}
