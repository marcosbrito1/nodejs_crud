const connection = require('./conexao.js');

connection.connect((err) => {
  if(err) return console.log(err);
  createTable(connection);
})

function createTable(conn){
      const sql = `CREATE TABLE IF NOT EXISTS tab_usua(
                   id int NOT NULL AUTO_INCREMENT,
                   nome varchar(100),
                   idade int,
                   matricula varchar(8) NOT NULL,
                   email varchar(255) NOT NULL,
                   PRIMARY KEY (id)
                   );`;      
      conn.query(sql, (error, results, fields) => {
          if(error) return console.log(error);
          console.log('Tabela tab_usua criada com sucesso!');
      });
}
