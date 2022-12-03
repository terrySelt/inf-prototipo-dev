import {Router} from 'express'
import { createComputer, deleteComputer, getComputer, getComputers, updateComputer } from '../controllers/computers.controllers.js'

const router = Router()

router.get('/computers', getComputers)
router.post('/computers', createComputer)
router.put('/computers/:id', updateComputer)
router.delete('/computers/:id', deleteComputer)
router.get('/computers/:id', getComputer)

export default router