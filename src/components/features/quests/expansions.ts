export const expansionTabs = [
  { id: "skyrim", label: "Skyrim" },
  { id: "dragonborn", label: "Dragonborn" },
  { id: "dawnguard", label: "Dawnguard" },
] as const;

export type ExpansionItem = (typeof expansionTabs)[number];

export type ExpansionId = ExpansionItem["id"];
