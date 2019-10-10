'use strict';

export class Animal {

    protected _ownerName: string;
    protected _isHealthy: boolean;
    protected _healCost: number;
    protected _animalName: string;

    constructor(animalName: string = "animal") {
        this._animalName = animalName;
    }
    public heal() {
        this._isHealthy = true;
    }
    public isAdoptable(): boolean {
        if (this._isHealthy) {
            return true;
        }
    }
    toString() {
        if (this._isHealthy == false) {
            console.log(this._animalName + " is not healty (" + this._healCost + ") €, and not adoptable");
        } else {
            console.log(this._animalName + " is healthy, and adoptable ")
        }
    }

}
