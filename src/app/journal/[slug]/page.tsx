import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
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

      <article className="site-col">
        <div className="mt-20 sm:mt-22">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-dim transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to all articles</span>
          </Link>

          <h1 className="mt-6 font-display text-balance text-[28px] font-medium leading-8.25 sm:text-[34px] sm:leading-9.5 wide:text-[42px] wide:leading-10.75">
            {article.title}
          </h1>

          <p className="mt-2.5 text-[13px] font-medium text-dim sm:mt-3">
            {article.category} · {article.date} · {article.readTime}
          </p>

          <p className="mt-3.5 text-[17px] leading-6 text-muted sm:mt-4.5 sm:text-[20px] sm:leading-7 wide:mt-6.25 wide:text-[24px] wide:leading-8">
            {article.excerpt}
          </p>

          <p className="mt-5 text-[13px] font-medium text-dim sm:mt-6">
            By Jimmy Arikawe · Product Designer &amp; Manager, Creative &amp; AI
            Technologist
          </p>
        </div>

        {/*
          Long-form prose gets a measure of its own — the one place the 860px
          column is narrowed further, because a 21px paragraph running the full
          column is past a comfortable line length.
        */}
        <div className="mt-12 max-w-[65ch] sm:mt-18 wide:mt-22.5">
          {parseArticleContent(article.content).map((block, i) =>
            block.type === "heading" ? (
              <h3
                key={i}
                className="mb-2.5 text-[16px] font-medium sm:text-[17px] wide:text-[19px]"
              >
                {block.text}
              </h3>
            ) : (
              <p
                key={i}
                className="mb-5 text-[17px] leading-6.5 text-muted sm:mb-6 sm:text-[19px] sm:leading-7 wide:mb-7.5 wide:text-[21px] wide:leading-7.5"
              >
                {block.text}
              </p>
            )
          )}
        </div>

        <div className="mt-12 border-t border-rule pt-9 sm:mt-18 wide:mt-22.5">
          <h2 className="mb-3 text-[17px] font-medium sm:mb-4 sm:text-[18px] wide:text-[20px]">
            About the Author
          </h2>

          <h3 className="text-[16px] font-medium sm:text-[17px] wide:text-[19px]">
            Jimmy Arikawe
          </h3>

          <p className="mt-1 text-[16px] leading-6 text-soft sm:max-w-110 sm:text-[17px] wide:text-[18px] wide:leading-7">
            Product Designer &amp; Manager, Creative &amp; AI Technologist with
            an MSc in Artificial Intelligence (Distinction). Designing and
            engineering high-scale products.
          </p>

          <Link href="/contact" className="btn mt-6">
            Get in Touch
          </Link>
        </div>
      </article>
    </>
  );
}
