import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="nav-blur">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-outfit)' }}>
          <span className="gradient-text">BACKEND</span>.DEV
        </Link>
        <ul style={{ display: 'flex', gap: 'var(--space-md)', listStyle: 'none' }}>
          <li><Link href="#projects" className="nav-link">Projects</Link></li>
          <li><Link href="#skills" className="nav-link">Skills</Link></li>
          <li><Link href="#experience" className="nav-link">Experience</Link></li>
          <li><Link href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
