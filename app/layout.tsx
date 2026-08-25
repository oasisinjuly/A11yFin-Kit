import type { Metadata } from "next";
import "./globals.css";
import { A11yProvider } from "@/components/A11yProvider";
import { AxeReporter } from "@/components/AxeReporter";

export const metadata: Metadata = {
  title: "A11yFin-Kit | KWCAG 2.2 기반 금융 접근성 UI 시스템",
  description: "AI 기반 가변형 금융 접근성 인터페이스 키트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <A11yProvider>
          <AxeReporter />
          {children}
        </A11yProvider>
      </body>
    </html>
  );
}