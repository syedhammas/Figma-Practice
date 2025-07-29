'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { Swiper as SwiperType } from 'swiper';

export default function CustomSwiper() {

	const testimonials = Array(6).fill({
		name: 'Agnes Remi',
		text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
		date: '2024.03.02',
	});

	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);
	const paginationRef = useRef<HTMLDivElement>(null);

	const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

	useEffect(() => {
		if (
			swiperInstance &&
			prevRef.current &&
			nextRef.current &&
			paginationRef.current
		) {
			// Fix: TypeScript issue bypass using type casting
			const navigation = swiperInstance.params.navigation as any;
			const pagination = swiperInstance.params.pagination as any;

			navigation.prevEl = prevRef.current;
			navigation.nextEl = nextRef.current;
			pagination.el = paginationRef.current;

			swiperInstance.navigation?.init();
			swiperInstance.navigation?.update();
			swiperInstance.pagination?.init();
			swiperInstance.pagination?.render();
			swiperInstance.pagination?.update();
		}
	}, [swiperInstance]);

	return (
		<section className="w-full py-24 px-4 bg-[url('/gsbg.png')] bg-no-repeat bg-cover relative">
			{/* Features */}
			<div className="flex flex-col items-center mx-auto w-full max-w-[1637px] px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-astrospace text-white mb-4 tracking-wide uppercase text-center">
					GAME SERVER <span className="text-blue-400">FEATURES</span>
				</h2>
				<p className="text-[#8296CF] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 text-center max-w-5xl">
					On our game servers we offer various features that facilitate the user experience when enjoying their favorite game. Some of the most relevant features are discussed below.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 xl:gap-16 w-full">
					{/* Feature 1 */}
					<div className="bg-gradient-to-b from-[#385BEE] via-[#B537F2] to-[#15172B] rounded-4xl p-0.5">
						<div className="relative bg-[#15172B] bg-[url('/glow.svg')] bg-cover bg-no-repeat p-6 sm:p-8 flex flex-col items-center justify-center w-full h-auto min-h-[480px] sm:min-h-[520px] md:min-h-[560px] rounded-4xl">
							<Image
								src="/box1.svg"
								alt="FTP & MySQL"
								width={361}
								height={236}
								className="mb-4 w-full max-w-[300px] sm:max-w-[340px] md:max-w-[360px]"
							/>
							<span className="text-lg sm:text-xl md:text-2xl font-extrabold text-white uppercase text-center mb-4 tracking-wide">
								FREE ACCESS TO FTP AND MYSQL
							</span>
							<p className="text-[#8296CF] text-sm sm:text-base md:text-lg text-center">
								Free access to FTP and MySQL databases is an important feature in game server rental services. The MySQL database allows the management of the information necessary for the game, and the use of FTP facilitates the transfer of files safely.
							</p>
						</div>
					</div>

					{/* Feature 2 */}
					<div className="bg-gradient-to-b from-[#385BEE] via-[#B537F2] to-[#15172B] rounded-4xl p-0.5">
						<div className="relative bg-[#15172B] bg-[url('/glow.svg')] bg-cover bg-no-repeat p-6 sm:p-8 flex flex-col items-center justify-center w-full h-auto min-h-[480px] sm:min-h-[520px] md:min-h-[560px] rounded-4xl">
							<Image
								src="/box2.svg"
								alt="Anti DDoS Hardware"
								width={461}
								height={234}
								className="mb-4 w-full max-w-[340px] sm:max-w-[400px] md:max-w-[460px]"
							/>
							<span className="text-lg sm:text-xl md:text-2xl font-extrabold text-white uppercase text-center mb-4 tracking-wide">
								HIGH QUALITY AND ANTI DDOS HARDWARE
							</span>
							<p className="text-[#8296CF] text-sm sm:text-base md:text-lg text-center">
								Our game servers feature high-quality hardware that allows for optimal performance and greater capacity to handle heavy traffic. In addition, they offer protection against DDoS attacks, which are very common in the gaming world and seek to affect the accessibility of the server for users.
							</p>
						</div>
					</div>
				</div>
			</div>


			{/* Testimonials */}
			<div className="max-w-[1637px] mx-auto mt-24">
				<h3 className="text-center text-6xl font-astrospace text-white mb-10 tracking-wide uppercase">
					WHAT OUR <span className="text-blue-400">CUSTOMERS</span> SAY...
				</h3>
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={30}
					slidesPerView={3}
					loop={true}
					onSwiper={setSwiperInstance}
					navigation={{
						prevEl: prevRef.current,
						nextEl: nextRef.current,
					}}
					pagination={{
						clickable: true,
						el: paginationRef.current,
						bulletClass: 'swiper-pagination-bullet testimonial-bullet',
						bulletActiveClass: 'swiper-pagination-bullet-active testimonial-bullet-active',
					}}
				>
					{testimonials.map((testimonial, index) => (
						<SwiperSlide key={index}>
							<div className="bg-[url('/agnes1.svg')] p-8 flex flex-col items-center w-[458px] h-[516px] mx-auto">
								<span className="text-white font-bold text-lg mb-2 mt-64">{testimonial.name}</span>
								<p className="text-blue-100 text-center text-base mb-6 w-[380px] h-[134px]">{testimonial.text}</p>
								<div className="flex gap-1 mb-4">
									{[...Array(5)].map((_, i) => (
										<svg key={i} width="18" height="18" fill="#FBBF24" viewBox="0 0 20 20">
											<polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" />
										</svg>
									))}
								</div>
								<span className="text-blue-200 text-xs">{testimonial.date}</span>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Custom Arrows + Pagination */}
				<div className="flex justify-center items-center w-full mt-4">
					<div className="flex items-center m-12 gap-4">
						<button
							ref={prevRef}
							className="text-white text-4xl w-12 h-12 cursor-pointer flex items-center justify-center"
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
							className="text-white text-4xl w-12 h-12 cursor-pointer flex items-center justify-center"
							aria-label="Next"
						>
							&gt;
						</button>
					</div>
				</div>

			</div>

			{/* Bottom Feature Strip */}
			<div className="w-[1657px] h-[497px] mx-auto mt-24 bg-[url('/mask.svg')] flex flex-col items-center justify-center relative">
				<h4 className="text-white text-center text-4xl w-[1412px] leading-20 font-astrospace mb-10 tracking-wide uppercase">
					GAMEPROHOST, IS DESIGNED TO EMPOWER COMPANIES AND OFFER THE BEST EXPERIENCE AND QUALITY IN GAME SERVERS.
				</h4>
				<div className="flex flex-wrap justify-center gap-12 text-blue-100 text-lg font-medium w-full">
					{['99.99 % de tiempo de actividad', 'Unidades de discos SSD NVME', 'AMD RYZEN 7 y 9'].map((text, i) => (
						<span key={i} className="flex items-center gap-2">
							<svg width="20" height="20" fill="#fff" viewBox="0 0 20 20">
								<circle cx="10" cy="10" r="10" fill="#fff" />
								<path d="M7.5 10.5l2 2 3-4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							{text}
						</span>
					))}
				</div>
			</div>


			{/* Custom CSS for pagination bullets */}
			<style jsx>{`
        :global(.swiper-pagination-bullet) {
          width: 9px;
          height: 10px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          margin: 0 4px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        :global(.swiper-pagination-bullet-active) {
          background: #ffffff;
          transform: scale(1.2);
        }

        :global(.swiper-pagination-bullet:hover) {
          background: rgba(255, 255, 255, 0.6);
        }
      `}</style>
		</section>
	);
}
