type Props = { className?: string };

export function Logo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="30" height="30" rx="8" fill="var(--color-primary)" />
      <path
        d="M8 22V10l5 7 3-4 3 4 5-7v12"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="24.5" r="1.25" fill="var(--color-accent)" />
    </svg>
  );
}
