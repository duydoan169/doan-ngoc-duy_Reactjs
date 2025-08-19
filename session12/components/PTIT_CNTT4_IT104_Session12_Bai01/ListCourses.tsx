import React from 'react'

export default function ListCourses() {
    const courses: string[]=["HTML", "CSS", "JavaScript", "ReactJS"];
  return (
    <div>
        <h3>Danh sach khoa hoc</h3>
      <ol>
        {courses.map((course, index) =>(
            <li key={index}>{course}</li>
        ))}
      </ol>
    </div>
  )
}
