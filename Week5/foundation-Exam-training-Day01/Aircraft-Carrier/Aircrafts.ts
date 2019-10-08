'use strict';
import { F16 } from "./F16"
import { F35 } from "./F35"

export class Aircrafts {
    private _ammunition: number;
    private _maxAmmo: number;
    private _baseDamage: number;
    private _checkF16: boolean = false;
    private _checkF35: boolean = false;

    constructor() {
        this._ammunition = 0;
        this._maxAmmo = 0;
        this._baseDamage = 0;
    }
    public fight() {

        if (this._checkF16) {
            let dealtDamage: number = this._maxAmmo * this._baseDamage;
            this._maxAmmo = 0;
            return dealtDamage;
        } else if (this._checkF35) {
            let dealtDamage: number = this._maxAmmo * this._baseDamage;
            this._maxAmmo = 0;
            return dealtDamage;
        }
    }
}