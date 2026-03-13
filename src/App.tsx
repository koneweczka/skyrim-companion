import { useState } from "react";
import { Layout } from "./components/layout/Layout";
import {
  expansionTabs,
  type ExpansionId,
} from "@/components/features/quests/expansions";
import {
  navigationItems,
  type NavigationId,
} from "@/components/layout/navigation";

export default function App() {
  const [activeSection, setActiveSection] = useState<NavigationId>("dashboard");
  const [activeExpansion, setActiveExpansion] = useState<ExpansionId>("skyrim");

  return (
    <Layout
      navigationItems={navigationItems}
      expansionTabs={expansionTabs}
      activeSection={activeSection}
      activeExpansion={activeExpansion}
      onSectionChange={setActiveSection}
      onExpansionChange={setActiveExpansion}
    />
  );
}
