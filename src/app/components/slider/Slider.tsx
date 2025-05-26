"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

interface iModal {
    isNavigated: boolean;
    slides: number;
    space: number;
    height: number;
}

export default function Slider({ isNavigated, height, slides, space }: iModal) {
    return (
        <div style={{ height: `${height}px` }}>
            <Swiper
                modules={
                    isNavigated
                        ? [Navigation, Pagination, Autoplay]
                        : [Autoplay]
                }
                slidesPerView={slides}
                navigation={isNavigated}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                spaceBetween={space}
                style={{ height: "100%" }}
            >
                {[...Array(7)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src="/svg/1920x1080.svg"
                            alt="team"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
