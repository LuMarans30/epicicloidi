import React from 'react';
import AnimatedCanvas from './AnimatedCanvas';
import * as PIXI from 'pixi.js';

interface CycloidCanvasProps {
    width?: number;
    height?: number;
    strokeWidth?: number;
    radius?: number;
}

const CycloidCanvas: React.FC<CycloidCanvasProps> = ({
    width = 600,
    height = 300,
    strokeWidth = 4,
    radius = 40,
}: CycloidCanvasProps) => {

    const size = Math.min(width, height);
    let x: number, y: number = 0;
    const pos = [[-5, size]];

    const animationFunction = (t?: number, graphics?: PIXI.Graphics) => {

        if (t === 0) {
            pos.length = 0;
            x = 0;
            y = 0;
            pos.push([-5, size]);
        }

        if (x > width - 20) return { x, y };

        pos.push([radius * (t! - Math.cos(t!)), height / 2 - radius * Math.sin(t!)]);

        const cx = radius * t!;
        const cy = height / 2;

        graphics?.clear();

        //print a line below the cycloid path to make it look like a road
        graphics?.beginFill(0, 0);
        graphics?.lineStyle(strokeWidth, "yellow");
        //center vertically 
        graphics?.moveTo(0, height / 2 + radius);
        graphics?.lineTo(width, height / 2 + radius);
        graphics?.endFill();

        graphics?.lineStyle(strokeWidth, "red");
        for (let i = 1; i < pos.length; i++) {
            graphics?.moveTo(pos[i - 1][0], pos[i - 1][1]);
            graphics?.lineTo(pos[i][0], pos[i][1]);
        }

        graphics?.beginFill(0, 0);
        graphics?.lineStyle(strokeWidth, "blue");
        graphics?.drawEllipse(cx, cy, radius, radius);
        graphics?.endFill();

        graphics?.moveTo(cx, cy);
        graphics?.lineStyle(strokeWidth, "red");
        graphics?.lineTo(pos[pos.length - 1][0], pos[pos.length - 1][1]);

        x = pos[pos.length - 1][0];
        y = pos[pos.length - 1][1];

        return { x, y };
    };

    const strokeFunction = (t: number) => {
        const radius = 100 + Math.round(Math.sin(t) * 100);
        const g = 100 + Math.round(Math.cos(t) * 100);
        const b = 100 - Math.round(Math.cos(t) * 100);
        return (radius << 16) | (g << 8) | b;
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

export default CycloidCanvas;