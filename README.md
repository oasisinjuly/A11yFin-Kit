# ♿ A11yFin-Kit (금융 접근성 UI 키트)

> **KWCAG 2.2(한국 웹콘텐츠 접근성 지침)** 표준을 준수하고, 사용자 유형에 맞춰 UI를 최적화하는 **AI 가변형 접근성 금융 UI 키트**입니다.

---

## 🚀 라이브 데모 (바로가기)

별도의 설치나 환경 설정 없이 **아래 링크에서 개발 화면을 브라우저로 바로 확인**할 수 있습니다.

### 👉 [https://oasisinjuly.github.io/A11yFin-Kit/](https://oasisinjuly.github.io/A11yFin-Kit/)

- 💡 **Tip:** AI 가변 UI 프로필 전환, 고대비 모드, 스크린리더 음성 피드백, 보안 키패드 등 모든 기능을 직접 체험할 수 있습니다.

---

## 🎯 프로젝트 기획 배경 & 핵심 가치

금융 서비스 특성상 시니어·저시력자·시각장애인 등 접근성 취약계층의 이탈률이 높습니다. 본 미니 프로젝트는 정적인 웹 페이지를 넘어 **사용자 프로필에 맞춰 동적으로 UI/UX가 변환되는 금융 키트**를 구현하여 금융 접근성 격차를 해소하고자 하였습니다.

---

## ✨ 핵심 기능

- **🤖 AI 가변형 UI 프로필 추천 엔진**
  - **Standard:** 기본 금융 UI 모드
  - **Contrast (저시력자):** KWCAG 기준 7:1 이상의 고대비 테마 자동 전환
  - **Large (시니어):** 전체 폰트 크기 118% 확대 및 행간 확장
  - **Touch (운동보조):** 클릭 요소의 최소 터치 타깃 영역 60px 이상 확장
- **🔊 스크린리더 실시간 음성 피드백**
  - `aria-live="polite"` 속성을 활용해 화면 노출 없이 스크린리더 사용자에게 음성 안내 전달
- **📊 실시간 KWCAG 2.2 진단 위젯 (`A11yAuditWidget`)**
  - ARIA 속성 타당성, 최소 명암비(4.5:1 이상), 터치 타깃 크기(48px 이상) 준수 여부 실시간 패널 표기
- **🎨 핀테크 표준 접근성 컬러 팔레트**
  - Vibrant Indigo (`#4338CA`) & Mint Emerald (`#059669`) 테마 적용
- **🔒 접근성 준수 금융 컴포넌트**
  - 대출 금액 설정 가변 슬라이더, 보안 키패드, 입출금 내역 접근성 테이블

---

## 💡 주요 기술적 도전 및 문제 해결 (Key Engineering Challenges)

- **동적 스타일 변경 시 SSR Hydration Mismatch 우회**
  - 사용자 프로필(고대비/대형 폰트) 적용 시 서버와 클라이언트 간 DOM 불일치 문제를 해결하기 위해 `CSS Custom Properties` 기반 변수 주입 방식 채택.
- **스크린리더 과다 음성 출력 방지 (NVDA/VoiceOver)**
  - 실시간 잔액 변경 및 입력 알림 시 `aria-live` 속성을 `assertive` 대신 `polite`로 설정하고 디바운싱(Debounce) 기법을 적용하여 음성 중복 제어.
- **접근성 검사 자동화 파이프라인 구축**
  - `@axe-core/react`를 개발 환경에 이식하여 실시간 DOM 변경에 따른 WAI-ARIA 위반 요소를 개발 단계에서 상시 감지.

---

## 🛠️ 기술 스택 (Tech Stack)

- **Framework:** Next.js 14+ (App Router), React, TypeScript
- **Styling:** Tailwind CSS, CSS Custom Properties (`--color-fin-*`)
- **Accessibility:** ARIA Standard, KWCAG 2.2, `@axe-core/react`
- **Deployment:** GitHub Pages (GitHub Actions)

---

## 💻 로컬 개발 환경 실행 방법

로컬에서 코드를 수정하며 테스트하는 방법입니다.

```bash
# 1. 레포지토리 클론
git clone [https://github.com/oasisinjuly/A11yFin-Kit.git](https://github.com/oasisinjuly/A11yFin-Kit.git)

# 2. 의존성 패키지 설치
npm install

# 3. 개발 서버 실행
npm run dev
```
