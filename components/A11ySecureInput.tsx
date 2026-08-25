"use client";

import React from "react";
import { useA11y } from "./A11yProvider";
import { Delete, Lock } from "lucide-react";

interface A11ySecureInputProps {
  label: string;
  length?: number;
  onComplete?: (pin: string) => void;
}

export const A11ySecureInput: React.FC<A11ySecureInputProps> = ({
  label,
  length = 4,
  onComplete,
}) => {
  const { announce } = useA11y();
  const [pin, setPin] = React.useState<string>("");

  const handleNumberClick = (num: string) => {
    if (pin.length < length) {
      const newPin = pin + num;
      setPin(newPin);
      announce(`비밀번호 ${newPin.length}번째 자리 입력됨`);

      if (newPin.length === length && onComplete) {
        onComplete(newPin);
      }
    }
  };

  const handleDelete = () => {
    if (pin.length > 0) {
      setPin((prev) => prev.slice(0, -1));
      announce("비밀번호 마지막 한 자리가 지워졌습니다.");
    }
  };

  const handleClear = () => {
    setPin("");
    announce("비밀번호가 전체 삭제되었습니다.");
  };

  return (
    <div className="p-5 border border-[var(--color-fin-border)] rounded-xl space-y-4 max-w-sm bg-[var(--color-fin-bg)]">
      <div className="flex items-center gap-2">
        <Lock className="w-5 h-5 text-[var(--color-fin-primary)]" />
        <label className="font-bold text-base text-[var(--color-fin-text)]">
          {label}
        </label>
      </div>

      {/* PIN 마스킹 표시 영역 (aria-label 제거 및 role="status"로 변경) */}
      <div
        role="status"
        className="flex justify-center gap-3 py-3 border-b border-[var(--color-fin-border)]"
      >
        <span className="sr-only">
          {label} {pin.length}자리가 입력되었습니다.
        </span>
        {Array.from({ length }).map((_, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 rounded-full transition-all ${
              idx < pin.length
                ? "bg-[var(--color-fin-primary)] scale-110"
                : "border-2 border-[var(--color-fin-border)]"
            }`}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 pt-2">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => handleNumberClick(num)}
            className="min-h-[48px] min-w-[48px] text-lg font-bold rounded-lg border border-[var(--color-fin-border)] hover:bg-black/5 active:scale-95 transition-all"
            aria-label={`숫자 ${num}`}
          >
            {num}
          </button>
        ))}

        <button
          type="button"
          onClick={handleClear}
          className="min-h-[48px] min-w-[48px] text-sm font-semibold rounded-lg border border-[var(--color-fin-border)] hover:bg-black/5 text-[var(--color-fin-text)] transition-all"
          aria-label="전체 삭제"
        >
          전체삭제
        </button>

        <button
          type="button"
          onClick={() => handleNumberClick("0")}
          className="min-h-[48px] min-w-[48px] text-lg font-bold rounded-lg border border-[var(--color-fin-border)] hover:bg-black/5 active:scale-95 transition-all"
          aria-label="숫자 0"
        >
          0
        </button>

        <button
          type="button"
          onClick={handleDelete}
          className="min-h-[48px] min-w-[48px] flex items-center justify-center rounded-lg border border-[var(--color-fin-border)] hover:bg-black/5 text-[var(--color-fin-error)] transition-all"
          aria-label="한 자리 지우기"
        >
          <Delete className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};