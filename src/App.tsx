import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'


import Home from './pages/HomePage/Home'
import BlogPage from './pages/BlogPage/BlogPage'
import SinglePost from './pages/SinglePost/SinglePost'
import AddBlogPage from './pages/BlogPage/AddBlogPage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/blogs' element={<BlogPage/>}/>
      <Route path='/singlepost/:id' element={<SinglePost/>}/>
      <Route path='/addblog' element={<AddBlogPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App