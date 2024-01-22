import React from 'react'
import ErrorMessage from '../Errors/ErrorMessage';
import { getAllStudents } from '../../api/fetch';
import { useState, useEffect } from 'react';
import StudentList from './StudentList';
import "./StudentIndex.css"

function StudentIndex({editedStudentList,setEditedStudentList,setAllStudentList , filterName}) {

    const [loadingError, setLoadingError] = useState(false);

    useEffect(() => {
      if(editedStudentList.length===0){
        getAllStudents()
        .then((data) => {
          setAllStudentList(data);
          
              setEditedStudentList(data);
              setLoadingError(false);
            })
            .catch((error) => {
              console.error(error);
              setLoadingError(true);
            });
      }
    }, []);

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <div className='all-index-content'>
          <h1>{filterName ? filterName:"All"} Students</h1>
          <h2>Total students: {editedStudentList.length}</h2>

          <div className='index-container'>
        <section className="Student-index">
            {/* <!-- ShowListing components --> */}
            {editedStudentList.map((student) => {
              return  <StudentList student={student} key={student.id}/>;
            })}
        </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentIndex