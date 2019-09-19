'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(600,400);
ctx.stroke();

