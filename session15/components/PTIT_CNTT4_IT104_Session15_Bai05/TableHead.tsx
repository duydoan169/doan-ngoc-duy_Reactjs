import React, { Component } from 'react'
export default class TableHead extends Component {
    
  render() {
    return (
        <thead>
            <tr>
                <th>STT</th>
                <th>Ma sinh vien</th>
                <th>Ten sinh vien</th>
                <th>Ngay sinh</th>
                <th>Email</th>
                <th>Trang thai</th>
                <th>Chuc nang</th>
            </tr>
        </thead>
    )
  }
}
