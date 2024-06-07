import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Card } from 'react-bootstrap';
import "./Home.css";

function Home() {
  return (
    <>
      <Container className="p-3 bg-light rounded-3 mt-3">
        <Card className="custom-card">
          <Card.Body>
            <Card.Title><strong>Bem-vindo a TIP </strong></Card.Title>
            
          </Card.Body>
        </Card>
      </Container>

      <Container className="custom-font mt-3 d-flex flex-column align-items-center">
        <Card className="custom-card-wide">
          <Card.Body>
            <Card.Title><strong>Descrição do Projeto</strong></Card.Title>
            <Card.Text>
              O <strong>Gerenciador de Academia TIP</strong> é uma aplicação web desenvolvida para facilitar a gestão de academias, oferecendo uma solução completa para o controle de alunos, matrículas, agendamentos de aulas e acompanhamento de medidas corporais.
            </Card.Text>
            <Card.Text>
              <strong>Funcionalidades Principais:</strong>
              <ul>
                <li>Cadastro de Alunos</li>
                <li>Gerenciamento de Matrículas</li>
                <li>Agendamento de Aulas</li>
                <li>Acompanhamento de Medidas Corporais (altura, peso, etc.)</li>
              </ul>
            </Card.Text>
            <Card.Text>
              <strong>Tecnologias Utilizadas:</strong>
              <ul>
                <li>Frontend: React, HTML, CSS, Bootstrap</li>
                <li>Backend: Node.js, Express</li>
                <li>Banco de Dados: MongoDB</li>
                <li>Autenticação: JWT (JSON Web Tokens)</li>
                <li>Comunicação entre Frontend e Backend: Axios</li>
              </ul>
            </Card.Text>
            <Card.Text>
              O projeto visa proporcionar uma ferramenta prática e eficiente para gestores de academias, otimizando processos administrativos e melhorando a experiência dos alunos. Além disso, a aplicação foi desenvolvida seguindo as melhores práticas de segurança e proteção de dados, em conformidade com a LGPD (Lei Geral de Proteção de Dados).
            </Card.Text>
          </Card.Body>
          <Link to="/login">
            <Button variant="primary" className="login-button">Realizar Login</Button>
          </Link>
        </Card>
      </Container>
    </>
  );
}

export default Home;
