import "./ClassList.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';


function ClassList({allStudentList,editedStudentList,setEditedStudentList}) {
  
  const [filter, setFilter] = useState("")
  
  const cohortFilter = (students ,filter) => {
    if (!filter) {
      return students;
    }
    return students.filter((student) => student.cohort.cohortCode === filter);
  };

  
   const namesofCohorts2026 = [
    "Winter 2026",
    "Spring 2026",
    "Summer 2026",
    "Fall 2026",

   ]

   const namesofCohorts2025 = [
    "Winter 2025",
    "Spring 2025",
    "Summer 2025",
    "Fall 2025",
   ]

   const [fullClasses, setFullClasses] = useState([ ...namesofCohorts2025,  ...namesofCohorts2026 ])


  function filterSpaces(inputString) {
    return inputString.split('').filter(char => char !== ' ').join('');
  }

  const [button, setButton] = useState("Ascending")

const handleChange = () => {
  setButton((prevButton) => (prevButton === "Ascending" ? "Descending" : "Ascending"));
  setFullClasses((prevClasses) => (prevButton === "Ascending" ? [...namesofCohorts2025, ...namesofCohorts2026] : [...namesofCohorts2026, ...namesofCohorts2025]));
};

useEffect(() => {
  const tempFilter = cohortFilter(allStudentList,filter)
  setEditedStudentList(tempFilter)
  console.log(tempFilter)
},[ filter ]);

  return (
    <div>
      <h2> Choose A Class By Start Date </h2>
         <button onClick={handleChange}> Sort {button} By Year </button>
           <ul>
           <li key={"All Students"} onClick={() => setFilter("")}>All Students</li>
            {

              fullClasses.map((className) => (
              <li key={className} onClick={() => setFilter(filterSpaces(className))}>{className}</li>
               ))
            }
            <Link to={`/about-page`}>
            <li key={"About The Developers"} >About The Developers</li>
            </Link>
           </ul>
   </div>
   )
}

export default ClassList