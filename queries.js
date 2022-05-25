const { response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'oliverlewis',
  host: 'localhost',
  database: 'plants',
  password: 'password',
  port: 5432,
})


const getPlants = (request, response) => {
  pool.query('SELECT * FROM plants_schema', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const getOnePlant = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM plants_schema WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = { 
  getPlants,
  getOnePlant
}
