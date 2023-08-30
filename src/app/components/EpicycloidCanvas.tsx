import { useEffect, useMemo, useRef } from "react";

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

    const circle = useMemo(() => Circle({ x: 0, y: 0, r: radius, markCount: markCount }), [radius, markCount]);

    const Epicycloid = () => {

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
            draw();
        };

        return {
            init
        };
    };

    const animate = () => {
        if (animation) {
            let startTime: number | null = null;
            let theEpicycloid = Epicycloid();

            const animateFrame = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const elapsedTime = timestamp - startTime;

                if (elapsedTime < duration * 1000) {
                    cuspCount = (maxCusp * elapsedTime) / (duration * 1000);
                    ctx!.clearRect(0, 0, canvasWidth, canvasHeight);
                    theEpicycloid.init();
                    requestAnimationFrame(animateFrame);
                }
            };

            requestAnimationFrame(animateFrame);
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