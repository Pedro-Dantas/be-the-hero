const express = require('express'); //Import do pacote express
const cors = require('cors');
const routes = require('./routes'); //import das rotas através de um arquivo de mesma pasta

const app = express(); 

app.use(cors());
app.use(express.json()); //Antes de qualquer coisa converta a requisição do body em formato json para um objeto Javascript entendível pela aplicação
app.use(routes);

// Rota http://localhost:3333/
app.listen(3333);