'use strict';

import { Aircrafts } from "./Aircrafts";

class Carrier {

    protected _storage: Aircrafts[];
    protected _storeOfAmmo: number;
    protected _healthPoint: number;
    constructor(storeOfAmmo: number, healthPoint: number) {

        this._storeOfAmmo = storeOfAmmo;
        this._healthPoint = healthPoint;
    }
    public add() {
        this._storage.push(new Aircrafts);
    }
    public fill() {
        for (let i = 0; i < this._storage.length; i++) {
            if (this._storeOfAmmo == 0) {
                throw new Error("Storage is Empty !!!!!")
            } else {
                this._storage[i].refill(this._storeOfAmmo);
                

            }
        }
    }



}