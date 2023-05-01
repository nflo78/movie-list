const mysql = require('mysql2')

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
})

dbConnection.connect();
dbConnection.query("CREATE DATABASE IF NOT EXISTS movielist")
dbConnection.query("USE movielist")
dbConnection.query('CREATE TABLE IF NOT EXISTS movietable (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, movietitle VARCHAR(30), watched VARCHAR(10))')

const save = (data) => {
  var movieArr = [data.title, data.watched]
  var queryString = "INSERT INTO movietable (movietitle, watched) VALUES (?, ?)"
  dbConnection.query(queryString, movieArr)
}

const retrieve = (callback) => {
 dbConnection.query("SELECT movietitle, watched FROM movietable", (err, data) => {
  if (err) {
    callback(err)
  } else {
    callback(null, data)
  }
 })
}

const update = (data) => {
  var queryString = "UPDATE movietable SET watched = ? where movietitle = ?"
  var updateArr;
  if (data.watched === 'watched') {
    updateArr = ['to watch', data.title]
  } else {
    updateArr = ['watched', data.title]
  }
  dbConnection.query(queryString, updateArr)
}
module.exports.db = dbConnection;
module.exports.save = save
module.exports.retrieve = retrieve
module.exports.update = update