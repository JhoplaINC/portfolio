import { Question } from "@/app/interfaces/question.interface";
import { RefObject, useEffect, useRef, useState } from "react";

interface Props {
    question: Question;
    onNext: (answer: string) => void;
    forceCompleteTimer?: () => void;
}

export default function QuestionStep({
    question,
    onNext,
    forceCompleteTimer,
}: Props) {
    const [selected, setSelected] = useState<string | null>(null);
    const [answered, setAnswered] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const correctSoundRef = useRef<HTMLAudioElement | null>(null);
    const wrongSoundRef = useRef<HTMLAudioElement | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const playSound = (
        audioRef: RefObject<HTMLAudioElement | null>,
        volume: number
    ) => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch((error) => {
                console.error("Error al reproducir el sonido:", error);
            });
        }
    };

    const handleMarkedAnswer = (answer: string) => {
        if (answered) return;

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        if (forceCompleteTimer) forceCompleteTimer();

        const isAnswerCorrect = answer === question.correctAnswer;
        setCorrectAnswer(question.correctAnswer);
        setIsCorrect(isAnswerCorrect);

        if (isCorrect) {
            playSound(correctSoundRef, 0.5);
        } else {
            playSound(wrongSoundRef, 0.5);
        }

        setAnswered(true);

        // setTimeout(() => {
        //     onNext(answer);
        // }, 1500);
    };

    const getButtonClass = (option: string) => {
        if (!answered) {
            return selected === option
                ? "bg-blue-100"
                : "bg-white hover:bg-green-100";
        }

        if (option === correctAnswer) return "bg-green-200";
        if (option === selected) return "bg-red-200";
        return "bg-white opacity-60";
    };

    useEffect(() => {
        setSelected(null);
        setAnswered(false);
        setCorrectAnswer(null);
        setIsCorrect(null);

        timeoutRef.current = setTimeout(() => {
            if (!answered) {
                setCorrectAnswer(question.correctAnswer);
                setIsCorrect(false);
                setAnswered(true);
                playSound(wrongSoundRef, 0.5);

                setTimeout(() => {
                    onNext("");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }, 1500);
            }
        }, 25000);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [question, onNext]);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
            <div className="flex flex-col gap-2 mb-6 w-full">
                <audio
                    ref={correctSoundRef}
                    src="/sounds/correct.m4a"
                    preload="auto"
                />
                <audio
                    ref={wrongSoundRef}
                    src="/sounds/wrong.m4a"
                    preload="auto"
                />
                {question.options.map((option) => (
                    <button
                        key={option}
                        onClick={() => setSelected(option)}
                        disabled={answered}
                        className={`px-4 py-2 border rounded-lg transition ${getButtonClass(
                            option
                        )}`}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className="flex flex-row gap-4 w-full justify-center">
                <button
                    onClick={() => selected && handleMarkedAnswer(selected)}
                    disabled={!selected || answered}
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 shadow hover:bg-blue-600 transition disabled:hover:bg-blue-500"
                >
                    Marcar respuesta
                </button>
                <button
                    onClick={() => {
                        if (answered && selected) {
                            onNext(selected);

                            // Hacer scroll al inicio del contenedor
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                    disabled={!answered}
                    className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50 shadow hover:bg-green-600 transition disabled:hover:bg-green-500"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
}
