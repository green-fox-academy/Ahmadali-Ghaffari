'use strict';

import { Aircraft } from "./Aircraft";

class Carrier {

    protected _listOfAircrafts: Aircraft[] = [];
    protected _storeOfAmmoForCarrier: number;
    protected _healthPoint: number;

    constructor(ammo: number, healthPoint: number) {
        this._storeOfAmmoForCarrier = ammo;
        this._healthPoint = healthPoint;
    }

    public add(){
this._listOfAircrafts.push(new Aircraft)

    }
}