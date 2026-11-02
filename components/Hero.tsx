import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-shell">
      <div className="hero-copy">
        <p className="eyebrow hero-kicker"><span className="availability-dot" /> Computer science · AI &amp; ML</p>
        <h1>Abhyudaya<br /><span>Mohan Hegde</span></h1>
        <p className="hero-description">I&apos;m a computer science student interested in machine learning and building useful software.</p>
        <div className="hero-actions">
          <a className="button-primary" href="#projects">See my work <ArrowDown size={16} /></a>
          <a className="text-link" href="https://github.com/umbralrage345" target="_blank" rel="noopener noreferrer">GitHub profile <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="hero-aside" aria-label="Portfolio details">
        <span className="aside-rule" />
        <p>Currently learning</p>
        <strong>Machine learning<br />and full-stack development</strong>
        <p className="aside-location">Based in India</p>
      </div>
      <a className="hero-scroll" href="#about"><span>01 / 04</span> Scroll to explore <ArrowDown size={14} /></a>
    </section>
  );
}
