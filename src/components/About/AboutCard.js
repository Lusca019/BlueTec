import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: '#121212' }}>
            Somos um grupo de estudantes do Senai RJ do curso técnico de mecânica, aplicados para a
            implementação de novidades no ramo industrial, visando melhorar processos e otimizar
            tempo. Em razão da necessidade de elaborarmos um projeto final para a conclusão do nosso
            curso projetamos e prototipamos uma máquina semiautomática para o corte de flanges
            industriais, a FoxCorte, esta se viabiliza por atender todos os requisitos da demanda em
            questão e continuamos em busca de novas inovações para atender melhor as demandas de
            nossos clientes.
          </p>

       
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
