import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from '../../hooks/useAPI'; // Your custom useApi hook
import './AdminHomepage.css';

function ManageAccounts() {
  const navigate = useNavigate();

  // Use the useApi hook to fetch all users
  const { data: users, loading, error } = useApi('users');

  const [formError, setFormError] = useState('');

  const handleRoleChange = async (userId, newRole) => {
    try {
      // Make a PUT request to update the user's role using the API
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role: newRole }),
      });

      const result = await response.json();

      if (!response.ok) {
        setFormError(result.message || 'Failed to update role');
        return;
      }

      // Success, alert the admin and refresh the users list
      alert('Role updated successfully!');
    } catch (err) {
      setFormError('An error occurred. Please try again.');
    }
  };

  const handleSignOut = () => {
    navigate('/login');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <div className="top-bar">
        <button onClick={handleSignOut} className="signout-btn">Sign Out</button>
      </div>

      <h2>Manage Accounts</h2>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}

      <div className="student-scroll">
        {users.map((user) => (
          <div key={user._id} className="student-card">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Current Role:</strong> {user.role}</p>
            <select
              value={user.role}
              onChange={(e) => handleRoleChange(user._id, e.target.value)}
            >
              <option value="student">Student</option>
              <option value="moderator">Moderator</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ManageAccounts;
