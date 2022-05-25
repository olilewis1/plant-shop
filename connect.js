let mysql = require('mysql')

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: 'plants'
})


connection.connect(function(err) { 
  if (err) { 
    return console.error('err' + err.message)
  }

  console.log('connected to MySQL server')
})

let sql = `SELECT * FROM plants_schema`
connection