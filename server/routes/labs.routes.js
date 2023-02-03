import {Router} from 'express'
import {getLabs ,createLab, updateLab, deleteLab, getLab} from '../controllers/labs.controllers.js'
import { verifyToken, user } from '../middlewares/authJwt.js'

const router = Router()

router.get('/labs', [verifyToken, user], getLabs)
router.post('/labs', [verifyToken, user], createLab)
router.put('/labs/:id', [verifyToken, user], updateLab)
router.delete('/labs/:id', [verifyToken, user], deleteLab)
router.get('/labs/:id', [verifyToken, user], getLab)

export default router