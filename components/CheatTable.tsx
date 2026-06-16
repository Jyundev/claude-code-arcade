import type { NeonColor } from '@/lib/stages'

export interface CheatRow {
  /** The key combo or command, e.g. "Ctrl + C" or "/clear" */
  combo: string
  /** What it does */
  desc: string
}

interface CheatTableProps {
  title: string
  rows: CheatRow[]
  color?: NeonColor
}

const HEAD: Record<NeonColor, string> = {
  pink: 'text-neon-pink border-neon-pink',
  orange: 'text-neon-orange border-neon-orange',
  purple: 'text-neon-purple border-neon-purple',
  yellow: 'text-neon-yellow border-neon-yellow',
}

/** Terminal-style reference table with a neon header bar. */
export default function CheatTable({
  title,
  rows,
  color = 'pink',
}: CheatTableProps) {
  return (
    <section className="arcade-card overflow-hidden">
      <header
        className={`flex items-center gap-2 border-b-2 bg-surface px-4 py-3 ${HEAD[color]}`}
      >
        <span className="font-arcade text-[10px] tracking-wider">{title}</span>
      </header>

      <table className="w-full border-collapse text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.combo}
              className={
                i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.015]'
              }
            >
              <td className="w-px whitespace-nowrap border-b border-border px-4 py-3 align-top">
                <kbd className="inline-block border border-border bg-bg px-2 py-1 font-mono text-xs text-neon-yellow shadow-[2px_2px_0_0_var(--color-border)]">
                  {row.combo}
                </kbd>
              </td>
              <td className="border-b border-border px-4 py-3 align-middle text-neutral-300">
                {row.desc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
