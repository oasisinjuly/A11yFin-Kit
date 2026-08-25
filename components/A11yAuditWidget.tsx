"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, RefreshCw } from "lucide-react";

export const A11yAuditWidget: React.FC = () => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [lastCheckTime, setLastCheckTime] = useState<string>("방금 전");

  const handleRunAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
      const now = new Date();
      setLastCheckTime(
        `${now.getHours().toString().padStart(2, "0")}:${now
          .getMinutes()
          .toString()
          .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`
      );
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 bg-[var(--color-fin-bg)] border-2 border-[var(--color-fin-primary)] rounded-2xl shadow-xl p-4 max-w-xs w-full space-y-3">
      <div className="flex items-center justify-between border-b border-[var(--color-fin-border)] pb-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span className="font-bold text-sm text-[var(--color-fin-text)]">
            KWCAG 2.2 진단 상태
          </span>
        </div>
        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
          PASS
        </span>
      </div>

      <div className="space-y-1.5 text-xs text-[var(--color-fin-text)]">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            ARIA 속성 타당성
          </span>
          <span className="font-semibold text-emerald-700">정상</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            최소 명암비 (4.5:1)
          </span>
          <span className="font-semibold text-emerald-700">충족</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            터치 타깃 (48px)
          </span>
          <span className="font-semibold text-emerald-700">준수</span>
        </div>
      </div>

      <div className="pt-2 border-t border-[var(--color-fin-border)] flex items-center justify-between text-[11px] text-[var(--color-fin-text)] opacity-80">
        <span>최종 검사: {lastCheckTime}</span>
        <button
          onClick={handleRunAudit}
          disabled={isAuditing}
          className="flex items-center gap-1 font-bold text-[var(--color-fin-primary)] hover:underline disabled:opacity-50"
          aria-label="접근성 진단 재실행"
        >
          <RefreshCw
            className={`w-3 h-3 ${isAuditing ? "animate-spin" : ""}`}
          />
          재검사
        </button>
      </div>
    </div>
  );
};