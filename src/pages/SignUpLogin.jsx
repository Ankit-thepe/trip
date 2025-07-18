import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginPageCar from "../assets/animations/loginPageCar.json"
import { loginAPi } from "../lib/api ";

const SignupLoginPage = () => {
  const [page, setPage] = useState("login");
  const [showSection, setShowSection] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSection(true);
    }, 500); 
    return () => clearTimeout(timer); 
  },[showSection]);

  return (
    <div className="flex w-full h-screen items-center justify-center overflow-scroll  p-10">
      <div className="h-dvh w-dvw flex  rounded-lg shadow-lg shadow overflow-hidden bg-green-400 relative max-h-[600px] max-w-[1200px] ">
        <div
          className={`h-full w-[70%] bg-gray-200 absolute transition-transform duration-700 ease-in-out z-10 ${page === "login"
              ? "translate-x-0"
              : "translate-x-[43%]"
            }`}>
              <div className={`w-[25%] bottom-0 absolute transition-all duration-1000 ease-in-out t ${page === "login" ? "translate-x-0" : "translate-x-[300%]"} `}>
              <Lottie
                animationData={loginPageCar}
                className={`w-full transition-all duration-200 ease-in-out ${page === "login" ? " scale-100" : " -scale-x-100"} `}
                loop={true}
                />
              </div>
        </div>


        <div
          className={`flex flex-col items-center justify-center h-full rounded-l-lg transition-all duration-500 ease-in-out z-20 ${page === "login" ? "w-[70%]" : "w-[30%]"} `}
        >
          {page === "login" ?  showSection ? <LoginSection /> : null : (
          <div className="flex flex-col items-center justify-center h-full text-white">
          <div className="m-2 text-xl font-bold">Welcome Back</div>
          <p className="mb-4">Already have an account ?</p>
          <button
            className={`px-6 py-2 rounded-lg border bg-blue-500 text-white font-semibold hover:bg-blue-600  `}
            onClick={() => {setPage("login");  setShowSection(false)}}
          >
            Login
          </button>
          </div>
          )}
        </div>


        <div
          className={`flex flex-col items-center justify-center h-full rounded-r-lg transition-all duration-500 ease-in-out z-20 ${page === "signup" ? "w-[70%]" : "w-[30%]"}`}
        >
          {page === "signup" ? showSection ? <SignupSection />: null : (
          <div className="flex flex-col items-center justify-center h-full text-white">
          <div className="m-2 text-xl font-bold">Care your Veh</div>
          <p className="mb-4">Don't have an account ?</p>
          <button
            className={`px-6 py-2 rounded-lg border bg-blue-500 text-white font-semibold hover:bg-blue-600 transition `}
            onClick={() => {setPage("signup"); setShowSection(false)}}
          >
            Sign Up
          </button>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  
  const loginMutation = useMutation({
    mutationFn: loginAPi({ input: email , password }),
    onSuccess: (data) => {
      // Store token and user data
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userType', data.usertype);
      localStorage.setItem('username', data.username);
      localStorage.setItem('email', data.email);
      
      // Invalidate and refetch user data
      queryClient.invalidateQueries({ queryKey: ['user'] });
      
      // Navigate to home
      navigate('/');
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    loginMutation.mutate({ input: email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full popup">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="w-full max-w-sm" onSubmit={handleLogin}>
        {loginMutation.error && (
          <div className="w-full p-2 mb-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {loginMutation.error?.response?.data?.message || 'Login failed. Please check your credentials.'}
          </div>
        )}
        <input
          type="text"
          placeholder="Email or Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          disabled={loginMutation.isPending}
          className={`w-full p-2 rounded transition ${
            loginMutation.isPending 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
        >
          {loginMutation.isPending ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

const SignupSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full popup transition-all duration-500">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <form className="w-full max-w-sm"> 
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupLoginPage;