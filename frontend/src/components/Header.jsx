import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    alert("Logout Success")
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <Link className="navbar-brand text-white mx-3" to="/">
        Narasimha's Blog
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-start gap-3">
          <li className="nav-item active">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/addBlog">
              Add Blog
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/addCategory">
              Add Category
            </Link>
          </li>
        </ul>
        <div className="d-inline mx-auto my-2 my-lg-0">
          {token && token !== null ? (
            <>
              <button className="btn btn-primary">Welcome: {username} </button>
              <button onClick={handleLogout}  className="btn btn-primary">LogOut</button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-light mx-1">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-light mx-1">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
