import React from 'react'
import { useNavigate } from 'react-router-dom'

interface ProtectedRouteProp {
 children : React.ReactNode
}

const ProtectedRoute: React.FC<any> = ({children}:ProtectedRouteProp) => {
   const [userToken] = React.useState<any>(localStorage.getItem('userToken'))

   const conjson = JSON.parse(userToken)
   const navigate:any = useNavigate()

   React.useEffect(()=>{
     if(!conjson)
     {
       navigate('/login')
     }
     else
     {
        navigate('/')
     }
   },[conjson, navigate, userToken])

  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute