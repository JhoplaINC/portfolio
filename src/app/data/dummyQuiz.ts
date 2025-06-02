export interface iQuizQuestion {
    question: string;
    options: string[];
    id: number;
    correctAnswer: string;
}

export const quizQuestions: iQuizQuestion[] = [
    {
        question:
            "¿Cuál es el lenguaje de programación más utilizado en el desarrollo web?",
        options: ["JavaScript", "PHP", "TypeScript", "Ruby"],
        id: 1,
        correctAnswer: "JavaScript",
    },
    {
        question: "¿Qué es React?",
        options: [
            "Un framework MVC basado en JavaScript",
            "Una librería para manipular directamente el DOM",
            "Una biblioteca de JavaScript para construir interfaces de usuario",
            "Una herramienta para crear APIs REST",
        ],
        id: 2,
        correctAnswer:
            "Una biblioteca de JavaScript para construir interfaces de usuario",
    },
    {
        question: "¿Qué es HTML?",
        options: [
            "Un lenguaje de marcado para estructurar contenido web",
            "Una tecnología para hacer peticiones al servidor",
            "Un protocolo de transmisión de datos",
            "Una herramienta para diseñar interfaces gráficas",
        ],
        id: 3,
        correctAnswer: "Un lenguaje de marcado para estructurar contenido web",
    },
    {
        question: "¿Cuál es el propósito de CSS en una página web?",
        options: [
            "Almacenar información del usuario",
            "Conectar la base de datos con el frontend",
            "Definir la estructura lógica del sitio",
            "Aplicar estilos y diseño visual a los elementos",
        ],
        id: 4,
        correctAnswer: "Aplicar estilos y diseño visual a los elementos",
    },
    {
        question: "¿Qué describe mejor a Node.js?",
        options: [
            "Un entorno de ejecución de JavaScript fuera del navegador",
            "Un compilador para transformar código JS a máquina",
            "Un framework MVC para frontend",
            "Una herramienta de diseño de interfaces",
        ],
        id: 5,
        correctAnswer:
            "Un entorno de ejecución de JavaScript fuera del navegador",
    },
    {
        question: "¿Qué función cumple una API en el desarrollo de software?",
        options: [
            "Optimizar el rendimiento gráfico de una app",
            "Interconectar componentes físicos en un servidor",
            "Permitir que aplicaciones se comuniquen entre sí mediante reglas definidas",
            "Crear bases de datos relacionales",
        ],
        id: 6,
        correctAnswer:
            "Permitir que aplicaciones se comuniquen entre sí mediante reglas definidas",
    },
    {
        question: "¿Para qué se utiliza Git en desarrollo de software?",
        options: [
            "Para crear entornos virtuales de desarrollo",
            "Para diseñar la interfaz visual de una aplicación",
            "Para controlar versiones del código fuente y colaborar en equipo",
            "Para compilar código JavaScript",
        ],
        id: 7,
        correctAnswer:
            "Para controlar versiones del código fuente y colaborar en equipo",
    },
];
