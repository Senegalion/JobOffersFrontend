import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC<{ setToken: (token: string) => void }> = ({
  setToken,
}) => {
  return (
    <div>
      <LoginForm setToken={setToken} />
    </div>
  );
};

export default LoginPage;
