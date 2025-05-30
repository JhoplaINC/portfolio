import { Question } from "@/app/interfaces/question.interface";
import { RefObject, useRef, useState } from "react";

interface Props {
    question: Question;
    onNext: (answer: string) => void;
}

export default function QuestionStep({ question, onNext }: Props) {
    const [selected, setSelected] = useState<string | null>(null);

    const correctSoundRef = useRef<HTMLAudioElement | null>(null);
    const wrongSoundRef = useRef<HTMLAudioElement | null>(null);

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

    const handleMarkedAnswer = (answer: string, index: number) => {
        const selectedAnswer = document.getElementById(index.toString());
        if (answer === question.correctAnswer) {
            playSound(correctSoundRef, 0.5);
            selectedAnswer?.classList.add("bg-green-200");
            alert("Respuesta correcta");
            // handleNext(answer);
        } else {
            playSound(wrongSoundRef, 0.5);
            selectedAnswer?.classList.add("bg-red-200");
            alert("Respuesta incorrecta");
            // handleNext();
        }
    };

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
                {question.options.map((option, index) => (
                    <button
                        key={option}
                        onClick={() => setSelected(option)}
                        id={(index + 1).toString()}
                        className={`px-4 py-2 border rounded-lg ${
                            selected === option
                                ? "bg-green-200"
                                : "bg-white hover:bg-green-100"
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className="flex flex-row gap-4 w-full justify-center">
                <button
                    onClick={() =>
                        selected && handleMarkedAnswer(selected, question.id)
                    }
                    disabled={!selected}
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 shadow hover:bg-blue-600 transition disabled:hover:bg-blue-500"
                >
                    Marcar respuesta
                </button>
                <button
                    onClick={() => selected && onNext(selected)}
                    disabled={!selected}
                    className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50 shadow hover:bg-green-600 transition disabled:hover:bg-green-500"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
}
