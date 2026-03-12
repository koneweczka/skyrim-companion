export const navigationItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "main", label: "Main Quests" },
  { id: "guild", label: "Guild Quests" },
  { id: "daedric", label: "Daedric Quests" },
  { id: "side", label: "Side Quests" },
  { id: "collections", label: "Collections" },
  { id: "settings", label: "Settings" },
] as const;

export type NavigationId = (typeof navigationItems)[number]["id"];
