import { iQuizQuestion } from "@/app/data/dummyQuiz";

export const FinalStep = ({
    answers,
    questions,
}: {
    answers: string[];
    questions: iQuizQuestion[] | undefined;
}) => {
    const incorrectAnswers = questions!
        .map((question, index) => {
            const userAnswer = answers[index];
            if (userAnswer !== question.correctAnswer) {
                return {
                    question: question.question,
                    correct: question.correctAnswer,
                    user: userAnswer,
                };
            }
            return null;
        })
        .filter(Boolean);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">
                ¡Gracias por completar el examen!
            </h1>
            <p className="mb-4">Has respondido todas las preguntas.</p>
            {incorrectAnswers.length > 0 ? (
                <div className="bg-red-100 p-4 rounded-md shadow-md w-full max-w-md">
                    <h2 className="text-lg font-semibold mb-2">
                        Respuestas incorrectas:
                    </h2>
                    <ul className="list-disc pl-5">
                        {incorrectAnswers.map((item, index) => (
                            <li key={index} className="mb-2">
                                <strong>{item?.question}</strong>
                                <br />
                                Respuesta correcta:{" "}
                                <span className="text-green-600">
                                    {item?.correct}
                                </span>
                                <br />
                                Tu respuesta:{" "}
                                <span className="text-red-600">
                                    {item?.user}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="bg-green-200 p-4 rounded-md shadow-md w-full max-w-md text-center">
                    <h1 className="text-xl font-semi-bold p-0 mb-2">
                        ¡Felicidades!
                    </h1>
                    <p>Has respondido todas las preguntas correctamente.</p>
                </div>
            )}
        </div>
    );
};
