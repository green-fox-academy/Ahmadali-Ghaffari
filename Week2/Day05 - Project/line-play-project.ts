
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//function greenLines(x1: number[] = [0, 0], y1: number[] = [0, 400]) {
function greenLines() {
    let greenInitialX: number = 0;

    let greenEndY: number = 0;

    let greenEndX: number=0;
    let greenInitialY: number=400;

    for (let j = 0; j < 19; ++j) {
        ctx.strokeStyle = "green";
        ctx.beginPath();
        greenInitialX = greenInitialX + 30;
        ctx.moveTo(greenInitialX, greenInitialY);
        greenEndY = greenEndY + 20;
        ctx.lineTo(greenEndX, greenEndY);
        ctx.stroke();


    }

}

//function purpleLines(x2: number[] = [600,600], y2: number[]=[400,0]) {
function purpleLines() {
    let purpleInitialX: number=600;
    let purpleEndY: number=0;

    let purpleEndX: number= 600;
    let purpleInitialY: number= 400;


    for (let i = 0; i < 19; ++i) {

        ctx.strokeStyle = "purple";
        ctx.beginPath();
        purpleInitialY = purpleInitialY - 20;
        ctx.moveTo(purpleInitialX, purpleInitialY);

        purpleEndX = purpleEndX - 30;
        ctx.lineTo(purpleEndX, purpleEndY);
        ctx.stroke();


    }
}


greenLines();
purpleLines();








