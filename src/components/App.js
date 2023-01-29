// import { Router } from 'express';
import React from 'react';
import {Routes, Route } from 'react-router-dom';
// import { Navbar, Home, CreatePost, PostDetail } from './';
import Navbar from './Navbar'
import Home from './Home'
import PostDetail from './PostDetail'
import CreatePost from './CreatePost'

function App() {
  return (
    <div className="container">
        <Route exact path="/navbar" element={<Navbar/>} />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/create-post" element={<CreatePost/>} />
        <Route exact path="/post/:postId" element={<PostDetail/>} />
      </Routes>
      
     
      
    </div>
  );
}

export default App;