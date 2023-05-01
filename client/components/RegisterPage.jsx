import React, { useState } from "react";
import Footer from "./Footer";
import { Lobster } from "next/font/google";
import Link from "next/link";
import axios from "axios";
import { Flip, ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { registerUser } from "@/services/authService";
const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export default function RegisterPage() {
  const router = useRouter();
  const [registerValue, setRegisterValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [response, setResponse] = useState();

  const generateError = (err) => toast.error(err, { position: "bottom-right" });
  const generateSuccess = (message) =>
    toast.success(message, { position: "bottom-right" });

  const handleRegister = (e) => {
    setRegisterValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(
        registerValue.firstName,
        registerValue.lastName,
        registerValue.email,
        registerValue.password,
        registerValue.confirmPassword
      )
        .then((res) => {
          if (res.data) {
            if (!res.data.error) {
              router.push("/login");
              generateSuccess(res);
            } else {
              generateError(res);
            }
          }
        })
        .catch((err) => {
          generateError(err.response);
        });

      // const { data } = await axios.post("/api/register", {
      //   email: registerValue.email,
      //   password: registerValue.password,
      //   firstName: registerValue.firstName,
      //   lastName: registerValue.lastName,
      // });
      // if (data) {
      //   if (!data.error) {
      //     router.push("/login");
      //     generateSuccess(data.message);
      //   } else {
      //     generateError(data.message);
      //   }
      // }
    } catch (err) {
      console.log(err.response);
      generateError(err.response);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="header p-5 shadow-lg bg-[#e3e6eb] slate-indigo-500/40 fixed top-0 w-full">
        <div className="nv-left m-0 p-0 flex flex-col justify-center items-center leading-none font-extrabold cursor-pointer text-3xl">
          <span className=" text-red-600 m-0 pb-0 pr-0 w-full flex justify-center items-center">
            Freelancer
          </span>
        </div>
      </div>
      <div className="main flex flex-col justify-center items-center h-screen w-1/2">
        <h1
          className={`${lobster.className} mb-5 text-2xl md:text-4xl text-center`}
        >
          Üye Kayıt Sayfası
        </h1>
        <form className="w-full md:w-2/4" onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-6 flex justify-between">
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
              placeholder="Ad"
              onChange={handleRegister}
              value={registerValue.firstName}
              required
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Soyad"
              onChange={handleRegister}
              value={registerValue.lastName}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
              onChange={handleRegister}
              value={registerValue.email}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Şifre"
              required
              onChange={handleRegister}
              value={registerValue.password}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Şifreni Doğrula"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={handleRegister}
              value={registerValue.confirmPassword}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Kayıt Ol
          </button>
          <Link
            href={"/login"}
            className="font-bold bg-red-600 mt-4 px-5 py-2.5 w-full flex justify-center text-center text-white"
          >
            Giriş Yap
          </Link>
        </form>
      </div>
      <div className="l-footer w-full hidden lg:block">
        <Footer />
      </div>
      <ToastContainer transition={Flip} autoClose={2000} />
    </div>
  );
}
