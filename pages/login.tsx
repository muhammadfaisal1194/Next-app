import axios from "axios";
import React, { useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e: any): void => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("response", response.data);
        setCookie("token", response.data.token);
        // router.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h1 className="flex text-lg font-bold py-3">Login</h1>
      <form className="px-10 md:w-[50vw]" onSubmit={submitHandler}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e): void => {
              setEmail(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="xyz@gmail.com"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Your password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e): void => {
              setPassword(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label className="ml-2 text-sm font-medium text-gray-900">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>

        <div className="pt-4 text-center">
          if have dont have accout{" "}
          <span className="text-blue-500 cursor-pointer">Create Account</span>
        </div>
      </form>
    </div>
  );
};

Login.layout = "empty";
export default Login;
