import "./heroBanner.css";

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-banner">
        <h1>Everything you need. One place.</h1>
        <p>Browse products, add to cart, and checkout seamlessly.</p>
      </div>

      <div className="hero-categories">
        <div className="category-card">
          <h3>Electronics</h3>
          <p>Headphones, accessories, tech</p>
        </div>

        <div className="category-card">
          <h3>Clothing</h3>
          <p>Minimal, everyday essentials</p>
        </div>

        <div className="category-card">
          <h3>Home</h3>
          <p>Smart, simple living</p>
        </div>

       
      </div>
    </section>
  );
}
