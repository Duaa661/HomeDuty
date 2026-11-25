import { SectionHeading } from "./SectionHeading";
import {dishes } from '../data.js';
import { MenuCard } from "./MenuCard.jsx";

export function Menu({ cart, onAdd }) {
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
