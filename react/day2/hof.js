const students = [
      { name: "Aman", marks: 85 },
      { name: "Riya", marks: 42 },
      { name: "Kabir", marks: 76 },
      { name: "Sneha", marks: 35 },
      { name: "Vikram", marks: 90 }
];

/**reate a new array containing only students who passed. Passing marks: 50 and above.

Create a new array containing only the names of passed students.

Calculate the average marks of the whole class.

Create a new array where each student gets a status property: */


const passedstudent = students.filter((student) => {
      return student.marks>=50
})

// console.log("passedStudent",passedstudent)

const passName = students.map((student) => {
      if(student.marks >= 50) {
            return student.name
      }
})
// console.log("passed student name", passName)
//3


const totalMarks = students.reduce((acc,student) => {
      return acc + student.marks
} ,0)

// console.log("total",totalMarks)

const averageMarks = totalMarks/students.length;
console.log("average Matks",averageMarks)

//  
const studentWithStatus = students.map((student) => {
      return {
            ...student,
            status : student.marks >= 50 ? "Pass" : "Fail"
      }
})

console.log("studentWithStatus",studentWithStatus)

