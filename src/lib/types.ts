// Type definitions for the Food Ask app

// Kid profile for account-creation-on-entry flow
export interface KidProfile {
  name: string;
  avatar: string;
}

// Kid data structure for UI components
export interface Kid {
  name: string;
  avatarEmoji: string;
}

export interface Meal {
  id: string;
  name: string;
  description: string;
  emoji?: string;
  imageUrl?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  logoEmoji: string;
  meals: Meal[];
}

export interface FoodRequest {
  kidName: string;
  restaurantId: string;
  mealId: string;
  notes?: string;
  createdAt: string;
}

export interface FoodRequestResponse {
  requestId: string;
  request: FoodRequest;
}

export interface Session {
  kidName: string;
  kidAvatar: string;
}
