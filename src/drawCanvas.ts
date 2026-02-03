import { Point } from "./fractalMath";


export function drawPoint(ctx: CanvasRenderingContext2D, point: Point, color: string = 'white', radius: number = 10): void {
    ctx.beginPath();
    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}


export function drawText(
  text: string,
  ctx: CanvasRenderingContext2D,
  x: number,              // posición X
  y: number,              // posición Y
  font: string = '30px Arial',
  color: string = 'white'
): void {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(text, x, y);
}


export function drawLine(
    ctx: CanvasRenderingContext2D, 
    puntoG: Point, 
    puntoB: Point,
    lineW:  number,
    color: string = 'white',
): void {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineW;          
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(puntoG.x, puntoG.y);  // Mover al primer punto
    ctx.lineTo(puntoB.x, puntoB.y);  // Trazar línea al segundo punto
    ctx.stroke();  // Dibujar la línea
}


export function drawTriangle(
    ctx: CanvasRenderingContext2D, 
    p1: Point,
    p2: Point,
    p3: Point,
    lineW: number,
    color: string = 'white'
): void {
   drawLine(ctx, p1, p2, lineW , color);
   drawLine(ctx, p2, p3, lineW , color);
   drawLine(ctx, p3, p1, lineW , color);
   
}


export function drawReactangle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    color: string = 'white'
): void {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}