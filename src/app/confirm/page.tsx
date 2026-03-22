"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSelection, clearSelection, CurrentSelection } from "@/lib/selection";
import PageHeader from "@/components/PageHeader";
import BigButton from "@/components/BigButton";

export default function ConfirmPage() {
  const router = useRouter();
  const [selection, setSelection] = useState<CurrentSelection | null>(null);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const currentSelection = getSelection();
    if (!currentSelection) {
      router.push("/restaurants");
    } else {
      setSelection(currentSelection);
    }
  }, [router]);

  const handleSubmit = async () => {
    if (!selection) return;

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurantId: selection.restaurantId,
          mealId: selection.mealId,
          notes: notes || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      const data = await response.json();
      clearSelection();
      router.push(`/sent?requestId=${data.requestId}`);
    } catch {
      setError("Oops! Something went wrong. Try again!");
      setIsSubmitting(false);
    }
  };

  if (!selection) {
    return null; // Will redirect via useEffect
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-100/70 to-pink-100/70 p-8">
      <div className="max-w-2xl mx-auto">
        <PageHeader
          title="Looks good?"
          subtitle="Check your order"
          emoji="✓"
        />

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="space-y-6">
            <div>
              <label className="text-lg font-bold text-gray-600 block mb-2">
                Restaurant
              </label>
              <div className="text-2xl font-bold text-gray-800">
                {selection.restaurantName}
              </div>
            </div>

            <div>
              <label className="text-lg font-bold text-gray-600 block mb-2">
                Meal
              </label>
              <div className="text-2xl font-bold text-gray-800">
                {selection.mealName}
              </div>
            </div>

            <div>
              <label
                htmlFor="notes"
                className="text-lg font-bold text-gray-600 block mb-2"
              >
                Notes (optional)
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special requests? (e.g., no pickles)"
                className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                rows={3}
                maxLength={200}
              />
              <div className="text-sm text-gray-500 mt-1">
                {notes.length}/200 characters
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center font-bold mt-4">
              {error}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <BigButton
            onClick={handleSubmit}
            disabled={isSubmitting}
            variant="success"
            ariaLabel="Send request to parent"
          >
            {isSubmitting ? "Sending..." : "Send to Mom/Dad 📤"}
          </BigButton>

          <BigButton
            onClick={() => router.back()}
            variant="secondary"
            disabled={isSubmitting}
            ariaLabel="Go back"
          >
            ← Go Back
          </BigButton>
        </div>
      </div>
    </main>
  );
}
