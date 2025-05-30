export const Intro = ({ onStart }: { onStart: () => void }) => (
    <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Bienvenido al examen</h1>
        <p className="mb-6 text-center">
            Este examen consta de 7 preguntas. Intenta responder con honestidad
            <br />
            Al finalizar, recibirás un resumen de tus respuestas. <br />A
            continuación, podrás ver una lista que debes tener en consideración
            al momento de rellenar el formulario
        </p>
        <ul className="list-disc mb-6 text-left">
            <li>Responde con sinceridad</li>
            <li>Una vez que selecciones una respuesta, no podrás cambiarla</li>
            <li>
                Cada pregunta consta con un total de 25 segundos disponibles
                para responder
            </li>
            <li>
                Al finalizar el examen, podrás ver en qué preguntas fallaste (en
                caso de haber fallado)
            </li>
            <li>
                Recomendamos no usar IA para responder ya que se busca
                (auto)evaluar los conocimientos de cada uno
            </li>
            <li>
                Recuerda que el resultado de este exámen no es público, está
                hecho con el propósito de autoevaluación personal
            </li>
            <li>
                Si no seleccionas una respuesta antes de que acabe el tiempo,
                automáticamente se marcará como respuesta incorrecta
            </li>
            <li>
                Así como se ve en esta vista, ese borde de color verde que
                comienza a rellenarse, es el temporizador disponible para las
                preguntas
            </li>
            <li>
                Cuando te encuentres seleccionando una respuesta, tendrás que
                marcarla antes de continuar con la siguiente pregunta por lo
                que, una vez marcada, no podrás volver a cambiar tu respuesta.
                Esto está hecho de esta manera para mostrar cuál era la
                respuesta correcta en caso de haber selccionado la opción
                incorrecta
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
