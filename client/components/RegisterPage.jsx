import React, { useState } from "react";
import Footer from "./Footer";
import { Lobster } from "next/font/google";
import Link from "next/link";
import { Flip, ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { registerUser } from "@/services/authService";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";
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
  const notify = (message) => toast(message);
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
              generateSuccess(res.message);
            } else {
              generateError(res.message);
            }
          }
        })
        .catch((err) => {
          generateError(err.response);
        });
    } catch (err) {
      console.log(err.response);
      generateError(err.response);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <Navbar />
      <div className="w-full flex justify-center items-center max-w-sm p-4 my-20 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-indigo-900 dark:border-gray-700">
        <form className="space-y-6 w-3/4" action="#">
          <h5
            onSubmit={handleSubmit}
            className="text-xl font-medium text-gray-900 dark:text-white"
          >
            Freelancer&apos;a Kaydolun
          </h5>
          <div>
            <div className="mr-2">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ad
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="bg-gray-50 border border-lime-700 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:text-indigo-900"
                placeholder="Ad"
                required
                value={registerValue.firstName}
                onChange={handleRegister}
              />
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Soyad
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="bg-gray-50 border border-lime-700 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:text-indigo-900"
                placeholder="Soyad"
                required
                value={registerValue.lastName}
                onChange={handleRegister}
              />
            </div>
          </div>
          {/* <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              E-Posta
            </label>
            <input
              type="username"
              name="username"
              id="username"
              className="bg-gray-50 border border-lime-700 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:text-indigo-900"
              placeholder="isim@mail.com"
              required
              value={registerValue.username}
              onChange={handleRegister}
            />
          </div> */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              E-Posta
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-lime-700 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:text-indigo-900"
              placeholder="mail@mail.com"
              required
              value={registerValue.email}
              onChange={handleRegister}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Şifre
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-lime-700 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:text-indigo-900"
              required
              value={registerValue.password}
              onChange={handleRegister}
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Şifreyi Onayla
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="••••••••"
              className="bg-gray-50 border border-lime-700 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:text-indigo-900"
              required
              value={registerValue.confirmPassword}
              onChange={handleRegister}
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-lime-700 hover:bg-lime-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-700 dark:hover:bg-lime-900 dark:focus:ring-lime-900"
          >
            Giriş Yap
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Kayıtlı mısın?{" "}
            <Link
              href="/login"
              className="text-lime-600 hover:underline dark:text-lime-600"
            >
              Giriş Yap
            </Link>
          </div>
        </form>
      </div>

      <div className="w-full">
        <Footer />
        <ToastContainer transition={Flip} autoClose={2000} />
      </div>
    </div>
  );
}
