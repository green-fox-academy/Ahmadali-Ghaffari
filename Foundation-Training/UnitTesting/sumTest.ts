import * as test from 'tape';
import {Summation} from "./sum"

let summation = new Summation;
let listOfIntegers:number[]=[5,7,3];

test('summation', t => {
    const actual = summation.sum(listOfIntegers);
    const expected = 15;
  
    t.equal(actual, expected);
    t.end();
  });