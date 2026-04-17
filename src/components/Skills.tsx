export default function Skills() {
  const skillGroups = [
    {
      category: "Backend & Core",
      skills: ["Java", "Spring Boot", "QueryDSL", "Servlet", "MVC", "JSP", "JWT", "Node.js", "Python"]
    },
    {
      category: "Frontend & UI",
      skills: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "jQuery", "Thymeleaf", "Bootstrap"]
    },
    {
      category: "Database & Cloud",
      skills: ["MariaDB", "MySQL", "Oracle", "AWS", "API"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "SourceTree", "AutoCAD", "Arduino", "풀스택", "웹개발"]
    }
  ];

  return (
    <section id="skills" className="container" style={{ padding: 'var(--space-xl) 0' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>기술 <span className="gradient-text">스택</span></h2>
      <div className="grid-responsive">
        {skillGroups.map((group, i) => (
          <div key={i} className="glass" style={{ padding: 'var(--space-md)', borderRadius: '16px' }}>
            <h3 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: 'var(--space-xs)', marginBottom: 'var(--space-sm)', color: 'var(--accent-cyan)' }}>
              {group.category}
            </h3>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              {group.skills.map((skill, j) => (
                <span key={j} style={{ 
                  padding: '0.4rem 0.8rem', 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  border: '1px solid var(--glass-border)'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
