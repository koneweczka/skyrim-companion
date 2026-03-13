import { IconHeart } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="mt-4 font-heading text-right text-sm text-sky-200">
      <span>Made by Koneweczka with </span>
      <IconHeart
        size={21}
        stroke={1.6}
        className="inline translate-y-px text-sky-300 fill-sky-300/25"
        role="img"
        aria-label="love"
      />
    </footer>
  );
}
