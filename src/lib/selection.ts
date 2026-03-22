"use client";

// Client-side helper for managing current food request selection

export interface CurrentSelection {
  restaurantId: string;
  restaurantName: string;
  mealId: string;
  mealName: string;
  notes?: string;
}

const SELECTION_KEY = "current-selection";

export function saveSelection(selection: CurrentSelection) {
  if (typeof window !== "undefined") {
    localStorage.setItem(SELECTION_KEY, JSON.stringify(selection));
  }
}

export function getSelection(): CurrentSelection | null {
  if (typeof window === "undefined") return null;
  
  const data = localStorage.getItem(SELECTION_KEY);
  if (!data) return null;
  
  try {
    return JSON.parse(data) as CurrentSelection;
  } catch {
    return null;
  }
}

export function clearSelection() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(SELECTION_KEY);
  }
}
