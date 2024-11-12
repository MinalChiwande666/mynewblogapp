import React from 'react'
import { useNavigate } from 'react-router-dom';

interface BlogCardProp {
    data: string[] | any
}


const BlogCard: React.FC<{ data: any }> = ({ data }: BlogCardProp) => {

    const navigate = useNavigate()

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
        <>
            {
                data.map((item: any, index: any) => {
                    return (
                        <div className='bg-white/15 items-start overflow-hidden rounded-md backdrop-blur-lg'>
                            <div>
                                <img src={`data:image/jpeg;base64,${item?.img}`} alt='' className='object-cover' />
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-3 w-[100px] m-2 p-2 rounded-3xl bg-black'>
                                    <img className='w-[20px] rounded-full h-[20px] object-cover' src='https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg' alt='' />
                                    <span className='text-sm'>Minal</span>
                                </div>
                                    <div className='mx-3'>

                                        <span className='text-sm'>{timeAgo(item?.time)}</span>
                                    </div>
                            </div>
                            <div className='m-2 flex flex-col gap-2'>
                                <h1 className='text-2xl font-bold'>
                                    {item?.title}
                                </h1>

                                <h1 className='text-1xl font-bold'>
                                    {item?.desc.slice(0, 40)}.
                                </h1>
                                <button
                                    onClick={() => {
                                        navigate(`/singlepost/${item?.id}`)
                                    }}
                                    className='bg-white hover:bg-slate-200 p-3 rounded-md text-black font-sans font-bold'>Read More</button>
                            </div>

                        </div>
                    )
                })
            }
        </>
    )
}

export default BlogCard