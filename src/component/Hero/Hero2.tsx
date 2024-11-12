import React from 'react'
import './hero.css'
interface HeroProp{
    name? : string | any
}

const Hero2: React.FC<{name:any}> = ({name}:HeroProp) => {
  return (
    <div className="relative h-[40vh] rounded-md overflow-hidden bg-cover bg-center" style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s')",objectFit:'contain'}}>

    <div className="absolute inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center">
   
      <div className="text-center text-white p-8 rounded-lg ">
        <h1 className="text-4xl font-bold">{name}</h1>
      </div>
    </div>
  </div>
  )
}

export default Hero2