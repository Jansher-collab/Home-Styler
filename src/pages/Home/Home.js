
// Import React and other dependencies
import { useEffect } from "react";
import "./Home.css"; // your CSS
import { Link } from "react-router-dom"; // if needed

function Home() {
  // ✅ Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="home">
      <div className="home-container">
        {/* Your page content here */}
         {/* ---------- HERO ---------- */}
        <div className="hero fade-in">
          <div className="hero-text">
            <h1 className="headline">
              Redefine <span>Home Interiors</span>
            </h1>
            <p className="subtext">
              Welcome to <b>HomeStyler</b> — where imagination meets functionality.
              Discover timeless, minimal, and elegant interiors crafted to inspire serenity
              and balance. Browse thousands of design ideas and create a home that
              reflects your lifestyle.
            </p>
            <div className="buttons">
              {/* ✅ Correct route path with hyphen */}
              <Link to="/design-styles" className="btn primary">Explore Designs</Link>
              <Link to="/designers" className="btn outline">Book a Designer</Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/assets/Modern-living-room.jpg"
              alt="Modern Living Room"
              className="hero-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* ---------- FEATURE HIGHLIGHTS ---------- */}
        <div className="highlights">
          <div className="highlight-card fade-in">
            <h3>Minimal Aesthetics</h3>
            <p>Clean lines, light tones, and purposeful layouts that bring peace to your home.</p>
          </div>
          <div className="highlight-card fade-in">
            <h3>Smart Space Planning</h3>
            <p>Intuitive, modular concepts that make even compact areas feel open and organized.</p>
          </div>
          <div className="highlight-card fade-in">
            <h3>Trusted Designers</h3>
            <p>Collaborate with certified experts who blend creativity with precision execution.</p>
          </div>
        </div>

        {/* ---------- TRENDING DESIGNS ---------- */}
        <section className="trending">
          <h2 className="section-title fade-in">Trending Interior Themes</h2>
          <div className="design-grid">
            <div className="design-card fade-in">
              <img src="/assets/bedroom.jpg" alt="Scandinavian Bedroom" loading="lazy" />
              <div className="design-info">
                <h4>Scandinavian Calm</h4>
                <p>Muted tones, wood finishes, and cozy textiles for timeless warmth.</p>
              </div>
            </div>
            <div className="design-card fade-in">
              <img src="/assets/Modern-Kitchen.jpg" alt="Modern Kitchen" loading="lazy" />
              <div className="design-info">
                <h4>Modern Minimal Kitchen</h4>
                <p>Sleek cabinetry and smart lighting for clutter-free cooking space.</p>
              </div>
            </div>
            <div className="design-card fade-in">
              <img src="/assets/Home-Office.webp" alt="Home Office" loading="lazy" />
              <div className="design-info">
                <h4>Home Office Zen</h4>
                <p>Ergonomic setups fused with aesthetics to boost productivity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- CALL TO ACTION ---------- */}
        <section className="cta fade-in">
          <h2>Ready to Transform Your Home?</h2>
          <p>
            Join thousands of users already discovering creative interior design ideas.
            Let’s shape your vision into a modern, comfortable reality.
          </p>
          <Link to="/contact" className="btn primary">Start Your Project</Link>
        </section>
      </div>
    </section>
  );
}

export default Home;


