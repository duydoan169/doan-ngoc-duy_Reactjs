import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
const products = [
  {
    id: 1,
    name: "Laptop Dell XPS 13",
    price: 35000000,
    description: "Ultrabook cao cấp với thiết kế mỏng nhẹ và hiệu năng mạnh mẽ."
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    price: 30000000,
    description: "Smartphone cao cấp của Apple với màn hình ProMotion và camera mạnh."
  },
  {
    id: 3,
    name: "Samsung Galaxy S22",
    price: 25000000,
    description: "Điện thoại flagship của Samsung với màn hình AMOLED và hiệu suất mạnh."
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM4",
    price: 7000000,
    description: "Tai nghe chống ồn hàng đầu với âm thanh chất lượng cao."
  },
  {
    id: 5,
    name: "Apple Watch Series 8",
    price: 12000000,
    description: "Đồng hồ thông minh với nhiều tính năng theo dõi sức khỏe."
  }
];
export default function ProductList() {
    const [name, setName]=useState("");
    const [searchParams, setSearchParams]=useSearchParams();
    const searchValue=searchParams.get("search") || "";
    useEffect(()=>{
      setName(searchValue);
    }, [])
  return (
    <div>
        <div style={{display: "flex", gap: "10px"}}>
            <input type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}/>
            <button onClick={()=> setSearchParams({search: name})} style={{color: "white", backgroundColor: "dodgerblue", border: "none", width: "75px", height: "25px", borderRadius: "5px"}}>Tim kiem</button>
        </div>
        <div style={{display: "flex", gap: "10px", marginTop: "20px"}}>
            {products.map((item, index) =>{
                if(item.name.toLowerCase().includes(searchValue.toLowerCase())){
                  return <div key={index} style={{display: "flex", flexDirection: "column", gap: "10px", width: "250px", height: "200px", border: "1px solid gray", padding: "10px"}}>
                      <h3>{item.name}</h3>
                      <div>Mo ta: {item.description}</div>
                      <div>Gia: {item.price.toLocaleString()} VND</div>
                  </div>
                }
            })}
        </div>
    </div>
  )
}
