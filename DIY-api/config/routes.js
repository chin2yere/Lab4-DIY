import express from 'express'

import route_functions from '../controllers/route_functions.js'

const router = express.Router()

// routes to get all video games, video games by ID, and video games by platform
router.get('/cars', route_functions.getCars)
router.get('/car/:id', route_functions.getCarById)
// router.get('/events/location/:location', route_functions.getEventsByLocation)
router.post('/cars', route_functions.create)
router.patch('/car/:id', route_functions.update)
router.delete('/car/:id', route_functions.deleteCar)
export default router