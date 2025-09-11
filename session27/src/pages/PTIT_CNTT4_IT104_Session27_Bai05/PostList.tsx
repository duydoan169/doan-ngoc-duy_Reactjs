import React from 'react'
import { Link } from 'react-router-dom';
export interface IDataTask {
  id: number;
  title: string;
  description: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const posts: IDataTask[] = [
  {
    id: 1,
    title: "Học React Router",
    description: "Làm quen với Dynamic Routes và useNavigate",
  },
  {
    id: 2,
    title: "Ôn lại Tailwind",
    description: "Thực hành tạo UI cơ bản bằng Tailwind CSS",
  },
  {
    id: 3,
    title: "Hoàn thành BTVN",
    description: "Đẩy code lên GitHub và nộp link",
  },
  {
    id: 4,
    title: "Luyện tập TypeScript",
    description: "Ôn lại interface, type và generic trong TypeScript",
  },
  {
    id: 5,
    title: "Học useContext",
    description: "Tìm hiểu cách chia sẻ state giữa các component bằng useContext",
  },
];

export default function PostList() {
  return (
    <div>
      <h2>Danh sach bai viet</h2>
        <div style={{display: "flex", flexDirection: "column", gap: "15px"}}>
            {posts.map((item, index) =>{
                return <div key={index} style={{border: "1px solid grey", width: "800px", borderRadius: "6px", padding: "10px"}}>
                    <Link style={{color: "royalblue"}} to={`/blog/posts/${item.id}`}>{item.title}</Link>
                    <p>{item.description}</p>
                </div>
            })}
        </div>
    </div>
  )
}
