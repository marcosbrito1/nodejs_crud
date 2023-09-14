const express = require('express');
const app = express();
const connection = require('./conexao.js');
const port = 3000;

app.use(express.json());
app.listen(port);

app.get('/', (req, res) => res.json({ message: 'Raiz da API' }));
app.get('/usuario', (req, res) => {execSQLQuery('SELECT * FROM tab_usua', res);})
app.get('/usuario/:id?', (req, res) => {
    let filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM tab_usua' + filter, res);
})
app.post('/usuario', (req, res) => {
    const nome = req.body.nome.substring(0,100);
    const idade = req.body.idade;
    const matricula = req.body.matricula.substring(0,8);
    const email = req.body.email.substring(0,255);
    execSQLQuery(`INSERT INTO tab_usua(nome, idade, matricula, email) VALUES('${nome}','${idade}', '${matricula}', '${email}')`, res);
});
app.put('/usuario/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const nome = req.body.nome.substring(0,100);
    const idade = req.body.idade;
    const matricula = req.body.matricula.substring(0,8);
    const email = req.body.email.substring(0,255);
    execSQLQuery(`UPDATE tab_usua SET Nome='${nome}', idade=${idade}, matricula='${matricula}', email='${email}' WHERE ID=${id}`, res);
})
app.delete('/usuario/:id', (req, res) =>{
    execSQLQuery('DELETE FROM tab_usua WHERE ID=' + parseInt(req.params.id), res);
})





function execSQLQuery(sqlQry, res){  
    connection.query(sqlQry, (error, results, fields) => {
        if(error)
          res.json(error);
        else
          res.json(results);
        console.log('Instrução SQL executada com sucesso!');
    });
  }
