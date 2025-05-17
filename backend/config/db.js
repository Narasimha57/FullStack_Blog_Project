import mongoose from 'mongoose'

const MONGO_URL = "mongodb+srv://bablugonela:OV2G47ExGnTzMZDf@blog.t1qox9h.mongodb.net/?retryWrites=true&w=majority&appName=Blog"
const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(MONGO_URL)
        console.log("Connected Succesfully")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB