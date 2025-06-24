'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center items-center text-white bg-transparent pt-[30px]">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/gamelogo.svg" alt="Game Logo" width={273} height={67} priority />
          </div>
        </Link>

        {/* Desktop Menu */} 
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 font-semibold space-[25px]">
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
              Minecraft Hosting <FaChevronDown className="text-xs mt-1" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
              Juegos <FaChevronDown className="text-xs mt-1" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
              Discord Bot <FaChevronDown className="text-xs mt-1" />    

            </div>
          </div>
          {/* Profile/User Button */}
          <Image
            src="/cunteryflag.svg" alt="Country Flag" width={81} height={20} className="cursor-pointer"
          />
          <button className="ml-8 w-16 h-10 rounded-full bg-gradient-to-r from-blue-800 to-purple-700 opacity-60 hover:opacity-100 transition" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Open Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-4 font-semibold">
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
              Minecraft Hosting <FaChevronDown className="text-xs mt-1" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
              Juegos <FaChevronDown className="text-xs mt-1" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
              Discord Bot <FaChevronDown className="text-xs mt-1" />
            </div>
            <button className="w-16 h-10 rounded-full bg-gradient-to-r from-blue-800 to-purple-700 opacity-60 mt-2" />
          </div>
        </div>
      )}
    </nav>
  );
}