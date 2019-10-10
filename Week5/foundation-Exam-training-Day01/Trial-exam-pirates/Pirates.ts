'use strict';
export class Pirate {

    protected _name: string;
    public _amountOfGold: number;
    protected _healthPoints: number;
    public _isCaptain: boolean;
    public _hasWoodenLeg: boolean;

    constructor(name: string, isCaptain: boolean) {
        this._healthPoints = 10;
        this._name = name;
        this._isCaptain = isCaptain;



    }
    public work(): void {
        if (this._isCaptain) {
            this._amountOfGold += 10;
            this._healthPoints -= 5;
        } else {
            this._amountOfGold = +1;
            this._healthPoints -= 1;
        }
    }
    public party(): void {
        if (this._isCaptain) {
            this._healthPoints += 10;
        } else {
        }
        this._healthPoints += 1;
    }
    public toString(): string {
        if (this._hasWoodenLeg) {
            return "Hello, I'm Jack. I have a wooden leg and 20 golds.";
        } else {
            return "Hello, I'm Jack. I still have my real legs and 20 golds.";
        }
    }
}