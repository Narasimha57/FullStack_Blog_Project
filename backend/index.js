import express from 'express';
import cors from 'cors'
import connectDB from './config/db.js';
import Routes from "./routes/blog.js"
const app = express()
const port =  process.env.PORT || 9000;

connectDB();
app.use(cors({
    origin: "https://fullstack-blog-project-frontend.onrender.com",
    credentials: true,
  })
)
app.use(express.json())
app.use(express.static("public/upload"))
app.get('/', (req, res)=>{
    res.send("API is running")
})
//API ROUTES
app.use('/api/v1', Routes)
app.listen(port,()=>{
    console.log(`API is running on http://localhost:${port}`)
})