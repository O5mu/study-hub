## Project Structure

```
/course-management-system
  ├── /server                 # Backend code
  │   ├── /models             # MongoDB schemas
  │   ├── /routes             # API endpoints
  │   ├── /scripts            # Utility scripts
  │   ├── server.js           # Main server file
  │   └── package.json        # Backend dependencies
  │
  └── /client                 # Frontend React app
      ├── /public             # Static files
      ├── /src                # React source code
      │   ├── /components     # React components
      │   ├── /hooks          # Custom React hooks
      │   └── App.js          # Main React component
      └── package.json        # Frontend dependencies
```

## Getting Started

### Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on `.env.template` and add your MongoDB Atlas connection string:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

4. Seed the database with sample data:
   ```
   npm run seed
   ```

5. Start the server:
   ```
   npm run dev
   ```

The server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the client directory:
   ```
   cd ../client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The React app will run on http://localhost:3000

## API Endpoints

### Courses

- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course by ID
- `POST /api/courses` - Create a new course (admin only)
- `PUT /api/courses/:id` - Update a course (admin only)
- `DELETE /api/courses/:id` - Delete a course (admin only)

### Moderators

- `GET /api/moderators` - Get all moderators
- `GET /api/moderators/:id` - Get moderator by ID
- `GET /api/moderators/course/:courseId` - Get moderators by course
- `POST /api/moderators` - Create a new moderator (admin only)
- `PUT /api/moderators/:id` - Update a moderator (admin or self)
- `DELETE /api/moderators/:id` - Delete a moderator (admin only)

### Students

- `GET /api/students` - Get all students (admin or moderator)
- `GET /api/students/:id` - Get student by ID
- `GET /api/students/course/:courseId` - Get students by course
- `POST /api/students` - Create a new student (admin only)
- `PUT /api/students/:id` - Update a student (admin or self)
- `DELETE /api/students/:id` - Delete a student (admin only)
- `POST /api/students/:id/enroll/:courseId` - Enroll student in course
- `DELETE /api/students/:id/enroll/:courseId` - Remove student from course

### Users

- `POST /api/users/register` - Register a new user (admin only)
- `POST /api/users/login` - Login a user
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/me` - Get current user
- `PUT /api/users/:id` - Update a user (admin or self)
- `DELETE /api/users/:id` - Delete a user (admin only)

## Testing the API

You can use tools like Postman or Thunder Client to test the API endpoints. The following test accounts are available after seeding:

- Admin: admin@example.com / 1234
- Moderator: moderator@example.com / 1234
- Student: student@example.com / 1234

## Using the React Hooks

For frontend developers, we've created custom React hooks to easily interact with the API:

```jsx
// Example: Fetching and displaying courses
import useApi from '../hooks/useApi';

const CourseComponent = () => {
  const { data: courses, loading, error } = useApi('courses');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course._id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};
```

### API Hook Functions

The `useApi` hook provides the following functions:

- `data` - The fetched data
- `loading` - Loading state
- `error` - Error state
- `refresh()` - Reload data from the API
- `create(body)` - Create a new resource
- `update(id, body)` - Update a resource
- `remove(id)` - Delete a resource
- `getById(id)` - Get a specific resource by ID

## Contribution Guidelines

1. Create feature branches from `main`
2. Follow consistent naming conventions
3. Write clear commit messages
4. Create pull requests for review
