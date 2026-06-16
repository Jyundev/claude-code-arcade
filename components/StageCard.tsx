import Link from 'next/link'
import type { Stage, NeonColor } from '@/lib/stages'

/** Per-color class bundles (Tailwind needs full class strings, not interpolation). */
const COLOR: Record<
  NeonColor,
  { text: string; border: string; glow: string; dot: string }
> = {
  pink: {
    text: 'text-neon-pink',
    border: 'group-hover:border-neon-pink',
    glow: 'group-hover:shadow-neon-pink',
    dot: 'bg-neon-pink',
  },
  orange: {
    text: 'text-neon-orange',
    border: 'group-hover:border-neon-orange',
    glow: 'group-hover:shadow-neon-orange',
    dot: 'bg-neon-orange',
  },
  purple: {
    text: 'text-neon-purple',
    border: 'group-hover:border-neon-purple',
    glow: 'group-hover:shadow-neon-purple',
    dot: 'bg-neon-purple',
  },
  yellow: {
    text: 'text-neon-yellow',
    border: 'group-hover:border-neon-yellow',
    glow: 'group-hover:shadow-[0_0_16px_var(--color-neon-yellow)]',
    dot: 'bg-neon-yellow',
  },
}

export default function StageCard({ stage }: { stage: Stage }) {
  const c = COLOR[stage.color]

  return (
    <Link
      href={`/stages/${stage.slug}`}
      className={[
        'group arcade-card relative block p-6 h-full',
        c.border,
        c.glow,
      ].join(' ')}
    >
      {stage.boss && (
        <span className="absolute -top-3 right-4 bg-bg px-2 font-arcade text-[8px] text-neon-pink animate-blink">
          ★ FINAL ★
        </span>
      )}

      <div className="mb-4 flex items-center gap-2">
        <span className={`h-2 w-2 ${c.dot}`} />
        <span className={`font-arcade text-[10px] tracking-wider ${c.text}`}>
          {stage.level}
        </span>
      </div>

      <h3 className="mb-3 text-lg font-bold leading-snug text-white">
        {stage.title}
      </h3>

      <p className="text-sm leading-relaxed text-neutral-400">{stage.blurb}</p>

      <span
        className={`mt-5 inline-block font-arcade text-[9px] tracking-wider text-neutral-600 transition-colors ${c.text.replace(
          'text-',
          'group-hover:text-',
        )}`}
      >
        PRESS START →
      </span>
    </Link>
  )
}
