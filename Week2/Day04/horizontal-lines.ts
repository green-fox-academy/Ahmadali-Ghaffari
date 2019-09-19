'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');



function horizontalLine(x: number, y: number) {


    for (let i = 0; i < 3; ++i) {
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        ctx.moveTo(x, y);

        ctx.lineTo(x+50,y);
        ctx.stroke();


    }
}

let xy:number[][]=[[20,40],[200,70],[95,150]]
for (let j: number = 0; j < 3; ++j) {
    
    horizontalLine(xy[j][0], xy[j][1]);
}
