import { Link } from "react-router-dom";

const courses = [
      {
            id: "react",
            title: "React Course",
            duration: "2 Months",
      },
      {
            id: "node",
            title: "Node.js Course",
            duration: "3 Months",
      },
      {
            id: "mongodb",
            title: "MongoDB Course",
            duration: "1 Month",
      },
];

function Courses () {
      return (
            <div>
                  <h1>Course Page</h1>
                  {courses.map((course) => {
                        return (
                              <div>
                                    <h3>{course.title}</h3>
                                    <p>Duration : {course.duration}</p>
                                    <Link to={`/courses/${course.id}`}>View Course Details</Link>
                              </div>
                        )
                  })}
            </div>
           
      )
}

export default Courses;
