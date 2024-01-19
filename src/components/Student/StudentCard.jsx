import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

import { getAllStudents} from "../../api/fetch"
import StudentList from "./StudentList"

import ErrorMessage2 from "../Errors/ErrorMessage2"

import "./StudentCard.css"

function StudentCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    id: "",
    codewars: [],
    certifications: [],
    cohort: []
  });

  const [loadingError, setLoadingError] = useState(false);

  const [comments, setComments] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const author = event.target.author.value;
    const commentText = event.target.comment.value;
    
    // Adding the new comment to the comments array
    setComments([...comments, { author, commentText }]);
    
    event.target.author.value = '';
    event.target.comment.value = '';
  }

  const {
    id:studentId,
    codewars,
    certifications,
    cohort
  } = student;

  const percentOfGoal = codewars.length !==0 ? (codewars.current.total/codewars.goal.total*100).toFixed(0) : 0;
  

  const iconMap = {
    true: "🟢",
    false: "🔴",
  };

  useEffect(() => {
    getAllStudents()
      .then((data) => {
        const studentData = data.find((student)=>student.id === id)
        setStudent(studentData);
        console.log(studentData);
        if (Object.keys(studentData).length === 0) {
          setLoadingError(true);
        } else {
          setLoadingError(true);
        }
      })
      .catch((error) => {
        setLoadingError(true);
      });
  }, [id]);

  return (
    <div>
      {loadingError ? (
        <ErrorMessage2 />
      ) : (
        <div>
          {student.id && (
            <>
              <article className="Progress-notes">
                <StudentList student={student} className="student-list" />
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
                    <li>Resume: {iconMap[certifications.resume]}</li>
                    <li>LinkedIn: {iconMap[certifications.linkedin]}</li>
                    <li>Mock Interview: {iconMap[certifications.mockInterview]}</li>
                    <li>GitHub: {iconMap[certifications.github]}</li>
                  </ul>
                </div>
                <div className="notes">
                  <h2>1:1 Notes</h2>
                  <div className="form">
                    <form onSubmit={handleSubmit}>
                      <input 
                        type="text" 
                        name="author" 
                        placeholder="Author" 
                        required 
                      /><br />
                      <textarea 
                        name="comment" 
                        placeholder="Comment" 
                        required>
                      </textarea><br />
                      <button type="submit">Submit Comment</button>
                    </form>
                    <div className="comment-section">
                      <h2>Comments</h2>
                      {comments.map((comment, index) => (
                        <div key={index}>
                          <strong>{comment.author}</strong>: {comment.commentText}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default StudentCard