import * as Yup from 'yup'

export const loginvalidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be 6 characters').required('Required')
})