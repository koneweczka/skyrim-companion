import type { ReactNode } from "react";
import { ProgressBar } from "./ProgressBar";

interface ViewPanelProps {
  title: string;
  progressLabel: string;
  children: ReactNode;
}

export function ViewPanel({ title, children, progressLabel }: ViewPanelProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-900/50 p-4 shadow-lg">
      <div className="rounded-md border border-white/10 bg-slate-800/60 px-4 py-2 text-center">
        <h2 className="font-heading text-xl uppercase tracking-wide text-slate-100">
          {title}
        </h2>
      </div>

      {title != "Settings" && <ProgressBar label={progressLabel} />}

      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}
