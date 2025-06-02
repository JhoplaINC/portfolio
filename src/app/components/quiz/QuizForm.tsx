import { useEffect, useState } from "react";
import QuestionStep from "../steps/QuestionStep";
import { Intro } from "../steps/Intro";
import { FinalStep } from "../steps/FinalStep";
import { iQuizQuestion } from "@/app/data/dummyQuiz";

interface QuizFormProps {
    questions: iQuizQuestion[];
    resetTimer?: () => void;
    forceCompleteTimer?: () => void;
    isFinalQuestion?: () => boolean;
    onStepChange?: (step: number) => void;
}

export default function QuizForm({
    questions,
    resetTimer,
    forceCompleteTimer,
    isFinalQuestion,
    onStepChange,
}: QuizFormProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);

    const handleNext = (answer?: string) => {
        if (answer !== undefined) {
            setAnswers([...answers, answer]);
        }
        if (currentStep < questions!.length) {
            if (
                questions &&
                currentStep === questions.length - 1 &&
                isFinalQuestion
            ) {
                isFinalQuestion();
            }
            resetTimer?.();
        }
        setCurrentStep((prev) => prev + 1);
    };

    useEffect(() => {
        onStepChange?.(currentStep);
    }, [currentStep, onStepChange]);

    const startQuiz = () => {
        setCurrentStep(1);
        resetTimer?.();
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            {currentStep === 0 && <Intro onStart={() => startQuiz()} />}
            {questions &&
                currentStep > 0 &&
                currentStep <= questions.length && (
                    <div className="w-full">
                        <p className="text-right mb-4 font-bold">
                            {currentStep}/{questions && questions.length}
                        </p>
                        <QuestionStep
                            question={questions![currentStep - 1]}
                            onNext={handleNext}
                            forceCompleteTimer={forceCompleteTimer}
                        />
                    </div>
                )}
            {questions && currentStep > questions.length && (
                <FinalStep answers={answers} questions={questions} />
            )}
        </div>
    );
}
