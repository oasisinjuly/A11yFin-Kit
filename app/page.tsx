"use client";

import { useState } from "react";
import { useA11y } from "@/components/A11yProvider";
import { A11yModal } from "@/components/A11yModal";
import { A11yTable, TransactionItem } from "@/components/A11yTable";
import { A11ySecureInput } from "@/components/A11ySecureInput";
import { A11ySlider } from "@/components/A11ySlider";
import { A11yAuditWidget } from "@/components/A11yAuditWidget";
import { A11yAdaptiveEngine } from "@/components/A11yAdaptiveEngine";

const mockTransactions: TransactionItem[] = [
  {
    id: "1",
    date: "2026-08-25",
    description: "주식회사 한국금융",
    category: "급여",
    amount: 3500000,
    type: "income",
  },
  {
    id: "2",
    date: "2026-08-24",
    description: "AAA 마트",
    category: "식비",
    amount: 45200,
    type: "expense",
  },
  {
    id: "3",
    date: "2026-08-22",
    description: "스마트 교통카드",
    category: "교통",
    amount: 55000,
    type: "expense",
  },
];

export default function Home() {
  const { isHighContrast, toggleHighContrast, announce } = useA11y();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loanAmount, setLoanAmount] = useState(10000000);

  const handleTestAnnounce = () => {
    announce("스크린리더 음성 피드백 테스트가 정상 작동합니다.");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    announce("금융 거래 확인 모달 창이 열렸습니다.");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    announce("모달 창이 닫혔습니다.");
  };

  const handlePinComplete = (pin: string) => {
    announce("비밀번호 4자리 입력이 완료되었습니다.");
    alert(`입력 완료된 PIN: ${pin}`);
  };

  return (
    <main className="p-8 max-w-3xl mx-auto space-y-8 relative pb-24">
      <header className="space-y-2 border-b pb-4">
        <h1 className="text-2xl font-bold">A11yFin-Kit 접근성 테스트</h1>
        <p className="text-sm opacity-80">
          KWCAG 2.2 지침 및 AI 가변형 UI 기반 접근성 금융 키트 화면입니다.
        </p>
      </header>

      {/* AI 가변형 UI 규칙 엔진 */}
      <A11yAdaptiveEngine />

      {/* 수동 상태 조작 및 스크린리더 테스트 */}
      <section className="p-4 rounded-lg border border-[var(--color-fin-border)] space-y-4">
        <div>
          <h2 className="font-semibold text-lg">시스템 상태 설정</h2>
          <p className="text-sm">
            고대비 모드:{" "}
            <span className="font-bold">
              {isHighContrast ? "ON (고대비 활성화)" : "OFF (일반 모드)"}
            </span>
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={toggleHighContrast}
            className="min-h-[48px] min-w-[48px] px-5 py-2.5 rounded-md font-bold bg-[var(--color-fin-primary)] text-white hover:bg-[var(--color-fin-primary-hover)] transition-colors"
          >
            {isHighContrast ? "일반 모드로 전환" : "고대비 모드로 전환"}
          </button>

          <button
            type="button"
            onClick={handleTestAnnounce}
            className="min-h-[48px] min-w-[48px] px-5 py-2.5 rounded-md font-bold border-2 border-[var(--color-fin-primary)] text-[var(--color-fin-text)] hover:bg-black/5 transition-colors"
          >
            스크린리더 안내 테스트
          </button>

          <button
            type="button"
            onClick={handleOpenModal}
            className="min-h-[48px] min-w-[48px] px-5 py-2.5 rounded-md font-bold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
          >
            이체 확인 모달 열기
          </button>
        </div>
      </section>

      {/* 1. 접근성 슬라이더 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">대출 신청 금액 설정</h2>
        <A11ySlider
          label="신청 희망 금액"
          min={1000000}
          max={50000000}
          step={1000000}
          value={loanAmount}
          onChange={setLoanAmount}
        />
      </section>

      {/* 2. 보안 인증 키패드 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">보안 인증</h2>
        <A11ySecureInput
          label="간편비밀번호 4자리"
          length={4}
          onComplete={handlePinComplete}
        />
      </section>

      {/* 3. 접근성 데이터 테이블 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">최근 입출금 내역</h2>
        <A11yTable
          caption="2026년 8월 입출금 거래 내역 목록"
          data={mockTransactions}
        />
      </section>

      {/* 4. Focus Trap 모달 */}
      <A11yModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="계좌 이체 최종 확인"
        description="이체 금액과 받는 분 정보를 다시 한번 확인해 주세요."
      >
        <div className="space-y-4 py-2">
          <div className="p-4 rounded-lg bg-black/5 space-y-1">
            <p className="text-sm text-[var(--color-fin-muted)]">받는 사람</p>
            <p className="font-bold text-lg">홍길동 (한국은행)</p>
            <p className="text-sm text-[var(--color-fin-muted)]">
              123-456-7890
            </p>
          </div>

          <div className="p-4 rounded-lg bg-black/5 space-y-1">
            <p className="text-sm text-[var(--color-fin-muted)]">보낼 금액</p>
            <p className="font-bold text-xl text-[var(--color-fin-primary)]">
              {loanAmount.toLocaleString()} 원
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={handleCloseModal}
              className="min-h-[48px] px-5 py-2 rounded-lg border border-[var(--color-fin-border)] font-semibold hover:bg-black/5 transition-colors"
            >
              취소
            </button>
            <button
              type="button"
              onClick={() => {
                alert("이체가 완료되었습니다.");
                handleCloseModal();
              }}
              className="min-h-[48px] px-5 py-2 rounded-lg bg-[var(--color-fin-primary)] text-white font-semibold hover:bg-[var(--color-fin-primary-hover)] transition-colors"
            >
              이체 실행
            </button>
          </div>
        </div>
      </A11yModal>

      {/* 실시간 접근성 진단 위젯 */}
      <A11yAuditWidget />
    </main>
  );
}