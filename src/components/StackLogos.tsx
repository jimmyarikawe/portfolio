import React from "react";

export function FigmaLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 38 57" fill="none" className={className} aria-label="Figma">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  );
}

export function ReactNextLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 115 102" fill="none" className={className} aria-label="React">
      <ellipse cx="57.5" cy="51" rx="14" ry="48" transform="rotate(30 57.5 51)" stroke="#61DAFB" strokeWidth="6"/>
      <ellipse cx="57.5" cy="51" rx="14" ry="48" transform="rotate(90 57.5 51)" stroke="#61DAFB" strokeWidth="6"/>
      <ellipse cx="57.5" cy="51" rx="14" ry="48" transform="rotate(150 57.5 51)" stroke="#61DAFB" strokeWidth="6"/>
      <circle cx="57.5" cy="51" r="10" fill="#61DAFB"/>
    </svg>
  );
}

export function TypeScriptLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className} aria-label="TypeScript">
      <rect width="128" height="128" rx="20" fill="#3178C6"/>
      <path d="M68.5 86.8c1.8 3.5 4.3 6.3 7.6 8.3 3.3 2 7.1 3 11.5 3 4.1 0 7.6-.8 10.6-2.5 3-1.7 5.2-4 6.8-7 1.6-3 2.4-6.3 2.4-10 0-4.6-1.5-8.4-4.5-11.4-3-3-8-5.3-15-7-5.5-1.3-9.5-2.7-12-4.2-2.5-1.5-4.3-3.3-5.3-5.3-1-2-1.5-4.4-1.5-7.1 0-3.6 1-6.8 3-9.5 2-2.7 4.9-4.8 8.6-6.3 3.7-1.5 8-2.3 12.8-2.3 4.5 0 8.7.8 12.6 2.3 3.9 1.5 7.1 3.8 9.6 6.8 2.5 3 4.1 6.6 4.7 10.8l-14.7 3.5c-.5-3.3-2-5.8-4.3-7.5-2.4-1.7-5.4-2.6-9.1-2.6-3.8 0-6.8.9-9.1 2.7-2.3 1.8-3.4 4.3-3.4 7.4 0 2.8 1.1 5.1 3.4 6.8 2.3 1.7 6.2 3.2 11.8 4.6 7.6 1.8 13.4 4.4 17.3 7.8 3.9 3.4 5.9 8.2 5.9 14.4 0 4.7-1.2 8.9-3.7 12.6-2.5 3.7-6 6.6-10.7 8.7-4.7 2.1-10.1 3.1-16.3 3.1-6.6 0-12.4-1.2-17.5-3.7-5.1-2.5-9.1-6-12-10.6-2.9-4.6-4.4-9.9-4.4-16l14.7-2c.6 5.8 2.5 10.3 5.7 13.5zM14 36.8h52.8V49H42.7v63H27.1V49H14V36.8z" fill="#FFFFFF"/>
    </svg>
  );
}

export function PythonLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" className={className} aria-label="Python">
      <path d="M54.2 2c-12.6 0-21.4 5.5-21.4 16.2v11.9h22.2v3.2H12.7c-7.8 0-14.7 4.7-14.7 16.2 0 10.4 6 16.2 14.7 16.2h8.7v-12.3c0-7.8 6.7-14.7 14.7-14.7h22.2V23.4c0-8.9-8.4-21.4-24.1-21.4zm-9.3 7.3c2.7 0 4.8 2.2 4.8 4.9 0 2.7-2.1 4.9-4.8 4.9-2.7 0-4.9-2.2-4.9-4.9 0-2.7 2.2-4.9 4.9-4.9z" fill="#3776AB"/>
      <path d="M55.8 108c12.6 0 21.4-5.5 21.4-16.2V79.9H55v-3.2h42.3c7.8 0 14.7-4.7 14.7-16.2 0-10.4-6-16.2-14.7-16.2h-8.7v12.3c0 7.8-6.7 14.7-14.7 14.7H51.7v15.3c0 8.9 8.4 21.4 24.1 21.4zm9.3-7.3c-2.7 0-4.8-2.2-4.8-4.9 0-2.7 2.1-4.9 4.8-4.9 2.7 0 4.9 2.2 4.9 4.9 0 2.7-2.2 4.9-4.9 4.9z" fill="#FFD438"/>
    </svg>
  );
}

export function TailwindLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 54 33" fill="none" className={className} aria-label="Tailwind CSS">
      <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#38BDF8"/>
    </svg>
  );
}

export function FramerMotionLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Framer Motion">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF"/>
    </svg>
  );
}

export function AILLMLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="AI and LLMs">
      <path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z" fill="#10A37F"/>
      <circle cx="19" cy="5" r="2" fill="#F59E0B"/>
      <circle cx="5" cy="19" r="1.5" fill="#6366F1"/>
    </svg>
  );
}

export function DesignSystemsLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Design Systems">
      <rect x="3" y="3" width="7" height="7" rx="2" fill="#EC4899"/>
      <rect x="14" y="3" width="7" height="7" rx="2" fill="#8B5CF6"/>
      <rect x="3" y="14" width="7" height="7" rx="2" fill="#3B82F6"/>
      <rect x="14" y="14" width="7" height="7" rx="2" fill="#10B981"/>
    </svg>
  );
}

export const stackLogoMap: Record<string, React.FC<{ className?: string }>> = {
  Figma: FigmaLogo,
  "React & Next.js": ReactNextLogo,
  TypeScript: TypeScriptLogo,
  Python: PythonLogo,
  "Tailwind CSS": TailwindLogo,
  "Framer Motion": FramerMotionLogo,
  "LLMs & RAG": AILLMLogo,
  "Design Systems": DesignSystemsLogo,
};
