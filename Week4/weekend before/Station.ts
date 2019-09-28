import { Car } from './Car'

'use strict'

export class Station {

    private _gasAmount: number;

    public refill(Car) {

        let firstGasAmount: number;
        firstGasAmount = this._gasAmount;


        this._gasAmount = this._gasAmount - Car.getCarCapacity;


        Car.setGasAmountcar = firstGasAmount - this._gasAmount;

    }


    public set setStationGasAmount(amount) {

        this._gasAmount = amount;

    }

    public get getStationGasAmount(): number {

        return this._gasAmount;

    }
}