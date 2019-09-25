'use strict'

class Human {

    name: string;
    age: number;
    iq: number;

    constructor(name: string = "Ahmadali", age: number = 0, iq: number = 0) {

        this.name = name;
        this.age = age;
        this.iq = iq;

    }

    public isSmart(): boolean {

        return this.iq > 100;
    }

    public isNameless(): boolean {

        return this.name === 'unknown' || this.name === '';

    }

    public besmarter(): number {

        this.iq += 20;
        return human.iq;

    }
}



let human = new Human();
//console.log(human.name);


let isSmartOUTPUT = human.isSmart();

//console.log(isSmartOUTPUT);

let isnameLESS = human.isNameless();

//console.log(isnameLESS);

//human.besmarter();

//console.log(human.iq);

human.name = "ahmadali The KNIGHT";

human.age = 34;


console.log(human.age, human.name);

human.iq = 210;

console.log(human.iq);


if (human.isSmart()) {
    
 
    console.log(human.name + "  is smart , with iq :" + human.iq);

    console.log(`${human.name}  is smart , with iq :${human.iq}`);

}






