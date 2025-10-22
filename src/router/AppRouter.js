import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// import all pages
import Home from "../pages/Home/Home";
import DesignStyles from "../pages/DesignStyles/DesignStyles";
import Products from "../pages/Products/Products";
import Designers from "../pages/Designers/Designers";
import Feedback from "../pages/Feedback/Feedback";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-styles" element={<DesignStyles />} />
        <Route path="/products" element={<Products />} />
        <Route path="/designers" element={<Designers />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
