
"use strict";
import { Pirate } from "./Pirate"

class Ship {
    public _crew: Pirate[] = []
    public _captain: Pirate;
    private _win: boolean = false;
    private _calculatedScore: number;
    private _numberOfPirates: number;
    private _countPirateState: number = 0;
    private _cunsumedRumCaptain: number = 4;

    public fillship() {
        this._captain = new Pirate("The Dark King");
        this._numberOfPirates = Math.floor(Math.random() * 20);
        for (let i: number = 0; i < this._numberOfPirates; i++) {
            this._crew.push(new Pirate("Pirate" + i));

            if (i == 1) {
                this._crew[i].drinkSomeRum();
            } else if (i == 4) {
                this._crew[i].howsItGoingMate();
            } else if (i == 7) {
                this._crew[i].die();
            } else if (i == 10) {
                this._crew[i].die();
            }
        }
    }
    public battle(ship: Ship): boolean {
        for (let i = 0; i < this._numberOfPirates; i++) {
            if (this._crew[i]._state == "alive") {
                this._countPirateState += 1;
            }
        }

        for (let j = 0; j < ship._numberOfPirates; j++) {
            if (ship._crew[j]._state == "alive") {
                ship._countPirateState += 1;
            }
        }
        this._calculatedScore = this._countPirateState - this._cunsumedRumCaptain;
        ship._calculatedScore = ship._countPirateState - ship._cunsumedRumCaptain;

        if (this._calculatedScore > ship._calculatedScore) {
            return this._win = true;
        } else {
            return this._win = false;
        }
    }
}
let ship = new Ship;
ship.fillship();
//ship._captain.drinkSomeRum();
//ship._captain.drinkSomeRum();
//ship._captain.drinkSomeRum();
//ship._captain.die();
//console.log(ship);
let otherShip = new Ship;
console.log(ship.battle(otherShip));
