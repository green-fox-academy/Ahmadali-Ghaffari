'use strict';
import { Aircrafts } from "./Aircrafts"

export class F16 extends Aircrafts {
    public _MaxAmmo: number = 8;
    private _BaseDamage: number = 30;

    constructor() {
        super()
    }
}