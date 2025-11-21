import type { VideoItem } from "./types";

export const MOCK_VIDEOS: VideoItem[] = [
  {
    id: "mock-youtube-1",
    source: "youtube",
    title: "Mock YouTube Video 1",
    thumbnailUrl: "/placeholders/placeholder-youtube.svg",
    permalink: "https://www.youtube.com/shorts/mock-youtube-1",
    authorId: "mock-author-1",
    channelName: "Mock Channel 1",
  },
  {
    id: "mock-youtube-2",
    source: "youtube",
    title: "Mock YouTube Video 2",
    thumbnailUrl: "/placeheaders/placeholder-youtube.svg",
    permalink: "https://www.youtube.com/shorts/mock-youtube-2",
    authorId: "mock-author-2",
    channelName: "Mock Channel 2",
  },
  {
    id: "mock-tiktok-1",
    source: "tiktok",
    title: "Mock TikTok Video 1",
    thumbnailUrl: "/placeholders/placeholder-tiktok.svg",
    permalink: "https://www.tiktok.com/@mock/video/1",
    authorId: "@mock",
    channelName: "@mock",
  },
];
