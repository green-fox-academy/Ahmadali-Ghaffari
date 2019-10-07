
import { Sharpie } from "./Sharpie"

'use strict';

class SharpieSet {
    private _sharpie: Sharpie[] = [
        new Sharpie("Blue", 100, 100),
        new Sharpie("Green", 100, 35),
        new Sharpie("Purple", 100, 0),
        new Sharpie("Yellow", 100, 55),
        new Sharpie("Orange", 100, 80),
        new Sharpie("Pink", 100, 0)
    ];

    public countUsable() {

        for (let i = 0; i < this._sharpie.length; i++) {

            if (this._sharpie[i].inkAmount > 0) {

                console.log("Sharpie is usable and ink level is   " + this._sharpie[i].inkAmount);

            } else {

                console.log("Sharpie is not usable, Ink level   " + this._sharpie[i].inkAmount);

            }

        }
    }
    public removeTrash() {


        this._sharpie = this._sharpie.filter(function (sharpie) {

            if (sharpie.inkAmount > 0) {

                return sharpie

            }
        
        });




    }
}


let sharpieset = new SharpieSet;

console.log(sharpieset);


sharpieset.removeTrash();
console.log(sharpieset);
