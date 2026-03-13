// TODO: Should it be here? Cause I have seperate views for quests.
export type Quest = {
  id: string;
  expansion: Expansion;
  category: QuestCategory;
  questline: Questline;
  title: {
    en: string;
    pl: string;
  };
  startLocation?: string; // TODO: check if I need it
  repeatable?: boolean;
  notInJournal?: boolean; // TODO: check if I need it
  relatedQuestIds?: {
    prerequisiteQuestIds?: string[];
    nextQuestIds?: string[];
    parallelQuestIds?: string[];
    conflictingQuestIds?: string[];
  };
  notes?: string;
};

type Expansion = "skyrim" | "dragonborn" | "dawnguard" | "ccc";

// TODO: maybe I just need main/side without it in questline? Check later.
type QuestCategory =
  | "main"
  | "side"
  | "guild"
  | "war"
  | "deadric"
  | "creation-club-content"
  | "others";

type Questline =
  | "main-skyrim"
  | "companions"
  | "college-of-winterhold"
  | "dark-brotherhood"
  | "thieves-guild"
  | "bards-college"
  | "blades"
  | "divine"
  | "imperial-legion"
  | "stormcloaks"
  | "city"
  | "town"
  | "dungeon"
  | "stronghold"
  | "bounty"
  | "open-world"
  | "tutorial"
  | "fishing"
  | "treasure-map" // Maybe move to collectibles?
  | "hearthfire"
  | "dragonborn-main"
  | "raven-rock"
  | "skaal-village"
  | "tel-mithryn"
  | "thirsk"
  | "black-books"
  | "side-dragonborn"
  | "main-dawnguard"
  | "main-volkihar"
  | "main-fort-dawnguard"
  | "side-volkihar"
  | "side-fort-dawnguard"
  | "side-dawnguard"
  | "alternative-armors"
  | "arcane-archer-pack"
  | "bittercup"
  | "dawnfang-and-duskfang"
  | "divine-crusader"
  | "farming"
  | "forgotten-seasons"
  | "saints-and-seducers"
  | "the-cause"
  | "wild-horses"
  | "ghosts-of-the-tribunal"
  | "side-ccc";
