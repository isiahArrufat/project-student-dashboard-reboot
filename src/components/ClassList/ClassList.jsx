import "./ClassList.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';


function ClassList({allStudentList, setEditedStudentList, filter, setFilter , setFilterName,goToStudentIndex}) {
  

  
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
  setButton((e) => (e === "Ascending" ? "Descending" : "Ascending"));
  setFullClasses(() => (button === "Ascending" ? [...namesofCohorts2025, ...namesofCohorts2026] : [...namesofCohorts2026, ...namesofCohorts2025]));
};

useEffect(() => {
  const tempFilter = cohortFilter(allStudentList,filter)
  setEditedStudentList(tempFilter)
},[ filter ]);

  return (
    <div className="classlist">
      <h2> Choose A Class By Start Date </h2>
         <button onClick={handleChange}> Sort {button} By Year </button>
           <ul>
           <li className="all-students" key={"All Students"} onClick={() => (setFilter(""),setFilterName(""),goToStudentIndex())}>All Students</li>
            {

              fullClasses.map((cohortName) => (
              <li key={cohortName} className={filterSpaces(cohortName)} onClick={() => (setFilter(filterSpaces(cohortName)), setFilterName(cohortName),goToStudentIndex())}>{cohortName}</li>
               ))
            }
            <Link to={`/about-page`}>
            <li key={"About The Developers"} className="devs">About The Developers</li>
            </Link>
           </ul>
   </div>
   )
}

export default ClassList