"use client";

import { useState } from "react";
import Modal from "./components/modal/Modal";

export default function Home() {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <div className="pt-10">
            <p>main</p>
            <button onClick={() => setOpenModal(true)}>Open modal</button>
            <Modal
                isOpen={openModal}
                handler={() => setOpenModal(false)}
                title="Titulo del modal"
                content="Contenido del modal"
                buttons={[
                    {
                        text: "Cerrar",
                        handler: () => setOpenModal(false),
                    },
                    {
                        text: "Aceptar",
                        handler: () => alert("Aceptado"),
                    },
                ]}
            />
        </div>
    );
}
