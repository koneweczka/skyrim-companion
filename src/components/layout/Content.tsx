import { BooksView } from "../features/books/BooksView";
import { CollectionsView } from "../features/collections/CollectionsView";
import { DashboardView } from "../features/dashboard/DashboardView";
import { QuestCategoryView } from "../features/quests/QuestCategoryView";
import { SettingsView } from "../features/settings/SettingsView";
import type { ExpansionId } from "../features/quests/expansions";
import type { NavigationId } from "./navigation";

interface ContentProps {
  activeSection: NavigationId;
  activeExpansion: ExpansionId;
}

export function Content({ activeSection, activeExpansion }: ContentProps) {
  const sectionViewMap: Record<NavigationId, () => React.ReactNode> = {
    dashboard: () => <DashboardView />,
    main: () => <QuestCategoryView title="Main Quests" />,
    guild: () => <QuestCategoryView title="Guild Quests" />,
    daedric: () => <QuestCategoryView title="Daedric Quests" />,
    side: () => <QuestCategoryView title="Side Quests" />,
    collections: () => <CollectionsView />,
    books: () => <BooksView />,
    settings: () => <SettingsView />,
  };

  const renderView = sectionViewMap[activeSection];

  return <main className="flex-1">{renderView()}</main>;
}
