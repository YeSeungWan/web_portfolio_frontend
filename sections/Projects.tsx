// sections/Projects.tsx
export default function Projects() {
  const projects = [
    {
      title: "Turn-Based Hack & Slash Game",
      category: "Unity Game Development",
      description: "C#과 Unity 엔진을 활용하여 턴제 기반의 조작감과 액션성을 강조한 2D 롤플레잉 게임 개발 프로젝트입니다.",
      tags: ["Unity 6", "C#", "2D Physics", "Character Editor Asset"],
      link: "https://github.com/your-id/game-project" // 나중에 실제 링크로 대체
    },
    {
      title: "Synology NAS Self-Hosting & API Server",
      category: "Infrastructure & Backend",
      description: "시놀로지 나스를 기반으로 Docker 컨테이너 환경을 구축하고, 개인 데이터 백업 및 외부 서비스 연동을 위한 REST API 백엔드 서버를 배포 및 운영 중입니다.",
      tags: ["Synology NAS", "Docker", "REST API", "GitHub Actions"],
      link: null
    },
    {
      title: "Custom CRC32 Verification Module",
      category: "Embedded Firmware Utility",
      description: "Python의 zlib CRC32 표준 라이브러리와 C언어 기반 임베디드 타겟 간의 계산 테이블 매핑 디스크레펀시를 분석하고, 비트 정밀도를 동기화한 데이터 검증 모듈입니다.",
      tags: ["C/C++", "Python", "CRC32 Algorithm", "Data Integrity"],
      link: null
    }
  ];

  return (
    <section id="projects" className="py-20 border-b border-zinc-900">
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
                {proj.tags.map((tag, idx) => (
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}