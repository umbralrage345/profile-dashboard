import { ArrowUpRight, Github } from "lucide-react";

const project = {
  name: "Profile Dashboard",
  description:
    "A personal portfolio built with Next.js, React, TypeScript and Tailwind CSS. It brings together an introduction, selected work, skills and contact details in one responsive page.",
  href: "https://github.com/umbralrage345/profile-dashboard",
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
};

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Selected work <span>01</span></p>
        <h2>Projects</h2>
        <p className="section-intro">A small collection of work, with the code kept in the open.</p>
      </div>

      <article className="project-row">
        <div className="project-index">01</div>
        <div className="project-copy">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3>{project.name}</h3>
            <span className="project-type">Personal site</span>
          </div>
          <p>{project.description}</p>
          <ul className="project-tags" aria-label="Built with">
            {project.stack.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label="View Profile Dashboard on GitHub">
          <Github size={17} /> <span>Source</span> <ArrowUpRight size={16} />
        </a>
      </article>

      <a className="all-work-link" href="https://github.com/umbralrage345?tab=repositories" target="_blank" rel="noopener noreferrer">
        Browse repositories on GitHub <ArrowUpRight size={15} />
      </a>
    </section>
  );
}
