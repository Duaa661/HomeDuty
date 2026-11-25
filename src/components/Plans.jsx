import { SectionHeading } from "./SectionHeading";
import { plans} from '../data.js'
import { Reveal } from "./Reval.jsx";
export function Plans() {
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
