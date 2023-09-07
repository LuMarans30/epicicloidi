import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

type EpicycloidProps = {
    cuspCount?: number;
    radius?: number;
    markCount?: number;
    width?: number;
    height?: number;
    strokeColor?: number;
    animation?: boolean;
    maxCusp?: number;
    duration?: number;
    strokeWidth?: number;
};

export const EpicycloidCanvas: React.FC<EpicycloidProps> = (props) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const appRef = useRef<PIXI.Application | null>(null);

    const {
        cuspCount = 0,
        maxCusp = 1,
        radius = 240,
        markCount = 70,
        width = 700,
        height = 700,
        strokeColor = 0xff0000, // Red color in hex format
        animation = false,
        duration = 0.5,
        strokeWidth = 1.5
    } = props;

    useEffect(() => {
        const app = new PIXI.Application<HTMLCanvasElement>({
            view: canvasRef.current!,
            width: width,
            height: height,
            antialias: true,
            backgroundAlpha: 0x000000 // Transparent background
        });

        appRef.current = app;

        const circle = new PIXI.Graphics();
        circle.lineStyle(strokeWidth, strokeColor);
        circle.drawCircle(0, 0, radius);

        const drawEpicycloid = (cuspCount: number) => {
            let gap = 1;

            // Center of the canvas
            const centerX = width / 2;
            const centerY = height / 2;

            //Center the circle in the middle of the canvas
            circle.x = centerX;
            circle.y = centerY;

            app.stage.addChild(circle);

            // Draw the epicycloid curve line by line using PIXI.Graphics
            for (let i = 0; i < markCount; i++) {
                const line = new PIXI.Graphics();
                line.lineStyle(strokeWidth, strokeColor);

                const angle = i * ((2 * Math.PI) / markCount);
                const startPoint = new PIXI.Point(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));

                const nextAngle = (i + gap) * ((2 * Math.PI) / markCount);
                const endPoint = new PIXI.Point(centerX + radius * Math.cos(nextAngle), centerY + radius * Math.sin(nextAngle));

                line.moveTo(startPoint.x, startPoint.y);
                line.lineTo(endPoint.x, endPoint.y);

                app.stage.addChild(line);

                gap += cuspCount;
            }
        };

        if (animation) {
            let startTime: number | null = null;

            const animateFrame = (timestamp: number) => {

                if (!startTime) startTime = timestamp;
                const elapsedTime = timestamp - startTime;

                if (elapsedTime < duration * 1000) {
                    const updatedCuspCount = (maxCusp * elapsedTime) / (duration * 1000);
                    if (app.stage === null) return;
                    app.stage.removeChildren(); // Clear previous frames
                    drawEpicycloid(updatedCuspCount);
                    app.renderer.render(app.stage);
                    requestAnimationFrame(animateFrame);
                }
            };

            animateFrame(performance.now());

        } else {
            drawEpicycloid(cuspCount);
            app.renderer.render(app.stage);
        }

        return () => {
            app.destroy(); // Clean up when the component unmounts
        };
    }, [
        animation,
        cuspCount,
        duration,
        markCount,
        maxCusp,
        radius,
        strokeColor,
        strokeWidth,
        width,
        height
    ]);

    return <canvas ref={canvasRef} width={width} height={height} />;
};

export default EpicycloidCanvas;
