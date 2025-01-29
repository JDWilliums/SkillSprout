import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Assistant from './pages/Assistant'; // Import the Assistant page as HomeworkHelper
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout'; // Import the layout component
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Private Routes with Header */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="assistant" element={<Assistant />} />
        </Route>

        {/* Fallback for undefined routes */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
