# 🌐 My Portfolio Web - Frontend (Next.js)

Next.js와 시놀로지 나스(Synology NAS)의 웹 UI 환경을 기반으로 Docker 컨테이너 배포를 구축한 포트폴리오 프로젝트의 프론트엔드 저장소입니다.

## 📖 프로젝트 소개
- 본 저장소는 포트폴리오 웹사이트의 유저 인터페이스(UI) 및 클라이언트 사이드 로직을 담당합니다.
- **펌웨어 개발자로서 상위 레이어의 구조와 사용자 경험(UI/UX)을 이해하고, 백엔드 API와의 비동기 통신 및 효율적인 컴포넌트 설계를 컴파일하기 위해 진행했습니다.**
- 협업 및 일정 관리를 위해 **JIRA**를 도입하여 태스크를 트래킹하며 체계적으로 개발을 진행했습니다.

---

## 🛠 개발 환경 및 기술 스택
- **IDE**: Visual Studio Code
- **Language & Framework**: TypeScript, Next.js (App Router), Tailwind CSS
- **Task Management**: JIRA
- **Deployment**: Synology NAS Container Manager (Docker Web UI)

---

## 📂 파일 구조 (File Structure)
실제 프로젝트의 디렉터리 아키텍처는 아래와 같이 모듈화하여 관리하고 있습니다.

```text
my-portfolio-frontend/
├── app/                    # Next.js App Router 기반의 페이지 및 라우팅 구조
│   ├── projects/           # 프로젝트 소개 서브 페이지
│   ├── layout.tsx          # 전역 레이아웃 설정
│   └── page.tsx            # 메인 포트폴리오 페이지
├── components/             # 독립적이고 재사용 가능한 독립 컴포넌트
│   ├── ContactModal.tsx    # 사용자 문의 팝업 모달창 UI
│   └── Navbar.tsx          # 상단 글로벌 네비게이션 바
├── sections/               # 메인 페이지를 구성하는 섹션별 컴포넌트
│   ├── About.tsx           # 자기소개 섹션
│   ├── Contact.tsx         # 연락처 및 메시지 전송 섹션
│   ├── Experience.tsx      # 경력 및 기술 이력 섹션
│   └── Projects.tsx        # 프로젝트 쇼케이스 카드 섹션
├── .env.local              # 로컬 개발용 환경변수 (Git 추적 제외)
├── .gitignore              # .next, node_modules, .env 필터링 설정


## 🏗 인프라 구축 및 배포 (Synology NAS Web UI)
외부 클라우드 서비스(AWS, Vercel 등)를 사용하지 않고 자체 인프라를 구축했습니다.

Container Manager 연동: 시놀로지 DSM의 Container Manager 웹 UI를 활용하여 웹 서비스를 가상화 환경에서 안정적으로 독립 구동합니다.

포트 설정 및 매핑: 외부 브라우저 진입을 위해 NAS의 로컬 포트와 컨테이너 내부의 포트를 시놀로지 Container Manager UI 상에서 직관적으로 매핑하여 네트워크 환경을 제어합니다.

## 🔐 주요 조치 사항
환경변수 보호: 로컬 개발 환경 설정을 위한 민감한 정보나 통신 주소가 외부 원격 저장소에 노출되지 않도록 .gitignore를 엄격하게 적용했습니다.

저장소 독립화: 프로젝트 규모가 커짐에 따라 유지보수성을 높이고 프론트/백엔드 간의 의존성을 줄이기 위해 소스 코드를 별도의 독립된 레포지토리로 분리하여 관리합니다.


