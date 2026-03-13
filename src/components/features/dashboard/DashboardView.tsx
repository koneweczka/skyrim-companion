import { ViewPanel } from "@/components/layout/ViewPanel";

export function DashboardView() {
  return (
    <ViewPanel title="Dashboard" progressLabel="Total Progress">
      <section className="mt-4 rounded-md border border-white/10 bg-slate-950/40 p-4">
        <p className="mt-3 text-sm text-slate-400">
          All tracking will be added later.
        </p>
      </section>
    </ViewPanel>
  );
}
