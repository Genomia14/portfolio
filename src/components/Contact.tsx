export default function Contact() {
  return (
    <section id="contact" className="container" style={{ padding: 'var(--space-xl) 0', textAlign: 'center' }}>
      <div className="glass" style={{ padding: 'var(--space-lg)', borderRadius: '24px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: 'var(--space-sm)' }}>Let's Build Something <span className="gradient-text">Scalable</span></h2>
        <p style={{ fontSize: '1.2rem', marginBottom: 'var(--space-md)' }}>
          I'm currently open to new opportunities and interesting backend challenges. 
          Whether it's system architecture, API design, or performance optimization, let's talk.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center' }}>
          <a href="mailto:your.email@example.com" className="btn-primary">Email Me</a>
          <a href="https://linkedin.com" target="_blank" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--glass-border)' }}>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
