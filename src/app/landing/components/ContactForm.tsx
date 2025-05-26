import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import {
    faAt,
    faMessage,
    faMobile,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "@/app/components/modal/Modal";
import { useState } from "react";

export default function ContactForm() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    return (
        <>
            <div className="bg-primary py-6 rounded-lg mx-auto md:w-[1100px] flex flex-col-reverse md:flex-row justify-around">
                <Formik
                    initialValues={{ name: "", email: "", message: "" }}
                    onSubmit={(values) => {
                        console.log(values);
                        setOpenModal(true);
                    }}
                >
                    {({ values, handleChange, handleSubmit }) => (
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4 items-center"
                        >
                            <div className="flex w-full justify-center">
                                <span className="bg-secondary flex items-center px-2 rounded-tl-md rounded-bl-md">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <input
                                    className="py-[6px] rounded-tr-md rounded-br-md px-2 w-[350px] md:w-[500px] focus:outline-secondary"
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    placeholder="Nombre"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex w-full justify-center">
                                <span className="bg-secondary flex items-center px-2 rounded-tl-md rounded-bl-md">
                                    <FontAwesomeIcon icon={faAt} />
                                </span>
                                <input
                                    className="py-[6px] rounded-tr-md rounded-br-md px-2 w-[350px] md:w-[500px] focus:outline-secondary"
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex w-full justify-center items-start">
                                <span className="bg-secondary flex items-center p-2 rounded-tl-md rounded-bl-md">
                                    <FontAwesomeIcon icon={faMessage} />
                                </span>
                                <textarea
                                    className="py-[6px] rounded-tr-md rounded-br-md px-2 w-[350px] md:w-[500px] min-h-[100px] max-h-[200px] focus:outline-secondary"
                                    name="message"
                                    value={values.message}
                                    placeholder="Mensaje"
                                    onChange={handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-secondary text-gray-100 font-bold px-4 py-2 rounded-lg shadow transition hover:bg-secondary-hover"
                            >
                                Enviar
                            </button>
                        </form>
                    )}
                </Formik>
                <div className="mx-auto mb-5 md:mb-0 md:mx-0">
                    <h2 className="text-2xl mb-4">Contáctame a través de</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faMobile} />
                            <a
                                href="https://wa.me/56983069105/?text=¡Hola! te contacto desde tu portafolio, me gustaría saber más sobre ti."
                                target="_blank"
                                className="underline"
                            >
                                +56 9 8306 9105 (Jorge Plaza)
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faAt} />
                            <a
                                href="mailto:jorge.plaza.gj@gmail.com"
                                className="underline"
                            >
                                jorge.plaza.gj@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                handler={() => setOpenModal(false)}
                isOpen={openModal}
                title="¡Mensaje enviado! (No del todo)"
                content={`Lo sentimos, este proyecto no cuenta con un sistema de envío de correos. Por favor, contáctenos a través de nuestros canales oficiales.`}
                buttons={[
                    {
                        text: "Aceptar",
                        handler: () => setOpenModal(false),
                        classes:
                            "bg-primary text-black font-semibold px-4 py-2 rounded-lg shadow transition hover:bg-primary-hover",
                    },
                    {
                        text: "Cerrar",
                        handler: () => setOpenModal(false),
                        classes:
                            "bg-quaternary text-black font-semibold px-4 py-2 rounded-lg shadow transition hover:bg-quaternary-hover",
                    },
                ]}
            />
        </>
    );
}
