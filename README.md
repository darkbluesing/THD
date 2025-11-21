# 오늘의 핫딜모닝 (Hot Deal Morning)

Next.js 기반으로 구축된 향기 케어 테마 어필리에이트 랜딩 페이지입니다. 좌우 쿠팡 광고 배너와 중앙 어필리에이트 리스트를 통해 최신 프로모션을 노출하고, 반응형 레이아웃으로 데스크톱과 모바일 모두에서 자연스럽게 보여집니다.

## 주요 기능

- **중앙 어필리에이트 리스트**: 쿠팡 파트너스 캐러셀 위젯 4종을 배치하고, 고지 문구로 제휴 수수료 안내를 제공합니다.
- **좌·우측 사이드 배너**: 지정된 쿠팡 링크/이미지를 그대로 출력하여 브랜드 이미지를 유지합니다.
- **헤더 및 로고 영역**: "오늘의 핫딜모닝" 로고와 메인 카피를 강조하여 페이지 상단에서 집중도를 높입니다.
- **Tailwind + Next App Router**: `frontend/` 폴더에 모든 UI/서비스 코드가 모여 있어 유지보수가 간단합니다.

## 폴더 구조

```
frontend/
├── public/              # 정적 에셋 (로고, OG 이미지 등)
├── src/
│   ├── app/             # Next.js App Router 엔트리 (layout, page, API route)
│   ├── components/      # 재사용 가능한 UI 컴포넌트
│   ├── services/        # (옵션) API 연동/유틸
│   └── styles/          # 디자인 토큰 등
├── tests/               # Playwright/단위 테스트 (필요 시)
└── package.json         # 프론트엔드 설정/스크립트
```

루트에는 Vercel 배포 설정(`vercel.json`)과 에이전트 가이드(`AGENTS.md`, `GEMINI.md`)만 남겨 불필요한 레거시 자산을 제거했습니다.

## 설치 및 실행

```bash
cd frontend
npm install       # 최초 1회
npm run dev       # http://localhost:3000
```

다른 스크립트:

- `npm run build` – 프로덕션 번들 생성
- `npm run lint` – ESLint 검사
- `npm run test:unit` – TypeScript 단위 테스트 (필요 시)

## 배포 메모

- Vercel 프로젝트 루트는 `frontend/`로 설정합니다.
- Python 함수 런타임이 필요할 경우 `vercel.json`에서 `python3.11`을 사용합니다.
- `.env` 또는 API 키 파일은 절대 커밋하지 않고 Vercel 환경 변수에 등록합니다.

## 라이선스 / 기타

이 저장소는 사내/개인용 어필리에이트 랜딩 페이지 예제로 사용됩니다. 필요한 경우 자유롭게 수정해 사용하되, 쿠팡 파트너스 정책을 준수해주세요.
