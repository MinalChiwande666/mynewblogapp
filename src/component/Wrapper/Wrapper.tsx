import React from 'react'

interface WrapperProp {
  children: React.ReactNode
}

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }: WrapperProp) => {
  return (
    <div className='bg-black flex flex-1 flex-col'>
      <div className='w-[90%] mx-auto'>
        {children}
      </div>
    </div>
  )
}

export default Wrapper