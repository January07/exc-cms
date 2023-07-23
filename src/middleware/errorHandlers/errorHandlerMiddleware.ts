import { Request, Response } from "express"

const errorHandlerMiddleware = (error: Error, _req: Request, res: Response) => {
    console.error(error) // 在控制台記錄錯誤詳細訊息

    // 回應適當的錯誤訊息給客戶端
    res.status(500).json({ message: 'Internal Server Error' })
}

export default errorHandlerMiddleware