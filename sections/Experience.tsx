// sections/Experience.tsx

export default function Experience() {
  // 경력 데이터 배열 (나중에 이 부분의 데이터만 수정하면 화면이 자동으로 바뀝니다)
  const experiences = [
    {
      period: "2024.03 - 현재",
      role: "임베디드 펌웨어 엔지니어",
      company: "현재 재직 중인 회사명",
      description: "MCU 기반 제어 시스템 및 산업용 IoT 디바이스 펌웨어 개발",
      details: [
        "ARM Cortex-M4 기반 MCU를 활용한 실시간 센서 데이터 수집 및 제어 루프 최적화",
        "UART, SPI, I2C 통신 프로토콜을 이용한 디바이스 드라이버 설계 및 하드웨어 디버깅",
        "FreeRTOS 환경에서 멀티태스크 스케줄링 및 메모리 누수 방지를 위한 자원 관리 최적화",
      ],
      skills: ["C/C++", "Cortex-M4", "FreeRTOS", "Keil uVision", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-20 border-b border-zinc-900">
      <h2 className="font-mono text-2xl font-bold text-green-400 mb-12">[02. Experience]</h2>

      {/* 타임라인 레이아웃 시작 */}
      <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8">
            
            {/* 타임라인 좌측 점 (Indicator) */}
            <span className="absolute -left-[5px] top-1.5 flex h-2.5 w-2.5 rounded-full bg-green-500 ring-4 ring-zinc-950" />

            {/* 메인 콘텐트 카드 */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
              <div>
                <h3 className="text-xl font-bold text-white font-sans">{exp.role}</h3>
                <span className="text-zinc-400 text-sm font-medium">{exp.company}</span>
              </div>
              <span className="font-mono text-xs text-zinc-500 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800">
                {exp.period}
              </span>
            </div>

            <p className="text-zinc-400 text-sm mb-4 font-sans">{exp.description}</p>

            {/* 상세 업무 내용 리스트 */}
            <ul className="list-disc list-inside space-y-2 text-zinc-500 text-sm font-sans mb-5">
              {exp.details.map((detail, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="text-zinc-400">{detail}</span>
                </li>
              ))}
            </ul>

            {/* 사용 기술 태그 묶음 */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="font-mono text-xs text-green-400 bg-green-950/30 px-2 py-0.5 rounded border border-green-900/50"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}