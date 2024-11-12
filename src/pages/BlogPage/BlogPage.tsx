import React from 'react'
import Wrapper from '../../component/Wrapper/Wrapper'
import Navbar from '../../Constants/Navbar'
import Footer from '../../Constants/Footer'
import NewsLater from '../../component/NewsLater/NewsLater'
import Hero2 from '../../component/Hero/Hero2'
import Blogs from '../../component/Blogs/Blogs'

const BlogPage = () => {
  return (
    <Wrapper>
        <Navbar/>
        <Hero2 name={"See All Blogs"}/>
        <Blogs/>
        <NewsLater/>
        <Footer/>
    </Wrapper>
  )
}

export default BlogPage