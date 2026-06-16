import Link from 'next/link'
import type { ReactNode } from 'react'

type Variant = 'pink' | 'orange' | 'purple'

const VARIANT: Record<Variant, string> = {
  pink: 'border-neon-pink text-neon-pink hover:bg-neon-pink',
  orange: 'border-neon-orange text-neon-orange hover:bg-neon-orange',
  purple: 'border-neon-purple text-neon-purple hover:bg-neon-purple',
}

interface PixelButtonProps {
  children: ReactNode
  href?: string
  variant?: Variant
  className?: string
}

/**
 * Pixel-arcade button: square corners, hard pixel shadow, and a
 * "press down" effect on :active (shadow collapses, button shifts).
 * Renders an <a> (next/link) when `href` is set, else a <button>.
 */
export default function PixelButton({
  children,
  href,
  variant = 'pink',
  className = '',
}: PixelButtonProps) {
  const classes = [
    'group inline-flex items-center gap-2 select-none',
    'font-arcade text-[10px] uppercase tracking-wider leading-none',
    'px-5 py-4 border-2 bg-surface',
    'transition-all duration-100',
    'shadow-[4px_4px_0_0_var(--color-border)]',
    'hover:text-bg hover:shadow-[4px_4px_0_0_currentColor]',
    'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
    VARIANT[variant],
    className,
  ].join(' ')

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  )
}
