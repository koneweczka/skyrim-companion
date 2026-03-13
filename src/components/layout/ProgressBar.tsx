interface ProgressBarProps {
  label: string;
}

export function ProgressBar({ label }: ProgressBarProps) {
  return (
    <section className="mt-4 rounded-md border border-white/10 bg-slate-950/40 p-4">
      <h3 className="font-heading text-lg tracking-wide text-slate-200 text-center">
        {label}
      </h3>

      <div className="h-3 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-[36%] bg-linear-to-r from-slate-400 via-sky-300 to-slate-500 shadow-slate-500/30" />
      </div>

      <p className="mt-3 text-sm text-slate-400">
        Progress tracking will be added later.
      </p>
    </section>
  );
}
