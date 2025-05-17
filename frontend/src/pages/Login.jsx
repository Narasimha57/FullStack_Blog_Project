import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=  useNavigate()
  const [input, setInput] = useState({
    email: "",
    password : ""
 })
 

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(
      "http://localhost:9000/api/v1/user/login",
      input
    );
    alert(res.data.message);
    localStorage.setItem("token", res.data.token)
    localStorage.setItem("username", res.data.name)
    navigate("/");
  } catch (error) {
    alert(error.response.data.message);
  }
  // try {
  //   const res = await axios.post(
  //     "https://fullstack-blog-project-backend.onrender.com/api/v1/user/login",
  //     input
  //   );
  //   alert(res.data.message);
  //   localStorage.setItem("token", res.data.token)
  //   localStorage.setItem("username", res.data.name)
  //   navigate("/");
  // } catch (error) {
  //   alert(error.response.data.message);
  // }
};

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow rounded">
            <div className="card-body">
              <h3 className="text-center mb-4">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})}
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
