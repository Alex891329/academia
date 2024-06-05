import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Dashboard.css'; // Importe o arquivo CSS

function Dashboard() {
  const handleLogout = () => {
    // Implemente aqui a lógica para fazer logout
  };

  return (
    <Container className="p-3">
      <Row className="mb-4">
        <Col>
          <Card className="text-center" style={{ backgroundColor: 'white', border: '3px solid red' }}>
            <Card.Body>
              <h1>Bem-vindo ao Dashboard</h1>
              <Card.Text>Gerenciando sua academia com eficiência e simplicidade.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="text-center" style={{ backgroundColor: 'white', border: '3px solid red' }}>
            <Card.Body>
              <Card.Title>Total de Alunos Cadastrados</Card.Title>
              <Card.Text>150</Card.Text> {/* Exemplo de dado */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="text-center" style={{ backgroundColor: 'white', border: '3px solid red' }}>
            <Card.Body>
              <Card.Title>Matrículas em Dia</Card.Title>
              <Card.Text>120</Card.Text> {/* Exemplo de dado */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="text-center" style={{ backgroundColor: 'white', border: '3px solid red' }}>
            <Card.Body>
              <Card.Title>Aulas Agendadas para Hoje</Card.Title>
              <Card.Text>10</Card.Text> {/* Exemplo de dado */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="text-center" style={{ backgroundColor: 'white', border: '3px solid red' }}>
            <Card.Body>
              <Card.Title>Média de Altura dos Alunos</Card.Title>
              <Card.Text>1.75m</Card.Text> {/* Exemplo de dado */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="text-center" style={{ backgroundColor: 'white', border: '3px solid red' }}>
            <Card.Body>
              <Card.Title>Média de Peso dos Alunos</Card.Title>
              <Card.Text>70kg</Card.Text> {/* Exemplo de dado */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <Link to="/">
          <Button variant="danger" onClick={handleLogout}>
            Sair
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default Dashboard;


