"use client";

import { Restaurant } from "@/lib/types";
import { Session } from "@/lib/types";
import RestaurantCard from "@/components/RestaurantCard";
import PageHeader from "@/components/PageHeader";

interface RestaurantsClientProps {
  session: Session;
  restaurants: Restaurant[];
}

export default function RestaurantsClient({ session, restaurants }: RestaurantsClientProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-100/70 to-orange-100/70 p-8">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title={`Hi ${session.kidName}!`}
          subtitle="Pick a restaurant"
          emoji="🍴"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </main>
  );
}
