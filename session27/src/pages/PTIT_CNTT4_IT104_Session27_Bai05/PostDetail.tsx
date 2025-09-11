import React from 'react'
import { posts } from './PostList';
import { useParams } from 'react-router-dom';
export default function PostDetail() {
    const {id} = useParams();
    const target = posts.find((item) => item.id==Number(id));
  return (
    <div>
      <h2>{target?.title}</h2>
      <p>{target?.description}</p>
    </div>
  )
}
