export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 10%', alignItems: 'center', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 1000 }}>
      <h2 style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>CodeLegis</h2>
      <div style={{ display: 'flex', gap: '30px' }}>
        <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
        <a href="#features" style={{ color: 'white', textDecoration: 'none' }}>Features</a>
        <a href="#testimonials" style={{ color: 'white', textDecoration: 'none' }}>Testimonials</a>
      </div>
      <button className="cta-btn">Login</button>
    </nav>
  );
}
