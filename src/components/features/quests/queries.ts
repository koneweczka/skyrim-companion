import questsJson from "@/data/quests.json";
import type {
  Expansion,
  Quest,
  QuestCategory,
} from "@/components/features/quests/types";

const quests = questsJson as Quest[];

export function getAllQuests(): Quest[] {
  return quests;
}

export function getQuestsByExpansionAndCategory({
  expansion,
  category,
}: {
  expansion: Expansion;
  category: QuestCategory;
}): Quest[] {
  return quests.filter(
    (quest) => quest.expansion === expansion && quest.category === category,
  );
}
