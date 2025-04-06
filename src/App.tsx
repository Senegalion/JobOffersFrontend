import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import OffersPage from "./pages/OffersPage";
import "./App.css";

const App: React.FC = () => {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleLogin = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <Router>
      <div className="App-header">
        <h1>Job Offers App</h1>
        {token && (
          <button onClick={handleLogout} style={{ marginBottom: 20 }}>
            Logout
          </button>
        )}
        <Routes>
          <Route
            path="/"
            element={
              token ? <Navigate to="/offers" /> : <Navigate to="/login" />
            }
          />
          <Route path="/login" element={<LoginForm setToken={handleLogin} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/offers/*"
            element={
              token ? <OffersPage token={token} /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
