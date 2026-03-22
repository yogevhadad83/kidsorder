"use client";

import { Restaurant } from "@/lib/types";
import Link from "next/link";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link
      href={`/restaurants/${restaurant.id}`}
      className="flex flex-col items-center gap-4 p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all active:scale-95 min-w-[200px] border-4 border-transparent hover:border-blue-300"
      aria-label={`Choose ${restaurant.name}`}
    >
      <div className="text-7xl" role="img" aria-label={`${restaurant.name} logo`}>
        {restaurant.logoEmoji}
      </div>
      <div className="text-2xl font-bold text-gray-800 text-center">
        {restaurant.name}
      </div>
    </Link>
  );
}
