import React from 'react'
import LoginForm from '../../component/LoginComponent/LoginForm'
import './login.css'
const LoginPage = () => {
    return (
        <div className='flex flex-col bg-black items-center justify-center min-h-[100vh]'>
            <LoginForm />
        </div>
    )
}

export default LoginPage