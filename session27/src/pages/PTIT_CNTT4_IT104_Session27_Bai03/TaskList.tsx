import React from 'react'
import { Link } from 'react-router-dom';
export interface IDataTask {
  id: number;
  title: string;
  description: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const tasks: IDataTask[] = [
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
];

export default function TaskList() {
  return (
    <div>
        <h2 style={{textAlign: "center"}}>Danh sach cong viec</h2>
        <div>
            {tasks.map((item, index) => {
                return <div key={index} style={{border: "1px solid black", margin: "10px auto", width: "450px", padding: "15px"}}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <Link to={`/task/${item.id}`}>Xem chi tiet</Link>
                </div>
            })}
        </div>
    </div>
  )
}
