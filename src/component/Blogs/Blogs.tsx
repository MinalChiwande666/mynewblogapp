import React from 'react'
import BlogCard from './BlogCard'
import { useSelector } from 'react-redux'

const Blogs = () => {
   const [Blogdata,setBlogData] = React.useState([])
   const blogsData = useSelector((state:any)=>state.Blog.data)


   console.log(blogsData,'blog data')





  
  return (
    <div className='text-white  p-3 mt-5'>
        
        <h1 className='text-3xl font-bold text-center my-5'>Blogs</h1>
        <div className='m-3'>
        <button className='bg-white transition-all ease-in 2s hover:bg-slate-300 rounded-md text-black p-3 my-auto'>See All Blogs</button>
        </div>
        <div className='grid grid-cols-4 gap-3'>
            <BlogCard data={blogsData}/>
           
        </div>
    </div>
  )
}

export default Blogs