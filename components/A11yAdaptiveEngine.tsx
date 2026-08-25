"use client";

import React, { useState } from "react";
import { useA11y } from "./A11yProvider";
import { Sparkles, Eye, MousePointer, Type } from "lucide-react";

export type ProfileMode = "default" | "lowVision" | "senior" | "motorAssist";

export const A11yAdaptiveEngine: React.FC = () => {
  const { announce, isHighContrast, toggleHighContrast } = useA11y();
  const [activeProfile, setActiveProfile] = useState<ProfileMode>("default");

  const handleApplyProfile = (mode: ProfileMode, label: string) => {
    setActiveProfile(mode);

    // 기존 프로필 클래스 초기화
    document.documentElement.classList.remove("profile-senior", "profile-motor");

    if (mode === "lowVision") {
      if (!isHighContrast) toggleHighContrast();
    } else {
      if (isHighContrast) toggleHighContrast();
    }

    if (mode === "senior") {
      document.documentElement.classList.add("profile-senior");
    } else if (mode === "motorAssist") {
      document.documentElement.classList.add("profile-motor");
    }

    announce(`AI 가변 프로필이 ${label} 모드로 변경되었습니다.`);
  };

  return (
    <section className="p-5 border-2 border-indigo-200 rounded-2xl bg-indigo-50/50 space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-indigo-600" />
        <h2 className="font-bold text-lg text-indigo-950">
          AI 가변형 UI 프로필 추천 엔진
        </h2>
      </div>

      <p className="text-xs text-indigo-800 font-medium">
        사용자의 접근 요구사항에 맞추어 UI 구성 요소의 크기, 명암비, 간격을 최적화합니다.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <button
          type="button"
          onClick={() => handleApplyProfile("default", "기본")}
          className={`p-3 rounded-xl border text-left transition-all min-h-[48px] ${
            activeProfile === "default"
              ? "bg-indigo-600 text-white font-bold border-indigo-600 shadow-sm"
              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
          }`}
        >
          <div className="text-xs opacity-80">Standard</div>
          <div className="text-sm">기본 모드</div>
        </button>

        <button
          type="button"
          onClick={() => handleApplyProfile("lowVision", "저시력자")}
          className={`p-3 rounded-xl border text-left transition-all min-h-[48px] ${
            activeProfile === "lowVision"
              ? "bg-indigo-600 text-white font-bold border-indigo-600 shadow-sm"
              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
          }`}
        >
          <div className="flex items-center gap-1 text-xs opacity-80">
            <Eye className="w-3 h-3" /> Contrast
          </div>
          <div className="text-sm">저시력자 (고대비)</div>
        </button>

        <button
          type="button"
          onClick={() => handleApplyProfile("senior", "고령층")}
          className={`p-3 rounded-xl border text-left transition-all min-h-[48px] ${
            activeProfile === "senior"
              ? "bg-indigo-600 text-white font-bold border-indigo-600 shadow-sm"
              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
          }`}
        >
          <div className="flex items-center gap-1 text-xs opacity-80">
            <Type className="w-3 h-3" /> Large
          </div>
          <div className="text-sm">시니어 (큰글씨)</div>
        </button>

        <button
          type="button"
          onClick={() => handleApplyProfile("motorAssist", "정밀조작 보조")}
          className={`p-3 rounded-xl border text-left transition-all min-h-[48px] ${
            activeProfile === "motorAssist"
              ? "bg-indigo-600 text-white font-bold border-indigo-600 shadow-sm"
              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
          }`}
        >
          <div className="flex items-center gap-1 text-xs opacity-80">
            <MousePointer className="w-3 h-3" /> Touch
          </div>
          <div className="text-sm">운동보조 (넓은 타깃)</div>
        </button>
      </div>
    </section>
  );
};