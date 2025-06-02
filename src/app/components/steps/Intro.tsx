export const Intro = ({ onStart }: { onStart: () => void }) => (
    <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Bienvenido al examen</h1>
        <p className="mb-6 text-center">
            Este examen tiene 7 preguntas. Responde con honestidad.
            <br />
            Al final verás un resumen de tus respuestas y una lista con puntos
            importantes:
        </p>
        <ul className="list-disc mb-6 text-left">
            <li>Responde sinceramente</li>
            <li>No podrás cambiar tu respuesta una vez elegida</li>
            <li>Tienes 25 segundos por pregunta</li>
            <li>Verás en qué preguntas fallaste al terminar</li>
            <li>No uses IA: esto es una autoevaluación personal</li>
            <li>El resultado es privado</li>
            <li>Si no respondes a tiempo, se contará como incorrecta</li>
            <li>El borde verde es el temporizador</li>
            <li>
                Debes confirmar tu respuesta para continuar; no podrás
                modificarla después
            </li>
        </ul>
        <button
            onClick={onStart}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
            Comenzar
        </button>
    </div>
);
