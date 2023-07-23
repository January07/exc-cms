import dotenv from 'dotenv'
import express, { Application, Request, Response } from 'express'
import { connectDB } from './database'
import memberRoutes from './routes/members'
import errorHandlerMiddleware from './middleware/errorHandlers/errorHandlerMiddleware'

dotenv.config()

const app: Application = express()

const port = process.env.PORT || 3000 // 使用環境變數 PORT 或預設值 3000

app.use(express.json()) // 使用內置的 express.json() 中間件解析 JSON 請求主體

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!')
})

connectDB() // 在這裡呼叫 connectDB() 建立與 MongoDB 的連接

// Use member routes
app.use('/api/members', memberRoutes)

app.use(errorHandlerMiddleware) // 放在所有路由處理的後面

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})