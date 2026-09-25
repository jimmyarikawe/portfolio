"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Share2,
  X,
} from "lucide-react";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import type { Project } from "@/data/projects";
import { MEDIA_FRAME } from "@/lib/utils";

interface PisonCaseStudyProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

/*
 * Pison has its own template rather than the shared `CaseStudySection`, but it
 * is drawn with the same parts: the six type ramps below are the constants
 * that template uses, the surfaces are the site's tokens, and the lightbox is
 * the same one.
 *
 * The difference is shape. The other case studies are six labelled chapters
 * because they document a shipped product. This one reads straight through,
 * with headings that say something rather than numbering themselves, because
 * the argument only works in order: the data model explains the interface,
 * and the interface explains why the contributor platform had to exist.
 */
const HEADING = "text-[17px] font-medium sm:text-[18px] wide:text-[20px]";
const PROSE =
  "text-[17px] leading-6.5 text-muted sm:text-[19px] sm:leading-7 wide:text-[21px] wide:leading-7.5";
const BODY =
  "text-[16px] leading-6 text-soft sm:text-[17px] wide:text-[18px] wide:leading-7";
const META = "text-[13px] font-medium text-dim";
const SECTION = "mt-12 sm:mt-16 wide:mt-24";

const FRAME =
  "relative block overflow-hidden rounded-2xl bg-frame wide:rounded-[30px]";

/** Shared entrance: the same easing and distance as the rest of the site. */
const RISE = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const IMG = (n: string) => `/images/work/pison-labs/${n}.png`;

/** Contribution to shipped model, the lineage a contributor can watch. */
const LINEAGE = [
  "Submitted",
  "Automated checks",
  "Human review",
  "Expert validation",
  "Approved dataset",
  "Model training",
  "Shipped in a product",
];

/* ------------------------------------------------------------------ */

/** Full-width artefact at its own ratio, with a caption. */
function Figure({
  src,
  title,
  caption,
  onOpen,
  eager = false,
}: {
  src: string;
  title: string;
  caption: string;
  onOpen: (src: string) => void;
  eager?: boolean;
}) {
  return (
    <motion.figure {...RISE} className="mt-6 sm:mt-8">
      <button
        type="button"
        onClick={() => onOpen(src)}
        data-cursor="Expand"
        className="block w-full overflow-hidden rounded-2xl bg-frame focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink wide:rounded-[24px]"
      >
        <Image
          src={src}
          alt={`Pison Labs: ${title}`}
          width={3200}
          height={2000}
          sizes="(max-width: 899px) 100vw, 860px"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="h-auto w-full"
        />
        <span className="sr-only">Expand {title}</span>
      </button>
      <figcaption className={`mt-3 max-w-[68ch] sm:mt-3.5 ${BODY}`}>
        {caption}
      </figcaption>
    </motion.figure>
  );
}

/**
 * Literal against adapted. The one interactive thing on the page, because a
 * static side-by-side lets a reader skim past the only point that matters:
 * the same English sentence produces two different Yorùbá sentences.
 */
function Compare() {
  const [mode, setMode] = useState<"literal" | "adapted">("literal");
  const adapted = mode === "adapted";

  return (
    <motion.div {...RISE} className="mt-6 sm:mt-7">
      <div className="flex flex-wrap items-center gap-2">
        {(
          [
            ["literal", "What a model returns"],
            ["adapted", "What it should say"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setMode(key)}
            aria-pressed={mode === key}
            className={`btn btn-sml ${mode === key ? "" : "btn-outline"}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="editorial-card mt-4 rounded-2xl px-5 py-5 sm:mt-5 sm:px-7 sm:py-6.5">
        <p className="font-mono-accent text-[11px] font-medium uppercase tracking-[0.06em] text-faint">
          English
        </p>
        <p className="mt-2 text-[17px] leading-6.5 text-ink sm:text-[19px] sm:leading-7">
          Good morning. Thank you for waiting. How can I help?
        </p>

        <p className="font-mono-accent mt-6 text-[11px] font-medium uppercase tracking-[0.06em] text-faint">
          Yorùbá
        </p>
        <p
          key={mode}
          lang="yo"
          className="mt-2 text-[18px] leading-7 text-ink sm:text-[21px] sm:leading-8"
        >
          {adapted
            ? "Ẹ káàárọ̀. Ẹ ṣé fún sùúrù yín. Kí ni mo lè ṣe fún yín?"
            : "Ẹ káàárọ̀. O ṣé fún dídúró. Báwo ni mo ṣe lè ràn ọ́ lọ́wọ́?"}
        </p>

        <p className={`mt-4 max-w-[62ch] ${BODY}`}>
          {adapted
            ? "Ẹ ṣé is the respectful thank you, and yín is the honorific form used for an elder. Nothing about the meaning changed. The speaker's relationship to the listener did."
            : "O ṣé is the peer form, and ọ́ is how you address an equal. Grammatical, faithful to the English, and the wrong thing to say to someone older than you."}
        </p>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */

export function PisonCaseStudy({
  project,
  nextProject,
  prevProject,
}: PisonCaseStudyProps) {
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const hero = project.heroImage || project.coverImage;

  /* In the order they appear, so the lightbox arrows walk the page. */
  const modalImages = [
    hero,
    IMG("02-language-explorer"),
    IMG("01-tool-chain"),
    IMG("03-voice-studio"),
    IMG("04-voice-library"),
    IMG("07-dubbing-result"),
    IMG("05-cultural-ai"),
    IMG("09-contributor-record"),
    IMG("11-contribution-lineage"),
    IMG("13-consent-permissions"),
    IMG("12-my-voice"),
    IMG("16-responsive"),
    IMG("14-developer-api"),
  ];

  const openLightbox = (src: string) => {
    const i = modalImages.indexOf(src);
    setActiveImageIndex(i === -1 ? 0 : i);
  };

  const factSheet: { label: string; value: string; note?: string }[] = [
    { label: "Company / Client", value: project.client },
    { label: "Responsibilities", value: project.role, note: project.services },
    { label: "Category", value: project.category },
    { label: "Year", value: project.year },
    { label: "Core objective", value: project.goal ?? project.description },
    { label: "What the work produced", value: project.outcome ?? "" },
  ];

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  useEffect(() => {
    document.body.style.overflow = activeImageIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImageIndex]);

  useEffect(() => {
    const count = modalImages.length;
    const onKey = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") setActiveImageIndex(null);
      if (e.key === "ArrowRight")
        setActiveImageIndex((p) => (p !== null && p < count - 1 ? p + 1 : 0));
      if (e.key === "ArrowLeft")
        setActiveImageIndex((p) => (p !== null && p > 0 ? p - 1 : count - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeImageIndex, modalImages.length]);

  return (
    <>
      <ReadingProgressBar />

      <div className="site-col">
        {/* Back link + actions */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 sm:mt-22">
          <Link
            href="/work"
            className={`group inline-flex items-center gap-2 transition-colors hover:text-ink ${META}`}
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Selected Work</span>
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className="btn btn-outline btn-sml"
            title="Copy case study link"
          >
            {copiedShare ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Share2 className="h-3.5 w-3.5" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>

        {/* Title */}
        <header className="mt-8 sm:mt-10">
          <h1 className="font-display text-balance text-[28px] font-medium leading-8.25 sm:text-[34px] sm:leading-9.5 wide:text-[42px] wide:leading-10.75">
            {project.title}
          </h1>
          <p className="mt-3.5 text-[17px] leading-6 text-muted sm:mt-4.5 sm:text-[20px] sm:leading-7 wide:mt-6.25 wide:text-[24px] wide:leading-8">
            {project.tagline}
          </p>
        </header>

        {/* Hero */}
        <div className="ml-[calc(50%-50vw)] mt-8 w-screen px-6.25 sm:mt-10 sm:px-6 wide:mt-12.5 wide:px-[max(24px,calc(50vw-500px))]">
          <button
            type="button"
            onClick={() => setActiveImageIndex(0)}
            data-cursor="Expand"
            className={`${FRAME} ${MEDIA_FRAME} w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink`}
          >
            <Image
              src={hero}
              alt={`${project.title}: ${project.tagline}`}
              fill
              sizes="(max-width: 639px) calc(100vw - 50px), (max-width: 899px) calc(100vw - 48px), 1000px"
              loading="eager"
              fetchPriority="high"
              className="object-contain"
            />
            <span className="sr-only">Expand the Pison Labs workspace</span>
          </button>
        </div>

        {/* Fact sheet */}
        <dl className="mt-10 sm:mt-12 wide:mt-15">
          {factSheet.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 border-t border-rule py-4 sm:flex-row sm:gap-6 sm:py-4.5"
            >
              <dt className="text-[15px] font-medium leading-6.5 text-faint sm:w-[32%] sm:shrink-0 sm:text-[16px] wide:w-52.5">
                {row.label}
              </dt>
              <dd className={`sm:flex-1 ${BODY}`}>
                {row.value}
                {row.note && (
                  <span className="mt-1 block text-[15px] font-medium leading-6.5 text-faint sm:text-[16px]">
                    {row.note}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        {/* ---- Opening ---- */}
        <section className={SECTION}>
          <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>
            The problem isn&apos;t translation
          </h2>
          <p className={PROSE}>{project.overview}</p>
          <p className={`mt-4 sm:mt-5 ${PROSE}`}>
            None of that information exists in the English sentence, so a model
            has to guess, and it guesses the way its training data leans. Add
            tone marks that change what a word means, six Yorùbá dialects that
            sound foreign to each other, and the fact that most of the speech
            data which would fix any of this has never been collected, and you
            have a problem translation quality cannot reach. Pison started
            there, as a question rather than a product: what does voice AI look
            like if language, dialect and cultural context are things the system
            models, instead of settings a user picks at the end?
          </p>
        </section>

        {/* ---- The data model ---- */}
        <section className={SECTION}>
          <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>Language as an object</h2>
          <p className={PROSE}>
            The first real decision was not an interface decision. Most products
            store a language as a locale code, which can answer almost nothing
            worth knowing. In Pison a language carries its family, whether it is
            tonal and how many tones, which of its dialects have actually been
            mapped, a speaker band taken from public estimates, and a readiness
            state that runs from Collecting to Usable.
          </p>
          <p className={`mt-4 sm:mt-5 ${PROSE}`}>
            Everything downstream reads those fields. The transcript editor
            protects diacritics because tonality is a property of the language,
            not a preference. The voice library filters by dialect. And the
            language explorer can say Collecting instead of implying a model
            exists, which is the difference between a roadmap and a promise.
            Once those fields were there, most of the interface questions
            answered themselves.
          </p>

          <Figure
            src={IMG("02-language-explorer")}
            title="Language coverage"
            caption="Twenty languages, African ones first. The page opens by saying it only lists what it can say something true about, populations are given as public-estimate bands, and anything the platform measures itself is badged as demo until there is a backend to measure it with."
            onOpen={openLightbox}
          />
        </section>

        {/* ---- The loop ---- */}
        <section className={SECTION}>
          <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>One loop, not four products</h2>
          <p className={PROSE}>{project.solution}</p>
          <p className={`mt-4 sm:mt-5 ${PROSE}`}>{project.challenge}</p>

          <Figure
            src={IMG("01-tool-chain")}
            title="Tools that work together"
            caption="A recording becomes a transcript, a translation, a generated voice and a dubbed video in one chain, with no re-uploading between steps. The home page states that explicitly, because eight tools that each export a file is how a platform quietly turns into a toolbox."
            onOpen={openLightbox}
          />
        </section>

        {/* ---- Generation ---- */}
        <section className={SECTION}>
          <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>Making a voice</h2>
          <p className={PROSE}>
            The studio has a one-click default and the full parameter set in the
            same view, not behind an advanced toggle. Language and region narrow
            the voice list; style and emotion shape delivery; speed, stability
            and expressiveness are the three continuous controls that actually
            change the output. A first generation needs none of them.
          </p>

          <Figure
            src={IMG("03-voice-studio")}
            title="Text to Speech"
            eager
            caption="Yorùbá, the voice Amina, a script with its tone marks intact, and a result labelled demo audio because there is no model behind the prototype. Labelling it costs nothing and is the reason the rest of the page can be believed."
            onOpen={openLightbox}
          />

          <p className={`mt-9 sm:mt-11 ${PROSE}`}>
            Choosing the voice turned out to be the more interesting problem.
            Every picker in this category sorts by gender and age, which for an
            African voice are close to the two least useful things you can know
            about it. Someone building a Lagos support line is choosing a Lagos
            Pidgin voice, not a female voice. So a voice here carries language,
            country, region, dialect, age, style, tone and where it came from,
            and that last field does the ethical work as much as the practical
            one: a Pison synthetic voice, a community voice credited to the
            person who recorded it, and a clone are never allowed to look alike.
          </p>

          <Figure
            src={IMG("04-voice-library")}
            title="Voice library"
            caption="Ìbàdàn Storyteller is a Yorùbá elder narration voice credited to @kunle.reads. Amina is synthetic. James · Studio is a clone. The difference between those three is a consent question, so it is never reduced to a filter."
            onOpen={openLightbox}
          />

          <p className={`mt-9 sm:mt-11 ${PROSE}`}>
            Dubbing runs the same chain end to end, and the decisions there are
            all about what survives the trip. Voice identity, emotion, line
            timing and lip sync are four switches rather than a quality preset,
            each with its consequence written underneath, and lip sync is marked
            Beta because it is. The review step puts the original and the dub
            side by side with their timing lanes exposed, which is how you catch
            the line that got compressed to fit.
          </p>

          <Figure
            src={IMG("07-dubbing-result")}
            title="Dub review"
            caption="Original and dub play together, and the lanes underneath show how each Yorùbá line was fitted to the length of the English one. Making the fit visible is what turns an inaudible failure into a visible one."
            onOpen={openLightbox}
          />
        </section>

        {/* ---- Cultural AI ---- */}
        <section className={SECTION}>
          <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>
            Where translation runs out
          </h2>
          <p className={PROSE}>
            Back to the greeting from the opening. Here it is as a model would
            hand it to you, and as a Yorùbá speaker would actually say it to
            someone older than them.
          </p>

          <Compare />

          <p className={`mt-9 sm:mt-11 ${PROSE}`}>
            A product can only get that right if it knows something about
            register, and knowing things about culture is where AI features
            usually start overclaiming. Ask Pison how to greet an elder and the
            answer is not one fact. It is an ethnographically verified custom, a
            couple of reports from contributors in Ìbàdàn and Lagos, and an
            inference, all arriving in the same paragraph. Putting one
            confidence score on that mixture launders the weakest claim with the
            credibility of the strongest.
          </p>
          <p className={`mt-4 sm:mt-5 ${PROSE}`}>
            So each claim carries its own label and source: verified, community,
            AI interpretation, or uncertain. The last one is the one that
            matters. A product that can say it does not know something about a
            region is more useful than one that cannot, and it is the only
            version of this feature I would be comfortable shipping.
          </p>

          <Figure
            src={IMG("05-cultural-ai")}
            title="Cultural AI"
            caption="Answer, cultural context, local expressions and regional variation, broken into individual claims with a source against each. The last line is flagged as a coverage gap rather than answered."
            onOpen={openLightbox}
          />
        </section>

        {/* ---- Contributors ---- */}
        <section className={SECTION}>
          <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>
            Asking people for their voice
          </h2>
          <p className={PROSE}>
            None of the above works without data that does not exist yet, which
            means asking thousands of people for their voice. That is a consent
            problem and a payment problem long before it is a machine-learning
            problem, and it is the part of this project I spent the most time
            on.
          </p>
          <p className={`mt-4 sm:mt-5 ${PROSE}`}>
            The contributor platform is a second front-end, built for phones and
            unreliable connections. It shares the workspace&apos;s tokens and
            component vocabulary and almost none of its layout assumptions.
            Recording is mobile-first. Submissions queue offline and sync in
            order when the connection returns. Audio is stored on the device
            before anything is uploaded.
          </p>

          <Figure
            src={IMG("09-contributor-record")}
            title="Recording"
            caption="Seven checks run while the person is still speaking: microphone, duration, speech detected, prompt start, clipping, volume, background noise. A rejection three days later teaches nothing. A warning mid-take teaches immediately."
            onOpen={openLightbox}
          />

          <p className={`mt-9 sm:mt-11 ${PROSE}`}>
            Two smaller decisions shaped the rest of it. Reviews are
            spot-checked against gold-standard items, and agreement with other
            reviewers raises a reviewer&apos;s score while speed does not,
            which is stated in the interface so an honest reviewer knows what to
            optimise for. And there are no streaks and no loss-framing anywhere
            in the platform. Pressure raises throughput and lowers label
            quality, which is the wrong trade for a language that doesn&apos;t
            have much data to begin with.
          </p>
          <p className={`mt-4 sm:mt-5 ${PROSE}`}>
            Most data platforms take a contribution and it disappears. Every
            submission here carries a lineage the contributor can follow, ending
            at a named dataset version.
          </p>

          <motion.ol
            {...RISE}
            className="mt-6 flex flex-wrap gap-x-2 gap-y-2 sm:mt-7"
          >
            {LINEAGE.map((stage, i) => (
              <li key={stage} className="flex items-center gap-2">
                <span className="badge">{stage}</span>
                {i < LINEAGE.length - 1 && (
                  <span aria-hidden="true" className="text-faint">
                    →
                  </span>
                )}
              </li>
            ))}
          </motion.ol>

          <Figure
            src={IMG("11-contribution-lineage")}
            title="Contribution history"
            caption="A data-use column resolving to the dataset version a contribution entered, such as YOR-LEX-001 or PCM-STT-002, or to Not yet. Rejected and Needs revision carry the same weight as Approved, with the reason attached and the full rate still available on a revision."
            onOpen={openLightbox}
          />
        </section>

        {/* ---- Consent ---- */}
        <section className={SECTION}>
          <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>What you agree to</h2>
          <p className={PROSE}>
            One consent checkbox is a legal artefact, not a design. Permission
            here is seven separate scopes, each with a plain sentence about what
            it allows and who it reaches. Two of them, publishing to an open
            dataset and voice cloning, are off until someone deliberately turns
            them on, because those are the two that cannot be fully undone.
            Turning cloning on requires recording a consent statement in your
            own voice first.
          </p>

          <Figure
            src={IMG("13-consent-permissions")}
            title="Permissions"
            caption="Commercial use is stated plainly rather than softened, since the licence-share payment that funds contributors depends on it."
            onOpen={openLightbox}
          />

          <motion.blockquote
            {...RISE}
            className="mt-9 border-t border-rule pt-6 sm:mt-11 sm:pt-7"
          >
            <p className="max-w-[58ch] text-[19px] leading-7 text-ink sm:text-[22px] sm:leading-8 wide:text-[25px] wide:leading-9">
              &ldquo;Turning a permission off stops future use and removes you
              from future dataset versions within 30 days. It cannot always
              reverse a dataset already licensed or a model already trained. No
              one can make a trained model unlearn a voice.&rdquo;
            </p>
            <footer className={`mt-3 ${META}`}>
              Shown wherever a permission can be changed
            </footer>
          </motion.blockquote>

          <p className={`mt-5 max-w-[68ch] ${PROSE}`}>
            That was the hardest sentence to write and the one I am most sure
            about. The comfortable version implies withdrawal is complete. This
            one tells someone exactly what they are agreeing to, and it is the
            only basis on which anything else the platform claims is worth
            much.
          </p>

          <Figure
            src={IMG("12-my-voice")}
            title="My voice"
            caption="Every place a voice is used and whether anyone may synthesise it, with each licence listed by product, duration and revenue. The share is published rather than negotiated person by person."
            onOpen={openLightbox}
          />
        </section>

        {/* ---- System ---- */}
        <section className={SECTION}>
          <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>Holding it together</h2>
          <p className={PROSE}>{project.designSystem}</p>

          <Figure
            src={IMG("16-responsive")}
            title="At 390px"
            caption="Contributor home, a recording session, and the creator studio on a phone. Contribution is mobile-first because that is where it happens; the workspace drops to a bottom nav rather than hiding its navigation behind a menu."
            onOpen={openLightbox}
          />

          <Figure
            src={IMG("14-developer-api")}
            title="The API"
            caption="Every surface has a matching endpoint, documented in the vocabulary the interface already uses: tone-mark preservation, claim-level labels, code-switching spans. Designing both at once is what stops them drifting into different mental models of the same product."
            onOpen={openLightbox}
          />
        </section>

        {/* ---- Close ---- */}
        <section className={SECTION}>
          <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>Where it stands</h2>
          <p className={PROSE}>
            Pison is a working prototype. There is no model behind it and there
            are no users, so there are no adoption, accuracy or revenue numbers,
            and putting invented ones here would undo the argument the whole
            thing is making. What exists is eight product surfaces and a
            contributor platform, two front-ends on one token set, built far
            enough to be judged and to be wrong in specific ways.
          </p>
          <p className={`mt-4 sm:mt-5 ${PROSE}`}>{project.takeaways}</p>
          <p className={`mt-4 sm:mt-5 ${PROSE}`}>
            The obvious next step is the one I have not taken: putting the
            recording flow in front of twenty Yorùbá speakers and finding out
            how much of this survives contact with people who actually speak the
            language. The assumptions are testable. That is most of why the
            build exists.
          </p>
        </section>

        {/* CTA */}
        <section className={`${SECTION} border-t border-rule pt-10 sm:pt-12`}>
          <h2 className={HEADING}>Interested in working together?</h2>
          <p className={`mt-2 max-w-[52ch] ${BODY}`}>
            I&apos;m open to Senior Product Design and Design Engineering roles,
            and happy to walk through the decisions behind this project in more
            detail.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn">
              Get in touch
            </Link>
            <Link href="/resume" className="btn btn-outline">
              View résumé
            </Link>
          </div>
        </section>

        {/* Prev / next */}
        {(prevProject || nextProject) && (
          <nav
            aria-label="More case studies"
            className={`grid gap-9 sm:grid-cols-2 sm:gap-6 ${SECTION}`}
          >
            {[
              { label: "Previous Case Study", target: prevProject, forward: false },
              { label: "Next Case Study", target: nextProject, forward: true },
            ].map(({ label, target, forward }) =>
              target ? (
                <Link
                  key={label}
                  href={`/work/${target.slug}`}
                  data-cursor="View project ↗"
                  className="group block"
                >
                  <span className={`block ${META}`}>{label}</span>
                  <span className={`${FRAME} ${MEDIA_FRAME} mt-3 w-full`}>
                    <Image
                      src={target.coverImage}
                      alt={target.title}
                      fill
                      sizes="(max-width: 639px) calc(100vw - 50px), (max-width: 899px) 44vw, 418px"
                      loading="lazy"
                      className="object-contain"
                    />
                  </span>
                  <span className="mt-3 flex items-center gap-2 text-[16px] leading-5.5 transition-colors group-hover:text-muted sm:text-[17px] wide:text-[20px] wide:leading-normal">
                    {target.title}
                    {forward ? (
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    ) : (
                      <ArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1" />
                    )}
                  </span>
                  <span className={`mt-1 block ${BODY}`}>{target.tagline}</span>
                </Link>
              ) : null
            )}
          </nav>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex select-none flex-col justify-between bg-black/95 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setActiveImageIndex(null)}
          >
            <div
              className="z-10 flex items-center justify-between gap-4 text-[13px] font-medium text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-wrap items-center gap-2.5">
                <span>{project.title}</span>
                <span className="text-white/40">•</span>
                <span className="text-white/60">
                  Artifact {activeImageIndex + 1} of {modalImages.length}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden text-white/50 sm:inline">
                  Use ← → keys to navigate • Esc to close
                </span>
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(null)}
                  className="btn btn-invert btn-sml"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div
              className="relative my-auto flex h-[75vh] w-full items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={modalImages[activeImageIndex]}
                alt={`${project.title} artifact ${activeImageIndex + 1}`}
                fill
                sizes="100vw"
                loading="eager"
                fetchPriority="high"
                className="object-contain"
              />
            </div>

            <div
              className="z-10 mx-auto flex w-full max-w-96 items-center justify-between text-[13px] font-medium text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((p) =>
                    p !== null && p > 0 ? p - 1 : modalImages.length - 1
                  )
                }
                className="btn btn-invert btn-sml"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Prev</span>
              </button>

              <div className="no-scrollbar flex max-w-40 gap-1.5 overflow-x-auto py-1">
                {modalImages.map((src, i) => (
                  <button
                    key={`${src}-${i}`}
                    type="button"
                    onClick={() => setActiveImageIndex(i)}
                    className={`h-2 shrink-0 rounded-full transition-all ${
                      i === activeImageIndex
                        ? "w-5 bg-white"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((p) =>
                    p !== null && p < modalImages.length - 1 ? p + 1 : 0
                  )
                }
                className="btn btn-invert btn-sml"
                aria-label="Next image"
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
