import React from 'react'
import { Link } from 'react-router-dom';
// eslint-disable-next-line react-refresh/only-export-components
export const products = [
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
  return (
    <div>
        <h2>Danh sach san pham</h2>
        <div style={{display: "flex", gap: "15px"}}>
            {products.map((item, index) =>{
                return <div key={index} style={{height: "130px", border: "1px solid black", padding: "10px"}}>
                    <h3>{item.name}</h3>
                    <p>Gia: {item.price.toLocaleString()} VND</p>
                    <Link to={`/products/${item.id}`}>Xem chi tiet</Link>
                </div>
            })}
        </div>
    </div>
  )
}
