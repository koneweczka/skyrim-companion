import { ViewPanel } from "@/components/layout/ViewPanel";

export function BooksView() {
  return (
    <ViewPanel title="Books" progressLabel="Books Progress">
      <section className="mt-4 rounded-md border border-white/10 bg-slate-950/40 p-4">
        <p className="mt-3 text-sm text-slate-400">
          Books will be added later.
        </p>
      </section>
    </ViewPanel>
  );
}
