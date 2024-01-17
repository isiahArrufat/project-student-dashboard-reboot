import React from 'react'
import ErrorMessage from '../Errors/ErrorMessage';
import { getAllStudents } from '../../api/fetch';
import { useState, useEffect } from 'react';
import StudentList from './StudentList';

function StudentIndex() {
    //this will render Students on the page after the filter
    const [editedStudentList, setEditedStudentList] = useState([]);
    // this will always be the full set of student data
    const [allStudentList, setAllStudentList] = useState([]);
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
          Student list
          <h1>All Students</h1>
          <h2>Total students "function goes here" </h2>

          {console.log(allStudentList)}
        <section className="Student-index">
            {/* <!-- ShowListing components --> */}
            {editedStudentList.map((student) => {
                return <StudentList student={student} key={student.id} />;
            })}
        </section>
        </div>
      )}
    </div>
  );
}

export default StudentIndex