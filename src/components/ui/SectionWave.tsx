interface SectionWaveProps {
  /** Hex color the wave is filled with — matches the next section's background */
  fill: string;
  /** Optional Tailwind bg class for the wrapper div (= current section's bg) */
  bgClass?: string;
  /** "down" = wave dips down at centre (dark→light). "up" = wave rises at centre (light→dark). Default "down". */
  direction?: "down" | "up";
  /** "lg" for major dark/light transitions, "sm" for subtle light-to-light. Default "lg". */
  size?: "lg" | "sm";
  className?: string;
}

export default function SectionWave({
  fill,
  bgClass = "",
  direction = "down",
  size = "lg",
  className = "",
}: SectionWaveProps) {
  const isLg = size === "lg";

  const path =
    isLg
      ? direction === "down"
        ? "M0 56L1440 56L1440 20C1200 56 720 0 0 40L0 56Z"
        : "M0 56L1440 56L1440 16C1200 52 720 0 0 36L0 56Z"
      : direction === "down"
      ? "M0 0L1440 0L1440 40C1100 8 400 40 0 16L0 0Z"
      : "M0 40L1440 40L1440 0C1100 32 400 0 0 24L0 40Z";

  const viewBox = isLg ? "0 0 1440 56" : "0 0 1440 40";
  const heightClass = isLg ? "h-14" : "h-10";

  return (
    <div className={`w-full overflow-hidden leading-none ${bgClass} ${className}`}>
      <svg
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full ${heightClass}`}
        preserveAspectRatio="none"
      >
        <path d={path} fill={fill} />
      </svg>
    </div>
  );
}
