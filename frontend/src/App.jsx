import { useState } from "react";
// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import AddBlog from "./pages/AddBlog";
import AddCategory from "./pages/AddCategory";
import SingleBlog from "./pages/SingleBlog";
import ProtectedRoutes from "./services/ProtectedRoutes";

const backendURL = "https://fullstack-blog-project-backend.onrender.com"

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />

        {/* Protected Routes*/}
      
        <Route element={<ProtectedRoutes />}>
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/addCategory" element={<AddCategory />} />
        </Route>

        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </div>
  );
}

export default App;
