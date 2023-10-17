import pool from '../config/database.js'

const findAll = (owner) => {
  if (owner) {
    const query = 'SELECT * FROM cars WHERE owner = $1 ORDER BY owner ASC'
    return pool.query(query, [owner])
  }
  else {
    const query = 'SELECT * FROM cars ORDER BY owner ASC'
    return pool.query(query)
  }
}

const findOne = (id) => {
  const query = 'SELECT * FROM cars WHERE id = $1'
  return pool.query(query, [id])
}

const create = ( owner, convertible, exterior, wheels, roof, interior) => {
  
    const query = 'INSERT INTO cars ( owner, convertible, exterior, wheels, roof, interior) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *'
    return pool.query(query, [ owner, convertible, exterior, wheels, roof, interior])
  }
  
const update = (id, owner, convertible, exterior, wheels, roof, interior) => {
    const query = 'UPDATE cars SET owner = $2, convertible = $3, exterior = $4, wheels = $5, roof = $6, interior = $7 WHERE id = $1'
    return pool.query(query, [id, owner, convertible, exterior, wheels, roof, interior])
  }
  
const deleteCar = (id) => {
    const query = 'DELETE FROM cars WHERE id = $1'
    return pool.query(query, [id])
  }
export default {
  findAll,
  findOne,
  create,
  update,
  deleteCar
}