import { Restaurant } from "@/lib/types";

// Parent-approved restaurants with kid-favorite meals
export const restaurants: Restaurant[] = [
  {
    id: "rest-1",
    name: "Pizza Palace",
    logoEmoji: "🍕",
    meals: [
      {
        id: "meal-1-1",
        name: "Cheese Pizza",
        description: "Classic cheese pizza slice",
        emoji: "🍕",
      },
      {
        id: "meal-1-2",
        name: "Pepperoni Pizza",
        description: "Pizza with pepperoni",
        emoji: "🍕",
      },
      {
        id: "meal-1-3",
        name: "Veggie Pizza",
        description: "Pizza with bell peppers and olives",
        emoji: "🥗",
      },
    ],
  },
  {
    id: "rest-2",
    name: "Chicken Spot",
    logoEmoji: "🍗",
    meals: [
      {
        id: "meal-2-1",
        name: "Chicken Nuggets",
        description: "Crispy chicken nuggets with fries",
        emoji: "🍗",
      },
      {
        id: "meal-2-2",
        name: "Chicken Tenders",
        description: "Breaded chicken tenders",
        emoji: "🍗",
      },
      {
        id: "meal-2-3",
        name: "Mac & Cheese",
        description: "Creamy macaroni and cheese",
        emoji: "🧀",
      },
      {
        id: "meal-2-4",
        name: "Grilled Cheese",
        description: "Toasted cheese sandwich",
        emoji: "🥪",
      },
    ],
  },
  {
    id: "rest-3",
    name: "Burger Barn",
    logoEmoji: "🍔",
    meals: [
      {
        id: "meal-3-1",
        name: "Cheeseburger",
        description: "Burger with cheese and fries",
        emoji: "🍔",
      },
      {
        id: "meal-3-2",
        name: "Hot Dog",
        description: "Classic hot dog with ketchup",
        emoji: "🌭",
      },
      {
        id: "meal-3-3",
        name: "Chicken Sandwich",
        description: "Crispy chicken sandwich",
        emoji: "🥪",
      },
    ],
  },
];

export function findRestaurantById(id: string): Restaurant | undefined {
  return restaurants.find((restaurant) => restaurant.id === id);
}

export function findMealById(restaurantId: string, mealId: string) {
  const restaurant = findRestaurantById(restaurantId);
  if (!restaurant) return null;
  
  const meal = restaurant.meals.find((m) => m.id === mealId);
  if (!meal) return null;
  
  return { restaurant, meal };
}
