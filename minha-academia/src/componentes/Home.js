import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Navbar, Nav, Card, CardTitle } from 'react-bootstrap';
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Card style={{width:'20rem' , background: 'white', border: '3px solid red'}}>
        <Navbar.Brand href="#home">Administrador de Academia V1.0</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
        </Navbar.Collapse>
        </Card>
      </Navbar>

      <Container className="p-3 bg-light rounded-3" style={{ marginTop: '30px' }}>
        <Card style={{width: '30rem', backgroundColor: 'white', border: '3px solid red' }}>
        <Card.Body>
          <CardTitle><strong>Bem-vindo ao Administrador de Academia V1.0</strong></CardTitle>
        <Card.Text>Gerenciando sua academia com eficiência e simplicidade.</Card.Text>
        </Card.Body>
        </Card>
      </Container>

      <Container className="container-sm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '40vh' }}>
  <Card style={{ width: '18rem', backgroundColor: 'white', border: '3px solid red' }}>
    <Card.Body>
      <Card.Title><strong>Recursos do Sistema</strong></Card.Title>
      <Card.Text>Com nosso sistema, você pode acompanhar o progresso dos alunos, gerenciar horários de aulas, monitorar a frequência e muito mais.</Card.Text>
      <Link to="/login">
        <Button variant="primary">Realizar Login</Button>
      </Link>
    </Card.Body>
  </Card>
</Container>

      
    </>
  );
}

export default Home;



