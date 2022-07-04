import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/grupo.png";
import projeto from "../../Assets/Projects/projeto1.png";
import projeto2 from "../../Assets/Projects/projeto2.png";
import fox from "../../Assets/Fox.png";
function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
        <img src={fox} alt="about" className="img-fluid" />
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={projeto} alt="about" className="img-fluid" />
            <img src={projeto2} alt="about" className="img-fluid" />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default About;
