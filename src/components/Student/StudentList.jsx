import { Link } from "react-router-dom"
import "./StudentList.css"


function StudentList({
  student: {id,names,profilePhoto,dob,username,certifications}}) {

    function onTrack(resume, linkedin, github, mockInterview) {
      return resume && linkedin && github && mockInterview ? (
        <h3 className="on-track">On Track to Graduate</h3>
      ) : null ;
    }
    function convertToNamedDate(dob) {
      const date = new Date(dob);
      const namedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      return namedDate;
    }
    

  return (

    <article className="student">
      <link rel="stylesheet" href="" />
      <Link to={`/student-index/${id}`}>
        <img src={profilePhoto} alt="the photo" />
        <br />
      </Link>
      <aside className="details">
        <p>
          <span>{names.preferredName} {names.middleName} {names.surname}:</span>
        </p>
        <p>
          <span>{username}</span> 
        </p>
        <p>
          <span> {convertToNamedDate(dob)}</span>
        </p>
        <div className="on-track-wrapper">
          {onTrack(certifications.resume, certifications.linkedin, certifications.github, certifications.mockInterview)}
        </div>
      </aside>
    </article>
  );
}

export default StudentList