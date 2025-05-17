import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const SingleBlog = () => {
  const navigate =  useNavigate();
  const {id} = useParams();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchAllBlogs = async () => {
      const res = await axios.get(`https://fullstack-blog-project-backend.onrender.com/api/v1/get/blogs/${id}`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
      setBlogs(res.data);
    };
    fetchAllBlogs();
  }, []);
  return (
    <>
    <div className="container shadow my-3">
    <div className="col-md-12 d-flex items-center justify-content-center bg-light">
        <div className="row">
        <h1 className='my-3'>Demo</h1>
        <p className='my-3'>Published Date: </p>
        <img src={`http://localhost:9000/${blogs.thumbnail}`} className='img img-responsive img-rounded my-3' alt=""
         />
         <p className="my-3">{blogs.description}</p>
        </div> 
    </div>
    <button onClick={()=>navigate('/')} className='btn btn-primary'>Back To Post</button>
    </div>
    </>
  )
}

export default SingleBlog