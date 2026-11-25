import { useEffect, useRef, useState } from 'react';
import { BRAND, steps, dishes, plans, reasons } from './data.js';
import './App.css';

/* ---------- helpers ---------- */

// Fades/slides an element in when it scrolls into view
function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------- layout ---------- */

function Logo() {
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

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav">
        <Logo />
        <button
          type="button"
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
          <a href="#how" onClick={close}>How it works</a>
          <a href="#menu" onClick={close}>Today's menu</a>
          <a href="#plans" onClick={close}>Plans</a>
          <a href="#login" onClick={close}>Log in</a>
          <a href="#plans" className="btn btn-primary" onClick={close}>Order now</a>
        </nav>
      </div>
    </header>
  );
}

/* ---------- hero art ---------- */

function TiffinArt() {
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

function Hero() {
  const [pincode, setPincode] = useState('');
  const [message, setMessage] = useState('');

  const checkArea = (e) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pincode)) {
      setMessage('Please enter a valid 6-digit pincode.');
      return;
    }
    // TODO: call your API, e.g. fetch(`/api/areas/${pincode}`)
    setMessage(`Checking delivery for ${pincode}...`);
  };

  return (
    <section id="top" className="container hero">
      <div className="hero-text">
        <span className="pill hero-anim" style={{ '--d': '0ms' }}>
          Home-cooked · Delivered fresh
        </span>
        <h1 className="hero-anim" style={{ '--d': '100ms' }}>
          Ghar ka khana,
          <br />
          <span className="accent">at your door</span> every day.
        </h1>
        <p className="lead hero-anim" style={{ '--d': '200ms' }}>
          Fresh tiffin made by home cooks near you. Pick a plan, choose your timing, and lunch
          simply shows up.
        </p>
        <form className="pin-form hero-anim" style={{ '--d': '300ms' }} onSubmit={checkArea}>
          <label htmlFor="pin" className="sr-only">Your pincode</label>
          <input
            id="pin"
            type="text"
            inputMode="numeric"
            maxLength={6}
            placeholder="Enter your pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
          />
          <button type="submit" className="btn btn-primary">Check my area</button>
        </form>
        {message && <p className="form-message" role="status">{message}</p>}
        <ul className="perks hero-anim" style={{ '--d': '400ms' }}>
          <li>✓ Pure veg options</li>
          <li>✓ Pause or skip anytime</li>
          <li>✓ Pay online or on delivery</li>
        </ul>
      </div>

      <div className="hero-art hero-anim" style={{ '--d': '250ms' }}>
        <TiffinArt />
      </div>
    </section>
  );
}

/* ---------- sections ---------- */

function SectionHeading({ eyebrow, title, light }) {
  return (
    <Reveal className="section-heading">
      <div className={light ? 'eyebrow eyebrow-light' : 'eyebrow'}>{eyebrow}</div>
      <h2>{title}</h2>
    </Reveal>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="band band-white">
      <div className="container stack-lg">
        <SectionHeading eyebrow="How it works" title="Three steps to a tiffin you will look forward to" />
        <div className="grid">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="card card-cream">
              <div className="step-number">{s.n}</div>
              <h3>{s.title}</h3>
              <p className="muted">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuCard({ dish, onAdd, index }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(dish);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Reveal as="article" delay={(index % 3) * 100} className="card dish">
      <div className="dish-photo">
        {dish.image ? (
          <img src={dish.image} alt={dish.name} loading="lazy" />
        ) : (
          <span>[Dish photo]</span>
        )}
      </div>
      <div className="dish-body">
        <span className="pill pill-small">{dish.tag}</span>
        <h3>{dish.name}</h3>
        <p className="muted grow">{dish.desc}</p>
        <div className="dish-footer">
          <strong className="price">₹{dish.price}</strong>
          <button
            type="button"
            className={`btn btn-outline ${added ? 'is-added' : ''}`}
            onClick={handleAdd}
          >
            {added ? 'Added ✓' : 'Add to order'}
          </button>
        </div>
      </div>
    </Reveal>
  );
}

function Menu({ cart, onAdd }) {
  return (
    <section id="menu" className="container section">
      <div className="menu-head">
        <SectionHeading eyebrow="Today's menu" title="Pick your box" />
        <a href="#menu" className="link-strong">See the full week →</a>
      </div>
      {cart.length > 0 && (
        <p className="cart-note" role="status" key={cart.length}>
          🛒 {cart.length} item{cart.length > 1 ? 's' : ''} in your order
        </p>
      )}
      <div className="grid">
        {dishes.map((d, i) => (
          <MenuCard key={d.id} dish={d} index={i} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="plans" className="band band-green">
      <div className="container stack-lg">
        <SectionHeading eyebrow="Plans" title="Start small. Stay as long as you like." light />
        <div className="grid">
          {plans.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 120}
              className={p.popular ? 'card plan plan-popular' : 'card plan'}
            >
              {p.popular && <span className="pill pill-solid">Most chosen</span>}
              <h3>{p.name}</h3>
              <p className="muted grow">{p.text}</p>
              <div className="plan-price">
                ₹[PRICE] <span>{p.unit}</span>
              </div>
              <button type="button" className="btn btn-primary btn-block">Choose plan</button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reasons() {
  return (
    <section className="container section stack-lg">
      <Reveal as="h2" className="big-title">Made like home, planned like a service</Reveal>
      <div className="grid grid-4">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 100} className="reason">
            <h3>{r.title}</h3>
            <p className="muted">{r.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="container cta-wrap">
      <Reveal className="cta">
        <h2>Tomorrow's lunch is one tap away.</h2>
        <a href="#plans" className="btn btn-white">Order your first tiffin</a>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer id="login" className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">{BRAND}</div>
          <div>Home-cooked tiffin, delivered.</div>
        </div>
        <div className="footer-links">
          <a href="#menu">Menu</a>
          <a href="#plans">Plans</a>
          <a href="#how">How it works</a>
        </div>
        <div className="footer-contact">
          <span>[PHONE NUMBER]</span>
          <span>[EMAIL ADDRESS]</span>
          <span>[SERVICE AREAS]</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (dish) => setCart((c) => [...c, dish]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Menu cart={cart} onAdd={addToCart} />
        <Plans />
        <Reasons />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}