"use client";

import Image from "next/image";
import { SideBanner } from "@/components/SideBanner";
import { AffiliateProductList } from "@/components/AffiliateProductList";

export default function Home() {
  return (
    <div className="relative isolate overflow-visible">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="mx-auto h-full w-full max-w-5xl bg-[radial-gradient(circle_at_top,rgba(137,179,255,0.35),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative z-10 min-h-screen w-full px-4 py-10 sm:px-6 lg:px-0">
        <div className="mx-auto w-full max-w-[1600px] px-2 sm:px-4 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center text-white">
            <div className="flex items-center justify-center gap-4">
              <Image
                alt="오늘의 핫딜모닝 로고"
                className="h-12 w-auto sm:h-16"
                height={128}
                src="/핫모닝.png"
                width={128}
                priority
              />
              <h2 className="text-5xl font-bold">오늘의 핫딜모닝</h2>
            </div>
          </div>

          <main className="mt-8 grid w-full grid-cols-1 items-start gap-6 lg:mt-10 lg:grid-cols-[200px_minmax(0,1fr)_200px]">
            <div className="hidden self-start justify-self-start lg:ml-6 lg:block">
              <SideBanner position="left" />
            </div>
            <div className="self-start justify-self-center w-full">
              <p className="mb-8 text-center text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                <span className="bg-gradient-to-r from-kdh-neon-purple via-kdh-electric-blue to-kdh-ember bg-clip-text text-transparent">
                  향기로운 남자가 되어보자!
                </span>{" "}
                남자 냄새제거 4종 세트
              </p>
              <AffiliateProductList />
            </div>
            <div className="hidden self-start justify-self-end lg:mr-6 lg:block">
              <SideBanner position="right" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
