import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Header from "./components/common/Header";
import ClassList from "./components/ClassList/ClassList";
import StudentCard from "./components/student/StudentCard";
import StudentList from "./components/student/StudentList";
import StudentIndex from "./components/Student/StudentIndex";
import AboutPage from "./components/Common/AboutPage";


function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/ClassList" element={<ClassList />} />
        <Route path="/StudentIndex">
          {/* Add a route parameter for student id */}
          <Route index element = {<StudentIndex/>}/>
          <Route path=":id" element={<StudentCard />} />
        </Route>
        <Route path="/AboutPage" element={<AboutPage/>} />
      </Routes>
    </div>
  );
}
// how are we going to get the specific student through the list of students when clicked. while useing

export default App;
