import { requireSession } from "@/lib/session";
import { restaurants } from "@/data/menu";
import RestaurantsClient from "./RestaurantsClient";

export const dynamic = "force-dynamic";

export default async function RestaurantsPage() {
  const session = await requireSession();

  return <RestaurantsClient session={session} restaurants={restaurants} />;
}
