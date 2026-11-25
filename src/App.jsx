import { useState } from 'react';
import { BRAND, steps, dishes, plans, reasons } from './data.js';

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
  return (
    <header className="container nav">
      <Logo />
      <nav className="nav-links">
        <a href="#how">How it works</a>
        <a href="#menu">Today's menu</a>
        <a href="#plans">Plans</a>
        <a href="#login">Log in</a>
        <a href="#plans" className="btn btn-primary">Order now</a>
      </nav>
    </header>
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
        <span className="pill">Home-cooked · Delivered fresh</span>
        <h1>
          Ghar ka khana,
          <br />
          at your door every day.
        </h1>
        <p className="lead">
          Fresh tiffin made by home cooks near you. Pick a plan, choose your timing, and lunch
          simply shows up.
        </p>
        <form className="pin-form" onSubmit={checkArea}>
          <label htmlFor="pin" className="sr-only">Your pincode</label>
          <input
            id="pin"
            type="text"
            inputMode="numeric"
            maxLength={6}
            placeholder="Enter your pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Check my area</button>
        </form>
        {message && <p className="form-message" role="status">{message}</p>}
        <ul className="perks">
          <li>✓ Pure veg options</li>
          <li>✓ Pause or skip anytime</li>
          <li>✓ Pay online or on delivery</li>
        </ul>
      </div>
      <div className="w-full flex items-center justify-center p-5 md:p-9">
  <div className="relative flex aspect-square w-full max-w-[480px] items-center justify-center rounded-[48%_52%_43%_57%] bg-gradient-to-br from-[#f5f7e9] to-[#e6f0d9] shadow-[0_30px_70px_rgba(40,90,40,0.13)]">

    <div className="absolute h-3/4 w-3/4 rounded-full bg-[#c6e5a4] opacity-70 blur-[65px]" />

    <img
      src="/tiffen.png"
      alt="Stainless steel tiffin box with fresh homemade food"
      className="relative z-10 h-[60%] w-[60%] object-contain drop-shadow-[0_25px_20px_rgba(0,0,0,0.18)] transition-transform duration-700 ease-in-out hover:-translate-y-3 hover:scale-105"
    />
  </div>
</div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, light }) {
  return (
    <div className="section-heading">
      <div className={light ? 'eyebrow eyebrow-light' : 'eyebrow'}>{eyebrow}</div>
      <h2>{title}</h2>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="band band-white">
      <div className="container stack-lg">
        <SectionHeading eyebrow="How it works" title="Three steps to a tiffin you will look forward to" />
        <div className="grid">
          {steps.map((s) => (
            <div key={s.n} className="card card-cream">
              <div className="step-number">{s.n}</div>
              <h3>{s.title}</h3>
              <p className="muted">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuCard({ dish, onAdd }) {
  return (
    <article className="card dish">
      <div className="dish-photo">[Dish photo]</div>
      <div className="dish-body">
        <span className="pill pill-small">{dish.tag}</span>
        <h3>{dish.name}</h3>
        <p className="muted grow">{dish.desc}</p>
        <div className="dish-footer">
          <strong className="price">₹{dish.price}</strong>
          <button type="button" className="btn btn-outline" onClick={() => onAdd(dish)}>
            Add to order
          </button>
        </div>
      </div>
    </article>
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
        <p className="cart-note" role="status">
          {cart.length} item{cart.length > 1 ? 's' : ''} in your order
        </p>
      )}
      <div className="grid">
        {dishes.map((d) => (
          <MenuCard key={d.id} dish={d} onAdd={onAdd} />
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
          {plans.map((p) => (
            <div key={p.id} className={p.popular ? 'card plan plan-popular' : 'card plan'}>
              {p.popular && <span className="pill pill-solid">Most chosen</span>}
              <h3>{p.name}</h3>
              <p className="muted grow">{p.text}</p>
              <div className="plan-price">
                ₹[PRICE] <span>{p.unit}</span>
              </div>
              <button type="button" className="btn btn-primary btn-block">Choose plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reasons() {
  return (
    <section className="container section stack-lg">
      <h2 className="big-title">Made like home, planned like a service</h2>
      <div className="grid grid-4">
        {reasons.map((r) => (
          <div key={r.title} className="reason">
            <h3>{r.title}</h3>
            <p className="muted">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="container cta-wrap">
      <div className="cta">
        <h2>Tomorrow's lunch is one tap away.</h2>
        <a href="#plans" className="btn btn-white">Order your first tiffin</a>
      </div>
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
