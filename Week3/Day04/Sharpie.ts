'use strict'

class Sharpie {

    private color: string;
    private width: number;
    private inkAmount: number;

    constructor(color: string, width: number) {

        this.inkAmount = 100;
        this.color = color;
        this.width = width;


    }

    public use() {

        this.inkAmount -= 7;

    }

    public get ink_Amount(): number {

        return this.inkAmount;


    }

}

let sharpie2 = new Sharpie("green",27);

console.log(sharpie2.ink_Amount);
sharpie2.use();

console.log(sharpie2.ink_Amount);

sharpie2.use();
sharpie2.use();

console.log(sharpie2.ink_Amount);

let sharpie3 = new Sharpie("blue",170);

sharpie3.use();
sharpie3.use();
sharpie3.use();
sharpie3.use();
sharpie3.use();

console.log("this is the Sharpie 3 Ink Amount:"+ "  "+sharpie3.ink_Amount);









