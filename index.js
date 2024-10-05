// Importando o Express
const express = require('express');
const app = express();
const port = 3000;

// Rota para responder com uma página HTML simples
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Exercicio 5</title>
      </head>
      <body>
        <h1>Seja bem-vindo!</h1>
        <p>Esta é uma página HTML que foi criada a partir do exercicio 5.</p>
      </body>
    </html>
  `);
});

// Rota para responder com um objeto JSON com informações básicas
app.get('/api/data', (req, res) => {
  res.json({
    nome: 'Gustavo',
    idade: 19,
    profissao: 'Desenvolvedor',
    interesses: ['Programação', 'Carros', 'Jogos']
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});