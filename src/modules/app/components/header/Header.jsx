import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Styles
import "./Header.css";
import "../../../../css/border_animation.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";

// Paths
import path_video from "../../../../media/video/dnavideo.mp4";
import path_logo_home from "../../../../media/icons/home.png";
import logoWhite from "../../../../media/icons/Logo Cortex blanc.png";
// Contexts
import LangContext from "../../contexts/LangContext";

function Header() {
  const { language, setLanguage } = useContext(LangContext);

  // FONCTIONS LANGUES
  const assignLang = () => {
    switch (language) {
      case "fr":
        return {
          biology: "Biologie",
          physics: "Physique",
          chimestry: "Chimie",
          math: "Mathématiques",
          neuropsycho: "Neuropsychologie",
          about: "À propos",
          contact: "Contact"
        };
        break;
      case "en":
        return {
          biology: "Biology",
          physics: "Physics",
          chimestry: "Chemistry",
          math: "Mathematics",
          neuropsycho: "Neuropsychology",
          about: "About",
          contact: "Contact"
        };
        break;
      case "es":
        return {
          biology: "Biología",
          physics: "Físico",
          chimestry: "Química",
          math: "Matemáticas",
          neuropsycho: "Neuropsicología",
          about: "About",
          contact: "Contact"
        };
        break;
      default:
        break;
    }
  };

  return (
    <header>
      <div className="video">
        <video autoPlay loop muted>
          <source type="video/mp4" src={path_video} />
        </video>
      </div>

      <div className="video_layer"></div>

      {/* <div className="nav-container">
        <Navbar collapseOnSelect expand="lg" className="navbar col-11">
          <Link className="link-img" to="/">
            <img src={path_logo_home} alt="" />{" "}
          </Link>
          <Navbar.Toggle bg="light" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link className="link" to="/about">
                {assignLang().biology}
              </Link>
              <Link className="link" to="/about">
                {assignLang().physics}
              </Link>
              <Link className="link" to="/about">
                {assignLang().chimestry}
              </Link>
              <Link className="link" to="/about">
                {assignLang().math}
              </Link>
              <Link className="link" to="/about">
                {assignLang().neuropsycho}
              </Link>
              <Link className="link" to="/about">
                {assignLang().about}
              </Link>
              <Link className="link" to="/contact">
                {assignLang().contact}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div> */}

      <div className="header-logo">
        <img src={logoWhite} alt="" />
      </div>

      <div className=" d-flex justify-content-center align-items-center h-10">
        <div class="concept concept-two d-inline-flex justify-content-center">
          <div class="hover">
            <h1>C</h1>
          </div>
          <div class="hover">
            <h1>o</h1>
          </div>
          <div class="hover">
            <h1>r</h1>
          </div>
          <div class="hover">
            <h1>t</h1>
          </div>
          <div class="hover">
            <h1>e</h1>
          </div>
          <div class="hover">
            <h1>x</h1>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: "50px"
        }}
      >
        <div className="nav-container">
          <div class="border-animation from-top">#Physics</div>
          <div class="border-animation from-left">#Biology</div>
          <div class="border-animation from-right">#Mathematics</div>
          <div class="border-animation from-center">#Neuro-psycho</div>
          <div class="border-animation from-bottom">#Zoologiy</div>
          <div class="border-animation from-top">#Chimestry</div>
          <div class="border-animation from-left">#Biology</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
