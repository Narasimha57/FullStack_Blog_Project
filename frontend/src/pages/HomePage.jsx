import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchAllBlogs = async () => {
      const res = await axios.get("/get/allblogs", {
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
      <main>
        <div className="container shadow-lg">
          <section className="text-center">
            <h2 className="mb-5 my-3">
              <strong>Latest Posts</strong>
            </h2>
            <div className="row">
              {blogs && blogs.length > 0 ? (
                blogs.map((item) => {
                  return (
                    <div className="col-lg-4 col-md-12 mb-4" key={item._id}>
                      <div className="card">
                        <div
                          className="bg-image hover-overlay ripple"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={`https://fullstack-blog-project-backend.onrender.com/${item.thumbnail}`}
                            className="img-fluid"
                          />
                          <a href="#">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </a>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.description}</p>
                          <Link to={`/blog/${item._id}`} className="btn btn-primary">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2>Loading...</h2>
              )}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-primary text-lg-start">
        <div
          className="text-center p-3 text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2025 Copyright:
          <a className="text-white mx-2" href="#">
            Narasimha Gonela
          </a>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
