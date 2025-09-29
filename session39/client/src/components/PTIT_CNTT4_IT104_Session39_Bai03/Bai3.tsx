/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import Cropper, { type ReactCropperElement } from "react-cropper";
import axios from "axios";

export default function ImageCropUpload() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const cropperRef = useRef<ReactCropperElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setSelectedImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!cropperRef.current) return;
    const cropper = (cropperRef.current as any)?.cropper;
    const croppedBlob = await new Promise<Blob | null>((resolve) =>
      cropper.getCroppedCanvas().toBlob(resolve)
    );
    if (!croppedBlob) return;

    const formData = new FormData();
    formData.append("file", croppedBlob);
    formData.append("upload_preset", "test1111111");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/da3olfyka/image/upload",
        formData
      );
      const url = response.data.secure_url;
      setUploadedImages([...uploadedImages, url]);
      setSelectedImage(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {selectedImage && (
        <Cropper
          src={selectedImage}
          style={{ height: 300, width: "100%" }}
          aspectRatio={1}
          guides={false}
          ref={cropperRef}
        />
      )}

      {selectedImage && <button onClick={handleUpload}>Upload Cropped Image</button>}

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
