import express, { Application, Request, Response } from 'express'
const app: Application = express()
const userRoute = express.Router()

userRoute.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to all user',
        data: [
            {
                name: 'shihab',
                email: 'shihab@gamil.com'
            }
        ]
    })

})
app.use('/api/v1/users', userRoute)

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to  Shihab Tin Tours & Travels',
    })
})
export default app