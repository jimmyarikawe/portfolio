import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { articles } from "@/data/articles";
import { parseArticleContent } from "@/lib/utils";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} — Jimmy Arikawe Journal`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} — Jimmy Arikawe Journal`,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function SingleArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <ReadingProgressBar />
      <article className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-10 pt-12 md:pt-16">
      {/* Back link */}
      <Link
        href="/journal"
        className="inline-flex items-center gap-2 text-xs font-mono-accent text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to all articles</span>
      </Link>

      {/* Header */}
      <div className="space-y-6 pb-12 border-b border-black/5 dark:border-white/10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-mono-accent">
            {article.category}
          </span>
          <span className="px-3 py-1 rounded bg-neutral-100 dark:bg-white/10 text-neutral-800 dark:text-neutral-200 text-xs font-mono-accent">
            {article.date}
          </span>
          <span className="px-3 py-1 rounded bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-400 text-xs font-mono-accent">
            {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-3 pt-4 text-xs font-mono-accent text-neutral-500 dark:text-neutral-400">
          <span>By Jimmy Arikawe</span>
          <span>·</span>
          <span>Product Designer & Manager, Creative & AI Technologist</span>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-12 prose prose-neutral dark:prose-invert max-w-none space-y-6 text-neutral-800 dark:text-neutral-200 leading-relaxed text-base sm:text-lg">
        {parseArticleContent(article.content).map((block, i) =>
          block.type === "heading" ? (
            <h3
              key={i}
              className="text-2xl font-medium tracking-tight text-neutral-950 dark:text-white pt-6 mb-2"
            >
              {block.text}
            </h3>
          ) : (
            <p key={i} className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {block.text}
            </p>
          )
        )}
      </div>

      {/* Author Callout Box */}
      <div className="editorial-card p-8 rounded mt-12 mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 block">
            About the Author
          </span>
          <h4 className="text-lg font-medium text-neutral-950 dark:text-white">
            Jimmy Arikawe
          </h4>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-md">
            Product Designer & Manager, Creative & AI Technologist with an MSc in Artificial Intelligence (Distinction). Designing and engineering high-scale products.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs font-mono-accent hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shrink-0"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
    </>
  );
}
