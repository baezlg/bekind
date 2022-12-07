import React from "react";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Event from "./pages/event/Event";
import Article from "./pages/article/Article";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </div>
  );
};

export default App;
