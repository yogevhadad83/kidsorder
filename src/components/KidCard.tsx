"use client";

import { Kid } from "@/lib/types";

interface KidCardProps {
  kid: Kid;
  onClick: (kid: Kid) => void;
}

export default function KidCard({ kid, onClick }: KidCardProps) {
  return (
    <button
      onClick={() => onClick(kid)}
      className="flex flex-col items-center gap-4 p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all active:scale-95 min-w-[200px] border-4 border-transparent hover:border-blue-300"
      aria-label={`Select ${kid.name}`}
    >
      <div className="text-7xl" role="img" aria-label={`${kid.name}'s avatar`}>
        {kid.avatarEmoji}
      </div>
      <div className="text-2xl font-bold text-gray-800">{kid.name}</div>
    </button>
  );
}
