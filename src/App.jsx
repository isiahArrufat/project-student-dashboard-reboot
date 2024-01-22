import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

// Components
import Header from "./components/Common/Header";
import StudentCard from "./components/Student/StudentCard";
import StudentIndex from "./components/Student/StudentIndex";
import AboutPage from "./components/Common/AboutPage";
import ClassList from "./components/ClassList/ClassList";
import "./App.css"


function App() {
  //this will render Students on the page after the filter
  const [editedStudentList, setEditedStudentList] = useState([]);
  // this will always be the full set of student data
  const [allStudentList, setAllStudentList] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterName, setFilterName] = useState("");
  const navigate = useNavigate();

  const goToStudentIndex = () => {
    navigate('/');
  };

  return (
    <div className="wrapper">
      <Header className="header" goToStudentIndex={goToStudentIndex}/>
      <div className="classlist-container">
        <ClassList className="classlist" editedStudentList={editedStudentList} setEditedStudentList={setEditedStudentList} 
          allStudentList={allStudentList} filter={filter} setFilter={setFilter} 
          setFilterName={setFilterName} goToStudentIndex={goToStudentIndex}/>
    <div className="content">
      <Routes>
        <Route path="/" element={<StudentIndex 
        editedStudentList={editedStudentList} setEditedStudentList={setEditedStudentList}
        setAllStudentList={setAllStudentList} 
        filterName={filterName}/>} />
        <Route path="/student-index/:id" element={<StudentCard />} />
        <Route path="/about-page" element={<AboutPage />} />
    </Routes>
        </div>
  </div>
</div>
  );
}

export default App;
