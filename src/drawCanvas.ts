import { Point } from "./fractalMath";


export function drawPoint(ctx: CanvasRenderingContext2D, point: Point, color: string = 'white', radius: number = 10): void {
    ctx.beginPath();
    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}


export function drawText(text:string = 'No have text yet',ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number = 50, font:string = '30px Arial', color: string = 'white'): void {
ctx.font = font;
ctx.fillStyle = color;
ctx.textAlign = "center";
ctx.fillText(text, canvasWidth / 2, canvasHeight)
}




