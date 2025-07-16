"use client";

import Navbar from "./Components/Layout/Navbar/navbar";
import Footer from "./Components/Layout/Footer/footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import GameSlider from "./Components/GameSlider";
import HostGame from "./Components/HostGame";
import LeadingServer from "./Components/LeadingServer";
import GameServers from "./Components/GameServers";
import Map from "./Components/Map";


export default function Home() {
	return (
		<div className="w-full">

			<div className="bg-[url('/herosectiongradient.webp')] bg-no-repeat bg-top relative w-full ">
				<Navbar />
				<section className="w-full flex justify-center items-center">
					<div className="container flex flex-col lg:flex-row items-center justify-center py-10 lg:py-20 px-4 gap-10">
						<div className="w-full lg:w-1/2">
							<div className="flex flex-col sm:flex-row justify-between border-[#395BEF] items-center rounded-full bg-white/10 backdrop-blur-md pl-4 sm:pl-10 py-3.5 pr-3.5">
								<input
									type="text"
									className="text-base sm:text-lg w-full placeholder:text-lg sm:placeholder:text-2xl placeholder:text-white bg-transparent text-white focus:outline-none font-medium"
									placeholder="Get a discount on your first month 🎉"
								/>
								<button
									className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-sm sm:text-base font-bold uppercase rounded-full shadow transition hover:from-blue-700 hover:to-blue-500 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-300 px-4 sm:px-6 py-2 sm:ml-4 mt-4 sm:mt-0"
									style={{ minWidth: '180px', minHeight: '50px' }}
								>
									15% FIRST MONTH
								</button>
							</div>

							<h1 className="font-astrospace text-3xl sm:text-2xl md:text-2xl lg:text-4xl py-8 lg:py-[69.25px] leading-12 text-white">
								THE MOST <span className="text-blue-400">BEASTLY</span>
								<br className="hidden sm:block" />
								<span className="text-blue-400">PERFORMANCE</span> FOR
								<br className="hidden sm:block" />
								YOUR <span className="text-blue-400">GAME SERVER!</span>
							</h1>

							<p className="text-base sm:text-lg text-white mt-[-30px]">
								Create your server for the game of your choice in less than 1 minute.
							</p>

							<p className="text-sm sm:text-base text-[#A3B5E8] leading-7 mt-3 mb-8">
								More than just a Gaming Server Rental service, we are the preferred hosting for thousands of gamers! Our servers powered by AMD RYZEN 7 and 9 CPUs with NVME storage are designed for the most demanding gamers. Enjoy total control, fast support and 24/7 uninterrupted performance. Create your game server in minutes and deliver the best experience to your gamers!
							</p>

							<button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-sm sm:text-lg font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow hover:from-blue-700 hover:to-blue-500 transition w-fit relative z-20">
								SEE GAMES <span role="img" aria-label="gamepad">🎮</span>
							</button>
						</div>

						<div className="w-full lg:w-1/2 flex justify-center items-center relative">
							<div className="animate-float drop-shadow-[0_0_60px_rgba(0,180,255,0.35)] transition-all duration-700 relative">
								<Image
									src="/4box.png"
									alt="Hero Image"
									width={600}
									height={700}
									className="w-[300px] sm:w-[400px] md:w-[500px] h-auto object-cover" />

								<div className="absolute left-[30px] sm:left-[60px] top-[-60px] sm:top-[-80px] w-[60px] sm:w-[90px] h-[120px] sm:h-[200px] pointer-events-none z-10">
									<div className="w-full bg-gradient-to-b from-blue-300/60 via-blue-400/30 to-transparent rounded-2xl blur-2xl animate-beam"></div>
								</div>
								<div className="absolute left-[120px] sm:left-[250px] top-[-50px] sm:top-[-60px] w-[50px] sm:w-[70px] h-[100px] sm:h-[160px] pointer-events-none z-10">
									<div className="w-full bg-gradient-to-b from-blue-200/40 via-blue-400/20 to-transparent rounded-2xl blur-2xl animate-beam2"></div>
								</div>

								<div className="absolute inset-0 pointer-events-none rounded-3xl blur-2xl opacity-10 bg-blue-600"></div>
							</div>
						</div>
					</div>
				</section>
				<div className="w-full relative bg-gradient-to-b from-transparent -mt-16 sm:-mt-24 to-[#191928] bg-[url('/hero2.png')] bg-cover bg-top bg-no-repeat">
					<section className="w-full flex justify-center items-center pt-16 pb-6 px-4">
						<div className="container flex flex-col items-center">
							<h2 className="font-poppins text-xl sm:text-2xl md:text-[30px] font-medium text-center mb-2 mt-10 sm:mt-20" style={{ color: '#9CACD7', lineHeight: '40px' }}>
								Our Game Server Partners
							</h2>
							<div className="flex flex-wrap justify-center items-center mt-6 gap-6 sm:gap-x-12 w-full max-w-3xl">
								<span className="text-white text-base sm:text-xl font-semibold opacity-80 font-poppins">HubSpot</span>
								<span className="text-white text-base sm:text-xl font-semibold opacity-80 font-poppins">loom</span>
								<span className="text-white text-lg sm:text-2xl font-bold opacity-100 font-poppins">GitLab</span>
								<span className="text-white text-base sm:text-xl font-semibold opacity-80 font-poppins">LiveChat</span>
								<span className="text-white text-base sm:text-xl font-semibold opacity-80 font-poppins">monday.com</span>
							</div>
						</div>
					</section>

					<GameSlider />
					<HostGame />
				</div>
			</div>



			<LeadingServer />
			<GameServers />
			<Map />
			<Footer />
		</div>


	);
}