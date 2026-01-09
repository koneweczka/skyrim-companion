type QuestType = "MAIN" | "GUILD" | "WAR" | "SIDE" | "DEADRIC" | "OTHER";

type GuildQuest =
  | "Bards College"
  | "College of Winterhold"
  | "Companions"
  | "Dark Brotherhood"
  | "Divine" // Maybe move to side quests?
  | "Thieves Guild"
  | "Blades";

type WarQuests = "Imperial Legion" | "Stormcloaks";

type SideQuest =
  | "CITY"
  | "TOWN"
  | "DUNGEON"
  | "STRONGHOLD"
  | "BOUNTY"
  | "OPRN WORLD"
  | "CREATION CLUB";

export type Quest = {
  id: string; // Think should it be like MQ01 or name
  type: QuestType;
  title: {
    en: string;
    pl: string;
  };
  completed: boolean;
  relatedQuest?: {
    before?: string[];
    after?: string[];
    overlap?: string[];
    canBrokeQuest?: string[];
  };
  comment?: string;
  reward?: string;
};
