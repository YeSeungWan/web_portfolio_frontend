// sections/About.tsx
'use client';
import Image from 'next/image';
import { useConfig } from '@/lib/configContext';

export default function About() {
  const config = useConfig();

  // 1. 로딩 처리 (데이터가 아직 오지 않았을 때 렌더링 방지)
  if (!config) {
    return <div className="py-20 text-center text-zinc-500 font-mono">Loading...</div>;
  }

  // 2. 데이터 추출
  const { PROFILE_IMAGE } = config;

  const aboutSections = [
    {
      title: "01. Life Philosophy",
      desc: "14살, 이해할 수 없던 코딩 앞에 느꼈던 분함이 제 여정의 시작이었습니다. \"반드시 내가 모르는 것을 알아내고 내 직업으로 만들겠다.\"던 다짐은 지금까지 저를 지탱한 원동력입니다. 과거의 치열함을 기억하며, 어제보다 나은 내일을 위해 끊임없이 한 발짝 내딛는 삶을 살고자 합니다."
    },
    {
      title: "02. Attitude Towards Technology",
      desc: "저에게 개발은 오랜 '꿈'이기에, 제가 만드는 모든 결과물에는 애정과 책임감을 가지고 임합니다. 결과물에 대해서 스스로에게 질문하며, \"지금 이 결과가 내가 최선을 다한 결과인가?\"를 고민합니다. 적당히 타협하기보다 주어진 자원 안에서 최고의 효율과 퀄리티를 내는 것이 개발자로서의 책임감이라 믿습니다. 매 순간 진심을 다해 당시의 기술적 한계를 뛰어넘는 결과를 만들고자 노력합니다."
    },
    {
      title: "03. Desired Environment",
      desc: "저에게 가장 중요한 것은 당장의 보상보다, 함께 성장의 궤적을 그리며 나란히 걸어갈 수 있는 회사입니다. 아직 소프트웨어 개발 문화가 부족하다면 주도적으로 만들어갈 준비가 되어 있으며, 그 여정 속에서 깊게 소통하고 함께 성장할 동료를 원합니다. 당장의 단기적인 보상에 안주하기보다, 동료들과 함께 기술적 성취를 이루고 서비스의 성장에 기여할 수 있는 환경을 향해 나아가고 싶습니다."
    }
  ];

  const skillCategories = [
    {
      category: "Languages & Frameworks",
      items: ["Embedded C/C++", "Python", ".NET"]
    },
    {
      category: "Operating Systems & Envs",
      items: ["Bare-Metal (Non-OS)", "Zephyr (In Progress)", "FreeRTOS (Learning)"]
    },
    {
      category: "Hardware & Architecture",
      items: ["Cortex-M0", "Cortex-M4 (NUCLEO-F401RE)", "nRF52840 (SoC)", "FSM", "Hardware Debugging"]
    },
    {
      category: "Application & Protocols",
      items: ["OTA"]
    },
    {
      category: "Development Tools",
      items: ["STM32Cube", "IAR", "CCS", "VS Code"]
    },
    {
      category: "Project Management & Soft Skills",
      items: ["Git", "Jira", "Technical Communication"]
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-zinc-900">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
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

        {/* 2. 우측: 사진 + 인적사항 */}
        <div className="flex flex-col items-center gap-4 shrink-0 mx-auto md:mx-0 w-48 md:w-56 mt-12 md:mt-0">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <div className="absolute inset-0 bg-green-500/10 rounded-full blur-xl" />
            <Image 
              src={PROFILE_IMAGE} 
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

      {/* 3. 하단: 스킬 프레임 (글 중심의 미니멀 스타일) */}
      <div className="mt-12 md:mt-16 bg-[#0c0c0c] border border-zinc-900 rounded-xl p-5 md:p-8">
        <h3 className="text-[#00bc41] font-mono font-bold mb-6 md:mb-8 text-sm md:text-base border-b border-zinc-800 pb-2">
          Tech & Soft Skills
        </h3>
        
        <div className="space-y-4 md:space-y-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-1 md:grid md:grid-cols-4 md:gap-4 items-start">
              {/* 카테고리 타이틀 */}
              <span className="text-zinc-500 font-medium text-xs md:text-sm md:col-span-1">
                {cat.category}
              </span>
              
              {/* 텍스트 형태로 나열되는 스킬 리스트 */}
              <div className="md:col-span-3 text-zinc-300 text-xs sm:text-sm leading-relaxed">
                {cat.items.map((item, itemIdx) => (
                  <span key={itemIdx} className="whitespace-nowrap">
                    <span className="hover:text-[#00bc41] transition-colors cursor-default">
                      {item}
                    </span>
                    {itemIdx < cat.items.length - 1 && <span className="text-zinc-600 mx-2">/</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}