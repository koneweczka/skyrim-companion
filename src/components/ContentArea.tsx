export function ContentArea() {
  return (
    <main className="flex-1">
      <div className="rounded-lg border border-white/10 bg-slate-900/50 p-4 shadow-lg">
        <div className="rounded-md border border-white/10 bg-slate-800/60 px-4 py-2 text-center">
          <h2 className="font-heading text-xl tracking-wide uppercase text-slate-100">
            Dashboard
          </h2>
        </div>
        <section className="mt-4 rounded-md border border-white/10 bg-slate-950/40 p-3">
          <h3 className="font-heading text-lg tracking-wide text-slate-200 text-center">
            Total Progress
          </h3>
          {/* TODO: Move this progress bar to seperate component */}
          <div className="h-3 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[36%] bg-linear-to-r from-slate-400 via-sky-300 to-slate-500 shadow-slate-500/30" />
          </div>
        </section>
        <section className="mt-4 rounded-md border border-white/10 bg-slate-200 p-4 text-slate-900">
          <div className="text-sm text-slate-600">Content</div>
          <div className="mt-2 text-lg font-semibold">Here's the content</div>
        </section>
      </div>
    </main>
  );
}
