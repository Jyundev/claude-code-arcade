import PixelButton from '@/components/PixelButton'

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-8 text-center">
      <h1 className="font-arcade text-2xl leading-relaxed text-neon-pink sm:text-4xl">
        GAME
        <br />
        OVER
      </h1>
      <p className="font-arcade text-[10px] tracking-wider text-neutral-500">
        404 — 이 스테이지는 존재하지 않는다
      </p>
      <PixelButton href="/" variant="purple">
        ← BACK TO ARCADE
      </PixelButton>
    </div>
  )
}
