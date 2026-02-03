import { drawReactangle, drawText, drawTriangle } from "./drawCanvas";

export interface Point {
    x:number;
    y:number;
}   

export function distance(p1: Point, p2: Point): number {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
}



export function midpoint(p1: Point, p2: Point): Point {
    return {
        x: (p1.x + p2.x) / 2,
        y: (p1.y + p2.y) / 2,
    };
}



export function recursiveT (delay:number, p1: Point, p2: Point, p3: Point, depth: number, ctx: CanvasRenderingContext2D): void {
    if (depth === 0) {
        drawTriangle(ctx, p1, p2, p3, 1, 'red');
        return;
    }

    const mid1: Point = midpoint(p1, p2);
    const mid2: Point = midpoint(p2, p3);
    const mid3: Point = midpoint(p3, p1);
    

   

    setTimeout(() => {
        
        drawTriangle(ctx, p1, mid1, mid3, 1 , 'white');
        recursiveT(delay, p1, mid1, mid3, depth - 1,ctx);

        drawTriangle(ctx, mid1, p2, mid2, 1 , 'white');
        recursiveT(delay, mid1, p2, mid2, depth - 1,ctx);
        
        drawTriangle(ctx, mid3, mid2, p3, 1 , 'white');
        recursiveT(delay, mid3, mid2, p3, depth - 1,ctx);


       drawReactangle(ctx, 0, 0, 1024, 100, 'black'); 
       drawText(`K = ${depth}`, ctx, 1024/2, 90, '80px Arial', 'white');
    }, delay);
    
    
   
}