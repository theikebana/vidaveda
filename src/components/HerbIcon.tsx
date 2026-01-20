import React from "react";

type HerbIconVariant = "default" | "with-eyes";

interface HerbIconProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
  variant?: HerbIconVariant;
}

export const HerbIcon: React.FC<HerbIconProps> = ({
  className,
  variant = "default",
  ...svgProps
}) => {
  const showEyes = variant === "with-eyes";

  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      {...svgProps}
    >
      {/* Stem */}
      <path
        d="M32 60V30"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
      />

      {/* Leaves */}
      <path
        d="M32 34C24 34 18 30 12 22C20 22 26 24 32 28C38 24 44 22 52 22C46 30 40 34 32 34Z"
        fill="currentColor"
      />
      <path
        d="M32 42C25 42 20 39 16 33C22 33 27 35 32 38C37 35 42 33 48 33C44 39 39 42 32 42Z"
        fill="currentColor"
        opacity={0.85}
      />

      {/* Optional playful eyes on the top leaf */}
      {showEyes && (
        <>
          <circle cx="27" cy="25" r="2" fill="#ffffff" />
          <circle cx="37" cy="25" r="2" fill="#ffffff" />
          <circle cx="27" cy="25" r="1" fill="#14532d" />
          <circle cx="37" cy="25" r="1" fill="#14532d" />
        </>
      )}
    </svg>
  );
};


