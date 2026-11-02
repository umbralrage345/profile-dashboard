import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-shell about-section">
      <div className="section-heading">
        <p className="eyebrow">A little context <span>01</span></p>
        <h2>About</h2>
      </div>
      <div className="about-grid">
        <p className="about-lede">I&apos;m studying computer science with a focus on AI and machine learning.</p>
        <div className="about-detail">
          <p>I like understanding how systems work, then putting that understanding into practice through small, useful projects. Lately, I&apos;ve been spending time on web development and machine learning fundamentals.</p>
          <a className="text-link" href="https://github.com/umbralrage345" target="_blank" rel="noopener noreferrer">A little more on GitHub <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}
