
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//function greenLines(x1: number[] = [0, 0], y1: number[] = [0, 400]) {
function greenLines(x1: number[] = [], y1: number[] = []) {


    for (let j = 0; j < 19; ++j) {
        ctx.strokeStyle = "green";
        ctx.beginPath();
        x1[1] = x1[1] + 30;
        ctx.moveTo(x1[1], y1[0]);
        y1[1] = y1[1] - 20;
        ctx.lineTo(x1[0], y1[1]);
        ctx.stroke();


    }

}

//function purpleLines(x2: number[] = [600,600], y2: number[]=[400,0]) {
function purpleLines(x2: number[] = [], y2: number[] = []) {


    for (let i = 0; i < 19; ++i) 
    {
        ctx.strokeStyle = "purple";
        ctx.beginPath();
        y2[1] = y2[1] + 20;
        ctx.moveTo(x2[0], y2[1]);
        x2[1] = x2[1] - 30;
        ctx.lineTo(x2[1], y2[0]);
        ctx.stroke();


    }
}

greenLines([0, 0], [0, 400]);
purpleLines([600, 600], [400, 0]);




//let xy: number[][] = [[20, 40], [200, 70], [95, 150]]
//for (let j: number = 0; j < 3; ++j) {

  //  horizontalLine(xy[j][0],
    //    xy[j][1]);
//}





