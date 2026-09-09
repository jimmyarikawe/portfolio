import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ArticleBlock = { type: "heading" | "paragraph"; text: string };

/**
 * Splits lightweight article content into heading/paragraph blocks.
 *
 * Content isn't required to put a blank line between a "### Heading" line
 * and its body text — splitting on "\n\n" alone would then lump the heading
 * and the paragraph that immediately follows it into one block. This walks
 * line by line instead, so a heading always ends its own block regardless of
 * whether the next line is blank.
 */
export function parseArticleContent(content: string): ArticleBlock[] {
  const blocks: ArticleBlock[] = [];
  let buffer: string[] = [];

  const flush = () => {
    if (buffer.length) {
      blocks.push({ type: "paragraph", text: buffer.join(" ") });
      buffer = [];
    }
  };

  for (const rawLine of content.split("\n")) {
    const line = rawLine.trim();
    if (!line) {
      flush();
      continue;
    }
    if (line.startsWith("### ")) {
      flush();
      blocks.push({ type: "heading", text: line.slice(4) });
    } else {
      buffer.push(line);
    }
  }
  flush();

  return blocks;
}

/**
 * The single aspect ratio every project cover is framed in — the /work grid,
 * the home page showcase and "more work" grid, the case-study hero, the
 * gallery strip and the prev/next cards.
 *
 * It lives here because it previously did not: the grids and the hero used
 * 16/10 while the two horizontal scrollers used 860/620, so the same cover was
 * a different shape depending on which page you met it on. Import this rather
 * than writing the class inline, so the ratio cannot drift apart again.
 *
 * Covers currently range from 1.387 to 1.778, and every frame pairs this with
 * `object-contain` — so an image letterboxes onto `bg-frame` (which is
 * theme-aware) instead of being cropped. `object-cover` would fill the frame
 * edge to edge but would clip roughly 10-13% off the tallest and widest
 * covers, which on a UI screenshot means cutting off real interface.
 */
export const MEDIA_FRAME = "aspect-16/10";
