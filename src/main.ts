// src/main.ts
const canvas = document.getElementById('fractalCanvas') as HTMLCanvasElement;
if (!canvas) throw new Error('Canvas element not found');

const ctx = canvas.getContext('2d');
if (!ctx) throw new Error('2D context not available');

const w = canvas.width;
const h = canvas.height;

// Cuadrado rojo centrado
const size = 300;
const centerX = w / 2;
const centerY = h / 2;
const x = centerX - size / 2;
const y = centerY - size / 2;

ctx.fillStyle = '#ff3366';
ctx.fillRect(x, y, size, size);

// Borde blanco para que resalte
ctx.strokeStyle = '#ffffff';
ctx.lineWidth = 6;
ctx.strokeRect(x, y, size, size);

console.log('Cuadrado rojo dibujado con éxito 🎉');