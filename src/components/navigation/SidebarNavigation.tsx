import type {
  NavigationId,
  NavigationItem,
} from "@/components/layout/navigation";

interface SidebarNavigationProps {
  items: readonly NavigationItem[];
  activeSection: NavigationId;
  onChange: (section: NavigationId) => void;
}

export function SidebarNavigation({
  items,
  activeSection,
  onChange,
}: SidebarNavigationProps) {
  return (
    <div>
      <h2 className="font-heading text-xl tracking-wide text-sky-300">
        Navigation
      </h2>

      <nav className="mt-4 space-y-1" aria-label="Sidebar">
        {items.map((item) => {
          const isActive = item.id === activeSection;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={[
                "block w-full rounded-md px-3 py-2 text-left text-sm",
                isActive
                  ? "border-l-2 border-sky-300 bg-white/10 text-slate-100"
                  : "border-l-2 border-transparent text-slate-300",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
