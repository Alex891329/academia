import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Form, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', { email, senha });

      if (response.data.message === 'Login realizado com sucesso') {
        navigate('/dashboard');
      } else {
        console.error('Falha no login', response.data);
      }
    } catch (error) {
      console.error('Erro na requisição:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Container className="login-container">
      <h1 className="login-title">Login TIP</h1>
      <Card className="login-card">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email : </Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Digite seu email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha: </Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Digite sua senha" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="login-button">
            Entrar
          </Button>
        </Form>
      </Card>
      <Link to="/">
        <Button variant="link" className="back-button">
          Voltar para Home
        </Button>
      </Link>
    </Container>
  );
}

export default Login;
