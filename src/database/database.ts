import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB 連接成功！')
  } catch (error) {
    console.error('MongoDB 連接失敗：', error)
  }
}

export default connectDB