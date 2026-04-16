export default function Footer() {
  return (
    <footer className="container" style={{ padding: 'var(--space-md) 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--fg-muted)', fontSize: '0.9rem' }}>
      <p>&copy; {new Date().getFullYear()} Backend Engineer Portfolio. Built with Next.js & Vercel.</p>
    </footer>
  );
}
