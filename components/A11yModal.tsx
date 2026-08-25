"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface A11yModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const A11yModal: React.FC<A11yModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        {/* 배경 오버레이 (Dimmed Area) */}
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity" />

        {/* 모달 본체 (Focus Trap 및 ESC 닫기 기본 지원) */}
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-[var(--color-fin-bg)] p-6 shadow-2xl border border-[var(--color-fin-border)] focus:outline-none">
          <div className="flex items-center justify-between border-b pb-3 mb-4">
            {/* KWCAG: 모달 제목 (스크린리더가 들어오자마자 읽음) */}
            <Dialog.Title className="text-xl font-bold text-[var(--color-fin-text)]">
              {title}
            </Dialog.Title>

            {/* KWCAG: 닫기 버튼 (최소 터치 타깃 48px 및 명확한 aria-label) */}
            <Dialog.Close asChild>
              <button
                className="min-h-[48px] min-w-[48px] flex items-center justify-center rounded-lg hover:bg-black/5 text-[var(--color-fin-text)] transition-colors"
                aria-label="모달 창 닫기"
              >
                <X className="w-6 h-6" />
              </button>
            </Dialog.Close>
          </div>

          {/* 설명글이 있는 경우 스크린리더 연결 */}
          {description && (
            <Dialog.Description className="text-sm text-[var(--color-fin-muted)] mb-4">
              {description}
            </Dialog.Description>
          )}

          {/* 모달 내부 콘텐츠 영역 */}
          <div className="space-y-4">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};