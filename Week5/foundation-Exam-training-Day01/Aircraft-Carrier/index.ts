'use strict';

import { Aircrafts } from "./Aircrafts"
import { F16 } from "./F16";
import { F35 } from "./F35";

let f35 = new F35(2);
console.log(f35.fight());
console.log("=========================== __  After Refill __ =============================");
f35.refill(100);
let f16 = new F16(1);
console.log(f16.fight());
console.log("=========================== __  After Refill __ =============================");
f16.refill(100);
console.log("===============STATUS+++++++++++");
console.log(f16.getStatus);
console.log(f16.isPriority());
console.log(f35.isPriority());





