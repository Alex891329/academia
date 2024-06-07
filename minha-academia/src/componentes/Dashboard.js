import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Dashboard.css'; // Importe o arquivo CSS

function Dashboard() {
  const [alunos, setAlunos] = useState([]);
  const [alunoSelecionado, setAlunoSelecionado] = useState('');
  const [alunoInfo, setAlunoInfo] = useState(null);
  const [alunoAtualizado, setAlunoAtualizado] = useState({ nome: '', altura: '', peso: '', inicio: '' });
  const [showModal, setShowModal] = useState(false);
  const [novoAluno, setNovoAluno] = useState({ nome: '', altura: '', peso: '', inicio: '' });

  useEffect(() => {
    fetchAlunos();
  }, []);

  const fetchAlunos = async () => {
    try {
      const response = await fetch('http://localhost:3000/alunos');
      const data = await response.json();
      setAlunos(data);
    } catch (error) {
      console.error('Erro ao buscar alunos:', error);
    }
  };

  const handleLogout = () => {
    // Implementação do logout
  };

  const handleAlunoChange = (event) => {
    const id = event.target.value;
    setAlunoSelecionado(id);
    const alunoSelecionado = alunos.find(aluno => aluno._id === id);
    setAlunoInfo(alunoSelecionado);
  };

  const handleInputChange = (event) => {
    setAlunoAtualizado({ ...alunoAtualizado, [event.target.name]: event.target.value });
  };

  const handleNovoAlunoChange = (event) => {
    setNovoAluno({ ...novoAluno, [event.target.name]: event.target.value });
  };

  const handleUpdateAluno = async (id, alunoAtualizado) => {
    try {
      const response = await fetch(`http://localhost:3000/alunos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(alunoAtualizado),
      });

      if (!response.ok) {
        throw new Error('Erro na atualização do aluno');
      }

      const data = await response.json();
      console.log('Aluno atualizado:', data);

      alert('Aluno atualizado com sucesso');
      fetchAlunos(); // Atualiza a lista de alunos após a atualização
    } catch (error) {
      console.error(error);
      alert('Erro ao atualizar aluno');
    }
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

  const handleCadastrarNovoAluno = async () => {
    try {
      const response = await fetch('http://localhost:3000/alunos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(novoAluno),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar novo aluno');
      }

      const data = await response.json();
      console.log('Novo aluno cadastrado:', data);

      alert('Novo aluno cadastrado com sucesso');
      fetchAlunos(); // Atualiza a lista de alunos após o cadastro
      setShowModal(false); // Fecha o modal após o cadastro
      setNovoAluno({ nome: '', altura: '', peso: '', inicio: '' }); // Limpa o formulário do modal
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar novo aluno');
    }
  };

  return (
    <div className="container">
      <Card style={{ width: '30rem', backgroundColor: 'white', border: '3px solid red' }}>
        <Card.Body>
          <h1>Bem-vindo ao Dashboard</h1>
          <Card.Text>
            <select value={alunoSelecionado} onChange={handleAlunoChange}>
              <option value="">Selecione um aluno</option>
              {alunos.map((aluno) => (
                <option key={aluno._id} value={aluno._id}>{aluno.nome}</option>
              ))}
            </select>
            <Button variant="primary" onClick={() => setAlunoInfo(alunoInfo)}>OK</Button>
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
            {alunoInfo && (
              <div>
                <h2>Atualizar Aluno</h2>
                <input type="text" name="nome" value={alunoAtualizado.nome} onChange={handleInputChange} placeholder="Nome" />
                <input type="text" name="altura" value={alunoAtualizado.altura} onChange={handleInputChange} placeholder="Altura" />
                <input type="text" name="peso" value={alunoAtualizado.peso} onChange={handleInputChange} placeholder="Peso" />
                <input type="text" name="inicio" value={alunoAtualizado.inicio} onChange={handleInputChange} placeholder="Início" />
                <Button variant="primary" onClick={() => handleUpdateAluno(alunoInfo._id, alunoAtualizado)}>Atualizar</Button>
              </div>
            )}
            <Button variant="success" onClick={() => setShowModal(true)}>Cadastrar Novo Aluno</Button>
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

      {/* Modal para cadastro de novo aluno */}
      <Modal style={{backgroundColor: 'white'}} show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Novo Aluno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={novoAluno.nome}
                onChange={handleNovoAlunoChange}
                placeholder="Nome"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Altura</Form.Label>
              <Form.Control
                type="text"
                name="altura"
                value={novoAluno.altura}
                onChange={handleNovoAlunoChange}
                placeholder="Altura"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Peso</Form.Label>
              <Form.Control
                type="text"
                name="peso"
                value={novoAluno.peso}
                onChange={handleNovoAlunoChange}
                placeholder="Peso"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Início</Form.Label>
              <Form.Control
                type="text"
                name="inicio"
                value={novoAluno.inicio}
                onChange={handleNovoAlunoChange}
                placeholder="Início"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Fechar</Button>
          <Button variant="primary" onClick={handleCadastrarNovoAluno}>Cadastrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Dashboard;
