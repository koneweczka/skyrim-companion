import quests from "@/data/quests.json";
import type { Quest } from "@/types/types";

export function getAllQuests(): Quest[] {
  return quests as Quest[];
}
