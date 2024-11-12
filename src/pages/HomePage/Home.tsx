import React from 'react'
import Wrapper from '../../component/Wrapper/Wrapper'
import Navbar from '../../Constants/Navbar'
import Hero from '../../component/Hero/Hero'
import Blogs from '../../component/Blogs/Blogs'
import NewsLater from '../../component/NewsLater/NewsLater'
import Footer from '../../Constants/Footer'

const Home = () => {
  return (
    <Wrapper>
     <Navbar/>
     <Hero/>
     <Blogs/>
     <NewsLater/>
     <Footer/>
    </Wrapper>
  )
}

export default Home