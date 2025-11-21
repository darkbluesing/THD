export interface VideoItem {
  id: string;
  source: "youtube" | "tiktok";
  title: string;
  thumbnailUrl: string;
  permalink: string;
  authorId?: string;
  channelName?: string;
}
