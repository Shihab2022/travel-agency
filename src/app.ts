import express, { Request, Response } from 'express'
const app = express()


app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to  Shihab Tin Tours & Travels',
    })
})
export default app