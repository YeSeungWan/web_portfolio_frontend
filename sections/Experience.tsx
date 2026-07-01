'use client';

import { useState } from 'react';

const EXPERIENCE_DATA = [
  {
    year: "2026 ~ 2026.06.30",
    role: "다중 통신 및 MindMotion/TI MCU 기반 제품 개발 · PL",
    category: "Embedded Firmware Architecture / PL",
    techStack: [
      "MindMotion", "TI MCU", "Cortex-M", 
      "OTA Protocol", "Failsafe", "CRC32",
      "Hardware Debugging (Oscilloscope / MultiMeter)",
      "Python (Post-Build Automation)",
      ".NET Framework"
    ],
    summary: "특정 제조사 종속성을 탈피한 독립형 FW 아키텍처 설계 및 고신뢰성 복구 모드 시스템 구축을 총괄하고 있습니다.",
    groupedAchievements: [
      {
        keyword: "신규 아키텍처 및 프로토콜 설계",
        list: [
          "벤더 독립형 HAL 설계: 특정 제조사 종속성이 없는 드라이버 포팅 아키텍처 및 검토 환경 확보",
          "독자 OTA 프로토콜: 시퀀스 번호, 타임아웃, 예외 로그 필드를 직접 정의한 고신뢰성 패킷 설계",
          "Pin Mapping 최적화: 레퍼런스 매뉴얼 분석 기반 주변장치 채널 충돌 방지 및 자원 최적 분배"
        ]
      },
      {
        keyword: "고신뢰성 예외 처리 시스템 (Anti-Brick)",
        list: [
          "Dual Bank 아키텍처: 시스템 가동 중 신규 FW 다운로드 및 백업 복구가 가능한 Dual Bank 플래시 구조 구현",
          "Anti-Brick 아키텍처: Swap 앱 비정상 동작 및 무결성 검증 실패 시 최후방 복구 모드 전환 로직 구현",
          "Failsafe 시스템: 부팅 연속 5회 실패 시 다운 방지 및 안전 대기 상태 전환 카운팅 알고리즘 설계",
          "데이터 무결성 방어: 다운로드 중 전원 차단 등 예외 상황에 대응하는 FSM 기반 Swap 알고리즘 구현"
        ]
      },
      {
        keyword: "다중 통신 동기화 및 자동화",
        list: [
          "통신 동기화 알고리즘: TI MCU 기반 이기종 다중 통신 채널 데이터의 유실 없는 동기화 메커니즘 구현",
          "Post-Build 자동화: 컴파일 완료 시 CRC32/메모리 자동 산출 스크립트 구축 및 데이터 무결성 100% 확보",
          "가이드라인 자산화: OTA 메모리 맵 및 플로우차트 문서화를 통해 팀 내 정기 코드 리뷰 주도"
        ]
      },
      {
        keyword: "프로젝트 리딩 & 공급망 대응",
        list: [
          "교차 검증 및 설계 검토: 사전 기술 시나리오 검토를 통한 잠재 리스크 분석 및 고객사 제품 스펙 협의 주도",
          "타겟 MCU 소싱 최적화: H/W 및 구매 부서 공조 하에 MoQ, 단가, 수급 안정성 및 일정을 고려한 MCU 이원화 검증",
          "일정 병목 선제 방어: 각 부서별 품평 및 검증에 필요한 산출물 자료를 사전에 정의하고 선요청하여, 유관 부서 간 데이터 전달 병목 및 일정 지연 리스크 원천 차단",
          "개발 마일스톤 관리: 부서 간 기술 병목 수시 스크리닝 및 유연한 리소스 조율을 통한 양산 타겟 일정 준수",
          "설계 및 개발 품평회 주도: 시제품 단계별 하드웨어-소프트웨어 통합 품평회를 주도하여 개발 단계 신뢰성 확보",
          "품질 보증(QA) 협의: 신규 기능 구현에 따른 타겟 테스트 시나리오 정의 및 부분 QA 평가 범위 조율"
        ]
      },
      {
        keyword: "양산 및 검증 테스트 프로그램 개발",
        list: [
          "선행 OTA 검증 환경 구축: 하드웨어 모듈 개발 완료 전, 선제적인 OTA 프로토콜 검증을 위한 자체 CLI 기반 시뮬레이터 프로그램 개발",
          "테스트 병목 제거: 통신 모듈 가상화 시나리오 기반의 패킷 송수신 테스트를 통해, 모듈 종속성 없이 가동 앱(Swap 로직) 무결성 사전 검증 완수",
          "검증 도구 최적화: .NET Framework 기반 PC-Side GUI 검증 프로그램 자체 개발을 통해 양산 라인 가동 및 디버깅 공정 효율 향상"
        ]
      },
      {
        keyword: "코드 품질 및 기술 자산화",
        list: [
          "문서화 자동화(Doxygen): 소스코드 기반 API 레퍼런스 가이드라인 자동 산출 환경(Doxygen)을 구축하여 개발 자산화 및 인수인계 효율성 극대화",
          "OTA 가이드라인 표준화: 차세대 플랫폼 이식 및 유지보수를 고려한 독자 OTA 설계 기준 및 안정성 검증 가이드라인 정립",
          "기술 제안 및 리뷰 주도: 직접 설계한 예외 처리 메커니즘을 바탕으로 팀 내 최초의 대규모 기술 리뷰를 발의하여 아키텍처의 타당성 및 기술적 승인 획득"
        ]
      }
    ]
  },
  {
    year: "2025년",
    role: "다중 MCU 플랫폼 제품 개발 및 양산 프로세스 고도화",
    category: "Mass Production & Platform Engineering",
    techStack: ["STM32", "Abov", "PIC MCU", "Ring Buffer", "Non-blocking FSM", "HAL & Register (Hybrid Control)"],
    summary: "주력 제품의 선행 개발부터 대량 양산까지 전 과정을 총괄하며 하드웨어 변동 및 부품 단종 리스크에 선제 대응했습니다.",
    groupedAchievements: [
      {
        keyword: "주력 제품 신규 양산 총괄 (1건)",
        list: [
          "양산 총괄 성공: 아키텍처 설계부터 양산까지 FW 전 과정 주도 (사내 공식 홈페이지 메인 모델 론칭)",
          "비동기 통신 구조화: ISR 내 링 버퍼 적재 및 Main Loop FSM 파싱 기반 Non-blocking 구조 구현",
          "하이브리드 제어 설계: 표준 HAL 라이브러리 기반 위에 타이밍 크리티컬 구간의 하드웨어 레지스터 직접 제어를 교차 적용하여 최적의 구동 속도 마진 확보"
        ]
      },
      {
        keyword: "공급망 및 부품 단종 리스크 수습 (3건)",
        list: [
          "단종 리스크 수습: 선행 모듈 단종 발생 시 데이터시트 분석 및 인터페이스 호환성 검증으로 양산 사수",
          "출고 납기 사수: 양산 초도 중 HW 변경 사항 누락 이슈 대응을 위해 생산 라인 공조 및 교차 검증 주도",
          "외주 개발사 관리: TI MCU 기반 신규 제품 외주 커뮤니케이션 전담 및 핵심 알고리즘 검수 협업"
        ]
      },
      {
        keyword: "이종 MCU 이식 및 MCU 단가 절감 (5건)",
        list: [
          "타사 MCU 드라이버 이식: STM32에서 가성비 라인업(Abov 등)으로의 주변장치 드라이버 이식 완수",
          "플랫폼 코드 모듈화: 양산 제품 5종의 레거시 소스 공통 모듈화 및 변수 구조 최적화를 통한 시스템 리소스 운영 효율 고도화"
        ]
      },
      {
        keyword: "양산 프로젝트 리딩 & 조율",
        list: [
          "일정 병목 선제 방어: 각 부서별 품평 및 검증에 필요한 산출물 자료를 사전에 정의하고 선요청하여, 유관 부서 간 데이터 전달 병목 및 일정 지연 리스크 원천 차단",
          "개발 마일스톤 관리: 부서 간 기술 병목 수시 스크리닝 및 유연한 리소스 조율을 통한 양산 타겟 일정 준수",
          "설계 및 개발 품평회 주도: 시제품 단계별 하드웨어-소프트웨어 통합 품평회를 주도하여 개발 단계 신뢰성 확보",
          "품질 보증(QA) 협의: 신규 기능 구현에 따른 타겟 테스트 시나리오 정의 및 부분 QA 평가 범위 조율"
        ]
      },
      {
        keyword: "설계 표준화 및 검증 인프라",
        list: [
          "코딩 규칙 표준화: 사내 펌웨어 Coding Convention 수립 및 브리핑으로 공동 리뷰 기반 마련",
          "펌웨어 기술 멘토링: IPP 교육(OJT) 기술 멘토로서 후배 사원 직무 적응 및 상생 문화 구축"
        ]
      }
    ]
  },
  {
    year: "2024년",
    role: "저전력/레거시 MCU 기반 제품 개발 및 아키텍처 최적화",
    category: "Legacy Optimization & Low-level Drivers",
    techStack: ["PIC", "ABOV", "zigbee", "Low-level Reg", "IWDG"],
    summary: "하드웨어 매뉴얼 분석을 기반으로 로우 레벨 주변장치 드라이버를 구현하고 기존 아키텍처를 슬림화했습니다.",
    groupedAchievements: [
      {
        keyword: "레거시 MCU 분석 및 로우레벨 구현",
        list: [
          "로우 레벨 드라이버 구현: 데이터시트 분석 기반 GPIO, UART, Timer, PWM, 세그먼트 LCD 구동 제어",
          "FSM 시나리오 설계: 벤더 레벨에 구애받지 않는 안정적인 상태 천이 및 시나리오 구동 로직 수립"
        ]
      },
      {
        keyword: "런타임 안정성 및 저전력 설계",
        list: [
          "런타임 안정성 확보: 독립형 와치독(IWDG) 및 저전력 모드 예외 처리 프로세스 구축"
        ]
      },
      {
        keyword: "소프트웨어 구조 최적화 (원가 절감)",
        list: [
          "메모리 마진 확보: 변수 스코프 엄격화 및 비효율 함수 구조 개선을 통해 단일 레거시 제품 Flash/RAM 각각 30% 절감"
        ]
      }
    ]
  }
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-16 md:py-20 font-sans border-b border-zinc-900 max-w-6xl mx-auto px-4 md:px-0">
      
      {/* 타이틀 영역 */}
      <div className="mb-8 md:mb-12">
        <h2 className="font-mono text-2xl font-bold text-green-400">
          [02. Work Experience]
        </h2>
        <div className="mt-3 md:mt-4 text-xs md:text-sm text-zinc-500 flex flex-wrap items-center gap-2 font-mono">
          <span>제일 일렉트릭</span>
          <span className="hidden sm:inline">/</span>
          <span className="text-zinc-600 sm:text-zinc-500">2023.12 ~ 2026.06 (희망퇴직 예정)</span>
        </div>
      </div>

      {/* 카드 리스트 영역 */}
      <div className="space-y-4 md:space-y-6">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <div key={idx} className="border border-zinc-800 rounded-xl bg-zinc-950/30 overflow-hidden hover:border-zinc-700 transition-colors">
            
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-left p-5 md:p-8 flex items-start justify-between gap-4 group bg-zinc-900/20 cursor-pointer"
            >
              <div className="space-y-1 md:space-y-2 flex-1 min-w-0">
                <div className="text-green-500 text-[9px] md:text-[10px] font-bold tracking-widest uppercase truncate">
                  {exp.category}
                </div>
                <div className="text-sm md:text-xl font-bold text-white group-hover:text-green-400 transition-colors break-words pr-2 leading-snug">
                  {exp.year} · {exp.role.split('·')[0].trim()}
                </div>
                <p className="text-zinc-400 text-xs md:text-sm mt-1 leading-relaxed">{exp.summary}</p>
              </div>
              
              <div className="text-zinc-500 group-hover:text-green-400 shrink-0 font-mono text-[10px] md:text-xs border border-zinc-800 group-hover:border-green-500/30 px-2 md:px-3 py-1 rounded transition-colors self-center md:self-auto md:mt-6">
                {openIndex === idx ? 'CLOSE' : 'OPEN'}
              </div>
            </button>

            {/* 어치브먼트 토글 영역 */}
            <div 
              className={`grid transition-all duration-500 ease-in-out ${
                openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-5 pt-0 md:p-8 md:pt-0 border-t border-zinc-800 bg-zinc-950/50">
                  
                  {/* 💡 그룹화된 직무 성격별 세션 렌더링 */}
                  <div className="mt-8 space-y-12">
                    {exp.groupedAchievements.map((group, gIdx) => (
                      <div key={gIdx} className="flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-8">
                        
                        <div className="md:col-span-1 pt-0.5">
                          <span className="text-green-400 font-mono text-xs font-bold uppercase tracking-widest block">
                            {group.keyword}
                          </span>
                        </div>
                        
                        {/* 오른쪽 세부 성과 리스트 */}
                        <div className="space-y-6 md:col-span-3 w-full">
                          {group.list.map((ach, aIdx) => {
                            const colonIndex = ach.indexOf(':');
                            const title = colonIndex !== -1 ? ach.substring(0, colonIndex).trim() : ach;
                            const content = colonIndex !== -1 ? ach.substring(colonIndex + 1).trim() : null;
                            
                            return (
                              <div key={aIdx} className="border-l-2 border-zinc-900 pl-5 group/item hover:border-green-500/30 transition-colors">
                                <h4 className="text-zinc-100 font-bold text-xs md:text-sm leading-tight tracking-wide group-hover/item:text-green-400 transition-colors">
                                  {title}
                                </h4>
                                {content && (
                                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mt-2 tracking-normal font-sans">
                                    {content}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>

                      </div>
                    ))}
                  </div>
                  
                  {/* 사용 기술 스택 하단 배치 */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 pt-6 mt-6 border-t border-zinc-900">
                    {exp.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="font-mono text-[9px] md:text-[10px] px-2 py-0.5 md:py-1 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}