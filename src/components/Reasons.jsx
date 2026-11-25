import { Reveal } from "./Reval";
import { reasons } from '../data.js'
export function Reasons() {
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
