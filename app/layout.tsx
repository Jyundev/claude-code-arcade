import type { Metadata } from 'next'
import { Press_Start_2P, IBM_Plex_Mono, Noto_Sans_KR } from 'next/font/google'
import Link from 'next/link'
import Scanline from '@/components/Scanline'
import '../styles/globals.css'

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

// Korean body fallback. `subsets: ['latin']` controls preload only —
// Google's @font-face rules still cover Korean unicode-ranges, fetched
// on demand. preload:false avoids preloading the large CJK file.
const notoSansKR = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: 'CLAUDE CODE ARCADE',
  description: '"~해줘" 말고, 제대로 써보자 — Claude Code 사용법 오락실',
}

const NAV = [
  { href: '/', label: 'ARCADE' },
  { href: '/stages', label: 'STAGES' },
  { href: '/cheat-sheet', label: 'CHEAT SHEET' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ko"
      className={`${pressStart.variable} ${plexMono.variable} ${notoSansKR.variable}`}
    >
      <body className="min-h-screen antialiased">
        <Scanline />

        <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
            <Link
              href="/"
              className="font-arcade text-[11px] leading-none text-gradient-title"
            >
              CC&nbsp;ARCADE
            </Link>
            <ul className="flex items-center gap-4 sm:gap-7">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-arcade text-[9px] tracking-wider text-neutral-400 transition-colors hover:text-neon-pink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-5 py-12 sm:py-16">{children}</main>

        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-10 text-center">
            <span className="font-arcade text-[8px] leading-relaxed text-neutral-600">
              © 2026 CLAUDE CODE ARCADE — INSERT COIN TO CONTINUE
            </span>
            <span className="text-xs text-neutral-700">
              made for devs who used to just say &quot;~해줘&quot;
            </span>
          </div>
        </footer>
      </body>
    </html>
  )
}
