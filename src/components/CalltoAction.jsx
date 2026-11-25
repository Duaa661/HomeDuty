import { Reveal } from "./Reval";

export 
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
