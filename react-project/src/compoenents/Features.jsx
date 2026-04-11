export default function Features() {
  const features = [
    { title: "Reusable Code", desc: "Build once, use everywhere with modular JSX." },
    { title: "Pure CSS", desc: "No bulky libraries. Just clean, high-performance styles." },
    { title: "Responsive", desc: "Perfectly optimized for mobile, tablet, and desktop." }
  ];

  return (
    <section id="features" style={{ padding: '100px 10%' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem' }}>Modern Features</h2>
      <div className="grid-container">
        {features.map((f, i) => (
          <div key={i} className="card">
            <h3 style={{ marginBottom: '15px', color: '#a855f7' }}>{f.title}</h3>
            <p style={{ color: '#94a3b8' }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}