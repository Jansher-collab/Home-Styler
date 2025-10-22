import { useEffect } from "react";
import "./DesignStyles.css";

function DesignStyles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = [
    {
      title: "Contemporary",
      img: "/assets/contemporary.jpg",
      desc: "Sleek lines, neutral colors, and a mix of materials for a modern feel. Ideal for open floor plans and minimalistic furniture arrangements."
    },
    {
      title: "Minimal",
      img: "/assets/Minimal.jpeg",
      desc: "Less is more. Open spaces, clean lines, and functional design, focusing on essential elements and a clutter-free environment."
    },
    {
      title: "Classic",
      img: "/assets/classic.jpg",
      desc: "Timeless elegance with rich textures, traditional furniture, symmetry, and refined detailing. Perfect for a warm and inviting home."
    },
    {
      title: "Industrial",
      img: "/assets/industrial.jpg",
      desc: "Exposed materials, metal accents, and raw finishes for urban charm. High ceilings and open layouts complete the look."
    },
    {
      title: "Scandinavian",
      img: "/assets/Scandinavian.webp",
      desc: "Light tones, natural materials, functional furniture, and cozy textiles. Blends simplicity and warmth seamlessly."
    },
    {
      title: "Bohemian",
      img: "/assets/Bohemian.webp",
      desc: "Eclectic mix, vibrant colors, artistic decor, and layered textures. A free-spirited approach to interior styling."
    },
    {
      title: "Modern Farmhouse",
      img: "/assets/modern-farmhouse.webp",
      desc: "Rustic charm meets modern elements. Natural wood, white walls, and cozy interiors for a welcoming home."
    },
    {
      title: "Luxury",
      img: "/assets/luxury.webp",
      desc: "Premium materials, elegant lighting, and sophisticated furniture. Designed for a high-end, opulent living space."
    },
    {
      title: "Mediterranean",
      img: "/assets/mediterranean.jpg",
      desc: "Warm colors, arches, textured walls, and natural fabrics. Brings a sun-soaked, coastal vibe indoors."
    }
  ];

  return (
    <div className="page design-styles">
      <div className="hero-section">
        <h1 className="headline">Explore Our Design Styles</h1>
        <p className="subtext">
          Discover modern, minimalistic, and timeless interior designs to transform your home. 
          Browse our curated collection and get inspired with detailed descriptions, practical tips, 
          and style examples.
        </p>
      </div>

      <div className="styles-grid">
        {styles.map((style, index) => (
          <div className="style-card fade-in" key={index}>
            <img src={style.img} alt={style.title} loading="lazy" />
            <div className="style-info">
              <h3>{style.title}</h3>
              <p>{style.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignStyles;







