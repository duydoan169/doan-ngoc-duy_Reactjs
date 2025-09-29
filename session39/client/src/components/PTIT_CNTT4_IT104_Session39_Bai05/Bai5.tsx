import React, { useState } from "react";
import axios from "axios";

export default function CloudinaryThumbnail() {
  const [uploadedImages, setUploadedImages] = useState<
    { original: string; thumbnail: string }[]
  >([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "test1111111");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/da3olfyka/image/upload",
        formData
      );
      const originalUrl = response.data.secure_url;
      const thumbnailUrl = originalUrl.replace("/upload/", "/upload/w_150,c_scale/");
      setUploadedImages([...uploadedImages, { original: originalUrl, thumbnail: thumbnailUrl }]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {uploadedImages.map((item) => (
          <img
            key={item.original}
            src={item.thumbnail}
            alt=""
            width={100}
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedImage(item.original)}
          />
        ))}
      </div>
      {selectedImage && (
        <div style={{ marginTop: "20px" }}>
          <img src={selectedImage} alt="" width={400} />
        </div>
      )}
    </div>
  );
}
