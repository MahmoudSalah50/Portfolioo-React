import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import "../Fotter.css";

const Footer = () => {
  return (
       <footer className="footer bg-dark text-white py-3">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100006585008629"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon me-3"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://x.com/mahmoudsalahh19"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon me-3"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/mahmoud_salah.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon me-3"
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
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end">
            <div className="footer-links">
              <Link to="/" className="footer-link me-3">Home</Link>
              <Link to="/about" className="footer-link me-3">About Me</Link>
              <Link to="/contact" className="footer-link me-3">Contact Me</Link>
              <Link to="/skills" className="footer-link me-3">Skills</Link>
              <Link to="/projects" className="footer-link">Projects</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
