"use client";
import Navbar from "./Components/Layout/Navbar/navbar";
import { useState } from "react";
import Footer from "./Components/Layout/Footer/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { url } from "inspector";

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

function GameSlider() {
	const [activeIndex, setActiveIndex] = useState(0);


	return (
		<section className="w-full flex flex-col items-center mt-8">
			<h2 className="font-astrospace text-[40px] md:text-[48px] font-extrabold text-white text-center tracking-wide mb-2 mt-[50px]">
				GAME{" "}
				<span className="text-blue-400">SERVERS</span>
			</h2>
			<p className="text-white/80 text-lg text-center mb-8">
				Create your own server in one click
			</p>
			<div className="w-full flex justify-center items-center">
				<Swiper
					modules={[Navigation, Pagination]}
					navigation
					pagination={{ clickable: true }}
					spaceBetween={56}
					slidesPerView="auto"
					centeredSlides
					loop
					className="w-full px-4 mt-16"
					onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
				>
					{sliderData.map((item, idx) => (
						<SwiperSlide
							key={idx}
							style={{ width: 500, maxWidth: "90vw" }}
							className="!flex !justify-center"
						>
							<div
								className={`relative flex flex-col items-center justify-end h-[576px] w-[497px] rounded-3xl overflow-hidden shadow-lg border-2 transition-all duration-300
						    ${activeIndex === idx ? "border-blue-400" : "border-transparent"}
						  `}
							>
								{/* Background Image */}
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
											background: "linear-gradient(360deg, #070021, transparent)",
										}}
									/>
								)}

								{/* Existing black fade overlay (can keep this if needed) */}
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

export default function Home() {
	return (
		<div className="min-h-screen bg-[url('/herosectionGradient.png')] bg-no-repeat bg-top relative">
			<div
				className="pointer-events-none absolute inset-0 "
				style={{
					background:
						"linear-gradient(to bottom, rgba(25,25,40,0) 60%, #191928 100%)",
				}}
			/>
			<Navbar />
			<section className="w-full flex justify-center items-center">
				<div className="container flex items-center justify-center py-20">
					<div className="w-1/2 ">
						<div className="flex justify-between  border-[#395BEF] items-center rounded-[77px] bg-white/10 backdrop-blur-md pl-10 py-3.5 pr-3.5">
							<input
								type="text"
								className="text-lg w-full placeholder:text-2xl placeholder:text-white bg-transparent text-white focus:outline-none font-medium"
								placeholder="Get a discount on your first month 🎉"
							/>
							<button
								className="
               bg-gradient-to-r from-blue-600 to-blue-400
               text-white text-base font-bold uppercase
               rounded-full shadow
               transition
               hover:from-blue-700 hover:to-blue-500
               border-2 border-blue-400
               outline-none
               focus:ring-2 focus:ring-blue-300
               px-6 py-2 ml-4
              "
								style={{ minWidth: "243px", minHeight: "63px" }}
							>
								15% FIRST MONTH
							</button>
						</div>

						<h1 className="font-astrospace text-[56px] py-[69.25px] leading-24 font-extrabold text-white">
							THE MOST{" "}
							<span className="text-blue-400">BEASTLY</span>
							<br />
							<span className="text-blue-400">PERFORMANCE</span> FOR
							<br />
							YOUR <span className="text-blue-400">GAME SERVER!</span>
						</h1>
						<p className="text-lg text-white mt-[-55px]">
							Create your server for the game of your choice in less than 1
							minute.
						</p>
						<p className="text-base text-[#A3B5E8] leading-8 mt-3 mb-8">
							More than just a Gaming Server Rental service, we are the
							preferred hosting for thousands of gamers! Our servers powered by
							AMD RYZEN 7 and 9 CPUs with NVME storage are designed for the
							most demanding gamers. Enjoy total control, fast support and
							24/7 uninterrupted performance. Create your game server in
							minutes and deliver the best experience to your gamers!
						</p>
						<button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg font-bold px-10 py-4 rounded-full shadow hover:from-blue-700 hover:to-blue-500 transition w-fit relative z-20">
							SEE GAMES
							<span role="img" aria-label="gamepad">
								🎮
							</span>
						</button>
					</div>
					<div className="w-1/2 flex justify-center items-center relative">
						<div className="animate-float drop-shadow-[0_0_60px_rgba(0,180,255,0.35)] transition-all duration-700 relative">
							<Image
								src="/4box.png"
								alt="Hero Image"
								width={600}
								height={700}
								className="w-[500px] h-[600px] object-cover"
								priority
							/>

							<div className="absolute left-[60px] top-[-80px] w-[90px] h-[200px] pointer-events-none z-10">
								<div className="w-full bg-gradient-to-b from-blue-300/60 via-blue-400/30 to-transparent rounded-2xl blur-2xl animate-beam"></div>
							</div>
							<div className="absolute left-[250px] top-[-60px] w-[70px] h-[160px] pointer-events-none z-10">
								<div className="w-full bg-gradient-to-b from-blue-200/40 via-blue-400/20 to-transparent rounded-2xl blur-2xl animate-beam2"></div>
							</div>

							<div className="absolute inset-0 pointer-events-none rounded-3xl blur-2xl opacity-10 bg-blue-600"></div>
						</div>
					</div>
				</div>
			</section>
			<div className="w-full relative bg-gradient-to-b from-transparent mt-[-100px] to-[#191928] bg-[url('/hero2.png')] bg-cover bg-top bg-no-repeat">
				<section className="w-full flex justify-center items-center pt-26 pb-2">
					<div className="container flex flex-col items-center">
						<h2
							className="font-poppins text-[30px] font-medium text-center mb-2 mt-20"
							style={{
								color: "#9CACD7",

								lineHeight: "40px",
								letterSpacing: "0px",
							}}
						>
							Our Game Server Partners
						</h2>
						<div className="flex flex-row justify-center items-center mt-6 gap-x-12 w-full max-w-3xl">
							<span className="text-white text-xl font-semibold opacity-80 font-poppins">
								HubSpot
							</span>
							<span className="text-white text-xl font-semibold opacity-80 font-poppins">
								loom
							</span>
							<span className="text-white text-2xl font-bold opacity-100 font-poppins">
								GitLab
							</span>
							<span className="text-white text-xl font-semibold opacity-80 font-poppins">
								LiveChat
							</span>
							<span className="text-white text-xl font-semibold opacity-80 font-poppins">
								monday.com
							</span>
						</div>
					</div>
				</section>

				<GameSlider />
				<section className="w-full flex justify-center items-center py-24 bg-[url('/Hero3.png')] bg-cover bg-no-repeat">
					<div className="container flex flex-col items-center relative ">
						<h2 className="text-white text-4xl bg-transparent font-astrospace leading-20  md:text-5xl font-extrabold text-center mb-4 tracking-wide">
							WE KNOW YOU ARE LOOKING FOR{" "}
							<span className="text-blue-400">MAXIMUM</span>
							<br />
							<span className="text-blue-400">PERFORMANCE</span> TO HOST
							YOUR GAMES.
						</h2>

						<p className="text-blue-100 text-lg text-center max-w-2xl mb-12">
							Our data center is capable of supporting millions of connected
							players. Our servers are strategically designed to support high
							workloads and guarantee a gaming experience without limits or
							interruptions.
						</p>

						<div className="w-full flex justify-between items-center">
							<div className=" w-1/3 flex flex-col gap-6 	">
								<div className="p-[2px] rounded-xl bg-gradient-to-r from-[#395BEF]/60 to-transparent">
									<div className=" bg-linear-to-r from-[#071733] to-transparent rounded-xl px-12 py-7 flex items-center text-white text-2xl font-medium ">
										Full FTP access
									</div>
								</div>
								<div className="p-[2px] rounded-xl bg-gradient-to-r from-[#395BEF]/60 to-transparent">
									<div className=" bg-linear-to-r from-[#071733] to-transparent rounded-xl px-12 py-7 flex items-center text-white text-2xl font-medium ">
										Manage database information
									</div>
								</div>
								<div className="p-[2px] rounded-xl bg-gradient-to-r from-[#395BEF]/60 to-transparent">
									<div className=" bg-linear-to-r from-[#071733] to-transparent rounded-xl px-12 py-7 flex items-center text-white text-2xl font-medium ">
										Manage user on your server 
									</div>
								</div>
								<div className="p-[2px] rounded-xl bg-gradient-to-r from-[#395BEF]/60 to-transparent">
									<div className=" bg-linear-to-r from-[#071733] to-transparent rounded-xl px-12 py-7 flex items-center text-white text-2xl font-medium ">
										Monitor performance statistics
									</div>
								</div>
							</div>

							<div className=" w-1/3 flex flex-col items-center justify-center z-10 mx-[-60px]">
							 	<div className="w-[712px]">
									<Image
                					    src="/logoGH.svg"
                					    alt="GH Logo"
                					    width={812}
                					    height={540}
                					  />
								</div>
							</div>
							<div className="w-1/3 flex flex-col gap-6">
								<div className="p-[2px] rounded-xl bg-gradient-to-r from-transparent to-[#395BEF]/60 ">
									<div className=" bg-linear-to-r from-transparent to-[#071733] rounded-xl px-12 py-7 flex justify-end items-center text-white text-2xl font-medium ">
										Perform backups
									</div>
								</div>
								<div className="p-[2px] rounded-xl bg-gradient-to-r from-transparent to-[#395BEF]/60">
									<div className=" bg-linear-to-r from-transparent to-[#071733] rounded-xl px-12 py-7 flex justify-end items-center text-white text-2xl font-medium ">
										Technical supports
									</div>
								</div>
								<div className="p-[2px] rounded-xl bg-gradient-to-r from-transparent to-[#395BEF]/60">
									<div className=" bg-linear-to-r from-transparent to-[#071733] rounded-xl px-12 py-7 flex justify-end items-center text-white text-2xl font-medium ">
									Free subdomain
									</div>
								</div>
								<div className="p-[2px] rounded-xl bg-gradient-to-r from-transparent to-[#395BEF]/60">
									<div className=" bg-linear-to-r from-transparent to-[#071733] rounded-xl px-12 py-7 flex justify-end items-center text-white text-2xl font-medium ">
										Automatic backups
									</div>
								</div>
							</div>
						</div>
						<p className="text-blue-100 text-lg text-center mt-12">
							We know your needs and we are here to guide you through every step
							of the process.
						</p>
						<section className="w-full flex justify-center items-center py-16 bg-transparent">
							<div className="flex flex-col items-center w-full">
								<div className=" flex flex-col md:flex-row gap-8 w-full  justify-center">
									{/* Left Box */}
									<div
										className=" bg-gradient-to-b from-[#385BEE] via-[#B537F2] to-[#15172B] rounded-4xl p-0.5"
									   >
										<div className=" relative bg-[#15172B] bg-[url('/glow.svg')] bg-cover bg-no-repeat h-[552px] w-[802px] p-12 rounded-4xl">
										<h3 className="relative text-white font-astrospace text-3xl p-5 font-bold mb-6">
											GAMING EXPERIENCE
										</h3>
										<ul className="relative flex flex-col gap-6 p-5">
											<li className="flex items-start gap-3 text-white/90 text-base">
												<span className="mt-1 text-blue-400">
													<svg
														width="18"
														height="18"
														fill="none"
														viewBox="0 0 20 20"
													>
														<circle cx="10" cy="10" r="10" fill="#ffffff" />
														<path
															d="M7.5 10.5l2 2 3-4"
															stroke="#101B2B"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												<a
													href="#"
													className=" text-blue-200 hover:text-blue-400 text-2xl transition"
												>
													NVMe SSD storage
												</a>
											</li>
											<li className="flex items-start gap-3 text-white/90 text-base">
												<span className="mt-1 text-blue-400">
													<svg
														width="18"
														height="18"
														fill="none"
														viewBox="0 0 20 20"
													>
														<circle cx="10" cy="10" r="10" fill="#ffffff" />
														<path
															d="M7.5 10.5l2 2 3-4"
															stroke="#101B2B"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												<a
													href="#"
													className=" text-blue-200 hover:text-blue-400 text-2xl transition"
												>
													500% CPU utilization (AMD Ryzen 7 processor or higher)
												</a>
											</li>
											<li className="flex items-start gap-3 text-white/90 text-base">
												<span className="mt-1 text-blue-400">
													<svg
														width="18"
														height="18"
														fill="none"
														viewBox="0 0 20 20"
													>
														<circle cx="10" cy="10" r="10" fill="#ffffff" />
														<path
															d="M7.5 10.5l2 2 3-4"
															stroke="#101B2B"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												<a
													href="#"
													className=" text-blue-200 hover:text-blue-400 text-2xl transition"
												>
													3 manual backups from the user panel
												</a>
											</li>
											<li className="flex items-start gap-3 text-white/90 text-base">
												<span className="mt-1 text-blue-400">
													<svg
														width="18"
														height="18"
														fill="none"
														viewBox="0 0 20 20"
													>
														<circle cx="10" cy="10" r="10" fill="#ffffff" />
														<path
															d="M7.5 10.5l2 2 3-4"
															stroke="#101B2B"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												<a
													href="#"
													className=" text-blue-200 hover:text-blue-400 text-2xl transition"
												>
													Protection against DDoS attacks
												</a>
											</li>
										</ul>
										</div>
									</div>
									{/* Right Box */}
									<div
										className=" bg-gradient-to-b from-[#385BEE] via-[#B537F2] to-[#15172B] rounded-4xl p-0.5"
									   >
										<div className=" relative bg-[#15172B] bg-[url('/glow.svg')] bg-cover bg-no-repeat h-[552px] w-[802px] p-12 rounded-4xl">
										<h3 className="relative text-white font-astrospace text-3xl p-5 font-bold mb-6">
											PLUS DE LA MARCA
										</h3>
										<ul className="relative flex flex-col gap-6 p-5">
											<li className="flex items-start gap-3 text-white/90 text-base">
												<span className="mt-1 text-blue-400">
													<svg
														width="18"
														height="18"
														fill="none"
														viewBox="0 0 20 20"
													>
														<circle cx="10" cy="10" r="10" fill="#ffffff" />
														<path
															d="M7.5 10.5l2 2 3-4"
															stroke="#101B2B"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												<a
													href="#"
													className=" text-blue-200 hover:text-blue-400 text-2xl transition"
												>
													Delivery of your server in minutes
												</a>
											</li>
											<li className="flex items-start gap-3 text-white/90 text-base">
												<span className="mt-1 text-blue-400">
													<svg
														width="18"
														height="18"
														fill="none"
														viewBox="0 0 20 20"
													>
														<circle cx="10" cy="10" r="10" fill="#ffffff" />
														<path
															d="M7.5 10.5l2 2 3-4"
															stroke="#101B2B"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												<a
													href="#"
													className=" text-blue-200 hover:text-blue-400 text-2xl transition"
												>
													High internet connection
												</a>
											</li>
											<li className="flex items-start gap-3 text-white/90 text-base">
												<span className="mt-1 text-blue-400">
													<svg
														width="18"
														height="18"
														fill="none"
														viewBox="0 0 20 20"
													>
														<circle cx="10" cy="10" r="10" fill="#ffffff" />
														<path
															d="M7.5 10.5l2 2 3-4"
															stroke="#101B2B"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												<a
													href="#"
													className=" text-blue-200 hover:text-blue-400 text-2xl transition"
												>
													Free extra backups for 7 days
												</a>
											</li>
											<li className="flex items-start gap-3 text-white/90 text-base">
												<span className="mt-1 text-blue-400">
													<svg
														width="18"
														height="18"
														fill="none"
														viewBox="0 0 20 20"
													>
														<circle cx="10" cy="10" r="10" fill="#ffffff" />
														<path
															d="M7.5 10.5l2 2 3-4"
															stroke="#101B2B"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												<a
													href="#"
													className=" text-blue-200 hover:text-blue-400 text-2xl transition"
												>
													Unlimited players
												</a>
											</li>
										</ul>
										</div>
									</div>
								</div>
								{/* Bottom Line */}
								<p className="text-blue-100 text-base text-center mt-8">
									Every configuration, every rule you set in your game hosting
									matters. Our professional-grade tools panel has been carefully
									designed to give you the power
								</p>
							</div>
						</section>
					</div>
				</section>
			</div>
			<section className=" flex flex-col items-center min-h-screen bg-[url('/hero4.png')] bg-cover bg-no-repeat relative">
				{/* Heading */}
				<h2 className="text-white text-4xl md:text-5xl leading-20 font-astrospace font-extrabold text-center mb-2 tracking-wide">
					WHY <span className="text-blue-400">GAMEPROHOST?</span>
					<br />
					<span className="text-white">LEADING GAME SERVER RENTAL</span>
				</h2>
				{/* Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-16 w-[1637px]">
					{/* Card 1 */}
					<div className="relative shadow-lg flex items-center flex-col ">
						<div className="w-fit gap-2 mb-2 flex justify-center z-1 items-center bg-[#100E19]">
							<span className="w-2 h-2 bg-blue-200 rounded-full"></span>
							<span className="uppercase text-white px-1.5 text-xl font-bold">
								User-friendly web interface
							</span>
							<span className="w-2 h-2 bg-blue-200 rounded-full"></span>
						</div>
						<div className="relative border border-blue-200/30 rounded-2xl w-[527px] h-[369] shadow-lg flex flex-col p-12 gap-6 mt-[-23px]">
							<span className="text-blue-400 mb-4">
								{/* Keyboard Icon */}
								<Image
									src="/card1icon.svg"
									alt="Keyboard Icon"
									width={73}
									height={69}
								/>
							</span>
										
							<p className="text-[#9BA8CD] text-xl mt-2">
								GameProHost simplifies everything with intuitive processes,
								allowing users to enjoy benefits without prior knowledge, making
								the platform an easy-to-use solution.
							</p>
						</div>
					</div>
					{/* Card 2 */}
					<div className="relative shadow-lg flex items-center flex-col">
						<div className="w-fit gap-2 mb-2 flex justify-center z-1 items-center bg-[#100E19]">
							<span className="w-2 h-2 bg-blue-200 rounded-full"></span>
							<span className="uppercase text-white font-bold text-xl">
								No lag
							</span>
							<span className="w-2 h-2 bg-blue-200 rounded-full"></span>
						</div>
						<div className="relative border border-blue-200/30 rounded-2xl w-[527px] h-[369px] shadow-lg flex flex-col p-12 gap-6 mt-[-23px]">
							<span className="text-blue-400 mb-4">
								{/* Keyboard Icon */}
								<Image
									src="/card2icon.svg"
									alt="Keyboard Icon"
									width={75}
									height={74}
								/>
							</span>
										
							<p className="text-[#9BA8CD] text-xl mt-2">
							Leave behind micro-freezing while you play. We have high-end
							equipment that has the ability to deliver optimal performance even
							under high demand conditions.
						</p>
						</div>
					</div>
					{/* Card 3 */}
					<div className="relative shadow-lg flex items-center flex-col">
						<div className="w-fit gap-2 mb-2 flex justify-center z-1 items-center bg-[#100E19]">
							<span className="w-2 h-2 bg-blue-200 rounded-full"></span>
							<span className="uppercase text-white font-bold text-xl">
								Hardware NVME y AMD
							</span>
							<span className="w-2 h-2 bg-blue-200 rounded-full"></span>
						</div>
						<div className="relative border border-blue-200/30 rounded-2xl w-[527px] h-[369px] shadow-lg flex flex-col p-12 gap-6 mt-[-23px]">
							<span className="text-blue-400 mb-4">
								{/* Keyboard Icon */}
								<Image
									src="/card3icon.svg"
									alt="Keyboard Icon"
									width={80}
									height={51}
								/>
							</span>										
							<p className="text-[#9BA8CD] text-xl mt-2">
							Our gaming servers feature the latest CPU technology and NVME SSD
							storage, allowing lightning-fast processing and easy management via
							our control panel.
							</p>
						</div>
					</div>
					{/* Card 4 */}
					<div className="relative shadow-lg flex items-center flex-col">
						<div className="w-fit gap-2 mb-2 flex justify-center z-1 items-center bg-[#100E19]">
							<span className="w-2 h-2 bg-blue-200 rounded-full"></span>
							<span className="uppercase text-white font-bold text-xl">
								24/7 support
							</span>
							<span className="w-2 h-2 bg-blue-200 rounded-full"></span>
						</div>
						<div className="relative border border-blue-200/30 rounded-2xl w-[527px] h-[369px] shadow-lg flex flex-col p-12 gap-6 mt-[-23px]">
							<span className="text-blue-400 mb-4">
								{/* Keyboard Icon */}
								<Image
									src="/card4icon.svg"
									alt="Keyboard Icon"
									width={73}
									height={69}
								/>
							</span>
										
							<p className="text-[#9BA8CD] text-xl mt-2">
							We have a team of trained specialists who are available to answer
							all your questions and help you with your server.
						</p>
						</div>
					</div>
					{/* Card 5 */}
					<div className="relative shadow-lg flex items-center flex-col">
						<div className="w-fit gap-2 mb-2 flex justify-center z-1 items-center bg-[#100E19]">
							<span className="w-2 h-2 bg-blue-200 rounded-full"></span>
							<span className="uppercase text-white font-bold text-xl">
								Freedom of management
							</span>
							<span className="w-2 h-2 bg-blue-200 rounded-full"></span>
						</div>
						<div className="relative border border-blue-200/30 rounded-2xl w-[527px] h-[369px] shadow-lg flex flex-col p-12 gap-6 mt-[-23px]">
							<span className="text-blue-400 mb-4">
								{/* Keyboard Icon */}
								<Image
									src="/card5icon.svg"
									alt="Keyboard Icon"
									width={58}
									height={66}
								/>
							</span>
										
							<p className="text-[#9BA8CD] text-xl mt-2">
							A hosting for game servers without restrictions. You will be able
							to access all files from the panel or from FTP to edit, delete or
							upload files.
						</p>
						</div>
					</div>
					{/* Card 6 */}
					<div className="relative shadow-lg flex items-center flex-col">
						<div className="w-fit gap-2 mb-2 flex justify-center z-1 items-center bg-[#100a37]">
							<span className="w-2 h-2 bg-blue-200 rounded-full"></span>
							<span className="uppercase text-white font-bold text-xl">
								Backups of your server
							</span>
							<span className="w-2 h-2 bg-blue-200 rounded-full"></span>
						</div>
						<div className="relative border border-blue-200/30 rounded-2xl w-[527px] h-[369px] shadow-lg flex flex-col p-12 gap-6 mt-[-23px]">
							<span className="text-blue-400 mb-4">
								{/* Keyboard Icon */}
								<Image
									src="/card6icon.svg"
									alt="Keyboard Icon"
									width={58}
									height={68}
								/>
							</span>
										
							<p className="text-[#9BA8CD] text-xl mt-2">
							Go back to your previous games with a click. Each server has a
							backup of all games for a period of 7 days.
						</p>
						</div>
					</div>
				</div>

				<section className="w-full flex flex-col items-center py-24">
					<h2 className="text-white text-3xl md:text-4xl leading-20 lg:text-4xl font-astrospace font-extrabold text-center mb-6 tracking-wide uppercase">
						YOU ARE JUST ONE CLICK AWAY FROM HAVING YOUR OWN GAME SERVER,
						<br />
						NOTHING WILL SLOW DOWN YOUR GAMES.
					</h2>
					<button className="mt-6 mb-12 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-lg shadow-lg hover:from-blue-700 hover:to-blue-500 transition">
						START YOUR SERVER RIGHT NOW
					</button>
					<div className="relative shadow-lg flex items-center flex-col mt-12">
						<div className="flex items-center justify-center mb-4 bg-[#18152c] z-10">
							<span className="w-2 h-2 bg-blue-200 rounded-full"></span>
							<span className="uppercase text-white font-bold text-2xl mx-4 ">
								DDOS PROTECTION AS STANDARD
							</span>
							<span className="w-2 h-2 bg-blue-200 rounded-full"></span>
						</div>
					 <div className="w-[1181px] h-[187px] mx-auto border border-blue-200/40 rounded-2xl px-8 py-8 mb-20 mt-[-32px]">
						<p className="text-[#9BA8CD] text-center text-base mb-2">
							DDoS attacks are more common than you think, especially in the
							most competitive games.
						</p>
						<p className="text-[#9BA8CD] text-center mt-8 text-base">
							We guarantee the protection of our servers in order to keep you
							online 24 hours a day, 7 days a week without downtime thanks to
							our Firewall against massive traffic.
						</p>
					</div>
					</div>
					<h2 className="text-white text-3xl md:text-4xl font-astrospace font-extrabold text-center mb-4 tracking-wide uppercase">
						POPULAR GAMES TO{" "}
						<span className="text-blue-400">RENT SERVERS</span>
					</h2>
					<p className="text-blue-100 text-lg leading-10 text-center max-w-2xl mb-2">
						Game server rentals have become increasingly popular due to the need
						for specialized servers to host video games and deliver an optimal
						gaming experience. Let's look at some of the most popular games
						where you can rent servers.
					</p>
				</section>
				<section className="w-full flex flex-col items-center bg-[url('/hero5.png')] bg-cover bg-no-repeat py-24 relative">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-[98vw] max-w-[1700px]">
						{/* Minecraft */}
						<div className="justify-center flex flex-col gap-9 ">
							<div>
							<h3 className="text-white font-astrospace text-4xl mb-4 tracking-wide">
								MINECRAFT
							</h3>
							<div className="w-[120px] h-1 bg-[#3885F2] rounded-full" />
							</div>
							<p className="text-[#8296CF] leading-8 text-lg">
								Enter Minecraft, a limitless world of blocks and endless possibilities. A universe where you are the architect, explorer and hero. Minecraft offers you two different game modes: Survival, where you collect resources and fight creatures to stay alive, and Creative, where you have complete freedom to build anything your imagination can conceive. Minecraft also offers multiplayer, allowing you to explore and build with friends. Whether you want to build a majestic castle, explore vast biomes, or take on the fearsome Ender Dragon, in Minecraft, you decide your own adventure! Enter today and discover why Minecraft has captured the hearts of millions.
							</p>
						</div>
						<div className="flex justify-end">
							<div className="relative rounded-[36px] flex items-center justify-center">
								{/* Card Content */}
								<div className="relative rounded-[32px] overflow-hidden">
									<img
										src="/minecraft.png"
										alt="Minecraft"
										className="w-[779px] h-[505px] object-cover"
									/>
								</div>
							</div>
						</div>
						{/* ARK */}
						<div className="flex justify-start">
							<div className="relative rounded-[36px] flex items-center justify-center">
								{/* Card Content */}
								<div className="relative rounded-[32px] overflow-hidden">
									<img
										src="/ark.svg"
										alt="ARK"
										className="w-[781px] h-[505px] object-cover"
									/>
								</div>
							</div>
						</div>
						<div className="justify-center flex flex-col gap-9">
						 <div>
							<h3 className="text-white font-astrospace text-4xl mb-4 tracking-wide">
								ARK
							</h3>
							<div className="w-[120px] h-1 bg-[#3885F2] rounded-full" />
							</div>
							<p className="text-[#8296CF] leading-8 text-lg">
								In ARK: Survival Evolved, you wake up on an island full of
								dinosaurs and other prehistoric creatures. You must build,
								develop, domesticate and survive to prevail. Create your own

								Rust throws you into a post-apocalyptic world where only the
								strongest survive. With nothing more than a stone and a torch, you
								must develop creative solutions, build shelters, form alliances
								and defend yourself from dangers. Collect resources, craft weapons,
								and build your own base. Survival comes down to skill: form
								alliances or face other players in your journey to the challenge?
								Try today and see if you can survive rust.
							</p>
						</div>
						<div className="justify-center flex flex-col gap-9">
							<div>
							<h3 className="text-white font-astrospace text-4xl mb-4 tracking-wide">
								Rust
							</h3>
						     <div className="w-[120px] h-1 bg-[#3885F2] rounded-full" />
							</div>
							<p className="text-[#8296CF] leading-8 text-lg">
								Rust throws you into a post-apocalyptic world where only the strongest survive. With nothing more than a stone and a torch, your mission is to survive: collect resources, build shelters and defend your territory against other players. The game also offers an intense multiplayer experience, allowing you to form alliances or face other players. In Rust, every decision counts and every interaction can be crucial to your survival. Are you ready for the challenge? Try it today and see if you can survive Rust!
							</p>
						</div>
						<div className="flex justify-end">
							<div className="relative rounded-[36px] flex items-center justify-center">
								{/* Card Content */}
								<div className="relative rounded-[32px] overflow-hidden">
									<img
										src="/rust.svg"
										alt="Rust"
										className="w-[779px] h-[505px] object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
			<section className="w-full py-24 px-4 relative overflow-hidden bg-[url('/featurebg.png')] bg-cover bg-no-repeat">
				{/* Features */}
				<div className="flex flex-col items-center mx-auto w-[1637px]">
					<h2 className="text-3xl md:text-4xl font-astrospace font-extrabold text-white mb-2 tracking-wide uppercase">
						GAME SERVER{" "}
						<span className="text-blue-400">FEATURES</span>
					</h2>
					<p className="text-blue-100 max-w-2xl mb-12 text-center">
						On our game servers we offer various features that facilitate the user
						experience...
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full place-items-center">
						{/* Feature 1 */}
						<div className="relative p-8 flex flex-col items-center justify-center w-[802px] h-[560px] bg-[url('/box1bg.png')]">
							<Image
								src="/box1.svg"
								alt="FTP & MySQL"
								width={361}
								height={236}
								className="mb-4"
							/>
							<span className="text-xl md:text-2xl font-extrabold text-white uppercase text-center mb-4 tracking-wide">
								FREE ACCESS TO FTP AND MYSQL
							</span>
							<p className="text-blue-100 text-base text-center">
								Free access to FTP and MySQL databases is an important feature in
								game server rental services. The MySQL database allows the
								management of the information necessary for the game, and the use
								of FTP facilitates the transfer of files safely.
							</p>
						</div>

						{/* Feature 2 */}
						<div className="relative p-8 flex flex-col items-center justify-center w-[802px] h-[560px] bg-[url('/box1bg.png')]">
							<Image
								src="/box2.svg"
								alt="Anti DDoS Hardware"
								width={461}
								height={234}
								className="mb-4"
							/>
							<span className="text-xl md:text-2xl font-extrabold text-white uppercase text-center mb-4 tracking-wide">
								HIGH QUALITY AND ANTI DDOS HARDWARE
							</span>
							<p className="text-blue-100 text-base text-center">
								Our game servers feature high-quality hardware that allows for
								optimal performance and greater capacity to handle heavy traffic.
								In addition, they offer protection against DDoS attacks, which
								are very common in the gaming world and seek to affect the
								accessibility of the server for users.
							</p>
						</div>
					</div>
				</div>

				{/* Testimonials */}
				<div className="max-w-[1637px] mx-auto mt-24">
					<h3 className="text-center text-3xl md:text-4xl font-astrospace font-extrabold text-white mb-10 tracking-wide uppercase">
						WHAT OUR{" "}
						<span className="text-blue-400">CUSTOMERS</span> SAY...
					</h3>
					<div className="flex flex-col md:flex-row gap-8 justify-center items-center">
						{/* Testimonial Card 1 */}
						<div className="bg-[url('/agnes1.svg')] p-8 flex flex-col items-center w-[456px]  h-[513px]">
							<span className="text-white font-bold text-lg mb-2 mt-64">
								Agnes Remi
							</span>
							<p className="text-blue-100 text-center text-base mb-6 w-[380px] h-[134px]">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s.
							</p>
							<div className="flex gap-1 mb-4">
								{[...Array(5)].map((_, i) => (
									<svg key={i} width="18" height="18" fill="#FBBF24" viewBox="0 0 20 20">
										<polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" />
									</svg>
								))}
							</div>
							<span className="text-blue-200 text-xs">2024.03.02</span>
						</div>
						{/* Testimonial Card 2 */}
						<div className="bg-[url('/agnes1.svg')] p-8 flex flex-col items-center w-[456px]  h-[513px]">
							<span className="text-white font-bold text-lg mb-2 mt-64">
								Agnes Remi
							</span>
							<p className="text-blue-100 text-center text-base mb-6 w-[380px] h-[134px]">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s.
							</p>
							<div className="flex gap-1 mb-4">
								{[...Array(5)].map((_, i) => (
									<svg key={i} width="18" height="18" fill="#FBBF24" viewBox="0 0 20 20">
										<polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" />
									</svg>
								))}
							</div>
							<span className="text-blue-200 text-xs">2024.03.02</span>
						</div>
						{/* Testimonial Card 3 */}
						<div className="bg-[url('/agnes1.svg')] p-8 flex flex-col items-center w-[456px]  h-[513px]">
							<span className="text-white font-bold text-lg mb-2 mt-64">
								Agnes Remi
							</span>
							<p className="text-blue-100 text-center text-base mb-6 w-[380px] h-[134px]">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s.
							</p>
							<div className="flex gap-1 mb-4">
								{[...Array(5)].map((_, i) => (
									<svg key={i} width="18" height="18" fill="#FBBF24" viewBox="0 0 20 20">
										<polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" />
									</svg>
								))}
							</div>
							<span className="text-blue-200 text-xs">2024.03.02</span>
						</div>
					</div>
					{/* Carousel Dots */}
					<div className="flex justify-center gap-2 mt-6">
						{[...Array(5)].map((_, i) => (
							<span
								key={i}
								className={`w-2 h-2 rounded-full ${i === 2 ? "bg-blue-400" : "bg-blue-200/30"
									}`}
							></span>
						))}
					</div>
				</div>

				<div className="w-[1657px] h-[497px] mx-auto mt-24 bg-[url('/mask.svg')] flex flex-col items-center justify-center relative">
					<h4 className="text-white text-center text-4xl w-[1412px] leading-20 font-astrospace mb-10 tracking-wide uppercase">
						GAMEPROHOST, IS DESIGNED TO EMPOWER COMPANIES AND OFFER THE BEST
						EXPERIENCE AND QUALITY IN GAME SERVERS.
					</h4>
					<div className="flex flex-wrap justify-center gap-12 text-blue-100 text-lg font-medium w-full">
						<span className="flex items-center gap-2">
							<svg
								width="20"
								height="20"
								fill="#fff"
								viewBox="0 0 20 20"
							>
								<circle cx="10" cy="10" r="10" fill="#fff" />
								<path
									d="M7.5 10.5l2 2 3-4"
									stroke="#3B82F6"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							99.99 % de tiempo de actividad
						</span>
						<span className="flex items-center gap-2">
							<svg
								width="20"
								height="20"
								fill="#fff"
								viewBox="0 0 20 20"
							>
								<circle cx="10" cy="10" r="10" fill="#fff" />
								<path
									d="M7.5 10.5l2 2 3-4"
									stroke="#3B82F6"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							Unidades de discos SSD NVME
						</span>
						<span className="flex items-center gap-2">
							<svg
								width="20"
								height="20"
								fill="#fff"
								viewBox="0 0 20 20"
							>
								<circle cx="10" cy="10" r="10" fill="#fff" />
								<path
									d="M7.5 10.5l2 2 3-4"
									stroke="#3B82F6"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							AMD RYZEN 7 y 9
						</span>
					</div>
				</div>
			</section>

			<section className="w-full py-24 px-4 relative overflow-hidden bg-[url('/hero8.png')] bg-cover bg-no-repeat flex flex-col items-center">
				{/* Data Centers */}
				<h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-astrospace font-extrabold text-white mb-2 tracking-wide uppercase">
					OUR DATA CENTERS
				</h2>
				<p className="text-blue-100 text-center max-w-2xl mx-auto mb-12 text-base sm:text-lg">
					To guarantee the latency of your players we have in key points of our
					servers.
				</p>
				<div className="flex flex-col items-center w-full">
					<div className="relative w-full mb-8 flex justify-center">
						<Image
								src="/map.svg"
								alt="Map"
								width={1340}
								height={710}
							/>
						<span className="absolute left-[18%] top-[38%] w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/80 rounded-full blur-[4px]"></span>
						<span className="absolute left-[38%] top-[32%] w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/80 rounded-full blur-[4px]"></span>
						<span className="absolute left-[62%] top-[28%] w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/80 rounded-full blur-[4px]"></span>
						<span className="absolute left-[74%] top-[36%] w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/80 rounded-full blur-[4px]"></span>
					</div>
					<div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-16 w-full">
						<span className="flex items-center px-2 py-2 w-full max-w-[249px] h-[60px] sm:h-[70px] gap-3 sm:gap-5 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-base mx-auto">
							<img
								src="/miami.svg"
								alt="Miami"
								className="w-[40px] h-[40px] sm:w-[55px] sm:h-[54px]"
							/>
							<span
								style={{
									width: 70,
									height: 24,
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								Miami
							</span>
						</span>
						<span className="flex items-center px-2 py-2 w-full max-w-[249px] h-[60px] sm:h-[70px] gap-3 sm:gap-5 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-base mx-auto">
							<img
								src="/montreal.svg"
								alt="Montreal"
								className="w-[40px] h-[40px] sm:w-[55px] sm:h-[54px] rounded-full"
							/>
							<span
								style={{
									width: 70,
									height: 24,
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								Montreal
							</span>
						</span>
						<span className="flex items-center px-2 py-2 w-full max-w-[249px] h-[60px] sm:h-[70px] gap-3 sm:gap-5 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-base mx-auto">
							<img
								src="/france.svg"
								alt="France"
								className="w-[40px] h-[40px] sm:w-[55px] sm:h-[54px] rounded-full"
							/>
							<span
								style={{
									width: 70,
									height: 24,
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								France
							</span>
						</span>
						<span className="flex items-center px-2 py-2 w-full max-w-[249px] h-[60px] sm:h-[70px] gap-3 sm:gap-5 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-base mx-auto">
							<img
								src="/germany.svg"
								alt="Germany"
								className="w-[40px] h-[40px] sm:w-[55px] sm:h-[54px] rounded-full"
							/>
							<span
								style={{
									width: 70,
									height: 24,
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								Germany
							</span>
						</span>
					</div>
				</div>

				{/* FAQ Section */}
				<h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-astrospace font-extrabold text-white mb-2 tracking-wide uppercase mt-8">
					FREQUENT <span className="text-blue-400">QUESTIONS</span>
				</h2>
				<p className="text-blue-100 text-center mb-8 text-base sm:text-lg">
					Click on each question to get the answer
				</p>
				<div className="w-full max-w-xl flex flex-col gap-4 px-2">
					{/* FAQ Item 1 */}
					<details className="group bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-400 rounded-xl p-4 sm:p-6 text-white">
						<summary className="flex justify-between items-center cursor-pointer font-semibold text-base">
							Why choose GameProHost?
							<span className="transition-transform group-open:rotate-180">
								<svg
									width="20"
									height="20"
									fill="none"
									stroke="#8B5CF6"
									strokeWidth="2"
								>
									<path d="M6 8l4 4 4-4" />
								</svg>
							</span>
						</summary>
						<p className="text-blue-100 mt-4 text-sm">
							At GameProHost we offer you guarantees that you will benefit from
							the best resources for your game server and that you will have DDoS
							protection so that the latency of your servers is stable.
						</p>
					</details>
					{/* FAQ Item 2 */}
					<details className="group bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-400 rounded-xl p-4 sm:p-6 text-white">
						<summary className="flex justify-between items-center cursor-pointer font-semibold text-base">
							What hardware do you use on the servers?
							<span className="transition-transform group-open:rotate-180">
								<svg
									width="20"
									height="20"
									fill="none"
									stroke="#8B5CF6"
									strokeWidth="2"
								>
									<path d="M6 8l4 4 4-4" />
								</svg>
							</span>
						</summary>
						<p className="text-blue-100 mt-4 text-sm">
							We use the latest AMD Ryzen CPUs and NVMe SSD storage for maximum
							performance and reliability.
						</p>
					</details>
					{/* FAQ Item 3 */}
					<details className="group bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-400 rounded-xl p-4 sm:p-6 text-white">
						<summary className="flex justify-between items-center cursor-pointer font-semibold text-base">
							When is the server delivered?
							<span className="transition-transform group-open:rotate-180">
								<svg
									width="20"
									height="20"
									fill="none"
									stroke="#8B5CF6"
									strokeWidth="2"
								>
									<path d="M6 8l4 4 4-4" />
								</svg>
							</span>
						</summary>
						<p className="text-blue-100 mt-4 text-sm">
							Your server is delivered instantly after payment confirmation.
						</p>
					</details>
					{/* FAQ Item 4 */}
					<details className="group bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-400 rounded-xl p-4 sm:p-6 text-white">
						<summary className="flex justify-between items-center cursor-pointer font-semibold text-base">
							Can I transfer my server to another location?
							<span className="transition-transform group-open:rotate-180">
								<svg
									width="20"
									height="20"
									fill="none"
									stroke="#8B5CF6"
									strokeWidth="2"
								>
									<path d="M6 8l4 4 4-4" />
								</svg>
							</span>
						</summary>
						<p className="text-blue-100 mt-4 text-sm">
							Yes, you can request a transfer to any of our available data center
							locations.
						</p>
					</details>
				</div>
			</section>
			<Footer />
		</div>
	);
}