import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "GitHub", detail: "@umbralrage345", href: "https://github.com/umbralrage345", icon: Github },
  { label: "LinkedIn", detail: "Connect professionally", href: "https://www.linkedin.com/in/abhyudaya-hegde-310a00352/", icon: Linkedin },
  { label: "Email", detail: "abhyudayamhegde@gmail.com", href: "mailto:abhyudayamhegde@gmail.com", icon: Mail },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <div className="contact-heading">
        <p className="eyebrow">Get in touch <span>03</span></p>
        <h2>Have something<br />in mind?</h2>
        <p>I&apos;m open to thoughtful conversations and collaborations.</p>
      </div>
      <div className="contact-links">
        {links.map(({ label, detail, href, icon: Icon }) => (
          <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
            <Icon size={18} strokeWidth={1.7} />
            <span><strong>{label}</strong><small>{detail}</small></span>
            <ArrowUpRight size={16} className="contact-arrow" />
          </a>
        ))}
      </div>
    </section>
  );
}
