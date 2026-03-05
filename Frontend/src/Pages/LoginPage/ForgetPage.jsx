import React, { useState } from "react";
import TopHeading from "./TopHeading";

const ForgetPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Reset password request:", usernameOrEmail);
  };

  return (
    <>
      <TopHeading />
      <section className="w-full   py-12 px-4">
        <div className="">
          <p className="text-lg text-gray-600 leading-relaxed">
            Lost your password? Please enter your username or email address. You
            will receive a link to create a new password via email.
          </p>

          <form onSubmit={handleSubmit} className=" flex flex-col  mt-8">
            <label
              htmlFor="usernameOrEmail"
              className="block text-base font-medium text-gray-800"
            >
              Username or email <span className="text-red-500">*</span>
            </label>

            <input
              id="usernameOrEmail"
              type="text"
              value={usernameOrEmail}
              onChange={(event) => setUsernameOrEmail(event.target.value)}
              required
              className="mt-2 w-full border md:w-[50%] border-gray-300 rounded-md bg-white px-4 py-2 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="mt-6 max-w-[12rem] bg-blue-900 hover:opacity-90 transition text-white text-base font-semibold px-6 py-2 rounded-md"
            >
              Reset Password
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ForgetPage;
