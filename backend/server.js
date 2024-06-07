const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/', )
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB', err));

// Definindo o modelo de aluno
const alunoSchema = new mongoose.Schema({
  nome: String,
  peso: String,
  altura: String,
  inicio: String
});

const Aluno = mongoose.model('Aluno', alunoSchema);

// Rota para obter todos os alunos
app.get('/alunos', async (req, res) => {
  const alunos = await Aluno.find();
  res.send(alunos);
});

// Rota para adicionar um novo aluno
app.post('/alunos', async (req, res) => {
  try {
    const { nome, altura, peso, inicio } = req.body;

    const aluno = new Aluno({
      nome,
      altura,
      peso,
      inicio
    });

    const resultado = await aluno.save();
    res.send(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao adicionar aluno');
  }
});

// Rota para atualizar um aluno
app.put('/alunos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { nome, altura, peso, inicio } = req.body;

    const aluno = await Aluno.findById(id);
    if (!aluno) {
      return res.status(404).send('Aluno não encontrado');
    }

    aluno.nome = nome || aluno.nome;
    aluno.altura = altura || aluno.altura;
    aluno.peso = peso || aluno.peso;
    aluno.inicio = inicio || aluno.inicio;

    const resultado = await aluno.save();
    res.send(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao atualizar aluno');
  }
});

// Rota para excluir um aluno
app.delete('/alunos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Aluno.findByIdAndDelete(id);
    res.send('Aluno excluído com sucesso');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao excluir aluno');
  }
});

// Definindo o modelo de administrador
const adminSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
});

const Admin = mongoose.model('Admin', adminSchema);

// Rota para obter todos os administradores
app.get('/admins', async (req, res) => {
  const admins = await Admin.find();
  res.send(admins);
});

// Rota para adicionar um novo administrador
app.post('/admins', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    
    const hashSenha = await bcrypt.hash(senha, 10);

    const admin = new Admin({
      nome,
      email,
      senha: hashSenha,
    });

    const resultado = await admin.save();
    res.send(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao adicionar administrador');
  }
});

// Rota de autenticação para administradores
app.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).send('Usuário não encontrado');
    }

    const senhaValida = await bcrypt.compare(senha, admin.senha);

    if (!senhaValida) {
      return res.status(401).send('Senha incorreta');
    }

    res.send({ message: 'Login realizado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao fazer login');
  }
});

// Iniciando o servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));