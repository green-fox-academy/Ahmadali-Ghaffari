'use strict';

import { Aircraft } from "./Aircraft";

class F16 extends Aircraft {
    protected _maxAmmo: number;
    protected _baseDamage: number;
    protected _type: string = "F16";

    constructor() {
        super();
        this._maxAmmo = 8;
        this._baseDamage = 30;
    }

    public fight(): number {
        this._damageDealt = this._baseDamage * this._ammoStorage;
        return this._damageDealt;
    }

    public refill(parameter: number): number {
        if (parameter <= this._maxAmmo) {
            if (parameter > this._maxAmmo) {
                this._ammoStorage = 8;
                return parameter - this._maxAmmo;
            } else {
                this._ammoStorage = parameter;
                return 0;
            }
        }
    }

    public getType(): string {
        return this._type;
    }
    
    public getStatus(): string {
        return `Type ${this._type}, Ammo: ${this._ammoStorage} ,Base Damage: ${this._baseDamage}, All Damage: ${this._damageDealt}`
    }

    public isPriority(): boolean {
        return false;
    }

}