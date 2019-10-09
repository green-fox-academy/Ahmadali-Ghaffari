'use strict';
import { F16 } from "./F16"
import { F35 } from "./F35"

export class Aircrafts {
    protected _ammunition: number;
    public _maxAmmo: number;
    protected _baseDamage: number;
    protected _checkF16: boolean;
    protected _checkF35: boolean;
    protected _type: string;
    protected _dealtDamage: number;
    protected _status: string;

    constructor() {
        this._ammunition = 0;
        this._maxAmmo = 0;
        this._baseDamage = 0;
    }
    public fight() {
        if (this._checkF16) {
            this._dealtDamage = this._ammunition * this._baseDamage;
            this._ammunition = 0;
            console.log("AMMUNITION IS :   " + this._ammunition)
            this._checkF16 = false;
            return this._dealtDamage;
        } else if (this._checkF35) {
            this._dealtDamage = this._ammunition * this._baseDamage;
            this._ammunition = 0;
            console.log("AMMUNITION IS :   " + this._ammunition)
            this._checkF35 = false;
            return this._dealtDamage;
        }
    }
    public refill(fill: number) {
        if (this._checkF16 == false && fill < this._maxAmmo) {
            this._ammunition = fill;
        } else if (this._checkF16 == false && fill > this._maxAmmo) {
            fill = fill - this._maxAmmo;
            this._ammunition = 8;
            this._checkF16 = true;
            console.log("Ammunition is :  " + this._ammunition);
            return fill;
        } else if (this._checkF35 == false && fill < this._maxAmmo) {
            this._ammunition = fill;
        } else if (this._checkF35 == false && fill > this._maxAmmo) {
            fill = fill - this._maxAmmo;
            this._ammunition = 12;
            this._checkF35 = true;
            console.log("Ammunition is :  " + this._ammunition);
            return fill;
        }
    }
    public get type() {
        return this._type
    }
    public get getStatus() {
        this._status = "Type " + this._type + ", Ammo: " + this._ammunition + ", Base Damage: " + this._baseDamage + ", All Damage: " + this._dealtDamage;

        return this._status;
    }
    public isPriority() {
        if (this._type == "F35") {
            return true;
        }else{
            return false;
        }
    }
}
