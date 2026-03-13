import type { ExpansionId } from "@/components/features/quests/expansions";

interface ExpansionTab {
  id: ExpansionId;
  label: string;
}

interface ExpansionTabsProps {
  tabs: readonly ExpansionTab[];
  activeExpansion: ExpansionId;
  onChange: (expansion: ExpansionId) => void;
}

export function ExpansionTabs({
  tabs,
  activeExpansion,
  onChange,
}: ExpansionTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Expansions"
      className="mb-4 flex items-center border-b border-white/20"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeExpansion;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={[
              "relative flex-1 pb-3 font-heading text-center text-sm uppercase tracking-wide",
              isActive ? " text-sky-300" : " text-slate-300",
            ].join(" ")}
          >
            {tab.label}
            {isActive && (
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-sky-300" />
            )}
          </button>
        );
      })}
    </div>
  );
}
