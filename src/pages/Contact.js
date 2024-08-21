import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import "../Contact.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    send(
      "service_luka",
      "template_luka",
      {
        to_name: "mahmoudsalah20012001@gmail.com",
        from_name: form.name.value,
        from_email: form.email.value,
        message: form.message.value,
      },
      "Uuwni3xgXes-BEOvc"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        form.reset();
      })
      .catch((err) => {
        console.log("FAILED...", err);
        Swal.fire({
          title: "Failed!",
          text: "Failed to send message.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <Container className="py-4 mt-3">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        className="contact-form"
      >
        <h2 className="text-center mb-4">Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={4}
              placeholder="Your message"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </motion.div>
    </Container>
  );
};

export default Contact;
