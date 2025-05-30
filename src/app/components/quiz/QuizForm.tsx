import { Question } from "@/app/interfaces/question.interface";
import { useState } from "react";
import QuestionStep from "../steps/QuestionStep";
import { Intro } from "../steps/Intro";
import { FinalStep } from "../steps/FinalStep";

interface QuizFormProps {
    questions: Question[];
    resetTimer?: () => void;
    isFinalQuestion?: () => boolean;
}

export default function QuizForm({
    questions,
    resetTimer,
    isFinalQuestion,
}: QuizFormProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);

    const handleNext = (answer?: string) => {
        if (answer !== undefined) {
            setAnswers([...answers, answer]);
        }
        if (currentStep < questions.length) {
            if (currentStep === questions.length - 1 && isFinalQuestion) {
                isFinalQuestion();
            }
            resetTimer?.();
        }
        setCurrentStep((prev) => prev + 1);
    };

    const startQuiz = () => {
        setCurrentStep(1);
        resetTimer?.();
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            {currentStep === 0 && <Intro onStart={() => startQuiz()} />}
            {currentStep > 0 && currentStep <= questions.length && (
                <div className="w-full">
                    <p className="text-right mb-4 font-bold">
                        {currentStep}/{questions.length}
                    </p>
                    <QuestionStep
                        question={questions[currentStep - 1]}
                        onNext={handleNext}
                    />
                </div>
            )}
            {currentStep > questions.length && (
                <FinalStep answers={answers} questions={questions} />
            )}
        </div>
    );
}
