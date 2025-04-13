import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <aside>
      <h3>Admin</h3>
      <ul>
        <li><Link to="/admin">Home</Link></li>
        <li><Link to="/manage-courses">Manage Courses</Link></li>
      </ul>
    </aside>
  );
}

export default AdminSidebar;
