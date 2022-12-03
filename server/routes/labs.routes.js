import {Router} from 'express'
import {getLabs ,createLab, updateLab, deleteLab, getLab} from '../controllers/labs.controllers.js'


const router = Router()

router.get('/labs', getLabs)
router.post('/labs', createLab)
router.put('/labs/:id', updateLab)
router.delete('/labs/:id', deleteLab)
router.get('/labs/:id', getLab)

export default router