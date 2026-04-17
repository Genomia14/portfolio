export default function Footer() {
  return (
    <footer className="container" style={{ padding: 'var(--space-md) 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--fg-muted)', fontSize: '0.9rem' }}>
      <p>&copy; {new Date().getFullYear()} 백엔드 엔지니어 포트폴리오. Next.js와 Vercel로 제작되었습니다.</p>
    </footer>
  );
}
