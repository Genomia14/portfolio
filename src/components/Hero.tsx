export default function Hero() {
  return (
    <section className="container animate-fade-in" style={{ padding: 'var(--space-xl) 0', textAlign: 'center' }}>
      <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: 'var(--space-sm)' }}>
        Architecting <span className="gradient-text">Scalable</span> <br /> 
        Backend Systems
      </h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto var(--space-md) auto' }}>
        Experienced Backend Engineer specializing in distributing systems, 
        high-concurrency architectures, and database performance tuning.
      </p>
      <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center' }}>
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#experience" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--glass-border)' }}>
          My Experience
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
