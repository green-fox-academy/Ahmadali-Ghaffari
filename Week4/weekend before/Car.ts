import { Station } from './Station'

'use strict'

export class Car {

    private _gasAmount: number;
    private _capacity: number;

    constructor() {

        this._gasAmount = 0;
        this._capacity = 100;


    }

    public set setGasAmountcar(gasAmount) {

        this._gasAmount = gasAmount;

    }

    public get getCarCapacity(): number {

        return this._capacity;

    }

    public get getCarGasAmount():number{

    return this._gasAmount;

    }



}