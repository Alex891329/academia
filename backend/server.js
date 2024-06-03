const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/login')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB', err));

// Definindo o modelo de aluno
const alunoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
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
    const { nome, email, senha } = req.body;
    
    const hashSenha = await bcrypt.hash(senha, 10);

    const aluno = new Aluno({
      nome,
      email,
      senha: hashSenha,
    });

    const resultado = await aluno.save();
    res.send(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao adicionar aluno');
  }
});

// Rota de autenticação
app.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    const aluno = await Aluno.findOne({ email });

    if (!aluno) {
      return res.status(400).send('Usuário não encontrado');
    }

    const senhaValida = await bcrypt.compare(senha, aluno.senha);

    if (!senhaValida) {
      return res.status(401).send('Senha incorreta');
    }

    res.send('Login realizado com sucesso');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao fazer login');
  }
});

// Iniciando o servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));


