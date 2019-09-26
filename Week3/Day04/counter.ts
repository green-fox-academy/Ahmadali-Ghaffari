
' use strict'

class counter {


    private _value: number;


    constructor(value?: number) {

        this._value = 0;
        if (value) {
            this._value = value;
        }


    }

    public add(number?: number) {

        if (number) {

            this._value = this._value + number;
        } else {

            this._value += 1;
        }
    }

    public get value() {

       return `${this._value}`;
      //  return this._value.toString();

    }

    public reset(){


        this._value=0;

    }

}

let Counter = new counter();
console.log(Counter.value);


Counter.add(50000000);
//console.log(Counter.value);

//Counter.add(27);
console.log(Counter.value);

//console.log(Counter.value);
Counter.reset();
console.log(Counter.value);




