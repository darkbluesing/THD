import { GiftTile } from "@/components/GiftTile";
import { adsList } from "@/data/adsList";
import type { AdItem } from "@/lib/types";

const curatedAds: AdItem[] = adsList.filter((ad) => Boolean(ad.image?.trim()));

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#02040A] via-[#050A15] to-[#050608] text-white">
      <div className="relative isolate overflow-hidden border-b border-white/5 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.24),_transparent_60%)]">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-rose-200/80">Holiday edition</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Christmas Gift Grid World</h1>
          <p className="text-base text-slate-300 sm:text-lg">
            영상 크롤링 없이 광고 썸네일만 깔끔하게 정리된 홀리데이 기프트 월입니다. adsList에서 필요한 항목만
            골라 빠르게 레퍼런스로 활용해 보세요.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-[11px] uppercase tracking-[0.4em] text-slate-200/70">
            <span className="rounded-full border border-white/15 px-4 py-2">All ads</span>
            <span className="rounded-full border border-white/15 px-4 py-2">Realtime updates off</span>
            <span className="rounded-full border border-white/15 px-4 py-2">Thumbnails only</span>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {curatedAds.map((ad, index) => (
            <GiftTile ad={ad} index={index} key={ad.id} />
          ))}
        </div>

        {!curatedAds.length ? (
          <p className="mt-12 text-center text-sm text-slate-400">
            광고 데이터가 아직 준비되지 않았어요. 조금 후에 다시 방문해주세요!
          </p>
        ) : null}
      </section>
    </main>
  );
}
