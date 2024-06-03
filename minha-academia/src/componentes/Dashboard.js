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
      <Card className="form-container">
        <Card.Body>
          <h1>Bem-vindo ao Dashboard</h1>
          <Card.Text>
            {/* Conteúdo do Dashboard aqui */}
          </Card.Text>
          <Link to="/">
            <Button variant="danger" onClick={handleLogout}>
              Sair
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Dashboard;

