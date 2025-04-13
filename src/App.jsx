import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StudentHomepage from './pages/StudentHomepage';
import Courses from './pages/Courses';
import Tasks from './pages/Tasks';
import Calendar from './pages/Calendar';
import Resources from './pages/Resources';
import ModeratorHomepage from './pages/ModeratorHomepage';
import ApproveResources from './pages/ApproveResources';
import AddResource from './pages/AddResource';
import AdminHomepage from './pages/AdminHomepage';
import ManageCourses from './pages/ManageCourses';

import StudentSidebar from './components/StudentSidebar';
import ModeratorSidebar from './components/ModeratorSidebar';
import AdminSidebar from './components/AdminSidebar';

import './App.css'


function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />

    {/* Student Pages */}
    <Route path="/student" element={<><StudentSidebar /><StudentHomepage /></>} />
    <Route path="/courses" element={<><StudentSidebar /><Courses /></>} />
    <Route path="/tasks" element={<><StudentSidebar /><Tasks /></>} />
    <Route path="/calendar" element={<><StudentSidebar /><Calendar /></>} />
    <Route path="/resources" element={<><StudentSidebar /><Resources /></>} />

    {/* Moderator Pages */}
    <Route path="/moderator" element={<><ModeratorSidebar /><ModeratorHomepage /></>} />
    <Route path="/approve-resources" element={<><ModeratorSidebar /><ApproveResources /></>} />
    <Route path="/add-resource" element={<><ModeratorSidebar /><AddResource /></>} />

    {/* Admin Pages */}
    <Route path="/admin" element={<><AdminSidebar /><AdminHomepage /></>} />
    <Route path="/manage-courses" element={<><AdminSidebar /><ManageCourses /></>} />
  </Routes>
</BrowserRouter>
  )
}

export default App
