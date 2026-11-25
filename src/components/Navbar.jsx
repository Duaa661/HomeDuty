import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import './Navbar.css';

const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#menu', label: "Today's menu" },
  { href: '#plans', label: 'Plans' },
  { href: '#login', label: 'Log in' },
];

const MOBILE_BREAKPOINT = 860;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // shadow after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // close with Escape, and when the screen grows to desktop size
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > MOBILE_BREAKPOINT && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`nb-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}
    >
      <div className="nb-inner">
        <div className="nb-logo" onClick={close}>
          <Logo />
        </div>

        <button
          type="button"
          className="nb-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nb-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="nb-menu" className="nb-menu" aria-label="Main">
          <ul className="nb-list">
            {LINKS.map((l, i) => (
              <li key={l.href} style={{ '--i': i }}>
                <a href={l.href} className="nb-link" onClick={close}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#plans" className="nb-cta" onClick={close}>
            Order now
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;  