# CLAUDE CODE ARCADE

Claude Code 사용법을 레트로 오락실 게임 컨셉으로 알려주는 백과사전형 웹사이트.
타겟은 "코딩은 하지만 Claude Code를 `~해줘`로만 쓰던" 개발자.

## 스택

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** + CSS 변수 (`styles/globals.css`)
- **MDX 콘텐츠**: `content/*.mdx` 를 `next-mdx-remote/rsc` 로 렌더 (Nextra 미사용)
- **폰트**: Press Start 2P(타이틀) / IBM Plex Mono(본문) — `next/font/google`
- 배포 타깃: Vercel

> 참고: 초기 스캐폴드는 `nextra` 였으나, 커스텀 App Router 페이지가
> 오락실 디자인을 직접 제어해야 해서 `next-mdx-remote` 로 교체했다.

## 명령어

- 개발: `npm run dev`
- 빌드: `npm run build`
- 시작: `npm run start`
- 린트: `npm run lint`

## 디자인 토큰 (`styles/globals.css` 의 CSS 변수가 단일 진실 공급원)

```
--color-bg: #0a0a0a        배경
--color-surface: #141414   카드/섹션
--color-border: #2a2a2a    테두리
--color-neon-pink: #ff2d78
--color-neon-orange: #ff6b00
--color-neon-purple: #b829ff
--color-neon-yellow: #ffe600
--gradient-title: linear-gradient(135deg, #ff2d78, #ff6b00, #b829ff)
```

Tailwind에서 `bg-bg`, `text-neon-pink`, `border-border` 등으로 노출돼 있다
(`tailwind.config.ts` 참고). 새 색을 하드코딩하지 말고 토큰을 써라.

## 시그니처 UI 규칙

- 타이틀 텍스트는 `.text-gradient-title` (핑크→오렌지→퍼플 그라디언트)
- 카드는 `.arcade-card` + hover 시 `group-hover:border-*` / `group-hover:shadow-neon-*`
- 버튼은 각진 모서리(`rounded-none`) + 픽셀 그림자 + `:active` 눌림 효과 → `components/PixelButton.tsx`
- 전역 CRT 스캔라인은 `components/Scanline.tsx` (`.scanline` ::before/::after)
- 픽셀 폰트 클래스: `font-arcade` / 본문: `font-mono`
- 오락실 카피 적극 사용: INSERT COIN, PRESS START, CLEAR!, GAME OVER

## 디렉터리 구조

```
app/
  layout.tsx              # 폰트·네비·스캔라인·푸터
  page.tsx                # 홈 (히어로 + 스테이지 그리드)
  stages/page.tsx         # 스테이지 목록
  stages/[slug]/page.tsx  # MDX 렌더 (generateStaticParams)
  cheat-sheet/page.tsx    # 단축키/슬래시 레퍼런스
  not-found.tsx           # GAME OVER 404
components/               # StageCard, CheatTable, PixelButton, Scanline
content/*.mdx             # 스테이지 본문 (frontmatter: title, subtitle)
lib/stages.ts            # 스테이지 메타데이터(단일 소스: 카드·네비·prev/next)
lib/content.ts           # content/*.mdx 로더 (gray-matter)
styles/globals.css        # 토큰 + 스캔라인 + .arcade-prose(MDX 스타일)
```

## 콘텐츠 추가/수정 규칙

- 새 스테이지: `content/<slug>.mdx` 추가 **+** `lib/stages.ts` 의 `STAGES` 에 항목 추가.
  둘은 짝이다. slug = 파일명. 안 맞으면 카드/라우트가 깨진다.
- MDX frontmatter는 `title`, `subtitle` 만 쓴다 (페이지 헤더로 출력).
- MDX 본문 스타일은 전부 `.arcade-prose` 가 담당 — 인라인 스타일 추가 금지.
- 톤: 반말 + 오락실 카피. 정확성 우선 — 단축키/명령은 확정된 것만, 버전 의존적인 건 "확인하라"고 명시.

## 하지 말 것

- 색을 hex로 하드코딩하지 말 것 (토큰 사용)
- `content/` 와 `lib/stages.ts` 중 한쪽만 수정하지 말 것
- Nextra 테마/라우팅 되살리지 말 것 (커스텀 디자인과 충돌)
