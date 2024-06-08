
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';


const AdminRegistro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/admins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha }),
      });
      const data = await response.json();
      setMensagem('Cadastro realizado com sucesso!');
      // Limpar os campos do formulário após o cadastro
      setNome('');
      setEmail('');
      setSenha('');
    } catch (error) {
      console.error('Erro ao cadastrar administrador:', error);
      setMensagem('Erro ao cadastrar administrador');
    }
  };
  

  
  return (
    <>
      <Container className="p-3 bg-light rounded-3 mt-3">
        <Card className="custom-card">
          <Card.Body>
            <Card.Title><strong>Cadastro de Administrador</strong></Card.Title>
            <form onSubmit={handleSubmit} className="custom-form">
              <div className="mb-3">
                <label className="form-label">Nome:</label>
                <input 
                  type="text" 
                  value={nome} 
                  onChange={(e) => setNome(e.target.value)} 
                  required 
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Senha:</label>
                <input 
                  type="password" 
                  value={senha} 
                  onChange={(e) => setSenha(e.target.value)} 
                  required 
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
            {mensagem && <p>{mensagem}</p>}
            <Link to="/" className="btn btn-secondary mt-2">Voltar para Home</Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default AdminRegistro;
