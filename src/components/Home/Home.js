import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Blue tec.png";
import mechanic from "../../Assets/mechanic.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import {
  AiTwotoneMail,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
   
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em",color: '#121212' }}>
              Seja bem-vindo a<span className="purple"> BlueTec </span></h1>
            <p className="home-about-body">
              Somos uma empresa especializada no corte de flanges para as mais variadas áreas da
              indústria. Nossa proposta é buscar sempre a inovação visando o melhor para os nossos
              clientes.
              <br />
              <br />

              Nossa metodologia visa a qualidade, eficiência e confiabilidade, sem deixar a segurança de
              lado.

              <br />
              <br />
              Estamos sempre pensando no futuro, mas sem esquecer do presente.  &nbsp;

              <br />
              <br />
              Visite nossa área de projetos para conhecer nossa mais nova invenção! 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              <img
                src={mechanic}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE-NOS EM</h1>
            <p>
              Sinta-se livre para nos seguir em
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:Bluetecnologias2022@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiTwotoneMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/blue-tecnologias-55b679243/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Home;
