import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface StageDoc {
  slug: string
  /** Optional frontmatter fields */
  data: { title?: string; subtitle?: string; [key: string]: unknown }
  /** Raw MDX body (frontmatter stripped) */
  body: string
}

/** Returns null when no matching content/<slug>.mdx exists. */
export function getStageDoc(slug: string): StageDoc | null {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf8')
  const { data, content } = matter(raw)
  return { slug, data, body: content }
}

/** All slugs that have a content file — used for static generation. */
export function getAllContentSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
