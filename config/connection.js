// Set up MySQL connection.
const mysql = require("mysql");
let connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
    host: "x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "htuuphfobuwaq3j7",
    password: "pmjum6wjufashyt3",
    database: "bdxqugvi9agkbh2a"
  });
};


// Make connection.
connection.connect();


// Export connection for our ORM to use.
module.exports = connection;