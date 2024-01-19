import React from 'react'
import ErrorMessage from '../Errors/ErrorMessage';
import { getAllStudents } from '../../api/fetch';
import { useState, useEffect } from 'react';
import StudentList from './StudentList';

function StudentIndex({editedStudentList,setEditedStudentList,setAllStudentList , filterName}) {

    const [loadingError, setLoadingError] = useState(false);

    useEffect(() => {
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
    }, []);

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <div>
          <div>
          <h1>{filterName ? filterName:"All"} Students</h1>
          <h2>Total students: {editedStudentList.length}</h2>

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