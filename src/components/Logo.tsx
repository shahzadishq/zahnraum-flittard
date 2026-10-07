import { withBase } from "@/content/site";

/**
 * Wordmark: the Zahnraum Flittard tooth-and-leaf mark (self-hosted gold SVG)
 * next to the practice name set in the self-hosted Manrope font. The mark keeps
 * its own colours on both backgrounds; only the wordmark switches for the light
 * variant used on dark sections (e.g. the footer).
 */
export function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const word = variant === "dark" ? "#1a1917" : "#ffffff";
  return (
    <svg
      viewBox="0 0 388 120"
      role="img"
      aria-label="Zahnraum Flittard"
      className={className}
    >
      <image href={withBase("/images/zahnraum-mark.svg")} x="-2" y="0" width="120" height="120" />
      <text
        x="126"
        y="62"
        fill={word}
        style={{ fontFamily: "var(--font-manrope), Arial, sans-serif" }}
        fontSize="42"
        fontWeight="800"
        letterSpacing="1"
      >
        ZAHNRAUM
      </text>
      <text
        x="128"
        y="92"
        fill={word}
        style={{ fontFamily: "var(--font-manrope), Arial, sans-serif" }}
        fontSize="20"
        fontWeight="700"
        letterSpacing="10.5"
        textLength="236"
        lengthAdjust="spacing"
      >
        FLITTARD
      </text>
    </svg>
  );
}
