export default function Testimonials() {
  return (
    <section id="testimonials" className="gradient-section" style={{ padding: '100px 10%', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '50px' }}>What Users Say</h2>
      <div className="card" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <p style={{ fontStyle: 'italic', fontSize: '1.2rem' }}>"The UI is incredibly smooth and the component structure made it so easy to integrate into my college project!"</p>
        <h4 style={{ marginTop: '20px', color: '#6366f1' }}>— Alex Rivera, CSE Student</h4>
      </div>
    </section>
  );
}