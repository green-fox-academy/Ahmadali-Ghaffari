
'use strict';
export class Pirate {

    private _name: string;
    private _drinkSomeRum: boolean = false;
    private _death: boolean = false;

    constructor(name?: string) {
        this._name = name;
    }

    public drinkSomeRum() {
        if (this._death == false) {
            this._drinkSomeRum = true;
        } else {
            console.log("he's dead.");
        }
    }

    public howsItGoingMate() {
        if (this._drinkSomeRum && this._death == false) {
            for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
                console.log("Pour me anudder!");
            }
        } else if (this._drinkSomeRum == false && this._death == false) {
            console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?")
        } else {
            console.log("he's dead.")
        }
    }

    public die() {
        this._death = true;
    }
}

/*let pirate = new Pirate;
pirate.die();
pirate.drinkSomeRum();
pirate.howsItGoingMate();
*/