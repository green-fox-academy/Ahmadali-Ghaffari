'use strict';

export abstract class Aircraft {

    protected abstract _maxAmmo: number;
    protected abstract _baseDamage: number;
    protected _ammoStorage: number;
    protected _damageDealt: number;
    protected _ammunition: number;
    protected abstract _type: string;

    constructor() {
        this._ammoStorage = 0;
    }

    public abstract fight(): number;
    public abstract refill(parameter: number): number;
    public abstract getType(): string;
    public abstract getStatus(): string;
    public abstract isPriority():boolean;
}