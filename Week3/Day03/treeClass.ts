'use strict';

class Tree {

    type:string;
    leafColor:string;
    age:number;
    sex:string;

    constructor(type:string,leafColor:string,age:number,sex:string){

        this.type=type;
        this.leafColor=leafColor;
        this.age=age;
        this.sex=sex;

    }


}
let Tree1 = new Tree("apple","Light Green",27,"F");
let Tree2 = new Tree("cherry","Dark Green",124,"M");
let Tree3 = new Tree("peach","Orange",70,"M");
let Tree4 = new Tree("walnut","Dark Brown",157,"F");
let Tree5 = new Tree("berry","blue",7,"F");


console.log(Tree1.leafColor);