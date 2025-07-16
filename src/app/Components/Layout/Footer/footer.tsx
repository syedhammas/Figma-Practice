'use client';

import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[url('/footerbg.png')] bg-cover bg-no-repeat w-full text-white pt-20 md:pt-40 font-poppins relative">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 md:mb-16 gap-6 md:gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-astrospace text-center lg:text-left lg:w-[648px] w-full">
            JOIN OUR NEWSLETTER
          </h2>
          <form className="flex items-center bg-white/5 rounded-full p-1 w-full max-w-[705px] h-[60px] md:h-[80px] lg:h-[99px]">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-none outline-none text-white px-4 md:px-5 py-2 md:py-3 text-sm md:text-base flex-1 placeholder:text-white/60"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#3A7BFF] to-[#6A5CFF] rounded-full w-[100px] md:w-[140px] lg:w-[169px] h-[40px] md:h-[60px] lg:h-[73px] text-white mr-2 md:mr-4 font-semibold text-sm md:text-base px-4 md:px-8 py-1 md:py-2 ml-1 md:ml-2 hover:opacity-90 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="flex-1 w-full px-4 sm:px-8 md:px-12 lg:px-24 pb-6 md:pb-8 flex flex-col lg:flex-row gap-8 md:gap-12 mt-8 md:mt-16">
        <div className="flex-2 min-w-[260px]">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
            <Image
              src="/gamelogo.svg"
              alt="Logo"
              width={280}
              height={68}
              className="w-[240px] md:w-[320px] lg:w-[382px] h-auto"
            />
          </div>
          <p className="text-[#B0B8C1] text-xs md:text-sm mb-3 mt-6 md:mt-10 w-full lg:w-[479px]">
            At GameProHost, we understand that quality game hosting is essential for an exceptional gaming experience. As experts in the field, we are here to provide you with a top-notch game hosting service.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 md:gap-5 mb-5 mt-4 md:mt-0">
            <a href="#" className="text-blue-600 text-lg md:text-xl hover:text-[#3A7BFF] transition"><FaFacebookF /></a>
            <a href="#" className="text-blue-600 text-lg md:text-xl hover:text-[#3A7BFF] transition"><FaTwitter /></a>
            <a href="#" className="text-blue-600 text-lg md:text-xl hover:text-[#3A7BFF] transition"><FaInstagram /></a>
            <a href="#" className="text-blue-600 text-lg md:text-xl hover:text-[#3A7BFF] transition"><FaBehance /></a>
            <a href="#" className="text-blue-600 text-lg md:text-xl hover:text-[#3A7BFF] transition"><FaDribbble /></a>
          </div>
          <div className="flex justify-center lg:justify-start gap-2">
            <Image
              src="/gameprohosting.svg"
              alt="Badge2"
              width={42}
              height={20}
              className="w-[42px] h-auto"
            />
            <Image
              src="/dmca.svg"
              alt="Badge1"
              width={54}
              height={20}
              className="w-[54px] h-auto"
            />
          </div>
        </div>

        {/* Columns */}
        <div className="flex-1 min-w-[180px] mt-8">
          <h4 className="text-white font-bold text-xl mb-4 border-b-2 border-[#3A7BFF] inline-block pb-1">GAMES AVAILABLE</h4>
          <ul className="list-none p-0 m-0 text-[#B0B8C1] text-base md:text-lg leading-16">
            <li>MINECRAFT HOSTING</li>
            <li>RUST HOSTING</li>
            <li>ARK HOSTING</li>
            <li>TERRARIA HOSTING</li>
            <li>DISCORD BOT HOSTING</li>
          </ul>
        </div>
        <div className="flex-1 min-w-[180px] mt-8">
          <h4 className="text-white font-bold text-xl mb-4 border-b-2 border-[#3A7BFF] inline-block pb-1">CUSTOMER ACCESS</h4>
          <ul className="list-none p-0 m-0 text-[#B0B8C1] text-base md:text-lg leading-16">
            <li>GAME PANEL</li>
            <li>CUSTOMER AREA</li>
            <li>OPEN A TICKET</li>
          </ul>
        </div>
        <div className="flex-1 min-w-[180px] mt-8">
          <h4 className="text-white font-bold text-xl mb-4 border-b-2 border-[#3A7BFF] inline-block pb-1">COMPANY</h4>
          <ul className="list-none p-0 m-0 text-[#B0B8C1] text-base md:text-lg leading-16">
            <li>ABOUT US</li>
            <li>HARDWARE</li>
            <li>MEDIUM</li>
            <li>EMPLOYMENT</li>
            <li>AFFILIATES</li>
            <li>BLOG</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#232B3B] py-3 md:py-4 px-4 sm:px-8 md:px-16 flex flex-col md:flex-row justify-between items-center text-xs text-[#B0B8C1] w-full">
        <span className="mb-2 md:mb-0 text-center md:text-left">© 2024 DPI.MEDIA, All Rights Reserved</span>
        <a href="#" className="text-[#B0B8C1] underline">Terms & Policies</a>
      </div>
    </footer >
  );
};

export default Footer;