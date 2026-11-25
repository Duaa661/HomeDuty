export function TiffinArt() {
  return (
    <div className="tiffin-stage">
      <div className="blob blob-a" />
      <div className="blob blob-b" />

      {/* floating garnish */}
      <span className="float-bit bit-1" aria-hidden="true">🌶️</span>
      <span className="float-bit bit-2" aria-hidden="true">🌿</span>
      <span className="float-bit bit-3" aria-hidden="true">🍋</span>

      <svg
        className="tiffin-svg"
        viewBox="0 0 300 380"
        role="img"
        aria-label="Stainless steel tiffin box with fresh homemade food"
      >
        <defs>
          <linearGradient id="steel" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#8f98a3" />
            <stop offset="0.18" stopColor="#e9edf1" />
            <stop offset="0.42" stopColor="#ffffff" />
            <stop offset="0.7" stopColor="#c3cad2" />
            <stop offset="1" stopColor="#7d8691" />
          </linearGradient>
          <linearGradient id="steelDark" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#6f7882" />
            <stop offset="0.3" stopColor="#b9c0c8" />
            <stop offset="0.55" stopColor="#eef1f4" />
            <stop offset="1" stopColor="#6a737d" />
          </linearGradient>
          <linearGradient id="handle" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#f3a24a" />
            <stop offset="1" stopColor="#b84a08" />
          </linearGradient>
          <radialGradient id="shadow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="rgba(0,0,0,0.35)" />
            <stop offset="1" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>

        {/* steam */}
        <g className="steam" fill="none" strokeLinecap="round" strokeWidth="6">
          <path className="steam-1" d="M120 70 C105 55 135 45 120 28" stroke="rgba(255,255,255,0.9)" />
          <path className="steam-2" d="M150 66 C135 48 165 38 150 18" stroke="rgba(255,255,255,0.9)" />
          <path className="steam-3" d="M180 70 C165 55 195 45 180 28" stroke="rgba(255,255,255,0.9)" />
        </g>

        {/* ground shadow */}
        <ellipse className="ground-shadow" cx="150" cy="352" rx="100" ry="14" fill="url(#shadow)" />

        <g className="tiffin-body">
          {/* carry handle */}
          <path d="M92 96 C92 40 208 40 208 96" fill="none" stroke="url(#handle)" strokeWidth="11" strokeLinecap="round" />
          <rect x="84" y="90" width="132" height="12" rx="6" fill="#2F5D3A" />

          {/* lid knob */}
          <rect x="136" y="82" width="28" height="12" rx="6" fill="url(#steelDark)" />

          {/* top tier (lid) */}
          <rect x="76" y="100" width="148" height="62" rx="16" fill="url(#steel)" />
          <rect x="76" y="148" width="148" height="9" rx="4.5" fill="url(#steelDark)" />
          <path d="M92 114 H208" stroke="rgba(255,255,255,0.85)" strokeWidth="3" strokeLinecap="round" />

          {/* middle tier */}
          <rect x="70" y="160" width="160" height="70" rx="16" fill="url(#steel)" />
          <rect x="70" y="216" width="160" height="9" rx="4.5" fill="url(#steelDark)" />
          <path d="M88 176 H212" stroke="rgba(255,255,255,0.85)" strokeWidth="3" strokeLinecap="round" />

          {/* bottom tier */}
          <rect x="64" y="228" width="172" height="86" rx="18" fill="url(#steel)" />
          <rect x="64" y="300" width="172" height="12" rx="6" fill="url(#steelDark)" />
          <path d="M84 246 H216" stroke="rgba(255,255,255,0.85)" strokeWidth="3" strokeLinecap="round" />

          {/* side clips */}
          <rect x="52" y="96" width="9" height="210" rx="4.5" fill="url(#steelDark)" />
          <rect x="239" y="96" width="9" height="210" rx="4.5" fill="url(#steelDark)" />
          <circle cx="56.5" cy="126" r="5" fill="#E8A33D" />
          <circle cx="243.5" cy="126" r="5" fill="#E8A33D" />
          <circle cx="56.5" cy="196" r="5" fill="#E8A33D" />
          <circle cx="243.5" cy="196" r="5" fill="#E8A33D" />
          <circle cx="56.5" cy="268" r="5" fill="#E8A33D" />
          <circle cx="243.5" cy="268" r="5" fill="#E8A33D" />

          {/* colour accent band on bottom tier */}
          <rect x="100" y="262" width="100" height="22" rx="11" fill="#2F5D3A" opacity="0.92" />
          <rect x="112" y="269" width="76" height="8" rx="4" fill="#E8A33D" />
        </g>
      </svg>
    </div>
  );
}
