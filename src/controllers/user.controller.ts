import { Request, Response } from "express";
import { userServices } from "../services/user.service";


const createUser = async (req: Request, res: Response) => {
    try {
        const useData = req.body
        console.log(useData)
        const result = await userServices.createUser(useData)
        res.status(201).json({
            status: 'success',
            message: 'User created successfully',
            data: result
        })
    }
    catch (error: any) {
        res.status(400).json({
            status: 'fail',
            message: error.message || 'User is not created ...',

        })

    }
}


export const userController = {
    createUser
}