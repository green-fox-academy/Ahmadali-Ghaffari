'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


ctx.strokeStyle="blue";
ctx.beginPath();
ctx.moveTo(100,200);
ctx.lineTo(300,200);
ctx.stroke();

ctx.strokeStyle="green";
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(300,100);
ctx.stroke();

ctx.strokeStyle="red";
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(100,200);
ctx.stroke();

ctx.strokeStyle="purple";
ctx.beginPath();
ctx.moveTo(300,100);
ctx.lineTo(300,200);
ctx.stroke();



