import { Router } from "express";
import {createUser, deleteUser, getUser, getUsers, updateUser} from "../controllers/users.controllers.js";
import { verifyToken, admin, user } from "../middlewares/authJwt.js";

const router = Router()

router.get('/users', [verifyToken, user], getUsers)
router.post('/users', [verifyToken, admin], createUser)
router.put('/users/:id', [verifyToken, user], updateUser)
router.delete('/users/:id', [verifyToken, admin], deleteUser)
router.get('/users/:id', [verifyToken, user], getUser)

export default router