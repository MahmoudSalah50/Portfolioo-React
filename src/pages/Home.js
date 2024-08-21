import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import img from "../images/me.jpg";
import { Link } from "react-router-dom";

const textParts = [
  { text: "Hi,", color: "#ff6347" },
  { text: "I’m", color: "#4682b4" },
  { text: "[Mahmoud Salah]", color: "#32cd32" },
  { text: "I’m", color: "#ff1493" },
  {
    text: " Front-End Developer with a passion for building beautiful and functional user interfaces.",
    color: "#1e90ff",
  },
];

const cardTextParts = {
  about: [
    { text: "I am Mahmoud Salah,", color: "#ff6347" },
    {
      text: "I graduated from the Faculty of Computer and Information Science,",
      color: "#4682b4",
    },
    { text: "Kafrelsheikh University.", color: "#32cd32" },
  ],
  projects: [
    { text: "Check out some of my recent projects", color: "#ff6347" },
    { text: "and see what I've been working on.", color: "#4682b4" },
    {
      text: "Each project demonstrates my skills and creativity.",
      color: "#32cd32",
    },
  ],
  contact: [
    {
      text: "Feel free to reach out to me for any inquiries or opportunities.",
      color: "#ff6347",
    },
    {
      text: "I’m always excited to collaborate and explore new ideas.",
      color: "#4682b4",
    },
  ],
};

const textAnimation = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

const Home = () => {
  return (
    <Container fluid className="home-container py-3">
      <Row className="text-center mb-4">
        <Col>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="profile-section"
          >
            <Image
              src={img}
              roundedCircle
              className="profile-image"
              alt="Profile"
              style={{
                width: "150px",
                height: "150px",
                border: "5px solid #fff",
              }}
            />
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ marginTop: "20px" }}
            >
              {textParts.slice(0, 4).map((part, index) => (
                <motion.span
                  key={index}
                  {...textAnimation(index * 0.6)}
                  style={{ color: part.color, margin: "0 5px" }}
                >
                  {part.text}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="profile-text"
              style={{ marginTop: "20px", lineHeight: "1.6" }}
            >
              {textParts.slice(4).map((part, index) => (
                <motion.span
                  key={index}
                  {...textAnimation(index * 0.6)}
                  style={{
                    color: part.color,
                    display: "inline-block",
                    margin: "0 3px",
                  }}
                >
                  {part.text}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </Col>
      </Row>

      <Row className="text-center mb-5">
        <Col md={4}>
          <Card className="mb-4 shadow-lg border-0">
            <Card.Body>
              <Card.Title className="text-primary">
                <motion.span {...textAnimation(0)} style={{ color: "#ff6347" }}>
                  About Me
                </motion.span>
              </Card.Title>
              <Card.Text>
                {cardTextParts.about.map((part, index) => (
                  <motion.span
                    key={index}
                    {...textAnimation(index * 0.5)}
                    style={{ color: part.color, display: "block" }}
                  >
                    {part.text}
                  </motion.span>
                ))}
              </Card.Text>
              <Link className="btn btn-outline-primary" to="/about">
                Read More..
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-lg border-0">
            <Card.Body>
              <Card.Title className="text-primary">
                <motion.span {...textAnimation(0)} style={{ color: "#ff6347" }}>
                  Projects
                </motion.span>
              </Card.Title>
              <Card.Text>
                {cardTextParts.projects.map((part, index) => (
                  <motion.span
                    key={index}
                    {...textAnimation(index * 0.5)}
                    style={{ color: part.color, display: "block" }}
                  >
                    {part.text}
                  </motion.span>
                ))}
              </Card.Text>
              <Link className="btn btn-outline-primary" to="/projects">
                View Projects
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-lg border-0">
            <Card.Body>
              <Card.Title className="text-primary">
                <motion.span {...textAnimation(0)} style={{ color: "#ff6347" }}>
                  Contact
                </motion.span>
              </Card.Title>
              <Card.Text>
                {cardTextParts.contact.map((part, index) => (
                  <motion.span
                    key={index}
                    {...textAnimation(index * 0.5)}
                    style={{ color: part.color, display: "block" }}
                  >
                    {part.text}
                  </motion.span>
                ))}
              </Card.Text>
              <Link className="btn btn-outline-primary" to="/contact">
                Go To..
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
