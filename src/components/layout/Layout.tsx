import { Content } from "@/components/layout/Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import type {
  ExpansionItem,
  ExpansionId,
} from "@/components/features/quests/expansions";
import type { NavigationItem, NavigationId } from "./navigation";

interface LayoutProps {
  navigationItems: readonly NavigationItem[];
  expansionTabs: readonly ExpansionItem[];
  activeSection: NavigationId;
  activeExpansion: ExpansionId;
  onSectionChange: (section: NavigationId) => void;
  onExpansionChange: (expansion: ExpansionId) => void;
}

export function Layout({
  navigationItems,
  expansionTabs,
  activeSection,
  activeExpansion,
  onSectionChange,
  onExpansionChange,
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-350 p-4 md:p-6">
        <Header />

        <div className="mt-4 flex gap-4">
          <Sidebar
            navigationItems={navigationItems}
            expansionTabs={expansionTabs}
            activeSection={activeSection}
            activeExpansion={activeExpansion}
            onSectionChange={onSectionChange}
            onExpansionChange={onExpansionChange}
          />

          <Content
            activeSection={activeSection}
            activeExpansion={activeExpansion}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
}
