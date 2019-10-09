'use strict';
import { Aircrafts } from "./Aircrafts"

export class F16 extends Aircrafts {

    constructor(ammunition?: number) {
        super()
        this._checkF16 = true;
        this._maxAmmo = 8;
        this._baseDamage = 30;
        this._ammunition = ammunition;
        this._type = "F16";
    }
}