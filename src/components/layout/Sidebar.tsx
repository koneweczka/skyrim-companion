import { ExpansionTabs } from "@/components/navigation/ExpansionTabs";
import { SidebarNavigation } from "@/components/navigation/SidebarNavigation";
import type { ExpansionId, ExpansionItem } from "../features/quests/expansions";
import type { NavigationId, NavigationItem } from "./navigation";

interface SidebarProps {
  navigationItems: readonly NavigationItem[];
  expansionTabs: readonly ExpansionItem[];
  activeExpansion: ExpansionId;
  onExpansionChange: (expansion: ExpansionId) => void;
  activeSection: NavigationId;
  onSectionChange: (section: NavigationId) => void;
}

export function Sidebar({
  expansionTabs,
  activeExpansion,
  onExpansionChange,
  navigationItems,
  activeSection,
  onSectionChange,
}: SidebarProps) {
  return (
    <div className="w-110 shrink-0">
      <aside className="rounded-lg border border-white/10 bg-slate-900/70 p-4 shadow-lg">
        <ExpansionTabs
          tabs={expansionTabs}
          activeExpansion={activeExpansion}
          onChange={onExpansionChange}
        />
        <SidebarNavigation
          items={navigationItems}
          activeSection={activeSection}
          onChange={onSectionChange}
        />
      </aside>
    </div>
  );
}
