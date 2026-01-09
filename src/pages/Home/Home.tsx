import { ContentArea } from "@/components/ContentArea";
import { Sidebar } from "@/components/Sidebar";
import { IconHeartFilled } from "@tabler/icons-react";

export function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-350 p-4 md:p-6">
        <div className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-center shadow-lg">
          <h1 className="font-heading text-2xl md:text-3xl tracking-wide text-slate-100">
            Skyrim Companion
          </h1>
        </div>

        <div className="mt-4 flex min-h-[calc(100vh-160px)] gap-4">
          <Sidebar />
          <ContentArea />
        </div>

        <footer className="mt-4 text-right text-sm text-slate-400">
          Made by Koneweczka with{" "}
          <IconHeartFilled className="inline translate-y-px fill-amber-400" />
        </footer>
      </div>
    </div>
  );
}
