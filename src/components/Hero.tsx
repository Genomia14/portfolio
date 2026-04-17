export default function Hero() {
  return (
    <section className="container animate-fade-in" style={{ padding: 'var(--space-xl) 0', textAlign: 'center' }}>
      <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: 'var(--space-sm)' }}>
        데이터의 가치를 설계하고 <br />
        안정적인 서버를 구축하는 <span className="gradient-text">김성연</span> 입니다
      </h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto var(--space-md) auto' }}>
        하드웨어의 논리 위에 소프트웨어의 창의성을 더하여 <br />
        안정적이고 가치 있는 서버를 구축합니다.
      </p>
      <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center' }}>
        <a href="#projects" className="btn-primary">프로젝트 보기</a>
        <a href="#experience" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--glass-border)' }}>
          자기 소개
        </a>
      </div>
      
      {/* Decorative Background Element */}
      <div className="glass" style={{ 
        position: 'absolute', 
        top: '20%', 
        left: '50%', 
        width: '400px', 
        height: '400px', 
        borderRadius: '50%', 
        background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
        opacity: 0.1,
        zIndex: -1,
        filter: 'blur(100px)',
        transform: 'translateX(-50%)'
      }}></div>
    </section>
  );
}
