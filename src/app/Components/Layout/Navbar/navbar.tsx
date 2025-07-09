'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center items-center text-white bg-transparent pt-4">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/gamelogo.svg"
              alt="Game Logo"
              width={273}
              height={67}
              priority
             
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 font-semibold">
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 transition">
              Minecraft Hosting <FaChevronDown className="text-xs mt-1" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 transition">
              Juegos <FaChevronDown className="text-xs mt-1" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 transition">
              Discord Bot <FaChevronDown className="text-xs mt-1" />
            </div>
          </div>
          {/* Profile/User Button */}
          <div className="flex items-center bg-[#23234A] rounded-full px-4 py-1 gap-2 shadow border border-blue-200/20 cursor-pointer hover:bg-[#2d2d5a] transition">
            <Image
              src="/cunteryflag.svg"
              alt="Country Flag"
              width={28}
              height={20}
              className="object-cover"
            />
            <span className="text-white text-base font-semibold tracking-wide">EN</span>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FaTimes className="text-2xl text-white" />
          ) : (
            <FaBars className="text-2xl text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#101B2B]/95 flex flex-col items-center justify-start pt-24 px-6 md:hidden transition-all">
          <div className="flex flex-col gap-6 w-full max-w-xs mx-auto font-semibold text-lg">
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition">
              Minecraft Hosting <FaChevronDown className="text-xs mt-1" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition">
              Juegos <FaChevronDown className="text-xs mt-1" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition">
              Discord Bot <FaChevronDown className="text-xs mt-1" />
            </div>
            <div className="flex items-center bg-[#23234A] rounded-full px-4 py-2 gap-2 shadow border border-blue-200/20 cursor-pointer hover:bg-[#2d2d5a] transition mt-4">
              <Image
                src="/cunteryflag.svg"
                alt="Country Flag"
                width={28}
                height={20}
                className="object-cover"
              />
              <span className="text-white text-base font-semibold tracking-wide">EN</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}