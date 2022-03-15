import {Router} from "express";
import * as userController from '../controllers/user.controllers'
import {authjwt} from "../middlewares";

const router = Router()

router.post('/', [authjwt.verifyToken,authjwt.isAdmin],userController.createUser)

export default router;
