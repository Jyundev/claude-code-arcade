import fs from 'node:fs'
import path from 'node:path'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface StageDoc {
  slug: string
  /** Optional frontmatter fields */
  data: { title?: string; subtitle?: string; [key: string]: unknown }
  /** Raw MDX body (frontmatter stripped) */
  body: string
}

/**
 * Minimal frontmatter parser for our own trusted content files.
 * Supports a leading `---` block of single-line `key: value` pairs,
 * with optional surrounding single/double quotes on the value.
 * (Intentionally avoids a full YAML lib — our frontmatter is flat
 * key/value only, so there is no need for one.)
 */
function parseFrontmatter(raw: string): {
  data: Record<string, string>
  body: string
} {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw)
  if (!match) return { data: {}, body: raw }

  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const kv = /^([A-Za-z0-9_-]+)\s*:\s*(.*)$/.exec(line)
    if (!kv) continue
    let value = kv[2].trim()
    if (
      (value.startsWith("'") && value.endsWith("'")) ||
      (value.startsWith('"') && value.endsWith('"'))
    ) {
      value = value.slice(1, -1)
    }
    data[kv[1]] = value
  }

  return { data, body: raw.slice(match[0].length) }
}

/** Returns null when no matching content/<slug>.mdx exists. */
export function getStageDoc(slug: string): StageDoc | null {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf8')
  const { data, body } = parseFrontmatter(raw)
  return { slug, data, body }
}

/** All slugs that have a content file — used for static generation. */
export function getAllContentSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
