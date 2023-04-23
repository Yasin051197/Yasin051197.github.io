/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/Sp.jpg";
import resume from "../Assets/"
function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);


  const scrollToFunction = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    updateExpanded(false);
  };

  // console.log("scrollintoview", window);
  function scrollHandler() {
    if (window.scrollY >= 5) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  const newtab = () => {
    const resumeFileName = 'resume.pdf';
    
    // Create a new anchor element to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = resume;
    downloadLink.download = resume;
    
    // Append the anchor element to the document, trigger the download, and remove the element
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Redirect to a new URL after a brief delay (in this example, 2 seconds)
    setTimeout(() => {
      window.open('https://drive.google.com/file/d/1XMKaCXuj8A_TLv_CDZ5J7OzLzJyRxu07/view?usp=sharing', '_blank');
    }, 2000);
  }
  // active class on scroll and click event on navbar items
  const li = document.querySelectorAll(".nav-link");
  const section = document.querySelectorAll(".activeNavlink");
  function acvtiveMenu() {
    let len = section.length;
    for (let i = 0; i < len; i++) {
      let sectionTop = section[i].offsetTop;
      let sectionHeight = section[i].offsetHeight;
      let variableHeight = sectionHeight / 4;

      if (pageYOffset > sectionTop - sectionHeight / 3 + variableHeight) {
        li.forEach((li) => {
          li.classList.remove("active");
        });
        li[i].classList.add("active");
      }
    }
  }
  acvtiveMenu();
  window.addEventListener("scroll", acvtiveMenu);

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                // as={Link}
                // to="/"
                onClick={() => scrollToFunction("scrollHome")}
              >
                {/* <span style={pathname === "/" ? { color: "#0095ff", fontWeight: "bold" } : {}}>Home</span> */}
                <span>Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                // as={Link}
                // to="/about"
                onClick={() => scrollToFunction("scrollAbout")}
              >
                {/* <span style={pathname === "/about" ? { color: "#0095ff", fontWeight: "bold" } : {}}>About</span> */}
                <span>About</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                // as={Link}
                // to="/skill"
                onClick={() => scrollToFunction("scrollSkills")}
              >
                {/* <span style={pathname === "/skill" ? { color: "#0095ff", fontWeight: "bold" } : {}}>Skills</span> */}
                <span>Skills</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                // as={Link}
                // to="/project"
                onClick={() => scrollToFunction("scrollProjects")}
              >
                {/* <span style={pathname === "/project" ? { color: "#0095ff", fontWeight: "bold" } : {}}>Projects</span> */}
                <span>Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                // as={Link}
                // to="/resume"
                
              >
                {/* <span style={pathname === "/resume" ? { color: "#0095ff", fontWeight: "bold" } : {}}>Resume</span> */}
                
                <Nav onClick={()=>newtab()}>Resume</Nav>
                
              </Nav.Link>
            </Nav.Item>

           

            <Nav.Item>
              <Nav.Link
                // as={Link}
                // to="/contact"
                onClick={() => scrollToFunction("scrollContact")}
              >
                {/* <span style={pathname === "/contact" ? { color: "#0095ff", fontWeight: "bold" } : {}}>Contact</span> */}
                <span>Contact</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">
          <img style={{borderRadius:"50px",marginTop:"5px"}} src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
