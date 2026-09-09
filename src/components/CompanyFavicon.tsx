"use client";

import { useState } from "react";

interface CompanyFaviconProps {
  name: string;
  domain?: string;
  size?: number;
  className?: string;
}

export function CompanyFavicon({
  name,
  domain,
  size = 18,
  className = "",
}: CompanyFaviconProps) {
  const [errorStep, setErrorStep] = useState<number>(0);

  const cleanDomain = domain
    ? domain.replace(/^https?:\/\//i, "").replace(/^www\./i, "").split("/")[0]
    : null;

  // Primary source: unavatar.io (high-res, handles corporate domains, fallbacks)
  // Secondary source: Google Favicon CDN
  const getFaviconUrl = () => {
    if (!cleanDomain) return null;
    if (errorStep === 0) {
      return `https://unavatar.io/${cleanDomain}?fallback=false`;
    }
    if (errorStep === 1) {
      return `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${cleanDomain}&size=64`;
    }
    return null;
  };

  const faviconUrl = getFaviconUrl();

  return (
    <span
      className={`inline-flex items-center justify-center overflow-hidden rounded-[5px] bg-neutral-100 dark:bg-white/10 border border-black/8 dark:border-white/12 align-middle shrink-0 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {faviconUrl && errorStep < 2 ? (
        <img
          src={faviconUrl}
          alt={`${name} logo`}
          width={size - 4}
          height={size - 4}
          className="object-contain"
          style={{ width: `${size - 4}px`, height: `${size - 4}px` }}
          onError={() => setErrorStep((prev) => prev + 1)}
          loading="lazy"
        />
      ) : (
        <span
          className="font-mono text-[10px] font-semibold text-neutral-700 dark:text-neutral-300 leading-none select-none"
        >
          {name.charAt(0)}
        </span>
      )}
    </span>
  );
}
