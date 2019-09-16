
'use strict';

let x = myFunction(4,3);

function myFunction(a,b){


    return a * b;

}

console.log(x);


function greet(greet = '', name = '') {
    console.log(greet, name);
  }
  
  greet('Hey','Ahmadali');
  greet('Hello', 'Tojas');



  function makeGreen(name: string): string {
    let newName = `Green ${name}
    
    `;
    console.log('Green \n');
    console.log("Green \n");
    return newName;
  }
  
  let name2 = makeGreen('Tojas');
  console.log(name2);



