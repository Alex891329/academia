import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ marginBottom: '20px' }}>Home Page</h1>
      <Link to="/login">
        <Button variant="primary">Ir para Login</Button>
      </Link>
    </Container>
  );
}

export default Home;

