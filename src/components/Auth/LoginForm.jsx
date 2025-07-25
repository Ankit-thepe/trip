import React, { useState } from "react";
import GoogleLoginButton from "./GoogleLoginButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm p-4 gap-10">
      <h2 className="text-2xl font-bold mb-4 text-center py-8">Login</h2>
      <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-4 p-2 border rounded-2xl h-13 bg-white " />
      <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mb-4 p-2 border rounded-2xl h-13 bg-white" />
      <div  className="flex justify-center">
         <button type="submit" className="w-50% bg-blue-500 hover:bg-green-600 text-white p-2 rounded ">Login</button>
      </div>
      <div>
        <div className="flex items-center bg-{#dfdfdf} p-2">
           <div className="flex-grow h-px bg-black"></div>
           <span className="px-4 text-black font-medium">Or</span>
           <div className="flex-grow h-px bg-black"></div>
        </div>
      </div>
      <GoogleLoginButton />

    </form>
  );
};

export default LoginForm;
