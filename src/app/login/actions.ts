"use server";

import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function createKidSession(name: string, avatar: string) {
  // Validate name
  const trimmedName = name.trim();
  
  if (!trimmedName) {
    return { success: false, error: "Please enter your name" };
  }
  
  if (trimmedName.length < 2) {
    return { success: false, error: "Name must be at least 2 characters" };
  }
  
  if (trimmedName.length > 20) {
    return { success: false, error: "Name must be 20 characters or less" };
  }
  
  // Validate avatar
  if (!avatar) {
    return { success: false, error: "Please pick an avatar" };
  }
  
  // Create session
  await createSession({
    kidName: trimmedName,
    kidAvatar: avatar,
  });
  
  redirect("/restaurants");
}
