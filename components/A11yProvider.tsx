"use client";

import React, { createContext, useContext, useState } from "react";

interface A11yContextType {
  isHighContrast: boolean;
  toggleHighContrast: () => void;
  announceMessage: string;
  announce: (message: string) => void;
}

const A11yContext = createContext<A11yContextType | undefined>(undefined);

export const A11yProvider = ({ children }: { children: React.ReactNode }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [announceMessage, setAnnounceMessage] = useState("");

  const toggleHighContrast = () => {
    setIsHighContrast((prev) => !prev);
  };

  // 스크린리더 전용 실시간 음성 안내 함수
  const announce = (message: string) => {
    setAnnounceMessage("");
    setTimeout(() => setAnnounceMessage(message), 50);
  };

  return (
    <A11yContext.Provider
      value={{ isHighContrast, toggleHighContrast, announceMessage, announce }}
    >
      <div
        className={
          isHighContrast
            ? "high-contrast min-h-screen bg-[var(--color-fin-bg)] text-[var(--color-fin-text)]"
            : "min-h-screen bg-[var(--color-fin-bg)] text-[var(--color-fin-text)]"
        }
      >
        {children}
        {/* 스크린리더용 동적 안내 라이브 리전 */}
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {announceMessage}
        </div>
      </div>
    </A11yContext.Provider>
  );
};

export const useA11y = () => {
  const context = useContext(A11yContext);
  if (!context) throw new Error("useA11y must be used within A11yProvider");
  return context;
};