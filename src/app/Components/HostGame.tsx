import React from 'react'
import Image from 'next/image'

export default function HostGame() {
  return (
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
  )
}
