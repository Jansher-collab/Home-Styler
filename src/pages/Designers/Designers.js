import { useEffect } from "react";
import "./Designers.css";

function Designers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const designers = [
    {
      name: "Ava Thompson",
      image: "/assets/designer1.jpg",
      specialty: "Modern & Minimalist Interiors",
      quote: "“Design is where simplicity meets soul.”",
      products:
        "Ava incorporates the Sleek Sofa, Minimal Coffee Table, and Scandinavian Chair from our product collection to create open, calming, and balanced living spaces.",
    },
    {
      name: "Liam Carter",
      image: "/assets/designer2.jpg",
      specialty: "Luxury & Contemporary Spaces",
      quote: "“Elegance lies in the details — not in excess.”",
      products:
        "Liam curates designs featuring the Pendant Lighting, Floor Lamp, and Rug Collection — blending luxurious textures with contemporary forms for a refined look.",
    },
    {
      name: "Sophia Martinez",
      image: "/assets/designer3.jpg",
      specialty: "Bohemian & Eclectic Styles",
      quote: "“Every room should feel like a story unfolding.”",
      products:
        "Sophia’s aesthetic combines our Wall Art, Decorative Vase, and Rug Collection to evoke personality and warmth in every corner of your home.",
    },
    {
      name: "Noah Patel",
      image: "/assets/designer4.jpg",
      specialty: "Industrial & Urban Aesthetics",
      quote: "“Raw materials, refined experiences.”",
      products:
        "Noah brings character to city apartments using our Pendant Lighting, Storage Shelves, and Minimal Coffee Table — merging function and industrial charm.",
    },
    {
      name: "Emma Wilson",
      image: "/assets/designer5.jpg",
      specialty: "Classic & Timeless Spaces",
      quote: "“Tradition meets modern harmony.”",
      products:
        "Emma’s work embraces the Sleek Sofa, Rug Collection, and Decorative Vase to craft interiors that feel both modern and gracefully timeless.",
    },
  ];

  return (
    <div className="page designers">
      <section className="intro-section">
        <h1 className="headline">Our Design Visionaries</h1>
        <p className="subtext">
          Meet the creative minds who redefine interior design with passion,
          innovation, and timeless aesthetics. Each designer collaborates closely
          with our product creators to craft spaces using pieces from our exclusive
          <strong> HomeStyler Collection</strong>.
        </p>
      </section>

      <section className="designer-showcase">
        {designers.map((designer, index) => (
          <div
            className={`designer-row ${index % 2 === 0 ? "normal" : "reverse"}`}
            key={index}
          >
            <div className="designer-img-wrapper">
              <img src={designer.image} alt={designer.name} loading="lazy" />
            </div>

            <div className="designer-details">
              <h2>{designer.name}</h2>
              <h4>{designer.specialty}</h4>
              <p className="quote">{designer.quote}</p>
              <p className="linked-products">{designer.products}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Designers;
