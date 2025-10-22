import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const location = useLocation();

  useEffect(() => {
    // Close menu on resize or when route changes
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const links = [
    { path: "/", label: "Home" },
    { path: "/design-styles", label: "Design Styles" },
    { path: "/products", label: "Products" },
    { path: "/designers", label: "Designers" },
    { path: "/feedback", label: "Feedback" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="navbar">
      {/* Logo + Title */}
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="HomeStyler Logo" className="logo-img" />
        <h2 className="logo-text">HomeStyler</h2>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? "toggle" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
