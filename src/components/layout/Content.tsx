import { sectionViewsByExpansion } from "./SectionViews";
import type { ExpansionId } from "../features/quests/expansions";
import type { NavigationId } from "./navigation";
import { ViewPanel } from "./ViewPanel";

interface ContentProps {
  activeSection: NavigationId;
  activeExpansion: ExpansionId;
}

export function Content({ activeSection, activeExpansion }: ContentProps) {
  const renderView = sectionViewsByExpansion[activeExpansion][activeSection];

  return (
    <main className="flex-1">
      {renderView ? (
        renderView(activeExpansion)
      ) : (
        <ViewPanel title="Section unavailable" progressLabel="Progress">
          <section className="mt-4 rounded-md border border-white/10 bg-slate-950/40 p-4">
            <p className="mt-3 text-sm text-slate-400">
              This section is not available for the selected expansion yet.
            </p>
          </section>
        </ViewPanel>
      )}
    </main>
  );
}
