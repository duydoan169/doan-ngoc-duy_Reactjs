import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from './ProductList';

export default function ProductDetail() {
    const {id} = useParams();
    const target = products.find((item) => item.id==Number(id));
  return (
    <div>
        <h2>Chi tiet san pham</h2>
        {!target ? <h3>San pham khong ton tai</h3> : <>
            <h3>{target.name}</h3>
            <p>Gia: {target.price.toLocaleString()} VND</p>
            <p>Mo ta: {target.description}</p>
            <Link to={"/products"}>Quay lai</Link>
        </>}
    </div>
  )
}
