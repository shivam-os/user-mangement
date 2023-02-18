const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shivamdb",
});

connection.connect((err) => {
  if (err) {
    console.log("Error in connection.")
  }
});

module.exports = connection;
