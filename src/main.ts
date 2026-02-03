// src/main.ts

import { drawPoint, drawText } from "./drawCanvas";
import { distance, midpoint, Point } from "./fractalMath";


const canvas: HTMLCanvasElement = document.getElementById('fractalCanvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

// Obtén dimensiones dinámicamente (útil si cambias el tamaño más adelante)
const canvasWidth: number = canvas.width;  // 1024
const canvasHeight: number = canvas.height;  // 768


// Punto CENTRADO usando ambas dimensiones
const puntoA: Point = { 
    x: canvasWidth  / 4,   
    y: canvasHeight / 4,   
};
const puntoB: Point = { 
    x: canvasWidth  / 2,   
    y: canvasHeight / 4,   
};

const midPointAB = midpoint(puntoA, puntoB);



const stringDistance = `La distancia entre los 2 puntos es: ${distance(puntoA, puntoB)}`

drawPoint(ctx, puntoA, 'white', 20);
drawPoint(ctx, puntoB, 'white', 20);
drawPoint(ctx, midPointAB, 'white', 20);



drawText(stringDistance,ctx, canvasWidth, 100);