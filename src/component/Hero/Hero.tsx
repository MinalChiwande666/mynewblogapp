import React from 'react'

const Hero = () => {
  return (
    <div className='flex h-[80vh] p-4 text-white items-center gap-32'>
       <div className='flex flex-1 '>
        <img className='w-[300px] h-[400px] object-cover' src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg' alt=''/>
        <img className='w-[300px] h-[400px] object-cover' src='https://pixlr.com/images/index/ai-image-generator-one.webp' alt=''/>
       </div>
       <div className='flex flex-col items-start gap-6 flex-1'>
          <h1 className='text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <h2 className='text-1xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit.</h2>
          <button className='p-3 bg-white text-black font-bold rounded-md'>Read Blogs</button>
       </div>
    </div>
  )
}

export default Hero