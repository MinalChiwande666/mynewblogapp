import React, {useState,useCallback, SetStateAction} from 'react'
import { useDropzone } from 'react-dropzone';

interface FileUploadProp{
   setImg: React.Dispatch<SetStateAction<any>>,
   file : string | any
}

function FileUpload({setImg,file}:FileUploadProp) {
    const [files, setFiles] = useState<any>([]);

    // Callback function to handle file drop
    const onDrop = useCallback(async(acceptedFiles:any) => {
      setFiles((prevFiles:any) => [...prevFiles, ...acceptedFiles]);
      setImg(acceptedFiles)
    }, []);



    
    console.log(file,'files sjdjsndj')
  
    // Dropzone setup
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      multiple: false,
      accept: { "image/*": [] },// Accept images only, you can change as needed
    });
   
    return (
      <div>
        <div
          {...getRootProps()}
          style={{
            border: "2px dashed #009688",
            borderRadius: "10px",
            padding: "30px",
            height:'100px',
            width:'100%',
            textAlign: "center",
            cursor: "pointer",
            color: "#666",
          }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            file? <img className='w-full h-[100px] object-cover' src={`data:image/jpeg;base64,${file}`} alt=''/>:
            <p>Drag & drop files here, or click to select files</p>
          )}
        </div>
  
        <h3>Uploaded Files:</h3>
       
        {/* <ul>
          {files.map((file:any, index:any) => (
            <li className='text-white' key={index}>{file.name}</li>
          ))}
        </ul> */}
      </div>
    );
  
  }

export default FileUpload