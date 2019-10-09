'use strict';
import { Aircrafts } from "./Aircrafts"

export class F35 extends Aircrafts {

    constructor(ammunition?: number) {
        super()
        this._checkF35 = true;
        this._maxAmmo = 12;
        this._baseDamage = 50;
        this._ammunition = ammunition;
        this._type = "F35";
    }
}