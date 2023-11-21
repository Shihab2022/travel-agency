import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
import { userRoutes } from './routes/user.route'

app.use(express.json())
app.use(cors())

app.use('/api/v1/users', userRoutes)

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to  Shihab Tin Tours & Travels',
    })
})
export default app