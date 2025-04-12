import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route
      path="/dashboard"
      element={
        <>
          <Sidebar />
          <Dashboard />
        </>
      }
    />
  </Routes>
</BrowserRouter>
  )
}

export default App
