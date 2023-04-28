import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import MyModal from "./Modal";
import Callme from "./Callme";
import Message from "./Message";
import Footer from "../Footer";

function Contact() {
  const [modalShow, setModalShow] = React.useState(false);
  const [callme, setCallme] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  return (
    <div className="contact-background activeNavlink" id="scrollContact">
      {/* <Particle /> */}
      <Container fluid className="home-contect-section" id="about">
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "2.3em", marginTop: "59px" }}>Contact</h1>
          </Col>
          <Col md={6} className="home-about-social">
            <ul className="home-about-social-links">
              <li className="social-icons-contect first">
                <Callme show={callme} onHide={() => setCallme(false)} />
                <span
                  onClick={() => setCallme(true)}
                  className="icon-colour home-social-icons"
                >
                  <IoCall />
                </span>
                <span 
                  className="link-text-css" 
                  id="contact-phone"
                  onClick={() => setCallme(true)}>
                  +919850340511
                </span>
              </li>
              <li className="social-icons-contect third">
                <MyModal show={modalShow} onHide={() => setModalShow(false)} />
                <span
                  onClick={() => setModalShow(true)}
                  className="icon-colour home-social-icons"
                >
                  <CgMail />
                </span>
                <span
                  className="link-text-css"
                  id="contact-email"
                  onClick={() => setModalShow(true)}
                >
                  yasinjamadar0511@gmail.com
                  <span style={{ opacity: 0 }}></span>
                </span>
              </li>
            </ul>
          </Col>
          <Col md={6} className="home-about-social">
            <ul className="home-about-social-links">
              <li className="social-icons-contect second">
                <a
                  href="https://www.linkedin.com/in/yasim-jamadar-8a3a91209/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
                <span id="contact-linkedin">
                <a
                  className="link-text-css"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/yasim-jamadar-8a3a91209/"
                >
                  www.linkedin.com/in/Yasim-Jamadar
                </a>
                </span>
              </li>
              <li className="social-icons-contect fifth">
                <a
                  href="https://github.com/Yasin051197"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
                <span id="contact-linkedin">
                <a
                  className="link-text-css"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Yasin051197"
                >
                  github.com/YasimJamadar
                </a>
                </span>
                
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default Contact;
