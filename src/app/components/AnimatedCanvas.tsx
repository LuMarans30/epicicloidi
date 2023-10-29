import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Application, Graphics, Point } from 'pixi.js';
import { Button, Divider } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import { InView } from 'react-intersection-observer';
import { flexColumnStyle } from './CustomStyles';

// Define prop types for the AnimatedCanvas component
interface AnimatedCanvasProps {
    width?: number;
    height?: number;
    animationFunction: (t?: number, graphics?: Graphics) => { x: number, y: number };
    strokeFunction: (t: number) => number;
    maxFPS?: number;
    speed?: number;
}

/**
 * AnimatedCanvas is a React functional component that creates an animated canvas using PIXI.js.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {number} [props.width=550] - The width of the canvas.
 * @param {number} [props.height=550] - The height of the canvas.
 * @param {Function} props.animationFunction - A function that computes the animation coordinates.
 * @param {Function} props.strokeFunction - A function that computes the stroke color.
 * @param {number} [props.maxFPS=60] - The maximum frames per second for animation.
 * @param {number} [props.speed=1.5] - The animation speed multiplier.
 * @returns {JSX.Element} The AnimatedCanvas component. 
 */
const AnimatedCanvas: React.FC<AnimatedCanvasProps> = ({
    width = 550,
    height = 550,
    animationFunction,
    strokeFunction,
    maxFPS = 60,
    speed = 1.5
}: AnimatedCanvasProps): JSX.Element => {
    // Refs for canvas, animation time, and intersection observer state
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    let animationTime = 0;

    // Calculate time step based on max FPS and speed multiplier
    const timeStep = 1 / maxFPS * speed;

    // Refs for PIXI.js objects and previous position
    let app = useRef<Application<HTMLCanvasElement> | null>(null);
    let graphics: Graphics | null = null;
    let prevPos: Point | null = null;

    // Set up intersection observer for canvas
    const [inView, setInView] = useState(false);

    // Initialize PIXI.js and set up intersection observer on component mount
    const initializePIXI = useCallback(() => {

        app.current = new Application<HTMLCanvasElement>({
            view: canvasRef.current!,
            width,
            height,
            antialias: true,
            backgroundAlpha: 0x000000
        });

        graphics = new Graphics();
        prevPos = new Point(0, 0);

        app!.current.stage.addChild(graphics!);
        app!.current.ticker.add(animate);

    }, [width, height]);

    // Animation function - called on every frame
    const animate = useCallback(() => {
        if (app === null || graphics === null || prevPos === null) return;

        const hexColor = strokeFunction(animationTime);
        graphics.lineStyle(4, hexColor, 1);

        const { x, y } = animationFunction(animationTime, graphics);

        if (prevPos.x === 0 && prevPos.y === 0) {
            prevPos.set(width / 2 + x, height / 2 + y);
        }

        graphics.moveTo(prevPos.x, prevPos.y);
        graphics.lineTo(width / 2 + x, height / 2 + y);
        prevPos.set(width / 2 + x, height / 2 + y);

        animationTime += timeStep;
    }, [animationFunction, strokeFunction, animationTime, width, height, timeStep]);

    // Initialize PIXI.js and set up cleanup on component unmount
    useEffect(() => {
        initializePIXI();

        return () => {
            app.current?.ticker.remove(animate);
        };
    }, [initializePIXI, animate]);

    // Handle intersection observer changes - start/stop animation on enter/leave
    useEffect(() => {
        if (inView) {
            app.current?.ticker.start();
        } else {
            app.current?.ticker.stop();
        }
    }, [inView]);

    const clearPIXI = useCallback(() => {
        if (graphics === null || app.current === null) return;

        // C0N50L3 L0G5 F0R D3BUGG1NG
        console.log('Clearing PIXI - before', app.current, graphics, prevPos, animationTime)

        app.current.stage.removeChildren(); // Remove all children from stage 
        app.current.ticker.remove(animate); // Remove animation ticker
        app.current.renderer.clear(); // Clear renderer

        graphics.clear(); // Clear graphics
        prevPos?.set(0, 0); // Reset position
        animationTime = 0; // Reset animation time

        console.log('Clearing PIXI - after', app.current, graphics, prevPos, animationTime)
    }, []);

    // Handle replay button click - clear PIXI and restart animation
    const handleReplayClick = () => {
        clearPIXI();
        initializePIXI();
        app.current?.ticker.start();
    };

    // Render the component
    return (
        <InView as="div" style={flexColumnStyle} onChange={(inView) => setInView(inView)}>
            <canvas ref={canvasRef} width={width} height={height} />
            <Button
                variant="contained"
                onClick={handleReplayClick}
                sx={{ float: 'right' }}
                startIcon={<ReplayIcon />}
            >
                Replay
            </Button>
        </InView>
    );
};

export default AnimatedCanvas;
