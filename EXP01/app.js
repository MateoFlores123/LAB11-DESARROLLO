const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

const booksRouter = require('./routes/books');
app.use('/api', booksRouter);
