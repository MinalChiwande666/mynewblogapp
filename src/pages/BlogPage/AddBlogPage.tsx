import React from 'react'
import Wrapper from '../../component/Wrapper/Wrapper'
import FileUpload from '../../component/DragDrop/FileUpload'
import Navbar from '../../Constants/Navbar'
import Hero2 from '../../component/Hero/Hero2'
import NewsLater from '../../component/NewsLater/NewsLater'
import Footer from '../../Constants/Footer'
import AddBlog from '../../component/Blogs/AddBlog'

const AddBlogPage = () => {
  return (
    <Wrapper>
      <Navbar/>
      <Hero2 name={'Add Your Blog'}/>
      <AddBlog/>
      <NewsLater/>
      <Footer/>
      {/* <div className='h-[100vh] flex flex-col items-center justify-center'>
      <FileUpload/>
      </div> */}
    </Wrapper>
  )
}

export default AddBlogPage