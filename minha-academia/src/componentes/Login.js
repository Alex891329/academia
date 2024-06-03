import { useNavigate } from 'react-router-dom';
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './Login.css';

function Login() {
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        senha,
      });

      if (response.data === 'Login realizado com sucesso') {
        navigate('/dashboard');
      } else {
        console.error('Falha no login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ marginBottom: '30px', background: 'white', border: '3px solid red' }}>Login</h1>
      <Card style={{ width: '300px', padding: '20px', background: 'white', border: '3px solid red' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Usuário</Form.Label>
            <Form.Control type="email" placeholder="Insira o usuário" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>
      </Card>
      <Link to="/">
        <Button variant="link">Voltar para Home</Button>
      </Link>
    </Container>
  );
}

export default Login;

