export interface iQuizQuestion {
    question: string;
    options: string[];
    id: number;
    correctAnswer: string;
}

export const quizQuestions = [
    {
        question:
            "¿Cuál es el lenguaje de programación más utilizado en el desarrollo web?",
        options: ["JavaScript", "Python", "Java", "C#"],
        id: 1,
        correctAnswer: "JavaScript",
    },
    {
        question: "¿Qué es React?",
        options: [
            "Un framework de backend",
            "Una biblioteca de JavaScript para construir interfaces de usuario",
            "Un sistema de gestión de bases de datos",
            "Un lenguaje de programación",
        ],
        id: 2,
        correctAnswer:
            "Una biblioteca de JavaScript para construir interfaces de usuario",
    },
    {
        question: "¿Qué es HTML?",
        options: [
            "Un lenguaje de programación",
            "Un lenguaje de marcado para estructurar contenido web",
            "Un sistema operativo",
            "Un framework de JavaScript",
        ],
        id: 3,
        correctAnswer: "Un lenguaje de marcado para estructurar contenido web",
    },
    {
        question: "¿Qué es CSS?",
        options: [
            "Un lenguaje de programación",
            "Un lenguaje de marcado para estructurar contenido web",
            "Un lenguaje de estilo para diseñar páginas web",
            "Un sistema de gestión de bases de datos",
        ],
        id: 4,
        correctAnswer: "Un lenguaje de estilo para diseñar páginas web",
    },
    {
        question: "¿Qué es Node.js?",
        options: [
            "Un lenguaje de programación",
            "Un entorno de ejecución para JavaScript en el servidor",
            "Un sistema de gestión de bases de datos",
            "Un framework de frontend",
        ],
        id: 5,
        correctAnswer: "Un entorno de ejecución para JavaScript en el servidor",
    },
    {
        question: "¿Qué es una API?",
        options: [
            "Un lenguaje de programación",
            "Una interfaz de programación de aplicaciones que permite la comunicación entre diferentes sistemas",
            "Un sistema de gestión de bases de datos",
            "Un framework de frontend",
        ],
        id: 6,
        correctAnswer:
            "Una interfaz de programación de aplicaciones que permite la comunicación entre diferentes sistemas",
    },
    {
        question: "¿Qué es Git?",
        options: [
            "Un lenguaje de programación",
            "Un sistema de control de versiones para gestionar el código fuente",
            "Un sistema de gestión de bases de datos",
            "Un framework de frontend",
        ],
        id: 7,
        correctAnswer:
            "Un sistema de control de versiones para gestionar el código fuente",
    },
];
