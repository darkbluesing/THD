import type { VideoItem, VideoSource } from "@/lib/types";
import { MOCK_VIDEOS } from "@/lib/mockVideos";
import { shuffleItems } from "@/lib/shuffle";

const YOUTUBE_FALLBACK = MOCK_VIDEOS.filter((video) => video.source === "youtube");
const TIKTOK_FALLBACK = MOCK_VIDEOS.filter((video) => video.source === "tiktok");

function interleaveCollections(primary: VideoItem[], secondary: VideoItem[]): VideoItem[] {
  const maxLength = Math.max(primary.length, secondary.length);
  const result: VideoItem[] = [];
  const seen = new Set<string>();

  for (let index = 0; index < maxLength; index += 1) {
    const first = primary[index];
    const second = secondary[index];

    if (first) {
      const key = `${first.source}:${first.id}`;
      if (!seen.has(key)) {
        seen.add(key);
        result.push(first);
      }
    }

    if (second) {
      const key = `${second.source}:${second.id}`;
      if (!seen.has(key)) {
        seen.add(key);
        result.push(second);
      }
    }
  }

  return result;
}

export async function fetchVideosBySource(source: VideoSource): Promise<VideoItem[]> {
  if (source === "youtube") {
    return YOUTUBE_FALLBACK;
  }

  if (source === "tiktok") {
    return TIKTOK_FALLBACK;
  }

  return MOCK_VIDEOS.filter((video) => video.source === source);
}

export async function fetchCombinedVideos(): Promise<VideoItem[]> {
  const interleaved = interleaveCollections(YOUTUBE_FALLBACK, TIKTOK_FALLBACK);
  return interleaved.length ? interleaved : shuffleItems(MOCK_VIDEOS);
}
