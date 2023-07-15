import dotenv from 'dotenv'
import express, { Application, Request, Response } from 'express'
import { connectDB } from './database'

dotenv.config()

const app: Application = express()

const port = process.env.PORT || 3000 // 使用環境變數 PORT 或預設值 3000

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!')
})

connectDB() // 在這裡呼叫 connectDB() 建立與 MongoDB 的連接

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})