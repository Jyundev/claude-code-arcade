import type { Metadata } from 'next'
import StageCard from '@/components/StageCard'
import { STAGES } from '@/lib/stages'

export const metadata: Metadata = {
  title: 'STAGES — CLAUDE CODE ARCADE',
  description: '전체 스테이지 목록. 1번부터 보스까지 순서대로 클리어하자.',
}

export default function StagesPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-4">
        <span className="font-arcade text-[9px] tracking-[0.3em] text-neon-purple">
          WORLD MAP
        </span>
        <h1 className="text-gradient-title font-arcade text-2xl leading-[1.4] sm:text-3xl">
          STAGE SELECT
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-neutral-400">
          위에서부터 차례로 클리어하면 가장 빠르다. 급하면 필요한 스테이지로
          바로 점프해도 OK. 보스는 팀 단위로 쓸 때의 끝판왕.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {STAGES.map((stage) => (
          <StageCard key={stage.slug} stage={stage} />
        ))}
      </div>
    </div>
  )
}
