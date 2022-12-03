import { Router } from "express";
import {createUser, deleteUser, getUser, getUsers, signinUser, updateUser} from "../controllers/users.controllers.js";

const router = Router()

router.get('/users', getUsers)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)
router.get('/users/:id', getUser)

router.get('/users/signin/password', signinUser)


export default router