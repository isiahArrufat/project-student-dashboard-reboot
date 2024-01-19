import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

// Components
import Header from "./components/Common/Header";
import StudentCard from "./components/Student/StudentCard";
import StudentIndex from "./components/Student/StudentIndex";
import AboutPage from "./components/Common/AboutPage";
import ClassList from "./components/ClassList/ClassList";


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
      <Header goToStudentIndex={goToStudentIndex}/>
      <ClassList editedStudentList = {editedStudentList} setEditedStudentList = {setEditedStudentList} 
          allStudentList = {allStudentList} filter= {filter} setFilter = {setFilter} 
          setFilterName = {setFilterName} goToStudentIndex ={goToStudentIndex}/>
      <Routes>
        <Route path="/" element={<StudentIndex 
        editedStudentList = {editedStudentList} setEditedStudentList = {setEditedStudentList}
        setAllStudentList={setAllStudentList} 
        filterName = {filterName}/>} />
        <Route path="/student-index/:id" element={<StudentCard />} />
        <Route path="/about-page" element={<AboutPage />} />
      </Routes>

    </div>
  );
}
// how are we going to get the specific student through the list of students when clicked. while useing

export default App;
