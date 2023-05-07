import Head from "next/head";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import Footer from "./Footer";
import Image from "next/image";
import Link from "next/link";
import Stars from "./Stars";
import Context from "../context/context";

export default function HomePage({ cookies }) {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Minimal Logo Tasarımı Yapabilirim.",
      img: "/images/placeholder-1.jpg",
      stars: {
        isItStarry: true,
        point: 5.0,
      },
      category: "Logo Tasarımı",
      username: "designerX",
      price: "199.90",
      currency: "TL",
      isFeatured: false,
    },
    {
      id: 2,
      title: "Frontend işlerinizi yapabilirim",
      img: "/images/placeholder-2.jpg",
      stars: {
        isItStarry: false,
        point: 0.0,
      },
      category: "Yazılım",
      username: "yazilimcikafasi",
      price: "980.00",
      currency: "TL",
      isFeatured: true,
    },
    {
      id: 3,
      title: "Sosyal medya düzenlemelerinizi yapabilirim.",
      img: "/images/placeholder-3.jpg",
      stars: {
        isItStarry: true,
        point: 3.9,
      },
      category: "Sosyal Medya",
      username: "socialNGX",
      price: "299.90",
      currency: "TL",
      isFeatured: true,
    },
  ]);
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      category: "Tutorial",
      title: "How to quickly deploy a static website",
      description:
        "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
      name: "Jese Leos",
      image: "/images/placeholder-1.jpg",
      time: 14,
      icon: (
        <svg
          className="mr-1 w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
      ),
    },
    {
      id: 2,
      category: "Article",
      title: "Our first project with React",
      description:
        "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
      name: "Bonnie Green",
      image: "/images/placeholder-2.jpg",
      time: 7,

      icon: (
        <svg
          className="mr-1 w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
            clipRule="evenodd"
          />
          <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
        </svg>
      ),
    },
  ]);

  return (
    <div>
      <Head>
        <title>
          FreelancerHub - İş verenler ile iş arayanların ortak platformu
        </title>
        <meta name="description" content="Freelancer HomePage" />
      </Head>
      <Navbar cookies={cookies} />
      <main>
        <section className="m-0 p-0">
          <div className="px-6 py-16 w-full flex flex-col justify-center items-center">
            <div className="section-top mb-16 flex flex-col justify-start items-center w-3/4">
              <h2 className="text-4xl font-bold my-4">Son İlanlar</h2>
              <p className="text-xl text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="text-xl text-center">
                Repudiandae, ex consequuntur voluptatibus atque, culpa
                consectetur error sint omnis similique sunt sed necessitatibus
                eos aut optio veniam dolorem. Facilis, rerum accusantium!
              </p>
            </div>
            <div className="cards flex flex-col md:flex-row justify-evenly">
              {cards.map((card) => {
                return (
                  <div
                    key={card.id}
                    className="flex flex-col w-full min-h-max max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-indigo-900 m-2"
                  >
                    <Link href="#" className="relative">
                      <Image
                        className=" rounded-t-lg"
                        src={card.img}
                        alt={card.title}
                        width={600}
                        height={400}
                        priority
                      />
                      <div
                        className={
                          card.stars.isItStarry
                            ? "flex items-center absolute bottom-1 left-1 bg-white p-2 rounded-lg"
                            : "hidden"
                        }
                      >
                        <Stars point={card.stars.point} />

                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                          {card.stars.point}
                        </span>
                      </div>
                      <div
                        className={
                          card.isFeatured
                            ? "flex absolute bottom-1 right-0 p-2 bg-lime-700 text-white border-t border-l border-b rounded-l-lg font-bold text-sm"
                            : "hidden"
                        }
                      >
                        Öne Çıkan
                      </div>
                    </Link>
                    <div className="p-5 h-full flex flex-col justify-between items-between">
                      <div>
                        <Link href={"/"}>
                          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {card.title}
                          </h5>
                        </Link>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white flex flex-col">
                          <Link href={"/"} className="text-sm text-lime-600">
                            {card.username}
                          </Link>
                          <span>
                            {card.price} {card.currency}
                          </span>
                        </span>
                        <Link
                          href="#"
                          className="text-white bg-lime-700 hover:bg-lime-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-700 dark:hover:bg-lime-900 dark:focus:ring-blue-800"
                        >
                          Hemen İncele
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-white">
          <div className="flex justify-center items-center lg:grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className=" place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-indigo-900">
                Şirketler İçin Serbest Çalışanlar
              </h1>
              <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores eaque, laudantium, harum commodi, fugit quaerat
                suscipit vero beatae velit nesciunt fuga repellendus culpa!
                Dolorum porro est distinctio dolor perspiciatis numquam?
              </p>
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base text-center text-indigo-900 font-extrabold rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Hemen Başlayın
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-5 py-3 text-base text-center text-indigo-900 border border-indigo-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-indigo-900 font-bold hover:dark:text-white dark:border-indigo-900 dark:hover:bg-indigo-900 dark:focus:ring-gray-800"
              >
                Freelancerlar ile konuşun
              </Link>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image
                src="/images/hero-1.png"
                alt="mockup"
                className="drop-shadow-md "
                width={600}
                height={400}
                priority
              />
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-indigo-900">
                Our Blog
              </h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-black">
                We use an agile approach to test assumptions and connect with
                the needs of your audience early and often.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {blogPosts.map((blog) => {
                return (
                  <article
                    key={blog.id}
                    className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-indigo-900 dark:border-lime-700"
                  >
                    <div className="flex justify-between items-center mb-5 text-gray-500">
                      <span className="bg-primary-100 text-lime-500 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                        {blog.icon}
                        {blog.category}
                      </span>
                      <span className="text-sm text-lime-500">
                        {blog.time} days ago
                      </span>
                    </div>
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <Link href="/"> {blog.title}</Link>
                    </h2>
                    <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                      {blog.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <Image
                          className="w-7 h-7 rounded-full"
                          src="/images/placeholder-2.jpg"
                          alt="Jese Leos avatar"
                          width={30}
                          height={30}
                        />
                        <span className="font-medium dark:text-white">
                          {blog.name}
                        </span>
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center font-medium text-white dark:text-primary-500 hover:underline"
                      >
                        Read more
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
