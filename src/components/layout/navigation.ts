export const navigationItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "main", label: "Main Quests" },
  { id: "guild", label: "Guild Quests" },
  { id: "daedric", label: "Daedric Quests" },
  { id: "side", label: "Side Quests" },
  { id: "collections", label: "Collections" },
  { id: "books", label: "Books" },
  { id: "settings", label: "Settings" },
] as const;

export type NavigationItem = (typeof navigationItems)[number];

export type NavigationId = NavigationItem["id"];
