import { BRAND} from "../data.js"

export function Logo() {
  return (
    <a href="#top" className="logo">
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect x="5" y="3" width="18" height="6" rx="3" fill="#B84A08" />
        <rect x="4" y="10" width="20" height="6" rx="3" fill="#2F5D3A" />
        <rect x="3" y="17" width="22" height="7" rx="3.5" fill="#E8A33D" />
      </svg>
      {BRAND}
    </a>
  );
}