"use client";

export function SharkLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Clean shark silhouette facing right */}
      <path
        d="
          M58 34
          Q54 30 46 28
          L40 27
          L36 10
          Q35 26 34 27
          L20 26
          Q12 26 6 30
          L2 34
          Q6 32 10 32
          L6 38
          Q8 34 12 33
          L26 33
          L30 42
          Q31 34 32 33
          L48 33
          Q54 33 58 36
          Z
        "
        fill="currentColor"
        fillRule="evenodd"
      />
      {/* Eye */}
      <circle cx="50" cy="31.5" r="2" fill="var(--color-background)" />
    </svg>
  );
}
