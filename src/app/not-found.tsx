import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-8 lg:px-10 py-20">
      <div className="max-w-md w-full editorial-card p-8 sm:p-10 rounded space-y-6 text-center">
        <div className="space-y-2">
          <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block">
            404 // Coordinate Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950 dark:text-white">
            Page does not exist.
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The link you followed may be broken or the artifact has been relocated.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs font-mono-accent hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded bg-neutral-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-neutral-900 dark:text-white text-xs font-mono-accent hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors"
          >
            <span>Selected Work</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
