import React from "react";
import googleIcon from "../../assets/images/google.jpg"; // Replace with your Google icon path

const GoogleLoginButton = () => {
  const handleClick = () => {
    window.open("https://www.google.com/", "_blank");
  };
  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center w-65 h-10 mx-auto mt-4 bg-white text-gray-700 border border-gray-300 rounded-4xl shadow hover:shadow-md hover:bg-gray-100 transition"
    >
      <img src={googleIcon} alt="Google" className="w-5 h-5 mr-3" />
      <span className="text-sm font-medium">Continue with Google</span>
    </button>
  );
};

export default GoogleLoginButton;
