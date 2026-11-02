import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    name: "Fine-Grained Caption–Image Retrieval",
    kind: "Machine learning",
    description: "A project exploring fine-grained retrieval between image captions and images.",
    href: "https://github.com/umbralrage345/fine-grained-caption-image-retrieval",
    stack: ["Image retrieval", "Captioning"],
  },
  {
    name: "Profile Dashboard",
    kind: "Personal site",
    description: "A responsive portfolio built with Next.js, React, TypeScript and Tailwind CSS.",
    href: "https://github.com/umbralrage345/profile-dashboard",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Selected work <span>01</span></p>
        <h2>Projects</h2>
        <p className="section-intro">A small collection of work, with the code kept in the open.</p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-row" key={project.href}>
            <div className="project-index">0{index + 1}</div>
            <div className="project-copy">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3>{project.name}</h3>
                <span className="project-type">{project.kind}</span>
              </div>
              <p>{project.description}</p>
              <ul className="project-tags" aria-label="Project topics">
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on GitHub`}>
              <Github size={17} /> <span>View on GitHub</span> <ArrowUpRight size={16} />
            </a>
          </article>
        ))}
      </div>

      <a className="all-work-link" href="https://github.com/umbralrage345?tab=repositories" target="_blank" rel="noopener noreferrer">
        Browse repositories on GitHub <ArrowUpRight size={15} />
      </a>
    </section>
  );
}
