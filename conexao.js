const mysql      = require('mysql2');
const connection = mysql.createConnection({
  host     : '', //Coloque entre aspas o IP do servidor
  port     : 3306, //Coloque aqui a porta do banco de dados no servidor, 3306 é a porta padrão do MySQL
  user     : '', //Coloque entre aspas o nome do usuário
  password : '', //Coloque entre aspas a senha do usuário
  database : '' //Coloque entre aspas o nome da base de dados
});

connection.connect((err) => {
  if(err) return console.log(err);
  console.log('Conexão realizada com sucesso!!');
})

module.exports = connection
