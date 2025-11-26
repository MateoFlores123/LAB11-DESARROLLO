const express = require('express');
const appRouter = express.Router();

const con = require('../config/connection');

const bodyParser = require('body-parser');
appRouter.use(bodyParser.urlencoded({ extended: true }));
appRouter.use(bodyParser.json());

let sql_all = 'CALL usp_listar_books()';
let sql_insert = 'CALL usp_listar_book()';

appRouter.get('/books', (req, res) => {
    con.query(sql_all, (err, results) => {
        if (err) {
            return res.status(500).send('Error en la consulta a la base de datos');
        }
        res.json(results[0]);
    });

});

appRouter.post('/books', (req, res) => {
    const book = {
        title: req.body.book_title,
        author: req.body.book_author,
        publicado: req.body.book_published
    }

    con.query(sql_insert, [book.title, book.author, book.publicado], (err, results) => {
        if (err) {
            throw error;
        }
        res.send(results);
    });
});

module.exports = appRouter;
