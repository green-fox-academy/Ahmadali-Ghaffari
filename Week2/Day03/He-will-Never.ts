
'use strict';

let out: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];
//let decryptedMessage : string = '';
let hashmap = {

  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};

/*I

for(let i:number = 0;i<notSoCrypticMessage.length;++i){

let temBoxNumber :number = notSoCrypticMessage[i];

if (temBoxNumber==7){

    out = out +'run around and desert you';


}else if(temBoxNumber==50){

    out = out +'tell a lie and hurt you ';


}else if(temBoxNumber==49){

    out = out +'make you cry, ';


}else if(temBoxNumber==2){

    out = out +'let you down';


}else if(temBoxNumber==12){

    out =out + 'give you up, ';


}else if(temBoxNumber==1){


    out = out +'Never gonna ';


}else if(temBoxNumber==11){


    out = out + '\n';


}else if(temBoxNumber==3){


    out = out +'say goodbye ';


  }

}

*/


for (let i:number =0 ;i<notSoCrypticMessage.length;++i){



out=out+hashmap[notSoCrypticMessage[i]];

}

console.log(out);
