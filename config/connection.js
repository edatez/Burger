// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "edacan",
  database: "burgers_db"
});

// Make connection.
connection.connect((err) => {

  if (err) throw err;
  console.log(`connected as ID " ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;