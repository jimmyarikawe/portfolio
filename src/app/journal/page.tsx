import Link from "next/link";
import { articles } from "@/data/articles";

/**
 * The writing index. Same compact list rows as the home page's Writing
 * section — nothing here needs state, so it stays a server component.
 */
export default function JournalPage() {
  return (
    <div className="site-col">
      <section className="mt-20 sm:mt-22">
        <h1 className="font-display text-balance text-[28px] font-medium leading-8.25 sm:text-[34px] sm:leading-9.5 wide:text-[42px] wide:leading-10.75">
          Journal
        </h1>

        <p className="mt-3.5 text-[17px] leading-6 text-muted sm:mt-4.5 sm:text-[20px] sm:leading-7 wide:mt-6.25 wide:text-[24px] wide:leading-8">
          Notes on AI interaction design, research, and product craft.
        </p>
      </section>

      <section className="mt-12 sm:mt-18 wide:mt-30">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/journal/${article.slug}`}
            data-cursor="Read article ↗"
            className="group mb-7 block wide:mb-9"
          >
            <p className="text-[16px] leading-5.5 transition-colors group-hover:text-muted sm:text-[17px] wide:text-[20px] wide:leading-normal">
              {article.title}
            </p>
            <p className="mt-1 text-[13px] font-medium text-dim sm:mt-1.5">
              {article.category} · {article.date} · {article.readTime}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
