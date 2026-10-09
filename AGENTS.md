# Architecture rules

- Implement the hero's decorative motion with transform-only CSS animations and respect reduced-motion preferences; this avoids per-frame React updates and pointer-dependent behavior.
- Light-section colors come from the `--paper`, `--card-light`, `--ink` and `--brand` tokens in `src/index.css` (mirrored in `tailwind.config.ts`); use those classes instead of literal hex or `text-white`/`bg-white` so the palette stays in one place.
- Opacity modifiers on token colors only work for values in Tailwind's scale (steps of 5) or bracket syntax (`text-ink/[0.42]`); an out-of-scale bare value (`text-ink/42`) generates no CSS and the text silently inherits the page colour, so always verify computed colour after adding one.