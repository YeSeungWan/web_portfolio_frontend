'use client';

import { useState } from 'react';
import ContactModal from '../components/ContactModal';

export default function Contact() {
  const email = "tmddhks68@gmail.com";
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenContactModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);

    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-20 font-sans max-w-4xl mx-auto px-6 relative">
      <h2 className="font-mono text-2xl font-bold text-green-400 mb-12">
        [04. Get In Touch]
      </h2>

      <div className="w-full max-w-3xl mx-auto space-y-8">
        <p className="text-zinc-400 text-sm leading-relaxed text-center sm:text-left">
          새로운 프로젝트 협업, 기술 교류, 또는 임베디드 및 풀스택 개발에 관한 어떤 이야기든 환영합니다. <br className="hidden sm:inline" />
          아래의 채널을 통해 연락해 주시면 빠르게 답변해 드리겠습니다.
        </p>

        <div className="border border-zinc-800 bg-zinc-900/30 rounded-lg p-8 w-full font-mono text-center">
          <p className="text-xs text-green-500 mb-2">// Contact Information</p>
          <p className="text-white text-xl font-bold mb-6">{email}</p>
          
          <div className="relative inline-block">
            <button 
              onClick={handleOpenContactModal}
              className="inline-block text-xs font-bold text-zinc-950 bg-green-400 hover:bg-green-300 px-6 py-3 rounded transition-colors select-none cursor-pointer"
            >
              {copied ? "✓ Box Opened & Copied!" : "Say Hello (Send Email)"}
            </button>
          </div>
          
          <p className="text-zinc-500 text-[11px] mt-3">
            * 버튼을 누르면 우측 하단에 간편 문의 창이 열리며, 주소도 자동 복사됩니다.
          </p>
        </div>

        <footer className="pt-20 font-mono text-xs text-zinc-600 text-center w-full">
          &copy; {new Date().getFullYear()} Firmware Portfolio. Powered by Next.js & Synology NAS.
        </footer>
      </div>

      {/* 우측 하단 스탠바이 */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}