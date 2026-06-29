interface WaveDividerProps {
  fromColor: string;
  toColor: string;
  flip?: boolean;
  height?: number;
}

export function WaveDivider({ fromColor, toColor, flip = false, height = 80 }: WaveDividerProps) {
  return (
    <div
      style={{
        background: fromColor,
        lineHeight: 0,
        marginBottom: -1,
        marginTop: -1,
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          width: "100%",
          height: `${height}px`,
          transform: flip ? "scaleY(-1)" : "none",
        }}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}

export default WaveDivider;
