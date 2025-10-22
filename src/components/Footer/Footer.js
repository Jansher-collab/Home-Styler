import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ---------- COLUMN 1: BRAND ---------- */}
        <div className="footer-col brand">
          <div className="footer-logo-container">
            <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="HomeStyler Logo" className="footer-logo-img" />
            <h2 className="footer-logo-text">HomeStyler</h2>
          </div>
          <p className="footer-desc">
            Transform your living space into a masterpiece.  
            Design with passion, style with purpose.
          </p>
        </div>

        {/* ---------- COLUMN 2: PAGES (Part 1) ---------- */}
        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/design-styles">Design Styles</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/designers">Designers</Link></li>
          </ul>
        </div>

        {/* ---------- COLUMN 3: PAGES (Part 2) ---------- */}
        <div className="footer-col">
          <h3>More</h3>
          <ul>
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        {/* ---------- COLUMN 4: SOCIAL MEDIA ---------- */}
        <div className="footer-col social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/923272007787?text=Hi%20HomeStyler!%20I%20need%20some%20help%20regarding%20your%20services." target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HomeStyler. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
