'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 로고 영역 */}
        <div className="hidden md:block text-green-400 font-mono font-bold text-xl">
          FirmWare Engineer
        </div>
        
        {/* 메뉴 영역 */}
        <div className="flex gap-6 font-mono text-sm text-zinc-400">
          <Link href="/#about" className="hover:text-green-400">01. About</Link>
          <Link href="/#experience" className="hover:text-green-400">02. Experience</Link>
          <Link href="/#projects" className="hover:text-green-400">03. Projects</Link>
          <Link href="/#contact" className="hover:text-green-400">04. Contact</Link>
        </div>
      </div>
    </nav>
  );
}