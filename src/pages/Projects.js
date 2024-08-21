import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../project.css";

import kud from "../images/kudzoka.png";
import creat from "../images/craet.png";
import card from "../images/card.webp";
import res from "../images/res.webp";
import cars from "../images/cars.webp";
import stu from "../images/stu.webp";

const projects = [
  {
    title: "KUDZOKA-PROJECT",
    imgSrc: kud,
    link: "https://github.com/MahmoudSalah50/KUDZOKA-PROJECT",
  },
  {
    title: "CREATIVE-PROJECT",
    imgSrc: creat,
    link: "https://github.com/MahmoudSalah50/CREATIVE-PROJECT",
  },
  {
    title: "CARD",
    imgSrc: card,
    link: "https://github.com/MahmoudSalah50/CARD",
  },
  {
    title: "Resturant-website",
    imgSrc: res,
    link: "https://github.com/MahmoudSalah50/Resturant-website",
  },
  {
    title: "E-Commerce--Cars",
    imgSrc: cars,
    link: "https://github.com/MahmoudSalah50/E-Commerce--Cars",
  },
  {
    title: "Website--React",
    imgSrc: stu,
    link: "https://github.com/MahmoudSalah50/Website--React",
  },
];

const Projects = () => {
  return (
    <Container className="py-4 mb-4 mt-5">
      <h2 className="text-center mb-4">Without Framework</h2>
      <Row>
        {projects.slice(0, 3).map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src={project.imgSrc} />
              <Card.Body>
                <Card.Title className="card-title">{project.title}</Card.Title>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-container"
                >
                  <Button variant="success">View Project</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 className="text-center mb-4">With Framework</h2>
      <Row>
        {projects.slice(3).map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src={project.imgSrc} />
              <Card.Body>
                <Card.Title className="card-title">{project.title}</Card.Title>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-container"
                >
                  <Button variant="success">View Project</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
