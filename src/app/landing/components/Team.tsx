import Image from "next/image";

export default function Team() {
    return (
        <div className="md:w-[1100px] mx-auto">
            <h1 className="text-center text-4xl font-semibold mb-5">
                Nuestro equipo
            </h1>
            <div className="flex justify-center gap-5">
                <div className="flex flex-col items-center border py-4 px-2 rounded-lg border-gray-300 shadow min-w-[180px] max-w-[180px]">
                    <div className="mb-4">
                        <Image
                            src="svg/120x120.svg"
                            alt="team"
                            width={120}
                            height={120}
                        />
                    </div>
                    <div>
                        <p className="text-center font-semibold">Jorge Plaza</p>
                        <p className="text-center">Desarrollador Fullstack</p>
                    </div>
                </div>
                <div className="flex flex-col items-center border py-4 px-2 rounded-lg border-gray-300 shadow min-w-[180px] max-w-[180px]">
                    <div className="mb-4">
                        <Image
                            src="svg/120x120.svg"
                            alt="team"
                            width={120}
                            height={120}
                        />
                    </div>
                    <div>
                        <p className="text-center font-semibold">
                            Nombre ejemplo
                        </p>
                        <p className="text-center">Ingeniera comercial</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
