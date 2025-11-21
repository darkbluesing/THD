const COUPANG_BANNER_URL = "https://link.coupang.com/a/c6xCww";
const COUPANG_BANNER_IMAGE =
  "https://img1c.coupangcdn.com/image/affiliate/event/promotion/2025/11/20/42cfaa481b9f00f401cf9975068f7610.png";
const COUPANG_SECOND_BANNER_URL = "https://link.coupang.com/a/c6xG7H";
const COUPANG_SECOND_BANNER_IMAGE =
  "https://image4.coupangcdn.com/image/affiliate/event/promotion/2025/11/19/eefbe8c0bf6100f8018517cb094f7b90.png";
const COUPANG_THIRD_LEFT_URL = "https://link.coupang.com/a/c6xTaX";
const COUPANG_THIRD_LEFT_IMAGE =
  "https://img4a.coupangcdn.com/image/affiliate/event/promotion/2025/11/11/9effdfd7be91006001e94dcb7698879b.png";

const LEFT_BANNERS = [
  {
    href: COUPANG_BANNER_URL,
    imageSrc: COUPANG_BANNER_IMAGE,
    alt: "쿠팡 향기로운 남자 필수템 배너",
  },
  {
    href: COUPANG_SECOND_BANNER_URL,
    imageSrc: COUPANG_SECOND_BANNER_IMAGE,
    alt: "쿠팡 두번째 추천 배너",
  },
  {
    href: COUPANG_THIRD_LEFT_URL,
    imageSrc: COUPANG_THIRD_LEFT_IMAGE,
    alt: "쿠팡 좌측 배너 3",
  },
];

const COUPANG_RIGHT_FIRST_URL = "https://link.coupang.com/a/c6xPox";
const COUPANG_RIGHT_FIRST_IMAGE =
  "https://static.coupangcdn.com/image/affiliate/event/promotion/2025/11/19/58fb6ac076610022018504cb094e0a79.png";
const COUPANG_RIGHT_SECOND_URL = "https://link.coupang.com/a/c6xP5Y";
const COUPANG_RIGHT_SECOND_IMAGE =
  "https://image8.coupangcdn.com/image/affiliate/event/promotion/2025/11/20/96cfc648ad9f002801cfa1750690d7a7.png";
const COUPANG_RIGHT_THIRD_URL = "https://link.coupang.com/a/c6xUiz";
const COUPANG_RIGHT_THIRD_IMAGE =
  "https://image11.coupangcdn.com/image/affiliate/event/promotion/2025/10/20/4155b759987100f101afe3eebd196f2f.png";

const RIGHT_BANNERS = [
  {
    href: COUPANG_RIGHT_FIRST_URL,
    imageSrc: COUPANG_RIGHT_FIRST_IMAGE,
    alt: "쿠팡 우측 배너 1",
  },
  {
    href: COUPANG_RIGHT_SECOND_URL,
    imageSrc: COUPANG_RIGHT_SECOND_IMAGE,
    alt: "쿠팡 우측 배너 2",
  },
  {
    href: COUPANG_RIGHT_THIRD_URL,
    imageSrc: COUPANG_RIGHT_THIRD_IMAGE,
    alt: "쿠팡 우측 배너 3",
  },
];

const BANNER_COUNT = 3;

type BannerPosition = "left" | "right";

type SideBannerProps = {
  position: BannerPosition;
};

const cardBaseClass =
  "flex w-full flex-col items-center justify-center rounded-xl border border-white/15 bg-gray-900/70 text-center text-white shadow-banner";

export function SideBanner({ position }: SideBannerProps) {
  return (
    <div className="hidden lg:flex lg:flex-col lg:gap-4">
      {Array.from({ length: BANNER_COUNT }).map((_, index) => {
        const bannerList = position === "left" ? LEFT_BANNERS : RIGHT_BANNERS;
        const banner = bannerList[index];
        if (banner) {
          return (
            <a
              key={`${position}-${index}`}
              className={`${cardBaseClass} overflow-hidden p-0 transition hover:scale-[1.02] hover:shadow-neon`}
              href={banner.href}
              rel="sponsored noopener"
              target="_blank"
            >
              <img
                alt={banner.alt}
                className="h-auto w-full object-contain"
                height={800}
                loading="lazy"
                src={banner.imageSrc}
                width={800}
              />
            </a>
          );
        }

        return (
          <div key={`${position}-${index}`} className={`${cardBaseClass} min-h-[240px] px-3`}>
            Ad Banner
          </div>
        );
      })}
    </div>
  );
}
