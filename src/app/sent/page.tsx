"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import BigButton from "@/components/BigButton";

function SentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const requestId = searchParams.get("requestId");

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-100/70 to-teal-100/70 p-8">
      <div className="max-w-2xl mx-auto text-center">
        <PageHeader
          title="All done!"
          subtitle="Your request was sent"
          emoji="🎉"
        />

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="text-6xl mb-6">✓</div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Request Sent!
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Mom or Dad will see your request soon!
          </p>
          {requestId && (
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Request ID</p>
              <p className="text-lg font-mono font-bold text-gray-800">
                {requestId}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <BigButton
            onClick={() => router.push("/restaurants")}
            variant="primary"
            ariaLabel="Order another meal"
          >
            Pick Another Meal 🍽️
          </BigButton>

          <BigButton
            onClick={() => router.push("/login")}
            variant="secondary"
            ariaLabel="Sign out"
          >
            Done 👋
          </BigButton>
        </div>
      </div>
    </main>
  );
}

export default function SentPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-b from-green-100/70 to-teal-100/70 p-8 flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </main>
    }>
      <SentContent />
    </Suspense>
  );
}
