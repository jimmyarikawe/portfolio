import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site-col">
      <section className="mt-20 sm:mt-22">
        <p className="text-[13px] font-medium text-dim">404</p>

        <h1 className="mt-3 font-display text-balance text-[28px] font-medium leading-8.25 sm:text-[34px] sm:leading-9.5 wide:text-[42px] wide:leading-10.75">
          Page does not exist.
        </h1>

        <p className="mt-3.5 text-[17px] leading-6 text-muted sm:mt-4.5 sm:text-[20px] sm:leading-7 wide:mt-6.25 wide:text-[24px] wide:leading-8">
          The link you followed may be broken or the artifact has been
          relocated.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
          <Link href="/" className="btn">
            Return Home
          </Link>

          <Link href="/work" className="btn btn-outline">
            Selected Work
          </Link>
        </div>
      </section>
    </div>
  );
}
