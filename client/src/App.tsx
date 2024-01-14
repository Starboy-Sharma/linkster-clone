import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import ProtectedRoute from './utils/ProtectedRoutes';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
