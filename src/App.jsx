import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Forget from './pages/Login/Forget';
import Register from './pages/Login/Register';
import StudentHomepage from './pages/Student/StudentHomepage';
import Courses from './pages/Student/Courses';
import Tasks from './pages/Student/Tasks';
import Calendar from './pages/Student/Calendar';
import Resources from './pages/Student/Resources';
import ModeratorHomepage from './pages/Moderator/ModeratorHomepage';
import ApproveResources from './pages/Moderator/ApproveResources';
import AddResource from './pages/Moderator/AddResource';
import AdminHomepage from './pages/Admin/AdminHomepage';
import ManageCourses from './pages/Admin/ManageCourses';
import StudentSidebar from './components/StudentSidebar';
import ModeratorSidebar from './components/ModeratorSidebar';
import AdminSidebar from './components/AdminSidebar';

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<Forget />} />
    <Route path="/register" element={<Register />} />

    {/* Student Pages */}
    <Route path="/student" element={
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
        <StudentSidebar />
        <StudentHomepage />
      </div>
    } />
    <Route path="/courses" element={
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
        <StudentSidebar />
        <Courses />
    </div>
    } />
    <Route path="/tasks" element={
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
        <StudentSidebar />
        <Tasks />
    </div>
    } />
    <Route path="/calendar" element={
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
        <StudentSidebar />
        <Calendar />
    </div>
    } />
    <Route path="/resources" element={
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
        <StudentSidebar />
        <Resources />
    </div>
    } />

    {/* Moderator Pages */}
    <Route path="/moderator" element={
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
        <ModeratorSidebar />
        <ModeratorHomepage />
      </div>
    } />
    <Route path="/approve-resources" element={
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
        <ModeratorSidebar />
        <ApproveResources />
      </div>
    } />
    <Route path="/add-resource" element={
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
        <ModeratorSidebar />
        <AddResource />
      </div>
    } />

    {/* Admin Pages */}
    <Route path="/admin" element={
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
        <AdminSidebar />
        <AdminHomepage />
      </div>
    } />
    <Route path="/manage-courses" element={
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
        <AdminSidebar />
        <ManageCourses />
     </div>
    } />
  </Routes>
</BrowserRouter>
  )
}

export default App
