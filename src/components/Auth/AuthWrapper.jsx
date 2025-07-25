import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import SwitchPanel from "./SwitchPanel";
import Lottie from "lottie-react";
import carAnimation from "../../assets/animations/loginPageCar.json";

const AuthWrapper = () => {
  const [page, setPage] = useState("login");
  const [showSection, setShowSection] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSection(true), 500);
    return () => clearTimeout(timer);
  }, [page]);

  return (
    <div className="flex w-full h-screen items-center justify-center bg-white p-4">
      <div className="relative flex w-full max-w-4xl h-[500px] shadow-lg rounded-3xl overflow-hidden" style={{ backgroundColor: "#00bfa5" }}>

        {/* Sliding Layer */}
        <div className={`absolute h-full w-[70%] bg-[#d9d9d9] z-10 transition-transform duration-700 ${page === "login" ? "translate-x-0" : "translate-x-[43%]"}`}>
          <div className={`absolute bottom-0 w-[25%] transition-transform duration-1000 ${page === "login" ? "translate-x-0" : "translate-x-[300%] -scale-x-100"}`}>
            
          </div>
        </div>

        {/* Left Panel */}
        <div className={`flex flex-col items-center justify-center h-full z-20 transition-all duration-500 ${page === "login" ? "w-[70%]" : "w-[30%]"}`}>
          {page === "login" ? (
            showSection ? <LoginForm /> : null
          ) : (
            <SwitchPanel
              title="Welcome Back"
              text="Already have an account?"
              buttonLabel="Login"
              onClick={() => { setPage("login"); setShowSection(false); }}
            />
          )}
        </div>

        {/* Right Panel */}
        <div className={`flex flex-col items-center justify-center h-full z-20 transition-all duration-500 ${page === "signup" ? "w-[70%]" : "w-[30%]"}`}>
          {page === "signup" ? (
            showSection ? <SignupForm /> : null
          ) : (
            <SwitchPanel
              title="Hello Friend"
              text="Don't have an account?"
              buttonLabel="Sign Up"
              onClick={() => { setPage("signup"); setShowSection(false); }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
