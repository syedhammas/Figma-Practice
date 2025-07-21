import React from 'react'
import Image from 'next/image'

export default function Map() {
	return (
		<section className="w-full py-24 px-4 relative overflow-hidden bg-[url('/hero8.png')] bg-cover bg-no-repeat flex flex-col items-center">
			{/* Data Centers */}
			<h2 className="text-center text-6xl font-astrospace  text-white mb-2 tracking-wide uppercase">
				OUR DATA CENTERS
			</h2>
			<p className="text-blue-100 text-center max-w-2xl mx-auto mb-12 text-base sm:text-lg">
				To guarantee the latency of your players we have in key points of our
				servers.
			</p>
			<div className="flex flex-col items-center w-full">
				<div className="relative w-full mb-8 flex justify-center">
					<Image
						src="/map.png"
						alt="Map"
						width={1340}
						height={710}
					/>
					<span className="absolute left-[18%] top-[38%] w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/80 rounded-full blur-[4px]"></span>
					<span className="absolute left-[38%] top-[32%] w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/80 rounded-full blur-[4px]"></span>
					<span className="absolute left-[62%] top-[28%] w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/80 rounded-full blur-[4px]"></span>
					<span className="absolute left-[74%] top-[36%] w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/80 rounded-full blur-[4px]"></span>
				</div>
				<div className="flex flex-wrap justify-center gap-24 mb-16 ">
					<span className="flex items-center p-2 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-base mx-auto">
						<img
							src="/miami.svg"
							alt="Miami"
							className="w-[40px] h-[40px] sm:w-[55px] sm:h-[54px]"
						/>
						<span className='px-10'>
							Miami
						</span>
					</span>
					<span className="flex items-center p-2 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-base mx-auto">
						<img
							src="/montreal.svg"
							alt="Montreal"
							className="w-[40px] h-[40px] sm:w-[55px] sm:h-[54px] rounded-full"
						/>
						<span className='px-10'>
							Montreal
						</span>
					</span>
					<span className="flex items-center px-2 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-base mx-auto">
						<img
							src="/france.svg"
							alt="France"
							className="w-[40px] h-[40px] sm:w-[55px] sm:h-[54px] rounded-full"
						/>
						<span className='px-10'>
							France
						</span>
					</span>
					<span className="flex items-center px-2 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-base mx-auto">
						<img
							src="/germany.svg"
							alt="Germany"
							className="w-[40px] h-[40px] sm:w-[55px] sm:h-[54px] rounded-full"
						/>
						<span className='px-10'>
							Germany
						</span>
					</span>
				</div>
			</div>

			{/* FAQ Section */}
			<h2 className="text-center text-6xl font-astrospace text-white mb-2 tracking-wide uppercase mt-8">
				FREQUENT <span className="text-blue-400">QUESTIONS</span>
			</h2>
			<p className="text-blue-100 text-center mb-8 text-base sm:text-lg">
				Click on each question to get the answer
			</p>
			<div className="max-w-5xl flex flex-col gap-4 px-2">
				{/* FAQ Item 1 */}
				<details className="w-5xl bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-400 rounded-xl p-9 text-white">
					<summary className="flex justify-between items-center cursor-pointer font-semibold text-2xl">
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
					<p className="text-[#9CA8CD] mt-4 leading-7 text-lg">
						At GameProHost we offer you guarantees that you will benefit from
						the best resources for your game server and that you will have DDoS
						protection so that the latency of your servers is stable.
					</p>
				</details>
				{/* FAQ Item 2 */}
				<details className="w-5xl bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-400 rounded-xl p-4 lg:p-9 text-white">
					<summary className="flex justify-between items-center cursor-pointer font-semibold text-2xl">
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
					<p className="text-[#9CA8CD] mt-4 leading-7 text-lg">
						We use the latest AMD Ryzen CPUs and NVMe SSD storage for maximum
						performance and reliability.
					</p>
				</details>
				{/* FAQ Item 3 */}
				<details className="w-5xl bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-400 rounded-xl p-4 lg:p-9 text-white">
					<summary className="flex justify-between items-center cursor-pointer font-semibold text-2xl">
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
					<p className="text-[#9CA8CD] leading-7 text-lg">
						Your server is delivered instantly after payment confirmation.
					</p>
				</details>
				{/* FAQ Item 4 */}
				<details className="w-5xl bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-400 rounded-xl p-4 lg:p-9 text-white">
					<summary className="flex justify-between items-center cursor-pointer font-semibold text-2xl">
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
					<p className="text-[#9CA8CD] leading-7 text-lg">
						Yes, you can request a transfer to any of our available data center
						locations.
					</p>
				</details>
			</div>
		</section>
	)
}
