"use client";

import { KidProfile } from "./types";

const PROFILE_KEY = "kid-profile";

export function saveProfile(profile: KidProfile) {
  if (typeof window !== "undefined") {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  }
}

export function getProfile(): KidProfile | null {
  if (typeof window === "undefined") return null;
  
  const data = localStorage.getItem(PROFILE_KEY);
  if (!data) return null;
  
  try {
    return JSON.parse(data) as KidProfile;
  } catch {
    return null;
  }
}

export function clearProfile() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(PROFILE_KEY);
  }
}
