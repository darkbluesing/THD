# Christmas Gift Grid World

단일 썸네일 그리드 기반의 크리스마스 기프트 브라우저입니다. 기존 KDH 프론트엔드 프로젝트에서 광고 데이터 구조만 가져와서, 영상 크롤링이나 모달 기능 없이 제품 카드만 렌더링하도록 최소 구성으로 정리한 Next.js 14 앱입니다.

## 주요 특징

- `src/data/adsList.data.json`에 정의된 광고 아이템만 사용
- Tailwind CSS 기반의 3열 반응형 카드 그리드
- 이미지/CTA 버튼만 포함된 심플한 UI
- Amazon 이미지를 사용할 수 있도록 `next/image` remote 패턴 설정

## 사용 방법

```bash
cd "Christmas Gift Grid World"
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 열면 썸네일 그리드를 확인할 수 있습니다.
