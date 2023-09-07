import React from 'react';
import AnimatedCanvas from './AnimatedCanvas';

interface EpitrochoidCanvasProps {
    width?: number;
    height?: number;
}

export const EpitrochoidCanvas: React.FC<EpitrochoidCanvasProps> = ({
    width: canvasWidth = 400,
    height: canvasHeight = 400,
}: EpitrochoidCanvasProps) => {
    const RValue = canvasWidth / 4;
    const rValue = canvasWidth / 11;
    const dValue = canvasWidth / 15;

    const animationFunction = (t: number) => {
        const x =
            (RValue + rValue) * Math.cos(t) -
            dValue * Math.cos((RValue + rValue) * t / rValue);
        const y =
            (RValue + rValue) * Math.sin(t) -
            dValue * Math.sin((RValue + rValue) * t / rValue);
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
            animationFunction={animationFunction}
            strokeFunction={strokeFunction}
            width={canvasWidth}
            height={canvasHeight}
        />
    );
};

export default EpitrochoidCanvas;