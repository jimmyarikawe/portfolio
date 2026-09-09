/**
 * Deliberately minimal: the contact CTA and social links are page-level
 * sections on the home page rather than global footer furniture. No client
 * directive — there is nothing interactive left here.
 */
export function Footer() {
  return (
    <footer className="w-full">
      <div className="site-col mt-16 pb-12 wide:mt-24.5 wide:pb-16">
        <p className="text-[13.32px] font-medium text-ghost">
          © {new Date().getFullYear()} Jimmy Arikawe
        </p>
      </div>
    </footer>
  );
}
