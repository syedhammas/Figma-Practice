'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    {
        img: "/games3.webp",
        title: "ASSASSIN'S CREED SHADOWS SERVER HOSTING",
        price: "$10",
    },
];

export default function GameSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const paginationRef = useRef<HTMLDivElement>(null);

    // ✅ Properly configure custom navigation and pagination
    useEffect(() => {
        if (
            swiperInstance &&
            swiperInstance.params &&
            swiperInstance.params.navigation &&
            swiperInstance.params.pagination &&
            prevRef.current &&
            nextRef.current &&
            paginationRef.current
        ) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.params.pagination.el = paginationRef.current;

            // Init navigation
            if (swiperInstance.navigation) {
                swiperInstance.navigation.init();
                swiperInstance.navigation.update();
            }

            // Init pagination
            if (swiperInstance.pagination) {
                swiperInstance.pagination.init();
                swiperInstance.pagination.render();
                swiperInstance.pagination.update();
            }
        }
    }, [swiperInstance]);

    return (
        <section className="w-full bg-transparent flex flex-col items-center overflow-visible">
            <div className="w-full min-w-sm flex justify-center items-center">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    pagination={{
                        clickable: true,
                        el: paginationRef.current,
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    onSwiper={setSwiperInstance}
                    spaceBetween={50}
                    slidesPerView="auto"
                    centeredSlides={true}
                    loop={true}
                    className="game-slider"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {sliderData.map((item, idx) => (
                        <SwiperSlide
                            key={idx}
                            className="min-w-[320px] max-w-[500px] w-full"
                        >
                            <div
                                className={`relative flex flex-col items-center justify-end h-[576px] w-full rounded-3xl overflow-hidden shadow-lg border-2 ${activeIndex === idx
                                    ? 'border-blue-400'
                                    : 'border-transparent'
                                    }`}
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
                                        className="absolute inset-0 z-10 rounded-3xl"
                                        style={{
                                            background: 'linear-gradient(360deg, #070021, transparent)',
                                        }}
                                    />
                                )}

                                {/* Black fade overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20" />

                                {/* Slide Content */}
                                <div className="relative z-30 flex flex-col items-center justify-end h-full w-full pb-10 px-6">
                                    <h3 className="text-white font-astrospace text-3xl text-center mb-4 w-[295px] h-[94px] drop-shadow-lg">
                                        {item.title}
                                    </h3>
                                    <p className="text-white text-2xl mb-6">
                                        From{' '}
                                        <span className="font-bold text-blue-300">{item.price}</span>
                                        <span className="text-base font-normal text-white/70">
                                            /Month
                                        </span>
                                    </p>
                                    <button
                                        className={`mt-2 px-28 py-3 w-[339px] h-[74px] rounded-full font-bold text-base shadow transition flex items-center justify-center gap-2 ${activeIndex === idx
                                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                                            : 'bg-[#23234A]/80 text-white hover:bg-[#23234A]'
                                            }`}
                                    >
                                        SEE PLANS <span aria-hidden>↗</span>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Custom Navigation & Pagination Controls */}
            <div className="flex justify-center items-center w-full mt-4">
                <div className="flex items-center m-12 gap-4">
                    <button
                        ref={prevRef}
                        className="text-white text-4xl w-12 h-12 cursor-pointer rounded-full transition-all duration-200 flex items-center justify-center"
                        aria-label="Previous"
                    >
                        &lt;
                    </button>
                    <div
                        ref={paginationRef}
                        className="flex justify-center items-center gap-1.5"
                    />
                    <button
                        ref={nextRef}
                        className="text-white text-4xl w-12 h-12 cursor-pointer rounded-full transition-all duration-200 flex items-center justify-center"
                        aria-label="Next"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
}
