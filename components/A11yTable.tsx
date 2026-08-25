"use client";

import React from "react";

export interface TransactionItem {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
}

interface A11yTableProps {
  caption: string;
  data: TransactionItem[];
}

export const A11yTable: React.FC<A11yTableProps> = ({ caption, data }) => {
  return (
    <div className="overflow-x-auto border border-[var(--color-fin-border)] rounded-xl">
      <table className="w-full text-left border-collapse">
        <caption className="p-3 font-bold text-left bg-[var(--color-fin-bg)] text-[var(--color-fin-text)] border-b border-[var(--color-fin-border)]">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-[var(--color-fin-border)] bg-black/5 text-[var(--color-fin-text)]">
            <th scope="col" className="p-3 font-bold">
              거래일자
            </th>
            <th scope="col" className="p-3 font-bold">
              내용
            </th>
            <th scope="col" className="p-3 font-bold">
              분류
            </th>
            <th scope="col" className="p-3 font-bold text-right">
              거래금액
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const isIncome = item.type === "income";
            return (
              <tr
                key={item.id}
                className="border-b last:border-0 border-[var(--color-fin-border)] hover:bg-black/5"
              >
                <td className="p-3 text-sm text-[var(--color-fin-text)]">
                  {item.date}
                </td>
                <td className="p-3 font-medium text-[var(--color-fin-text)]">
                  {item.description}
                </td>
                <td className="p-3 text-sm text-[var(--color-fin-text)]">
                  {item.category}
                </td>
                <td
                  className={`p-3 font-bold text-right ${
                    isIncome
                      ? "text-[#15803d]" /* 명암비 4.5:1 이상 충족하는 진한 초록색 */
                      : "text-[#b91c1c]" /* 명암비 4.5:1 이상 충족하는 진한 빨간색 */
                  }`}
                >
                  {isIncome ? "+" : "-"}
                  {item.amount.toLocaleString()} 원
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};