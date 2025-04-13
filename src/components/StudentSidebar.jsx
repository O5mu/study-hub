import { Link } from 'react-router-dom';

function StudentSidebar() {
  return (
    <aside>
      <h3>Student</h3>
      <ul>
        <li><Link to="/student">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </aside>
  );
}

export default StudentSidebar;
