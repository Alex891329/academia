import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Card } from 'react-bootstrap';
import "./Home.css";

function Home() {
  return (
    <>
      <Container className="p-3 bg-light rounded-3" style={{ marginTop: '30px' }}>
        <Card style={{ width: '30rem', backgroundColor: 'white', border: '3px solid red' }}>
          <Card.Body>
            <Card.Title><strong>Bem-vindo ao Administrador de Academia V1.0</strong></Card.Title>
            <Card.Text>Gerenciando sua academia com eficiência e simplicidade.</Card.Text>
          </Card.Body>
        </Card>
      </Container>
      

      <Container className="custom-font"  style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card style={{ width: '50rem', backgroundColor: 'white', border: '3px solid red' }}>
          <Card.Body>
            <Card.Title><strong>Descrição do Projeto</strong></Card.Title>
            <Card.Text>
              O <strong>Gerenciador de Academia Funcional Fitness</strong> é uma aplicação web desenvolvida para facilitar a gestão de academias, oferecendo uma solução completa para o controle de alunos, matrículas, agendamentos de aulas e acompanhamento de medidas corporais.
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
              <Button variant="primary">Realizar Login</Button>
            </Link>
          
        </Card>
      </Container>
    </>
  );
}

export default Home;
