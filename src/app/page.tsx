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
              className={`w-2 h-2 rounded-full ${
                idx === current ? "bg-white" : "bg-white/40"
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
          
            <div className="flex flex-col gap-6 flex-1">
              <div className="bg-[#101B2B]/80 border border-blue-700 rounded-xl px-8 py-4 flex items-center text-white text-lg font-medium shadow-lg">
                Full FTP access
              </div>
              <div className="bg-[#101B2B]/80 border border-blue-700 rounded-xl px-8 py-4 flex items-center text-white text-lg font-medium shadow-lg">
                Manage database information
              </div>
              <div className="bg-[#101B2B]/80 border border-blue-700 rounded-xl px-8 py-4 flex items-center text-white text-lg font-medium shadow-lg">
                Manage users on your server
              </div>
              <div className="bg-[#101B2B]/80 border border-blue-700 rounded-xl px-8 py-4 flex items-center text-white text-lg font-medium shadow-lg">
                Monitor performance statistics
              </div>
            </div>
            <div className="flex flex-col items-center justify-center flex-shrink-0 z-10">
              <div className="p-6 flex items-center justify-center mt-6">
                <Image
                  src="/logoGH.svg"
                  alt="GH Logo"
                  width={528}
                  height={540}
                  className="object-contain"
                />
              </div>
              </div>
              <div className="flex flex-col gap-6 flex-1">
              <div className="bg-[#101B2B]/80 border border-[#395BEF] rounded-xl px-8 py-4 flex items-center text-white text-lg font-medium shadow-lg">
                Perform backups
              </div>
              <div className="bg-[#101B2B]/80 border border-[#395BEF] rounded-xl px-8 py-4 flex items-center text-white text-lg font-medium shadow-lg">
                Technical support
              </div>
              <div className="bg-[#101B2B]/80 border border-[#395BEF] rounded-xl px-8 py-4 flex items-center text-white text-lg font-medium shadow-lg">
                Free subdomain
              </div>
              <div className="bg-[#101B2B]/80 border border-[#395BEF] rounded-xl px-8 py-4 flex items-center text-white text-lg font-medium shadow-lg">
                Automatic backups
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
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6"/><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <a href="#" className="underline text-blue-200 hover:text-blue-400 transition">NVMe SSD storage</a>
          </li>
          <li className="flex items-start gap-3 text-white/90 text-base">
            <span className="mt-1 text-blue-400">
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6"/><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <a href="#" className="underline text-blue-200 hover:text-blue-400 transition">500% CPU utilization (AMD Ryzen 7 processor or higher)</a>
          </li>
          <li className="flex items-start gap-3 text-white/90 text-base">
            <span className="mt-1 text-blue-400">
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6"/><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <a href="#" className="underline text-blue-200 hover:text-blue-400 transition">3 manual backups from the user panel</a>
          </li>
          <li className="flex items-start gap-3 text-white/90 text-base">
            <span className="mt-1 text-blue-400">
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6"/><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6"/><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Delivery of your server in minutes
          </li>
          <li className="flex items-start gap-3 text-white/90 text-base">
            <span className="mt-1 text-blue-400">
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6"/><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            High internet connection
          </li>
          <li className="flex items-start gap-3 text-white/90 text-base">
            <span className="mt-1 text-blue-400">
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6"/><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Free extra backups for 7 days
          </li>
          <li className="flex items-start gap-3 text-white/90 text-base">
            <span className="mt-1 text-blue-400">
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#3B82F6"/><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-16 w-full max-w-8x2l px-12">
          {/* Card 1 */}
          <div className="relative bg-gradient-to-br from-[#101B2B]/80 to-[#23234A]/80 border border-blue-200/30 rounded-2xl p-8 shadow-lg flex flex-col min-h-[260px]">
            <span className="text-blue-400 mb-4">
              {/* Keyboard Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="8" y="16" width="24" height="12" rx="2" stroke="#3B82F6" strokeWidth="2"/><rect x="12" y="20" width="2" height="2" rx="1" fill="#3B82F6"/><rect x="16" y="20" width="2" height="2" rx="1" fill="#3B82F6"/><rect x="20" y="20" width="2" height="2" rx="1" fill="#3B82F6"/><rect x="24" y="20" width="2" height="2" rx="1" fill="#3B82F6"/><rect x="28" y="20" width="2" height="2" rx="1" fill="#3B82F6"/></svg>
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
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="12" y="12" width="16" height="16" rx="4" stroke="#3B82F6" strokeWidth="2"/><rect x="18" y="18" width="4" height="4" rx="2" fill="#3B82F6"/></svg>
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
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="10" y="16" width="20" height="8" rx="2" stroke="#3B82F6" strokeWidth="2"/><rect x="14" y="20" width="4" height="2" rx="1" fill="#3B82F6"/></svg>
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
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="12" stroke="#3B82F6" strokeWidth="2"/><path d="M12 28v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="#3B82F6" strokeWidth="2"/></svg>
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
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="8" stroke="#3B82F6" strokeWidth="2"/><path d="M20 12v-2M20 30v-2M28 20h2M10 20h2M25.66 25.66l1.42 1.42M12.92 12.92l1.42 1.42M25.66 14.34l1.42-1.42M12.92 27.08l1.42-1.42" stroke="#3B82F6" strokeWidth="2"/></svg>
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
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><path d="M20 8l10 4v6c0 7.732-5.373 14.042-10 16-4.627-1.958-10-8.268-10-16v-6l10-4z" stroke="#3B82F6" strokeWidth="2"/><path d="M16 20l3 3 5-5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
        <section className="w-full flex flex-col items-center bg-[url('/hero5.png')] bg-cover bg-no-repeat py-24 relative">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-[98vw] max-w-[1700px]">
    {/* Minecraft */}
    <div>
      <h3 className="text-white font-astrospace text-2xl mb-4 tracking-wide">MINECRAFT</h3>
      <p className="text-blue-100 text-lg mb-8">
        Enter Minecraft, a limitless world of blocks and endless possibilities. A universe where you create, architect, explore and survive. Minecraft offers you a robust, dynamic sandbox. Survival awaits: you expect resources and fight adversity to stay strong and creative, while others collaborate, construct cities, or compete on custom servers. Whether you want to build magnificent cities, create your own adventure or survive the tension they began in Minecraft, you decide your own adventure. Start today and discover why Minecraft has captured the hearts of millions.
      </p>
    </div>
    <div className="flex justify-end">
      <div className="relative rounded-[36px] flex items-center justify-center">
        {/* Gradient Border */}
        <div
          className="absolute inset-0 rounded-[36px] pointer-events-none"
          style={{
            padding: "4px",
            background: "linear-gradient(135deg, #395BEF 0%, #8B5CF6 100%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        {/* Card Content */}
        <div className="relative rounded-[32px] overflow-hidden bg-[#181A2A]">
          <img
            src="/minecraft.png"
            alt="Minecraft"
            className="w-[420px] h-[220px] object-cover"
          />
        </div>
      </div>
    </div>
    {/* ARK */}
    <div className="flex justify-start">
      <div className="relative rounded-[36px] flex items-center justify-center">
        {/* Gradient Border */}
        <div
          className="absolute inset-0 rounded-[36px] pointer-events-none"
          style={{
            padding: "4px",
            background: "linear-gradient(135deg, #395BEF 0%, #8B5CF6 100%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        {/* Card Content */}
        <div className="relative rounded-[32px] overflow-hidden bg-[#181A2A]">
          <img
            src="/ark.png"
            alt="ARK"
            className="w-[420px] h-[220px] object-cover"
          />
        </div>
      </div>
    </div>
    <div>
      <h3 className="text-white font-astrospace text-2xl mb-4 tracking-wide">ARK</h3>
      <p className="text-blue-100 text-lg mb-8">
        In ARK: Survival Evolved, you wake up on an island full of dinosaurs and other prehistoric creatures. You must build, develop, domesticate and survive to prevail. Create your own rules, tame the wildest beings and form complete tribes to dominate the island. With hundreds of mods, the game lets you live an unrivaled prehistoric experience and cater to an unmatched gaming challenge. Are you ready to face the challenge of survival in this prehistoric order? Join the ark today!
      </p>
    </div>
    {/* RUST */}
    <div>
      <h3 className="text-white font-astrospace text-2xl mb-4 tracking-wide">RUST</h3>
      <p className="text-blue-100 text-lg mb-8">
        Rust throws you into a post-apocalyptic world where only the strongest survive. With nothing more than a stone and a torch, you must develop creative solutions, build shelters, form alliances and defend yourself from dangers. Collect resources, craft weapons, and build your own base. Survival comes down to skill: form alliances or face other players in your journey to the challenge? Try today and see if you can survive rust.
      </p>
    </div>
    <div className="flex justify-end">
      <div className="relative rounded-[36px] flex items-center justify-center">
        {/* Gradient Border */}
        <div
          className="absolute inset-0 rounded-[36px] pointer-events-none"
          style={{
            padding: "4px",
            background: "linear-gradient(135deg, #395BEF 0%, #8B5CF6 100%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        {/* Card Content */}
        <div className="relative rounded-[32px] overflow-hidden bg-[#181A2A]">
          <img
            src="/rust.png"
            alt="Rust"
            className="w-[420px] h-[220px] object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>
            </section>
       
      </div>
);}