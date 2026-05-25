const sharedNavigationItems = [
  { id: "collections", label: "Collections" },
  { id: "books", label: "Books" },
  { id: "settings", label: "Settings" },
] as const;

const skyrimNavigationItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "main", label: "Main Quests" },
  { id: "guild", label: "Guild Quests" },
  { id: "daedric", label: "Daedric Quests" },
  { id: "side", label: "Side Quests" },
  ...sharedNavigationItems,
] as const;

const dragonbornNavigationItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "raven-rock", label: "Raven Rock" },
  { id: "skaal-village", label: "Skaal Village" },
  { id: "tel-mithryn", label: "Tel Mithryn" },
  { id: "thirsk", label: "Thirsk" },
  { id: "black-books", label: "Black Books" },
  ...sharedNavigationItems,
] as const;

const dawnguardNavigationItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "main", label: "Main Quests" },
  { id: "join-the-dawnguard", label: "Join the Dawnguard" },
  { id: "join-the-vampires", label: "Join the Vampires" },
  { id: "dawnguard-side-quest", label: "Dawnguard Side Quests" },
  { id: "vampires-side-quest", label: "Vampires Side Quests" },
  { id: "others", label: "Others" },
  ...sharedNavigationItems,
] as const;

// TODO: probably I need also ContentClub as seperate tab, decide later.
export const navigationItemsByExpansion = {
  skyrim: skyrimNavigationItems,
  dragonborn: dragonbornNavigationItems,
  dawnguard: dawnguardNavigationItems,
} as const;

type NavigationGroup =
  (typeof navigationItemsByExpansion)[keyof typeof navigationItemsByExpansion];

export type NavigationItem = NavigationGroup[number];

export type NavigationId = NavigationItem["id"];
