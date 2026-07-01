'use client';

import React from 'react';
import Link from 'next/link';

interface ProjectContent {
  title: string;
  background: string;
  challenge: string;
}

const PROJECT_DATA: Record<string, ProjectContent> = {
  "ota": {
    title: "FOTA System Architecture & Anti-Brick Bootloader",
    background: "Cortex-M0 코어 기반 가성비 칩셋 도입 시, 하드웨어적인 벡터 테이블 재매핑(VTOR) 레지스터가 지원되지 않아 무결성 검증 실패나 업데이트 중 전원 차단 시 시스템이 먹통이 되는 브릭(Brick) 리스크가 존재했습니다.",
    challenge: "SCB->VTOR 제약이 있는 환경에서 Dual-Bank 플래시 간의 안전한 부팅 스왑을 구현하고, 통신 모듈 개발 지연 상황에서도 전체 FOTA 시퀀스를 사전 검증할 수 있는 인프라 확보가 핵심 과제였습니다."
  },
  "vendor-independent": {
    title: "Vendor-Independent Firmware Architecture",
    background: "기존 레거시 코드는 특정 반도체 제조사의 전용 HAL 라이브러리에 밀접하게 종속되어 있어, 공급망 차질이나 부품 단종(STM32 ➡️ ABOV 플랫폼 전환 등) 시 전체 소프트웨어를 재설계해야 하는 리스크가 있었습니다.",
    challenge: "제조사마다 상이한 레지스터 맵과 주변장치 제어 API 형식을 독립시키기 위해, 상위 비즈니스 로직과 하위 물리 드라이버 레이어 간의 완벽한 추상화 경계선을 구축해야 했습니다."
  },
};

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = params ? (params instanceof Promise ? React.use(params) : params) : null;
  const slug = resolvedParams?.slug;
  const currentProject = slug ? PROJECT_DATA[slug] : null;

  if (!slug) {
    return <div className="min-h-screen bg-zinc-950" />;
  }

  if (!currentProject) {
    return (
      <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-zinc-500 font-mono text-sm">
        <div className="border border-zinc-900 p-8 rounded bg-zinc-900/10 max-w-md text-center">
          <p className="text-zinc-400 mb-4">[프로젝트 정보가 존재하지 않습니다]</p>
          <Link href="/" className="text-xs text-green-500 hover:underline font-mono">
            &lt; Return to Main Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-green-500/20 selection:text-green-400">
      <div className="max-w-4xl mx-auto py-20 px-6">
        
        {/* 상단 타이틀 배너 */}
        <div className="mb-16">
          <Link href="/" className="text-xs text-zinc-500 hover:text-green-400 font-mono transition-colors block mb-4">
            &lt; .. / projects
          </Link>
          <h1 className="text-xl md:text-2xl font-bold text-white font-mono tracking-tight flex items-center gap-2">
            <span className="text-green-500 font-normal">&gt;</span>
            {currentProject.title}
          </h1>
        </div>
        
        {/* SECTION 1: SYSTEM BLUEPRINT & ARCHITECTURE MAP */}
        <section className="mb-16">
          <h2 className="text-[11px] font-bold text-green-400 mb-4 font-mono tracking-widest uppercase">
            SYSTEM BLUEPRINT & ARCHITECTURE MAP
          </h2>

          <div className="border border-zinc-900 bg-zinc-900/10 rounded-xl p-6 md:p-10 backdrop-blur-sm overflow-hidden">
            {slug === "ota" ? (
              /* 1. FOTA 메모리 맵 다이어그램 (RAM 소속감 강조형 부모 컨테이너 적용) */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {/* Flash Memory 블록 */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-end mb-3 border-b border-zinc-900 pb-2 px-1">
                    <span className="text-xs font-bold text-zinc-400 font-mono">Flash Memory</span>
                    <span className="text-[10px] text-zinc-600 font-mono">Top</span>
                  </div>
                  <div className="space-y-1.5 border-l border-zinc-900 pl-3 py-1 flex-1">
                    <div className="bg-red-950/20 border border-red-900/30 text-red-400/80 p-2 rounded font-mono text-[11px] flex justify-between">
                      <span>Fallback OS</span><span className="opacity-40">Recovery</span>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 text-zinc-300 p-2 rounded font-mono text-[11px] flex justify-between">
                      <span>Application_2</span><span className="text-zinc-500">Slot B (Run)</span>
                    </div>
                    <div className="bg-zinc-950/40 border border-zinc-900 text-zinc-600 p-1.5 rounded font-mono text-[10px] flex justify-between pl-3">
                      <span>Tag_Data_2</span><span>Descriptor</span>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 text-green-400 p-2 rounded font-mono text-[11px] flex justify-between">
                      <span className="font-semibold">Application_1</span><span className="text-green-500/70 bg-green-950/30 px-1 rounded">Slot A (Run)</span>
                    </div>
                    <div className="bg-zinc-950/40 border border-zinc-900 text-zinc-600 p-1.5 rounded font-mono text-[10px] flex justify-between pl-3">
                      <span>Tag_Data_1</span><span>Descriptor</span>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 text-zinc-400 p-2 rounded font-mono text-[11px] flex justify-between">
                      <span>FOTA Descriptor</span><span className="opacity-40">Integrity</span>
                    </div>
                    <div className="bg-zinc-900/80 border border-zinc-800 text-zinc-300 p-2 rounded font-mono text-[11px] flex justify-between font-semibold">
                      <span>Bootloader</span><span className="text-zinc-500">Base</span>
                    </div>
                  </div>
                </div>

                {/* System RAM 블록 (물리적 테두리를 주어 Remap 존이 RAM 안에 있음을 명시) */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-end mb-3 border-b border-zinc-900 pb-2 px-1">
                    <span className="text-xs font-bold text-zinc-400 font-mono">System RAM</span>
                    <span className="text-[10px] text-zinc-600 font-mono">Top</span>
                  </div>
                  
                  {/* RAM 영역 부모 박스 라인 생성 */}
                  <div className="border border-zinc-900/60 bg-zinc-950/20 rounded-xl p-3 flex flex-col justify-between flex-1 space-y-4">
                    {/* 일반 데이터 섹션 */}
                    <div className="space-y-1.5">
                      <div className="border border-zinc-900/80 text-zinc-500 bg-zinc-900/5 p-1.5 rounded font-mono text-[11px] text-center">stack</div>
                      <div className="border border-zinc-900/80 text-zinc-500 bg-zinc-900/5 p-1.5 rounded font-mono text-[11px] text-center">heap</div>
                      <div className="border border-zinc-900/80 text-zinc-500 bg-zinc-900/5 p-1.5 rounded font-mono text-[11px] text-center">bss</div>
                      <div className="border border-zinc-900/80 text-zinc-500 bg-zinc-900/5 p-1.5 rounded font-mono text-[11px] text-center">data</div>
                    </div>
                    
                    {/* 내부에 정렬 격리된 가상 벡터 리맵 존 */}
                    <div className="bg-green-950/15 border border-green-900/40 text-green-400 p-2.5 rounded-lg font-mono text-[11px]">
                      <div className="flex justify-between font-semibold mb-0.5 items-center">
                        <span>Vector Table Remap Zone</span>
                        <span className="bg-green-500/10 text-[9px] px-1.5 py-0.5 rounded text-green-500 font-normal">VTOR ALTER</span>
                      </div>
                      <span className="text-[10px] text-zinc-500 block">Vector Table Dynamic Copy Area</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* 2. 벤더 독립 레이어 구조 다이어그램 */
              <div className="max-w-xl mx-auto space-y-2.5 font-mono text-[11px]">
                <div className="border border-zinc-800 bg-zinc-900/30 p-3 rounded-lg">
                  <div className="flex justify-between text-zinc-200 font-bold mb-1">
                    <span>/app (Application Layer)</span>
                    <span className="text-[10px] text-green-500 bg-green-950/40 px-1.5 rounded font-normal">Pure C / Platform Free</span>
                  </div>
                  <p className="text-zinc-400 text-[11px]">비즈니스 핵심 시나리오 로직, 유한상태머신(FSM), 실시간 OS Task 기획</p>
                </div>

                <div className="text-center text-zinc-700 text-[10px]">▼ 표준 추상화 인터페이스 경계 (Vendor Isolation Link)</div>

                <div className="border border-zinc-800 bg-zinc-900/10 p-3 rounded-lg">
                  <div className="flex justify-between text-zinc-400 font-bold mb-1">
                    <span>/bsp (Board Support Package)</span>
                    <span className="text-[10px] text-zinc-500 font-normal">Abstraction Layer</span>
                  </div>
                  <p className="text-zinc-500 text-[11px]">하드웨어 제어 추상화 영역 및 보드 특화 미들웨어 링크 브릿지</p>
                </div>

                <div className="text-center text-zinc-700 text-[10px]">▼ 물리 하드웨어 종속 래퍼</div>

                <div className="border border-zinc-900 bg-zinc-950 p-3 rounded-lg">
                  <div className="flex justify-between text-zinc-500 font-bold mb-1">
                    <span>/device (Low-Level Drivers)</span>
                    <span className="text-[10px] text-red-900/80 font-normal">Hardware Dependent</span>
                  </div>
                  <p className="text-zinc-600 text-[11px]">제조사 제공 HAL 라이브러리, 직접 제어 레지스터 래핑 소스코드</p>
                </div>

                <div className="border border-zinc-900 bg-zinc-950 p-3 rounded-lg">
                  <div className="flex justify-between text-zinc-600 font-bold mb-1">
                    <span>/middleware (Data Structure)</span>
                    <span className="text-[10px] text-zinc-700 font-normal">Reusable</span>
                  </div>
                  <p className="text-zinc-600 text-[11px]">객체화된 자료구조 공용 알고리즘 컴포넌트 라이브러리</p>
                </div>
              </div>
            )}
            
            <div className="mt-6 pt-4 border-t border-zinc-900/60 text-center">
              <p className="text-[10px] text-zinc-600 font-mono tracking-tight">
                {slug === "ota" 
                  ? "[Sequence] Reset ➔ Bootloader 무결성 검증 ➔ Remap 영역 벡터 테이블 복사 ➔ 현재 가동 Slot 실행"
                  : "[Architecture Rule] App Layer는 Board 하부의 특정 물리 주소나 가상 HAL API 명세를 직접 참조 불가 (은닉화)"
                }
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: TECHNICAL DEEP DIVE & CHALLENGES */}
        <section className="space-y-6 font-sans">
          <h2 className="text-[11px] font-bold text-green-400 font-mono tracking-widest uppercase">
            TECHNICAL DEEP DIVE & CHALLENGES
          </h2>
          
          <div className="grid grid-cols-1 gap-6">
            {/* 1. Background Context Frame */}
            <div className="bg-zinc-900/20 p-6 md:p-8 rounded-xl border border-zinc-900/80 backdrop-blur-sm">
              <h3 className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider mb-3">1. Background Context</h3>
              <p className="text-sm leading-relaxed text-zinc-400 text-justify whitespace-pre-wrap">{currentProject.background}</p>
            </div>

            {/* 2. Key Challenge Frame */}
            <div className="bg-zinc-900/20 p-6 md:p-8 rounded-xl border border-zinc-900/80 backdrop-blur-sm">
              <h3 className="text-xs font-bold text-red-400/80 font-mono uppercase tracking-wider mb-3">2. Key Challenge</h3>
              <p className="text-sm leading-relaxed text-zinc-400 text-justify whitespace-pre-wrap">{currentProject.challenge}</p>
            </div>

            {/* 3. Architecture Prevention & Implementation Frame */}
            <div className="bg-zinc-900/20 p-6 md:p-8 rounded-xl border border-zinc-900/80 backdrop-blur-sm">
              <h3 className="text-xs font-bold text-green-400 font-mono uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                3. Architectural Prevention & Resolution
              </h3>
              
              {slug === "ota" ? (
                <div className="space-y-6 text-sm text-zinc-400">
                  <div className="space-y-2">
                    <div className="font-semibold text-zinc-200 text-xs font-mono tracking-wide text-zinc-300">✓ 가상 벡터 매핑을 통한 브릭(Brick) 현상 원천 차단</div>
                    <ul className="space-y-1.5 pl-4 list-disc list-outside marker:text-zinc-700 text-[13px] leading-relaxed">
                      <li><strong className="text-zinc-300 font-normal">[하드웨어 제어 한계 극복]</strong> 부팅 단계에서 대상 앱의 벡터 테이블을 RAM 가상화 영역(ReMap Zone)으로 독점 복사하고 SYSCFG 제어를 통해 런타임 공간을 재배치함으로써, 하드웨어 레지스터 제약 상태에서도 예외 처리가 정상 동작하도록 설계했습니다.</li>
                      <li><strong className="text-zinc-300 font-normal">[런타임 루프 예방]</strong> 부팅 실패 누적 카운트를 감지하는 이중 안전장치를 확보하여, 비정상 루프 진입 시 시스템 다운 없이 가벼운 Recovery 전용 앱으로 강제 탈출하도록 리스크를 통제했습니다.</li>
                      <li><strong className="text-zinc-300 font-normal">[돌발 차단 리스크 방어]</strong> 펌웨어 스왑 시퀀스를 단계별 플래시에 영속 기록하여, 업데이트 중 전원이 차단되더라도 직전 유효 시점부터 유연하게 복구를 이어 나가는 안전성을 확보했습니다.</li>
                    </ul>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="font-semibold text-zinc-200 text-xs font-mono tracking-wide text-zinc-300">✓ 이중 무결성 크로스 검증 및 선제 시뮬레이션 환경 예방</div>
                    <ul className="space-y-1.5 pl-4 list-disc list-outside marker:text-zinc-700 text-[13px] leading-relaxed">
                      <li><strong className="text-zinc-300 font-normal">[데이터 무결성 예방책]</strong> 바이너리 자체 이미지 신뢰성 외에도, 메타데이터가 담긴 FOTA Descriptor 영역까지 상호 크로스체킹을 유도하여 손상된 데이터 유입을 사전에 완전히 필터링합니다.</li>
                      <li><strong className="text-zinc-300 font-normal">[통신 병목 예방 파이프라인]</strong> 외부 통신 모듈 개발 인터페이스가 완성되지 않은 환경에서도, PC 단에서 패킷을 자동 파싱하는 Python UART 가상 시뮬레이터를 조기에 인프라화하여 전체 시퀀스의 결함을 선제 격리·검증할 수 있도록 구성했습니다.</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 text-sm text-zinc-400">
                  <div className="space-y-2">
                    <div className="font-semibold text-zinc-200 text-xs font-mono tracking-wide text-zinc-300">✓ 추상화 레이어 규칙을 통한 제조사 종속 리스크 차단</div>
                    <ul className="space-y-1.5 pl-4 list-disc list-outside marker:text-zinc-700 text-[13px] leading-relaxed">
                      <li><strong className="text-zinc-300 font-normal">[결합도 원천 봉쇄]</strong> APPLICATION 레이어 내부에서 특정 제조사의 전용 HAL 함수나 하드웨어 제어 제어용 물리 레지스터 주소를 직접 참조하는 행위를 아키텍처 규칙 수준에서 영구 금지했습니다.</li>
                      <li><strong className="text-zinc-300 font-normal">[물리 주소 은닉화]</strong> 하드웨어 특화 드라이버 인터페이스를 독립된 구조체 포인터 단위로 완전 가상화하여, 상위 비즈니스 엔진이 특정 타겟 보드의 스펙 변화에 동요되지 않도록 완벽한 캡슐화 경계를 형성했습니다.</li>
                    </ul>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="font-semibold text-zinc-200 text-xs font-mono tracking-wide text-zinc-300">✓ 공급망 변경 및 설계 변경 공수 예방 효과</div>
                    <ul className="space-y-1.5 pl-4 list-disc list-outside marker:text-zinc-700 text-[13px] leading-relaxed">
                      <li><strong className="text-zinc-300 font-normal">[마이그레이션 공수 절감]</strong> 향후 MCU 부품 수급 소싱처가 변경되거나 하위 칩 스펙이 전면 수정되더라도, 핵심 어플리케이션 소스의 재설계 없이 오직 하부 드라이버 레이어 파일만 플러그인 형태로 조립 교체하는 유지보수 구조를 지향하도록 설계했습니다.</li>
                      <li><strong className="text-zinc-300 font-normal">[소프트웨어 리스크 관리]</strong> 하드웨어 이원화 대응이나 사양 다변화 요구 시 발생할 수 있는 대규모 소프트웨어 사이드 이펙트와 신규 기획 공수를 개발 초기 아키텍처 수준에서 선제 방어하는 가치를 가집니다.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}