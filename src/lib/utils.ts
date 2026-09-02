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
