import { Schema, model } from "mongoose"

// 定義會員資料的接口
export interface IMember {
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
}

// 定義會員模型的 Schema
const memberSchema = new Schema<IMember>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true }
    },
    { timestamps: true, versionKey: false } // 關閉版本鍵
)

// 創建會員的 Mongoose 模型
const Member = model<IMember>('Member', memberSchema)

// 導出會員模型
export default Member