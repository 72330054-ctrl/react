import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/hero';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './pages/AuthContext';
import LoginForm from './pages/LoginForm';
import Dashboard from './pages/Dashboard';
function ProtectedLayout() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

function AppContent() {
  const { user } = useAuth();

  return (
     <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />

        
        <Route
          path="/*"
          element={user ? <ProtectedLayout /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
