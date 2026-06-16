export type NeonColor = 'pink' | 'orange' | 'purple' | 'yellow'

export interface Stage {
  /** Route slug under /stages/[slug] and the content/<slug>.mdx filename */
  slug: string
  /** Display label e.g. "STAGE 1" or "BOSS" */
  level: string
  title: string
  blurb: string
  color: NeonColor
  /** true → render as the special boss card */
  boss?: boolean
}

export const STAGES: Stage[] = [
  {
    slug: 'stage-1-prompting',
    level: 'STAGE 1',
    title: '이렇게 시키면 달라진다',
    blurb: '"~해줘"를 졸업하는 대화 방식. 제약 → 범위 → 단계.',
    color: 'pink',
  },
  {
    slug: 'stage-2-shortcuts',
    level: 'STAGE 2',
    title: '알아두면 10배 편한 단축키',
    blurb: '손이 키보드를 떠나지 않게. 필수 키바인딩 모음.',
    color: 'orange',
  },
  {
    slug: 'stage-3-slash-commands',
    level: 'STAGE 3',
    title: '슬래시 커맨드 완전 정복',
    blurb: '/init, /clear, /review… 빌트인부터 커스텀까지.',
    color: 'purple',
  },
  {
    slug: 'stage-4-claude-md',
    level: 'STAGE 4',
    title: 'CLAUDE.md 세팅법',
    blurb: '매번 설명하지 마라. 프로젝트 컨텍스트를 한 번에.',
    color: 'yellow',
  },
  {
    slug: 'stage-5-models',
    level: 'STAGE 5',
    title: '모델 선택 가이드',
    blurb: 'Opus / Sonnet / Haiku — 언제 뭘 쓸까.',
    color: 'pink',
  },
  {
    slug: 'boss-team',
    level: 'BOSS',
    title: '팀이랑 같이 쓸 때',
    blurb: '공유 설정, 컨벤션, 리뷰 루프. 최종 보스를 잡아라.',
    color: 'purple',
    boss: true,
  },
]

export function getStage(slug: string): Stage | undefined {
  return STAGES.find((s) => s.slug === slug)
}
