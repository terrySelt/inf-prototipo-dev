import {Router} from 'express'
import { createFt, deleteFtLogical, restoreFtLogical, getFt, getFts, updateFt, getReportes } from '../controllers/ft.controllers.js'
import { verifyToken, user } from '../middlewares/authJwt.js'

const router = Router()

router.get('/fts', [verifyToken, user], getFts)
router.post('/fts', [verifyToken, user], createFt)
router.put('/fts/:id', [verifyToken, user], updateFt)
router.put('/fts/:id', [verifyToken, user], deleteFtLogical)
router.put('/fts/:id', [verifyToken, user], restoreFtLogical)
router.get('/fts/:id', [verifyToken, user], getFt)

router.post('/ftsrepo', [verifyToken, user], getReportes)

export default router