import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Dashboard.css'; // Importe o arquivo CSS


function Dashboard() {
  const handleLogout = () => {
    // Implemente aqui a lógica para fazer logout
  };

  return (
    <div className="container">
      <Card style={{width: '30rem', backgroundColor: 'white', border: '3px solid red' }}>
        <Card.Body>
          <h1>Bem-vindo ao Dashboard</h1>
          <Card.Text>
            {/* Conteúdo do Dashboard aqui */}
          </Card.Text>
        </Card.Body>
      </Card>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100vh' }}>
  <Link to="/">
    <Button variant="danger" onClick={handleLogout}>
      Sair
    </Button>
  </Link>
</div>

    </div>
  );
}

export default Dashboard;