import React from "react";
const courses = [
  {
    id: 1,
    cname: "Angular",
    date: "4/5/2021"
  },
  {
    id: 2,
    cname: "React",
    date: "6/3/2021"
  }
];

function CourseDetails() {
  return (
    <div>
      <h2>Course Details</h2>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.cname}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;