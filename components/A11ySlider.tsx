"use client";

import React from "react";
import * as Slider from "@radix-ui/react-slider";
import { useA11y } from "./A11yProvider";

interface A11ySliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
}

export const A11ySlider: React.FC<A11ySliderProps> = ({
  label,
  min,
  max,
  step,
  value,
  onChange,
  unit = "원",
}) => {
  const { announce } = useA11y();

  const handleValueChange = (values: number[]) => {
    onChange(values[0]);
  };

  const handleValueCommit = (values: number[]) => {
    announce(`${label} 설정값 ${values[0].toLocaleString()}${unit}`);
  };

  return (
    <div className="space-y-3 p-4 border border-[var(--color-fin-border)] rounded-xl bg-[var(--color-fin-bg)]">
      <div className="flex justify-between items-center">
        <label
          id="slider-label"
          className="font-bold text-base text-[var(--color-fin-text)]"
        >
          {label}
        </label>
        <span className="text-lg font-extrabold text-[var(--color-fin-primary)]">
          {value.toLocaleString()} {unit}
        </span>
      </div>

      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-12"
        value={[value]}
        onValueChange={handleValueChange}
        onValueCommit={handleValueCommit}
        min={min}
        max={max}
        step={step}
      >
        <Slider.Track className="bg-black/20 relative grow rounded-full h-3">
          <Slider.Range className="absolute bg-[var(--color-fin-primary)] rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-8 h-8 bg-[var(--color-fin-bg)] border-3 border-[var(--color-fin-primary)] rounded-full shadow-md hover:scale-110 focus:outline-none focus:ring-4 focus:ring-sky-200 transition-all cursor-pointer"
          aria-labelledby="slider-label"
          aria-valuetext={`${value.toLocaleString()} ${unit}`}
        />
      </Slider.Root>

      <div className="flex justify-between text-xs text-[var(--color-fin-text)] font-medium opacity-80">
        <span>{min.toLocaleString()} {unit}</span>
        <span>{max.toLocaleString()} {unit}</span>
      </div>
    </div>
  );
};