import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/YASIM_JAMADAR_RESUME.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const download=()=>{
    const downloadLink = document.createElement('a');
    downloadLink.href = pdf;
    downloadLink.download = pdf;
    
    // Append the anchor element to the document, trigger the download, and remove the element
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  return (
    <div className="resume-background activeNavlink" id="scrollResume">
      {/* <Particle2 /> */}
      <Container fluid className="resume-section">
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button onClick={download}>
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
          <Row className="resume">
            <Col md={6} className="resume-right">
              <h3 className="resume-title">Education</h3>  
              <Resumecontent
                title="Full Stack Web Developer(Full-Time)"
                content={[
                  "Masai School , Banglore",
                  "(2022) - Purscuing",
                  "1200 hours of hands - on coding.",
                  "1000 hours for DSA.",
                  "50 hours for soft skills development.",
                  "3 collaborative projects and 30+ mini-projects.",
                ]}
              />
              <Resumecontent
                title="Bachelor of Engineering & Technology (B.tech)"
                // date="2019 - 2022"
                content={[
                 
                  "Dkte Textile & Engineering Institue, Ichalkaranji.",
                  "2017-2021"
                ]}
              />

       
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={"https://drive.google.com/file/d/1XMKaCXuj8A_TLv_CDZ5J7OzLzJyRxu07/view?usp=sharing"} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV From Google Drive
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Resume;
