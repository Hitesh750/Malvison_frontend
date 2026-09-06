import logoUrl from "@/assets/logo.png";

type Props = { className?: string };

export function Logo({ className }: Props) {
  return (
    <img
      src={logoUrl}
      alt="Malvision Technologies Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
