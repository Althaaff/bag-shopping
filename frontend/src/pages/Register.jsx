import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/bags /login.webp";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user register with", username, email, password);
  };

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:p-12 p-6">
        <form onSubmit={handleSubmit}>
          <div className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
            <div className="flex justify-center mb-6">
              <h2 className="text-xl font-bold">Rabbit</h2>
            </div>
            <h2 className="text-2xl font-bold text-center mb-6">
              Hey there! 👋
            </h2>
            <p className="text-center font-medium mb-6">
              Enter your email and password to Register..
            </p>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your name.."
                value={username}
                className="w-full p-2 border rounded"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email.."
                value={email}
                className="w-full p-2 border rounded"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password.."
                value={password}
                className="w-full p-2 border rounded"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Sign Up
            </button>
            <p className="mt-6 text-center text-sm">
              Already have and account?{" "}
              <Link to={"/login"} className="text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={loginImg}
            alt="Login to account"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
//
