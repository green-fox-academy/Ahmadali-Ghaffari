import {Station} from "./Station";
import {Car} from "./Car";


'use strict'


let car = new Car;
let station = new Station;
station.setStationGasAmount=4000;
console.log('-----------------------STATION GAS AMOUNT IS :-------------------------------')
console.log(station.getStationGasAmount);

console.log(car.getCarCapacity);
console.log(car.getCarGasAmount);
station.refill(car);

console.log('-----------------------------AFTER REFILL------------------------------')
console.log(car.getCarGasAmount);
console.log(station.getStationGasAmount);
