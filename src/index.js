require('dotenv/config');

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port || 8409, () => {
    console.log(`Servidor rodando na porta ${ port }`);
});