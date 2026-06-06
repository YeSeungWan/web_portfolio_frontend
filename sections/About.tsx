// sections/About.tsx
import Image from 'next/image';

export default function About() {

  const aboutSections = [
    {
      title: "01. Philosophy & Approach",
      desc: "하드웨어에 대한 깊은 호기심을 바탕으로 매뉴얼과 레지스터 레벨의 제어를 분석하여 최적의 펌웨어 솔루션을 설계합니다. 단순한 코드 구현을 넘어, 리소스 효율성과 안정성, 그리고 양산 효율까지 고려한 '고장 나지 않는 견고한 시스템'을 아키텍처링하는 것이 저의 철학입니다."
    },
    {
      title: "02. Domain Expertise",
      desc: "임베디드 아키텍처 설계(분리형 구조, 리소스 최적화), 이기종 통신 프로토콜 동기화, 고신뢰성 OTA 설계에 풍부한 실무 경험을 보유하고 있습니다. 특히 Anti-Brick 로직과 예외 상황 처리를 위한 FSM 설계 등 실질적인 필드 이슈 해결에 특화되어 있습니다."
    },
    {
      title: "03. Continuous Growth & Vision",
      desc: "깨끗하고 유지보수 가능한 코드(Clean Code)를 최우선으로 하며, 실무 문제를 해결하는 하드웨어 솔루션을 넘어, 향후 견고하고 확장 가능한 임베디드 시스템을 설계하는 것이 저의 비전입니다."
    }
  ];

  // 하단 스킬 박스 데이터
  const skills = ["Embedded C/C++", "python", ".NET", "Cortex-M0", "Bare-Metal", "OTA", "Visual Stuio/Code", "Eclipse", "IAR", "CCS", "STM32 CUBE", "Hardware Debugging", "Git", "JIRA"];

  return (
    <section id="about" className="py-20 border-b border-zinc-900">
      <div className="flex flex-col md:flex-row items-start gap-12">
        
        {/* 1. 좌측: 3단 상세 소개 */}
        <div className="flex-1 space-y-6">
          <h2 className="font-mono text-2xl font-bold text-green-400">[01. About Me]</h2>
          
          <div className="space-y-6">
            {aboutSections.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-white font-bold text-lg border-l-2 border-green-500 pl-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm pl-0">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. 우측: 사진 + 인적사항 (좌측과 정렬됨) */}
        <div className="flex flex-col items-center gap-4 shrink-0 mx-auto md:mx-0 w-48 md:w-56 mt-12">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <div className="absolute inset-0 bg-green-500/10 rounded-full blur-xl" />
            <Image 
              src={process.env.NEXT_PUBLIC_MY_PROFILE_IMAGE ?? ""} 
              alt="Profile Picture"
              fill
              className="object-cover rounded-full border-2 border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          <div className="text-center space-y-1 mt-2">
            <h3 className="text-white font-bold text-lg">예승완</h3>
            <p className="text-[#00bc41] font-mono text-sm">3년차 Firmware Engineer</p>
          </div>
        </div>

      </div>

      {/* 3. 하단: 스킬 프레임 박스 (프로젝트 카드 스타일) */}
      <div className="mt-16 bg-[#0c0c0c] border border-zinc-800 rounded-xl p-8">
        <h3 className="text-[#00bc41] font-mono font-bold mb-6"> Tech Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <span key={idx} className="px-4 py-2 border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:border-green-500/50 hover:text-white transition-all cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}