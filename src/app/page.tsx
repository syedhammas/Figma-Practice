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
		<div className="min-h-screen bg-[url('/herosectiongradient.png')] bg-no-repeat bg-top relative">
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
				<HostGame />
			</div>
			<LeadingServer />
		    <GameServers />
			<Map />
			<Footer />
		</div>
	);
}