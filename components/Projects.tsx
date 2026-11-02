import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    name: "Fine-Grained Caption–Image Retrieval",
    kind: "Image & language",
    visibility: "Private repository",
    description:
      "Text-to-image retrieval on Flickr30k using word-to-region matching. A learned weighting model improves retrieval most on longer, spatial, and multi-object captions.",
    href: "https://github.com/umbralrage345/fine-grained-caption-image-retrieval",
    stack: ["Flickr30k", "Word-region matching", "Late interaction"],
  },
  {
    name: "Eigenface Face Recognition",
    kind: "Computer vision",
    description:
      "A from-scratch PCA and SVD implementation for face recognition, with a Python visualization pipeline and a standalone browser webcam demo.",
    href: "https://github.com/umbralrage345/Eigenface_Based_Face_Recognition_System",
    stack: ["Python", "NumPy", "PCA / SVD", "JavaScript"],
  },
  {
    name: "PES-VCS",
    kind: "Systems programming",
    description:
      "A Git-inspired version control system in C, implementing content-addressed objects, a staging index, commits, branches, and history traversal.",
    href: "https://github.com/umbralrage345/PES2UG24AM009-PES-VCS",
    stack: ["C", "SHA-256", "Filesystem", "Version control"],
  },
  {
    name: "Online Auction System",
    kind: "Real-time systems",
    description:
      "A client-server auction platform that supports real-time bidding and multiple concurrent clients over WebSockets.",
    href: "https://github.com/umbralrage345/Online-Auction-System",
    stack: ["Python", "WebSockets", "Node.js"],
  },
  {
    name: "SDN Traffic Classifier",
    kind: "Networking",
    description:
      "A Ryu and Mininet network controller that classifies ARP, ICMP, and TCP traffic, then installs flow rules to allow or block packets.",
    href: "https://github.com/umbralrage345/SDN-Traffic-Classifier",
    stack: ["Python", "Ryu", "Mininet", "OpenFlow"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Selected work <span>01</span></p>
        <h2>Projects</h2>
        <p className="section-intro">Ranked by implementation depth and scope. Repository visibility is labeled on each card.</p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-row" key={project.href}>
            <div className="project-index">0{index + 1}</div>
            <div className="project-copy">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3>{project.name}</h3>
                <span className="project-meta">
                  <span className="project-type">{project.kind}</span>
                  {project.visibility && (
                    <span className="project-visibility">{project.visibility}</span>
                  )}
                </span>
              </div>
              <p>{project.description}</p>
              <ul className="project-tags" aria-label="Project topics">
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on GitHub`}>
              <Github size={17} /> <span>{project.visibility ? "Open private repository" : "View on GitHub"}</span> <ArrowUpRight size={16} />
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
