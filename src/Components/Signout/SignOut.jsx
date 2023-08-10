import React from "react";
import { useNavigate } from "react-router-dom";

const SignOutComp = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("signedIn");
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard!</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOutComp;