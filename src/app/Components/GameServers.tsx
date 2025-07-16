import React from 'react'
import Image from 'next/image'

export default function GameServers() {
	return (
		<section className="w-full py-24 px-4 relative overflow-hidden bg-[url('/featurebg.png')] bg-cover bg-no-repeat">
			{/* Features */}
			<div className="flex flex-col items-center mx-auto w-[1637px]">
				<h2 className="text-6xl font-astrospace text-white mb-2 tracking-wide uppercase">
					GAME SERVER{" "}
					<span className="text-blue-400">FEATURES</span>
				</h2>
				<p className="text-[#8296CF] text-2xl leading-10 mb-12 text-center">
					On our game servers we offer various features that facilitate the user experience when enjoying their favorite game. Some of the most relevant features are discussed below.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full place-items-center">
					{/* Feature 1 */}
					<div
						className=" bg-gradient-to-b from-[#385BEE] via-[#B537F2] to-[#15172B] rounded-4xl p-0.5"
					>
						<div className=" relative bg-[#15172B] bg-[url('/glow.svg')] bg-cover bg-no-repeat p-8 flex flex-col items-center justify-center w-[802px] h-[560px] rounded-4xl">
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
							<p className="text-[#8296CF] text-lg text-center">
								Free access to FTP and MySQL databases is an important feature in
								game server rental services. The MySQL database allows the
								management of the information necessary for the game, and the use
								of FTP facilitates the transfer of files safely.
							</p>
						</div>
					</div>

					{/* Feature 2 */}
					<div
						className=" bg-gradient-to-b from-[#385BEE] via-[#B537F2] to-[#15172B] rounded-4xl p-0.5"
					>
						<div className=" relative bg-[#15172B] bg-[url('/glow.svg')] bg-cover bg-no-repeat p-8 flex flex-col items-center justify-center w-[802px] h-[560px] rounded-4xl">
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
							<p className="text-[#8296CF] text-lg text-center">
								Our game servers feature high-quality hardware that allows for
								optimal performance and greater capacity to handle heavy traffic.
								In addition, they offer protection against DDoS attacks, which
								are very common in the gaming world and seek to affect the
								accessibility of the server for users.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Testimonials */}
			<div className="max-w-[1637px] mx-auto mt-24">
				<h3 className="text-center text-6xl font-astrospace text-white mb-10 tracking-wide uppercase">
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
				{/* <div className="flex justify-center gap-2 mt-6">
					{[...Array(5)].map((_, i) => (
						<span
							key={i}
							className={`w-2 h-2 rounded-full ${i === 2 ? "bg-blue-400" : "bg-blue-200/30"
								}`}
						></span>
					))}
				</div> */}
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
	)
}
