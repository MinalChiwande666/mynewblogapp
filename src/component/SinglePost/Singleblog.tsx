import React from 'react'

interface SingleBlog {
    data? : any
}

const Singleblog = ({data}:SingleBlog) => {

    function timeAgo(date: any) {
        const now: any = new Date();
        const seconds = Math.floor((now - date) / 1000);

        const intervals = [
            { label: 'year', seconds: 31536000 },
            { label: 'month', seconds: 2592000 },
            { label: 'day', seconds: 86400 },
            { label: 'hour', seconds: 3600 },
            { label: 'minute', seconds: 60 },
            { label: 'second', seconds: 1 }
        ];

        for (const interval of intervals) {
            const count = Math.floor(seconds / interval.seconds);
            if (count >= 1) {
                return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
            }
        }
        return "just now";
    }
  return (
    <div className='m-3 flex flex-col gap-3'>
        <img className='h-[60vh] object-cover' src='https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg' alt=''/>
        <div>
            <h1 className='text-4xl font-bold text-white'>{data.title}</h1>
        </div>
        <div className='flex cursor-pointer float-start  items-center gap-3'>
            <img className='w-[50px] h-[50px] object-cover rounded-full' src='https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg' alt=''/>
            <span className='text-white'>Minal Chiwande</span>
        </div>
        <div className='flex float-start  items-center gap-3'>
            
            <span className='text-white'>{data?.desc}</span>
        </div>
    </div>
  )
}

export default Singleblog