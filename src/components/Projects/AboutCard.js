import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: '#121212' }}>
            As novas tecnologias facilitam a criação de soluções inovadoras para a resolução de
            problemas que permeiam a sociedade. Essas inovações permitem, dentre outras coisas,
            otimizar processos, reduzir recursos e auxiliar o meio ambiente para fazer com que ocorram
            ações voltadas para a sustentabilidade. A tecnologia e pensamento voltado para inovação
            fazem surgir novas possibilidades de atuação. No âmbito das indústrias metalmecânicas é
            identificada uma importante forma de proporcionar a inovação.
            Surge a necessidade da implantação de uma solução que otimize o processo de
            produção de flanges, sejam elas de ferro ou aço carbono. Esta necessidade, além de facilitar o
            corte destes, contribui para a otimização do tempo gasto no processo de produção das
            indústrias. Neste sentido surge o objetivo de criar uma máquina de corte semiautomática de
            chapas para sanar esta demanda.
            A justificativa desta proposta baseia-se no atingimento de vários processos ao mesmo
            tempo: diminui recursos humanos, contribui para a redução do tempo gasto nos processos de
            produção e maximiza os resultados.
            A cortadora de flanges é composta por uma mesa central acoplada a uma aste com
            eixo rotativo e um conjunto de engrenagens para a redução da velocidade giratória junto ao
            motor elétrico. Conta ainda com um sistema de corte por meio de maçaricos e saídas de alta
            precisão para o melhor desempenho do corte e regulagem de altura em relação a chapa e
            réguas graduadas para o dimensionamento do corte. Este sistema necessita ser operado por
            um colaborador.
            Espera-se que a partir da apresentação da proposta a empresa, e posterior adesão, a
            redução de custos e de mão de obras possam representar valores na ordem de 50 % e retorno
            do investimento em 3 meses, além de economia de tempo de corte de 40 % por flange, tempo
            em comparação com o processo vigente.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
