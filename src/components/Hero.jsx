import { useEffect, useRef, useState } from 'react';
import { TiffinArt } from './TiifenArt';

export function Hero() {
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