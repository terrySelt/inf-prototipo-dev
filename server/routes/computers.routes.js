import {Router} from 'express'
import { createComputer, deleteComputer, restoreComputer, getComputer, getComputers, updateComputer } from '../controllers/computers.controllers.js'
import { verifyToken, user } from '../middlewares/authJwt.js'

const router = Router()

router.get('/computers', [verifyToken, user], getComputers)
router.post('/computers', [verifyToken, user], createComputer)
//router.put('/computers/:id', [verifyToken, user], updateComputer)
//router.put('/computers/:id', [verifyToken, user], deleteComputer)
router.put('/computers/:id', [verifyToken, user], restoreComputer)
router.get('/computers/:id', [verifyToken, user], getComputer)

export default router