const nav_items = [
  {
    label: "Dashboard",
    href: "#",
  },
  { label: "Main Quests", href: "#" },
  { label: "Guild Quests", href: "#" },
  { label: "Daedric Quests", href: "#" },
  { label: "Side Quests", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Settings", href: "#" },
];

export function Sidebar() {
  const active = "Dashboard";

  return (
    <aside className="hidden md:block w-72 shrink-0">
      <div className="rounded-lg border border-white/10 bg-slate-900/70 p-4 shadow-lg">
        <h2 className="font-heading text-xl tracking-wide text-slate-100">
          Sidebar
        </h2>
        <nav className="mt-4 space-y-1">
          {nav_items.map((item) => {
            const isActive = item.label === active;
            return (
              <a
                key={item.label}
                href={item.href}
                className={[
                  "block rounded-md px-3 py-2 text-sm transition",
                  "text-slate-300 hover:bg-white/5 hover:text-slate-100",
                  "focus:outline-none focus:ring-2 focus:ring-amber-500/40",
                  isActive
                    ? "bg-white/10 text-slate-100 border-l-2 border-amber-400 pl-2.5"
                    : "border-l-2 border-transparent",
                ].join(" ")}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
