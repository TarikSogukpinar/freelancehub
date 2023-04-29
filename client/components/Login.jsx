import React, { useState } from "react";
import Footer from "./Footer";
import Link from "next/link";
import { Button } from "@mui/base";
import { Lobster } from "next/font/google";
const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export default function LoginPage() {
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    setLoginValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(loginValues);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="header p-5 shadow-lg bg-[#e3e6eb] slate-indigo-500/40 fixed top-0 w-full">
        <div className="nv-left m-0 p-0 flex flex-col justify-center items-center leading-none font-extrabold cursor-pointer text-3xl">
          <Link
            href={"/"}
            className=" text-red-600 m-0 pb-0 pr-0 w-full flex justify-center items-center"
          >
            Freelancer
          </Link>
        </div>
      </div>
      <div className="main flex flex-col justify-center items-center h-screen w-1/2">
      <h1
          className={`${lobster.className} mb-5 text-2xl md:text-4xl text-center`}
        >
          Üye Kayıt Sayfası
        </h1>
        <form className="w-full md:w-2/4">
          <div className="mb-6">
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
              value={loginValues.email}
              onChange={handleLogin}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Şifre"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={loginValues.password}
              onChange={handleLogin}
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

          <Link
            className="text-white font-bold bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:outline-none focus:ring-blue-300 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex flex-center justify-center"
            href={"/register"}
          >
            Kayıt Ol
          </Link>
          <div className="py-4 w-full flex justify-center">
            <Button
              type="submit"
              className="font-bold bg-red-600 px-5 py-2.5 w-full flex justify-center text-center text-white"
            >
              Giriş Yap
            </Button>
          </div>
        </form>
      </div>
      <div className="l-footer w-full">
        <Footer />
      </div>
    </div>
  );
}
