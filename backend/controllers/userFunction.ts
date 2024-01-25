import {Request,Response} from "express";
import { User } from "../db";
export const UserSignUp = async(req:Request,res:Response)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username,password});
        if (!user) {
            const newUser = await User.create({username,password});
            res.status(200).json({
                _id : newUser._id,
                message:'user created successfully',
            });
        }
        else{
            res.status(400).json({
                _id: user._id,
                message : "User already excist",
            });
        }
    } catch (error) {
        res.status(500).json({
            message : 'intenal server error',
        });
    }
}
export const UserLogin = async(req:Request,res:Response)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username,password});
        if (user) {
            res.json({
                _id : user.id,
                message : 'login successfully'
            });
        } 
        else{
            res.status(403).json({
                _id : undefined,
                message : 'login unsuccessfull'
            });
        }
    } catch (error) {
        res.json({
            message : 'intenal server error',
        });
    }
}