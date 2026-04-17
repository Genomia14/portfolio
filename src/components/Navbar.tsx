import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="nav-blur">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <div /> {/* 로고 영역 삭제로 인한 레이아웃 유지용 빈 디브 */}
        <ul style={{ display: 'flex', gap: 'var(--space-md)', listStyle: 'none' }}>
          <li><Link href="#projects" className="nav-link">프로젝트</Link></li>
          <li><Link href="#skills" className="nav-link">기술 스택</Link></li>
          <li><Link href="#experience" className="nav-link">자기 소개</Link></li>
        </ul>
      </div>
    </nav>
  );
}
