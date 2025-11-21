import type { VideoItem } from "./types";

interface TikTokReel {
  permalink: string;
  thumbnail_url: string;
  caption: string;
}

export interface StaticTikTokPayload {
  fetched_at: number;
  count: number;
  reels: TikTokReel[];
}

function extractAuthorFromPermalink(permalink: string): string | undefined {
  try {
    const url = new URL(permalink);
    const authorMatch = url.pathname.match(/^\/(@[^/]+)/);
    return authorMatch?.[1];
  } catch (e) {
    return undefined;
  }
}

export function extractTikTokVideos(payload: StaticTikTokPayload | null): VideoItem[] {
  if (!payload?.reels) {
    return [];
  }

  return payload.reels.map((reel) => {
    const videoIdMatch = reel.permalink.match(/video\/(\d+)/);
    const authorId = extractAuthorFromPermalink(reel.permalink);

    return {
      id: videoIdMatch ? videoIdMatch[1] : reel.permalink,
      source: "tiktok",
      title: reel.caption,
      thumbnailUrl: reel.thumbnail_url,
      permalink: reel.permalink,
      authorId: authorId,
      channelName: authorId,
    };
  });
}
