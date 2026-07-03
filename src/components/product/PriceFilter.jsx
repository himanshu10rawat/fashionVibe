"use client";

import { useRef, useState } from "react";

export default function PriceFilter() {
  const min = 100;
  const max = 10000;
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [activeThumb, setActiveThumb] = useState(null);
  const [allowChange, setAllowChange] = useState(false);
  const sliderRef = useRef(null);

  const step = 100;
  const minPercent = ((minVal - min) / (max - min)) * 100;
  const maxPercent = ((maxVal - min) / (max - min)) * 100;

  const valueFromPointer = (pointerX) => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return null;

    const ratio = Math.min(Math.max(pointerX / rect.width, 0), 1);
    const rawValue = min + ratio * (max - min);
    const rounded = Math.round(rawValue / step) * step;

    return Math.min(Math.max(rounded, min), max);
  };

  const startDrag = (thumb, event) => {
    const slider = sliderRef.current;
    if (!slider) return;

    setActiveThumb(thumb);
    setAllowChange(true);
    if (slider.setPointerCapture) {
      slider.setPointerCapture(event.pointerId);
    }
    event.preventDefault();
  };

  const handlePointerMove = (event) => {
    if (!allowChange || !activeThumb) return;

    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;

    const pointerX = event.clientX - rect.left;
    const value = valueFromPointer(pointerX);
    if (value === null) return;

    if (activeThumb === "min") {
      setMinVal(Math.min(value, maxVal - step));
    } else {
      setMaxVal(Math.max(value, minVal + step));
    }
  };

  const handlePointerUp = (event) => {
    setActiveThumb(null);
    setAllowChange(false);
    if (sliderRef.current?.releasePointerCapture) {
      try {
        sliderRef.current.releasePointerCapture(event.pointerId);
      } catch {
        // ignore if capture is already released
      }
    }
  };

  return (
    <>
      <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
        <span>₹{minVal.toLocaleString("en-IN")}</span>
        <span>₹{maxVal.toLocaleString("en-IN")}</span>
      </div>

      <div
        ref={sliderRef}
        className="relative h-12 w-full"
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ touchAction: "none" }}
      >
        <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-gray-200 rounded-full" />
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 bg-orange-500 rounded-full"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />
        <div
          aria-hidden="true"
          onPointerDown={(event) => startDrag("min", event)}
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white border-2 border-orange-500 shadow-md transition-all duration-150"
          style={{
            left: `calc(${minPercent}% - 0.5rem)`,
            zIndex: activeThumb === "min" ? 6 : 4,
          }}
        />
        <div
          aria-hidden="true"
          onPointerDown={(event) => startDrag("max", event)}
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white border-2 border-orange-500 shadow-md transition-all duration-150"
          style={{
            left: `calc(${maxPercent}% - 0.5rem)`,
            zIndex: activeThumb === "max" ? 6 : 4,
          }}
        />
      </div>
    </>
  );
}
