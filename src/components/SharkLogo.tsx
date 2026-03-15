"use client";

export function SharkLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="34"
      height="28"
      viewBox="0 0 34 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shark silhouette — side profile, sleek and minimal */}
      {/* Body */}
      <path
        d="M2 16C2 16 5 12 10 11L18 4L16 12L28 10C28 10 32 12 32 15C32 18 28 19 28 19L8 20C8 20 2 20 2 16Z"
        fill="currentColor"
      />
      {/* Tail */}
      <path
        d="M2 16L0 12M2 16L0 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Eye */}
      <circle cx="25" cy="14.5" r="1.2" fill="var(--color-background)" />
    </svg>
  );
}
