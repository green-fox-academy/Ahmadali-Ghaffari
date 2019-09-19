'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

/* function line(x: number, y: number) {

    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();


}
*/

//line(20, 40);

function line(x: number, y: number) {

    for (let i = 0; i < 900 ; ++i) {


        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(300, 200);
        ctx.stroke();

            x=x+30;
            y=y+50;
    }
}


line(20,170);