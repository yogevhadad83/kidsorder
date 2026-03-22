"use client";

import { Meal } from "@/lib/types";
import BigButton from "./BigButton";
import Image from "next/image";

interface MealCardProps {
  meal: Meal;
  onSelect: (meal: Meal) => void;
}

export default function MealCard({ meal, onSelect }: MealCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-3xl shadow-lg border-4 border-transparent hover:border-blue-200 transition-all">
      {meal.emoji && (
        <div className="text-6xl text-center" role="img" aria-label={`${meal.name} icon`}>
          {meal.emoji}
        </div>
      )}
      {meal.imageUrl && (
        <Image
          src={meal.imageUrl}
          alt={meal.name}
          className="w-full h-48 object-cover rounded-xl"
          width={400}
          height={192}
        />
      )}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{meal.name}</h3>
        <p className="text-lg text-gray-600">{meal.description}</p>
      </div>
      <BigButton onClick={() => onSelect(meal)} ariaLabel={`Select ${meal.name}`}>
        Pick This! 👆
      </BigButton>
    </div>
  );
}
