import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Header from "./components/common/Header";
import ClassList from "./components/ClassList/ClassList";
import StudentCard from "./components/student/StudentCard";
import StudentList from "./components/student/StudentList";

// Data 
import StudentData from "./data/data.json";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/ClassList" element={<ClassList StudentData = { StudentData }/>} />
        <Route path="/StudentList" element={<StudentList StudentData = { StudentData }/>} />
      </Routes>
    </div>
  );
}

export default App;
