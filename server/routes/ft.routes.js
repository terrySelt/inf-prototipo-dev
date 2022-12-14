import {Router} from 'express'
import { createFt, deleteFt, getFt, getFts, updateFt, getReportes } from '../controllers/ft.controllers.js'

const router = Router()

router.get('/fts', getFts)
router.post('/fts', createFt)
router.put('/fts/:id', updateFt)
router.delete('/fts/:id', deleteFt)
router.get('/fts/:id', getFt)

router.get('/ftsrepo', getReportes)

export default router