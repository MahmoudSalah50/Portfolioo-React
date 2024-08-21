import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Fotter";
import { motion } from "framer-motion";
import "./App.css";
import "./Fotter.css";
import "./stylee.css";

const App = () => {
  return (
    <Router>
      <div>
        <MyNavbar />
        <Container className="py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/skills"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Skills />
                </motion.div>
              }
            />
            <Route
              path="/projects"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Projects />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact />
                </motion.div>
              }
            />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
