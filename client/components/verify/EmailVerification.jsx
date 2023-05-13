import Link from "next/link";
import React from "react";

export default function EmailVerification() {
  return (
    <div className="w-full mt-20 flex justify-center items-center px-5">
      <section className="max-w-2xl w-full  px-6 py-8 mx-auto bg-white dark:bg-indigo-900 shadow-lg">
        <header>
          <Link href="/" className="text-lime-600 text-lg font-bold">
            FreelancerHub
          </Link>
        </header>
        <main className="mt-8">
          <h2 className="text-gray-700 dark:text-gray-200">
            Merhaba [Kullanıcı],
          </h2>
          <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300 flex justify-start items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-lime-500 w-16 h-16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              ></path>
            </svg>{" "}
            <span className="text-2xl font-bold text-lime-500">
              Email Onaylama İşlemin Başarılı.
            </span>
          </p>

          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300">
            Aramıza katıldığın için teşekkürler.
          </p>
        </main>
        <footer className="mt-8">
          <p className="text-gray-500 dark:text-gray-400">
            Bu tür bir e-posta almak istemiyorsanız, abonelikten çıkabilir veya
            e-posta tercihlerinizi yönetebilirsiniz. Bu e-posta,{" "}
            <Link
              href="#"
              className="text-lime-500 hover:underline "
              target="_blank"
            >
              itetisim@freelancerhub.com
            </Link>{" "}
            adresine gönderilmiştir. Bu tür bir e-posta almak istemiyorsanız,{" "}
            <Link href="#" className="text-lime-500 hover:underline ">
              abonelikten çıkabilir
            </Link>{" "}
            veya{" "}
            <Link href="#" className="text-lime-500 hover:underline ">
              e-posta tercihlerinizi
            </Link>{" "}
            yönetebilirsiniz.
          </p>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            ©{new Date().getFullYear()} <Link href={"/"} className="hover:text-lime-500 hover:underline"> FreelancerHub.</Link>{" "}
            All Rights Reserved.
          </p>
        </footer>
      </section>
    </div>
  );
}
