import React from 'react'
import FileUpload from '../DragDrop/FileUpload'
import { fileToBase64 } from '../../utils'
import { UseSelector, useDispatch } from 'react-redux'
import { setBlogs } from '../../redux/reducers/BlogReducer'

const AddBlog= () => {
    const [File,setFile] = React.useState<any>(null)
    const [BaseImg,setBaseImg] = React.useState<any>(null)
    const [Title,setTitle] = React.useState("")
    const [Desc,setDesc] = React.useState("")
    const dispatch:any = useDispatch()
    

    const UploadBlog = async()=>{
      const blob_img = await fileToBase64(File[0])
      setBaseImg(blob_img)
      if(blob_img)
      {
        const blog_data = {
          title : Title,
          desc : Desc,
          img : blob_img
        }
        setTitle('')
        setDesc('')
         dispatch(setBlogs(blog_data))
      }
    }

    
  return (
    <div className='h-[100vh]  justify-center flex flex-col '>
         <FileUpload file={BaseImg} setImg={setFile}/>
         <div className='flex justify-center items-center flex-col gap-8'>
         <input value={Title} onChange={(e:any)=>{
            setTitle(e?.target?.value)
         }} type='text' placeholder='Title' className='w-[90%] p-3 rounded-md'/>
         <input value={Desc} onChange={(e:any)=>{
            setDesc(e?.target?.value)
         }} type='text' placeholder='Description' className='w-[90%] p-3 rounded-md'/>
         <button onClick={UploadBlog} className='bg-white p-3 w-full rounded-md'>Submit</button>
         </div>
    </div>
  )
}

export default AddBlog