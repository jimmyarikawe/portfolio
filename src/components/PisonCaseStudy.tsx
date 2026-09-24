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
 * Pison gets its own template rather than the six-chapter `CaseStudySection`,
 * because the argument it has to make is different: the other case studies
 * show a shipped product and its results, this one has to show how an
 * ambiguous problem was turned into a system. That needs diagrams, a
 * comparison, a consent model and a fifteen-beat structure that the shared
 * template has no slot for.
 *
 * Everything it is drawn with is still the shared one. The type ramps below
 * are the same six constants `CaseStudySection` uses, the surfaces are the
 * site's tokens, and the lightbox is the same one. Nothing here introduces a
 * second visual language, it just arranges the existing one into a longer read.
 */
const HEADING = "text-[17px] font-medium sm:text-[18px] wide:text-[20px]";
const SUBHEADING = "text-[16px] font-medium sm:text-[17px] wide:text-[19px]";
const PROSE =
  "text-[17px] leading-6.5 text-muted sm:text-[19px] sm:leading-7 wide:text-[21px] wide:leading-7.5";
const BODY =
  "text-[16px] leading-6 text-soft sm:text-[17px] wide:text-[18px] wide:leading-7";
const META = "text-[13px] font-medium text-dim";
const SECTION = "mt-12 sm:mt-18 wide:mt-30";

const FRAME =
  "relative block overflow-hidden rounded-2xl bg-frame wide:rounded-[30px]";

/** Shared entrance: the same easing and distance as the rest of the site. */
const RISE = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

/* ------------------------------------------------------------------ *
 * Content
 * ------------------------------------------------------------------ */

const IMG = (n: string) => `/images/work/pison-labs/${n}.png`;

/** The four layers, named with the surfaces that actually exist in the build. */
const LAYERS: { key: string; title: string; blurb: string; items: string[] }[] = [
  {
    key: "Create",
    title: "Make something speak",
    blurb:
      "Generation, with the controls a voice actually needs rather than a single quality slider.",
    items: ["Text to Speech", "Voice library", "Voice design & cloning", "Dubbing"],
  },
  {
    key: "Understand",
    title: "Read what was said",
    blurb:
      "The comprehension half. Everything here labels its own confidence and its own gaps.",
    items: ["Speech to Text", "Translation", "Language detection", "Cultural AI"],
  },
  {
    key: "Build",
    title: "Put it in a product",
    blurb:
      "The same eight capabilities as endpoints, plus agents assembled from them.",
    items: ["REST API", "API keys & scopes", "Voice agents", "Usage & plans"],
  },
  {
    key: "Contribute",
    title: "Where the data comes from",
    blurb:
      "The supply side, designed as a product rather than as an internal tool.",
    items: ["Recording", "Translation & review", "Cultural knowledge", "Consent & data rights"],
  },
];

/** Who the platform serves, and the thing each group will not compromise on. */
const AUDIENCES: { who: string; need: string; tension: string }[] = [
  {
    who: "Creators",
    need: "Localise a video or a script without learning a new craft.",
    tension: "Wants one click. Will abandon a wizard.",
  },
  {
    who: "Businesses",
    need: "A support line that answers in the language the customer called in.",
    tension: "Needs reliability and an audit trail more than range.",
  },
  {
    who: "Developers",
    need: "An endpoint, a rate limit and a predictable response shape.",
    tension: "Treats the interface as documentation, not as a product.",
  },
  {
    who: "Researchers",
    need: "Corpora they can cite, with provenance and a licence.",
    tension: "Values a stated gap more than a confident answer.",
  },
  {
    who: "Contributors",
    need: "To know what a recording is for, what it pays, and how to take it back.",
    tension: "Often on a phone, on a metered connection, offline half the time.",
  },
  {
    who: "Everyday users",
    need: "To be understood in the language and register they actually speak.",
    tension: "Never sees the platform. Only ever meets its output.",
  },
];

/** The six tensions the platform has to hold open rather than resolve. */
const TENSIONS: { a: string; b: string; call: string }[] = [
  {
    a: "Simplicity",
    b: "Technical depth",
    call: "One-click default, full parameter set one scroll away, never a mode switch.",
  },
  {
    a: "Automation",
    b: "Human control",
    call: "The model proposes; a reviewer who speaks the language disposes.",
  },
  {
    a: "Scale",
    b: "Local context",
    call: "Dialect and region are fields on the model, not free-text notes.",
  },
  {
    a: "Data collection",
    b: "Trust",
    call: "Seven separate permissions, two of them off until deliberately turned on.",
  },
  {
    a: "Voice identity",
    b: "Privacy",
    call: "Cloning needs a spoken consent statement and per-project approval.",
  },
  {
    a: "Translation",
    b: "Cultural adaptation",
    call: "Register and honorifics are modelled, so the difference is visible.",
  },
];

/** Contribution to shipped model: the lineage a contributor can actually see. */
const PIPELINE: { stage: string; note: string }[] = [
  { stage: "Contribution", note: "Submitted, queued offline if the connection drops" },
  { stage: "Automated QA", note: "Audio and text checks run first" },
  { stage: "Human review", note: "A reviewer who speaks the language" },
  { stage: "Expert validation", note: "A language or cultural expert, where required" },
  { stage: "Approved dataset", note: "Joins a versioned dataset with an ID" },
  { stage: "Model training", note: "A model trains on that version" },
  { stage: "AI product", note: "The model ships in a surface" },
];

/** The dubbing chain, as the wizard actually sequences it. */
const DUB_STEPS: { step: string; note: string }[] = [
  { step: "Upload", note: "Video in" },
  { step: "Detect", note: "Source language, with confidence" },
  { step: "Target", note: "One or many languages out" },
  { step: "Voice", note: "Match the original speaker, or recast" },
  { step: "Generate", note: "Separate, translate, synthesise, align" },
  { step: "Review", note: "Original and dub side by side, timing lanes" },
  { step: "Export", note: "Video, audio or subtitles" },
];

/** The consent model. Wording follows the product's own policy copy. */
const SCOPES: { title: string; scope: string; on: boolean }[] = [
  {
    title: "AI training",
    scope: "Contributions may train speech, translation and language models.",
    on: true,
  },
  {
    title: "Research",
    scope: "Approved academic and non-profit researchers may study contributions.",
    on: true,
  },
  {
    title: "Commercial AI",
    scope: "Datasets or models may be licensed to named customers.",
    on: true,
  },
  {
    title: "Language preservation",
    scope: "Recordings may be archived by the language community itself.",
    on: true,
  },
  {
    title: "Voice AI",
    scope: "Recordings may teach a model to speak the language, not the person.",
    on: true,
  },
  {
    title: "Public dataset",
    scope: "Published openly for anyone to download. Cannot be recalled.",
    on: false,
  },
  {
    title: "Voice cloning",
    scope: "A model may learn to speak in that specific voice. Paid separately.",
    on: false,
  },
];

/** The five decisions, each with the reason it was made. */
const DECISIONS: { n: string; title: string; problem: string; call: string; why: string }[] = [
  {
    n: "01",
    title: "Language became an object",
    problem:
      "A locale string cannot answer whether a language is tonal, which dialects are mapped, or how good the model actually is.",
    call:
      "Language carries family, tonality, mapped dialects, a readiness state and a coverage gap, and every surface reads those fields.",
    why:
      "Tone marks change meaning in Yorùbá, so a transcript that strips them is wrong rather than untidy. Once tonality is a field, the editor can protect diacritics, the voice library can filter by dialect, and the language explorer can say Collecting instead of implying a model exists.",
  },
  {
    n: "02",
    title: "Claims carry their own provenance",
    problem:
      "A cultural answer is not one fact. It is a verified custom, a community report and an inference, delivered in one paragraph.",
    call:
      "Cultural AI splits an answer into claims and labels each one verified, community, AI interpretation or uncertain, with its source.",
    why:
      "A single confidence score on a mixed answer is worse than none, because it launders the weakest claim with the strength of the best one. Labelling per claim lets someone act on the verified part and check the rest, and it makes a coverage gap a thing the product can say out loud.",
  },
  {
    n: "03",
    title: "Voice identity is more than gender and age",
    problem:
      "Every voice picker in this category sorts by gender and age, which is the least informative thing about an African voice.",
    call:
      "A voice is language, country, region, dialect, age, style, tone and origin, and community voices are credited to the speaker by name.",
    why:
      "Someone choosing a voice for a Lagos support line is choosing a Lagos Pidgin voice, not a female voice. Making origin visible also does the ethical work: a cloned voice and a community voice are never silently the same thing.",
  },
  {
    n: "04",
    title: "Contribution is designed, not administered",
    problem:
      "Data collection tools optimise for throughput, which produces volume and mediocre labels.",
    call:
      "Recording has live quality checks, review is spot-checked against gold-standard items, pay shows an effective hourly rate, and reputation rewards accuracy rather than speed.",
    why:
      "The model can only be as good as this pipeline, so the pipeline gets product-grade design. Removing streaks and loss-framing was deliberate: pressure raises volume and lowers quality, which is the wrong trade for an under-resourced language.",
  },
  {
    n: "05",
    title: "The interface says what it does not know",
    problem:
      "A prototype with no model behind it will imply capability it does not have, and a shipped model will imply certainty it does not have.",
    call:
      "Generated output is labelled demo, measured figures are labelled demo, populations are given as public-estimate bands, and withdrawal states plainly what it cannot undo.",
    why:
      "In an AI product the honest label is the trust mechanism. Saying that a trained model cannot unlearn a voice costs a permission toggle and buys the right to be believed about everything else.",
  },
];

/* ------------------------------------------------------------------ *
 * Local primitives, all drawn with site tokens
 * ------------------------------------------------------------------ */

/** Numbered section head, the same rhythm as the shared template. */
function Head({
  n,
  kicker,
  title,
}: {
  n: string;
  kicker: string;
  title: string;
}) {
  return (
    <>
      <p className={`mb-2 ${META}`}>
        {n} / {kicker}
      </p>
      <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>{title}</h2>
    </>
  );
}

/** Full-width artefact at its own ratio, with a caption. */
function Figure({
  src,
  title,
  caption,
  bleed = false,
  onOpen,
  eager = false,
}: {
  src: string;
  title: string;
  caption: string;
  bleed?: boolean;
  onOpen: (src: string) => void;
  eager?: boolean;
}) {
  return (
    <motion.figure {...RISE} className="mt-6 sm:mt-8">
      <button
        type="button"
        onClick={() => onOpen(src)}
        data-cursor="Expand"
        className={`block w-full overflow-hidden rounded-2xl bg-frame focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink wide:rounded-[24px] ${
          bleed
            ? "ml-[calc(50%-50vw)] w-screen rounded-none wide:ml-[calc(50%-50vw)] wide:w-screen wide:rounded-none"
            : ""
        }`}
      >
        <Image
          src={src}
          alt={`Pison Labs: ${title}`}
          width={3200}
          height={2000}
          sizes={bleed ? "100vw" : "(max-width: 899px) 100vw, 860px"}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="h-auto w-full"
        />
        <span className="sr-only">Expand {title}</span>
      </button>

      <figcaption className="mt-3 sm:mt-3.5">
        <span className="block text-[15px] font-medium sm:text-[16px]">
          {title}
        </span>
        <span className={`mt-1 block max-w-[68ch] ${BODY}`}>{caption}</span>
      </figcaption>
    </motion.figure>
  );
}

/**
 * A horizontal chain of labelled steps: the ecosystem loop, the dubbing
 * pipeline and the data lineage all use it. Below 900px it becomes a vertical
 * list rather than a scroller, so nothing important hides off-screen.
 */
function Flow({
  steps,
  dense = false,
}: {
  steps: { label: string; note?: string }[];
  dense?: boolean;
}) {
  return (
    <motion.ol
      {...RISE}
      className={`mt-6 grid gap-2.5 sm:mt-7 ${
        dense
          ? "sm:grid-cols-2 wide:grid-cols-4"
          : "sm:grid-cols-2 wide:grid-cols-3"
      }`}
    >
      {steps.map((s, i) => (
        <li
          key={s.label}
          className="editorial-card flex flex-col rounded-xl px-4 py-3.5 sm:px-4.5 sm:py-4"
        >
          <span className="font-mono-accent text-[11px] font-medium uppercase tracking-[0.06em] text-faint">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="mt-1.5 text-[15px] font-medium sm:text-[16px]">
            {s.label}
          </span>
          {s.note && (
            <span className="mt-1 text-[14px] leading-5.5 text-soft sm:text-[15px]">
              {s.note}
            </span>
          )}
        </li>
      ))}
    </motion.ol>
  );
}

/**
 * The literal / adapted comparison. The one interactive element on the page:
 * the point is that the same English sentence produces two different Yorùbá
 * sentences, and a static side-by-side lets a reader skim past that.
 */
function Compare() {
  const [mode, setMode] = useState<"literal" | "adapted">("literal");
  const adapted = mode === "adapted";

  return (
    <motion.div {...RISE} className="mt-6 sm:mt-7">
      <div className="flex flex-wrap items-center gap-2">
        {(
          [
            ["literal", "Literal translation"],
            ["adapted", "Culturally adapted"],
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

      <div className="mt-4 grid gap-2.5 sm:mt-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="editorial-card rounded-2xl px-5 py-4.5 sm:px-6 sm:py-5.5">
          <p className="font-mono-accent text-[11px] font-medium uppercase tracking-[0.06em] text-faint">
            English source
          </p>
          <p className="mt-2.5 text-[18px] leading-6.5 text-ink sm:text-[20px] sm:leading-7">
            Good morning. Thank you for waiting. How can I help?
          </p>
          <p className={`mt-3 ${BODY}`}>
            A support line greeting. The caller is older than the agent, which
            English has no way of marking and Yorùbá has no way of avoiding.
          </p>
        </div>

        <div className="editorial-card rounded-2xl px-5 py-4.5 sm:px-6 sm:py-5.5">
          <p className="font-mono-accent text-[11px] font-medium uppercase tracking-[0.06em] text-faint">
            Yorùbá · {adapted ? "adapted" : "literal"}
          </p>

          <p
            key={mode}
            lang="yo"
            className="mt-2.5 text-[18px] leading-7 text-ink sm:text-[20px] sm:leading-7.5"
          >
            {adapted
              ? "Ẹ káàárọ̀. Ẹ ṣé fún sùúrù yín. Kí ni mo lè ṣe fún yín?"
              : "Ẹ káàárọ̀. O ṣé fún dídúró. Báwo ni mo ṣe lè ràn ọ́ lọ́wọ́?"}
          </p>

          <ul className="mt-4 border-t border-rule pt-3.5">
            {(adapted
              ? [
                  ["Ẹ ṣé", "the respectful form of thank you"],
                  ["yín", "honorific plural, used for an elder"],
                  ["Register", "greeting carries the relationship before the task"],
                ]
              : [
                  ["O ṣé", "the peer form: correct grammar, wrong person"],
                  ["ọ́", "singular object pronoun, used between equals"],
                  ["Register", "semantically faithful, socially wrong"],
                ]
            ).map(([term, note]) => (
              <li key={term} className="mb-2 flex gap-3 last:mb-0">
                <span className="w-16 shrink-0 text-[15px] font-medium text-ink sm:w-20 sm:text-[16px]">
                  {term}
                </span>
                <span className="text-[15px] leading-6 text-soft sm:text-[16px]">
                  {note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className={`mt-3 max-w-[68ch] ${META}`}>
        Illustrative example, built on the honorific distinction the
        product&apos;s own Cultural AI documents and a native reviewer would sign
        off in the real pipeline. Both renderings are grammatical; only one is
        usable.
      </p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ *
 * Page
 * ------------------------------------------------------------------ */

export function PisonCaseStudy({
  project,
  nextProject,
  prevProject,
}: PisonCaseStudyProps) {
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const hero = project.heroImage || project.coverImage;

  /*
   * Every figure on the page, in the order it appears, so the lightbox's
   * arrow keys walk the case study rather than an unrelated gallery.
   */
  const modalImages = [
    hero,
    IMG("01-tool-chain"),
    IMG("02-language-explorer"),
    IMG("15-command-palette"),
    IMG("17-projects"),
    IMG("03-voice-studio"),
    IMG("04-voice-library"),
    IMG("05-cultural-ai"),
    IMG("06-dubbing-controls"),
    IMG("07-dubbing-result"),
    IMG("08-contributor-home"),
    IMG("09-contributor-record"),
    IMG("10-peer-review"),
    IMG("11-contribution-lineage"),
    IMG("13-consent-permissions"),
    IMG("12-my-voice"),
    IMG("18-usage"),
    IMG("16-responsive"),
    IMG("14-developer-api"),
  ];

  const openLightbox = (src: string) => {
    const i = modalImages.indexOf(src);
    setActiveImageIndex(i === -1 ? 0 : i);
  };

  const factSheet: { label: string; value: string; note?: string }[] = [
    { label: "Company / Client", value: project.client },
    { label: "Engagement", value: project.engagement ?? "Self-initiated" },
    { label: "Responsibilities", value: project.role, note: project.services },
    { label: "Category", value: project.category },
    { label: "Year", value: project.year },
    { label: "Status", value: "Working prototype, no model connected" },
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

          <div className="flex flex-wrap items-center gap-2.5">
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
        </div>

        {/* TITLE */}
        <header className="mt-8 sm:mt-10">
          <h1 className="font-display text-balance text-[28px] font-medium leading-8.25 sm:text-[34px] sm:leading-9.5 wide:text-[42px] wide:leading-10.75">
            {project.title}
          </h1>
          <p className="mt-3.5 text-[17px] leading-6 text-muted sm:mt-4.5 sm:text-[20px] sm:leading-7 wide:mt-6.25 wide:text-[24px] wide:leading-8">
            {project.tagline}
          </p>
        </header>

        {/* HERO */}
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

        {/* FACT SHEET */}
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
      </div>

      <div className="site-col">
        {/* ---- 01 THE OPPORTUNITY ---- */}
        <section className={SECTION}>
          <Head n="01" kicker="The opportunity" title="Why translation is not the answer" />
          <p className={PROSE}>
            AI can speak. The question this project started from is whether it
            understands how Africa speaks. Speech interfaces are arriving faster
            than the data behind them, and most of the work here turned out to
            be about what a model is missing, and how a product should behave
            once it knows.
          </p>
          <p className={`mt-4 sm:mt-5 ${PROSE}`}>{project.overview}</p>

          <motion.div
            {...RISE}
            className="mt-7 grid gap-x-6 gap-y-7 sm:mt-9 sm:grid-cols-2 wide:gap-x-10"
          >
            {[
              [
                "Tone carries meaning",
                "Yorùbá is a three-tone language. Strip the diacritics from a transcript and you have not made it untidy, you have changed the words. Tonality is therefore a field on every language, and the editors protect it.",
              ],
              [
                "Register is not optional",
                "Yorùbá marks respect grammatically. Addressing an elder with the peer pronoun is not informal, it is wrong, and no amount of translation quality fixes it because the information is absent from the English source.",
              ],
              [
                "Dialects are the unit people speak",
                "Nobody speaks Yorùbá in general. They speak Ọ̀yọ́, Ìbàdàn, Lagos, Ìjẹ̀bú, Èkìtì or Ẹ̀gbá, and a voice that gets that wrong is heard as foreign before it is heard as synthetic.",
              ],
              [
                "The data is held by people",
                "Closing the gap means asking thousands of speakers for their voice. That is a consent problem and a payment problem before it is a machine-learning problem.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="border-t border-rule pt-4">
                <h3 className={SUBHEADING}>{title}</h3>
                <p className={`mt-1.5 ${BODY}`}>{body}</p>
              </div>
            ))}
          </motion.div>

          <p className={`mt-7 max-w-[68ch] sm:mt-8 ${META}`}>
            No population or market figures are quoted anywhere in this case
            study or in the product. Where the platform shows a number it can
            measure, it is labelled; where it shows a speaker population, it is
            given as a public-estimate band.
          </p>
        </section>

        {/* ---- 02 THE DESIGN CHALLENGE ---- */}
        <section className={SECTION}>
          <Head n="02" kicker="The design challenge" title="Six audiences, one product" />
          <p className={PROSE}>
            How do you design a voice AI platform that makes advanced models
            usable by anyone, while treating African language and cultural
            context as first-class product primitives rather than as
            configuration?
          </p>
          <p className={`mt-4 sm:mt-5 ${PROSE}`}>{project.challenge}</p>

          <motion.div {...RISE} className="mt-8 sm:mt-10">
            <h3 className={SUBHEADING}>Who it has to serve</h3>
            <dl className="mt-4">
              {AUDIENCES.map((a) => (
                <div
                  key={a.who}
                  className="flex flex-col gap-1 border-t border-rule py-3.5 sm:flex-row sm:gap-6 sm:py-4"
                >
                  <dt className="text-[15px] font-medium leading-6.5 sm:w-[22%] sm:shrink-0 sm:text-[16px]">
                    {a.who}
                  </dt>
                  <dd className="sm:flex-1">
                    <span className={BODY}>{a.need}</span>
                    <span className="mt-1 block text-[15px] leading-6 text-faint sm:text-[16px]">
                      {a.tension}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </section>
      </div>

      <div className="site-col">
        <section className={SECTION}>
          <h3 className={`mb-3 sm:mb-4 ${SUBHEADING}`}>
            Six tensions the platform has to hold open
          </h3>
          <p className={`mb-6 sm:mb-7 ${PROSE}`}>
            Every one of them is real and none of them resolves. A product that
            pretends otherwise picks a side and loses the other, so the job was
            to hold each one open as a visible interface decision rather than
            settle it once in a strategy document.
          </p>

          <motion.dl
            {...RISE}
            className="grid gap-x-6 gap-y-6 sm:grid-cols-2 wide:grid-cols-3 wide:gap-x-10"
          >
            {TENSIONS.map((t) => (
              <div key={t.a} className="border-t border-rule pt-4">
                <dt className="flex flex-wrap items-baseline gap-1.5 text-[15px] font-medium sm:text-[16px]">
                  <span>{t.a}</span>
                  <span className="text-faint">vs</span>
                  <span>{t.b}</span>
                </dt>
                <dd className={`mt-1.5 ${BODY}`}>{t.call}</dd>
              </div>
            ))}
          </motion.dl>
        </section>

        {/* ---- 03 PRODUCT VISION ---- */}
        <section className={SECTION}>
          <Head n="03" kicker="Product vision" title="One loop, four layers" />
          <p className={PROSE}>
            Pison only works as a loop. People contribute voice and language
            data; that data becomes reviewed, versioned datasets; models train
            on those versions; the models ship as products; and what those
            products earn funds the contributors who started it. Designing any
            one layer without the others produces either a demo with no data
            behind it or a data platform nobody has a reason to use.
          </p>

          <Flow
            dense
            steps={[
              { label: "People", note: "Native speakers, reviewers, institutions" },
              { label: "Voice data", note: "Recordings, translations, cultural knowledge" },
              { label: "Datasets", note: "Reviewed, versioned, licensed" },
              { label: "Models", note: "Speech, translation, language ID" },
              { label: "Products", note: "Eight surfaces and an API" },
              { label: "Businesses", note: "Support lines, media, public services" },
              { label: "Revenue", note: "Licence fees and usage" },
              { label: "Back to people", note: "Pay, licence share, attribution" },
            ]}
          />

          <motion.div
            {...RISE}
            className="mt-10 grid gap-x-6 gap-y-8 sm:mt-12 sm:grid-cols-2 wide:gap-x-10"
          >
            {LAYERS.map((l) => (
              <div key={l.key} className="border-t border-rule pt-4">
                <span className="badge">{l.key}</span>
                <h3 className={`mt-3 ${SUBHEADING}`}>{l.title}</h3>
                <p className={`mt-1.5 ${BODY}`}>{l.blurb}</p>
                <ul className="mt-3">
                  {l.items.map((i) => (
                    <li
                      key={i}
                      className="text-[15px] font-medium leading-6.5 text-faint sm:text-[16px]"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <Figure
            src={IMG("01-tool-chain")}
            title="The thing that makes eight tools one product"
            caption="Every result can be carried into the next tool without a re-upload: a recording becomes a transcript, a translation, a generated voice and a dubbed video in one chain. The home page states the chain explicitly, because the alternative, eight tools that each export a file, is how a platform quietly becomes a toolbox."
            onOpen={openLightbox}
          />
        </section>

        {/* ---- 04 RESEARCH & PRODUCT THINKING ---- */}
        <section className={SECTION}>
          <Head
            n="04"
            kicker="Product thinking"
            title="What I assumed, and what I refused to assume"
          />
          <p className={PROSE}>
            This is a self-initiated exploration, so there is no user research
            panel behind it and I am not going to invent one. What there is
            instead is a set of stated assumptions about the six audiences
            above, a deliberate decision about which claims the product is
            allowed to make, and a language model built from public linguistic
            structure, meaning family, tonality and dialects, rather than from numbers I
            could not source.
          </p>

          <motion.div {...RISE} className="mt-7 grid gap-x-6 gap-y-7 sm:mt-9 sm:grid-cols-2 wide:gap-x-10">
            {[
              [
                "Assumed",
                "That creators abandon wizards, that developers read the interface as documentation, and that contributors are on phones and metered connections more often than not. These shaped the IA and the offline model. They are hypotheses, and the build is what would let them be tested.",
              ],
              [
                "Not assumed",
                "Anything that would have needed a statistic. No adoption figures, no market sizing, no accuracy claims, no speaker counts beyond public-estimate bands. Where the product would want a number it does not have, it shows a state instead: Collecting, Usable, or Coverage gap.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="border-t border-rule pt-4">
                <h3 className={SUBHEADING}>{title}</h3>
                <p className={`mt-1.5 ${BODY}`}>{body}</p>
              </div>
            ))}
          </motion.div>

          <Figure
            src={IMG("02-language-explorer")}
            title="The language model, made visible"
            caption="Each language carries its family, whether it is tonal, how many dialects are mapped, a speaker band from public estimates, data availability and an AI readiness state that runs from Collecting to Usable. The page opens by saying it only lists what it can say something true about, and anything the platform measures itself is badged as demo. Saying Collecting is a product decision: it is the difference between a roadmap and a promise."
            onOpen={openLightbox}
          />
        </section>

        {/* ---- 05 INFORMATION ARCHITECTURE ---- */}
        <section className={SECTION}>
          <Head n="05" kicker="Information architecture" title="Organised by intent, not by model" />
          <p className={PROSE}>
            The obvious structure is one nav item per model, which is how the
            category usually does it and how you end up with a customer who
            cannot find dubbing because it is filed under video. Pison is
            organised by what someone came to do.
          </p>

          <motion.div {...RISE} className="mt-7 sm:mt-9">
            <dl className="grid gap-x-6 gap-y-6 sm:grid-cols-2 wide:gap-x-10">
              {[
                [
                  "Workspace",
                  "Home, Translate, Speech to Text, Text to Speech, Voices, Language Detection, Cultural AI, Dubbing, AI Agents",
                  "The eight capabilities plus a home that suggests the next one. Flat, because any hierarchy here is a guess about which tool matters most.",
                ],
                [
                  "Resources",
                  "Projects, History, Files, Templates",
                  "Everything the work produces, separated from the tools that produced it, so a run can be found by what it was for rather than by which tool made it.",
                ],
                [
                  "Developer",
                  "API, API Keys, Usage, Documentation",
                  "The same eight capabilities as endpoints. A developer never has to reverse-engineer the product to find the API surface.",
                ],
                [
                  "Ecosystem",
                  "Contributor Portal, Institutional Datasets",
                  "The supply side, reachable from the product rather than hidden behind a separate marketing site, because where the data comes from is part of the offer.",
                ],
              ].map(([group, items, why]) => (
                <div key={group} className="border-t border-rule pt-4">
                  <dt className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className={SUBHEADING}>{group}</span>
                  </dt>
                  <dd className="mt-2">
                    <span className="block text-[15px] leading-6 text-faint sm:text-[16px]">
                      {items}
                    </span>
                    <span className={`mt-2 block ${BODY}`}>{why}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <Figure
            src={IMG("15-command-palette")}
            title="The architecture, addressable"
            caption="A navigation tree this wide needs a second way in. The command palette splits actions from destinations, so a returning user types create voice rather than navigating to Voices and finding the button, and a new one gets a readable index of everything the product does."
            onOpen={openLightbox}
          />
        </section>

        {/* ---- 06 THE WORKSPACE ---- */}
        <section className={SECTION}>
          <Head n="06" kicker="The workspace" title="Calm enough to think in" />
          <p className={PROSE}>
            The workspace opens on a question rather than a dashboard. Most
            visits start with an intention, not with a metric, so the top of the
            page is seven verbs, the tool set sits under them, and telemetry (recent
            projects, activity, usage) is below the fold where it belongs
            for a creative tool.
          </p>
          <p className={`mt-4 sm:mt-5 ${PROSE}`}>
            Two details do most of the work. Languages carry their maturity as a
            coloured state of Production, Beta or Research preview, so nobody
            discovers mid-project that a language is not ready. And the surface
            is a warm off-white rather than clinical white, with one accent
            reserved for a single campaign card, because a tool people spend
            hours in should not be the loudest thing on their screen.
          </p>

          <Figure
            src={IMG("17-projects")}
            title="Work grouped by what it was for"
            caption="A project holds transcripts, translations, voices and dubs together, because that is how the work is actually organised, not by which of the eight tools produced each file. Each card carries its status and its languages, so the state of a job is legible without opening it."
            onOpen={openLightbox}
          />
        </section>

        {/* ---- 07 VOICE STUDIO ---- */}
        <section className={SECTION}>
          <Head n="07" kicker="Voice Studio" title="Generation, with the right controls" />
          <p className={PROSE}>
            The studio has a one-click default and a full parameter set in the
            same view, not behind an advanced toggle. Language and region narrow
            the voice list; voice, style and emotion shape the delivery; speed,
            stability and expressiveness are the three continuous controls that
            actually change the output. A first generation needs none of them.
          </p>

          <Figure
            src={IMG("03-voice-studio")}
            title="Text to Speech, generated"
            eager
            caption="Yorùbá, the voice Amina, a script carrying its tone marks intact, and a result labelled demo audio because there is no model behind the prototype. Labelling it costs nothing and is the reason every other claim on the page can be believed."
            onOpen={openLightbox}
          />

          <motion.div {...RISE} className="mt-10 sm:mt-12">
            <h3 className={SUBHEADING}>Voice identity is not gender and age</h3>
            <p className={`mt-2 max-w-[68ch] ${BODY}`}>
              Every voice picker in this category sorts by gender and age. For
              an African voice those are the two least informative attributes it
              has. A voice in Pison is eight fields, and the picker exposes all
              of them.
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6">
              {[
                "Language",
                "Country",
                "Region",
                "Dialect",
                "Age",
                "Style",
                "Tone",
                "Origin",
              ].map((d) => (
                <span key={d} className="badge">
                  {d}
                </span>
              ))}
            </div>
          </motion.div>

          <Figure
            src={IMG("04-voice-library")}
            title="Voice library"
            caption="Ìbàdàn Storyteller is a Yorùbá elder narration voice credited to @kunle.reads. Amina is a Pison synthetic voice. James · Studio is a clone. Those three things are never allowed to look the same, because the difference between them is a consent question, not a filter."
            onOpen={openLightbox}
          />
        </section>
      </div>

      <div className="site-col">
        <section className={SECTION}>
          <Head n="08" kicker="Cultural AI" title="Same sentence, two registers" />
          <p className={PROSE}>
            Translation is not localisation. A model can be perfectly accurate
            and still produce a sentence that insults the person reading it,
            and that failure is invisible to every translation metric, which is
            why it has to be visible in the interface instead.
          </p>
          <p className={`mt-4 sm:mt-5 ${PROSE}`}>
            Yorùbá marks respect grammatically. English does not, so the
            information a Yorùbá sentence needs is simply absent from the
            source. A translation model resolves that ambiguity by guessing, and
            it guesses peer-to-peer, because that is what most training data
            looks like.
          </p>

          <Compare />

          <motion.div {...RISE} className="mt-10 sm:mt-12">
            <h3 className={SUBHEADING}>
              So the model has to say where each claim came from
            </h3>
            <p className={`mt-2 max-w-[68ch] ${BODY}`}>
              Cultural AI answers questions about etiquette, honorifics and
              regional variation. An answer to one of those is never a single
              fact. It is an ethnographically verified custom, a community
              report from two cities, and an inference, arriving in the same
              paragraph. Attaching one confidence score to that mixture
              launders the weakest claim with the credibility of the strongest.
            </p>

            <dl className="mt-5 grid gap-x-6 gap-y-5 sm:mt-6 sm:grid-cols-2 wide:grid-cols-4 wide:gap-x-8">
              {[
                ["Verified", "Checked by language reviewers or published sources."],
                ["Community", "Reported by contributors, not yet reviewed."],
                ["AI interpretation", "The model's own reading. A starting point."],
                ["Uncertain", "Low confidence, or a known gap in coverage."],
              ].map(([label, note]) => (
                <div key={label} className="border-t border-rule pt-3.5">
                  <dt className="text-[15px] font-medium sm:text-[16px]">
                    {label}
                  </dt>
                  <dd className="mt-1 text-[15px] leading-6 text-soft sm:text-[16px]">
                    {note}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <Figure
            src={IMG("05-cultural-ai")}
            title="One answer, labelled claim by claim"
            caption="The answer, the cultural context, the local expressions and the regional variation each break into individual claims, and every claim carries its own label and source. The last one is marked Uncertain, with the reason given as a coverage gap flagged for review. A product that can say that is more useful than one that cannot, and it is the only version of this feature I would be willing to ship."
            onOpen={openLightbox}
          />
        </section>

        {/* ---- 09 DUBBING ---- */}
        <section className={SECTION}>
          <Head n="09" kicker="Dubbing" title="Seven stages, four explicit promises" />
          <p className={PROSE}>
            Dubbing is the most mechanically complex flow in the platform and
            the one where the interesting decisions are all about what gets
            preserved. Voice identity, emotion, line timing and lip sync are
            surfaced as four switches rather than buried in a quality preset,
            because each one is a trade the person doing the dub should be
            making.
          </p>
          <p className={`mt-4 sm:mt-5 ${PROSE}`}>
            The wizard itself is five steps, because everything before generation is a
            decision, and review and export come after it. Splitting source
            language from target language costs a step and buys the ability to
            dub into several languages from one upload.
          </p>

          <Flow steps={DUB_STEPS.map((s) => ({ label: s.step, note: s.note }))} />

          <Figure
            src={IMG("06-dubbing-controls")}
            title="The four things a dub usually loses"
            caption="Preserve voice identity, preserve emotion, preserve timing, lip sync: each is stated as a decision with its consequence written underneath, and lip sync honestly marked Beta. Auto voice matching picks the closest available voice per speaker, which is the honest behaviour when a matching voice does not exist."
            onOpen={openLightbox}
          />

          <Figure
            src={IMG("07-dubbing-result")}
            title="Before and after, with the timing exposed"
            caption="Original and dub play side by side, and the timing lanes underneath show how each Yorùbá line was fitted to the length of the English one. Making the fit visible is what lets someone spot the line that got compressed, the failure that is inaudible until a customer hears it."
            onOpen={openLightbox}
          />
        </section>
      </div>

      <div className="site-col">
        <section className={SECTION}>
          <Head n="10" kicker="Contributor experience" title="Designed like a product, not a survey" />
          <p className={PROSE}>
            The data network is the product. Nothing downstream is better than
            the pipeline that produced the data, so the recording, review, pay
            and consent experience is designed to the same standard as the
            studio rather than as an internal tool with a form attached.
          </p>
          <p className={`mt-4 sm:mt-5 ${PROSE}`}>
            The contributor platform is a second front-end, built for people on
            phones and unreliable connections. It shares the workspace&apos;s
            token set and component vocabulary, and almost none of its layout
            assumptions: recording is mobile-first, submission queues offline
            and syncs in order when the connection returns, and audio is stored
            on-device before it is ever uploaded.
          </p>

          <Figure
            src={IMG("08-contributor-home")}
            title="Contributor home"
            caption="Accepted contributions, hours recorded, earnings with the next payout date, and a reputation panel that says quality weighs more than volume. There are no streaks and no loss-framing anywhere in the platform, because pressure raises throughput and lowers label quality, which is precisely the wrong trade for an under-resourced language."
            onOpen={openLightbox}
          />

          <Figure
            src={IMG("09-contributor-record")}
            title="Recording, with the checks that matter"
            caption="Seven live signals (microphone, duration, speech detected, prompt start, clipping, volume, background noise) run while the person is speaking rather than after they submit. A rejection three days later teaches nothing; a warning mid-take teaches immediately, and the prompt itself asks for natural speech rather than word-for-word reading."
            onOpen={openLightbox}
          />

          <Figure
            src={IMG("10-peer-review")}
            title="Peer review, and the anti-gaming design"
            caption="Reviews are spot-checked against gold-standard items, and agreement with other reviewers raises a reviewer score while speed does not. Stating that in the interface is the design: it tells an honest reviewer what to optimise and removes the incentive the obvious implementation would have created."
            onOpen={openLightbox}
          />

          <motion.div {...RISE} className="mt-10 sm:mt-12">
            <h3 className={SUBHEADING}>
              From a recording to a shipped model, visibly
            </h3>
            <p className={`mt-2 max-w-[68ch] ${BODY}`}>
              Most data platforms take a contribution and it disappears. Here
              every submission carries a seven-stage lineage the contributor can
              watch, ending at a named dataset version.
            </p>
          </motion.div>

          <Flow steps={PIPELINE.map((s) => ({ label: s.stage, note: s.note }))} />

          <Figure
            src={IMG("11-contribution-lineage")}
            title="Where it actually went"
            caption="A DATA USE column on the contribution history, resolving to the dataset version a contribution entered, such as YOR-LEX-001, YOR-MT-003 or PCM-STT-002, or to Not yet. Rejected and Needs revision are shown with the same weight as Approved, with the reason attached and the full rate still available on a revision."
            onOpen={openLightbox}
          />
        </section>

        {/* ---- 11 TRUST, CONSENT & OWNERSHIP ---- */}
        <section className={SECTION}>
          <Head n="11" kicker="Trust & consent" title="Seven permissions, two of them off" />
          <p className={PROSE}>
            One consent checkbox is a legal artefact, not a design. Pison splits
            permission into seven scopes, each with a plain-language statement
            of what it allows, who it reaches and what changing it does. Two of
            them, public dataset and voice cloning, are off by default,
            because they are the two that cannot be fully undone.
          </p>

          <motion.dl {...RISE} className="mt-7 sm:mt-9">
            {SCOPES.map((s) => (
              <div
                key={s.title}
                className="flex flex-col gap-1.5 border-t border-rule py-3.5 sm:flex-row sm:items-baseline sm:gap-6 sm:py-4"
              >
                <dt className="flex items-baseline gap-2.5 text-[15px] font-medium leading-6.5 sm:w-[34%] sm:shrink-0 sm:text-[16px]">
                  <span>{s.title}</span>
                  {!s.on && (
                    <span className="badge shrink-0">Off by default</span>
                  )}
                </dt>
                <dd className={`sm:flex-1 ${BODY}`}>{s.scope}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.blockquote
            {...RISE}
            className="mt-9 border-t border-rule pt-6 sm:mt-10 sm:pt-7"
          >
            <p className="max-w-[60ch] text-[19px] leading-7 text-ink sm:text-[22px] sm:leading-8 wide:text-[26px] wide:leading-9">
              &ldquo;Turning a permission off stops future use and removes you
              from future dataset versions within 30 days. It cannot always
              reverse a dataset already licensed or a model already trained. No
              one can make a trained model unlearn a voice.&rdquo;
            </p>
            <footer className={`mt-3 ${META}`}>
              The withdrawal statement, shown wherever a permission can be
              changed
            </footer>
          </motion.blockquote>

          <p className={`mt-5 max-w-[68ch] ${BODY}`}>
            That sentence was the hardest copy decision in the project and the
            one I am most confident about. The comfortable version implies
            withdrawal is complete. The honest version tells someone exactly
            what they are agreeing to, which is the only basis on which the rest
            of the platform&apos;s claims are worth anything.
          </p>

          <Figure
            src={IMG("13-consent-permissions")}
            title="Consent, as a screen rather than a clause"
            caption="Each permission states its scope in one sentence, names who it reaches, and can be changed at any time. Commercial use is stated plainly, as models trained on your contribution may be sold to businesses, rather than softened, because the licence-share payment that funds contributors depends on it."
            onOpen={openLightbox}
          />

          <Figure
            src={IMG("12-my-voice")}
            title="Your voice is yours"
            caption="Every place a voice is used, and whether anyone may synthesise it. Enabling cloning requires recording a consent statement in your own voice first, every licence is listed with product, duration and revenue, and the share is published rather than negotiated per person. Off is the default and the page explains what turning it on involves before offering the switch."
            onOpen={openLightbox}
          />
        </section>

        {/* ---- 12 DECISIONS ---- */}
        <section className={SECTION}>
          <Head n="12" kicker="Key decisions" title="Five calls, and why" />
          <div className="mt-6 sm:mt-8">
            {DECISIONS.map((d) => (
              <motion.div
                key={d.n}
                {...RISE}
                className="border-t border-rule py-7 last:pb-0 sm:py-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
                  <div className="sm:w-[34%] sm:shrink-0">
                    <p className={META}>{d.n}</p>
                    <h3 className={`mt-1.5 ${SUBHEADING}`}>{d.title}</h3>
                  </div>
                  <div className="sm:flex-1">
                    <dl>
                      {[
                        ["Problem", d.problem],
                        ["Decision", d.call],
                        ["Why", d.why],
                      ].map(([label, text]) => (
                        <div key={label} className="mb-3.5 last:mb-0">
                          <dt className="font-mono-accent text-[11px] font-medium uppercase tracking-[0.06em] text-faint">
                            {label}
                          </dt>
                          <dd className={`mt-1 ${BODY}`}>{text}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ---- 13 DESIGN SYSTEM ---- */}
        <section className={SECTION}>
          <Head n="13" kicker="Design system" title="One system, two front-ends" />
          <p className={PROSE}>{project.designSystem}</p>

          <motion.div {...RISE} className="mt-8 sm:mt-10">
            <h3 className={SUBHEADING}>The parts a voice product needs</h3>
            <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5">
              {[
                "Waveform player",
                "Audio recorder",
                "Live quality checks",
                "Language selector",
                "Dialect selector",
                "Voice card",
                "Provenance badge",
                "Pipeline",
                "Timeline",
                "Status chip",
                "Segmented control",
                "Command palette",
              ].map((c) => (
                <span key={c} className="badge">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...RISE} className="mt-9 sm:mt-10">
            <h3 className={SUBHEADING}>
              And the states it spends most of its time in
            </h3>
            <p className={`mt-2 max-w-[68ch] ${BODY}`}>
              An AI product is rarely on the happy path. Generation is
              processing, a language is not covered, the connection dropped
              mid-upload, the model returned nothing it is confident about.
              Every important view in both front-ends handles the full set, and
              an empty state always offers a next step rather than a dead end.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5">
              {[
                "Loading",
                "Empty",
                "Error",
                "Processing",
                "Offline",
                "Queued",
                "Permission denied",
                "Not found",
                "Validation",
                "Success",
              ].map((s) => (
                <span key={s} className="badge">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          <Figure
            src={IMG("18-usage")}
            title="Data visualisation, in the same restraint"
            caption="Charts use the system's own neutral ramp rather than a separate accent palette, so a usage view reads as part of the product instead of as an embedded dashboard. Plan limits are shown as consumed-against-total rather than as a percentage, because the number a developer needs before a large job is how much is left. Every figure here is demo data in the prototype."
            onOpen={openLightbox}
          />

          <Figure
            src={IMG("16-responsive")}
            title="The same system at 390px"
            caption="Contributor home, a recording session and the creator studio on a phone. Contribution is mobile-first because that is where it happens; the workspace is desktop-first but drops to a bottom nav rather than a hamburger, because a creative tool that hides its navigation on mobile is a creative tool nobody opens on mobile."
            onOpen={openLightbox}
          />

          <Figure
            src={IMG("14-developer-api")}
            title="The same eight capabilities, as endpoints"
            caption="Every workspace surface has a matching endpoint, documented with the same vocabulary the interface uses: tone-mark preservation, claim-level labels, code-switching spans. The sample is labelled illustrative because the prototype makes no network calls. Designing the API surface alongside the interface is what keeps the two from drifting into different mental models of the same product."
            onOpen={openLightbox}
          />
        </section>

        {/* ---- 14 OUTCOME ---- */}
        <section className={SECTION}>
          <Head n="14" kicker="Outcome" title="What the work demonstrates" />
          <p className={PROSE}>
            Pison is a working prototype, not a launched product. There is no
            model behind it and there are no users, so there are no adoption,
            accuracy or revenue numbers, and inventing them would undo the one
            thing the project is actually arguing for. What exists is the system
            and the reasoning, built far enough to be judged.
          </p>

          <motion.dl
            {...RISE}
            className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7 sm:mt-10 sm:grid-cols-4"
          >
            {project.metrics.map((m) => (
              /*
                `flex-col-reverse` keeps the dt/dd pair semantic while showing
                the value first. Its main axis runs bottom-to-top, so content
                packs to the bottom by default, which pushes the value up in
                any cell whose label wraps to two lines. `justify-end` is the
                visual top in a reversed column, so every value sits on one line.
              */
              <div
                key={m.label}
                className="flex flex-col-reverse justify-end gap-1 border-t border-rule pt-4"
              >
                <dt className={META}>{m.label}</dt>
                <dd className="text-[24px] font-medium leading-7 text-ink sm:text-[26px] sm:leading-8 wide:text-[30px] wide:leading-9">
                  {m.value}
                </dd>
              </div>
            ))}
          </motion.dl>

          <motion.ul {...RISE} className="mt-9 sm:mt-10">
            {[
              "A multi-sided platform designed as one loop: contributors, creators, developers and businesses in a single system rather than four products.",
              "Complex AI workflows structured end to end: a seven-stage dubbing workflow, a seven-stage data lineage, and a tool chain that hands output forward without re-uploads.",
              "A language model with tonality, dialects, readiness and coverage gaps as first-class fields, driving behaviour across every surface.",
              "Claim-level provenance on generated answers, and honest labelling wherever the prototype has no model behind it.",
              "Trust and consent designed as product: seven scopes, two off by default, spoken consent for cloning, and a published revenue share.",
              "One token system, one type scale and one component vocabulary across two front-ends, in light and dark.",
            ].map((line) => (
              <li key={line} className={`mb-2.5 flex gap-2.5 last:mb-0 ${BODY}`}>
                <span aria-hidden="true" className="text-faint">
                  →
                </span>
                <span>{line}</span>
              </li>
            ))}
          </motion.ul>

          <p className={`mt-8 max-w-[68ch] sm:mt-9 ${BODY}`}>
            The next honest step is the one I have not taken: putting the
            recording flow in front of twenty Yorùbá speakers and finding out
            how much of this survives contact. The assumptions in section 04 are
            testable, and the build exists so that they can be tested.
          </p>
        </section>

        {/* ---- 15 REFLECTION ---- */}
        <section className={SECTION}>
          <Head n="15" kicker="Reflection" title="What I would carry forward" />
          <p className={PROSE}>{project.takeaways}</p>

          <p className={`mt-5 sm:mt-6 ${PROSE}`}>
            The thing that surprised me was how much of the design work happened
            in the data model. I expected the hard problems to be in the studio,
            and they were in deciding that a language has a tonality and a
            coverage gap, that a voice has an origin, and that a contribution
            has a lineage. Once those existed, most of the interface questions
            had one obvious answer. Before they existed, no amount of interface
            craft would have produced a product that was right. It would only
            have produced a product that looked right, which in an AI product is
            the more dangerous of the two.
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

        {/* PREV / NEXT */}
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

      {/* LIGHTBOX, identical to the shared template's */}
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
