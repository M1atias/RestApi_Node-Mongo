import {Router} from "express";
import * as authController from '../controllers/auth.controllers'
import {verifySignupjwt} from "../middlewares";

const router = Router()

router.post('/signup', [verifySignupjwt.checkDuplicateUsernameOrEmail,verifySignupjwt.checkRolesExisted],authController.signUp)

router.post('/signin', authController.signIn)

export default router;
