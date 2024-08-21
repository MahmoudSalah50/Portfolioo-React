import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import "../Fotter.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-3">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=100006585008629"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://x.com/mahmoudsalahh19"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/mahmoud_salah.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://github.com/MahmoudSalah50"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <div className="footer-links">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/about" className="footer-link">
            About Me
          </Link>
          <Link to="/contact" className="footer-link">
            Contact Me
          </Link>
          <Link to="/skills" className="footer-link">
            Skills
          </Link>
          <Link to="/projects" className="footer-link">
            Projects
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
