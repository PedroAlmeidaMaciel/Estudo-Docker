const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Olá minha imagem renomeada');
})

app.listen(4000, '0.0.0.0', () => {
  console.log(`Executando na porta: ${port}`);
});