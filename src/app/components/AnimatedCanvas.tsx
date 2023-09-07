import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as PIXI from 'pixi.js';
import { Button } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';

interface AnimatedCanvasProps {
    width?: number;
    height?: number;
    animationFunction: (t: number, graphics?: PIXI.Graphics) => { x: number, y: number };
    strokeFunction: (t: number) => number;
    frameRate?: number;
    speed?: number;
}

const AnimatedCanvas: React.FC<AnimatedCanvasProps> = ({
    width = 550,
    height = 550,
    animationFunction,
    strokeFunction,
    frameRate = 60,
    speed = 1.5
}) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    let animationTime = 0;

    const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

    const timeStep = 1 / frameRate * speed;

    const app = useRef<PIXI.Application<HTMLCanvasElement> | null>(null);
    const graphics = useRef<PIXI.Graphics | null>(null);
    const prevPos = useRef<PIXI.Point | null>(null);

    const initializePIXI = useCallback(() => {
        app.current = new PIXI.Application<HTMLCanvasElement>({
            view: canvasRef.current!,
            width,
            height,
            antialias: true,
            backgroundAlpha: 0x000000,
        });

        graphics.current = new PIXI.Graphics();
        prevPos.current = new PIXI.Point(0, 0);

        app.current.stage.addChild(graphics.current);

        intersectionObserverRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animate();
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        intersectionObserverRef.current.observe(canvasRef.current!);
    }, [width, height]);

    const clearPIXI = useCallback(() => {
        if (graphics.current !== null) {
            graphics.current.clear(); // Clear graphics but keep the PIXI stage
            prevPos.current?.set(0, 0); // Reset position
            animationTime = 0; // Reset animation time
            app.current = null;
        }
    }, []);

    const animate = useCallback(() => {
        if (app.current === null || graphics.current === null || prevPos.current === null) return;

        const hexColor = strokeFunction(animationTime);
        graphics.current.lineStyle(4, hexColor, 1);

        const { x, y } = animationFunction(animationTime, graphics.current);

        if (prevPos.current.x === 0 && prevPos.current.y === 0) {
            prevPos.current.set(width / 2 + x, height / 2 + y);
        }

        graphics.current.moveTo(prevPos.current.x, prevPos.current.y);
        graphics.current.lineTo(width / 2 + x, height / 2 + y);
        prevPos.current.set(width / 2 + x, height / 2 + y);

        app.current.renderer.render(app.current.stage);

        animationTime += timeStep;

        requestAnimationFrame(animate);

    }, [animationFunction, strokeFunction, animationTime, width, height, timeStep]);

    useEffect(() => {
        initializePIXI();
        return () => {
            clearPIXI();
            if (intersectionObserverRef.current) {
                intersectionObserverRef.current.disconnect();
            }
        };
    }, [initializePIXI, clearPIXI]);

    return (
        <div>
            <canvas ref={canvasRef} width={width} height={height} />
            <Button
                variant="contained"
                disabled={true}
                onClick={() => {
                    clearPIXI(); // Clear PIXI objects on reset
                    initializePIXI(); // Reinitialize PIXI
                    animate();
                }}
                startIcon={<ReplayIcon />}
            >
                Reset
            </Button>
        </div>
    );
};

export default AnimatedCanvas;
