import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { loginvalidationSchema } from '.'
import googleImg from '../../assets/images/google.png'
import { Auth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate:any = useNavigate()
  const {login} = Auth()

  return (
    <div className='backdrop-blur-lg bg-white/10 p-3 rounded-sm'>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginvalidationSchema}
      onSubmit={(values) => {
          login(values)
          navigate('/')
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex shadow-2xl p-3 rounded-sm gap-4 flex-col items-center'>
          <div>
            <div className='text-white font-semibold text-1xl'>Email:</div>
            <Field className={'p-2 rounded-md'} placeholder='email' type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error text-red-700 text-1xl font-semibold"  />
          </div>

          <div>
            <div className='text-white font-semibold text-1xl'>Password:</div>
            <Field className={'p-2 rounded-md'} placeholder='password' type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error text-red-700 text-1xl font-semibold"  />
          </div>

          <button className='bg-white w-full p-2 rounded-md font-bold hover:bg-slate-300' type="submit" disabled={isSubmitting}>Submit</button>
          <button className='bg-white w-full p-2 rounded-md font-bold hover:bg-slate-300 flex gap-6 items-center' type="submit" disabled={isSubmitting}><div><img className='w-6 h-6 mx-1' src={googleImg} alt='google_sign_in'/></div> Sign In With Google</button>
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default LoginForm