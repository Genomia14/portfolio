export default function Contact() {
  return (
    <section id="contact" className="container" style={{ padding: 'var(--space-xl) 0', textAlign: 'center' }}>
      <div className="glass" style={{ padding: 'var(--space-lg)', borderRadius: '24px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: 'var(--space-sm)' }}>함께 <span className="gradient-text">성장</span>할 기회를 찾습니다</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: 'var(--space-md)' }}>
          새로운 기회와 흥미로운 백엔드 과제에 항상 열려 있습니다. 
          시스템 아키텍처, API 설계, 성능 최적화 등 기술적인 논의가 필요하시다면 언제든 연락주세요.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center' }}>
          <a href="mailto:your.email@example.com" className="btn-primary">이메일 보내기</a>
          <a href="https://linkedin.com" target="_blank" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--glass-border)' }}>
            링크드인 (LinkedIn)
          </a>
        </div>
      </div>
    </section>
  );
}
