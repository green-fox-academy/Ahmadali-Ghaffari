'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.strokeStyle="red";
ctx.beginPath();
ctx.moveTo(500,200);
ctx.lineTo(100,200);
ctx.stroke();

ctx.strokeStyle="green";
ctx.beginPath();
ctx.moveTo(300,300);
ctx.lineTo(300,50);
ctx.stroke();