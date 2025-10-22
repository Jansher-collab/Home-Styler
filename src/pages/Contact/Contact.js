import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Z][a-zA-Z\s]*$/.test(formData.name.trim())) {
      newErrors.name = "Name must start with a capital letter.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{11}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be exactly 11 digits.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 11);
      setFormData({ ...formData, phone: digits });
      setErrors({ ...errors, phone: "" });
      return;
    }
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="page contact">
      <section className="contact-intro">
        <h1 className="headline">Get in Touch with HomeStyler</h1>
        <p className="subtext">
          Whether you’re starting a design project, need help with a product, or simply want to connect —
          we’re here for you. Fill out the form or contact us via WhatsApp below.
        </p>
      </section>

      <section className="contact-info">
        <div className="info-box">
          <h3>Email</h3>
          <p>support@homestyler.com</p>
        </div>
        <div className="info-box">
          <h3>Phone</h3>
          <p>+92 3272007787</p>
        </div>
        <div className="info-box">
          <h3>Office</h3>
          <p>North Nazimabad, Karachi</p>
        </div>
        <div className="info-box">
          <h3>Working Hours</h3>
          <p>Mon - Sat : 9:00 AM - 6:00 PM</p>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="whatsapp-section">
        <h2>Chat with Us on WhatsApp</h2>
        <p>
          Prefer instant messaging? Reach out directly via WhatsApp — we’ll respond as soon as possible.
        </p>
        <a
          href="https://wa.me/923272007787?text=Hi%20HomeStyler!%20I%20need%20some%20help%20regarding%20your%20services."
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i> Start Chat
        </a>
      </section>

      <section className="contact-layout">
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-label="Your Name"
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-label="Your Email"
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone (11 digits)"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-label="Phone number"
                />
                {errors.phone && <p className="error-text">{errors.phone}</p>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  aria-label="Your Message"
                ></textarea>
                {errors.message && <p className="error-text">{errors.message}</p>}
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </div>

            {success && (
              <p className="success-text">
                 Message sent successfully! Redirecting to Home...
              </p>
            )}
          </form>
        </div>

        <div className="map-section">
          <h2>Find Us on the Map</h2>
          <div className="map-container" aria-hidden="false">
            <iframe
              title="HomeStyler Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.021064612456!2d-122.41941558467807!3d37.77492927975962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858188b7e5d7a5%3A0x4b4a7b06a5555b1d!2sDesign%20City%2C%20CA!5e0!3m2!1sen!2sus!4v1697038000000!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
