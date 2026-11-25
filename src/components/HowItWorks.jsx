import { SectionHeading } from "./SectionHeading";
import {  steps } from '../data.js';
import { Reveal } from "./Reval.jsx";

export function HowItWorks() {
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