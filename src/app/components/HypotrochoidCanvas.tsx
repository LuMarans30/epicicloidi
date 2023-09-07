import React from 'react';
import AnimatedCanvas from './AnimatedCanvas';

interface HypotrochoidCanvasProps {
    width?: number;
    height?: number;
}

export const HypotrochoidCanvas: React.FC<HypotrochoidCanvasProps> = ({
    width: width = 400,
    height: height = 400
}: HypotrochoidCanvasProps) => {

    const scale = Math.min(width, height) / 30;

    const animationFunction = (t: number) => {
        const aValue = 12.0 * scale;
        const bValue = 2.24 * scale;
        const cValue = 5.0 * scale;
        const x =
            (aValue - bValue) * Math.cos(t) +
            cValue * Math.cos((aValue / bValue - 1.0) * t);
        const y =
            (aValue - bValue) * Math.sin(t) -
            cValue * Math.sin((aValue / bValue - 1.0) * t);

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
            width={width}
            height={height}
            frameRate={120}
            speed={6}
        />
    );
};

export default HypotrochoidCanvas;
