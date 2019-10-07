
import { Animal } from "./Animal-class"

class Farm {

    private _slots: number;

    private _animals: Animal[] = [
        new Animal(21, 76),
        new Animal(2, 23),
        new Animal(45, 24),
        new Animal(76, 7)

    ];

    constructor(slots: number) {

        this._slots = slots;

    }



    public get animals() {

        return this._animals

    }

    public breed(hunher: number, thurst: number) {

        if (this._slots > 0) {

            this._animals.push(new Animal(hunher, thurst))
            this._slots -= 1;


        } else {

            console.log("there is no more place for extra Animal !!!")

        }


    }


    public slaughter() {

        let min: number = this._animals[0].hunger;

        for (let i = 0; i < this._animals.length; i++) {

            if (this._animals[i].hunger < min) {


                min = this._animals[i].hunger;



            }

        }
        for (let i = 0; i < this._animals.length; i++) {

            if(this._animals[i].hunger==min){


                this._animals.splice(i,1);

            }

        }

    
    }

}

/*

console.log()

console.log(myFarm);

myFarm.breed(56, 3);
console.log()
console.log()


console.log(myFarm.animals);
myFarm.breed(87, 4);
console.log()
console.log()

console.log(myFarm.animals)

myFarm.breed(34, 5);

*/

let myFarm = new Farm(2);

console.log(myFarm)

myFarm.slaughter();

console.log(myFarm);



