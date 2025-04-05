import React, { useState } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

const App: React.FC = () => {
  const [showRegister, setShowRegister] = useState<boolean>(true);

  return (
    <div className="App-header">
      <h1>Job Offers Application</h1>
      {showRegister ? (
        <>
          <RegisterForm />
          <p>
            Already have an account?{" "}
            <span
              className="toggle-form"
              onClick={() => setShowRegister(false)}
            >
              Login
            </span>
          </p>
        </>
      ) : (
        <>
          <LoginForm />
          <p>
            Don't have an account?{" "}
            <span className="toggle-form" onClick={() => setShowRegister(true)}>
              Register
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default App;
