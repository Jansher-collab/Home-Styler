import { useEffect } from "react";
import "./Products.css";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      title: "Sleek Sofa",
      img: "/assets/sleek-sofa.webp",
      desc: "Modern low-profile sofa with clean lines and neutral tones, perfect for any living room."
    },
    {
      title: "Minimal Coffee Table",
      img: "/assets/minimal-coffee-table.jpg",
      desc: "Functional, simple, and elegant table to complement modern interiors."
    },
    {
      title: "Scandinavian Chair",
      img: "/assets/Scandinavian-chair.jpg",
      desc: "Comfortable chair with natural wood and soft cushioning."
    },
    {
      title: "Pendant Lighting",
      img: "/assets/pendant-lighting.webp",
      desc: "Suspended lighting with minimalist design, perfect for kitchens and dining areas."
    },
    {
      title: "Floor Lamp",
      img: "/assets/floor-lamp.webp",
      desc: "Sleek standing lamp that adds warmth and style to any room."
    },
    {
      title: "Wall Art",
      img: "/assets/wall-art.jpg",
      desc: "Minimalist paintings and prints to create a focal point on your walls."
    },
    {
      title: "Rug Collection",
      img: "/assets/rug-Collection.webp",
      desc: "Textured, neutral-colored rugs to enhance warmth and coziness."
    },
    {
      title: "Decorative Vase",
      img: "/assets/Decorative-vase.webp",
      desc: "Modern ceramic vases for styling tables, shelves, and corners."
    },
    {
      title: "Storage Shelves",
      img: "/assets/Storage-shelves.jpg",
      desc: "Functional, minimal shelving units for books, decor, or storage."
    }
  ];

  return (
    <div className="page products">
      <div className="hero-section">
        <h1 className="headline">Explore Our Products</h1>
        <p className="subtext">
          Discover our curated collection of furniture, lighting, and décor essentials designed to elevate your modern home. Each product combines minimalism, functionality, and style.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card fade-in" key={index}>
            <img src={product.img} alt={product.title} loading="lazy" />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
