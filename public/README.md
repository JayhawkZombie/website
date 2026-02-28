# Static assets (images, etc.)

- **Put images here** (e.g. `public/portfolio/project1.jpg`).
- **Reference them from the root:** use `/portfolio/project1.jpg` in `src` (no `public` in the path).
- **Use the Next.js `Image` component** so images are optimized (resized, WebP/AVIF, lazy-loaded). Large originals are fine; Next.js serves optimized variants.

**Example (local image):**

```tsx
import Image from "next/image";

<Image src="/portfolio/project1.jpg" alt="Project" width={800} height={450} />;
```

For **external images**, add `remotePatterns` in `next.config.js` (see Next.js docs).
