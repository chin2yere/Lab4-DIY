import mysequelize from '../models/sequelize.js'

// get all video games from the database
const getCars = async (req, res) => {
  try {
    const results = await mysequelize.findAll()
    res.status(200).json(results.rows)
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// get video games by ID from the database
const getCarById = async (req, res) => {
  try {
    const results = await mysequelize.findOne(req.params.id)
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// create new blog post
const create = async (req, res) => {
    try {
      
      const {  owner, convertible, exterior, wheels, roof, interior } = req.body
      const results = await mysequelize.create( owner, convertible, exterior, wheels, roof, interior)
      res.status(201).json(results.rows)
    } catch (error) {
      
      res.status(400).json( { error: error.message } )
    }
  }
  
  // update existing blog post
  const update = async (req, res) => {
    try {
      const { owner, convertible, exterior, wheels, roof, interior } = req.body
      const results = await mysequelize.update(req.params.id, owner, convertible, exterior, wheels, roof, interior)
      res.status(201).json(results.rows)
    } catch (error) {
      res.status(400).json( { error: error.message } )
    }
  }
  
  // delete existing blog post
  const deleteCar = async (req, res) => {
    try {
      
      const results = await mysequelize.deleteCar(req.params.id)
      res.status(200).json(results.rows)
    } catch (error) {
      res.status(400).json( { error: error.message } )
    }
  }
  

// get video games by platform from the database
// const getEventsByLocation = async (req, res) => {
//   try {
//     const results = await mysequelize.findAll(req.params.location)
//     res.status(200).json(results.rows)
//   }
//   catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// }

export default {
  getCars,
  getCarById,
  create,
  update,
  deleteCar
//   getEventsByLocation
}