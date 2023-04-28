import React from "react";
import Footer from "./Footer";

export default function RegisterPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="header p-5 shadow-lg bg-[#e3e6eb] slate-indigo-500/40 fixed top-0 w-full">
        <div className="nv-left m-0 p-0 flex flex-col justify-center items-center leading-none font-extrabold cursor-pointer text-3xl">
          <span className=" text-red-600 m-0 pb-0 pr-0 w-full flex justify-center items-center">
            Freelancer
          </span>
        </div>
      </div>
      <div className="main flex justify-center items-center h-screen w-1/2">
        <form className="w-full md:w-2/4">
          <div className="mb-6">
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              placeholder="Şifre"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                defaultValue
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Oturumu hatırla
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Giriş Yap
          </button>
        </form>
      </div>
      <div className="l-footer w-full hidden lg:block">
        <Footer />
      </div>
    </div>
  );
}
