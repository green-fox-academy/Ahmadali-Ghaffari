
'use strict'

import { listenerCount } from "cluster";


class Animal {

     _hunger: number;
     _thurst: number;
     _name: string;
     _age: number;
     _sex: string;


    constructor() {

        this._hunger = 50;
        this._thurst = 50;


    }

    public eat() {


        this._hunger = this._hunger - 1;

    }

    public drink() {

        this._thurst -= 1;

    }



    public get hunger(): number {

        return this._hunger;
    }

    public get thurst(): number {


        return this._thurst;
    }

    public set name(name) {

        this._name = name;
    }

    public set age(age) {

        this._age = age;

    }

    public set sex(sex) {

        this._sex = sex;

    }


    public play() {

        this._hunger += 2;
        this._thurst += 5;
    }

}



let Lion = new Animal();


console.log(Lion._hunger);
console.log(Lion._thurst);

console.log("now is the playing time for me");
console.log();

Lion.play();

console.log(Lion._hunger);
console.log(Lion._thurst);

console.log("now is the eating and drinking time for me");
console.log();

Lion.eat();
Lion.drink();

console.log(Lion._hunger);
console.log(Lion._thurst);

