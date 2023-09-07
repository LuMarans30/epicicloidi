import React from 'react';
import AnimatedCanvas from './AnimatedCanvas';

import * as PIXI from 'pixi.js';

interface HypocycloidCanvasProps {
    width?: number;
    height?: number;
    strokeWidth?: number;
    nCusped?: number;
}

export const HypocycloidCanvas: React.FC<HypocycloidCanvasProps> = ({
    width: width = 400,
    height: height = 400,
    strokeWidth: strokeWidth = 3,
    nCusped: nCusped = 3
}: HypocycloidCanvasProps) => {

    const size = Math.min(width, height);

    const cw = width;
    const cx = cw / 2;
    const ch = height;
    const cy = ch / 2;

    const R = size / 3.5;
    const r = R / nCusped;
    let x: number, y: number, hx: number, hy: number = 0;
    let phi = 0;

    const animationFunction = (t: number, graphics?: PIXI.Graphics) => {

        phi += 0.01;

        if (phi >= 2 * Math.PI) {
            return { x, y };
        }

        graphics!.clear();

        graphics!.lineStyle(strokeWidth, 0x0000ff); // Blue outline
        graphics!.drawCircle(cx, cy, R);

        graphics!.lineStyle(strokeWidth, 0xff0000); // Red outline
        graphics!.drawCircle(cx + (R + r) * Math.cos(phi), cy + (R + r) * Math.sin(phi), 2);
        graphics!.drawCircle(cx + (R + r) * Math.cos(phi), cy + (R + r) * Math.sin(phi), r);

        x = cx + (R + r) * Math.cos(phi) - r * Math.cos(((R + r) / r) * phi);
        y = cy + (R + r) * Math.sin(phi) - r * Math.sin(((R + r) / r) * phi);

        graphics!.lineStyle(strokeWidth, 0xff0000); // Red outline
        graphics!.moveTo(cx + (R + r) * Math.cos(phi), cy + (R + r) * Math.sin(phi));
        graphics!.lineTo(x, y);

        graphics!.moveTo(x, y);
        graphics!.endFill();

        graphics!.lineStyle(strokeWidth, 0xff0000); // Red outline

        for (let t = 0; t <= phi; t += 0.01) {
            hx = cx + (R + r) * Math.cos(t) - r * Math.cos(((R + r) / r) * t);
            hy = cy + (R + r) * Math.sin(t) - r * Math.sin(((R + r) / r) * t);
            graphics!.lineTo(hx, hy);
        }

        graphics!.endFill();

        return { x, y };
    };

    const strokeFunction = (t: number) => {
        const r = 100 + Math.round(Math.sin(t) * 100);
        const g = 100 + Math.round(Math.cos(t) * 100);
        const b = 100 - Math.round(Math.cos(t) * 100);
        return (r << 16) | (g << 8) | b;
    };

    return (
        <AnimatedCanvas
            width={width}
            height={height}
            animationFunction={animationFunction}
            strokeFunction={strokeFunction}
        />
    );
};

export default HypocycloidCanvas;
