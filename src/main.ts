// src/main.ts

import { Point } from "./fractalMath";

const canvas: HTMLCanvasElement = document.getElementById('fractalCanvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

// Obtén dimensiones dinámicamente (útil si cambias el tamaño más adelante)
const canvasWidth: number = canvas.width;  // 1024
const canvasHeight: number = canvas.height;  // 768

// Define tamaño del cuadrado (puedes hacerlo variable más adelante)
const rectWidth: number = 400;
const rectHeight: number = 400;

// Calcula posición centrada
const centerX: number = canvasWidth / 2;
const centerY: number = canvasHeight / 2;
const rectX: number = centerX - (rectWidth / 2);
const rectY: number = centerY - (rectHeight / 2);

const punto:Point = {x:10,y:20};

// Dibujar punto
ctx.beginPath();
ctx.arc(punto.x, punto.y, 3, 0, Math.PI * 2); // Radio de 3px
ctx.fillStyle = 'red'; // Color del punto
ctx.fill();