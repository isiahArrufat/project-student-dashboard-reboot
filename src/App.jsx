import { Route, Routes, useNavigate } from "react-router-dom";

// Components
import Header from "./components/common/Header";
import StudentCard from "./components/student/StudentCard";
import StudentIndex from "./components/Student/StudentIndex";
import AboutPage from "./components/Common/AboutPage";


function App() {
  const navigate = useNavigate();

  const goToStudentIndex = () => {
    navigate('/');
  };

  return (
    <div className="wrapper">
      <Header goToStudentIndex={goToStudentIndex}/>
      <Routes>
        <Route path="/" element={<StudentIndex />} />
        <Route path="/student-index/:id" element={<StudentCard />} />
        <Route path="/about-page" element={<AboutPage />} />
      </Routes>

    </div>
  );
}
// how are we going to get the specific student through the list of students when clicked. while useing

export default App;
