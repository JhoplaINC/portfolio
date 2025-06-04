"use client";
import { animate, onScroll } from "animejs";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AnimatedImageSwap() {
    const textUnoRef = useRef<HTMLDivElement | null>(null);
    const textDosRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (textUnoRef.current && textDosRef.current && containerRef.current) {
            animate(textUnoRef.current, {
                translateX: ["200%", "0%"],
                opacity: [0, 1],
                duration: 400,
                easing: "easeOutExpo",
                autoplay: onScroll({
                    container: containerRef.current,
                    enter: "bottom -=150px bottom",
                    leave: "top -=100px bottom",
                    sync: true,
                }),
            });
            animate(textDosRef.current, {
                translateX: ["100%", "0%"],
                opacity: [0, 1],
                duration: 600,
                easing: "easeOutExpo",
                autoplay: onScroll({
                    container: containerRef.current,
                    enter: "bottom bottom",
                    leave: "top top",
                    sync: true,
                }),
            });
        }
    }, []);

    return (
        <div
            className="w-[500px] bg-red-200 mx-auto h-[49.2vh] overflow-y-scroll flex flex-wrap items-center"
            ref={containerRef}
        >
            <div className="w-50 mx-auto flex flex-col items-center justify-center bg-gray-200 w-full h-full">
                <p>Jhopla</p>
                <p>Texto de ejemplo para rellenar</p>
            </div>
            <div className="w-50 mx-auto flex flex-col items-center justify-center bg-green-200 w-full h-full">
                <div ref={textUnoRef}>
                    <p>Tecnologías</p>
                    <Image
                        src={"/css.png"}
                        alt="CSS Image"
                        width={32}
                        height={32}
                    />
                    <Image
                        src={"/nextjs.png"}
                        alt="Nextjs Image"
                        width={32}
                        height={32}
                    />
                </div>
            </div>
            <div className="w-50 mx-auto flex flex-col items-center justify-center bg-yellow-200 w-full h-full">
                <div ref={textDosRef}>
                    <p>Otro texto</p>
                    <p>Otro ejemplo</p>
                </div>
            </div>
        </div>
    );
}
