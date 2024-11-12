import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ModalUi from '../ui/Modal/ModalUi'
import GoogleIcon from '../assets/images/google.png'
import { Auth } from '../Context/AuthContext'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const [openProfileModal, setOpenProfileModal] = React.useState(false)
    const [email, setEmail] = React.useState<String | any>('')
    const [password, setPassword] = React.useState<String | any>('')
    const [Error1, setError1] = React.useState<Boolean | any>(false)
    const [Error2, setError2] = React.useState<Boolean | any>(false)
    const [isEdit, setisEdit] = React.useState<Boolean | any>(true)
    const { user, login, logout } = Auth()

    const navigate = useNavigate()

    const links = [
        {
            name: 'Home',
            ref: '/'
        },
        {
            name: 'Blogs',
            ref: '/blogs'
        }
    ]

    const getLinks = () => {
        return (
            <>
                {
                    links.map((item: any, index: any) => (
                        <>
                            <Link to={item.ref}>{item?.name}</Link>
                        </>
                    ))
                }
            </>
        )
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (!email && !password) {
            setError1(true)
            setError2(true)
        }
        else if (!email || email === '') {
            setError1(true)
        }
        else if (!password || password === '') {
            setError2(true)
        }
        else {

            setError1(false)
            setError2(false)
            setOpen(false)
            const data = {
                email: email,
                password: password
            }
            login(data)
        }
    }
    const generateModal = () => {

        return (
            <ModalUi open={open} setOpen={setOpen}>
                <div className='flex gap-4 flex-col items-center'>
                    <h1 className='text-white text-3xl font-bold'>Login</h1>
                    <form onSubmit={handleSubmit} className='flex gap-4 flex-col items-center'>
                        <input type="email" value={email} onChange={(e) => {
                            setEmail(e?.target?.value)
                        }} className='p-3 rounded-md' placeholder='email' />

                        {Error1 && <span className='text-1xl text-red-700'>Please Enter Email</span>}

                        <input type="password" value={password} onChange={(e) => {
                            setPassword(e?.target?.value)
                        }} className='p-3 rounded-md' placeholder='password' />

                        {Error2 && <span className='text-1xl text-red-700'>Please Enter Password</span>}
                        <button className='p-2 bg-white font-black w-full rounded-md'>Login</button>
                        <button className='p-2 text-center flex gap-7 font-black items-center bg-white w-full rounded-md'><img className='w-[30px] object-cover h-[30px]' src={GoogleIcon} alt='' />Sign in with Google</button>
                    </form>
                    <span className='text-white'>Don't have an account? <span className='cursor-pointer'>Register</span></span>
                </div>
            </ModalUi>
        )
    }

    const handleLogout = () => {
        logout()
    }
    const userActive = Object.keys(user).length > 0 ? true : false



    const Profilecard = () => {

        return (
            <>
                <ModalUi open={openProfileModal} setOpen={setOpenProfileModal}>
                    <div className='flex flex-col'>
                        <div className='flex gap-5 items-center'>
                            <img className='w-[60px] relative h-[60px] object-cover rounded-full' src='https://png.pngtree.com/thumb_back/fh260/background/20230614/pngtree-woman-in-sunglasses-standing-in-front-of-a-dark-background-image_2891237.jpg' alt='' />

                            <label className='text-white cursor-pointer left-20 bg-blue-700 rounded-full absolute  bottom-50' htmlFor="file-upload" style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '10px' }}>
                               <AddIcon className='text-[1px]'/>
                            </label>
                            <input
                                type="file"
                                id="file-upload"

                                style={{ display: "none" }}
                            />

                            <span className='text-white'>Minal Chiwande</span>
                            <div onClick={() => {
                                setisEdit(() => !isEdit)
                            }} className='cursor-pointer'>
                                <EditIcon className='text-green-400' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 mt-3'>
                            <input value={'minal'} disabled={isEdit} className='p-2 rounded-md ' type='text' placeholder='Username' />
                            <input value={user.email} disabled={isEdit} className='p-2 rounded-md ' type='email' placeholder='Email' />
                            <input value={user.password} disabled={isEdit} className='p-2 rounded-md ' type='password' placeholder='Password' />
                            <button className='bg-white p-2 rounded-md hover:bg-slate-300'>Update</button>
                        </div>

                        <div>
                            <button onClick={()=>{navigate('/addblog')}} className='flex items-center justify-center mt-4 bg-white p-2 rounded-md hover:bg-slate-300'><AddIcon/> <span>Add Blog</span></button>
                        </div>
                    </div>
                </ModalUi>
            </>
        )
    }

    return (
        <>
            {generateModal()}
            {Profilecard()}
            <div className='text-white p-4 flex items-center justify-between'>

                <div className='flex text-3xl font-sans font-bold'>
                    <h1>B.</h1><span>Log</span>
                </div>

                <div className='flex items-center gap-7'>
                    {
                        userActive ?
                            <div onClick={() => { setOpenProfileModal(true) }} className='cursor-pointer p-1 rounded-md hover:backdrop-blur-md hover:bg-white/20 flex items-center gap-4'>
                                <img className='w-[30px] h-[30px] object-cover rounded-full' src='https://png.pngtree.com/thumb_back/fh260/background/20230614/pngtree-woman-in-sunglasses-standing-in-front-of-a-dark-background-image_2891237.jpg' alt='profile_img' />
                                <span>{user?.email}</span>
                            </div> : null
                    }

                    {getLinks()}
                    {
                        userActive ? <button onClick={handleLogout} className='bg-white text-black p-2 rounded-lg px-3 hover:bg-slate-200'>Logout</button> : <button onClick={() => {
                            setOpen(true)
                        }} className='bg-white px-3 hover:bg-slate-200 text-black p-2 rounded-lg'>Login</button>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar