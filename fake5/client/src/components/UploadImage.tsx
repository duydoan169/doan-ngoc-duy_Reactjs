/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../store/slices/productSlices';

export default function UploadImage() {
    const [image, setImage]=useState<string>("");
    const [url, setUrl] = useState<string | null>(null);
    const result = useSelector((data: any) =>{
        return data.products.products
    })
    const dispatch: any = useDispatch();
    useEffect(()=>{
        dispatch(getAllProduct());
    }, [])
    const handleChange=(e: any)=>{
        setImage(e.target.files[0]);
    }
    const saveImage= async ()=>{
        if(image=="") return;
        const formData = new FormData();
        formData.append('file', image);  
        formData.append('upload_preset', import.meta.env.VITE_PROJECT_NAME);
        formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_NAME);
        try {
            const response = await axios.post("https://api.cloudinary.com/v1_1/da3olfyka/image/upload", formData);
            console.log(response);
            setUrl(response.data.secure_url);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
      <h1>upload anh len tren cloudinary</h1>
      <input type="file" onChange={handleChange}/> <br />
      <button onClick={saveImage}>Luu</button>
      <h1>anh sau khi da luu</h1>
      <img src={url ?? "a"} alt="" />
        <br />
        <br />
        <button>Them san pham</button>
      <h1>Danh sach san pham</h1>
      <table border={1}>
        <tr>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Ten</th>
                    <th>Anh</th>
                </tr>
            </thead>
            <tbody>
                {result.map((item: any) => {
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.image}</td>
                    </tr>
                })}
            </tbody>
        </tr>
      </table>
    </div>
  )
}
