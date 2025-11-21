"use client";

const COUPANG_WIDGET_IDS = [944201, 944211, 944204, 944207];

export function AffiliateProductList() {
  return (
    <div className="mx-auto flex w-full flex-col gap-4 lg:w-4/5">
      {COUPANG_WIDGET_IDS.map((widgetId, index) => (
        <div
          className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-4 text-gray-900 shadow-sm"
          key={`coupang-affiliate-${widgetId}-${index}`}
        >
          <div className="w-full max-w-[680px]">
            <iframe
              data-browsingtopics=""
              className="h-[100px] w-full"
              frameBorder="0"
              height={100}
              scrolling="no"
              src={`https://ads-partners.coupang.com/widgets.html?id=${widgetId}&template=carousel&trackingCode=AF2649972&subId=&width=680&height=100&tsource=`}
              title={`Coupang affiliate carousel ${index + 1}`}
              referrerPolicy="unsafe-url"
              width={680}
            />
          </div>
        </div>
      ))}
      <p className="pt-2 text-center text-xs text-gray-500">
        이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를
        제공받습니다.
      </p>
    </div>
  );
}
