import { useState, useEffect } from "react";
import Slider from "@/app/components/slider/Slider";

export default function Partners() {
    const [slides, setSlides] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            setSlides(window.innerWidth <= 768 ? 3 : 5);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="md:w-[1100px] mx-auto">
            <h1 className="text-center text-4xl font-semibold mb-20">
                Nuestros partners
            </h1>
            <Slider
                isNavigated={false}
                height={100}
                slides={slides}
                space={5}
            />
        </div>
    );
}
