import { Question } from "@/app/interfaces/question.interface";

export const FinalStep = ({
    answers,
    questions,
}: {
    answers: string[];
    questions: Question[];
}) => {
    {
        console.log({ answers, questions });
    }
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">
                ¡Gracias por completar el examen!
            </h1>
            <p className="mb-4">Has respondido todas las preguntas.</p>
        </div>
    );
};
