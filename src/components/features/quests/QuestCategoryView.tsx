import { ViewPanel } from "@/components/layout/ViewPanel";
import type { Expansion, QuestCategory, Questline } from "./types";

interface QuestCategoryViewProps {
  title: string;
  expansion: Expansion;
  category?: QuestCategory;
  questline?: Questline;
}

export function QuestCategoryView({ title }: QuestCategoryViewProps) {
  return (
    <ViewPanel title={title} progressLabel={`${title} Progress`}>
      <section className="mt-4 rounded-md border border-white/10 bg-slate-950/40 p-4">
        <p className="mt-3 text-sm text-slate-400">
          Quests tracking will be added later.
        </p>
      </section>
    </ViewPanel>
  );
}
