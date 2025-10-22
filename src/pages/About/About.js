import { useEffect } from "react";
import "./About.css";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Helper for consistent image path resolution
  const getImage = (path) => `${process.env.PUBLIC_URL}${path}`;

  const designers = [
    {
      name: "Ava Thompson",
      image: getImage("/assets/designer1.jpg"),
      specialty: "Modern & Minimalist Interiors",
    },
    {
      name: "Liam Carter",
      image: getImage("/assets/designer2.jpg"),
      specialty: "Luxury & Contemporary Spaces",
    },
    {
      name: "Sophia Martinez",
      image: getImage("/assets/designer3.jpg"),
      specialty: "Bohemian & Eclectic Styles",
    },
    {
      name: "Noah Patel",
      image: getImage("/assets/designer4.jpg"),
      specialty: "Industrial & Urban Aesthetics",
    },
    {
      name: "Emma Wilson",
      image: getImage("/assets/designer5.jpg"),
      specialty: "Classic & Timeless Spaces",
    },
  ];

  return (
    <div className="page about">
      {/* ---------- HERO ---------- */}
      <section className="about-hero-modern">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>About HomeStyler</h1>
            <p>
              Where creativity meets functionality. We craft immersive design
              experiences that blend innovation, sustainability, and style to
              elevate modern living.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- OUR STORY ---------- */}
      <section className="about-story-modern">
        <div className="story-content">
          <div className="story-text">
            <h2>Our Journey</h2>
            <p>
              Founded in 2015, HomeStyler began as a passion project for design
              lovers who believed every home should tell a story. Today, we’re a
              global community empowering users to visualize and build their dream
              spaces through technology and timeless design.
            </p>
            <p>
              Our mission is to inspire creativity and make interior design
              accessible, sustainable, and truly personal — from concept to reality.
            </p>
          </div>
          <div className="story-image">
            <img
              src={getImage("/assets/about-journey.jpg")}
              alt="Our Journey"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ---------- VALUES ---------- */}
      <section className="about-values-modern">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card glass">
            <img src={getImage("/assets/creativity.jpg")} alt="Creativity" />
            <h3>Creativity</h3>
            <p>Transforming imagination into meaningful spaces.</p>
          </div>
          <div className="value-card glass">
            <img src={getImage("/assets/innovation.jpg")} alt="Innovation" />
            <h3>Innovation</h3>
            <p>Using cutting-edge tools to reimagine design experiences.</p>
          </div>
          <div className="value-card glass">
            <img src={getImage("/assets/quality.jpg")} alt="Quality" />
            <h3>Quality</h3>
            <p>Every detail crafted with precision and excellence.</p>
          </div>
          <div className="value-card glass">
            <img
              src={getImage("/assets/sustainability.jpg")}
              alt="Sustainability"
            />
            <h3>Sustainability</h3>
            <p>Designing responsibly for a better tomorrow.</p>
          </div>
        </div>
      </section>

      {/* ---------- TEAM ---------- */}
      <section className="about-team-modern">
        <h2>Meet Our Design Experts</h2>
        <p className="team-subtext">
          The visionary designers shaping HomeStyler’s creative identity.
        </p>
        <div className="team-grid">
          {designers.map((designer, index) => (
            <div className="team-card-modern" key={index}>
              <img src={designer.image} alt={designer.name} loading="lazy" />
              <div className="team-info">
                <h3>{designer.name}</h3>
                <p>{designer.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
