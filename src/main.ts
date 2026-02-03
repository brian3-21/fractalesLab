// src/main.ts

import { drawLine, drawPoint, drawText } from "./drawCanvas";
import { distance, midpoint, Point, recursiveT } from "./fractalMath";


const canvas: HTMLCanvasElement = document.getElementById('fractalCanvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

const canvasWidth: number = canvas.width; 
const canvasHeight: number = canvas.height; 

const centerX = canvasWidth/2;
const centerY = canvasHeight/2;

const l = 500;
const h = (Math.sqrt(3) / 2) * l;

const dy = -50;

const puntoG: Point = { 
    x: centerX - (l/2) ,   
    y: centerY + (h/2) + dy ,   
};
const puntoB: Point = { 
    x: centerX + (l/2),   
    y: centerY + (h/2) + dy,
};
const puntoW: Point = { 
    x: centerX,   
    y: centerY - (h/2) + dy,   
};


recursiveT(1000/2,puntoG, puntoB, puntoW, 10, ctx);







