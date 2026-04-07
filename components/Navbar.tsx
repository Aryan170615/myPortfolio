"use client"

import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" flex justify-between items-center       
     h-14  px-6 fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl z-50 border-b border-l border-r border-neutral-800 bg-black/80 backdrop-blur-md">
      
      {/* Logo */}
      <div className="text-2xl font-semibold italic">Aryan</div>

      {/* Links */}
      <div className="flex gap-8 text text-gray-400">
        <Link href="/" className="hover:text-white cursor-pointer">Home</Link>
        <Link href="/blogs" className="hover:text-white cursor-pointer">Blogs</Link>
        <Link href="/projects" className="hover:text-white cursor-pointer">Projects</Link>
        <Link href="/resume" className="hover:text-white cursor-pointer">Resume</Link>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 text-gray-400">
        <button >
          <img width="18" height="18" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/moon-symbol.png"       alt="moon-symbol"/>
        </button>
        
      </div>

    </div>
  );
};