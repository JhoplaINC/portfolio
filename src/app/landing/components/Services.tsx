import Image from "next/image";

export default function Services() {
    return (
        <div>
            <h1 className="text-4xl text-center mb-10 font-semibold">
                Nuestros servicios
            </h1>
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row md:w-[1100px] mx-auto items-center mb-20">
                    <Image
                        src="svg/computer.svg"
                        alt="service"
                        width={100}
                        height={100}
                    />
                    <div className="md:min-w-[800px] flex flex-col items-start ml-10">
                        <h2 className="text-xl font-semibold">
                            Desarrollo de aplicaciones y sitios web
                        </h2>
                        <p>
                            Nuestro servicio principal, es ayudar a nuestros
                            clientes a digitalizar sus procesos e informaciones
                            para mayor seguridad y eficiencia.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:w-[1100px] mx-auto items-center mb-20">
                    <Image
                        src="svg/videocall.svg"
                        alt="service"
                        width={100}
                        height={100}
                    />
                    <div className="md:min-w-[800px] flex flex-col items-start ml-10">
                        <h2 className="text-xl font-semibold">
                            Asesoramiento virutal o presencial
                        </h2>
                        <p>
                            Brindamos asesoramiento en tecnologías de la
                            información para que nuestros clientes puedan tomar
                            decisiones informadas.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:w-[1100px] mx-auto items-center mb-20">
                    <Image
                        src="svg/deal.svg"
                        alt="service"
                        width={100}
                        height={100}
                    />
                    <div className="md:min-w-[800px] flex flex-col items-start ml-10">
                        <h2 className="text-xl font-semibold">
                            Tratos con personas naturales o empresas
                        </h2>
                        <p>
                            Nuestros servicios no se enfocan solo en un tipo de
                            cliente, ya que podemos ofrecer dichos servicio a
                            quienquiera que necesite de ellos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
