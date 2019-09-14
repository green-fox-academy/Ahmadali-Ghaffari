//--------------------------------The Pyramid -------------------------------------\\
//------------------------Written by Ahmadali Ghaffari------------------------------\\
//---------------------________________GREEN FOX_________________====================\\


'use strict';

let lineCount : number= 4;
let i: number= 1;
let j: number= 0;
let space : string =" ";
let tempBox1: string=" ";
let k:number=1;
let lineAnswer :string =" ";
let tempBoxStar :string ="*";
let tempLineCountBox :number = lineCount;


let tempBox2: string =" ";
let star : string = "*";


    for(j;j<lineCount;j++){

tempBox1 = tempBox1+space;

}

tempBox1 = tempBox1+star;
console.log(tempBox1);

//lineCount=lineCount-1;

    for (i;i <lineCount-1 ;i++){


        for (k;k<lineCount;k++){

        tempLineCountBox = tempLineCountBox -1;    
            
            tempBox2=tempBox2+space;


            if(tempLineCountBox=1)
            {
                tempBoxStar= star+tempBoxStar+star;

            }

            lineAnswer = tempBox2+tempBoxStar;
            console.log(lineAnswer);

        }

    }


    
