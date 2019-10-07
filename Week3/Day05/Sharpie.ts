'use strict'

export class Sharpie {

    private _color: string;
    private _width: number;
    private _inkAmount: number;

    constructor(color: string, width: number, inkAmount: number) {

        //   this._inkAmount = 100;
        this._color = color;
        this._width = width;
        this._inkAmount = inkAmount;


    }

    public use() {

        this._inkAmount -= 7;

    }

    public get inkAmount(): number {

        return this._inkAmount;


    }

}
/*

let sharpie2 = new Sharpie("green", 100, 27);

console.log(sharpie2.inkAmount);
sharpie2.use();

console.log(sharpie2.inkAmount);

sharpie2.use();
sharpie2.use();

console.log(sharpie2.inkAmount);

let sharpie3 = new Sharpie("blue", 100, 9);

sharpie3.use();
sharpie3.use();
sharpie3.use();
sharpie3.use();
sharpie3.use();

console.log("this is the Sharpie 3 Ink Amount:" + "  " + sharpie3.inkAmount);



*/





