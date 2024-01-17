import { useState , useEffect } from "react"

import { getAllStudents } from "../../api/fetch";

import ErrorMessage from "../Errors/ErrorMessage";

function StudentList() {

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
          {console.log(allStudentList)}
        </div>
      )}
    </div>
  );
}

export default StudentList