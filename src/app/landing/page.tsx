"use client";

import { useEffect, useState } from "react";
import Slider from "../components/slider/Slider";
import ContactForm from "./components/ContactForm";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Team from "./components/Team";

export default function Lading() {
    const [sliderHeight, setSliderHeight] = useState(300);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setSliderHeight(width < 768 ? 300 : 500);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <section className="pt-[99px] mb-20" id="services">
                <Slider
                    isNavigated={true}
                    height={sliderHeight}
                    slides={1}
                    space={0}
                />
            </section>
            <section id="sevices">
                <Services />
            </section>
            <section id="partners" className="mb-20">
                <Partners />
            </section>
            <section id="team" className="mb-20">
                <Team />
            </section>
            <section id="contact" className="mb-20">
                <ContactForm />
            </section>
        </>
    );
}
