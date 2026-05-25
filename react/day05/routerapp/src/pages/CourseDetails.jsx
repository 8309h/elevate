import { useParams, Link } from "react-router-dom";

const courses = [
      {
            id: "react",
            title: "React Course",
            duration: "2 Months",
            description: "Learn React from basics to advanced.",
      },
      {
            id: "node",
            title: "Node.js Course",
            duration: "3 Months",
            description: "Learn backend development with Node.js.",
      },
      {
            id: "mongodb",
            title: "MongoDB Course",
            duration: "1 Month",
            description: "Learn MongoDB database concepts.",
      },
];

function CourseDetails() {
      const { courseId } = useParams();

      const course = courses.find(
            (item) => item.id === courseId
      );

      if (!course) {
            return (
                  <div>
                        <h1>Course Not Found</h1>
                        <Link to="/">Go Home</Link>
                  </div>
            );
      }

      return (
            <div>
                  <h1>{course.title}</h1>
                  <p>Duration: {course.duration}</p>
                  <p>{course.description}</p>
            </div>
      );
}

export default CourseDetails;