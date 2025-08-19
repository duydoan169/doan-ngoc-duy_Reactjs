import React from 'react'

export default function FormatName() {
    const user = {
        firstName: "Nguyễn Văn",
        lastName: "Nam",
    };
  return (
    <div>
        <p>Ho va Ten: {user.firstName} {user.lastName}</p>
    </div>
  )
}
