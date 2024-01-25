import {Router} from "express";
import { UserSignUp } from "../controllers/userFunction";
const UserRouter = Router();


UserRouter.route('/signup').post(UserSignUp);

export{
    UserRouter,
}