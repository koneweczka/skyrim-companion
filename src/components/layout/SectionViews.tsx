import { BooksView } from "../features/books/BooksView";
import { CollectionsView } from "../features/collections/CollectionsView";
import { DashboardView } from "../features/dashboard/DashboardView";
import { QuestCategoryView } from "../features/quests/QuestCategoryView";
import { SettingsView } from "../features/settings/SettingsView";
import type { ExpansionId } from "../features/quests/expansions";
import type { NavigationId } from "./navigation";

type SectionView = (activeExpansion: ExpansionId) => React.ReactNode;

type SectionViewsByExpansion = Record<
  ExpansionId,
  Partial<Record<NavigationId, SectionView>>
>;

const sharedSectionViews = {
  dashboard: () => <DashboardView />,
  collections: () => <CollectionsView />,
  books: () => <BooksView />,
  settings: () => <SettingsView />,
} satisfies Partial<Record<NavigationId, SectionView>>;

const skyrimSectionViews = {
  ...sharedSectionViews,
  main: () => (
    <QuestCategoryView
      title="Main Quests"
      expansion="skyrim"
      category="main"
      questline="main-skyrim"
    />
  ),
  guild: () => (
    <QuestCategoryView
      title="Guild Quests"
      expansion="skyrim"
      category="guild"
    />
  ),
  daedric: () => (
    <QuestCategoryView
      title="Daedric Quests"
      expansion="skyrim"
      category="daedric"
    />
  ),
  side: () => (
    <QuestCategoryView title="Side Quests" expansion="skyrim" category="side" />
  ),
} satisfies Partial<Record<NavigationId, SectionView>>;

const dragonbornSectionViews = {
  ...sharedSectionViews,
  "raven-rock": () => (
    <QuestCategoryView
      title="Raven Rock"
      expansion="dragonborn"
      questline="raven-rock"
    />
  ),
  "skaal-village": () => (
    <QuestCategoryView
      title="Skaal Village"
      expansion="dragonborn"
      questline="skaal-village"
    />
  ),
  "tel-mithryn": () => (
    <QuestCategoryView
      title="Tel Mithryn"
      expansion="dragonborn"
      questline="tel-mithryn"
    />
  ),
  thirsk: () => (
    <QuestCategoryView
      title="Thirsk"
      expansion="dragonborn"
      questline="thirsk"
    />
  ),
  "black-books": () => (
    <QuestCategoryView
      title="Black Books"
      expansion="dragonborn"
      questline="black-books"
    />
  ),
} satisfies Partial<Record<NavigationId, SectionView>>;

const dawnguardSectionViews = {
  ...sharedSectionViews,
  main: () => (
    <QuestCategoryView
      title="Main Quests"
      expansion="dawnguard"
      questline="main-dawnguard"
    />
  ),
  "join-the-dawnguard": () => (
    <QuestCategoryView
      title="Join the Dawnguard"
      expansion="dawnguard"
      questline="main-fort-dawnguard"
    />
  ),
  "join-the-vampires": () => (
    <QuestCategoryView
      title="Join the Vampires"
      expansion="dawnguard"
      questline="main-volkihar"
    />
  ),
  "dawnguard-side-quest": () => (
    <QuestCategoryView
      title="Dawnguard Side Quests"
      expansion="dawnguard"
      questline="side-fort-dawnguard"
    />
  ),
  "vampires-side-quest": () => (
    <QuestCategoryView
      title="Vampires Side Quests"
      expansion="dawnguard"
      questline="side-volkihar"
    />
  ),
  others: () => (
    <QuestCategoryView
      title="Others"
      expansion="dawnguard"
      questline="side-dawnguard"
    />
  ),
} satisfies Partial<Record<NavigationId, SectionView>>;

export const sectionViewsByExpansion: SectionViewsByExpansion = {
  skyrim: skyrimSectionViews,
  dragonborn: dragonbornSectionViews,
  dawnguard: dawnguardSectionViews,
} satisfies Record<ExpansionId, Partial<Record<NavigationId, SectionView>>>;
