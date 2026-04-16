export default function Experience() {
  const experiences = [
    {
      role: "Senior Backend Engineer",
      company: "Tech Stream Inc.",
      period: "2023 - Present",
      description: "Leading the transition to microservices architecture, improving system uptime to 99.9%."
    },
    {
      role: "Backend Developer",
      company: "Innovate AI",
      period: "2021 - 2023",
      description: "Optimized database queries reducing latency by 40% for the core analytics engine."
    }
  ];

  return (
    <section id="experience" className="container" style={{ padding: 'var(--space-xl) 0' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>Work <span className="gradient-text">Experience</span></h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        {experiences.map((exp, i) => (
          <div key={i} className="glass animate-fade-in" style={{ padding: 'var(--space-md)', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{exp.role}</h3>
              <p style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: 'var(--space-xs)' }}>{exp.company}</p>
              <p>{exp.description}</p>
            </div>
            <div style={{ padding: '0.4rem 1rem', background: 'var(--accent-secondary)', color: 'white', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
              {exp.period}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
