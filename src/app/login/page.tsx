"use client";

import { useState } from "react";
import BigButton from "@/components/BigButton";
import PageHeader from "@/components/PageHeader";
import { createKidSession } from "./actions";

// Avatar options for kids to choose from
const AVATAR_OPTIONS = [
  "🦄", // Unicorn
  "🦖", // Dinosaur
  "🐱", // Cat
  "🐶", // Dog
  "🐼", // Panda
  "🦊", // Fox
  "🐻", // Bear
  "🐨", // Koala
  "🦁", // Lion
  "🐸", // Frog
  "🐙", // Octopus
  "🦋", // Butterfly
];

export default function LoginPage() {
  const [name, setName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    const trimmedName = name.trim();
    
    if (!trimmedName) {
      setError("Please enter your name");
      return;
    }
    
    if (trimmedName.length < 2) {
      setError("Name must be at least 2 characters");
      return;
    }
    
    if (trimmedName.length > 20) {
      setError("Name must be 20 characters or less");
      return;
    }
    
    if (!selectedAvatar) {
      setError("Please pick an avatar");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      
      // Create session and redirect
      const result = await createKidSession(trimmedName, selectedAvatar);
      
      if (!result.success) {
        setError(result.error || "Login failed");
        setIsLoading(false);
      }
    } catch {
      // Redirect happened, do nothing
    }
  };

  const isFormValid = name.trim().length >= 2 && name.trim().length <= 20 && selectedAvatar;

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100/70 to-purple-100/70 p-8">
      <div className="max-w-2xl mx-auto">
        <PageHeader
          title="Let's get started!"
          subtitle="Tell us about you"
          emoji="👋"
        />

        {/* Name Input */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <label
            htmlFor="kid-name"
            className="block text-2xl font-bold text-gray-800 mb-4"
          >
            What&apos;s your name?
          </label>
          <input
            id="kid-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            maxLength={20}
            disabled={isLoading}
            className="w-full p-4 text-2xl border-4 border-gray-300 rounded-2xl focus:border-blue-500 focus:outline-none disabled:opacity-50"
            aria-label="Your name"
            autoComplete="off"
          />
          <div className="text-sm text-gray-500 mt-2">
            {name.trim().length}/20 characters (min: 2)
          </div>
        </div>

        {/* Avatar Picker */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Pick your avatar
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {AVATAR_OPTIONS.map((avatar) => (
              <button
                key={avatar}
                onClick={() => setSelectedAvatar(avatar)}
                disabled={isLoading}
                className={`
                  flex items-center justify-center
                  p-4 rounded-2xl
                  text-5xl
                  transition-all
                  border-4
                  ${
                    selectedAvatar === avatar
                      ? "border-blue-500 bg-blue-100 scale-110"
                      : "border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-50"
                  }
                  disabled:opacity-50 disabled:cursor-not-allowed
                  active:scale-95
                `}
                aria-label={`Select ${avatar} avatar`}
                aria-pressed={selectedAvatar === avatar}
              >
                {avatar}
              </button>
            ))}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-2xl text-center font-bold mb-6">
            {error}
          </div>
        )}

        {/* Continue Button */}
        <BigButton
          onClick={handleSubmit}
          disabled={!isFormValid || isLoading}
          variant="success"
          ariaLabel="Continue to restaurants"
        >
          {isLoading ? "Loading..." : "Continue ✓"}
        </BigButton>


      </div>
    </main>
  );
}
