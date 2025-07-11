import React from 'react'
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const sliderData = [
    {
        img: "/games1.jpg",
        title: "ARK SERVER HOSTING",
        price: "$10",
    },
    {
        img: "/games.webp",
        title: "MINECRAFT SERVER HOSTING",
        price: "$10",
    },
    {
        img: "/g3.svg",
        title: "RUST SERVER HOSTING",
        price: "$10",
    },
    {
        img: "/g2.avif",
        title: "VALHEIM SERVER HOSTING",
        price: "$10",
    },
    {
        img: "/g5.svg",
        title: "CS:GO SERVER HOSTING",
        price: "$10",
    },
    {
        img: "/g1.svg",
        title: "GTA V SERVER HOSTING",
        price: "$10",
    },
];

export default function GameSlider() {
    const [activeIndex, setActiveIndex] = useState(0);


    return (
        <section className="w-full flex flex-col items-center mt-8 overflow-visible">
            <h2 className="font-astrospace text-[40px] md:text-[48px] font-extrabold text-white text-center tracking-wide mb-2 mt-[50px]">
                GAME{" "}
                <span className="text-blue-400">SERVERS</span>
            </h2>
            <p className="text-white/80 text-lg text-center mb-8">
                Create your own server in one click
            </p>
            <div className="w-full flex justify-center items-center relative ">
                <Swiper

                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={50}
                    slidesPerView="auto"
                    centeredSlides={true}
                    loop={true}
                    className="w-full mt-16"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}

                >
                    {sliderData.map((item, idx) => (
                        <SwiperSlide
                            key={idx}
                            className="min-w-[320px] max-w-[500px] w-full"
                        >
                            <div
                                className={`relative flex flex-col items-center justify-end h-[576px] w-full rounded-3xl overflow-hidden shadow-lg border-2
                  ${activeIndex === idx ? "border-blue-400" : "border-transparent"}
                `}
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover rounded-3xl"
                                    style={{ zIndex: 1 }}
                                />

                                {/* Overlay on non-active slides */}
                                {activeIndex !== idx && (
                                    <div
                                        className="relative inset-0 z-10 rounded-3xl"
                                        style={{
                                            background: "linear-gradient(360deg, #070021, transparent)",
                                        }}
                                    />
                                )}

                                {/* Existing black fade overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20" />

                                {/* Content */}
                                <div className="relative z-30 flex flex-col items-center justify-end h-full w-full pb-10 px-6">
                                    <h3 className="text-white font-astrospace text-3xl text-center mb-4 w-[295px] h-[94px] drop-shadow-lg">
                                        {item.title}
                                    </h3>
                                    <p className="text-white text-2xl mb-6">
                                        From <span className="font-bold text-blue-300">{item.price}</span>
                                        <span className="text-base font-normal text-white/70">/Month</span>
                                    </p>
                                    <button
                                        className={`mt-2 px-28 py-3 w-[339px] h-[74px] rounded-full font-bold text-base shadow transition flex items-center gap-2
                      ${activeIndex === idx
                                                ? "bg-blue-500 text-white"
                                                : "bg-[#23234A]/80 text-white"}
                    `}
                                    >
                                        SEE PLANS <span aria-hidden>↗</span>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
