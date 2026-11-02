const groups = [
  { title: "Languages", items: ["Python", "TypeScript", "JavaScript", "C++", "SQL"] },
  { title: "Machine learning", items: ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn", "NumPy", "Pandas"] },
  { title: "Web", items: ["Next.js", "React", "FastAPI", "Node.js", "Tailwind CSS"] },
  { title: "Tools", items: ["Git", "GitHub", "Docker", "Linux", "VS Code"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell skills-section">
      <div className="section-heading">
        <p className="eyebrow">Tools I use <span>02</span></p>
        <h2>Skills</h2>
        <p className="section-intro">A working set that keeps growing as I build.</p>
      </div>
      <div className="skills-list">
        {groups.map((group, index) => (
          <div className="skill-row" key={group.title}>
            <span className="skill-index">0{index + 1}</span>
            <h3>{group.title}</h3>
            <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
