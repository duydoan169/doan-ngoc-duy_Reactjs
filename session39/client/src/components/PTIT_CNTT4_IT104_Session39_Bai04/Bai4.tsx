/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";

export default function CompressedImageUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    Resizer.imageFileResizer(
      selectedFile,
      800,
      800,
      "JPEG",
      70,
      0,
      async (resizedImage: any) => {
        const formData = new FormData();
        formData.append("file", resizedImage as Blob);
        formData.append("upload_preset", "test1111111");

        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/da3olfyka/image/upload",
            formData
          );
          const url = response.data.secure_url;
          setUploadedImages([...uploadedImages, url]);
          setSelectedFile(null);
        } catch (error) {
          console.log(error);
        }
      },
      "blob"
    );
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {selectedFile && <button onClick={handleUpload}>Upload Compressed Image</button>}

      <div>
        {uploadedImages.map((url) => (
          <div key={url}>
            <img src={url} alt="Uploaded" width={200} />
          </div>
        ))}
      </div>
    </div>
  );
}
