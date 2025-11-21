import Image from "next/image";
import Link from "next/link";
import type { AdItem } from "@/lib/types";
import clsx from "clsx";

const accentFrames = [
  "from-rose-500/20 via-rose-400/5 to-transparent border-rose-400/40",
  "from-emerald-500/20 via-emerald-400/5 to-transparent border-emerald-400/40",
  "from-sky-500/20 via-sky-400/5 to-transparent border-sky-400/40",
  "from-amber-500/20 via-amber-400/5 to-transparent border-amber-400/40",
];

const badgeLabels = [
  "Santa certified",
  "Trending stocking stuffer",
  "K-Style essential",
  "Collector pick",
];

export interface GiftTileProps {
  ad: AdItem;
  index: number;
}

export function GiftTile({ ad, index }: GiftTileProps) {
  const accent = accentFrames[index % accentFrames.length];
  const badge = badgeLabels[index % badgeLabels.length];

  return (
    <Link
      className={clsx(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-gradient-to-br",
        accent,
        "shadow-[0_25px_70px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-white/40"
      )}
      href={ad.url}
      rel="noreferrer sponsored"
      target="_blank"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-black/30">
        <Image
          alt={ad.title}
          className="object-cover transition duration-500 group-hover:scale-105"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          src={ad.image}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/50 px-4 py-1 text-[11px] uppercase tracking-[0.35em] text-white/80">
          {badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-6 pb-6 pt-5">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-slate-300/70">Gift idea</p>
          <h2 className="mt-2 text-lg font-semibold leading-snug text-white">{ad.title}</h2>
        </div>
        <div className="mt-auto flex items-center justify-between text-sm text-slate-300">
          <span className="text-[12px] uppercase tracking-[0.35em] text-slate-300/70">Amazon</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white transition group-hover:border-white group-hover:text-white">
            {ad.cta}
            <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
