import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";
import { loginUser } from "@/services/authService";
import Cookies from "js-cookie";

export default function LoginPage() {
 
  const router = useRouter();

  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    setLoginValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "bottom-center",
      duration: 3000,
    });
  const notifyError = (message) =>
    toast.error(message, { position: "bottom-center", duration: 3000 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(loginValues.email, loginValues.password)
        .then((res) => {
          if (!res.error) {
            notifySuccess("Login Successfull");
            setTimeout(() => {
              router.push("/");
            }, 3500);
            Cookies.set('token', JSON.stringify(token));
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
          notifyError(error.response.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <Navbar />
      <div className="w-full flex justify-center items-center max-w-sm p-4 my-20 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-indigo-900 dark:border-gray-700">
        <Toaster position="bottom-center" reverseOrder={false} />
        <form onSubmit={handleSubmit} className="space-y-6 w-3/4" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Freelancer'a Giriş Yapın
          </h5>
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
              placeholder="isim@mail.com"
              required
              value={loginValues.email}
              onChange={handleLogin}
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
              value={loginValues.password}
              onChange={handleLogin}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
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
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Oturumu Hatırla
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-lime-600 hover:underline dark:text-lime-600"
            >
              Şifremi Unuttum?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-lime-700 hover:bg-lime-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-700 dark:hover:bg-lime-900 dark:focus:ring-lime-900"
          >
            Giriş Yap
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Kayıtlı Değil misin?{" "}
            <Link
              href="/register"
              className="text-lime-600 hover:underline dark:text-lime-600"
            >
              Kaydol
            </Link>
          </div>
        </form>
      </div>

      <div className="w-full">
        {/* <section className="footer flex flex-col justify-start items-center bg-indigo-900 dark:bg-indigo-900 min-h-64 text-white p-2">
          <div className="f-top container mx-auto self-start w-full">
            <div className="nv-left m-0 p-0 flex flex-col justify-start items-baseline leading-none font-extrabold cursor-pointer text-3xl">
              <span className=" text-lime-500 border-b-2 border-white m-0 pb-0 pr-0 w-full flex justify-between items-end">
                Freelancer
                <span className="text-sm pl-5 text-white hidden md:block">
                  Binlerce iş ilanına kolayca göz atın ve sadece birkaç tıklama
                  ile başvurun. İş aramak hiç bu kadar kolay olmamıştı!
                </span>
              </span>
            </div>
          </div>

          <div className="f-bottom flex justify-between items-center w-full container mx-auto">
            <div className="f-bottom-left flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center">
              <span className="mr-4 cursor-pointer text-gray-500 font-bold hover:text-gray-400">
                Freelancer Hakkında
              </span>
              <span className="mr-4 cursor-pointer text-gray-500 font-bold hover:text-gray-400">
                Üyelik Sözleşmesi
              </span>
              <span className="mr-4 cursor-pointer text-gray-500 font-bold hover:text-gray-400">
                Kullanım Şartları
              </span>
              <span className="mr-4 cursor-pointer text-gray-500 font-bold hover:text-gray-400">
                Gizlilik ve Kişisel Verilerin Korunması Politikası
              </span>
            </div>
            <div className="f-bottom-right flex justify-center items-center">
              Freelancer A.Ş. © 2022
            </div>
          </div>
        </section> */}
        <Footer />
      </div>
    </div>
  );
}
