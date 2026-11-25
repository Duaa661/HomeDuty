import { Reveal } from "./Reval";

export function SectionHeading({ eyebrow, title, light }) {
  return (
    <Reveal className="section-heading">
      <div className={light ? 'eyebrow eyebrow-light' : 'eyebrow'}>{eyebrow}</div>
      <h2>{title}</h2>
    </Reveal>
  );
}