import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Dashboard.css'; // Importe o arquivo CSS

function Dashboard() {
  const [alunos, setAlunos] = useState([]);
  const [alunoSelecionado, setAlunoSelecionado] = useState('');
  const [alunoInfo, setAlunoInfo] = useState(null);

  useEffect(() => {
    fetchAlunos();
  }, []);

  const fetchAlunos = async () => {
    const response = await fetch('http://localhost:3000/alunos');
    const data = await response.json();
    setAlunos(data);
  };

  const handleLogout = () => {
    // Implemente aqui a lógica para fazer logout
  };

  const [alunoTemp, setAlunoTemp] = useState(null);

  const handleAlunoChange = (event) => {
    const id = event.target.value;
    setAlunoSelecionado(id);
    const alunoSelecionado = alunos.find(aluno => aluno._id === id);
    setAlunoTemp(alunoSelecionado);
  };
  
  const handleDeleteAluno = async (id) => {
    try {
      await fetch(`http://localhost:3000/alunos/${id}`, {
        method: 'DELETE',
      });
      alert('Aluno excluído com sucesso');
      fetchAlunos(); // Atualiza a lista de alunos após a exclusão
    } catch (error) {
      console.error(error);
      alert('Erro ao excluir aluno');
    }
  };

  return (
    <div className="container">
      <Card style={{width: '30rem', backgroundColor: 'white', border: '3px solid red' }}>
        <Card.Body>
          <h1>Bem-vindo ao Dashboard</h1>
          <Card.Text>
            <select value={alunoSelecionado} onChange={handleAlunoChange}>
              <option value="">Selecione um aluno</option>
              {alunos.map((aluno) => (
                <option key={aluno._id} value={aluno._id}>{aluno.nome}</option>
              ))}
              
            </select>
            <Button variant="primary" onClick={() => setAlunoInfo(alunoTemp)}>OK</Button>
            {alunoInfo && (
              <div>
                <h2>Informações do Aluno</h2>
                <p><strong>Nome:</strong> {alunoInfo.nome}</p>
                <p><strong>Altura:</strong> {alunoInfo.altura}</p>
                <p><strong>Peso:</strong> {alunoInfo.peso}</p>
                <p><strong>Início:</strong> {alunoInfo.inicio}</p>
                <Button variant="danger" onClick={() => handleDeleteAluno(alunoInfo._id)}>Excluir</Button>
              </div>
            )}
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
