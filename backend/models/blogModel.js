import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
    title:{
        type: String,
    },
    category :{
        type: mongoose.Schema.Types.ObjectId,
        refer: "category",
    },
    description:{
        type:String,
    },
    thumbnail:{
        type: String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        refer:"user"
    }
})

const blogModel =  mongoose.model('blog', blogSchema)
export default blogModel;