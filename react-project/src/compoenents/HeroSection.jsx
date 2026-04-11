export default function HeroSection() {
  return (
    <section id="home" className="gradient-section" style={{ textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 className="reveal" style={{ fontSize: '4rem', marginBottom: '20px' }}>Design the Future <br/> With Pure Code</h1>
      <p className="reveal" style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px', marginInline: 'auto' }}>
        Experience the next generation of web development with reusable React components and modern glassmorphism UI.
      </p>
      <div className="reveal">
        <button className="cta-btn">Explore Projects</button>
      </div>
    </section>
  );
}