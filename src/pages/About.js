import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Img2 from "../images/me2.jpg";

const textAnimation = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

const About = () => {
  return (
    <Container className="py-4 mt-5">
      <Row className="mb-4">
        <Col md={6} className="mb-4 d-flex align-items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <Image
              src={Img2}
              roundedCircle
              alt="Profile"
              style={{
                width: "300px",
                height: "300px",
                border: "4px solid #ddd",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.h2
            {...textAnimation(0.3)}
            style={{ marginBottom: "20px", color: "#333" }}
          >
            About Me
          </motion.h2>
          <motion.p
            {...textAnimation(0.6)}
            style={{ fontSize: "1.3rem", lineHeight: "1.8", color: "#555" }}
          >
            I am Mahmoud Salah, a Frontend developer with proficient knowledge
            in HTML, CSS, JavaScript, and React.js. I am an inspirational
            individual who always strives for success and achievements in every
            aspect of my professional life. I have an unparalleled passion for
            learning and personal development, and I always seek to enhance my
            skills and knowledge in multiple fields.
          </motion.p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <motion.h4
                {...textAnimation(1.8)}
                style={{ marginBottom: "15px", color: "#007bff" }}
              >
                Education
              </motion.h4>
              <motion.p
                {...textAnimation(2.1)}
                style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}
              >
                Kafrelsheikh University
                <br />
                Faculty of Computer and Information Science
                <br />
                Graduated: June 2023
                <br />
                Grade: Very Good
              </motion.p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <motion.h4
                {...textAnimation(2.4)}
                style={{ marginBottom: "15px", color: "#007bff" }}
              >
                GitHub
              </motion.h4>
              <motion.p
                {...textAnimation(2.7)}
                style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}
              >
                Check out my projects and contributions on GitHub:
              </motion.p>
              <Button
                variant="outline-primary"
                href="https://github.com/MahmoudSalah50"
                target="_blank"
                rel="noopener noreferrer"
              >
                My GitHub Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="text-center mb-4">
        <Col>
          <motion.h4
            {...textAnimation(1.2)}
            style={{ marginBottom: "15px", color: "#007bff" }}
          >
            Contact Information
          </motion.h4>
          <motion.p
            {...textAnimation(1.5)}
            style={{ fontSize: "1.2rem", color: "#555" }}
          >
            <strong>Phone:</strong> 015 50 740 490
          </motion.p>
          <motion.p
            {...textAnimation(1.8)}
            style={{ fontSize: "1.2rem", color: "#555" }}
          >
            <strong>Email:</strong> mahmoudsalah20012001@gmail.com
          </motion.p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
