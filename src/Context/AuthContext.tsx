import React,{useContext,createContext, ReactNode} from 'react'



interface AuthContextProp{
    user:any,
    login :(value:any)=> void,
    logout :()=> void
}


const AuthContext = createContext<AuthContextProp | any>(undefined)
export const AuthProvider: React.FC<{children : ReactNode}> = ({children})=>{
   const [user,setUser] = React.useState<any>({})
  
   
   const login = (value:any)=>{
    //    localStorage.setItem('userToken',JSON.stringify(value))
       setUser(value)
   }

   const logout = () =>{
  
    setUser({})
   }
//    https://4kporn.xxx/videos/1039262/my-second-hot-mom/?utm_source=pbw&utm_campaign=plugs

   return(
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
   )
}

export const Auth = ()=>{
    const context = useContext(AuthContext)
    if(context === undefined)
    {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context
}