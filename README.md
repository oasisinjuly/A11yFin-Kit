# ♿ A11yFin-Kit (금융 접근성 UI 키트)

> **KWCAG 2.2(한국 웹콘텐츠 접근성 지침)** 표준을 준수하고, 사용자 유형에 맞춰 UI를 최적화하는 **AI 가변형 접근성 금융 UI 키트**입니다.

---

## 🚀 라이브 데모 (클릭 시 바로 화면 확인)

복잡한 설치나 개발 환경 설정 없이 **아래 버튼/링크를 누르면 개발한 화면을 브라우저에서 즉시 확인**하실 수 있습니다.

### 👉 [https://oasisinjuly.github.io/A11yFin-Kit/](https://oasisinjuly.github.io/A11yFin-Kit/)

[![Live Demo](https://img.shields.io/badge/⚡_Live_Demo-바로_화면_확인하기-4338CA?style=for-the-badge&logo=github&logoColor=white)](https://oasisinjuly.github.io/A11yFin-Kit/)

- 💡 **Tip:** 위 링크로 접속하시면 AI 가변 UI 프로필 전환, 고대비 모드, 스크린리더 음성 피드백, 보안 키패드 등 모든 기능을 직접 클릭해 보실 수 있습니다.

---

## ✨ 핵심 제공 기능

- **🤖 AI 가변형 UI 프로필 추천 엔진**
  - **Standard:** 기본 금융 UI 모드
  - **Contrast (저시력자):** KWCAG 기준 7:1 이상의 고대비 테마 자동 전환
  - **Large (시니어):** 전체 폰트 크기 118% 확대 및 행간 확장
  - **Touch (운동보조):** 클릭 요소의 최소 터치 타깃 영역 60px 이상 확장
- **🔊 스크린리더 실시간 음성 피드백**
  - `aria-live="polite"` 속성을 활용해 화면을 가리지 않고 스크린리더 사용자에게 음성 안내 전달
- **📊 실시간 KWCAG 2.2 진단 위젯 (`A11yAuditWidget`)**
  - ARIA 속성 타당성, 최소 명암비(4.5:1 이상), 터치 타깃 크기(48px 이상) 준수 여부 실시간 패널 표기
- **🎨 핀테크 표준 접근성 컬러 팔레트**
  - Vibrant Indigo (`#4338CA`) & Mint Emerald (`#059669`) 테마 적용
- **🔒 접근성 준수 금융 컴포넌트**
  - 대출 금액 설정 가변 슬라이더, 보안 키패드, 입출금 내역 접근성 테이블

---

## 🛠️ 기술 스택 (Tech Stack)

- **Framework:** Next.js 14+ (App Router), React, TypeScript
- **Styling:** Tailwind CSS, CSS Custom Properties (`--color-fin-*`)
- **Accessibility:** ARIA Standard, KWCAG 2.2, `@axe-core/react`
- **Deployment:** GitHub Pages (GitHub Actions)

---

## 💻 로컬 개발 환경 실행 방법

로컬에서 직접 코드를 수정하며 테스트하고 싶으신 경우 아래 순서대로 실행해 주세요.

```bash
# 1. 레포지토리 클론
git clone [https://github.com/oasisinjuly/A11yFin-Kit.git](https://github.com/oasisinjuly/A11yFin-Kit.git)

# 2. 의존성 패키지 설치
npm install

# 3. 개발 서버 실행
npm run dev
```
