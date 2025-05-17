import mongoose from 'mongoose'

const MONGO_URL = "mongodb://localhost:27017/blog-mern-project"
const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(MONGO_URL)
        console.log("Connected Succesfully")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB