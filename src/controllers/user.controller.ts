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
const getAllUsers = async (req: Request, res: Response) => {
    try {

        const result = await userServices.getAllUsers()
        res.status(201).json({
            status: 'success',
            message: 'get all users successfully',
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
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await userServices.getSingleUser(id)
        res.status(201).json({
            status: 'success',
            message: 'Get single user successfully',
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
const updateUser = async (req: Request, res: Response) => {
    try {
        const useData = req.body
        const id = req.params.id
        const result = await userServices.updateUser(id, useData)
        res.status(201).json({
            status: 'success',
            message: 'Update  User successfully',
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
const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        await userServices.deleteUser(id)
        res.status(201).json({
            status: 'success',
            message: 'User delete successfully',
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
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
}