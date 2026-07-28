"use client";

import { ReactNode, useState } from "react";

export interface TravelerManualCardProps {
  title: string;
  description: string;
  iconSvg?: ReactNode;
}

export default function TravelerManualCard({ title, description, iconSvg }: TravelerManualCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
      className="relative bg-[#FFF7E2] rounded-[20px] px-8 pb-8 pt-[100px] w-[314px] h-[307px] shadow-lg flex flex-col justify-start transition-transform duration-300 hover:-translate-y-2 mx-auto"
      onMouseEnter={() => setIsRevealed(true)}
    >
      {iconSvg && (
        <div
          className={`absolute -top-[80px] left-1/2 -translate-x-1/2 z-30 drop-shadow-xl pointer-events-none transition-all duration-500 ease-out transform ${isRevealed
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-75 translate-y-8"
            }`}
        >
          {iconSvg}
        </div>
      )}
      <h3 className="text-[#FF7223] text-[24px] font-bold font-nohemi mb-4">
        {title}
      </h3>
      <p className="text-[#13522B] text-[15px] font-medium font-sans leading-relaxed">
        {description}
      </p>
    </div>
  );
}
