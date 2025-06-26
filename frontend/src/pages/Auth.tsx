import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../configs/firebase";
import "../css/Auth.css";
import { useNavigate } from "react-router";

const Auth = () => {
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const token = await result.user.getIdToken();

    const user = await fetch("http://localhost:8080/api/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tokenId: token }),
    });

    const data = await user.json();

    localStorage.setItem("userEmail", data?.data?.email);

    navigate("/dashboard");

    console.log(data);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Welcome</h2>
        <p className="auth-subtitle">Login to continue</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="auth-btn" onClick={handleGoogleLogin}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google Icon"
              className="google-icon"
            />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
