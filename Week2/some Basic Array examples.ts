///===================================ARRAYS===========================================\\\
//=======================AHMADALI GHAFFARI===============================\\
'use strict';

let alphas:string[];
alphas =["1","2","3","4"];
//console.log(alphas[1]);
    
//console.log(alphas[3]);

let nums: number[] = [1,2,3,4,5,6,7,7,6,4,6,7,8];
/*
console.log(nums[4]);
console.log(nums[2]);
console.log(nums[3]);
console.log(nums[6]);
*/

const evens = [2,4,6,8,10];
const numbers = [1,3,5,7,...evens];
//console.log(numbers);

let arr1 = [0,7,2];
let arr2 = [3,4,5];

arr1 = [...arr1,...arr2];

//console.log(arr1);

//console.log(arr1.indexOf(7));
['apple','pear','melon'].forEach(function(e,i){

//console.log(e,i);

});

let number2 = [1,4,9,16,25,49];
let root = number2.map(Math.sqrt);

//console.log(root);

let triples = [1, 2, 3, 4, 5].map(function(j) {
    return j * 3;
  });
 // console.log(triples);

 function theFilter(doesntMatter){

    return doesntMatter % 2==0;
 }

let evens2 = [1,2,3,4,5,6,7,8,9].filter(theFilter);

//console.log(evens2);

let evens3 = [1,2,3,4,5].filter(function(e){
 return e % 2 ==0;

});

//console.log(evens3);

let isAllEven = [2,6,14].every(function(e){

return e % 2 ==0;

});

//console.log(isAllEven);

let isAnyEven = [1,3,5,7,9].some(function(e)
{

    return e % 2==0;
});

console.log(isAnyEven);

let letters:string [] = 'apple'.split('');
console.log(letters); /** ['a', 'p', 'p', 'l', 'e'] */
console.log(letters.join('@')); /** Worms in the apple! */




