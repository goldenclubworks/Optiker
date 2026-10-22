import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="schorcht-brand" aria-label="Optik Schorcht – Startseite">
      <span className="brand-dots" aria-hidden="true">
        {Array.from({ length: 25 }, (_, i) => <i key={i} style={{ "--dot-size": `${Math.max(2, 9 - (Math.abs(i % 5 - 2) + Math.abs(Math.floor(i / 5) - 2)) * 1.8)}px` } as React.CSSProperties} />)}
      </span>
      <span className="brand-wordmark"><strong>OPTIK</strong><span>SCHORCHT</span></span>
    </Link>
  );
}
