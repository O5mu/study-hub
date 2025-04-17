
import './App.css';
import Sidebar from './components/Sidebar';
import StudentCard from './components/StudentCard';
import CourseCard from "./components/CourseCard";
import MentorCard from './components/MentorCard';
function App() {
  return (
    <div>
      <Sidebar />
      <StudentCard/>
      <CourseCard/>
      <MentorCard/>
    </div>



  )
}

export default App
