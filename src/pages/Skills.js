import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

import reactImg from "../images/react.png";
import bootstrapImg from "../images/boot.jpg";
import jsImg from "../images/js.png";
import cssImg from "../images/css.png";
import tailwindImg from "../images/taliwand.png";
import reduxImg from "../images/redux.png";
import htmlImg from "../images/html.png";
import es6Img from "../images/ex6.jpg";

const skills = [
  { name: "HTML", image: htmlImg },
  { name: "React", image: reactImg },
  { name: "Bootstrap", image: bootstrapImg },
  { name: "JavaScript", image: jsImg },
  { name: "CSS", image: cssImg },
  { name: "Tailwind CSS", image: tailwindImg },
  { name: "Redux", image: reduxImg },
  { name: "ES6", image: es6Img },
];

const cardAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
};

const hoverAnimation = {
  scale: 1.1,
  boxShadow: "0 15px 25px rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
};

const Skills = () => {
  return (
    <Container className="py-4 mt-5">
      <Row>
        {skills.map((skill, index) => (
          <Col
            md={6}
            lg={3}
            key={index}
            className="mb-4 d-flex align-items-stretch"
          >
            <motion.div
              {...cardAnimation}
              whileHover={hoverAnimation}
              transition={{ ...cardAnimation.transition, delay: index * 0.2 }}
              className="d-flex align-items-center"
            >
              <Card
                className="shadow-lg border-0"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
              >
                <Card.Img
                  variant="top"
                  src={skill.image}
                  alt={skill.name}
                  style={{
                    height: "120px",
                    width: "120px",
                    objectFit: "contain",
                    margin: "auto",
                    padding: "10px",
                  }}
                />
                <Card.Body style={{ textAlign: "center", padding: "10px" }}>
                  <motion.h5
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    style={{
                      fontSize: "1.25rem",
                      color: "#007bff",
                      fontWeight: "bold",
                    }}
                  >
                    {skill.name}
                  </motion.h5>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
