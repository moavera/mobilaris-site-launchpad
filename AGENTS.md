# Architecture rules

- Keep the corporate strip and product navigation in the shared Navigation component, with one link list for desktop and mobile, so all pages stay consistent.

- Implement the hero's decorative motion with transform-only CSS animations and respect reduced-motion preferences; this avoids per-frame React updates and pointer-dependent behavior.
- Light-section colors come from the `--paper`, `--card-light`, `--ink` and `--brand` tokens in `src/index.css` (mirrored in `tailwind.config.ts`); use those classes instead of literal hex or `text-white`/`bg-white` so the palette stays in one place.
- Opacity modifiers on token colors only work for values in Tailwind's scale (steps of 5) or bracket syntax (`text-ink/[0.42]`); an out-of-scale bare value (`text-ink/42`) generates no CSS and the text silently inherits the page colour, so always verify computed colour after adding one.
- A character the page's font does not contain (a symbol used as a figure, e.g. the infinity sign in the stats) must be drawn as an inline SVG with an explicit stroke width, never left to a browser font fallback — fallback glyphs resolve to a different face on every machine, so their weight and size cannot be kept level with the neighbouring text.