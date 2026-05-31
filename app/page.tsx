// app/page.tsx
'use client';

import { useState } from 'react';
import About from '@/sections/About';
import Experience from '@/sections/Experience';

export default function Home() {
  // 고양이 인트로는 일단 뼈대 잡는 동안 꺼두거나 생략할 수 있게 true/false로 제어합니다.
  const [isIntroActive, setIsIntroActive] = useState(false); 

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-4xl px-6">
        {/* 분리된 디자인 블록들을 순서대로 레고처럼 조립 */}
        <About />
        <Experience />
        {/* 나중에 여기에 <Experience />, <Projects /> 등을 밑으로 추가하면 끝납니다. */}
      </div>
    </main>
  );
}