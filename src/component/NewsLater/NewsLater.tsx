import React from 'react'

const NewsLater = () => {
  return (
    <div className='h-[100vh] flex items-center justify-center'>
      <div className='backdrop-blur-md rounded-lg flex-col my-5 gap-4 flex flex-1 items-center justify-center bg-white/10 m-3 h-[50vh]'>
        <h1 className='text-white font-bold text-3xl'>Subscribe NewsLetter !!!</h1>
        <div className='flex items-center gap-3'>
          <input type='text' placeholder='Send Email...' className='p-3 w-full rounded-md' />
          <button className='bg-white hover:bg-slate-300 p-3 text-black font-bold rounded-md'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLater