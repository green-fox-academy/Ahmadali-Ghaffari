'use strict';

import { Lion, Monkey, Elephant } from "./Animal";
import { Workers } from "./Workers"


let lion1 = new Lion("Simba", 7, "Male");
let monkey1 = new Monkey("kingKong", 97, "Female");
let elephant1 = new Elephant("Dombo", 2, "Male");
let worker1 = new Workers("Ahmadali", [lion1, monkey1, elephant1]);

worker1.doDailyRoutine();
worker1.doDailyRoutine();
worker1.doDailyRoutine();
worker1.doDailyRoutine();

//console.log(worker1._animalsToLookAfter);

console.log(lion1.toString());
console.log(elephant1.toString());
console.log(monkey1.toString());

