"use client";
import Navbar from "./Components/Layout/Navbar/navbar";
import { useState } from "react";
import Image from "next/image";

function GameSlider() {
  const sliderImages = [
    "/Rectangle 1.svg",
    "/minecraft.png",
    "/Rectangle 1.svg",
    "/ark.png",
    "/Rectangle 1.svg",
    "/rust.png",
    "/Rectangle 1.svg",
  ];
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  const getIndex = (idx: number) => (idx + sliderImages.length) % sliderImages.length;

  return (
    <section className="w-full flex flex-col items-center mt-8">
      <h2 className="font-astrospace text-[40px] md:text-[48px] font-extrabold text-white text-center tracking-wide mb-2 mt-[50px]">
        GAME <span className="text-blue-400">SERVERS</span>
      </h2>
      <p className="text-white/80 text-lg text-center mb-8">
        Create your own server in one click
      </p>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-8 w-full px-4 mt-16 justify-center">
          {/* Left Card */}
          <div className="flex-1 flex items-center justify-center transition-all duration-500 scale-90 opacity-60">
            <Image
              src={sliderImages[getIndex(current - 1)]}
              alt="Prev Game"
              width={300}
              height={340}
              className="rounded-2xl object-cover w-full h-full"
              style={{ maxHeight: 320, maxWidth: 320 }}
            />
          </div>
          {/* Center Card */}
          <div className="flex-1 rounded-2xl bg-[#23234A] border-2 border-blue-400 h-[360px] shadow-lg scale-105 z-10 flex items-center justify-center transition-all duration-500">
            <Image
              src={sliderImages[current]}
              alt={`Game ${current + 1}`}
              width={300}
              height={340}
              className="rounded-2xl object-cover w-full h-full"
              style={{ maxHeight: 320, maxWidth: 320 }}
            />
          </div>
          {/* Right Card */}
          <div className="flex-1 flex items-center justify-center transition-all duration-500 scale-90 opacity-60">
            <Image
              src={sliderImages[getIndex(current + 1)]}
              alt="Next Game"
              width={300}
              height={340}
              className="rounded-2xl object-cover w-full h-full"
              style={{ maxHeight: 320, maxWidth: 320 }}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition"
          onClick={prevSlide}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="flex gap-2">
          {sliderImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full ${idx === current ? "bg-white" : "bg-white/40"
                }`}
              onClick={() => setCurrent(idx)}
              style={{ cursor: "pointer" }}
            ></span>
          ))}
        </div>
        <button
          className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition"
          onClick={nextSlide}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
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
          background: "linear-gradient(to bottom, rgba(25,25,40,0) 60%, #191928 100%)"
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

            <h1 className="font-astrospace text-[56px] py-[69.25px] font-extrabold leading-tight text-white">
              THE MOST <span className="text-blue-400">BEASTLY</span>
              <br />
              <span className="text-blue-400">PERFORMANCE</span> FOR
              <br />
              YOUR <span className="text-blue-400">GAME SERVER!</span>
            </h1>
            <p className="text-lg text-white mt-[-55px]">
              Create your server for the game of your choice in less than 1
              minute.
            </p>
            <p className="text-base text-white/90 mt-3 mb-8 max-w-xl">
              More than just a Gaming Server Rental service, we are the preferred
              hosting for thousands of gamers! Our servers powered by AMD RYZEN 7
              and 9 CPUs with NVME storage are designed for the most demanding
              gamers. Enjoy total control, fast support and 24/7 uninterrupted
              performance. Create your game server in minutes and deliver the
              best experience to your gamers!
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

            <h2 className="text-white text-4xl bg-transparent font-astrospace  md:text-5xl font-extrabold text-center mb-4 tracking-wide">
              WE KNOW YOU ARE LOOKING FOR <span className="text-blue-400">MAXIMUM</span>
              <br />
              <span className="text-blue-400">PERFORMANCE</span> TO HOST YOUR GAMES.
            </h2>

            <p className="text-blue-100 text-lg text-center max-w-2xl mb-12">
              Our data center is capable of supporting millions of connected players. Our servers are strategically designed to support high workloads and guarantee a gaming experience without limits or interruptions.
            </p>

            <div className="flex flex-row justify-center items-center w-full gap-8 relative">
              <div className="flex flex-col items-center justify-center flex-shrink-0 z-10">
                <div className="p-6 flex items-center justify-center mt-6">
                  <Image
                    src="/logoGH.svg"
                    alt="GH Logo"
                    width={1662}
                    height={540}
                    className="object-contain"
                  />
                </div>
              </div>
         
            </div>
            <p className="text-blue-100 text-lg text-center mt-12">
              We know your needs and we are here to guide you through every step of the process.
            </p>
            <section className="w-full flex justify-center items-center py-16 bg-transparent">
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-col md:flex-row gap-8 w-full h-[552px] justify-center">
                  {/* Left Box */}
                  <div className="flex-1 bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-500 rounded-[32px] p-8 shadow-lg h-[552]px"
                    style={{ boxShadow: "0 0 40px 0 #1a237e33" }}>
                    <h3 className="text-white font-astrospace text-2xl font-bold mb-6">GAMING EXPERIENCE</h3>
                    <ul className="flex flex-col gap-4">
                      <li className="flex items-start gap-3 text-white/90 text-base">
                        <span className="mt-1 text-blue-400">
                          <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6" /><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <a href="#" className="underline text-blue-200 hover:text-blue-400 transition">NVMe SSD storage</a>
                      </li>
                      <li className="flex items-start gap-3 text-white/90 text-base">
                        <span className="mt-1 text-blue-400">
                          <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6" /><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <a href="#" className="underline text-blue-200 hover:text-blue-400 transition">500% CPU utilization (AMD Ryzen 7 processor or higher)</a>
                      </li>
                      <li className="flex items-start gap-3 text-white/90 text-base">
                        <span className="mt-1 text-blue-400">
                          <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6" /><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <a href="#" className="underline text-blue-200 hover:text-blue-400 transition">3 manual backups from the user panel</a>
                      </li>
                      <li className="flex items-start gap-3 text-white/90 text-base">
                        <span className="mt-1 text-blue-400">
                          <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6" /><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <a href="#" className="underline text-blue-200 hover:text-blue-400 transition">Protection against DDoS attacks</a>
                      </li>
                    </ul>
                  </div>
                  {/* Right Box */}
                  <div className="flex-1 bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-500 rounded-[32px] p-8 shadow-lg"
                    style={{ boxShadow: "0 0 40px 0 #1a237e33" }}>
                    <h3 className="text-white font-astrospace text-2xl font-bold mb-6">PLUS DE LA MARCA</h3>
                    <ul className="flex flex-col gap-4">
                      <li className="flex items-start gap-3 text-white/90 text-base">
                        <span className="mt-1 text-blue-400">
                          <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6" /><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        Delivery of your server in minutes
                      </li>
                      <li className="flex items-start gap-3 text-white/90 text-base">
                        <span className="mt-1 text-blue-400">
                          <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6" /><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        High internet connection
                      </li>
                      <li className="flex items-start gap-3 text-white/90 text-base">
                        <span className="mt-1 text-blue-400">
                          <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6" /><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        Free extra backups for 7 days
                      </li>
                      <li className="flex items-start gap-3 text-white/90 text-base">
                        <span className="mt-1 text-blue-400">
                          <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6" /><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        Unlimited players
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Bottom Line */}
                <p className="text-blue-100 text-base text-center mt-8">
                  Every configuration, every rule you set in your game hosting matters. Our professional-grade tools panel has been carefully designed to give you the power
                </p>
              </div>
            </section>
          </div>
        </section>

      </div>
      <section className=" flex flex-col items-center min-h-screen py-20 bg-[url('/hero4.png')] bg-cover bg-no-repeat relative">
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-astrospace font-extrabold text-center mb-2 tracking-wide">
          WHY <span className="text-blue-400">GAMEPROHOST?</span>
          <br />
          <span className="text-white">LEADING GAME SERVER RENTAL</span>
        </h2>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-16 w-[1637px] px-12">
          {/* Card 1 */}
          <div className="relative bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-200/30 rounded-2xl p-8 shadow-lg flex flex-col min-h-[260px]">
            <span className="text-blue-400 mb-4">
              {/* Keyboard Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="8" y="16" width="24" height="12" rx="2" stroke="#3B82F6" strokeWidth="2" /><rect x="12" y="20" width="2" height="2" rx="1" fill="#3B82F6" /><rect x="16" y="20" width="2" height="2" rx="1" fill="#3B82F6" /><rect x="20" y="20" width="2" height="2" rx="1" fill="#3B82F6" /><rect x="24" y="20" width="2" height="2" rx="1" fill="#3B82F6" /><rect x="28" y="20" width="2" height="2" rx="1" fill="#3B82F6" /></svg>
            </span>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
              <span className="uppercase text-white font-bold text-base">User-friendly web interface</span>
              <span className="flex-1 h-px bg-blue-200/30 mx-2"></span>
            </div>
            <p className="text-blue-100 text-sm mt-2">
              GameProHost simplifies everything with intuitive processes, allowing users to enjoy benefits without prior knowledge, making the platform an easy-to-use solution.
            </p>
          </div>
          {/* Card 2 */}
          <div className="relative bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-200/30 rounded-2xl p-8 shadow-lg flex flex-col min-h-[260px]">
            <span className="text-blue-400 mb-4">
              {/* Chip Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="12" y="12" width="16" height="16" rx="4" stroke="#3B82F6" strokeWidth="2" /><rect x="18" y="18" width="4" height="4" rx="2" fill="#3B82F6" /></svg>
            </span>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
              <span className="uppercase text-white font-bold text-base">No lag</span>
              <span className="flex-1 h-px bg-blue-200/30 mx-2"></span>
            </div>
            <p className="text-blue-100 text-sm mt-2">
              Leave behind micro-freezing while you play. We have high-end equipment that has the ability to deliver optimal performance even under high demand conditions.
            </p>
          </div>
          {/* Card 3 */}
          <div className="relative bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-200/30 rounded-2xl p-8 shadow-lg flex flex-col min-h-[260px]">
            <span className="text-blue-400 mb-4">
              {/* Server Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="10" y="16" width="20" height="8" rx="2" stroke="#3B82F6" strokeWidth="2" /><rect x="14" y="20" width="4" height="2" rx="1" fill="#3B82F6" /></svg>
            </span>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
              <span className="uppercase text-white font-bold text-base">Hardware NVME y AMD</span>
              <span className="flex-1 h-px bg-blue-200/30 mx-2"></span>
            </div>
            <p className="text-blue-100 text-sm mt-2">
              Our gaming servers feature the latest CPU technology and NVME SSD storage, allowing lightning-fast processing and easy management via our control panel.
            </p>
          </div>
          {/* Card 4 */}
          <div className="relative bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-200/30 rounded-2xl p-8 shadow-lg flex flex-col min-h-[260px]">
            <span className="text-blue-400 mb-4">
              {/* Headset Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="12" stroke="#3B82F6" strokeWidth="2" /><path d="M12 28v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="#3B82F6" strokeWidth="2" /></svg>
            </span>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
              <span className="uppercase text-white font-bold text-base">24/7 support</span>
              <span className="flex-1 h-px bg-blue-200/30 mx-2"></span>
            </div>
            <p className="text-blue-100 text-sm mt-2">
              We have a team of trained specialists who are available to answer all your questions and help you with your server.
            </p>
          </div>
          {/* Card 5 */}
          <div className="relative bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-200/30 rounded-2xl p-8 shadow-lg flex flex-col min-h-[260px]">
            <span className="text-blue-400 mb-4">
              {/* Cog Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="8" stroke="#3B82F6" strokeWidth="2" /><path d="M20 12v-2M20 30v-2M28 20h2M10 20h2M25.66 25.66l1.42 1.42M12.92 12.92l1.42 1.42M25.66 14.34l1.42-1.42M12.92 27.08l1.42-1.42" stroke="#3B82F6" strokeWidth="2" /></svg>
            </span>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
              <span className="uppercase text-white font-bold text-base">Freedom of management</span>
              <span className="flex-1 h-px bg-blue-200/30 mx-2"></span>
            </div>
            <p className="text-blue-100 text-sm mt-2">
              A hosting for game servers without restrictions. You will be able to access all files from the panel or from FTP to edit, delete or upload files.
            </p>
          </div>
          {/* Card 6 */}
          <div className="relative bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-200/30 rounded-2xl p-8 shadow-lg flex flex-col min-h-[260px]">
            <span className="text-blue-400 mb-4">
              {/* Shield Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><path d="M20 8l10 4v6c0 7.732-5.373 14.042-10 16-4.627-1.958-10-8.268-10-16v-6l10-4z" stroke="#3B82F6" strokeWidth="2" /><path d="M16 20l3 3 5-5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
              <span className="uppercase text-white font-bold text-base">Backups of your server</span>
              <span className="flex-1 h-px bg-blue-200/30 mx-2"></span>
            </div>
            <p className="text-blue-100 text-sm mt-2">
              Go back to your previous games with a click. Each server has a backup of all games for a period of 7 days.
            </p>
          </div>
        </div>

        <section className="w-full flex flex-col items-center py-24">
          <h2 className="text-white text-3xl md:text-4xl lg:text-4xl font-astrospace font-extrabold text-center mb-6 tracking-wide uppercase">
            YOU ARE JUST ONE CLICK AWAY FROM HAVING YOUR OWN GAME SERVER,<br />
            NOTHING WILL SLOW DOWN YOUR GAMES.
          </h2>
          <button className="mt-6 mb-12 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-lg shadow-lg hover:from-blue-700 hover:to-blue-500 transition">
            START YOUR SERVER RIGHT NOW
          </button>
          <div className="w-full max-w-3xl mx-auto border border-blue-200/40 rounded-2xl bg-gradient-to-br from-[#101B2B]/70 to-[#23234A]/70 px-8 py-8 mb-20">
            <div className="flex items-center justify-center mb-4">
              <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
              <span className="uppercase text-white font-bold text-base mx-4 tracking-wide">DDOS PROTECTION AS STANDARD</span>
              <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
            </div>
            <p className="text-blue-100 text-center text-base mb-2">
              DDoS attacks are more common than you think, especially in the most competitive games.
            </p>
            <p className="text-blue-100 text-center text-base">
              We guarantee the protection of our servers in order to keep you online 24 hours a day, 7 days a week without downtime thanks to our Firewall against massive traffic.
            </p>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-astrospace font-extrabold text-center mb-4 tracking-wide uppercase">
            POPULAR GAMES TO <span className="text-blue-400">RENT SERVERS</span>
          </h2>
          <p className="text-blue-100 text-lg text-center max-w-2xl mb-2">
            Game server rentals have become increasingly popular due to the need for specialized servers to host video games and deliver an optimal gaming experience. Let's look at some of the most popular games where you can rent servers.
          </p>
        </section>
        <section className="w-full flex flex-col items-center bg-[url('/hero5.png')] bg-cover bg-no-repeat relative py-12">
          <Image
            src="/gameallpic.svg"
            alt="Popular Games"
            width={1687}
            height={1710}
            className="w-full max-w-[1637px] object-cover mb-12"/>
        </section>
      </section>
      <section className="w-full py-24 px-4 relative overflow-hidden bg['/hero6.png'] bg-cover bg-no-repeat">
        {/* Features */}
        <div className="flex flex-col items-center mx-auto w-[1637px]">
          <h2 className="text-3xl md:text-4xl font-astrospace font-extrabold text-white mb-2 tracking-wide uppercase">
            GAME SERVER <span className="text-blue-400">FEATURES</span>
          </h2>
          <p className="text-blue-100 max-w-2xl mb-12 text-center">
            On our game servers we offer various features that facilitate the user experience...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full place-items-center">
            {/* Feature 1 */}
            <div className="relative p-8 flex flex-col items-center justify-center w-[802px] h-[560px] bg-[url('/box1bg.png')]">
              <Image src="/box1.svg" alt="FTP & MySQL" width={361} height={236} className="mb-4" />
              <span className="text-xl md:text-2xl font-extrabold text-white uppercase text-center mb-4 tracking-wide">
                FREE ACCESS TO FTP AND MYSQL
              </span>
              <p className="text-blue-100 text-base text-center">
                Free access to FTP and MySQL databases is an important feature in game server rental services. The MySQL database allows the management of the information necessary for the game, and the use of FTP facilitates the transfer of files safely.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="relative p-8 flex flex-col items-center justify-center w-[802px] h-[560px] bg-[url('/box1bg.png')]">
              <Image src="/box2.svg" alt="Anti DDoS Hardware" width={461} height={234} className="mb-4" />
              <span className="text-xl md:text-2xl font-extrabold text-white uppercase text-center mb-4 tracking-wide">
                HIGH QUALITY AND ANTI DDOS HARDWARE
              </span>
              <p className="text-blue-100 text-base text-center">
                Our game servers feature high-quality hardware that allows for optimal performance and greater capacity to handle heavy traffic. In addition, they offer protection against DDoS attacks, which are very common in the gaming world and seek to affect the accessibility of the server for users.
              </p>
            </div>
          </div>
        </div>


        {/* Testimonials */}
        <div className="max-w-[1637px] mx-auto mt-24">
          <h3 className="text-center text-3xl md:text-4xl font-astrospace font-extrabold text-white mb-10 tracking-wide uppercase">
            WHAT OUR <span className="text-blue-400">CUSTOMERS</span> SAY...
          </h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* Testimonial Card 1 */}
            <div className="bg-[#23234A] rounded-2xl p-8 flex flex-col items-center w-full max-w-xs shadow-lg border border-blue-200/30">
              <div className="w-20 h-20 rounded-full bg-blue-900 mb-4 flex items-center justify-center overflow-hidden">
                <Image src="/avatar1.png" alt="Agnes Remi" width={80} height={80} />
              </div>
              <span className="text-white font-bold text-lg mb-2">Agnes Remi</span>
              <p className="text-blue-100 text-center text-base mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="18" height="18" fill="#FBBF24" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" /></svg>
                ))}
              </div>
              <span className="text-blue-200 text-xs">03/04/2024</span>
            </div>
            {/* Testimonial Card 2 */}
            <div className="bg-[#23234A] rounded-2xl p-8 flex flex-col items-center w-full max-w-xs shadow-lg border border-blue-200/30">
              <div className="w-20 h-20 rounded-full bg-blue-900 mb-4 flex items-center justify-center overflow-hidden">
                <Image src="/avatar2.png" alt="Agnes Remi" width={80} height={80} />
              </div>
              <span className="text-white font-bold text-lg mb-2">Agnes Remi</span>
              <p className="text-blue-100 text-center text-base mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="18" height="18" fill="#FBBF24" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" /></svg>
                ))}
              </div>
              <span className="text-blue-200 text-xs">03/04/2024</span>
            </div>
            {/* Testimonial Card 3 */}
            <div className="bg-[#23234A] rounded-2xl p-8 flex flex-col items-center w-full max-w-xs shadow-lg border border-blue-200/30">
              <div className="w-20 h-20 rounded-full bg-blue-900 mb-4 flex items-center justify-center overflow-hidden">
                <Image src="/avatar3.png" alt="Agnes Remi" width={80} height={80} />
              </div>
              <span className="text-white font-bold text-lg mb-2">Agnes Remi</span>
              <p className="text-blue-100 text-center text-base mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="18" height="18" fill="#FBBF24" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" /></svg>
                ))}
              </div>
              <span className="text-blue-200 text-xs">03/04/2024</span>
            </div>
          </div>
          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${i === 2 ? "bg-blue-400" : "bg-blue-200/30"}`}
              ></span>
            ))}
          </div>
        </div>

        <div className="w-[1657px] h-[497px] mx-auto mt-24 bg-[url('/mask.svg')] flex flex-col items-center justify-center relative">
          <h4 className="text-white text-center text-3xl md:text-4xl font-bold font-astrospace mb-10 tracking-wide uppercase max-w-4xl mx-auto">
            GAMEPROHOST, IS DESIGNED TO EMPOWER COMPANIES AND OFFER THE BEST EXPERIENCE AND QUALITY IN GAME SERVERS.
          </h4>
          <div className="flex flex-wrap justify-center gap-12 text-blue-100 text-lg font-medium w-full">
            <span className="flex items-center gap-2">
              <svg width="20" height="20" fill="#fff" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#fff" /><path d="M7.5 10.5l2 2 3-4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              99.99 % de tiempo de actividad
            </span>
            <span className="flex items-center gap-2">
              <svg width="20" height="20" fill="#fff" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#fff" /><path d="M7.5 10.5l2 2 3-4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Unidades de discos SSD NVME
            </span>
            <span className="flex items-center gap-2">
              <svg width="20" height="20" fill="#fff" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#fff" /><path d="M7.5 10.5l2 2 3-4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
          To guarantee the latency of your players we have in key points of our servers.
        </p>
        <div className="flex flex-col items-center w-full">
          <div className="relative w-full max-w-3xl mb-8 flex justify-center">
            <img src="/map.svg" alt="World Map" className="w-full max-w-[95vw] h-auto" />
            <span className="absolute left-[18%] top-[38%] w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/80 rounded-full blur-[4px]"></span>
            <span className="absolute left-[38%] top-[32%] w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/80 rounded-full blur-[4px]"></span>
            <span className="absolute left-[62%] top-[28%] w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/80 rounded-full blur-[4px]"></span>
            <span className="absolute left-[74%] top-[36%] w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/80 rounded-full blur-[4px]"></span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-16 w-full">
            <span className="flex items-center px-2 py-2 w-full max-w-[249px] h-[60px] sm:h-[70px] gap-3 sm:gap-5 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-base mx-auto">
              <img src="/miami.svg" alt="Miami" className="w-[40px] h-[40px] sm:w-[55px] sm:h-[54px]" />
              <span style={{ width: 70, height: 24, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>Miami</span>
            </span>
            <span className="flex items-center px-2 py-2 w-full max-w-[249px] h-[60px] sm:h-[70px] gap-3 sm:gap-5 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-base mx-auto">
              <img src="/montreal.svg" alt="Montreal" className="w-[40px] h-[40px] sm:w-[55px] sm:h-[54px] rounded-full" />
              <span style={{ width: 70, height: 24, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>Montreal</span>
            </span>
            <span className="flex items-center px-2 py-2 w-full max-w-[249px] h-[60px] sm:h-[70px] gap-3 sm:gap-5 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-base mx-auto">
              <img src="/france.svg" alt="France" className="w-[40px] h-[40px] sm:w-[55px] sm:h-[54px] rounded-full" />
              <span style={{ width: 70, height: 24, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>France</span>
            </span>
            <span className="flex items-center px-2 py-2 w-full max-w-[249px] h-[60px] sm:h-[70px] gap-3 sm:gap-5 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-base mx-auto">
              <img src="/germany.svg" alt="Germany" className="w-[40px] h-[40px] sm:w-[55px] sm:h-[54px] rounded-full" />
              <span style={{ width: 70, height: 24, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>Germany</span>
            </span>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-astrospace font-extrabold text-white mb-2 tracking-wide uppercase mt-8">
          FREQUENT <span className="text-blue-400">QUESTIONS</span>
        </h2>
        <p className="text-blue-100 text-center mb-8 text-base sm:text-lg">Click on each question to get the answer</p>
        <div className="w-full max-w-xl flex flex-col gap-4 px-2">
          {/* FAQ Item 1 */}
          <details className="group bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-400 rounded-xl p-4 sm:p-6 text-white">
            <summary className="flex justify-between items-center cursor-pointer font-semibold text-base">
              Why choose GameProHost?
              <span className="transition-transform group-open:rotate-180">
                <svg width="20" height="20" fill="none" stroke="#8B5CF6" strokeWidth="2"><path d="M6 8l4 4 4-4" /></svg>
              </span>
            </summary>
            <p className="text-blue-100 mt-4 text-sm">
              At GameProHost we offer you guarantees that you will benefit from the best resources for your game server and that you will have DDoS protection so that the latency of your servers is stable.
            </p>
          </details>
          {/* FAQ Item 2 */}
          <details className="group bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-400 rounded-xl p-4 sm:p-6 text-white">
            <summary className="flex justify-between items-center cursor-pointer font-semibold text-base">
              What hardware do you use on the servers?
              <span className="transition-transform group-open:rotate-180">
                <svg width="20" height="20" fill="none" stroke="#8B5CF6" strokeWidth="2"><path d="M6 8l4 4 4-4" /></svg>
              </span>
            </summary>
            <p className="text-blue-100 mt-4 text-sm">
              We use the latest AMD Ryzen CPUs and NVMe SSD storage for maximum performance and reliability.
            </p>
          </details>
          {/* FAQ Item 3 */}
          <details className="group bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-400 rounded-xl p-4 sm:p-6 text-white">
            <summary className="flex justify-between items-center cursor-pointer font-semibold text-base">
              When is the server delivered?
              <span className="transition-transform group-open:rotate-180">
                <svg width="20" height="20" fill="none" stroke="#8B5CF6" strokeWidth="2"><path d="M6 8l4 4 4-4" /></svg>
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
                <svg width="20" height="20" fill="none" stroke="#8B5CF6" strokeWidth="2"><path d="M6 8l4 4 4-4" /></svg>
              </span>
            </summary>
            <p className="text-blue-100 mt-4 text-sm">
              Yes, you can request a transfer to any of our available data center locations.
            </p>
          </details>
        </div>
      </section>

    </div>
  );
}