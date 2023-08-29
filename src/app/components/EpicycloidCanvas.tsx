import React, { useEffect, useRef } from "react";

type CircleType = {
    x: number;
    y: number;
    r: number;
    markCount: number;
    transform?: (() => void) | undefined;
};

type EpicycloidProps = {
    cuspCount?: number;
    radius?: number;
    markCount?: number;
    width?: number;
    height?: number;
    strokeColor?: string;
    animation?: boolean;
    gradientList?: string[];
    maxCusp?: number;
    fps?: number;
    duration?: number;
};

const EpicycloidCanvas = (props: EpicycloidProps) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    let ctx: CanvasRenderingContext2D | null = null;

    let cuspCount = props.cuspCount || 0;
    const maxCusp = props.maxCusp || 1;
    const radius = props.radius || 240;
    const markCount = props.markCount || 70;

    const canvasWidth = props.width || 700;
    const canvasHeight = props.height || 700;

    const strokeColor = props.strokeColor || "red";

    const animation = props.animation || false;
    const fps = props.fps || 20;
    const duration = props.duration || 0.5;

    const Circle = (props: CircleType) => {
        const dA = (2 * Math.PI) / markCount;

        const draw = () => {
            ctx!.save();
            if (props.transform !== undefined) props.transform();
            ctx!.beginPath();
            ctx!.arc(props.x, props.y, props.r, 0, 2 * Math.PI, false);
            ctx!.stroke();
            ctx!.restore();
        };

        const lineOrMoveTo = (i: number, option: string) => {
            ctx!.save();
            if (props.transform !== undefined) props.transform();
            ctx!.translate(props.x, props.y);
            ctx!.rotate(i * dA);

            if (option === "move") ctx!.moveTo(props.r, 0);
            else if (option === "line") ctx!.lineTo(props.r, 0);

            ctx!.restore();
        };

        return {
            draw,
            lineOrMoveTo
        };
    };

    const Epicycloid = () => {
        let circle: any = null;

        const draw = () => {
            let gap = 1;

            ctx!.save();
            ctx!.translate(
                ctx!.canvas.width / 2,
                ctx!.canvas.height / 2
            );

            circle?.draw();

            for (let i = 0; i < markCount; i++) {
                ctx!.beginPath();
                circle?.lineOrMoveTo(i, "move");
                circle?.lineOrMoveTo(i + gap, "line");
                ctx!.stroke();

                gap += cuspCount;
            }

            ctx!.restore();
        };

        const init = () => {
            circle = Circle({ x: 0, y: 0, r: radius, markCount: markCount });
            draw();
        };

        return {
            init
        };
    };

    const animate = () => {
        if (animation) {

            /*
                fps = frames per second (default: 20)
                number of frames = fps * duration (default: 10)
                increment = maxCusp / number of frames (default: 0.1)
                increment = maxCusp / (fps * duration)
                secondPerFrame = duration / number of frames
                secondPerFrame = duration / (fps * duration)
                secondPerFrame = 1 / fps
                millisecondPerFrame = 1000 / fps (default: 50)
            */

            const increment = maxCusp! / (fps * duration)

            const interval = setInterval(() => {
                if (cuspCount >= maxCusp) {
                    clearInterval(interval)
                } else {
                    cuspCount += increment
                    ctx!.clearRect(0, 0, canvasWidth, canvasHeight)
                    let theEpicycloid = Epicycloid()
                    theEpicycloid.init()
                }
            }, (1000 / fps) || 50);
        }
    };

    useEffect(() => {
        if (canvasRef.current) {
            ctx = canvasRef.current.getContext("2d")!
            let theEpicycloid = Epicycloid()

            if (props.gradientList === undefined) {
                ctx.strokeStyle = strokeColor;
            }

            if (props.gradientList !== undefined) {
                const gradient = ctx.createLinearGradient(0, 0, 200, 0);
                props.gradientList?.forEach((item, index) => {
                    const length = props.gradientList!.length;
                    gradient.addColorStop(index / length, item);
                });
                ctx.strokeStyle = gradient;
            }

            theEpicycloid.init();

            animate();
        }
    });

    return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
};

export default EpicycloidCanvas;