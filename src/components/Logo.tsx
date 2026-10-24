// Das Schorcht-Logo als SVG, nachgebaut nach den Maßen der Original-Datei
// (public/images/schorcht/logo.png): 5 × 5 Punkte, zur Mitte hin größer,
// darunter die graue Tafel mit dem Schriftzug.

const STEP = 22.3;

const dots = Array.from({ length: 25 }, (_, i) => {
  const col = i % 5;
  const row = Math.floor(i / 5);
  const distance = Math.abs(col - 2) + Math.abs(row - 2);
  return { cx: 30 + col * STEP, cy: 5 + row * STEP, r: 9.2 - distance * 1.85 };
});

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="24 -5 102 155" aria-hidden="true" focusable="false">
      {dots.map((dot, i) => (
        <circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} fill="var(--red)" />
      ))}
      <rect x="25" y="110" width="100" height="40" fill="var(--slate)" />
      <text x="37" y="131.5" textLength="76" lengthAdjust="spacingAndGlyphs" fontSize="21" fontWeight="800" fill="#fff">
        OPTIK
      </text>
      <text x="37" y="142.6" textLength="76" lengthAdjust="spacingAndGlyphs" fontSize="10.6" fontWeight="800" fill="#fff">
        SCHORCHT
      </text>
    </svg>
  );
}

// Nur das Punktraster, z. B. als kleines Zeichen im Text.
export function Dots({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="19 -6 112 112" aria-hidden="true" focusable="false">
      {dots.map((dot, i) => (
        <circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} fill="currentColor" />
      ))}
    </svg>
  );
}
