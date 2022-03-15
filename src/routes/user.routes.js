import {Router} from "express";
import * as userController from '../controllers/user.controllers'
import {authjwt,verifySignupjwt} from "../middlewares";

const router = Router()

router.post('/', [authjwt.verifyToken,authjwt.isAdmin,verifySignupjwt.checkRolesExisted],userController.createUser)

export default router;
