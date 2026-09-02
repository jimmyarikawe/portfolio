"use client";

import { useEffect, useRef, useState, useCallback, type CSSProperties } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Pause, Play } from "lucide-react";

// Each "mesh" layers several radial gradients of different hues in one
// frame — a genuine blend, not a single two-tone fade — then the whole mesh
// crossfades into the next one for variety over time.
const MESHES: CSSProperties[] = [
  {
    backgroundColor: "#7c2d12",
    backgroundImage:
      "radial-gradient(circle at 22% 28%, #fde68a 0%, transparent 45%), radial-gradient(circle at 78% 22%, #fb923c 0%, transparent 50%), radial-gradient(circle at 75% 78%, #9a3412 0%, transparent 55%), radial-gradient(circle at 25% 78%, #1c1917 0%, transparent 60%)",
  },
  {
    backgroundColor: "#1e3a8a",
    backgroundImage:
      "radial-gradient(circle at 25% 25%, #a5f3fc 0%, transparent 45%), radial-gradient(circle at 75% 25%, #38bdf8 0%, transparent 50%), radial-gradient(circle at 75% 75%, #4338ca 0%, transparent 55%), radial-gradient(circle at 25% 75%, #0f172a 0%, transparent 60%)",
  },
  {
    backgroundColor: "#581c87",
    backgroundImage:
      "radial-gradient(circle at 25% 25%, #fbcfe8 0%, transparent 45%), radial-gradient(circle at 75% 25%, #e879f9 0%, transparent 50%), radial-gradient(circle at 75% 75%, #7e22ce 0%, transparent 55%), radial-gradient(circle at 25% 75%, #1e1b4b 0%, transparent 60%)",
  },
];

const GRADIENT_INTERVAL_MS = 3000;

// A short spoken intro, translated for the Web Speech API to read aloud —
// there's no audio asset or third-party voice API involved, so quality
// depends entirely on the voices the visitor's own browser/OS ships with.
// Sentences are kept short (rather than one long comma-chain) since most
// TTS engines pause more naturally at full stops than at commas.
const BIO_SCRIPT = [
  {
    code: "EN",
    flag: "🇬🇧",
    lang: "en-GB",
    text: "Hi, I'm Jimmy. I'm a product designer and manager based in the UK. I have seven plus years of experience across fintech, enterprise, and AI. I turn complex problems into simple, useful products.",
  },
  {
    code: "FR",
    flag: "🇫🇷",
    lang: "fr-FR",
    text: "Bonjour, je suis Jimmy. Je suis designer produit, basé au Royaume-Uni. J'ai plus de sept ans d'expérience en fintech, en entreprise et en intelligence artificielle. Je transforme des problèmes complexes en produits simples et utiles.",
  },
  {
    code: "ES",
    flag: "🇪🇸",
    lang: "es-ES",
    text: "Hola, soy Jimmy. Soy diseñador de producto, con sede en el Reino Unido. Tengo más de siete años de experiencia en fintech, empresas e inteligencia artificial. Transformo problemas complejos en productos simples y útiles.",
  },
  {
    code: "DE",
    flag: "🇩🇪",
    lang: "de-DE",
    text: "Hallo, ich bin Jimmy. Ich bin Produktdesigner mit Sitz in Großbritannien. Ich habe über sieben Jahre Erfahrung in Fintech, Unternehmen und KI. Ich verwandle komplexe Probleme in einfache, nützliche Produkte.",
  },
  {
    code: "PT",
    flag: "🇵🇹",
    lang: "pt-PT",
    text: "Olá, eu sou o Jimmy. Sou designer de produto, sediado no Reino Unido. Tenho mais de sete anos de experiência em fintech, empresas e inteligência artificial. Transformo problemas complexos em produtos simples e úteis.",
  },
];

// Picks the best available voice for a language rather than just the first
// match — OSes/browsers often expose several per language, and the default
// pick is usually the flattest-sounding one.
function pickVoice(voices: SpeechSynthesisVoice[], langCode: string) {
  const prefix = langCode.slice(0, 2).toLowerCase();
  const candidates = voices.filter((v) => v.lang.toLowerCase().startsWith(prefix));
  if (candidates.length === 0) return undefined;

  const exact = candidates.filter((v) => v.lang.toLowerCase() === langCode.toLowerCase());
  const pool = exact.length > 0 ? exact : candidates;

  const score = (v: SpeechSynthesisVoice) => {
    if (/neural|enhanced|premium|natural/i.test(v.name)) return 2;
    if (v.localService) return 1;
    return 0;
  };
  return [...pool].sort((a, b) => score(b) - score(a))[0];
}

type PlaybackStatus = "idle" | "speaking" | "paused";

/**
 * A small holographic, circular "voice badge" — tilts toward the cursor and
 * catches a moving foil-like sheen over an auto-blending gradient mesh, with
 * a play button that reads a brief spoken intro via the browser's built-in
 * text-to-speech, cycling through a few languages.
 */
export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [meshIndex, setMeshIndex] = useState(0);
  const [langIndex, setLangIndex] = useState(0);
  const [status, setStatus] = useState<PlaybackStatus>("idle");
  // Cancelling an utterance fires its onend/onerror asynchronously — if a
  // new utterance has already started by the time that fires, the old
  // callback would otherwise clobber "speaking" back to "idle". This tracks
  // which utterance is current so a stale one's callbacks are ignored.
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setMeshIndex((i) => (i + 1) % MESHES.length);
    }, GRADIENT_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    // Chrome populates the voice list asynchronously — nudge it early so a
    // fast first click has a better chance of finding a good voice.
    window.speechSynthesis.getVoices();
    return () => window.speechSynthesis.cancel();
  }, []);

  const speak = useCallback((index: number) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const entry = BIO_SCRIPT[index];
    const utterance = new SpeechSynthesisUtterance(entry.text);
    utterance.lang = entry.lang;
    const voice = pickVoice(window.speechSynthesis.getVoices(), entry.lang);
    if (voice) utterance.voice = voice;
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.onend = () => {
      if (currentUtteranceRef.current === utterance) setStatus("idle");
    };
    utterance.onerror = () => {
      if (currentUtteranceRef.current === utterance) setStatus("idle");
    };

    // Mark this as current before cancelling the old one — cancel() fires
    // the previous utterance's onend/onerror asynchronously, and by then
    // the ref needs to already point here so that stale callback no-ops.
    currentUtteranceRef.current = utterance;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setStatus("speaking");
  }, []);

  const handlePlayToggle = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (status === "speaking") {
      window.speechSynthesis.pause();
      setStatus("paused");
    } else if (status === "paused") {
      window.speechSynthesis.resume();
      setStatus("speaking");
    } else {
      speak(langIndex);
    }
  };

  const cycleLanguage = () => {
    const next = (langIndex + 1) % BIO_SCRIPT.length;
    setLangIndex(next);
    if (status !== "idle") speak(next);
  };

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const glowOpacity = useMotionValue(0);

  const spring = { stiffness: 150, damping: 16, mass: 0.4 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [14, -14]), spring);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-14, 14]), spring);
  const sheenX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), spring);
  const sheenY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), spring);
  const glow = useSpring(glowOpacity, { stiffness: 200, damping: 24 });
  const sheenBackground = useMotionTemplate`radial-gradient(140% 140% at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.65), transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    glowOpacity.set(0);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const isSpeaking = status === "speaking";

  return (
    <motion.div
      ref={ref}
      data-cursor="Press play ↗"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => glowOpacity.set(1)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 700 }}
      className="relative w-full h-full rounded-full overflow-hidden shadow-lg transform-3d"
    >
      {/* Auto-blending gradient mesh, crossfaded into the next mesh rather
          than cut — browsers can't tween between two gradient strings
          directly, so this fades a new layer in over the last one. */}
      <AnimatePresence>
        <motion.div
          key={meshIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
          style={MESHES[meshIndex]}
        />
      </AnimatePresence>

      {/* Film-grain texture, generated with an SVG filter so no image asset is needed */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{ filter: "url(#hero-grain)" }}
      />

      {/* Holographic sheen that tracks the cursor */}
      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-soft-light"
        style={{ opacity: glow, background: sheenBackground }}
      />

      {/* Voice-agent controls. Deliberately not given its own translateZ —
          stacking a second 3D transform on top of the card's rotateX/rotateY
          shifts where the browser hit-tests clicks away from where the
          buttons are actually painted, making them unreliable to click. The
          controls still tilt visually along with the card via its parent
          transform; they just don't add their own depth on top of it. */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-white/70">
          Listen
        </span>

        <div className="relative">
          {isSpeaking && (
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-white/50"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <button
            onClick={handlePlayToggle}
            aria-label={
              isSpeaking
                ? "Pause introduction"
                : status === "paused"
                  ? "Resume introduction"
                  : "Play a brief spoken introduction"
            }
            className="relative w-14 h-14 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform"
          >
            {isSpeaking ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 ml-0.5 fill-current" />
            )}
          </button>
        </div>

        <button
          onClick={cycleLanguage}
          aria-label={`Spoken language: ${BIO_SCRIPT[langIndex].code}. Click to change.`}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-[10px] font-mono-accent hover:bg-white/25 transition-colors"
        >
          <span aria-hidden="true">{BIO_SCRIPT[langIndex].flag}</span>
          <span>{BIO_SCRIPT[langIndex].code}</span>
        </button>
      </div>
    </motion.div>
  );
}
