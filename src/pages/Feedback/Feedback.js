import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Feedback.css";

function Feedback() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    else if (!/^[A-Z][a-zA-Z\s]*$/.test(formData.name))
      newErrors.name = "Name must start with a capital letter.";

    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    if (!formData.feedback) newErrors.feedback = "Feedback cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess(true);
      setTimeout(() => navigate("/"), 2000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page feedback">
      {/* ---------- MODERN HERO ---------- */}
      <section className="modern-hero">
        <div className="hero-content fade-in">
          <h1>We’d Love Your Feedback</h1>
          <div className="underline"></div>
          <p>
            Help us shape the future of <b>HomeStyler</b>. Your insights make our
            designs smarter, faster, and more beautiful.
          </p>
          <button
            className="hero-btn"
            onClick={() =>
              document.querySelector(".feedback-section").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Share Feedback
          </button>
        </div>
        <div className="hero-illustration">
          <img
            src="/assets/feedback-illustration.webp"
            alt="Feedback Illustration"
          />
        </div>
        <div className="hero-shape shape1"></div>
        <div className="hero-shape shape2"></div>
        <div className="hero-shape shape3"></div>
      </section>

      {/* ---------- REST OF THE PAGE (unchanged) ---------- */}
      <section className="feedback-section fade-in">
        <h2>Share Your Thoughts</h2>
        <p className="section-subtext">
          Let us know what you love, what could be better, or any new ideas you
          have in mind.
        </p>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <i className="icon fa fa-user"></i>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            <i className="icon fa fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group textarea-group">
            <i className="icon fa fa-comment"></i>
            <textarea
              name="feedback"
              placeholder="Write your feedback..."
              value={formData.feedback}
              onChange={handleChange}
              rows="5"
            ></textarea>
            {errors.feedback && <p className="error-text">{errors.feedback}</p>}
          </div>

          <button type="submit" className="gradient-btn">
            <span>Send Feedback</span>
          </button>

          {success && (
            <p className="success-text">
               Thank you for your feedback! Redirecting to Home...
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

export default Feedback;
