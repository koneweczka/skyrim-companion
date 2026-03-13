import quests from "@/data/quests.json";
import type { Quest } from "@/components/features/quests/types";

export function getAllQuests(): Quest[] {
  return quests as Quest[];
}
