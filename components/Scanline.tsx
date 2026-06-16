/**
 * CRT scanline + vignette overlay.
 * Renders nothing visible itself — it just attaches the `.scanline`
 * class (see styles/globals.css ::before / ::after) to a fixed,
 * pointer-events-none layer that sits above all content.
 */
export default function Scanline() {
  return <div className="scanline" aria-hidden="true" />
}
