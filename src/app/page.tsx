import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      <section id="projects" className="container" style={{ padding: 'var(--space-xl) 0' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>Selected <span className="gradient-text">Projects</span></h2>
        <div className="grid-responsive">
          <div className="glass" style={{ padding: 'var(--space-md)', borderRadius: '16px' }}>
            <h3 style={{ marginBottom: 'var(--space-xs)' }}>Distributed Task Queue</h3>
            <p style={{ marginBottom: 'var(--space-sm)' }}>A high-performance task scheduling system built with Go, Redis, and PostgreSQL.</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid var(--glass-border)' }}>Go</span>
              <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid var(--glass-border)' }}>Redis</span>
              <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid var(--glass-border)' }}>gRPC</span>
            </div>
          </div>
          <div className="glass" style={{ padding: 'var(--space-md)', borderRadius: '16px' }}>
            <h3 style={{ marginBottom: 'var(--space-xs)' }}>E-commerce Microservices</h3>
            <p style={{ marginBottom: 'var(--space-sm)' }}>Event-driven architecture using Kafka for seamless communication between services.</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid var(--glass-border)' }}>Spring Boot</span>
              <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid var(--glass-border)' }}>Kafka</span>
              <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid var(--glass-border)' }}>Docker</span>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
