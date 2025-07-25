import React, { useState } from "react";
import GoogleLoginButton from "./GoogleLoginButton";

const SignupForm = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm p-4 gap-10">
      <h2 className="text-2xl font-bold mb-4 text-center py-8">Sign Up</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        required
        value={form.username}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded-2xl h-13 bg-white"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded-2xl h-13 bg-white"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        value={form.password}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded-2xl h-13 bg-white"
      />

      <div className="flex justify-center">
        <button
          type="submit"
          className="w-50% bg-blue-500 hover:bg-green-600 text-white p-2 rounded"
        >
          Sign Up
        </button>
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

export default SignupForm;
