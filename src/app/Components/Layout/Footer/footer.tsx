'use client';
import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[url('/footerbg.png')] w-[1834px] h-[1020px] bg-no-repeat mx-auto text-white pt-40 font-poppins relative flex flex-col justify-between">
      {/* Newsletter */}
      <div className="w-full px-24">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <h2 className="text-5xl font-astrospace text-left md:w-[648px] w-full h-10">
            JOIN OUR NEWSLETTER
          </h2>
          <form className="flex items-center bg-white/5 rounded-full p-1 w-[705px] h-[99px]">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-none outline-none  text-white px-5 py-3 text-base flex-1 placeholder:text-white/60"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#3A7BFF] to-[#6A5CFF] rounded-full w-[169px] h-[73px] text-white mr-4 font-semibold text-base px-8 py-2 ml-2 hover:opacity-90 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="flex-1 w-full px-24 pb-8 flex flex-col md:flex-row gap-12 mt-16">
        <div className="flex-2 min-w-[260px]">
          <div className="flex items-center gap-3 mb-3">
        <Image src="/gamelogo.svg" alt="Logo" width={382} height={93}/>
         </div>
          <p className="text-[#B0B8C1] text-sm mb-3 mt-10 w-[479px] h-[160px]">
            At GameProHost, we understand that quality game hosting is essential for an exceptional gaming experience. As experts in the field, we are here to provide you with a top-notch game hosting service.
          </p>
          <div className="flex gap-5 mb-5 mt-[-60px]">
            <a href="#" className="text-blue-600 text-xl hover:text-[#3A7BFF] transition"><FaFacebookF /></a>
            <a href="#" className="text-blue-600 text-xl hover:text-[#3A7BFF] transition"><FaTwitter /></a>
            <a href="#" className="text-blue-600 text-xl hover:text-[#3A7BFF] transition"><FaInstagram /></a>
            <a href="#" className="text-blue-600 text-xl hover:text-[#3A7BFF] transition"><FaBehance /></a>
            <a href="#" className="text-blue-600 text-xl hover:text-[#3A7BFF] transition"><FaDribbble /></a>
          </div>
          <div className="flex gap-2">
           <Image src="/gameprohosting.svg" alt="Badge2" width={52} height={26} />
           <Image src="/dmca.svg" alt="Badge1" width={64} height={24} />           
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
      <div className="border-t border-[#232B3B] py-4 px-16 flex flex-col md:flex-row justify-between items-center text-xs text-[#B0B8C1] w-full">
        <span>© 2024 DPI.MEDIA, All Rights Reserved</span>
        <a href="#" className="text-[#B0B8C1] underline mt-2 md:mt-0">Terms & Policies</a>
      </div>
    </footer>
  );
};

export default Footer;
