import React from 'react';
import AnimatedCanvas from './AnimatedCanvas';
import * as PIXI from 'pixi.js';

interface SpiralCanvasProps {
    width?: number;
    height?: number;
    strokeWidth?: number;
}

export const SpiralCanvas: React.FC<SpiralCanvasProps> = ({
    width: propWidth = 400,
    height: propHeight = 400,
    strokeWidth: propStrokeWidth = 3,
}: SpiralCanvasProps) => {

    let angle = 1;
    const angularSpeed = 0.1;
    let distance = 3;
    const distanceSpeed = 0.5;

    let prevX = 0;
    let prevY = 0;

    const width = propWidth;
    const height = propHeight;
    const strokeWidth = propStrokeWidth;

    const animationFunction = (t: number, graphics?: PIXI.Graphics) => {
        if (distance > width / 2) return { x: prevX, y: prevY };

        t += 0.02;

        angle += angularSpeed;
        distance += distanceSpeed;

        const x = Math.sin(angle) * distance;
        const y = Math.cos(angle) * distance;

        const r = 100 + Math.round(Math.sin(t) * 100);
        const g = 100 + Math.round(Math.cos(t) * 100);
        const b = 100 - Math.round(Math.cos(t) * 100);

        const hexColor = (r << 16) | (g << 8) | b;

        graphics!.lineStyle(strokeWidth, hexColor, 1); // Stroke color
        graphics!.moveTo(prevX + width / 2, prevY + height / 2);
        graphics!.lineTo(x + width / 2, y + height / 2);

        prevX = x;
        prevY = y;

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

export default SpiralCanvas;
