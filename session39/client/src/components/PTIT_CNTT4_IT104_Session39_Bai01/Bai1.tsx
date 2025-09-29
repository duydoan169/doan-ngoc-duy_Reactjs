import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
type Upload={
    image: string,
    description: string
}
export default function Bai1() {
    const {register, handleSubmit} = useForm<{ image: FileList; description: string }>();
    const [upload, setUpload] = useState<Upload[]>([]);
    const onSubmit = async (data: {image: FileList, description: string})=>{
        const image = data.image[0];
        if(!image){
            alert("khong co anh");
            return
        }
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "test1111111");
        try {
            const response = await axios.post("https://api.cloudinary.com/v1_1/da3olfyka/image/upload", formData);
            const url = response.data.secure_url;
            setUpload([...upload, {image: url, description: data.description}]);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="file" accept='image/*' {...register("image")}/> <br /> <br />
        <input type="text" placeholder='Nhap mo ta' {...register("description")}/>
        <button type='submit'>Upload</button>
      </form>
      <br /> <br />
      <div>
        {upload.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.description} width={"300px"}/>
            <h2>{item.description}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
