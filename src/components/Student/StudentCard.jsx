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

  const percentOfGoal = codewars.current.total/codewars.goal.total*100;
  

  const iconMap = {
    true: "🟢",
    false: "🔴",
  };

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
      <article className="Progress-notes">
        <div className="grades">
          <ul>
            <li><h2>Codewars</h2></li>
            <li>Current Total:{codewars.current.total}</li>
            <li>Last Week: {codewars.current.lastWeek}</li>
            <li>Goal: {codewars.goal.total}</li>
            <li>Percent of Goal Achieved: {percentOfGoal}%</li>
          </ul>
          <ul>
            <li><h2>Scores</h2></li>
            <li>Assignments: {cohort.scores.assignments * 100}%</li>
            <li>Projects: {cohort.scores.projects * 100}%</li>
            <li>Assessments: {cohort.scores.assessments * 100}%</li>
          </ul>
          <ul>
            <li><h2>Certifications</h2></li>
            <li>Resume: {iconMap[certifications.resume.value]}</li>
            <li>LinkedIn: {iconMap[certifications.linkedin.value]}</li>
            <li>Mock Interview: {iconMap[certifications.mockInterview.value]}</li>
            <li>GitHub: {iconMap[certifications.github.value]}</li>
          </ul>
        </div>
        <div className="notes">

        </div>
      </article>
    </div>
  )
}

export default StudentCard