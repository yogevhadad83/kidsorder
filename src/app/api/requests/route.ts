import { NextRequest, NextResponse } from "next/server";
import { requireSession } from "@/lib/session";
import { findMealById } from "@/data/menu";
import { FoodRequest, FoodRequestResponse } from "@/lib/types";
import { randomUUID } from "crypto";

// In-memory storage for MVP (will be replaced with a database)
const requests: (FoodRequest & { id: string })[] = [];

// TODO: Implement actual parent notification system
function sendParentNotification(request: FoodRequest & { id: string }) {
  console.log("📧 Parent notification (stub):");
  console.log("━".repeat(50));
  console.log(`Request ID: ${request.id}`);
  console.log(`Kid: ${request.kidName}`);
  console.log(`Restaurant: ${request.restaurantId}`);
  console.log(`Meal: ${request.mealId}`);
  console.log(`Notes: ${request.notes || "(none)"}`);
  console.log(`Created: ${request.createdAt}`);
  console.log("━".repeat(50));
  console.log("TODO: Send actual notification (email, SMS, push, etc.)");
}

export async function POST(request: NextRequest) {
  try {
    // Verify session
    const session = await requireSession();

    // Parse request body
    const body = await request.json();
    const { restaurantId, mealId, notes } = body;

    // Validate required fields
    if (!restaurantId || !mealId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify meal exists
    const mealData = findMealById(restaurantId, mealId);
    if (!mealData) {
      return NextResponse.json(
        { error: "Invalid restaurant or meal" },
        { status: 400 }
      );
    }

    // Create request
    const requestId = randomUUID();
    const foodRequest: FoodRequest & { id: string } = {
      id: requestId,
      kidName: session.kidName,
      restaurantId,
      mealId,
      notes: notes || undefined,
      createdAt: new Date().toISOString(),
    };

    // Store request (in-memory for MVP)
    requests.push(foodRequest);

    // Send notification (stub)
    sendParentNotification(foodRequest);

    // Return response
    const response: FoodRequestResponse = {
      requestId,
      request: {
        kidName: foodRequest.kidName,
        restaurantId: foodRequest.restaurantId,
        mealId: foodRequest.mealId,
        notes: foodRequest.notes,
        createdAt: foodRequest.createdAt,
      },
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("Error creating request:", error);
    
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve requests (for debugging/parent view later)
export async function GET() {
  try {
    await requireSession();
    return NextResponse.json({ requests }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }
}
