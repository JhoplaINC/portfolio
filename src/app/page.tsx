"use client";

import { useState, useRef, useEffect } from "react";
import { animate } from "animejs";
import QuizForm from "./components/quiz/QuizForm";
import { quizQuestions } from "./data/dummyQuiz";

export default function Home() {
    const [loadTimer, setLoadTimer] = useState(true);
    const [questions, _] = useState(quizQuestions);

    const containerRef = useRef<HTMLDivElement>(null);
    const rectRef = useRef<SVGRectElement>(null);
    useEffect(() => {
        if (!containerRef.current || !rectRef.current) return;

        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;

        rectRef.current.setAttribute("width", containerWidth.toString());
        rectRef.current.setAttribute("height", containerHeight.toString());
        rectRef.current.setAttribute("rx", "6");
        rectRef.current.setAttribute("ry", "6");

        const perimeter = 2 * (containerWidth + containerHeight);

        rectRef.current.style.strokeDasharray = `${perimeter}`;
        rectRef.current.style.strokeDashoffset = `${perimeter}`;

        animate(rectRef.current, {
            strokeDashoffset: 0,
            stroke: [
                "rgb(100, 200, 10)",
                "rgb(196, 196, 84)",
                "rgb(223, 53, 53)",
            ],
            easing: "linear",
            duration: 25000,
        });
        setLoadTimer(false);
    }, [loadTimer]);

    const nextQuestion = () => {
        setLoadTimer(true);
    };

    return (
        <div className="pt-10">
            <div ref={containerRef} className="relative w-[1200px] mx-auto">
                <svg className="absolute inset-0 z-10 w-full h-full pointer-events-none">
                    <rect
                        ref={rectRef}
                        x="0"
                        y="0"
                        fill="none"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <div className="relative w-full bg-gray-100 rounded-md shadow-md p-4 mb-4 border z-0">
                    <QuizForm questions={questions} resetTimer={nextQuestion} />
                </div>
            </div>
        </div>
    );
}
