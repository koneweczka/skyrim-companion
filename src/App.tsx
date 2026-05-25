import { useState } from "react";
import { Layout } from "./components/layout/Layout";
import {
  expansionTabs,
  type ExpansionId,
} from "@/components/features/quests/expansions";
import {
  navigationItemsByExpansion,
  type NavigationId,
} from "@/components/layout/navigation";

export default function App() {
  const [activeSection, setActiveSection] = useState<NavigationId>("dashboard");
  const [activeExpansion, setActiveExpansion] = useState<ExpansionId>("skyrim");

  function handleExpansionChange(expansion: ExpansionId) {
    setActiveExpansion(expansion);

    const nextNavigationItems = navigationItemsByExpansion[expansion];

    const isActiveSectionAvailable = nextNavigationItems.some(
      (item) => item.id === activeSection,
    );

    if (!isActiveSectionAvailable) {
      setActiveSection("dashboard");
    }
  }

  return (
    <Layout
      navigationItems={navigationItemsByExpansion[activeExpansion]}
      expansionTabs={expansionTabs}
      activeSection={activeSection}
      activeExpansion={activeExpansion}
      onSectionChange={setActiveSection}
      onExpansionChange={handleExpansionChange}
    />
  );
}
