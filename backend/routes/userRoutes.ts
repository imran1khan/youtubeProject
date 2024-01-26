import {Router} from "express";
import { UserLogin, UserSignUp } from "../controllers/userFunction";
const UserRouter = Router();


UserRouter.route('/signup').post(UserSignUp);
UserRouter.route('/login').post(UserLogin);
export{
    UserRouter,
}