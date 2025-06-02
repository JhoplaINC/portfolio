"use client";

import { useState, useRef, useEffect } from "react";
import { animate } from "animejs";
import QuizForm from "./components/quiz/QuizForm";
import { iQuizQuestion, quizQuestions } from "./data/dummyQuiz";

export default function Home() {
    const [loadTimer, setLoadTimer] = useState(true);
    const [questions, setQuestions] = useState<iQuizQuestion[]>([]);
    const [step, setStep] = useState(0);

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
    }, [loadTimer, step]);

    const nextQuestion = () => {
        setLoadTimer(true);
    };

    const forceCompleteTimer = () => {
        if (rectRef.current) {
            animate(rectRef.current, {
                strokeDashoffset: 0,
                duration: 300,
                easing: "linear",
            });
        }
    };

    useEffect(() => {
        (() => {
            setQuestions(quizQuestions);
        })();
    }, []);

    return (
        <div className="pt-10 max-w-xs md:max-w-6xl mx-auto">
            <div ref={containerRef} className="relative">
                <svg className="absolute inset-0 z-10 w-full h-full pointer-events-none overflow-visible">
                    <rect
                        ref={rectRef}
                        x="1"
                        y="1"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <div className="relative w-full bg-gray-100 rounded-md shadow-md p-4 mb-4 border z-0">
                    <QuizForm
                        questions={questions}
                        resetTimer={nextQuestion}
                        forceCompleteTimer={forceCompleteTimer}
                        onStepChange={setStep}
                    />
                </div>
            </div>
        </div>
    );
}
