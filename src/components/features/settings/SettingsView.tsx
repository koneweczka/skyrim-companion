import { ViewPanel } from "@/components/layout/ViewPanel";

export function SettingsView() {
  return (
    <ViewPanel title="Settings" progressLabel="Settings Progress">
      <section className="mt-4 rounded-md border border-white/10 bg-slate-950/40 p-4">
        <p className="mt-3 text-sm text-slate-400">
          Settings will be added later.
        </p>
      </section>
    </ViewPanel>
  );
}
