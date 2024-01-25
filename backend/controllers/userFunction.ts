import {Request,Response} from "express";
import { User } from "../db";
export const UserSignUp = async(req:Request,res:Response)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username,password});
        if (!user) {
            const newUser = await User.create({username,password});
            res.json({
                _id : newUser._id,
                message:'user created successfully',
            });
        }
        else{
            res.json({
                message : "User already excist",
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            message : 'intenal server error',
        });
    }
}
