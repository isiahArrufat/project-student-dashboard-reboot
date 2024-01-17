import { Link } from "react-router-dom"


function StudentList({
  student: {id,names,profilePhoto,dob,username}}) {
  return (

    <article className="student">
      StudentList
      <link rel="stylesheet" href="" />
      <Link to={`/StudentIndex/${id}`}>
        <img src={profilePhoto} alt="the photo"/>
      </Link>
      <aside className="details">
        <p>
          <span>{names.preferredName} {names.middleName} {names.surname}:</span>
        </p>
        <p>
          <span>{username}</span> 
        </p>
        <p>
          <span> {dob}</span>
        </p>
        <p>
        
        </p>
      </aside>
    </article>
  );
}

export default StudentList