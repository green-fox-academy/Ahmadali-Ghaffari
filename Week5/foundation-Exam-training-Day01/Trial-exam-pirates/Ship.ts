'use strict';
import { Pirate } from "./Pirates"

class Ship {
    private listOfPirates: Pirate[] = [];
    private captainAdded: boolean = false;
    private poorPirates: Pirate[];

    constructor() {



    }
    public addingPiratesToShip(pirate: Pirate): void {

        if (pirate._isCaptain == true && this.captainAdded == false) {
            this.listOfPirates.push(pirate);
            console.log("Captain is Added!");
            this.captainAdded = true;
        } else if (pirate._isCaptain == false) {
            this.listOfPirates.push(pirate);
            console.log("Pirate is Added!!");
        } else if (pirate._isCaptain == true && this.captainAdded == true) {
            throw new Error('Captain is Already Added !!!!!!!!');
        }
    }
    public getPoorPirates(): Pirate[] {
        for (let i: number = 0; i < this.listOfPirates.length; i++) {
            if (this.listOfPirates[i]._hasWoodenLeg && this.listOfPirates[i]._amountOfGold < 15) {
                this.poorPirates.push(this.listOfPirates[i]);
            }
            return this.poorPirates;
        }
    }
    public getGolds(): number {
        let sumOfGolds: number = 0;
        for (let i: number = 0; i < this.listOfPirates.length; i++) {
            sumOfGolds += this.listOfPirates[i]._amountOfGold
        }
        return sumOfGolds;
    }
    public lastDayOnTheShip(): void {
        for (let i: number = 0; i < this.listOfPirates.length; i++) {
            this.listOfPirates[i].party();
        }
    }
    public prepareForBattle(): void {
        for (let j: number = 0; j < this.listOfPirates.length; j++) {
            for (let k: number = 0; k < 5; k++) {
                this.listOfPirates[j].work();
            }
        }
        this.lastDayOnTheShip();
    }
}
