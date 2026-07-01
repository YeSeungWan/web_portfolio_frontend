'use client';

import { useConfig } from '@/lib/configContext';
import Link from 'next/link';

interface ProjectItem {
  title: string;
  category?: string;
  description: string;
  tags?: string[];
  link?: string | null;
  slug?: string;
  imgEnvKey?: string;
  challenge?: string;
}


export default function Projects() {

  const { PORTPORT_FRONT_SRC_URL, PORTPORT_BACK_SRC_URL, PROJECT_NORDIC_SRC_URL, PROJECT_STM32_SRC_URL } = useConfig();

  const projects: ProjectItem[] = [
    {
      title: "My Portfolio Web - Front-End",
      category: "Next.js + Synology NAS (Docker)",
      description: "시놀로지 NAS의 Container Manager 환경을 활용하여 가상화 컨테이너 기반으로 독립 구동 및 배포한 포트폴리오 웹사이트의 프론트엔드입니다.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare", "Container Manager", "Docker", "Synology NAS", "GitHub", "JIRA", "CI/CD"],
      link: PORTPORT_FRONT_SRC_URL 
    },
    {
      title: "My Portfolio Web - Back-End",
      category: "Node.js (Express) + PostgreSQL",
      description: "시놀로지 NAS 인프라 환경에서 PostgreSQL 데이터베이스를 연동하고, Cloudflare를 통해 도메인 및 보안 네트워크 인터페이스를 구축한 RESTful API 서버입니다.",
      tags: ["Node.js", "Express.js", "PostgreSQL", "Cloudflare", "Container Manager", "Docker", "Synology NAS", "GitHub", "JIRA"],
      link: PORTPORT_BACK_SRC_URL
    },
    {
      title: "Hardware Independent Architect",
      slug : "vendor-independent",
      category: "architecture",
      description: "상용 MCU 간 이식성과 확장성을 극대화하기 위해 HAL 레벨을 분리하고 추상화 기법을 적용한 하드웨어 독립적 펌웨어 아키텍처 설계 경험입니다.",
      tags: ["Cortex-M0", "C", "HAL_LIB"],
      link: null
    },
    {
      title: "Cortex-M0 기반 OTA 시스템 설계",
      slug : "ota",
      category: "Cortex-M0 - OTA Architect",
      description: "Cortex-M0 MCU 환경에서 부트로더와 메모리 맵(Memory Map)을 직접 설계하고, FSM 기반의 안정적인 펌웨어 무선 업데이트(OTA) 및 Fail-Safety 시나리오를 구축한 경험입니다.",
      tags: ["Cortex-M0", "Memory Map", "FSM", "Fail Safety"],
      link: null
    },
    {
      title: "nRF52840 DK - Embedded Wireless Project",
      category: "Nordic Development Kit",
      description: "Nordic Development Kit과 Zephyr RTOS를 활용한 프로젝트입니다. BLE 통신과 SoC 저전력 제어를 중심으로 기능을 확장해 나가고 있습니다. (진행 중)",
      tags: ["Nordic", "nRF52840 DK", "Zephyr(RTOS)", "BLE", "SoC", "Visual Studio Code", "GitHub"],
      link: PROJECT_NORDIC_SRC_URL
    },
    {
      title: "NUCLEO-F401RE - Real-Time Control Project",
      category: "STM32 NUCLEO Board",
      description: "STM32 NUCLEO 보드와 FreeRTOS 기반의 실시간 시스템 제어 프로젝트입니다. CAN 통신 및 주변장치 드라이버 설계 역량을 다지며 기능을 구현하고 있습니다. (진행 중)",
      tags: ["STM32", "NUCLEO-F401RE", "Free-RTOS", "CAN", "STM32 Cube", "GitHub"],
      link: PROJECT_STM32_SRC_URL
    },
  ];
  
  return (
    <section id="projects" className="py-20 font-sans">
      <h2 className="font-mono text-2xl font-bold text-green-400 mb-12">[03. Selected Projects]</h2>
      
      {/* 2단 반응형 그리드 레이아웃 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div 
            key={index} 
            className="group relative bg-zinc-900/40 border border-zinc-800 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs text-green-500 mb-2 block">{proj.category}</span>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                {proj.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
                {proj.description}
              </p>
            </div>

            <div>
              {/* 태그 묶음 */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.tags?.map((tag, idx) => (
                  <span key={idx} className="font-mono text-[11px] text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-850">
                    {tag}
                  </span>
                ))}
              </div>

              {/* 소스코드 링크 (있는 경우에만 표시) */}
              {proj.link && (
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-white font-mono hover:text-green-400 underline underline-offset-4"
                >
                  View Repository &rarr;
                </a>
              )}
              {/* 💡 상세 페이지 이동 버튼: next/link 컴포넌트로 버그 수정 */}
              {proj.slug && (
                <Link 
                  href={`/projects/${proj.slug}`} 
                  className="text-xs text-white font-mono hover:text-green-400 underline"
                >
                  View Details &rarr;
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}