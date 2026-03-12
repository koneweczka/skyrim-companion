export const expansionTabs = [
  { id: "skyrim", label: "Skyrim" },
  { id: "dragonborn", label: "Dragonborn" },
  { id: "dawnguard", label: "Dawnguard" },
] as const;

export type ExpansionId = (typeof expansionTabs)[number]["id"];
