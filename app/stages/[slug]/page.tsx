import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getStageDoc, getAllContentSlugs } from '@/lib/content'
import { STAGES, getStage } from '@/lib/stages'

export function generateStaticParams() {
  return getAllContentSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const stage = getStage(slug)
  const doc = getStageDoc(slug)
  const title = (doc?.data.title as string) ?? stage?.title ?? slug
  return {
    title: `${title} — CLAUDE CODE ARCADE`,
    description: stage?.blurb,
  }
}

export default async function StageDocPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = getStageDoc(slug)
  if (!doc) notFound()

  const stage = getStage(slug)
  const index = STAGES.findIndex((s) => s.slug === slug)
  const prev = index > 0 ? STAGES[index - 1] : null
  const next =
    index >= 0 && index < STAGES.length - 1 ? STAGES[index + 1] : null

  const title = (doc.data.title as string) ?? stage?.title ?? slug
  const subtitle = (doc.data.subtitle as string) ?? stage?.blurb

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/stages"
        className="font-arcade text-[9px] tracking-wider text-neutral-500 transition-colors hover:text-neon-pink"
      >
        ← STAGE SELECT
      </Link>

      <header className="mt-6 border-b border-border pb-8">
        {stage && (
          <span className="font-arcade text-[10px] tracking-wider text-neon-orange">
            {stage.level}
          </span>
        )}
        <h1 className="text-gradient-title mt-4 font-arcade text-xl leading-[1.5] sm:text-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            {subtitle}
          </p>
        )}
      </header>

      <div className="arcade-prose mt-10">
        <MDXRemote source={doc.body} />
      </div>

      {/* ---------- prev / next ---------- */}
      <nav className="mt-16 grid grid-cols-2 gap-4 border-t border-border pt-8">
        {prev ? (
          <Link
            href={`/stages/${prev.slug}`}
            className="arcade-card group p-4 hover:border-neon-purple"
          >
            <span className="font-arcade text-[8px] text-neutral-500">
              ← PREV
            </span>
            <p className="mt-2 text-sm text-neutral-300 group-hover:text-white">
              {prev.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/stages/${next.slug}`}
            className="arcade-card group p-4 text-right hover:border-neon-pink"
          >
            <span className="font-arcade text-[8px] text-neutral-500">
              NEXT →
            </span>
            <p className="mt-2 text-sm text-neutral-300 group-hover:text-white">
              {next.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  )
}
