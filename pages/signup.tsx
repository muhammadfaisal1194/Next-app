import React, { useState } from "react";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (): void => {
    console.log({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
  };
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h1 className="flex text-lg font-bold py-3">Signup</h1>
      <form className="px-10 md:w-[50vw]" onSubmit={submitHandler}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e): void => {
              setFirstName(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="First Name"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Last Name
          </label>
          <input
            type="text"
            id="firstName"
            value={lastName}
            onChange={(e): void => {
              setLastName(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Last Name"
            required
          />
        </div>
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
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Signup
        </button>

        <div className="pt-4 text-center ">
          if have already accout{" "}
          <span className="text-blue-500 cursor-pointer">Login</span>
        </div>
      </form>
    </div>
  );
};

Signup.layout = "empty";
export default Signup;
