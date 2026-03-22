"use client";

import { useParams, useRouter } from "next/navigation";
import { findRestaurantById } from "@/data/menu";
import { Meal } from "@/lib/types";
import MealCard from "@/components/MealCard";
import PageHeader from "@/components/PageHeader";
import BigButton from "@/components/BigButton";
import { saveSelection } from "@/lib/selection";

export default function RestaurantMealsPage() {
  const params = useParams();
  const router = useRouter();
  const restaurantId = params.restaurantId as string;
  
  const restaurant = findRestaurantById(restaurantId);

  if (!restaurant) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-yellow-100/70 to-orange-100/70 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <PageHeader title="Oops!" subtitle="Restaurant not found" emoji="😕" />
          <BigButton onClick={() => router.push("/restaurants")}>
            ← Go Back
          </BigButton>
        </div>
      </main>
    );
  }

  const handleMealSelect = (meal: Meal) => {
    saveSelection({
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      mealId: meal.id,
      mealName: meal.name,
    });
    router.push("/confirm");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-100/70 to-orange-100/70 p-8">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title={restaurant.name}
          subtitle="Pick your meal"
          emoji={restaurant.logoEmoji}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {restaurant.meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} onSelect={handleMealSelect} />
          ))}
        </div>

        <div className="flex justify-center">
          <BigButton onClick={() => router.back()} variant="secondary">
            ← Back to Restaurants
          </BigButton>
        </div>
      </div>
    </main>
  );
}
