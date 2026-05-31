// components/Navbar.tsx
'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-lg font-bold text-green-400 hover:opacity-80">
          $ dev.firmware
        </Link>
        <div className="flex items-center gap-6 font-mono text-sm text-zinc-400">
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}