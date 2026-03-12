import { useState } from "react";
import { IconHeart } from "@tabler/icons-react";
import { ContentArea } from "@/components/ContentArea";
import { Sidebar } from "@/components/Sidebar";
import { getAllQuests } from "@/hooks/getQuests";
import { ExpansionTabs } from "@/components/ExpansionTabs";
import { expansionTabs, type ExpansionId } from "@/config/expansions";
import { navigationItems, type NavigationId } from "@/config/navigation";

export function Home() {
  const [activeSection, setActiveSection] = useState<NavigationId>("dashboard");
  const [activeExpansion, setActiveExpansion] = useState<ExpansionId>("skyrim");

  const quests = getAllQuests();

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-350 p-4 md:p-6">
        <div className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-center shadow-lg">
          <h1 className="font-heading text-2xl md:text-3xl tracking-wide text-slate-100">
            Skyrim Companion
          </h1>
        </div>

        <div className="mt-4 flex gap-4">
          <div className="w-110 shrink-0">
            <aside className="rounded-lg border border-white/10 bg-slate-900/70 p-4 shadow-lg">
              <ExpansionTabs
                tabs={expansionTabs}
                activeExpansion={activeExpansion}
                onChange={setActiveExpansion}
              />
              <Sidebar
                items={navigationItems}
                activeSection={activeSection}
                onChange={setActiveSection}
              />
            </aside>
          </div>
          <ContentArea />
        </div>

        <footer className="mt-4 font-heading text-right text-sm text-sky-200">
          <span>Made by Koneweczka with </span>
          <IconHeart
            size={21}
            stroke={1.6}
            className="inline translate-y-px text-sky-300 fill-sky-300/25"
            role="img"
            aria-label="love"
          />
        </footer>
      </div>
    </div>
  );
}
