'use strict'
import { Animal } from "./Animal"

class Animal_Shelter {

    protected _budget: number = 50;
    protected _animals: Animal[] = [];
    protected _adoptersName: string[] = [];
    protected _pairedList: string[] = [];

    public rescue(Animal): number {
        this._animals.push(Animal);
        let sizeOfList: number = this._animals.length;
        return sizeOfList;
    }

    public heal() {
        for (let i: number = 0; i < this._animals.length; i++) {
            if (this._animals[i]._isHealthy == false) {
                if (this._animals[i]._healCost < this._budget) {
                    this._animals[i].heal();
                    return 1;
                } else {
                    return 0;
                }
            }
        }
    }

    public addAdopter(name: string): void {
        this._adoptersName.push(name);
    }

    public findNewOwner() {
        if (this._adoptersName.length > 0 && this._animals.length > 0 && this._animals.length == this._adoptersName.length) {
            for (let i = 0; i < this._animals.length; i++) {
                let randomNameNumber: number = Math.floor(Math.random() * this._adoptersName.length);
                let randomAnimalNumber: number = Math.floor(Math.random() * this._adoptersName.length);
                this._pairedList.push(this._animals[randomAnimalNumber]._name);
                this._pairedList.push(this._adoptersName[randomNameNumber]);
                this._adoptersName.splice(randomNameNumber, 1);
                this._animals.splice(randomAnimalNumber, 1);
            }
        }
    }

    public earnDonation(amount: number): number {
        this._budget = this._budget + amount;
        return this._budget;
    }

    public toString() {
        console.log("Budget:" + this._budget + "€");
        console.log("There are " + this._animals.length + " animal(s) and " + this._adoptersName.length + "potential adopter(s)");
        for (let i: number = 0; i < this._animals.length; i++) {
            if (this._animals[i]._isHealthy == false) {
                console.log(this._animals[i]._name + " is not healthy (healing would cost: " + this._animals[i]._healCost + " €) and not adoptable");
            } else {
                console.log(this._animals[i]._name + "is healthy and adoptable");
            }
        }
    }
}