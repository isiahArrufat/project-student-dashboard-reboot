import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

import { getOneStudent } from "../../api/fetch"
import StudentList from "./StudentList"

import ErrorMessage from "../Errors/ErrorMessage"

import "./StudentCard.css"

function StudentCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const {
    id:studentId,
    codewars,
    certifications,
    cohort
  } = student;

  useEffect(() => {
    getOneStudent(id)
      .then((data) => {
        setStudent(data);
        if (Object.keys(data).length === 0) {
          setLoadingError(true);
        } else {
          setLoadingError(false);
        }
      })
      .catch((error) => {
        setLoadingError(true);
      });
  }, [id]);

  return (
    <div>
      <StudentList/>
      StudentCard
    </div>
  )
}

export default StudentCard