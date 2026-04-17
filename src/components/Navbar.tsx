import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="nav-blur">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>
        <ul style={{ display: 'flex', gap: 'var(--space-md)', listStyle: 'none', alignItems: 'center' }}>
          <li><Link href="#projects" className="nav-link">프로젝트</Link></li>
          <li><Link href="#skills" className="nav-link">기술 스택</Link></li>
          <li><Link href="#experience" className="nav-link">자기 소개</Link></li>
          <li>
            <a href="https://drive.google.com/drive/folders/1BSzkWOZ1YlhuihcXVitR1Q6L6MLwZCQe?usp=sharing" target="_blank" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', background: 'var(--accent-secondary)' }}>
              PPT 보기
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
