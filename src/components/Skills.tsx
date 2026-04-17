export default function Skills() {
  const skillGroups = [
    {
      category: "언어 (Languages)",
      skills: ["Java", "Kotlin", "Go", "Python", "SQL"]
    },
    {
      category: "프레임워크 및 도구",
      skills: ["Spring Boot", "Echo", "Express", "Docker", "Kubernetes"]
    },
    {
      category: "데이터베이스 및 캐시",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"]
    },
    {
      category: "클라우드 및 DevOps",
      skills: ["AWS (EC2, S3, RDS)", "GCP", "Vercel", "CI/CD (Actions)", "Terraform"]
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
