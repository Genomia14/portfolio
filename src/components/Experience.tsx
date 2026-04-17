export default function Experience() {
  const experiences = [
    {
      role: "시니어 백엔드 엔지니어",
      company: "Tech Stream Inc.",
      period: "2023 - 현재",
      description: "마이크로서비스 아키텍처(MSA) 전환을 주도하며 시스템 가동률을 99.9%로 향상시켰습니다."
    },
    {
      role: "백엔드 개발자",
      company: "Innovate AI",
      period: "2021 - 2023",
      description: "데이터베이스 쿼리 튜닝을 통해 핵심 분석 엔진의 응답 속도를 40% 개선했습니다."
    }
  ];

  return (
    <section id="experience" className="container" style={{ padding: 'var(--space-xl) 0' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>자기 <span className="gradient-text">소개</span></h2>
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
